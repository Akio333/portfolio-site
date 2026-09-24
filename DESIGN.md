# Suyog Mule portfolio: Developer IDE

The portfolio is presented as an AEM repository open in a CRXDE-like editor. Each part of the CV is a JCR node under `/content/suyog-mule`, and each node is a real static page. Opening a node shows it in one of two tabs:

- **Preview:** the node rendered as readable content.
- **`<node>.model.json`:** the same node as the Sling Model exporter would return it, with syntax colouring.

An AEM hiring manager recognises the content tree, `sling:resourceType` and `.model.json` straight away. Anyone else can stay on Preview.

The style is dark only on purpose. It sets `color-scheme: dark` and ignores the viewer's light or dark setting.

## Tokens

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#171B25` | Page and editor background; the active tab |
| `--panel` | `#1E2330` | Top bar, tree, tab strip |
| `--line` | `#2E3547` | All 1px dividers |
| `--text` | `#CFD5E2` | Body text |
| `--dim` | `#8690A6` | Secondary text, table keys, path slashes, JSON punctuation |
| `--key` | `#82AAFF` | The only interactive accent: selection, focus, active tab, links, JSON keys |
| `--str` | `#E5B567` | JSON strings; subtitle lines in Preview; key figures; contact email |
| `--num` | `#F29E74` | JSON numbers only |
| `--sel` | `#283152` | Selected tree node |
| `--status` | `#12151D` | Status bar |
| `--hover` | `#232A3B` | Tree-row hover; `code` chip fill |
| `--gutter` | `#566077` | Line numbers only (2.7:1, deliberately; not content) |

One typeface: self-hosted **JetBrains Mono** 400, 500 and 700. In this style monospace is the setting, not a label style.

There are no shadows or gradients. Depth comes from three background levels and 1px rules. Radii: 4px on buttons and chips, 6px on list links, 2px on tree markers.

## Layout

- Three-row shell: top bar (name, role, JCR path), tree plus editor, status bar.
- Desktop: `270px` tree and a fluid editor. Preview text is capped at 74ch.
- At 860px and below the tree becomes a horizontal row that scrolls sideways and keeps the open node in view. The page itself never scrolls sideways.

## Nodes

| Node | URL | Preview |
|---|---|---|
| `profile` | `/` | Name, role, summary, key/value table |
| `experience`, `projects`, `tools` | `/experience` etc. | One list link per child |
| job | `/experience/<name>` | Role, company and period, highlights, stack chips, link to the case study |
| project | `/projects/<id>` | Title, role and period, description, key figure, highlights, stack |
| tool | `/tools/<id>` | Title, live version and installs, description, links |
| `skills` | `/skills` | Chips grouped by area |
| `certifications` | `/certifications` | Issuer, name, date |
| `resume` | `/resume` | Summary, PDF download, competencies |
| `contact` | `/contact` | Email, copy button, links, location |

The tree marker encodes node type: a hollow `--key` square is a parent, a filled `--dim` square is a leaf.

## Interaction

- Clicking a tree node or a list link opens that node. Navigation uses Astro's client router with animation off, so it feels instant.
- With focus in the tree, the arrow keys open the previous or next node and keep focus in the tree.
- Tabs follow the ARIA tabs pattern. The chosen tab persists across nodes for the session. Without JavaScript only Preview is offered.
- Copy email shows "Copied" for 1.8s. If the clipboard is blocked, the address is selected instead.
- Nothing animates. `prefers-reduced-motion` is also handled globally.

## Where things live

- `src/lib/portfolio.ts`: profile data, skills and certifications, the node list and each node's model JSON, and the JSON highlighter.
- `src/pages/[...path].astro`: the single route that renders every node's Preview.
- `src/layouts/Layout.astro`: the shell, metadata and client behaviour.
- `src/content/`: experience, projects and extensions.

## Don'ts

- Don't add a second accent. Anything interactive uses `--key`.
- Don't use syntax colours for meaning outside the code view, except `--str` as listed above.
- Don't add cards, shadows or gradients.
- Don't mimic Adobe or CRXDE branding. The top bar carries the owner's name only.
- Don't add editor chrome that does nothing, such as window buttons, a minimap or menus.
