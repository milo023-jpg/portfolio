# Datos del portfolio — fuente de edición

Este archivo contiene **toda** la información hardcodeada del portfolio en un solo lugar para que la edites y luego yo pueda copiarla de vuelta a los archivos de código.

> **Convención**: la mayoría de los campos son bilingües (`en` / `es`). Mantén siempre ambas versiones. Si agregas o quitas un proyecto/trayectoria/testimonio, respeta el orden de los campos del bloque.

---

## 1. Perfil (source: `content/profile.ts`)

```yaml
name: Camilo Artunduaga
role: Frontend Engineer
email: [miloar023@gmail.com]                  # <- reemplaza por tu correo real
github: https://github.com/milo023-jpg        # Sin linkedin ni twitter
```

### 1.1 "Construyendo actualmente" (Currently Building)

```yaml
title:
  en: A personal operating system for managing life in one place.
  es: Un sistema operativo personal para gestionar toda tu vida en un solo lugar.

body:
  en: Notes, goals, habits, finances, projects and contexts connected in a single system. Built to reduce friction, stay organized and make better decisions every day.
  es: Notas, metas, hábitos, finanzas, proyectos y contextos conectados en un solo sistema. Diseñado para reducir fricción, mantenerse organizado y tomar mejores decisiones cada día.

link: https://github.com/camilo-artunduaga

stack:
  - Flutter
  - Firebase
  - TypeScript
```

---

## 2. Hero (source: `content/i18n.ts` → `hero`)

```yaml
eyebrow: Camilo Artunduaga — Frontend Engineer   # igual en EN y ES
title:
  en: Frontend Developer creating modern, scalable web experiences.
  es: Desarrollador Frontend creando experiencias web modernas y escalables.
subtitle:
  en: Building applications with React, Next.js, TypeScript and Flutter. Focused on clean code, performance and great user experiences.
  es: Desarrollo aplicaciones con React, Next.js, TypeScript y Flutter. Enfocado en código limpio, rendimiento y excelentes experiencias de usuario.
ctaPrimary:
  en: See the work
  es: Ver el trabajo
ctaSecondary:
  en: Get in touch
  es: Hablemos
ctaDownload:                                  # botón que descarga el CV (archivo en public/CV...pdf)
  en: Download CV
  es: Descargar CV
micro:                                       # línea pequeña debajo de los CTAs
  en: #Omitir esto
lastUpdated:                                 # etiqueta de "última actualización" en hero
  en: Last updated
  es: Última actualización
```

---

## 3. Navegación (source: `content/i18n.ts` → `nav` + `a11y.nav`)

```yaml
nav:
  work:
    en: Work
    es: Trabajo
  about:
    en: Approach
    es: Enfoque
  experience:
    en: Experience
    es: Trayectoria
  writing:                                   # aún no hay sección, pero aparece en navbar
    en: Writing
    es: Notas
  contact:
    en: Contact
    es: Contacto

a11y.nav:
  primary:
    en: Primary
    es: Principal
  home:
    en: Home
    es: Inicio
  openMenu:
    en: Open menu
    es: Abrir menú
  closeMenu:
    en: Close menu
    es: Cerrar menú
```

---

## 4. About (source: `content/i18n.ts` → `about` + `sections.about`)

