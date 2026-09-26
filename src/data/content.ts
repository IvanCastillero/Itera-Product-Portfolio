import {
  EnterpriseProject,
  OtherEnterpriseWorkSection,
  PersonalProject,
  ProductPillar,
  TalksSectionData,
} from "@/types";

export const siteMetadata = {
  name: "Iván Castillero",
  role: "Product Manager",
  location: {
    en: "Panama City. Open to Global Remote",
    es: "Ciudad de Panamá. Disponible Remoto Global",
  },
  email: "ivancastillero102@gmail.com",
  github: "https://github.com/IvanCastillero",
  linkedin: "https://www.linkedin.com/in/ivan-castillero",
};

export const navigationLinks = [
  {
    key: "about",
    href: "#about",
    label: { en: "About", es: "Sobre mí" },
  },
  {
    key: "enterprise",
    href: "#enterprise",
    label: { en: "Enterprise", es: "Experiencia empresarial" },
  },
  {
    key: "work",
    href: "#work",
    label: { en: "Personal Projects", es: "Proyectos personales" },
  },
  {
    key: "philosophy",
    href: "#philosophy",
    label: { en: "Philosophy", es: "Filosofía" },
  },
];

export const heroContent = {
  badge: {
    en: "Product & Systems",
    es: "Producto & Sistemas",
  },
  status: {
    en: "Open to new product roles",
    es: "Abierto a nuevos retos de producto",
  },
  headline: {
    en: "Building products where data, technology and people meet.",
    es: "Construyo productos donde se encuentran los datos, la tecnología y las personas.",
  },
  headlineAccent: {
    en: "data, technology and people",
    es: "los datos, la tecnología y las personas",
  },
  subtitle: {
    en: "I take messy operational problems and turn them into digital products people actually use. I care about understanding users, measuring what matters and working closely with engineering to build things that last.",
    es: "Tomo problemas operativos complicados y los convierto en productos digitales que la gente realmente usa. Me importa entender a los usuarios, medir lo que importa y trabajar de cerca con ingeniería para construir cosas que duren.",
  },
  buttons: {
    exploreWork: {
      en: "Explore Work",
      es: "Explorar Trabajo",
    },
    githubProfile: {
      en: "GitHub Profile",
      es: "Perfil de GitHub",
    },
    copyEmail: {
      en: "Copy Email",
      es: "Copiar Correo",
    },
    emailCopied: {
      en: "Email Copied to Clipboard!",
      es: "¡Correo copiado al portapapeles!",
    },
    viewResume: {
      en: "View Resume (PDF)",
      es: "Ver CV (PDF)",
    },
  },
  stats: [
    {
      value: "B2B & Enterprise",
      label: { en: "Main focus", es: "Enfoque principal" },
    },
    {
      value: "Discovery & AI",
      label: { en: "How I work", es: "Cómo trabajo" },
    },
    {
      value: "Psychology + Data",
      label: { en: "My background", es: "Mi formación" },
    },
  ],
};

export const aboutContent = {
  sectionTag: {
    en: "Product Perspective",
    es: "Perspectiva de Producto",
  },
  title: {
    en: "I work between the data, the people who use the product and the team that builds it.",
    es: "Trabajo entre los datos, las personas que usan el producto y el equipo que lo construye.",
  },
  paragraphs: {
    en: [
      "I don't think good products happen by luck. Most of the time they come from understanding the problem really well before anyone writes a line of code. That's where I put a lot of my energy as a Product Manager: turning complex, ambiguous workflows into software that feels simple.",
      "My background is in Psychology, and along the way I trained in data science, machine learning and design thinking. That mix shapes how I work: I start by understanding people, then use data and technology to build for them.",
      "Day to day, I work closely with engineers, designers and business leaders. I enjoy translating between them, because good alignment saves everyone time and makes each iteration faster.",
    ],
    es: [
      "No creo que los buenos productos salgan por suerte. Casi siempre nacen de entender muy bien el problema antes de escribir una sola línea de código. Ahí es donde pongo buena parte de mi energía como Product Manager: convertir flujos de trabajo complejos y ambiguos en software que se sienta simple.",
      "Mi formación es en Psicología y en el camino me especialicé en ciencia de datos, machine learning y design thinking. Esa mezcla define cómo trabajo: primero entiendo a las personas y después uso datos y tecnología para construir para ellas.",
      "En mi día a día trabajo de cerca con ingenieros, diseñadores y líderes de negocio. Me gusta ser el puente entre ellos, porque una buena alineación ahorra tiempo a todos y hace que cada iteración sea más rápida.",
    ],
  },
};

