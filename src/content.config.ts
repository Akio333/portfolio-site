import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    period: z.string(),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    highlights: z.array(z.string()).optional(),
    company: z.string().optional(),
    imageUrl: z.string().optional(),
  }),
});

import type { Loader } from 'astro/loaders';
import fs from 'node:fs';
import path from 'node:path';

async function fetchMarketplaceData(extensionId: string) {
  const url = 'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery';
  const body = {
    filters: [
      {
        criteria: [
          {
            filterType: 7, // Query by Extension Name
            value: extensionId
          }
        ]
      }
    ],
    flags: 914 // Includes versions and statistics
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json; charset=utf-8; api-version=7.2-preview.1'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Marketplace API returned status ${response.status}`);
  }

  const data = await response.json() as any;
  const extension = data.results?.[0]?.extensions?.[0];
  if (!extension) {
    return null;
  }

  const description = extension.shortDescription || '';
  const version = extension.versions?.[0]?.version ? `v${extension.versions[0].version}` : '';
  const stats = extension.statistics || [];
  const installsStat = stats.find((s: any) => s.statisticName === 'install');
  const installs = installsStat ? String(installsStat.value) : '';

  return {
    description,
    version,
    installs
  };
}

async function fetchGithubData(repoPath: string) {
  const repoUrl = `https://api.github.com/repos/${repoPath}`;
  const response = await fetch(repoUrl, {
    headers: {
      'User-Agent': 'Astro-Portfolio-Builder'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned status ${response.status}`);
  }

  const repoData = await response.json() as any;
  const description = repoData.description || '';

  // Get version from latest release or package.json
  let version = '';
  try {
    const releaseUrl = `https://api.github.com/repos/${repoPath}/releases/latest`;
    const relResponse = await fetch(releaseUrl, {
      headers: {
        'User-Agent': 'Astro-Portfolio-Builder'
      }
    });
    if (relResponse.ok) {
      const relData = await relResponse.json() as any;
      version = relData.tag_name || '';
    }
  } catch (err) {
    // Ignore and fallback
  }

  if (!version) {
    for (const branch of ['main', 'master']) {
      try {
        const pkgUrl = `https://raw.githubusercontent.com/${repoPath}/${branch}/package.json`;
        const pkgResponse = await fetch(pkgUrl);
        if (pkgResponse.ok) {
          const pkgData = await pkgResponse.json() as any;
          if (pkgData.version) {
            version = `v${pkgData.version}`;
            break;
          }
        }
      } catch (err) {
        // Try next
      }
    }
  }

  return {
    description,
    version,
    installs: ''
  };
}

const extensionsCollection = defineCollection({
  loader: {
    name: 'extensions-loader',
    load: async ({ store, logger }) => {
      const dirPath = path.resolve('./src/content/extensions');
      if (!fs.existsSync(dirPath)) {
        logger.warn(`Extensions directory not found at ${dirPath}`);
        return;
      }

      const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.json'));
      store.clear();

      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const rawData = JSON.parse(fileContent);

        let description = '';
        let version = '';
        let installs = '';

        let extensionId = '';
        if (rawData.marketplaceUrl) {
          const match = rawData.marketplaceUrl.match(/itemName=([^&]+)/);
          if (match) {
            extensionId = match[1];
          }
        }

        let fetchedFromMarketplace = false;
        if (extensionId) {
          try {
            logger.info(`Fetching marketplace data for ${extensionId}...`);
            const mpData = await fetchMarketplaceData(extensionId);
            if (mpData) {
              description = mpData.description;
              version = mpData.version;
              installs = mpData.installs;
              fetchedFromMarketplace = true;
              logger.info(`Successfully loaded data for ${extensionId} from VS Code Marketplace`);
            }
          } catch (err) {
            logger.error(`Error fetching marketplace data for ${extensionId}: ${err}`);
          }
        }

        if (!fetchedFromMarketplace && rawData.githubUrl) {
          const repoMatch = rawData.githubUrl.match(/github\.com\/([^/]+\/[^/]+)/);
          if (repoMatch) {
            const repoPath = repoMatch[1];
            try {
              logger.info(`Fetching GitHub data for ${repoPath}...`);
              const ghData = await fetchGithubData(repoPath);
              if (ghData) {
                description = ghData.description || description;
                version = ghData.version || version;
                logger.info(`Successfully loaded data for ${repoPath} from GitHub`);
              }
            } catch (err) {
              logger.error(`Error fetching GitHub data for ${repoPath}: ${err}`);
            }
          }
        }

        // Fallbacks if fetching failed
        description = description || rawData.description || 'Developer tooling for Adobe Experience Manager.';
        version = version || rawData.version || 'v0.1.0';

        if (installs) {
          const count = parseInt(installs, 10);
          if (!isNaN(count)) {
            if (count >= 1000) {
              installs = `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k+ Installs`;
            } else {
              installs = `${count} Installs`;
            }
          } else {
            installs = `${installs} Installs`;
          }
        } else {
          installs = rawData.installs || '0 Installs';
        }

        const id = path.basename(file, '.json');
        store.set({
          id,
          data: {
            ...rawData,
            description,
            version,
            installs
          }
        });
      }
    }
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    installs: z.string(),
    version: z.string(),
    marketplaceUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    icon: z.string(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    color: z.enum(['primary', 'secondary', 'tertiary', 'accent']).default('primary'),
  }),
});

export const collections = {
  projects: projectsCollection,
  extensions: extensionsCollection,
  experience: experienceCollection,
};
