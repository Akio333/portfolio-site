# Graph Report - portfolio-site  (2026-09-24)

## Corpus Check
- 23 files · ~378,863 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 92 nodes · 103 edges · 10 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6373399b`
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
2. `getNodes()` - 7 edges
3. `Suyog Mule portfolio: Developer IDE` - 7 edges
4. `Image generation prompts` - 6 edges
5. `scripts` - 5 edges
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
Cohesion: 0.18
Nodes (9): astro:transitions/client, ../components/posthog.astro, ../layouts/Layout.astro, current, pathParts, posthogEnabled, highlightJson(), ../scripts/extensionVersions (+1 more)

### Community 1 - "dependencies"
Cohesion: 0.22
Nodes (9): astro, @fontsource/jetbrains-mono, dependencies, astro, @fontsource/jetbrains-mono, posthog-js, zod, posthog-js (+1 more)

### Community 2 - "package.json"
Cohesion: 0.18
Nodes (10): engines, node, name, scripts, astro, build, dev, preview (+2 more)

### Community 3 - "extensionVersions.ts"
Cohesion: 0.29
Nodes (10): fetchGithubVersion(), fetchMarketplaceVersions(), formatVersion(), getGithubVersion(), getMarketplaceVersions(), GithubReleaseResponse, githubRequests, marketplaceRequests (+2 more)

### Community 4 - "Suyog’s portfolio"
Cohesion: 0.17
Nodes (10): Don'ts, Interaction, Layout, Nodes, Suyog Mule portfolio: Developer IDE, Tokens, Where things live, Development (+2 more)

### Community 5 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 6 - "content.config.ts"
Cohesion: 0.29
Nodes (4): collections, experienceCollection, extensionsCollection, projectsCollection

### Community 7 - "Image generation prompts"
Cohesion: 0.29
Nodes (6): Editorial hero portrait, Hero sculpture, Image generation prompts, OG image, Transparent hero edit, Transparent hero portrait cutout

### Community 8 - "CustomPointer.astro"
Cohesion: 0.21
Nodes (13): base(), camel(), getNodes(), Job, node(), NodeBase, PortfolioNode, profile (+5 more)

## Knowledge Gaps
- **46 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../layouts/Layout.astro` connect `../components/ProjectList.astro` to `CustomPointer.astro`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._