import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "cumbre-menu",
    name: "Cumbre — Menú Digital",
    slug: "cumbre-menu",
    image: "/projects/cumbre-menu/mockup-hero.png",
    cover: "/projects/cumbre-menu/mockup-hero.png",
    coverAspect: "aspect-[16/9]",
    date: "15/06/2026",
    role: {
      en: "Frontend Developer",
      es: "Desarrollador Frontend",
    },
    metrics: [
      { label: { en: "Lighthouse", es: "Lighthouse" }, value: "98" },
      { label: { en: "Load Time", es: "Tiempo de carga" }, value: "<1s" },
      { label: { en: "Status", es: "Estado" }, value: "Production" },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Neon Auth",
      "Vercel Blob",
    ],
    demo: "https://menu-cumbre-sigma.vercel.app/",
    github: "https://github.com/milo023-jpg/menu-cumbre",
    oneLiner: {
      en: "A custom digital menu and administration platform built for a local restaurant.",
      es: "Un menú digital y plataforma administrativa desarrollados a medida para un restaurante local.",
    },
    gallery: [
      {
        src: "/projects/cumbre-menu/menu-mobile.png",
        alt: {
          en: "Cumbre home screen with welcome message and main food categories: Desayunos, Toasts, Sandos and Entradas.",
          es: "Pantalla principal de Cumbre con bienvenida y categorías: Desayunos, Toasts, Sandos y Entradas.",
        },
        caption: {
          en: "Customer-facing menu",
          es: "Menú del cliente",
        },
        kind: "phone",
      },
      {
        src: "/projects/cumbre-menu/dish-detail.png",
        alt: {
          en: "Cumbre dish detail page showing Burrito De Desayuno with photo, description, price, likes and prep time.",
          es: "Página de detalle de un platillo en Cumbre mostrando Burrito De Desayuno con foto, descripción, precio, likes y tiempo de preparación.",
        },
        caption: {
          en: "Dish detail",
          es: "Detalle del platillo",
        },
        kind: "phone",
      },
      {
        src: "/projects/cumbre-menu/admin-dashboard.png",
        alt: {
          en: "Cumbre admin dashboard with totals, categories, likes and traffic analytics.",
          es: "Panel de administración de Cumbre con totales, categorías, likes y analítica de tráfico.",
        },
        caption: {
          en: "Admin dashboard",
          es: "Panel administrativo",
        },
        kind: "phone",
      },
    ],
    overview: {
      en: "Cumbre is a custom digital menu built for a local restaurant looking to replace its printed menu with a faster, easier-to-manage experience. Customers can browse dishes from any device, discover popular items, and save favorites, while staff manage the entire catalog through a private administration panel.",
      es: "Cumbre es un menú digital desarrollado para un restaurante local que buscaba reemplazar su menú impreso por una experiencia más moderna y fácil de administrar. Los clientes pueden explorar los platillos desde cualquier dispositivo, descubrir los más populares y guardar favoritos, mientras el personal gestiona todo el catálogo desde un panel privado.",
    },
    challenge: {
      en: "The restaurant depended on printed menus that quickly became outdated whenever dishes, prices, or availability changed. Updating information was slow, costly, and created friction for both customers and staff.",
      es: "El restaurante dependía de menús impresos que quedaban desactualizados cada vez que cambiaban los platillos, precios o la disponibilidad. Actualizar la información era lento, costoso y generaba fricción tanto para los clientes como para el personal.",
    },
    solution: {
      en: "I designed and developed a digital menu platform with a dedicated administration panel. Staff can manage categories, dishes, availability and featured items in real time, while customers always see the latest version of the menu without requiring any app installation.",
      es: "Diseñé y desarrollé una plataforma de menú digital con un panel de administración dedicado. El personal puede gestionar categorías, platillos, disponibilidad y elementos destacados en tiempo real, mientras que los clientes siempre visualizan la versión más reciente del menú sin necesidad de instalar ninguna aplicación.",
    },
    keyFeatures: [
      { en: "Responsive mobile-first experience", es: "Experiencia responsive diseñada para móviles" },
      { en: "Private administration dashboard", es: "Panel de administración privado" },
      { en: "Real-time menu and availability management", es: "Gestión de menú y disponibilidad en tiempo real" },
      { en: "Favorites and popularity tracking", es: "Sistema de favoritos y seguimiento de popularidad" },
      { en: "Optimized performance and fast loading times", es: "Rendimiento optimizado y tiempos de carga rápidos" },
    ],
    results: {
      en: "The restaurant can now update its menu, categories and dish availability without modifying code or printing new materials. The platform achieved a Lighthouse score of 98 on mobile and loads in under one second on a standard 4G connection.",
      es: "El restaurante ahora puede actualizar su menú, categorías y disponibilidad de platillos sin modificar código ni imprimir nuevo material. La plataforma alcanzó una puntuación Lighthouse de 98 en móvil y carga en menos de un segundo en una conexión 4G estándar.",
    },
    lessonsLearned: {
      en: "Building software for a real business reinforced the importance of simple workflows, maintainable architectures and fast iteration. The biggest challenge was balancing technical decisions with the day-to-day needs of non-technical users.",
      es: "Desarrollar software para un negocio real reforzó la importancia de los flujos simples, las arquitecturas mantenibles y la iteración rápida. El mayor reto fue equilibrar las decisiones técnicas con las necesidades diarias de usuarios no técnicos.",
    },
  },
  {
    id: "atelier-norte",
    name: "Atelier Norte",
    slug: "atelier-norte",
    image: "/projects/atelier-norte/mockup-hero.png",
    cover: "/projects/atelier-norte/mockup-hero.png",
    coverAspect: "aspect-[16/9]",
    date: "25/04/2026",
    role: {
      en: "Frontend Engineer",
      es: "Ingeniero Frontend",
    },
    metrics: [
      { label: { en: "Pages", es: "Páginas" }, value: "12" },
      { label: { en: "Projects", es: "Proyectos" }, value: "5" },
      { label: { en: "LCP", es: "LCP" }, value: "0.9s" },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Cloudinary",
    ],
    demo: "https://arquitectos-five.vercel.app/",
    github: "https://github.com/milo023-jpg/arquitectos",
    oneLiner: {
      en: "An editorial site for a Mexico City architecture studio, built around photography and quiet typography.",
      es: "Un sitio editorial para un estudio de arquitectura, construido alrededor de la fotografía y la tipografía serena.",
    },
    gallery: [
      {
        src: "/projects/atelier-norte/8.png",
        alt: {
          en: "Atelier Norte residential project 'Entre piedra y luz': XIX-century masia rehabilitation with a glass and wood extension.",
          es: "Proyecto residencial 'Entre piedra y luz' de Atelier Norte: rehabilitación de una masía del siglo XIX con extensión de vidrio y madera.",
        },
        caption: {
          en: "Residential project",
          es: "Proyecto residencial",
        },
        aspect: "16/9",
      },
      {
        src: "/projects/atelier-norte/6.png",
        alt: {
          en: "Atelier Norte mobile home screen with the headline 'Diseñamos espacios que envejecen bien' over an interior photo.",
          es: "Pantalla de inicio móvil de Atelier Norte con el titular 'Diseñamos espacios que envejecen bien' sobre una foto de interior.",
        },
        caption: {
          en: "Mobile home",
          es: "Inicio móvil",
        },
        kind: "phone",
        span: { rows: 2 },
      },
      {
        src: "/projects/atelier-norte/7.png",
        alt: {
          en: "Atelier Norte desktop project page for 'Casa del Roble' with the challenge, approach and result of the rehabilitation.",
          es: "Página de proyecto en escritorio de Atelier Norte para 'Casa del Roble' con el reto, enfoque y resultado de la rehabilitación.",
        },
        caption: {
          en: "Project page",
          es: "Página de proyecto",
        },
        aspect: "16/9",
      },
    ],
    overview: {
      en: "A commercial demo for Atelier Norte, a boutique architecture studio focused on residential and commercial projects. The site reads like an architecture magazine: long-form spreads, large photography, and intentional negative space.",
      es: "Una demo comercial para Atelier Norte, un estudio de arquitectura boutique enfocado en proyectos residenciales y comerciales. El sitio se lee como una revista de arquitectura: planas largas, fotografía grande y espacio negativo intencional.",
    },
    challenge: {
      en: "Architecture studios live and die on how their portfolio feels. The site had to communicate craft and quiet confidence in the first scroll, without the marketing-speak or motion gimmicks that plague template sites.",
      es: "Los estudios de arquitectura viven y mueren por cómo se siente su portafolio. El sitio tenía que transmitir oficio y confianza serena desde el primer scroll, sin el lenguaje de marketing ni los trucos de motion que abundan en sitios de plantilla.",
    },
    solution: {
      en: "A Next.js 16 app with a custom layout system: editorial spreads, asymmetric grids, and a typographic hierarchy built on Cormorant Garamond (display) and Manrope (body). Animations are sparse and slow, restricted to image reveals on scroll. Cloudinary handles project photography with responsive sizes.",
      es: "Una aplicación en Next.js 16 con un sistema de layout propio: planas editoriales, grids asimétricos, y una jerarquía tipográfica construida sobre Cormorant Garamond (titulares) y Manrope (cuerpo). Las animaciones son escasas y lentas, limitadas a revelados de imagen al hacer scroll. Cloudinary maneja la fotografía de proyectos con tamaños responsivos.",
    },
    keyFeatures: [
      { en: "Editorial spreads with asymmetric grids", es: "Planas editoriales con grids asimétricos" },
      { en: "Image reveal animations on scroll", es: "Animaciones de revelado de imagen al scroll" },
      { en: "Project pages with structured data", es: "Páginas de proyecto con datos estructurados" },
      { en: "Fully responsive photography via Cloudinary", es: "Fotografía responsiva vía Cloudinary" },
    ],
    results: {
      en: "Delivered a polished architectural portfolio focused on photography, typography and presentation. The project demonstrates advanced layout systems, responsive image handling and a design approach centered on visual hierarchy rather than excessive motion.",
      es: "Se entregó un portafolio arquitectónico centrado en la fotografía, la tipografía y la presentación del trabajo. El proyecto demuestra sistemas de layout avanzados, manejo responsivo de imágenes y un enfoque de diseño basado en la jerarquía visual en lugar de animaciones excesivas.",
    },
    lessonsLearned: {
      en: "Restraint is the most expensive design choice. Saying no to motion and decorative elements is harder than adding them, and it is what makes the result feel premium.",
      es: "La restraint es la decisión de diseño más cara. Decirle no al motion y a los elementos decorativos es más difícil que agregarlos, y es lo que hace que el resultado se sienta premium.",
    },
  },
  {
    id: "vitacareof",
    name: "VitaCare",
    slug: "vitacareof",
    image: "/projects/vitacareof/mockup-hero.png",
    cover: "/projects/vitacareof/mockup-hero.png",
    coverAspect: "aspect-[16/9]",
    date: "10/12/2025",
    role: {
      en: "Mobile Engineer",
      es: "Ingeniero Móvil",
    },
    metrics: [
      { label: { en: "Patients", es: "Pacientes" }, value: "Multi-profile" },
      { label: { en: "Notifications", es: "Notificaciones" }, value: "Automated" },
      { label: { en: "Platform", es: "Plataforma" }, value: "PWA" },
    ],
    tech: [
      "Flutter",
      "Firebase Auth",
      "Cloud Firestore",
      "go_router",
      "Provider",
      "Local Notifications",
    ],
    demo: "https://vitacareofdemo-2l9iif2t8-milo023-jpgs-projects.vercel.app/mobile.html",
    github: "https://github.com/milo023-jpg/VitaCareOf",
    oneLiner: {
      en: "A Flutter app to manage medications, appointments, and health tips for an entire family.",
      es: "Una app en Flutter para gestionar medicamentos, citas y consejos de salud para toda una familia.",
    },
    gallery: [
      {
        src: "/projects/vitacareof/10.png",
        alt: {
          en: "VitaCare appointments list grouped by past, current month and upcoming, with patient filter at the top.",
          es: "Lista de citas de VitaCare agrupada en pasadas, mes actual y próximas, con filtro de paciente en la parte superior.",
        },
        caption: {
          en: "Appointments",
          es: "Citas",
        },
        kind: "phone",
      },
      {
        src: "/projects/vitacareof/11.png",
        alt: {
          en: "VitaCare monthly calendar view with selected day and empty reminders panel.",
          es: "Vista mensual del calendario de VitaCare con día seleccionado y panel de recordatorios vacío.",
        },
        caption: {
          en: "Calendar",
          es: "Calendario",
        },
        kind: "phone",
      },
      {
        src: "/projects/vitacareof/12.png",
        alt: {
          en: "VitaCare tips tab with health articles on sleep, food and exercise, filterable by category.",
          es: "Pestaña de consejos de VitaCare con artículos de salud sobre sueño, alimentación y ejercicio, filtrable por categoría.",
        },
        caption: {
          en: "Tips",
          es: "Consejos",
        },
        kind: "phone",
      },
    ],
    overview: {
      en: "A personal project to solve a real problem: keeping track of medications, medical appointments, and health advice for several family members. Built with Flutter and Firebase, deployed as a PWA.",
      es: "Un proyecto personal para resolver un problema real: llevar el control de medicamentos, citas médicas y consejos de salud para varios miembros de la familia. Construido con Flutter y Firebase, desplegado como PWA.",
    },
    challenge: {
      en: "Caring for an older relative means juggling medications at different times of day, recurring appointments with several specialists, and remembering which advice came from which doctor. Paper notes get lost, and existing apps are either too clinical or too consumer.",
      es: "Cuidar a un familiar mayor implica manejar medicamentos a distintas horas del día, citas recurrentes con varios especialistas, y recordar qué consejo vino de qué médico. Las notas en papel se pierden, y las apps existentes son o muy clínicas o muy de consumo.",
    },
    solution: {
      en: "A Flutter app with Firestore as backend, Firebase Auth for sign-in, and go_router for navigation. The home screen is a tab switcher for appointments, calendar, medicines, and tips. Patients are a first-class entity: a horizontal filter at the top of each tab scopes the view to a single family member. Local notifications fire on medication times.",
      es: "Una app en Flutter con Firestore como backend, Firebase Auth para inicio de sesión, y go_router para navegación. La pantalla principal es un tab switcher entre citas, calendario, medicamentos y consejos. Los pacientes son entidad de primera clase: un filtro horizontal en la parte superior de cada tab limita la vista a un solo familiar. Las notificaciones locales disparan a la hora de cada medicamento.",
    },
    keyFeatures: [
      { en: "Patient-scoped filtering across all tabs", es: "Filtrado por paciente en todas las pestañas" },
      { en: "Medication grouping by time of day", es: "Agrupación de medicamentos por horario" },
      { en: "Local push notifications for reminders", es: "Notificaciones push locales para recordatorios" },
      { en: "Markdown tips sourced from Firestore", es: "Consejos en Markdown servidos desde Firestore" },
    ],
    results: {
      en: "Deployed as a PWA and used in production by my own family. The medication reminder feature alone replaced three different reminder apps. Offline-first behavior keeps the data accessible without a network connection.",
      es: "Desplegada como PWA y usada en producción por mi propia familia. La función de recordatorio de medicamentos reemplazó tres apps distintas de recordatorios. El comportamiento offline-first mantiene los datos accesibles sin conexión.",
    },
    lessonsLearned: {
      en: "Personal projects are where I learn the most. Constraints matter: building for one real user (my mother) forces every UX decision to be honest.",
      es: "Los proyectos personales son donde más aprendo. Las restricciones importan: construir para usuarios reales (mis padres) obliga a que cada decisión de UX sea honesta.",
    },
  },
];