```yaml
sections.about:
en: Building products with purpose.
es: Construyendo productos con propósito.

about.title:
en: Building products with purpose.
es: Construyendo productos con propósito.

about.p1:
en: I'm Camilo, a Systems Engineering student and frontend developer passionate about creating useful digital products. I started building websites out of curiosity and gradually turned that interest into a focus on modern web and mobile development.
es: Soy Camilo, estudiante de Ingeniería de Sistemas y desarrollador frontend apasionado por crear productos digitales útiles. Comencé creando sitios web por curiosidad y poco a poco convertí ese interés en una dedicación al desarrollo web y móvil moderno.

about.p2:
en: I work primarily with React, Next.js, TypeScript and Flutter. I enjoy transforming ideas into real products, from designing interfaces and user flows to implementing scalable frontend architectures and integrating backend services.
es: Trabajo principalmente con React, Next.js, TypeScript y Flutter. Disfruto transformar ideas en productos reales, desde el diseño de interfaces y flujos de usuario hasta la implementación de arquitecturas frontend escalables y la integración con servicios backend.

about.p3:
en: Currently, I'm building projects like PersonOS and Cumbre while continuously improving my skills in software architecture, product thinking and user experience. My goal is to create software that solves real problems and remains maintainable as it grows.
es: Actualmente estoy construyendo proyectos como PersonOS y Cumbre mientras sigo fortaleciendo mis habilidades en arquitectura de software, visión de producto y experiencia de usuario. Mi objetivo es crear software que resuelva problemas reales y siga siendo mantenible a medida que crece.


about.rightNow.label:
  en: Right now
  es: Ahora

about.rightNow.fields:
  reading:
    en: Reading
    es: Leyendo
  tooling:
    en: Tooling
    es: Herramientas
  interests:
    en: Interests
    es: Intereses
  openTo:
    en: Open to
    es: Disponible para

about.rightNow.reading:
  en: Software architecture, product development and modern frontend practices
  es: Arquitectura de software, desarrollo de producto y buenas prácticas de frontend

about.rightNow.tooling:
  en: VS Code · OpenCode · GitHub · Neon
  es: VS Code · OpenCode · GitHub · Neon

about.rightNow.interests:
  en: Product building · Personal knowledge systems · Mobile apps
  es: Creación de productos · Sistemas de conocimiento personal · Aplicaciones móviles

about.rightNow.openTo:
  en: Frontend Developer roles · Remote · React / Next.js
  es: Roles de Desarrollador Frontend · Remoto · React / Next.js
```

---

## 5. Proyectos (source: `content/projects.ts`)

Hay **3 proyectos**. Para cada uno se listan: `id`, `name`, `slug`, `image`, `cover`, `coverAspect` (opcional), `coverLayout` (opcional: `default` o `mockup`), `year`, `role`, `metrics` (3 recomendado), `tech` (lista), `demo`, `github`, `oneLiner`, `overview`, `challenge`, `solution`, `keyFeatures` (lista), `results`, `lessonsLearned`, `gallery` (opcional, cada item: `src`, `alt`, `caption`).

### 5.1 Cumbre — Menú Digital

