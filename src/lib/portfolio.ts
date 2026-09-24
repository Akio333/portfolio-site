import { getCollection, type CollectionEntry } from "astro:content";

export const profile = {
  name: "Suyog Mule",
  root: "suyog-mule",
  role: "AEM Full-Stack Developer",
  location: "Pune, India",
  yearsOnAem: 5.5,
  email: "smulye10@gmail.com",
  summary:
    "I build enterprise AEM platforms with Java, React, GraphQL, Dispatcher and accessible component systems. Since 2021 I've worked on sites and content platforms for Vanguard, Chase and Oona Insurance. I also write open-source VS Code extensions for AEM developers, usually to fix a small annoyance in my own workflow.",
  stats: [
    { label: "Tenants on one component library", value: "8+" },
    { label: "Components designed for Oona", value: "10+" },
    { label: "Public AEM developer tools", value: "2" },
  ],
  education: {
    degree: "B.E. Computer Engineering",
    school: "University of Mumbai",
    from: 2017,
    to: 2020,
  },
  links: [
    { label: "GitHub", href: "https://github.com/Akio333" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/akio333/" },
    { label: "VS Code Marketplace", href: "https://marketplace.visualstudio.com/publishers/Akio333" },
  ],
  resume: {
    href: "/resume.pdf",
    summary:
      "Senior AEM full-stack developer building React, TypeScript, Java and AEM systems in cloud and on-premise environments. Owns technical decisions for AEM cloud operations and guides a 3–5 person engineering team. Recent work cut CSS bundle size by 40%, data over-fetching by 70% and support queries by 60%.",
    competencies: [
      "Agile/Scrum leadership",
      "Technical architecture",
      "Stakeholder management",
      "Client collaboration",
      "Mentoring",
      "Technical presentations",
    ],
  },
  skills: [
    {
      group: "AEM and content",
      items: ["AEM as a Cloud Service", "AEM 6.5", "Touch UI", "MSM", "DAM", "Content Fragments", "Experience Fragments"],
    },
    {
      group: "Back end",
      items: ["Java", "J2EE", "OSGi (Declarative Services)", "Apache Sling", "JCR (Oak)", "HTL", "Sling Models"],
    },
    {
      group: "Front end",
      items: ["React", "TypeScript", "JavaScript", "Angular", "SCSS", "Material UI", "Bootstrap", "jQuery", "Storybook"],
    },
    {
      group: "Delivery",
      items: ["Dispatcher", "AWS CloudFront", "Maven", "Jenkins", "GitHub Actions", "Adobe Target", "Adobe Analytics"],
    },
    {
      group: "Quality",
      items: ["Jest", "Mockito", "Percy", "BrowserStack", "WCAG", "Web performance"],
    },
    {
      group: "Tooling",
      items: ["GitHub Copilot", "Git", "Git submodules", "VS Code", "IntelliJ IDEA"],
    },
  ],
  certifications: [
    { issuer: "Adobe", name: "AEM Edge Delivery Services Developer Professional", date: "May 2026" },
    { issuer: "AWS", name: "Partner: Technical Accredited", date: "Jun 2026" },
    { issuer: "AWS", name: "Partner: Generative AI Essentials", date: "Jun 2026" },
    { issuer: "AWS", name: "Partner: Generative AI Sales", date: "Jun 2026" },
    { issuer: "Vanderbilt University", name: "Microservice Architectures", date: "May 2026" },
    { issuer: "LearnKartS", name: "Cloud Fundamentals", date: "Feb 2026" },
    { issuer: "Google", name: "AI Essentials Specialization", date: "Jan 2026" },
  ],
};

type Job = CollectionEntry<"experience">;
type Project = CollectionEntry<"projects">;
type Tool = CollectionEntry<"extensions">;

export type PortfolioNode =
  | NodeBase<"profile">
  | NodeBase<"experience", { jobs: Job[] }>
  | NodeBase<"job", { job: Job; project?: Project }>
  | NodeBase<"projects", { projects: Project[] }>
  | NodeBase<"project", { project: Project }>
  | NodeBase<"tools", { tools: Tool[] }>
  | NodeBase<"tool", { tool: Tool }>
  | NodeBase<"skills">
  | NodeBase<"certifications">
  | NodeBase<"resume">
  | NodeBase<"contact">;

type NodeBase<K extends string, D = {}> = {
  kind: K;
  /** JCR node name, also the last URL segment. */
  name: string;
  depth: number;
  parent: boolean;
  href: string;
  jcrPath: string;
  title: string;
  description: string;
  model: Record<string, unknown>;
} & D;

const slug = (value: string) => value.replace(/^\d+-/, "");
const camel = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, c: string) => c.toUpperCase());
const base = (type: string) => ({
  "jcr:primaryType": "nt:unstructured",
  "sling:resourceType": `portfolio/components/${type}`,
});

function node<N extends PortfolioNode>(
  partial: Omit<N, "href" | "jcrPath" | "parent" | "depth"> & { parentName?: string; parent?: boolean },
): N {
  const { parentName, parent = false, ...rest } = partial;
  const segments = parentName ? [parentName, rest.name] : [rest.name];
  const href = rest.kind === "profile" ? "/" : `/${segments.join("/")}`;
  return {
    ...rest,
    parent,
    depth: parentName ? 1 : 0,
    href,
    jcrPath: `/content/${profile.root}/${segments.join("/")}`,
  } as unknown as N;
}