export const productPillars: ProductPillar[] = [
  {
    number: "01",
    tag: {
      en: "How I build",
      es: "Cómo construyo",
    },
    title: {
      en: "Systems over isolated features",
      es: "Sistemas antes que funcionalidades sueltas",
    },
    description: {
      en: "A single feature solves one thing. A well designed system keeps adding value over time. I try to fix the root of a problem instead of patching the symptoms.",
      es: "Una funcionalidad resuelve una cosa. Un sistema bien pensado sigue aportando valor con el tiempo. Intento resolver la raíz del problema en lugar de poner parches.",
    },
  },
  {
    number: "02",
    tag: {
      en: "How I decide",
      es: "Cómo decido",
    },
    title: {
      en: "Decisions backed by evidence",
      es: "Decisiones con evidencia",
    },
    description: {
      en: "I talk to users to understand the problem, and I use data to check whether what we built is really being adopted. Data gives me hypotheses. Conversations tell me what's actually going on.",
      es: "Hablo con usuarios para entender el problema y uso datos para comprobar si lo que construimos realmente se está usando. Los datos me dan hipótesis. Las conversaciones me dicen lo que de verdad está pasando.",
    },
  },
  {
    number: "03",
    tag: {
      en: "How I work with teams",
      es: "Cómo trabajo con equipos",
    },
    title: {
      en: "Clarity for the team",
      es: "Claridad para el equipo",
    },
    description: {
      en: "I respect engineering work, so I try to hand over clear requirements, precise acceptance criteria and fast feedback. When the team knows exactly what to build and why, they ship with confidence.",
      es: "Respeto el trabajo de ingeniería, por eso intento entregar requerimientos claros, criterios de aceptación precisos y retroalimentación rápida. Cuando el equipo sabe exactamente qué construir y por qué, entrega con confianza.",
    },
  },
];

export const enterpriseIntro = {
  en: "For the past two and a half years I've worked as a Product Manager on solutions for companies across the region, in industries like banking, retail and government. I usually work alongside development and UX/UI teams. These are some of the projects I've been part of.",
  es: "Durante los últimos dos años y medio he trabajado como Product Manager en soluciones para empresas de la región, en industrias como banca, retail y gobierno. Normalmente trabajo junto a equipos de desarrollo y UX/UI. Estos son algunos de los proyectos en los que he participado.",
};