```yaml
id: cumbre-menu
name: Cumbre — Menú Digital
slug: cumbre-menu

image: /projects/cumbre-menu/mockup-hero.png
cover: /projects/cumbre-menu/mockup-hero.png
coverAspect: aspect-[16/10]

year: 2026

role:
  en: Frontend Developer
  es: Desarrollador Frontend

metrics:
  - { label: { en: Lighthouse, es: Lighthouse }, value: "98" }
  - { label: { en: Load Time, es: Tiempo de carga }, value: "<1s" }
  - { label: { en: Status, es: Estado }, value: "Production" }

tech:
  - Next.js 16
  - React 19
  - TypeScript
  - PostgreSQL
  - Neon Auth
  - Vercel Blob

demo: https://menu-cumbre-sigma.vercel.app/
github: https://github.com/milo023-jpg/menu-cumbre

oneLiner:
  en: A custom digital menu and administration platform built for a local restaurant.
  es: Un menú digital y plataforma administrativa desarrollados a medida para un restaurante local.
overview:
en: Cumbre is a custom digital menu built for a local restaurant looking to replace its printed menu with a faster, easier-to-manage experience. Customers can browse dishes from any device, discover popular items, and save favorites, while staff manage the entire catalog through a private administration panel.
es: Cumbre es un menú digital desarrollado para un restaurante local que buscaba reemplazar su menú impreso por una experiencia más moderna y fácil de administrar. Los clientes pueden explorar los platillos desde cualquier dispositivo, descubrir los más populares y guardar favoritos, mientras el personal gestiona todo el catálogo desde un panel privado.

challenge:
en: The restaurant depended on printed menus that quickly became outdated whenever dishes, prices, or availability changed. Updating information was slow, costly, and created friction for both customers and staff.
es: El restaurante dependía de menús impresos que quedaban desactualizados cada vez que cambiaban los platillos, precios o la disponibilidad. Actualizar la información era lento, costoso y generaba fricción tanto para los clientes como para el personal.

solution:
en: I designed and developed a digital menu platform with a dedicated administration panel. Staff can manage categories, dishes, availability and featured items in real time, while customers always see the latest version of the menu without requiring any app installation.
es: Diseñé y desarrollé una plataforma de menú digital con un panel de administración dedicado. El personal puede gestionar categorías, platillos, disponibilidad y elementos destacados en tiempo real, mientras que los clientes siempre visualizan la versión más reciente del menú sin necesidad de instalar ninguna aplicación.

keyFeatures:

* { en: Responsive mobile-first experience, es: Experiencia responsive diseñada para móviles }
* { en: Private administration dashboard, es: Panel de administración privado }
* { en: Real-time menu and availability management, es: Gestión de menú y disponibilidad en tiempo real }
* { en: Favorites and popularity tracking, es: Sistema de favoritos y seguimiento de popularidad }
* { en: Optimized performance and fast loading times, es: Rendimiento optimizado y tiempos de carga rápidos }

results:
en: The restaurant can now update its menu, categories and dish availability without modifying code or printing new materials. The platform achieved a Lighthouse score of 98 on mobile and loads in under one second on a standard 4G connection.
es: El restaurante ahora puede actualizar su menú, categorías y disponibilidad de platillos sin modificar código ni imprimir nuevo material. La plataforma alcanzó una puntuación Lighthouse de 98 en móvil y carga en menos de un segundo en una conexión 4G estándar.

lessonsLearned:
en: Building software for a real business reinforced the importance of simple workflows, maintainable architectures and fast iteration. The biggest challenge was balancing technical decisions with the day-to-day needs of non-technical users.
es: Desarrollar software para un negocio real reforzó la importancia de los flujos simples, las arquitecturas mantenibles y la iteración rápida. El mayor reto fue equilibrar las decisiones técnicas con las necesidades diarias de usuarios no técnicos.

gallery:
  - src: /projects/cumbre-menu/menu-mobile.png
    alt:
      en: Cumbre mobile menu showing dish categories like Desayunos, Toasts and Entradas.
      es: Menú móvil de Cumbre mostrando categorías como Desayunos, Toasts y Entradas.
    caption:
      en: Customer-facing menu
      es: Menú del cliente
  - src: /projects/cumbre-menu/admin-dashboard.png
    alt:
      en: Cumbre admin dashboard with totals, categories, likes and traffic analytics.
      es: Panel de administración de Cumbre con totales, categorías, likes y analítica de tráfico.
    caption:
      en: Admin dashboard
      es: Panel administrativo
```

### 5.2 Atelier Norte

