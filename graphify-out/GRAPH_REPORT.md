# Graph Report - portfolio-site  (2026-09-24)

## Corpus Check
- 24 files · ~348,547 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 106 nodes · 116 edges · 10 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `91b1fbfd`
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
- CustomPointer.astro

## God Nodes (most connected - your core abstractions)
1. `../layouts/Layout.astro` - 14 edges
2. `Suyog Mule portfolio: Developer IDE` - 8 edges
3. `getNodes()` - 7 edges
4. `scripts` - 6 edges
5. `Image generation prompts` - 5 edges
6. `profile` - 3 edges
7. `PortfolioNode` - 3 edges
8. `formatVersion()` - 3 edges
9. `fetchMarketplaceVersions()` - 3 edges
10. `fetchGithubVersion()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `getStaticPaths()` --calls--> `getNodes()`  [EXTRACTED]
  src/pages/[...path].astro → src/lib/portfolio.ts

## Import Cycles
- None detected.

## Communities (10 total, 0 thin omitted)

### Community 0 - "../components/ProjectList.astro"
Cohesion: 0.20
Nodes (7): chrome, header, root, shot, sizes, squareSvg, svg

### Community 1 - "dependencies"
Cohesion: 0.22
Nodes (9): astro, @fontsource/jetbrains-mono, dependencies, astro, @fontsource/jetbrains-mono, posthog-js, zod, posthog-js (+1 more)

### Community 2 - "package.json"
Cohesion: 0.13
Nodes (14): devDependencies, sharp, engines, node, name, scripts, astro, brand (+6 more)

### Community 3 - "extensionVersions.ts"
Cohesion: 0.29
Nodes (10): fetchGithubVersion(), fetchMarketplaceVersions(), formatVersion(), getGithubVersion(), getMarketplaceVersions(), GithubReleaseResponse, githubRequests, marketplaceRequests (+2 more)

### Community 4 - "Suyog’s portfolio"
Cohesion: 0.15
Nodes (11): Don'ts, Icon and OG image, Interaction, Layout, Nodes, Suyog Mule portfolio: Developer IDE, Tokens, Where things live (+3 more)

### Community 5 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 6 - "content.config.ts"
Cohesion: 0.29
Nodes (4): collections, experienceCollection, extensionsCollection, projectsCollection

### Community 7 - "Image generation prompts"
Cohesion: 0.33
Nodes (5): Editorial hero portrait, Hero sculpture, Image generation prompts, Transparent hero edit, Transparent hero portrait cutout

### Community 8 - "CustomPointer.astro"
Cohesion: 0.12
Nodes (22): astro:transitions/client, ../components/posthog.astro, ../layouts/Layout.astro, current, pathParts, posthogEnabled, base(), camel() (+14 more)

## Knowledge Gaps
- **55 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+50 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `CustomPointer.astro` be split into smaller, more focused modules?**
  _Cohesion score 0.11692307692307692 - nodes in this community are weakly interconnected._