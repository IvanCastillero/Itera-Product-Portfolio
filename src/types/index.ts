export type Language = "en" | "es";

export interface LocalizedString {
  en: string;
  es: string;
}

export interface EnterpriseProject {
  id: string;
  badge: LocalizedString;
  title: LocalizedString;
  category: LocalizedString;
  problem: LocalizedString;
  frameworks: string[];
  impactBadges: string[];
  role: LocalizedString;
  highlights: {
    en: string[];
    es: string[];
  };
}

export interface OtherEnterpriseWorkItem {
  en: string;
  es: string;
}

export interface TalkTopic {
  en: string;
  es: string;
}

export interface TalksSectionData {
  title: LocalizedString;
  intro: LocalizedString;
  topics: TalkTopic[];
}

export interface PersonalProject {
  id: string;
  title: string;
  tagline: LocalizedString;
  problemHypothesis: LocalizedString;
  solution: LocalizedString;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featuredMetric?: LocalizedString;
  images?: string[];
}

export interface ProductPillar {
  number: string;
  tag: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
}