```yaml
id: atelier-norte
name: Atelier Norte
slug: atelier-norte
image: /projects/atelier-norte/cover.svg
cover: /projects/atelier-norte/cover.svg
year: 2025
role:
  en: Frontend Engineer (Freelance)
  es: Ingeniero Frontend (Freelance)
metrics:
  - { label: { en: Pages, es: Páginas }, value: "12" }
  - { label: { en: Projects, es: Proyectos }, value: "5" }
  - { label: { en: LCP, es: LCP }, value: "0.9s" }
tech:
  - Next.js 16
  - React 19
  - TypeScript
  - Tailwind
  - Framer Motion
  - Cloudinary
demo: https://arquitectos-five.vercel.app/
github: https://github.com/milo023-jpg/arquitectos
oneLiner:
  en: An editorial site for a Mexico City architecture studio, built around photography and quiet typography.
  es: Un sitio editorial para un estudio de arquitectura, construido alrededor de la fotografía y la tipografía serena.
overview:
  en: A commercial demo for Atelier Norte, a boutique architecture studio focused on residential and commercial projects. The site reads like an architecture magazine: long-form spreads, large photography, and intentional negative space.
  es: Una demo comercial para Atelier Norte, un estudio de arquitectura boutique enfocado en proyectos residenciales y comerciales. El sitio se lee como una revista de arquitectura: planas largas, fotografía grande y espacio negativo intencional.
challenge:
  en: Architecture studios live and die on how their portfolio feels. The site had to communicate craft and quiet confidence in the first scroll, without the marketing-speak or motion gimmicks that plague template sites.
  es: Los estudios de arquitectura viven y mueren por cómo se siente su portafolio. El sitio tenía que transmitir oficio y confianza serena desde el primer scroll, sin el lenguaje de marketing ni los trucos de motion que abundan en sitios de plantilla.
solution:
  en: A Next.js 16 app with a custom layout system: editorial spreads, asymmetric grids, and a typographic hierarchy built on Cormorant Garamond (display) and Manrope (body). Animations are sparse and slow, restricted to image reveals on scroll. Cloudinary handles project photography with responsive sizes.
  es: Una aplicación en Next.js 16 con un sistema de layout propio: planas editoriales, grids asimétricos, y una jerarquía tipográfica construida sobre Cormorant Garamond (titulares) y Manrope (cuerpo). Las animaciones son escasas y lentas, limitadas a revelados de imagen al hacer scroll. Cloudinary maneja la fotografía de proyectos con tamaños responsivos.
keyFeatures:
  - { en: Editorial spreads with asymmetric grids, es: Planas editoriales con grids asimétricos }
  - { en: Image reveal animations on scroll, es: Animaciones de revelado de imagen al scroll }
  - { en: Project pages with structured data, es: Páginas de proyecto con datos estructurados }
  - { en: Fully responsive photography via Cloudinary, es: Fotografía responsiva vía Cloudinary }
results:
  en: Delivered a polished architectural portfolio focused on photography, typography and presentation. The project demonstrates advanced layout systems, responsive image handling and a design approach centered on visual hierarchy rather than excessive motion.
  es: Se entregó un portafolio arquitectónico centrado en la fotografía, la tipografía y la presentación del trabajo. El proyecto demuestra sistemas de layout avanzados, manejo responsivo de imágenes y un enfoque de diseño basado en la jerarquía visual en lugar de animaciones excesivas.
lessonsLearned:
  en: Restraint is the most expensive design choice. Saying no to motion and decorative elements is harder than adding them, and it is what makes the result feel premium.
  es: La restraint es la decisión de diseño más cara. Decirle no al motion y a los elementos decorativos es más difícil que agregarlos, y es lo que hace que el resultado se sienta premium.
```

### 5.3 VitaCare

