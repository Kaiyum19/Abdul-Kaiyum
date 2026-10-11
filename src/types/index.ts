export type Language = 'bn' | 'en';

export interface NavItem {
  id: string;
  label: {
    bn: string;
    en: string;
  };
}

export interface SkillItem {
  id: string;
  title: {
    bn: string;
    en: string;
  };
  subtitle: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  tags: {
    bn: string[];
    en: string[];
  };
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: {
    bn: string;
    en: string;
  };
  category: {
    bn: string;
    en: string;
  };
  description: {
    bn: string;
    en: string;
  };
  image?: string;
  badge?: {
    bn: string;
    en: string;
  };
  primaryAction: {
    label: {
      bn: string;
      en: string;
    };
    url?: string;
    targetSection?: string;
  };
  secondaryAction?: {
    label: {
      bn: string;
      en: string;
    };
    url?: string;
    targetSection?: string;
  };
}
