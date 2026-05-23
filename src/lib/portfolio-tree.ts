import yaml from "js-yaml";
import treeRaw from "../content/portfolio-tree.yaml?raw";

export interface TreeNode {
  id: string;
  label: string;
  href?: string;
  type: "branch" | "folder" | "project";
  tagline?: string;
  children?: TreeNode[];
}

export interface ProjectFeature {
  id: string;
  title: string;
  description: string;
}

export interface ProjectScreenshot {
  id: string;
  caption: string;
}

export interface TreeProject {
  id: string;
  productName: string;
  clientContext: string;
  title: string;
  summary: string;
  role: string;
  tech: string[];
  outcomes: string[];
  features: ProjectFeature[];
  screenshots: ProjectScreenshot[];
}

export interface PortfolioTreeData {
  meta: { title: string; description: string };
  tree: TreeNode[];
  projects: Record<string, TreeProject>;
}

const data = yaml.load(treeRaw) as PortfolioTreeData;

export const portfolioTree = data;

export function getProject(slug: string): TreeProject | undefined {
  return data.projects[slug];
}

export function getProjectSlugs(): string[] {
  return Object.keys(data.projects);
}

export function flattenProjectLinks(
  nodes: TreeNode[] = data.tree,
): { href: string; label: string; tagline?: string }[] {
  const links: { href: string; label: string; tagline?: string }[] = [];
  for (const node of nodes) {
    if (node.type === "project" && node.href) {
      links.push({ href: node.href, label: node.label, tagline: node.tagline });
    }
    if (node.children) {
      links.push(...flattenProjectLinks(node.children));
    }
  }
  return links;
}
