# Graph Report - portfolio-site  (2026-09-11)

## Corpus Check
- 29 files · ~76,757 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 94 nodes · 95 edges · 12 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `62a29647`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ../components/ProjectList.astro
- dependencies
- package.json
- extensionVersions.ts
- Suyog’s portfolio
- tsconfig.json
- content.config.ts
- Image generation prompts

## God Nodes (most connected - your core abstractions)
1. `../components/ProjectList.astro` - 8 edges
2. `../layouts/Layout.astro` - 8 edges
3. `scripts` - 5 edges
4. `Suyog’s portfolio` - 4 edges
5. `Image generation prompts` - 4 edges
6. `formatVersion()` - 3 edges
7. `fetchMarketplaceVersions()` - 3 edges
8. `fetchGithubVersion()` - 3 edges
9. `getMarketplaceVersions()` - 3 edges
10. `getGithubVersion()` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (12 total, 0 thin omitted)

### Community 0 - "../components/ProjectList.astro"
Cohesion: 0.14
Nodes (10): ../components/posthog.astro, ../components/ProjectList.astro, order, string, ../layouts/Layout.astro, experience, ../../public/images/developer-portrait.webp, ../../public/images/developer-workspace.webp (+2 more)

### Community 1 - "dependencies"
Cohesion: 0.12
Nodes (17): astro, @fontsource/inter, @fontsource/jetbrains-mono, @fontsource-variable/geist, dependencies, astro, @fontsource/inter, @fontsource/jetbrains-mono (+9 more)

### Community 2 - "package.json"
Cohesion: 0.18
Nodes (10): engines, node, name, scripts, astro, build, dev, preview (+2 more)

### Community 3 - "extensionVersions.ts"
Cohesion: 0.29
Nodes (10): fetchGithubVersion(), fetchMarketplaceVersions(), formatVersion(), getGithubVersion(), getMarketplaceVersions(), GithubReleaseResponse, githubRequests, marketplaceRequests (+2 more)

### Community 4 - "Suyog’s portfolio"
Cohesion: 0.22
Nodes (7): Direction, Identity assets, References, Suyog’s portfolio, Development, Editing the site, Suyog Mule's portfolio

### Community 5 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 6 - "content.config.ts"
Cohesion: 0.29
Nodes (4): collections, experienceCollection, extensionsCollection, projectsCollection

### Community 7 - "Image generation prompts"
Cohesion: 0.40
Nodes (4): Hero sculpture, Image generation prompts, OG image, Transparent hero edit

## Knowledge Gaps
- **43 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+38 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _43 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `../components/ProjectList.astro` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._