export async function getNodes(): Promise<PortfolioNode[]> {
  const jobs = (await getCollection("experience")).sort((a, b) => a.data.order - b.data.order);
  const projectOrder = ["oona", "jpmc", "vanguard"];
  const projects = (await getCollection("projects")).sort(
    (a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id),
  );
  const toolOrder = ["aem-tools", "aem-bulk-pkg-install"];
  const tools = (await getCollection("extensions")).sort(
    (a, b) => toolOrder.indexOf(a.id) - toolOrder.indexOf(b.id),
  );
  const current = jobs[0];
  const projectPath = (id: string) => `/content/${profile.root}/projects/${id}`;

  const nodes: PortfolioNode[] = [
    node({
      kind: "profile",
      name: "profile",
      title: `${profile.name} | AEM full-stack developer`,
      description: `${profile.name} builds enterprise AEM platforms with Java, React, GraphQL, Dispatcher and accessible component systems.`,
      model: {
        ...base("profile"),
        name: profile.name,
        role: profile.role,
        location: profile.location,
        yearsOnAem: profile.yearsOnAem,
        current: { role: current.data.role, company: current.data.company },
        summary: profile.summary,
        education: profile.education,
      },
    }),
    node({
      kind: "experience",
      name: "experience",
      parent: true,
      jobs,
      title: `Experience | ${profile.name}`,
      description: "AEM development at ITC Infotech and Capgemini for insurance, banking and investment clients.",
      model: { ...base("timeline"), ":itemsOrder": jobs.map((job) => slug(job.id)) },
    }),
    ...jobs.map((job) => {
      const project = projects.find((p) => p.id === job.data.project);
      return node({
        kind: "job",
        name: slug(job.id),
        parentName: "experience",
        job,
        project,
        title: `${job.data.role}, ${job.data.company} | ${profile.name}`,
        description: job.data.description,
        model: {
          ...base("role"),
          role: job.data.role,
          company: job.data.company,
          period: job.data.period,
          highlights: job.data.points,
          stack: job.data.tags,
          ...(project ? { caseStudy: projectPath(project.id) } : {}),
        },
      });
    }),
    node({
      kind: "projects",
      name: "projects",
      parent: true,
      projects,
      title: `Projects | ${profile.name}`,
      description: "AEM platform work for Oona Insurance, Chase and Vanguard.",
      model: { ...base("case-study-list"), ":itemsOrder": projects.map((p) => p.id) },
    }),
    ...projects.map((project) =>
      node({
        kind: "project",
        name: project.id,
        parentName: "projects",
        project,
        title: `${project.data.title} | ${profile.name}`,
        description: project.data.description,
        model: {
          ...base("case-study"),
          title: project.data.title,
          client: project.data.company,
          role: project.data.role,
          period: project.data.period,
          summary: project.data.description,
          highlights: project.data.highlights ?? [],
          stack: project.data.tags,
          ...(project.data.metric ? { result: project.data.metric } : {}),
        },
      }),
    ),
    node({
      kind: "tools",
      name: "tools",
      parent: true,
      tools,
      title: `Developer tools | ${profile.name}`,
      description: "Open-source VS Code extensions for AEM developers.",
      model: { ...base("extension-list"), ":itemsOrder": tools.map((t) => t.id) },
    }),
    ...tools.map((tool) =>
      node({
        kind: "tool",
        name: tool.id,
        parentName: "tools",
        tool,
        title: `${tool.data.title} | ${profile.name}`,
        description: tool.data.description,
        model: {
          ...base("extension"),
          title: tool.data.title,
          version: tool.data.version,
          installs: Number.parseInt(tool.data.installs, 10) || tool.data.installs,
          description: tool.data.description,
          stack: tool.data.tags,
          marketplace: tool.data.marketplaceUrl,
          source: tool.data.githubUrl,
        },
      }),
    ),
    node({
      kind: "skills",
      name: "skills",
      title: `Skills | ${profile.name}`,
      description: "AEM, Java, React and delivery skills.",
      model: {
        ...base("skills"),
        ...Object.fromEntries(profile.skills.map((g) => [camel(g.group), g.items])),
      },
    }),
    node({
      kind: "certifications",
      name: "certifications",
      title: `Certifications | ${profile.name}`,
      description: "Adobe, AWS and other certifications.",
      model: { ...base("certifications"), items: profile.certifications },
    }),
    node({
      kind: "resume",
      name: "resume",
      title: `Résumé | ${profile.name}`,
      description: `Résumé of ${profile.name}, AEM full-stack developer.`,
      model: {
        ...base("download"),
        fileReference: profile.resume.href,
        summary: profile.resume.summary,
        competencies: profile.resume.competencies,
      },
    }),
    node({
      kind: "contact",
      name: "contact",
      title: `Contact | ${profile.name}`,
      description: `Get in touch with ${profile.name} about an AEM project or role.`,
      model: {
        ...base("contact"),
        email: profile.email,
        location: profile.location,
        links: Object.fromEntries(profile.links.map((l) => [camel(l.label), l.href])),
      },
    }),
  ];
  return nodes;
}

/** Colours JSON by token type: keys, strings, numbers and punctuation. */
export function highlightJson(value: unknown) {
  const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const token = /("(?:[^"\\]|\\.)*")(\s*:)?|(-?\d+(?:\.\d+)?)|([{}[\],])/g;
  return JSON.stringify(value, null, 2)
    .split("\n")
    .map((line, i) => {
      const html = escape(line).replace(token, (_m, str, colon, num, punct) => {
        if (str) return colon ? `<span class="k">${str}</span><span class="p">${colon}</span>` : `<span class="s">${str}</span>`;
        if (num) return `<span class="n">${num}</span>`;
        return `<span class="p">${punct}</span>`;
      });
      return `<span class="ln">${i + 1}</span><span class="lc">${html}</span>`;
    })
    .join("");
}