```yaml
id: vitacareof
name: VitaCare
slug: vitacareof
image: /projects/vitacareof/cover.svg
cover: /projects/vitacareof/cover.svg
year: 2025
role:
  en: Mobile Engineer (Personal Project)
  es: Ingeniero Móvil (Proyecto Personal)
metrics:
  - { label: { en: Patients, es: Pacientes }, value: "Multi-profile" }
  - { label: { en: Notifications, es: Notificaciones }, value: "Automated" }
  - { label: { en: Platform, es: Plataforma }, value: "PWA" }
tech:
  - Flutter
  - Firebase Auth
  - Cloud Firestore
  - go_router
  - Provider
  - Local Notifications
demo: https://vitacareofdemo.vercel.app/#/home
github: https://github.com/milo023-jpg/VitaCareOf
oneLiner:
  en: A Flutter app to manage medications, appointments, and health tips for an entire family.
  es: Una app en Flutter para gestionar medicamentos, citas y consejos de salud para toda una familia.
overview:
  en: A personal project to solve a real problem: keeping track of medications, medical appointments, and health advice for several family members. Built with Flutter and Firebase, deployed as a PWA.
  es: Un proyecto personal para resolver un problema real: llevar el control de medicamentos, citas médicas y consejos de salud para varios miembros de la familia. Construido con Flutter y Firebase, desplegado como PWA.
challenge:
  en: Caring for an older relative means juggling medications at different times of day, recurring appointments with several specialists, and remembering which advice came from which doctor. Paper notes get lost, and existing apps are either too clinical or too consumer.
  es: Cuidar a un familiar mayor implica manejar medicamentos a distintas horas del día, citas recurrentes con varios especialistas, y recordar qué consejo vino de qué médico. Las notas en papel se pierden, y las apps existentes son o muy clínicas o muy de consumo.
solution:
  en: A Flutter app with Firestore as backend, Firebase Auth for sign-in, and go_router for navigation. The home screen is a tab switcher for appointments, calendar, medicines, and tips. Patients are a first-class entity: a horizontal filter at the top of each tab scopes the view to a single family member. Local notifications fire on medication times.
  es: Una app en Flutter con Firestore como backend, Firebase Auth para inicio de sesión, y go_router para navegación. La pantalla principal es un tab switcher entre citas, calendario, medicamentos y consejos. Los pacientes son entidad de primera clase: un filtro horizontal en la parte superior de cada tab limita la vista a un solo familiar. Las notificaciones locales disparan a la hora de cada medicamento.
keyFeatures:
  - { en: Patient-scoped filtering across all tabs, es: Filtrado por paciente en todas las pestañas }
  - { en: Medication grouping by time of day, es: Agrupación de medicamentos por horario }
  - { en: Local push notifications for reminders, es: Notificaciones push locales para recordatorios }
  - { en: Markdown tips sourced from Firestore, es: Consejos en Markdown servidos desde Firestore }
results:
  en: Deployed as a PWA and used in production by my own family. The medication reminder feature alone replaced three different reminder apps. Offline-first behavior keeps the data accessible without a network connection.
  es: Desplegada como PWA y usada en producción por mi propia familia. La función de recordatorio de medicamentos reemplazó tres apps distintas de recordatorios. El comportamiento offline-first mantiene los datos accesibles sin conexión.
lessonsLearned:
  en: Personal projects are where I learn the most. Constraints matter: building for one real user (my mother) forces every UX decision to be honest.
  es: Los proyectos personales son donde más aprendo. Las restricciones importan: construir para usuarios reales (mis padres) obliga a que cada decisión de UX sea honesta.
```

### 5.4 Textos comunes de la sección proyectos (source: `content/i18n.ts`)

```yaml
sections.projects:
  en: Selected work
  es: Trabajo seleccionado
sections.projectsDescription:
  en: "{count} case studies from the last three years. The numbers are real; the trade-offs are honest."
  es: "{count} casos de los últimos tres años. Las cifras son reales; los trade-offs, honestos."

projects.caseStudy:
  en: Read the case
  es: Leer el caso
projects.actLabel:
  en: Act
  es: Acto

projectDetail:
  backToProjects:
    en: Back to work
    es: Volver al trabajo
  backToAll:
    en: Back to all projects
    es: Volver a todos los proyectos
  overview:
    en: Overview
    es: Resumen
  challenge:
    en: The challenge
    es: El desafío
  technicalSolution:
    en: Technical solution
    es: Solución técnica
  keyFeatures:
    en: Key features
    es: Características clave
  results:
    en: Results
    es: Resultados
  lessonsLearned:
    en: Lessons learned
    es: Lo que aprendí
  role:
    en: Role
    es: Rol
  stack:
    en: Stack
    es: Stack
  year:
    en: Year
    es: Año
  outcome:
    en: Outcome
    es: Outcome
  liveDemo:
    en: Live demo
    es: Ver demo
  viewCode:
    en: View code
    es: Ver código
  gallery:
    en: Screenshots
    es: Vistas
```

