export type Locale = "es" | "en";

export type LocalizedText = Record<Locale, string>;

export type A11y = {
  nav: {
    primary: string;
    home: string;
    openMenu: string;
    closeMenu: string;
  };
  sections: {
    hero: string;
    about: string;
    education: string;
    projects: string;
    tooling: string;
    contact: string;
    currentlyBuilding: string;
  };
  theme: {
    toggle: string;
  };
  language: {
    switchToSpanish: string;
    switchToEnglish: string;
  };
};

export type TranslationSchema = {
  a11y: A11y;
  nav: {
    about: string;
    tooling: string;
    work: string;
    currentlyBuilding: string;
    education: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: LocalizedText;
    subtitle: LocalizedText;
    ctaPrimary: string;
    ctaSecondary: string;
    lastUpdated: string;
  };
  currentlyBuilding: {
    eyebrow: string;
    viewProject: string;
  };
  sections: {
    projects: string;
    projectsDescription: LocalizedText;
    about: string;
    education: string;
    educationDescription: LocalizedText;
    tooling: string;
    toolingDescription: LocalizedText;
    contact: string;
  };
  about: {
    title: LocalizedText;
    p1: LocalizedText;
    p2: LocalizedText;
    p3: LocalizedText;
    rightNow: {
      label: string;
      fields: {
        reading: string;
        tooling: string;
        interests: string;
        openTo: string;
      };
      reading: LocalizedText;
      tooling: LocalizedText;
      interests: LocalizedText;
      openTo: LocalizedText;
    };
  };
  projects: {
    caseStudy: string;
    viewGithub: (name: string) => string;
    viewLive: (name: string) => string;
    actLabel: string;
  };
  projectDetail: {
    backToProjects: string;
    backToAll: string;
    overview: string;
    challenge: string;
    technicalSolution: string;
    keyFeatures: string;
    results: string;
    lessonsLearned: string;
    role: string;
    stack: string;
    date: string;
    outcome: string;
    liveDemo: string;
    viewCode: string;
    gallery: string;
  };
  contact: {
    title: LocalizedText;
    body: LocalizedText;
    copyEmail: LocalizedText;
    emailCopied: LocalizedText;
    emailHiddenHint: LocalizedText;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sent: string;
    success: string;
    errors: {
      fieldsRequired: string;
      invalidEmail: string;
      genericError: string;
    };
    socialAria: {
      github: string;
      email: string;
    };
    navLinks: {
      github: string;
      email: string;
    };
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

export type ContactErrorKey =
  | "fieldsRequired"
  | "invalidEmail"
  | "genericError";
