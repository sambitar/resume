import yaml from "js-yaml";

import skillsRaw from "../content/skills.yaml?raw";
import themesRaw from "../content/themes.yaml?raw";
import portfolioRaw from "../content/portfolio.yaml?raw";

export interface Skill {
  id: string;
  title: string;
  summary: string;
  competencies: string[];
}

export interface Theme {
  id: string;
  title: string;
  description: string;
}

export interface SiteProfile {
  name: string;
  givenName: string;
  familyName: string;
  email: string;
}

export interface SiteContent {
  profile: SiteProfile;
  hero: {
    headline: string;
    subheadline: string;
  };
  themes: Theme[];
  footer: {
    note: string;
  };
}

export function pageTitle(page: string): string {
  return `${page} · ${site.profile.name}`;
}

export interface PortfolioProject {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  outcome: string;
  tags: string[];
  /** Slug for an in-depth case study at /portfolio/{slug} */
  caseStudy?: string;
}

export interface PortfolioContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  projects: PortfolioProject[];
}

export const skills = yaml.load(skillsRaw) as Skill[];

export const site = yaml.load(themesRaw) as SiteContent;

export const portfolio = yaml.load(portfolioRaw) as PortfolioContent;

const skillTitleById = new Map(skills.map((s) => [s.id, s.title]));

export function skillLabel(id: string): string {
  return skillTitleById.get(id) ?? id;
}
