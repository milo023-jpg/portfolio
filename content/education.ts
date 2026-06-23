import type { Education } from "@/types";

export const education: Education[] = [
  {
    id: "uts-systems-engineering",
    institution: "Unidades Tecnológicas de Santander",
    degree: {
      en: "Systems Engineering",
      es: "Ingeniería de Sistemas",
    },
    period: {
      en: "2020 - 2025",
      es: "2020 - 2025",
    },
    location: {
      en: "Colombia (Santander)",
      es: "Colombia (Santander)",
    },
    description: {
      en: "I pursued a Systems Engineering degree focused on software development, application architecture and databases. During my training I built projects oriented to web solutions and information systems, strengthening skills in programming, data structures and full-stack development.",
      es: "Cursé la carrera de Ingeniería de Sistemas con enfoque en desarrollo de software, arquitectura de aplicaciones y bases de datos. Durante mi formación desarrollé proyectos orientados a soluciones web y sistemas de información, fortaleciendo habilidades en programación, estructuras de datos y desarrollo full-stack.",
    },
    areas: [
      "Programación",
      "Bases de datos",
      "Ingeniería de software",
      "Desarrollo web",
      "Arquitectura de sistemas",
    ],
  },
];