export const enterpriseProjects: EnterpriseProject[] = [
  {
    id: "omnichannel-alerts",
    badge: {
      en: "Enterprise project",
      es: "Proyecto empresarial",
    },
    category: {
      en: "Conversational AI & Operations",
      es: "IA conversacional y operaciones",
    },
    title: {
      en: "Omnichannel Alert Automation",
      es: "Automatización omnicanal de alertas",
    },
    problem: {
      en: "Observability agents spent a lot of time manually notifying the right resolver groups every time an alert came in. It was repetitive work that took time away from more valuable tasks.",
      es: "Los agentes de observabilidad dedicaban mucho tiempo a notificar manualmente a los grupos resolutores cada vez que llegaba una alerta. Era trabajo repetitivo que les quitaba tiempo para tareas de más valor.",
    },
    role: {
      en: "Product Manager, leading feature and version launches",
      es: "Product Manager, liderando lanzamientos de funcionalidades y versiones",
    },
    frameworks: ["Conversational AI", "Scrum", "OKR", "Release Planning"],
    impactBadges: [
      "1,000+ minutes automated per month",
      "100% SLA compliance",
      "Central America & Caribbean",
      "Also in South America & Europe",
    ],
    highlights: {
      en: [
        "Worked as one of the Product Managers of the platform and led the launch of several new features and versions.",
        "The solution uses conversational AI to automatically notify the right resolver groups when an alert is triggered.",
        "It handles more than 1,000 minutes of work per month that agents used to do by hand. It runs across Central America and part of the Caribbean, and restaurant chains also use it in Peru, Spain, Portugal and the United Kingdom.",
      ],
      es: [
        "Fui uno de los Product Managers de la plataforma y lideré el lanzamiento de varias funcionalidades y versiones nuevas.",
        "La solución usa IA conversacional para notificar automáticamente a los grupos resolutores correctos cuando se activa una alerta.",
        "Maneja más de 1,000 minutos de trabajo al mes que antes los agentes hacían a mano. Opera en toda Centroamérica y parte del Caribe, y cadenas de restaurantes también lo usan en Perú, España, Portugal y Reino Unido.",
      ],
    },
  },
  {
    id: "strategy-workshops",
    badge: {
      en: "Enterprise project",
      es: "Proyecto empresarial",
    },
    category: {
      en: "Strategy & Facilitation",
      es: "Estrategia y facilitación",
    },
    title: {
      en: "Ideation, Prioritization & Alignment Workshops",
      es: "Talleres de ideación, priorización y alineación",
    },
    problem: {
      en: "Leadership teams had more initiatives on the table than they could execute, and no shared way to decide which ones were really worth pursuing.",
      es: "Los equipos directivos tenían más iniciativas sobre la mesa de las que podían ejecutar y no contaban con una forma común de decidir cuáles valía la pena impulsar.",
    },
    role: {
      en: "Workshop Facilitator",
      es: "Facilitador de talleres",
    },
    frameworks: [
      "Working Backwards",
      "Design Thinking",
      "Customer Centric Prioritization",
      "Miro",
    ],
    impactBadges: [
      "~10 workshops facilitated",
      "Banking, retail & government",
      "Leadership level sessions",
      "Virtual & in person",
    ],
    highlights: {
      en: [
        "Facilitated around 10 workshops for leadership teams across the region, both virtual and in person, for internal teams and external clients in banking, retail and government.",
        "Adapted methodologies like Working Backwards and Design Thinking to our region's culture and to each client, always starting from the end user.",
        "Teams walked away with a clear strategy: high value initiatives prioritized, low value ones discarded and stakeholders aligned on a structure to make decisions with data.",
      ],
      es: [
        "Facilité alrededor de 10 talleres para equipos directivos de la región, en formato virtual y presencial, tanto internos como para clientes externos de banca, retail y gobierno.",
        "Adapté metodologías como Working Backwards y Design Thinking a la cultura de nuestra región y a cada cliente, siempre partiendo del usuario final.",
        "Los equipos salían con una estrategia clara: iniciativas de alto valor priorizadas, las de poco valor descartadas y los stakeholders alineados en una estructura para decidir con datos.",
      ],
    },
  },
  {
    id: "report-automation",
    badge: {
      en: "Enterprise project",
      es: "Proyecto empresarial",
    },
    category: {
      en: "Data & Process Automation",
      es: "Datos y automatización de procesos",
    },
    title: {
      en: "Client Service Report Automation",
      es: "Automatización de informes de servicio",
    },
    problem: {
      en: "The Center of Excellence team built service reports for each client completely by hand, pulling information from data sources scattered across different systems. It was slow and repetitive work.",
      es: "El equipo del Centro de Excelencia elaboraba los informes de servicio de cada cliente de forma totalmente manual, a partir de fuentes de datos dispersas en distintos sistemas. Era un trabajo lento y repetitivo.",
    },
    role: {
      en: "Product Manager",
      es: "Product Manager",
    },
    frameworks: [
      "Data Unification",
      "Process Automation",
      "Scrum",
      "UX/UI Collaboration",
    ],
    impactBadges: [
      "~80% fewer manual hours (est.)",
      "Unified data sources",
      "Automated client reports",
    ],
    highlights: {
      en: [
        "Led the project as Product Manager, working with the development and UX/UI teams.",
        "Unified data from scattered sources into a single base, which made it possible to automate most of the reporting process.",
        "Cut an estimated 80% of the hours the team spent building reports by hand.",
      ],
      es: [
        "Lideré el proyecto como Product Manager, trabajando con los equipos de desarrollo y UX/UI.",
        "Unifiqué datos de fuentes dispersas en una sola base, lo que permitió automatizar gran parte del proceso de elaboración de informes.",
        "Reduje en un estimado del 80% las horas que el equipo dedicaba a elaborar informes a mano.",
      ],
    },
  },
];

export const otherEnterpriseWork: OtherEnterpriseWorkSection = {
  title: {
    en: "Other projects",
    es: "Otros proyectos",
  },
  items: [
    {
      en: "Defined the MVP for an AI powered candidate evaluation system, ran field tests and collected and processed the resulting data.",
      es: "Definí el MVP de un sistema de evaluación de candidatos con IA, realicé pruebas en campo y recolecté y procesé los datos obtenidos.",
    },
    {
      en: "As innovation facilitator, helped define an enterprise innovation workflow and supported product squads with methodology, prototyping and testing.",
      es: "Como facilitador de innovación, ayudé a definir el flujo de innovación empresarial y apoyé a las células de trabajo con metodología, prototipado y pruebas.",
    },
    {
      en: "Benchmarked solutions to make cash flow report generation easier.",
      es: "Hice un benchmarking de soluciones para facilitar la generación de reportes de flujo de caja.",
    },
  ],
};