---

## 6. Experiencia / Trayectoria (source: `content/experience.ts`)

Hay **3 entradas**. Campos: `id`, `company`, `role`, `period`, `location`, `achievements` (3 recomendado), `tech`.

### 6.1 TechCorp Solutions (2024 - Actualidad)

```yaml
id: frontend-engineer-2024
company: TechCorp Solutions
role:
  en: Frontend Engineer
  es: Ingeniero Frontend
period:
  en: 2024 - Present
  es: 2024 - Actualidad
location:
  en: Remote (USA)
  es: Remoto (EE.UU.)
achievements:
  - en: Led migration of legacy React app to Next.js 15, improving Lighthouse scores from 45 to 98
    es: Lideré migración de app React legacy a Next.js 15, mejorando puntajes Lighthouse de 45 a 98
  - en: Architected component library used by 5 product teams, reducing development time by 40%
    es: Arquitecté librería de componentes usada por 5 equipos de producto, reduciendo tiempo de desarrollo en 40%
  - en: Implemented React 19 features including Server Components and Actions, reducing bundle size by 35%
    es: Implementé características de React 19 incluyendo Server Components y Actions, reduciendo tamaño de bundle en 35%
tech:
  - Next.js
  - React 19
  - TypeScript
  - Tailwind CSS
  - Zustand
  - React Query
```

### 6.2 InnovateLab (2022 - 2024)

#Elimiar sección

---

## 7. Tooling / Herramientas (source: `content/tooling.ts`)

Hay **4 categorías**. Campos por categoría: `name` (bilingüe), `technologies` (lista).

```yaml
- name:
    en: Core
    es: Core
  technologies:
    - React 19
    - Next.js 16
    - TypeScript
    - Node.js
    - HTML
    - CSS

- name:
    en: Styling & Motion
    es: Estilos y motion
  technologies:
    - Tailwind CSS v4
    - CSS Modules

- name:
    en: Data & State
    es: Datos y estado
  technologies:
    - PostgreSQL
    - Firebase
    - Redis
    - Zod
    - TanStack Query

- name:
    en: Tooling
    es: Herramientas
  technologies:
    - pnpm
    - Turbopack
    - Playwright
    - Vitest
    - Vercel
```

### 7.1 Textos comunes de la sección tooling

```yaml
sections.tooling:
  en: Tooling
  es: Herramientas
sections.toolingDescription:
  en: The tools and services I rely on to build, test, and ship production-ready applications.
  es: Las herramientas y servicios en los que confío para construir, probar y desplegar aplicaciones listas para producción.
```

---

## 8. Testimonios (source: `content/testimonials.ts`)

#Eliminar sección

---

## 9. Contacto (source: `content/i18n.ts` → `contact`)

