import type { Locale, TranslationSchema } from "@/types/i18n";

export const dictionary: Record<Locale, TranslationSchema> = {
  es: {
    a11y: {
      nav: {
        primary: "Principal",
        home: "Inicio",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      sections: {
        hero: "Introducción",
        about: "Enfoque",
        education: "Formación Académica",
        projects: "Trabajo seleccionado",
        tooling: "Herramientas",
        contact: "Contacto",
        currentlyBuilding: "Construyendo actualmente",
      },
      theme: {
        toggle: "Cambiar tema",
      },
      language: {
        switchToSpanish: "Cambiar a español",
        switchToEnglish: "Switch to English",
      },
    },
    nav: {
      about: "Sobre mí",
      tooling: "Herramientas",
      work: "Trabajo",
      currentlyBuilding: "Construyendo",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Camilo Artunduaga — Frontend Engineer",
      title: {
        en: "Frontend Developer creating modern, scalable web experiences.",
        es: "Desarrollador Frontend creando experiencias web modernas y escalables.",
      },
      subtitle: {
        en: "Building applications with React, Next.js, TypeScript and Flutter. Focused on clean code, performance and great user experiences.",
        es: "Desarrollo aplicaciones con React, Next.js, TypeScript y Flutter. Enfocado en código limpio, rendimiento y excelentes experiencias de usuario.",
      },
      ctaPrimary: "Ver el trabajo",
      ctaSecondary: "Hablemos",
      lastUpdated: "Última actualización",
    },
    currentlyBuilding: {
      eyebrow: "Construyendo actualmente",
      viewProject: "Ver el proyecto",
    },
    sections: {
      projects: "Trabajo seleccionado",
      projectsDescription: {
        en: "{count} case studies from the last three years.",
        es: "{count} casos de los últimos tres años.",
      },
      about: "Construyendo productos con propósito.",
      education: "Formación Académica",
      educationDescription: {
        en: "Where I trained and the foundations I built.",
        es: "Dónde me formé y los fundamentos que construí.",
      },
      tooling: "Herramientas",
      toolingDescription: {
        en: "The tools and services I rely on to build, test, and ship production-ready applications.",
        es: "Las herramientas y servicios en los que confío para construir, probar y desplegar aplicaciones listas para producción.",
      },
      contact: "Hablemos.",
    },
    about: {
      title: {
        en: "Building products with purpose.",
        es: "Construyendo productos con propósito.",
      },
      p1: {
        en: "I'm Camilo, a Systems Engineering student and frontend developer passionate about creating useful digital products. I started building websites out of curiosity and gradually turned that interest into a focus on modern web and mobile development.",
        es: "Soy Camilo, estudiante de Ingeniería de Sistemas y desarrollador frontend apasionado por crear productos digitales útiles. Comencé creando sitios web por curiosidad y poco a poco convertí ese interés en una dedicación al desarrollo web y móvil moderno.",
      },
      p2: {
        en: "I work primarily with React, Next.js, TypeScript and Tailwind. I enjoy transforming ideas into real products, from designing interfaces and user flows to implementing scalable frontend architectures and integrating backend services.",
        es: "Trabajo principalmente con React, Next.js, TypeScript y Tailwind. Disfruto transformar ideas en productos reales, desde el diseño de interfaces y flujos de usuario hasta la implementación de arquitecturas frontend escalables y la integración con servicios backend.",
      },
      p3: {
        en: "Currently, I'm building projects like PersonOS and Cumbre while continuously improving my skills in software architecture, product thinking and user experience. My goal is to create software that solves real problems and remains maintainable as it grows.",
        es: "Actualmente estoy construyendo proyectos como PersonOS y Cumbre mientras sigo fortaleciendo mis habilidades en arquitectura de software, visión de producto y experiencia de usuario. Mi objetivo es crear software que resuelva problemas reales y siga siendo mantenible a medida que crece.",
      },
      rightNow: {
        label: "Ahora",
        fields: {
          reading: "Leyendo",
          tooling: "Herramientas",
          interests: "Intereses",
          openTo: "Disponible para",
        },
        reading: {
          en: "Software architecture, product development and modern frontend practices",
          es: "Arquitectura de software, desarrollo de producto y buenas prácticas de frontend",
        },
        tooling: {
          en: "VS Code · OpenCode · GitHub · Neon",
          es: "VS Code · OpenCode · GitHub · Neon",
        },
        interests: {
          en: "Product building · Personal knowledge systems · Mobile apps",
          es: "Creación de productos · Sistemas de conocimiento personal · Aplicaciones móviles",
        },
        openTo: {
          en: "Frontend Developer roles · Remote · React / Next.js",
          es: "Roles de Desarrollador Frontend · Remoto · React / Next.js",
        },
      },
    },
    projects: {
      caseStudy: "Leer el caso",
      viewGithub: (name) => `Código de ${name} en GitHub`,
      viewLive: (name) => `Demo en vivo de ${name}`,
      actLabel: "Acto",
    },
    projectDetail: {
      backToProjects: "Volver al trabajo",
      backToAll: "Volver a todos los proyectos",
      overview: "Resumen",
      challenge: "El desafío",
      technicalSolution: "Solución técnica",
      keyFeatures: "Características clave",
      results: "Resultados",
      lessonsLearned: "Lo que aprendí",
      role: "Rol",
      stack: "Stack",
      date: "Fecha",
      outcome: "Outcome",
      liveDemo: "Ver demo",
      viewCode: "Ver código",
      gallery: "Vistas",
    },
    contact: {
      title: {
        en: "Let's talk.",
        es: "Hablemos.",
      },
      body: {
        en: "Tell me what you are building. I reply within 24 hours.",
        es: "Cuéntame qué estás construyendo. Respondo en menos de 24 horas.",
      },
      copyEmail: {
        en: "Copy email",
        es: "Copiar correo",
      },
      emailCopied: {
        en: "Copied to clipboard",
        es: "Copiado al portapapeles",
      },
      emailHiddenHint: {
        en: "Click to reveal email",
        es: "Haz clic para ver el correo",
      },
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu@correo.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre el rol, el equipo, o el problema…",
      send: "Enviar mensaje",
      sending: "Enviando…",
      sent: "Mensaje enviado",
      success: "Recibido. Te respondo pronto.",
      errors: {
        fieldsRequired: "Todos los campos son obligatorios.",
        invalidEmail: "Por favor, ingresa un correo válido.",
        genericError: "Algo salió mal. Por favor, inténtalo de nuevo.",
      },
      socialAria: {
        github: "Ver perfil de GitHub",
        email: "Enviar correo",
      },
      navLinks: {
        github: "GitHub",
        email: "Correo",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js, React 19 y Tailwind CSS",
    },
  },
  en: {
    a11y: {
      nav: {
        primary: "Primary",
        home: "Home",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      sections: {
        hero: "Introduction",
        about: "About",
        education: "Education",
        projects: "Selected projects",
        tooling: "Tooling",
        contact: "Contact",
        currentlyBuilding: "Currently building",
      },
      theme: {
        toggle: "Toggle theme",
      },
      language: {
        switchToSpanish: "Switch to Spanish",
        switchToEnglish: "Switch to English",
      },
    },
    nav: {
      about: "About",
      tooling: "Tooling",
      work: "Work",
      currentlyBuilding: "Building",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Camilo Artunduaga — Frontend Engineer",
      title: {
        en: "Frontend Developer creating modern, scalable web experiences.",
        es: "Desarrollador Frontend creando experiencias web modernas y escalables.",
      },
      subtitle: {
        en: "Building applications with React, Next.js, TypeScript and Flutter. Focused on clean code, performance and great user experiences.",
        es: "Desarrollo aplicaciones con React, Next.js, TypeScript y Flutter. Enfocado en código limpio, rendimiento y excelentes experiencias de usuario.",
      },
      ctaPrimary: "See the work",
      ctaSecondary: "Get in touch",
      lastUpdated: "Last updated",
    },
    currentlyBuilding: {
      eyebrow: "Currently building",
      viewProject: "View project",
    },
    sections: {
      projects: "Selected work",
      projectsDescription: {
        en: "{count} case studies from the last three years. The numbers are real; the trade-offs are honest.",
        es: "{count} casos de los últimos tres años. Las cifras son reales; los trade-offs, honestos.",
      },
      about: "Building products with purpose.",
      education: "Education",
      educationDescription: {
        en: "Where I trained and the foundations I built.",
        es: "Dónde me formé y los fundamentos que construí.",
      },
      tooling: "Tooling",
      toolingDescription: {
        en: "The tools and services I rely on to build, test, and ship production-ready applications.",
        es: "Las herramientas y servicios en los que confío para construir, probar y desplegar aplicaciones listas para producción.",
      },
      contact: "Let's talk.",
    },
    about: {
      title: {
        en: "Building products with purpose.",
        es: "Construyendo productos con propósito.",
      },
      p1: {
        en: "I'm Camilo, a Systems Engineering student and frontend developer passionate about creating useful digital products. I started building websites out of curiosity and gradually turned that interest into a focus on modern web and mobile development.",
        es: "Soy Camilo, estudiante de Ingeniería de Sistemas y desarrollador frontend apasionado por crear productos digitales útiles. Comencé creando sitios web por curiosidad y poco a poco convertí ese interés en una dedicación al desarrollo web y móvil moderno.",
      },
      p2: {
        en: "I work primarily with React, Next.js, TypeScript and Flutter. I enjoy transforming ideas into real products, from designing interfaces and user flows to implementing scalable frontend architectures and integrating backend services.",
        es: "Trabajo principalmente con React, Next.js, TypeScript y Flutter. Disfruto transformar ideas en productos reales, desde el diseño de interfaces y flujos de usuario hasta la implementación de arquitecturas frontend escalables y la integración con servicios backend.",
      },
      p3: {
        en: "Currently, I'm building projects like PersonOS and Cumbre while continuously improving my skills in software architecture, product thinking and user experience. My goal is to create software that solves real problems and remains maintainable as it grows.",
        es: "Actualmente estoy construyendo proyectos como PersonOS y Cumbre mientras sigo fortaleciendo mis habilidades en arquitectura de software, visión de producto y experiencia de usuario. Mi objetivo es crear software que resuelva problemas reales y siga siendo mantenible a medida que crece.",
      },
      rightNow: {
        label: "Right now",
        fields: {
          reading: "Reading",
          tooling: "Tooling",
          interests: "Interests",
          openTo: "Open to",
        },
        reading: {
          en: "Software architecture, product development and modern frontend practices",
          es: "Arquitectura de software, desarrollo de producto y buenas prácticas de frontend",
        },
        tooling: {
          en: "VS Code · OpenCode · GitHub · Neon",
          es: "VS Code · OpenCode · GitHub · Neon",
        },
        interests: {
          en: "Product building · Personal knowledge systems · Mobile apps",
          es: "Creación de productos · Sistemas de conocimiento personal · Aplicaciones móviles",
        },
        openTo: {
          en: "Frontend Developer roles · Remote · React / Next.js",
          es: "Roles de Desarrollador Frontend · Remoto · React / Next.js",
        },
      },
    },
    projects: {
      caseStudy: "Read the case",
      viewGithub: (name) => `${name} on GitHub`,
      viewLive: (name) => `${name} live demo`,
      actLabel: "Act",
    },
    projectDetail: {
      backToProjects: "Back to work",
      backToAll: "Back to all projects",
      overview: "Overview",
      challenge: "The challenge",
      technicalSolution: "Technical solution",
      keyFeatures: "Key features",
      results: "Results",
      lessonsLearned: "Lessons learned",
      role: "Role",
      stack: "Stack",
      date: "Date",
      outcome: "Outcome",
      liveDemo: "Live demo",
      viewCode: "View code",
      gallery: "Screenshots",
    },
    contact: {
      title: {
        en: "Let's talk.",
        es: "Hablemos.",
      },
      body: {
        en: "Tell me what you are building. I reply within 24 hours.",
        es: "Cuéntame qué estás construyendo. Respondo en menos de 24 horas.",
      },
      copyEmail: {
        en: "Copy email",
        es: "Copiar correo",
      },
      emailCopied: {
        en: "Copied to clipboard",
        es: "Copiado al portapapeles",
      },
      emailHiddenHint: {
        en: "Click to reveal email",
        es: "Haz clic para ver el correo",
      },
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about the role, the team, or the problem…",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent",
      success: "Got it. I will reply soon.",
      errors: {
        fieldsRequired: "All fields are required.",
        invalidEmail: "Please enter a valid email address.",
        genericError: "Something went wrong. Please try again later.",
      },
      socialAria: {
        github: "View GitHub profile",
        email: "Send email",
      },
      navLinks: {
        github: "GitHub",
        email: "Email",
      },
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, React 19, and Tailwind CSS",
    },
  },
};

export function interpolate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] !== undefined ? String(vars[key]) : `{${key}}`,
  );
}
