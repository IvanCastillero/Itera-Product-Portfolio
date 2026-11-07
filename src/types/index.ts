export type Language = "en" | "es";

export interface LocalizedString {
  en: string;
  es: string;
}

export interface ImpactMetricItem {
  value: string;
  unit?: LocalizedString;
  label: LocalizedString;
  detail: LocalizedString;
  highlight?: "emerald" | "amber" | "terracotta" | "neutral";
}

export interface PortfolioImpactConsolidation {
  sectionIndex: string;
  tag: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  modes: {
    direct: {
      label: LocalizedString;
      description: LocalizedString;
      metrics: ImpactMetricItem[];
    };
    total: {
      label: LocalizedString;
      description: LocalizedString;
      metrics: ImpactMetricItem[];
    };
    scale: {
      label: LocalizedString;
      description: LocalizedString;
      metrics: ImpactMetricItem[];
    };
  };
  keyAccountsSummary: {
    title: LocalizedString;
    items: {
      client: string;
      metric: string;
      description: LocalizedString;
    }[];
  };
}

export interface CaseStudyDossier {
  goal: LocalizedString;
  researchAndDiscovery: LocalizedString;
  decisionsAndTradeoffs: {
    en: string[];
    es: string[];
  };
  keyLearnings: LocalizedString;
}

export interface EnterpriseProject {
  id: string;
  code: string;
  leadershipType: "direct" | "co-led";
  leadershipBadge: LocalizedString;
  statusBadge: LocalizedString;
  title: LocalizedString;
  category: LocalizedString;
  role: LocalizedString;
  /** PAR structure */
  problem: LocalizedString;
  action: LocalizedString;
  resultSummary: LocalizedString;
  /** Hard numbers displayed prominently on the card */
  keyMetrics: {
    value: string;
    label: LocalizedString;
    sublabel?: LocalizedString;
    tone?: "emerald" | "amber" | "terracotta";
  }[];
  /** Deep-dive PM thinking dossier */
  dossier: CaseStudyDossier;
  frameworks: string[];
  impactBadges: {
    en: string[];
    es: string[];
  };
  highlights: {
    en: string[];
    es: string[];
  };
}

export interface OtherEnterpriseWorkItem {
  tag: LocalizedString;
  title: LocalizedString;
  en: string;
  es: string;
}

export interface OtherEnterpriseWorkSection {
  title: LocalizedString;
  items: OtherEnterpriseWorkItem[];
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

export interface PersonalProjectsHeaderData {
  tag: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
}

export interface PersonalProject {
  id: string;
  code: string;
  title: string;
  tagline: LocalizedString;
  /** PAR & PM Thinking structure */
  problemHypothesis: LocalizedString;
  actionAndArchitecture: LocalizedString;
  resultAndValidation: LocalizedString;
  tradeoffNote: LocalizedString;
  keyLearning: LocalizedString;
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
  tradeoffPrinciple: LocalizedString;
}