export const talks: TalksSectionData = {
  title: {
    en: "Talks & Webinars",
    es: "Charlas y webinars",
  },
  intro: {
    en: "I also enjoy sharing what I learn. I've given talks and webinars on AI for professionals and for students at universities and schools across the region.",
    es: "También me gusta compartir lo que aprendo. He dado charlas y webinars sobre IA para profesionales y para estudiantes de universidades y colegios de la región.",
  },
  topics: [
    {
      en: "The future of work in the age of AI",
      es: "El futuro del trabajo en la era de la IA",
    },
    {
      en: "AI: myths and realities",
      es: "IA: mitos y realidades",
    },
    {
      en: "Data science for non technical people",
      es: "Ciencia de datos para no tecnólogos",
    },
  ],
};

export const personalProjects: PersonalProject[] = [
  {
    id: "donny",
    title: "Donny",
    tagline: {
      en: "A gamified study companion for macOS that helps me stay consistent without it feeling like a chore.",
      es: "Un compañero de estudio gamificado para macOS que me ayuda a ser constante sin que se sienta como una obligación.",
    },
    problemHypothesis: {
      en: "The hardest part of studying isn't starting, it's keeping it up. Most people drop off after a few days because studying feels lonely and progress is hard to see. If studying felt more like a game, with small rewards and visible progress, it would be easier to come back every day.",
      es: "Lo más difícil de estudiar no es empezar, es mantenerse. La mayoría abandona a los pocos días porque estudiar se siente solitario y el progreso cuesta verlo. Si estudiar se sintiera más como un juego, con pequeñas recompensas y avances visibles, sería más fácil volver cada día.",
    },
    solution: {
      en: "I built Donny for myself first: a lightweight desktop app that combines game mechanics with techniques like Pomodoro, wrapped in a pixel art look with chiptune sounds. Everything is saved as Markdown notes in my Obsidian vault, so my data stays local. I built it with Antigravity using Spec Driven Development: I wrote the specs as a PM and AI agents turned them into working code.",
      es: "Construí Donny primero para mí: una app de escritorio ligera que combina mecánicas de juego con técnicas como Pomodoro, con estética pixel art y sonidos chiptune. Todo se guarda como notas Markdown en mi bóveda de Obsidian, así que mis datos se quedan en local. Lo construí con Antigravity usando Spec Driven Development: escribí las especificaciones como PM y agentes de IA las convirtieron en código funcional.",
    },
    stack: [
      "Tauri v2",
      "Rust",
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "NES.css",
      "Web Audio API",
      "Obsidian (Markdown)",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/IvanCastillero/donny-study-companion",
    featuredMetric: {
      en: "Built with Spec Driven Development",
      es: "Construido con Spec Driven Development",
    },
    images: [],
  },
  {
    id: "bill-splitter",
    title: "Bill Splitter CLI",
    tagline: {
      en: "A multimodal AI receipt splitter with zero-penny rounding leaks and proportional tax distribution.",
      es: "Un divisor de cuentas con IA multimodal, cuadre exacto al centavo y distribución proporcional de impuestos y propinas.",
    },
    problemHypothesis: {
      en: "Splitting bills in group outings is slow, awkward, and prone to rounding errors. Traditional splitting apps either enforce uniform splits or accumulate penny discrepancies that don't match the receipt total. Combining multimodal AI with strict mathematical apportionment solves both friction points.",
      es: "Dividir cuentas en salidas grupales suele ser lento, incómodo y propenso a errores de redondeo. Las aplicaciones tradicionales imponen divisiones iguales o generan discrepancias de centavos que no cuadran con el total. Combinar IA multimodal con algoritmos matemáticos exactos elimina ambas fricciones.",
    },
    solution: {
      en: "Built a CLI and QR-enabled mobile web tool that scans receipts from photos using Google Gemini API and Pydantic schemas. Applies the Hare-Niemeyer largest-remainder algorithm to distribute taxes and tips proportionally while guaranteeing zero-penny discrepancy against the receipt total.",
      es: "Desarrollé una herramienta CLI y web móvil con código QR que escanea facturas por foto usando la API de Google Gemini y esquemas Pydantic. Aplica el algoritmo de Hare-Niemeyer para prorratear impuestos y propinas proporcionalmente, garantizando cuadre exacto al centavo sin fugas de redondeo.",
    },
    stack: [
      "Python 3.10+",
      "Google Gemini API",
      "Pydantic",
      "Typer",
      "Rich",
      "Pytest",
      "Hare-Niemeyer Algorithm",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/IvanCastillero/bill-splitter",
    featuredMetric: {
      en: "Zero-Penny Leak Guaranteed",
      es: "Cuadre Exacto al Centavo",
    },
    images: [],
  },
];