```yaml
sections.contact:
  en: Let's talk.
  es: Hablemos.

contact.title:
  en: Let's talk.
  es: Hablemos.
contact.body:
  en: Tell me what you are building. I reply within 24 hours.
  es: Cuéntame qué estás construyendo. Respondo en menos de 24 horas.

contact.copyEmail:
  en: Copy email
  es: Copiar correo
contact.emailCopied:
  en: Copied to clipboard
  es: Copiado al portapapeles
contact.emailHiddenHint:
  en: Click to reveal email
  es: Haz clic para ver el correo

contact.name:
  en: Name
  es: Nombre
contact.namePlaceholder:
  en: Your name
  es: Tu nombre
contact.email:
  en: Email
  es: Correo
contact.emailPlaceholder:
  en: you@email.com
  es: tu@correo.com
contact.message:
  en: Message
  es: Mensaje
contact.messagePlaceholder:
  en: Tell me about the role, the team, or the problem…
  es: Cuéntame sobre el rol, el equipo, o el problema…

contact.send:
  en: Send message
  es: Enviar mensaje
contact.sending:
  en: Sending…
  es: Enviando…
contact.sent:
  en: Message sent
  es: Mensaje enviado
contact.success:
  en: Got it. I will reply soon.
  es: Recibido. Te respondo pronto.

contact.errors:
  fieldsRequired:
    en: All fields are required.
    es: Todos los campos son obligatorios.
  invalidEmail:
    en: Please enter a valid email address.
    es: Por favor, ingresa un correo válido.
  genericError:
    en: Something went wrong. Please try again later.
    es: Algo salió mal. Por favor, inténtalo de nuevo.

contact.socialAria:
  linkedin:
    en: Connect on LinkedIn
    es: Conectar en LinkedIn
  github:
    en: View GitHub profile
    es: Ver perfil de GitHub
  email:
    en: Send email
    es: Enviar correo
contact.navLinks:
  linkedin:
    en: LinkedIn
    es: LinkedIn
  github:
    en: GitHub
    es: GitHub
  email:
    en: Email
    es: Correo
```

---

## 10. Footer (source: `components/layout/footer.tsx` + `content/i18n.ts`)

```yaml
footer.rights:
  en: All rights reserved.
  es: Todos los derechos reservados.
footer.builtWith:
  en: Built with Next.js, React 19, and Tailwind CSS
  es: Construido con Next.js, React 19 y Tailwind CSS

# Lista destacada que aparece al final del footer (hardcodeada en components/layout/footer.tsx)
highlightTools:
  - TypeScript
  - React
  - Next.js
  - Tailwind
  - PostgreSQL
  - Vercel
```

---

## 11. Currently Building (sección) (source: `content/i18n.ts` → `currentlyBuilding`)

```yaml
currentlyBuilding.eyebrow:
  en: Currently building
  es: Construyendo actualmente
currentlyBuilding.viewProject:
  en: View project
  es: Ver el proyecto
```

---

## 12. A11y — etiquetas de sección (source: `content/i18n.ts` → `a11y.sections`)

```yaml
a11y.sections:
  hero:
    en: Introduction
    es: Introducción
  about:
    en: About
    es: Enfoque
  experience:
    en: Experience
    es: Trayectoria
  projects:
    en: Selected projects
    es: Trabajo seleccionado
  tooling:
    en: Tooling
    es: Herramientas
  testimonials:
    en: Testimonials
    es: Testimonios
  contact:
    en: Contact
    es: Contacto
  currentlyBuilding:
    en: Currently building
    es: Construyendo actualmente
```

---

## 13. Otros textos hardcodeados dispersos

```yaml
# components/features/portrait-card.tsx línea ~36
portraitCard.domain: camiloartunduaga.dev

# components/layout/navbar.tsx líneas ~26-28
navbar.sectionIds:                  # secciones que el navbar marca como "active"
  - projects
  - about
  - experience
  - contact
```

---

## 14. Resumen rápido de dónde va cada cosa

| Sección | Archivo de código |
|---|---|
| Perfil + Currently Building | `content/profile.ts` |
| Proyectos | `content/projects.ts` |
| Experiencia | `content/experience.ts` |
| Tooling | `content/tooling.ts` |
| Testimonios | `content/testimonials.ts` |
| Textos de UI bilingües (nav, hero, about, contact, footer, a11y, etc.) | `content/i18n.ts` |
| Highlight tools del footer | `components/layout/footer.tsx` (`HIGHLIGHT_TOOLS`) |
| Dominio bajo el portrait | `components/features/portrait-card.tsx` |

Cuando termines de editar, dime y yo paso todo a los archivos de código.
