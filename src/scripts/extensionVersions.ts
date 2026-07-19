type MarketplaceResponse = {
  results?: Array<{
    extensions?: Array<{
      extensionName?: string;
      publisher?: { publisherName?: string };
      versions?: Array<{ version?: string }>;
    }>;
  }>;
};

type GithubReleaseResponse = {
  tag_name?: string;
};

const MARKETPLACE_API =
  'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery';
const marketplaceRequests = new Map<string, Promise<Map<string, string>>>();
const githubRequests = new Map<string, Promise<string | null>>();

function formatVersion(version: string | undefined) {
  if (!version) return null;

  const normalizedVersion = version.trim().replace(/^v/i, '');
  return normalizedVersion ? `v${normalizedVersion}` : null;
}

async function fetchMarketplaceVersions(extensionIds: string[]) {
  const response = await fetch(MARKETPLACE_API, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      Accept: 'application/json; charset=utf-8; api-version=7.2-preview.1',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filters: extensionIds.map((extensionId) => ({
        criteria: [{ filterType: 7, value: extensionId }],
      })),
      flags: 914,
    }),
  });

  if (!response.ok) return new Map<string, string>();

  const data = (await response.json()) as MarketplaceResponse;
  const versions = new Map<string, string>();

  data.results?.forEach((result) => {
    result.extensions?.forEach((extension) => {
      const publisher = extension.publisher?.publisherName;
      const extensionName = extension.extensionName;
      const version = formatVersion(extension.versions?.[0]?.version);

      if (publisher && extensionName && version) {
        versions.set(`${publisher}.${extensionName}`.toLowerCase(), version);
      }
    });
  });

  return versions;
}

async function fetchGithubVersion(repository: string) {
  const response = await fetch(
    `https://api.github.com/repos/${repository}/releases/latest`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as GithubReleaseResponse;
  return formatVersion(data.tag_name);
}

function getMarketplaceVersions(extensionIds: string[]) {
  if (extensionIds.length === 0) return Promise.resolve(new Map<string, string>());

  const requestKey = extensionIds.map((id) => id.toLowerCase()).sort().join(',');
  let request = marketplaceRequests.get(requestKey);
  if (!request) {
    request = fetchMarketplaceVersions(extensionIds).catch(() => new Map());
    marketplaceRequests.set(requestKey, request);
  }
  return request;
}

function getGithubVersion(repository: string) {
  let request = githubRequests.get(repository);
  if (!request) {
    request = fetchGithubVersion(repository).catch(() => null);
    githubRequests.set(repository, request);
  }
  return request;
}

export async function refreshExtensionVersions() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>('[data-extension-version]'),
  );
  const extensionIds = [
    ...new Set(
      elements
        .map(({ dataset }) => dataset.marketplaceId)
        .filter((id): id is string => Boolean(id)),
    ),
  ];
  const marketplaceVersions = await getMarketplaceVersions(extensionIds);

  await Promise.all(
    elements.map(async (element) => {
      const extensionId = element.dataset.marketplaceId;
      const repository = element.dataset.githubRepo;
      let version = extensionId
        ? marketplaceVersions.get(extensionId.toLowerCase())
        : undefined;

      if (!version && repository) version = (await getGithubVersion(repository)) ?? undefined;
      if (version) element.textContent = version;
    }),
  );
}

if (typeof document !== 'undefined') {
  document.addEventListener('astro:page-load', () => {
    void refreshExtensionVersions();
  });
}
