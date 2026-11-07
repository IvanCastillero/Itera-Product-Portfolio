import {
  EnterpriseProject,
  OtherEnterpriseWorkSection,
  PersonalProject,
  PersonalProjectsHeaderData,
  PortfolioImpactConsolidation,
  ProductPillar,
  TalksSectionData,
} from "@/types";

export const siteMetadata = {
  name: "Iván Castillero",
  role: "Product Manager",
  edition: "PRODUCT & SYSTEMS PORTFOLIO",
  location: {
    en: "Panama City · Open to Global Remote",
    es: "Ciudad de Panamá · Disponible Remoto Global",
  },
  email: "ivancastillero102@gmail.com",
  github: "https://github.com/IvanCastillero",
  linkedin: "https://www.linkedin.com/in/ivan-castillero",
};

export const navigationLinks = [
  {
    key: "impact",
    index: "01",
    href: "#impact",
    label: { en: "Impact", es: "Impacto" },
  },
  {
    key: "enterprise",
    index: "02",
    href: "#enterprise",
    label: { en: "Enterprise Experience", es: "Experiencia Empresarial" },
  },
  {
    key: "work",
    index: "03",
    href: "#work",
    label: { en: "Personal Projects", es: "Proyectos Personales" },
  },
  {
    key: "about",
    index: "04",
    href: "#about",
    label: { en: "About & Philosophy", es: "Sobre mí y Filosofía" },
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
  headlinePre: {
    en: "Building products where data, technology and",
    es: "Construyo productos donde se encuentran los datos, la tecnología y",
  },
  headlineSerif: {
    en: "people meet.",
    es: "las personas.",
  },
  subtitle: {
    en: "Welcome to my Product Manager portfolio. I take messy operational problems and turn them into digital products people actually use—focusing on understanding users, measuring what matters, and working closely with engineering to build things that last.",
    es: "Bienvenido a mi portafolio como Product Manager. Tomo problemas operativos complejos y los convierto en productos digitales que la gente realmente usa: me enfoco en entender a los usuarios, medir lo que importa y trabajar de cerca con ingeniería para construir soluciones que duren.",
  },
  buttons: {
    exploreWork: {
      en: "Explore Work",
      es: "Explorar Proyectos",
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
      en: "Copied to clipboard",
      es: "¡Correo copiado!",
    },
    viewResume: {
      en: "Resume / CV (PDF)",
      es: "Ver CV (PDF)",
    },
  },
  stats: [
    {
      value: "Multi-Million USD",
      label: {
        en: "Enterprise accounts retained & expanded",
        es: "Cuentas estratégicas retenidas y expandidas",
      },
    },
    {
      value: "~US$75K–$200K+/yr",
      label: {
        en: "Operational savings range across scaled initiatives",
        es: "Rango de ahorro operativo anual en iniciativas escaladas",
      },
    },
    {
      value: "1,200+ hrs/mo",
      label: {
        en: "Engineering & operations capacity freed",
        es: "Capacidad de ingeniería y operación liberada al mes",
      },
    },
  ],
};

export const portfolioImpact2026: PortfolioImpactConsolidation = {
  sectionIndex: "01 // PORTFOLIO IMPACT",
  tag: {
    en: "Quantitative Impact Summary",
    es: "Resumen de Impacto Acumulado",
  },
  title: {
    en: "Measurable Results Across Enterprise Initiatives",
    es: "Resultados Medibles en Soluciones Empresariales",
  },
  subtitle: {
    en: "A high-level view of the financial, operational, and commercial impact generated across initiatives I have led end-to-end and co-led with regional teams.",
    es: "Un resumen del impacto financiero, operativo y comercial generado en los proyectos que he liderado de principio a fin y en despliegues colaborativos en la región.",
  },
  modes: {
    direct: {
      label: {
        en: "Directly Led",
        es: "Liderados Directamente",
      },
      description: {
        en: "Baseline operational savings and engineering capacity released in initiatives led end-to-end from discovery to operational handover.",
        es: "Ahorro operativo base y capacidad liberada en iniciativas lideradas de principio a fin, desde el descubrimiento hasta el traspaso a operación.",
      },
      metrics: [
        {
          value: "~US$4K–$5K/mo",
          unit: { en: "~US$50K / year base", es: "~US$50K / año base" },
          label: {
            en: "Direct Operational Savings",
            es: "Ahorro Operativo Directo",
          },
          detail: {
            en: "Baseline savings across service report automation and internal support workflows",
            es: "Ahorro base combinando automatización de informes de servicio y flujos de soporte",
          },
          highlight: "emerald",
        },
        {
          value: "1,200+ hrs/mo",
          unit: { en: "Reallocated capacity", es: "Capacidad reasignada" },
          label: {
            en: "Engineering & Agent Time Freed",
            es: "Tiempo de Ingeniería y Operación Liberado",
          },
          detail: {
            en: "Over 1,200 hrs/mo of specialized engineers + ~80 hrs/mo of back-office agents freed for high-value work",
            es: "Más de 1.200 hrs/mes de ingenieros + ~80 hrs/mes en back-office liberadas para tareas de mayor valor",
          },
          highlight: "terracotta",
        },
        {
          value: "~US$9M+",
          unit: { en: "Strategic Retention", es: "Retención Estratégica" },
          label: {
            en: "Account Value Reinforced",
            es: "Valor de Cuenta Blindado",
          },
          detail: {
            en: "Reinforced retention and unlocked a new modernization roadmap for a major public-sector client in Central America",
            es: "Retención reforzada e inicio de proyecto de modernización en una cuenta clave del sector público en Centroamérica",
          },
          highlight: "amber",
        },
      ],
    },
    total: {
      label: {
        en: "Total Consolidated",
        es: "Total Consolidado",
      },
      description: {
        en: "Combined impact across all initiatives where I led or co-led product launches, including omnichannel observability automation and regional expansion.",
        es: "Impacto combinado considerando el total de iniciativas donde lideré o co-lideré lanzamientos, sumando automatización omnicanal y expansión regional.",
      },
      metrics: [
        {
          value: "~US$6K–$7K/mo",
          unit: { en: "~US$75K–$80K / year", es: "~US$75K–$80K / año" },
          label: {
            en: "Combined Operational Savings",
            es: "Ahorro Operativo Consolidado",
          },
          detail: {
            en: "Directly led automations plus ~US$2K–$2.5K/mo in NOC / observability dispatch savings",
            es: "Iniciativas lideradas directamente más ~US$2K–$2.5K/mes de ahorro en operaciones de observabilidad",
          },
          highlight: "emerald",
        },
        {
          value: "~30% Fewer Hrs",
          unit: { en: "+ 1,200+ hrs/mo freed", es: "+ 1.200+ hrs/mes liberadas" },
          label: {
            en: "Operational Capacity Gain",
            es: "Eficiencia en Capacidad Operativa",
          },
          detail: {
            en: "~30% reduction in manual alert-handling hours for observability agents alongside engineering time saved",
            es: "Reducción de ~30% en horas de agentes de observabilidad sumada a la capacidad liberada en ingeniería",
          },
          highlight: "terracotta",
        },
        {
          value: "Multi-Region",
          unit: {
            en: "LATAM · Caribbean · Europe",
            es: "Centroamérica · Caribe · Europa",
          },
          label: {
            en: "Commercial & Service Footprint",
            es: "Alcance Regional y Nuevos Servicios",
          },
          detail: {
            en: "Solutions operating across Central America, the Caribbean, South America, and Europe",
            es: "Soluciones operando en Centroamérica y el Caribe, con despliegues en Sudamérica y Europa",
          },
          highlight: "amber",
        },
      ],
    },
    scale: {
      label: {
        en: "Projected Scale",
        es: "Potencial a Escala",
      },
      description: {
        en: "Projected portfolio impact as automated service reporting scales from its initial ~50-contract rollout to 200+ enterprise contracts.",
        es: "Impacto proyectado del portafolio conforme la automatización de informes escala de sus primeros ~50 contratos hacia ~200 contratos empresariales.",
      },
      metrics: [
        {
          value: "Up to ~US$18K/mo",
          unit: { en: "~US$200K+ / year", es: "~US$200K+ / año" },
          label: {
            en: "Projected Annualized Savings",
            es: "Potencial de Ahorro Anualizado",
          },
          detail: {
            en: "Up to ~US$15K/mo from scaled report automation (~200 contracts) combined with support and NOC automations",
            es: "Hasta ~US$15K/mes al escalar informes automatizados (~200 contratos) sumado a soporte y observabilidad",
          },
          highlight: "amber",
        },
        {
          value: "~50 → 200+",
          unit: { en: "4x Contract Scale", es: "Escalamiento 4x" },
          label: {
            en: "Enterprise Contract Coverage",
            es: "Cobertura de Contratos Empresariales",
          },
          detail: {
            en: "Unified data architecture designed to scale 4x across regional managed-service contracts",
            es: "Arquitectura de datos unificada diseñada para escalar 4x en contratos regionales de servicios",
          },
          highlight: "emerald",
        },
        {
          value: "New B2B Service",
          unit: { en: "Commercialized AI Offering", es: "Nuevo Servicio Comercializable" },
          label: {
            en: "External Service Enablement",
            es: "Habilitación de Nuevos Servicios",
          },
          detail: {
            en: "Internal conversational AI automation validated with international clients as a commercializable managed service",
            es: "Automatización con IA conversacional validada con clientes en Sudamérica y Europa como servicio comercializable",
          },
          highlight: "terracotta",
        },
      ],
    },
  },
  keyAccountsSummary: {
    title: {
      en: "Strategic Account Retention & Commercial Growth",
      es: "Impacto en Retención de Cuentas y Crecimiento Comercial",
    },
    items: [
      {
        client: "Public Sector Institution · Central America",
        metric: "~US$9M+ Retained",
        description: {
          en: "Facilitated an executive prioritization workshop that kicked off a new modernization project and reinforced the retention of a multi-million-dollar (~US$9M) enterprise contract.",
          es: "Taller ejecutivo de priorización que facilitó el inicio de un nuevo proyecto de modernización y reforzó la retención de un contrato multimillonario (~US$9M) en Centroamérica.",
        },
      },
      {
        client: "Consumer Goods Enterprise · Regional Tech Summit",
        metric: "New Pipeline",
        description: {
          en: "Led the product presentation and discovery showcase during a flagship cloud innovation event, generating new commercial demand and B2B opportunities.",
          es: "Presentación y ejecución de descubrimiento en un evento regional de innovación tecnológica, generando nuevas oportunidades de negocio y demanda comercial.",
        },
      },
      {
        client: "Managed Operations · South America & Europe",
        metric: "New Service Line",
        description: {
          en: "Piloted conversational alert automation with enterprise operations teams in South America and Europe, turning an internal platform into a commercializable service.",
          es: "Despliegue de piloto conversacional con clientes en Sudamérica y Europa, habilitando la plataforma como un nuevo servicio comercializable de operaciones.",
        },
      },
    ],
  },
};

export const enterpriseIntro = {
  en: "Over the past years I've worked as a Product Manager on solutions for organizations across Central America, the Caribbean, South America, and Europe, in industries like banking, retail, consumer goods, and government. Working closely with engineering and UX/UI teams, these are some of the main projects I've led and contributed to.",
  es: "Durante los últimos años he trabajado como Product Manager en soluciones para empresas de Centroamérica, el Caribe, Sudamérica y Europa, en industrias como banca, retail, consumo masivo y sector público. Trabajando junto a equipos de desarrollo y UX/UI, estos son algunos de los proyectos principales en los que he participado.",
};

export const enterpriseProjects: EnterpriseProject[] = [
  {
    id: "coe-reports",
    code: "PROJECT 01",
    leadershipType: "direct",
    leadershipBadge: {
      en: "Product Manager · Led End-to-End",
      es: "Product Manager · Liderado de Principio a Fin",
    },
    statusBadge: {
      en: "Incubation & Operational Handover",
      es: "Incubación y Traspaso Operativo",
    },
    category: {
      en: "Data & Process Automation",
      es: "Datos y Automatización de Procesos",
    },
    title: {
      en: "Client Service Report Automation",
      es: "Automatización de Informes de Servicio",
    },
    role: {
      en: "Product Manager · Discovery, Data Unification & Rollout",
      es: "Product Manager · Descubrimiento, Unificación de Datos y Despliegue",
    },
    problem: {
      en: "Specialized engineering teams built monthly client service reports completely by hand, pulling scattered information across multiple disconnected systems. It was slow, repetitive work that consumed hundreds of engineering hours every month.",
      es: "El equipo de ingeniería del Centro de Excelencia elaboraba los informes de servicio de cada cliente de forma totalmente manual, extrayendo información de fuentes dispersas en distintos sistemas. Era un trabajo lento y repetitivo que consumía cientos de horas de talento técnico.",
    },
    action: {
      en: "Led the product from discovery to operational handover alongside development and UX/UI teams. Unified scattered data sources into a single standardized model, launching an initial rollout for ~50 enterprise contracts designed to scale to ~200 contracts.",
      es: "Lideré el proyecto como Product Manager junto a los equipos de desarrollo y UX/UI. Unifiqué las fuentes de datos dispersas en una base estandarizada para automatizar la generación de reportes, con un alcance inicial de ~50 contratos preparado para escalar hasta ~200 contratos.",
    },
    resultSummary: {
      en: "Generates ~US$3.5K–$4K/mo (~US$45K/yr) in baseline operational savings, with scaling potential up to ~US$15K/mo (~US$180K/yr) and up to 1,200 engineering hours/month freed (~80% reduction in manual effort).",
      es: "Genera entre ~US$3.5K y $4K/mes (~US$45K/año) en ahorro operativo base, con potencial de escalar hasta ~US$15K/mes (~US$180K/año) y hasta 1.200 horas/mes de ingeniería liberadas (~80% menos tiempo manual).",
    },
    keyMetrics: [
      {
        value: "~US$45K/yr",
        label: {
          en: "Baseline Operational Savings",
          es: "Ahorro Operativo Base",
        },
        sublabel: {
          en: "~US$3.5K–$4K/mo across initial ~50 contracts",
          es: "~US$3.5K–$4K/mes en los primeros ~50 contratos",
        },
        tone: "emerald",
      },
      {
        value: "Up to ~US$180K/yr",
        label: {
          en: "Scaling Potential (~200 Contracts)",
          es: "Potencial a Escala (~200 Contratos)",
        },
        sublabel: {
          en: "Up to ~US$15K/mo at full enterprise rollout",
          es: "Hasta ~US$15K/mes al completar el escalamiento",
        },
        tone: "amber",
      },
      {
        value: "~1,200 hrs/mo",
        label: {
          en: "Engineering Capacity Freed",
          es: "Capacidad de Ingeniería Liberada",
        },
        sublabel: {
          en: "~80% fewer manual hours · Reinvested in high-value work",
          es: "~80% menos horas manuales · Reasignadas a mayor valor",
        },
        tone: "terracotta",
      },
    ],
    dossier: {
      goal: {
        en: "Eliminate manual report compilation bottlenecks, standardize service metrics across regional client contracts, and free up to 1,200 hours/month of engineering time without reducing headcount.",
        es: "Eliminar el cuello de botella en la creación manual de informes, estandarizar las métricas de servicio entre contratos y liberar hasta 1.200 horas/mes de ingeniería para tareas estratégicas sin reducción de personal.",
      },
      researchAndDiscovery: {
        en: "Shadowed engineers and service managers across multiple client accounts to map the real extraction workflow, discovering that ~80% of reporting time went into reconciling inconsistent data formats rather than analyzing service health.",
        es: "Realicé sesiones de trabajo con ingenieros y líderes de servicio para mapear el flujo real de extracción, identificando que cerca del 80% del tiempo se perdía conciliando fuentes de datos incompatibles y no en el análisis de valor.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Standardization vs. Custom Templates: Prioritized a unified core data schema covering the first ~50 contracts rather than building bespoke views per client, enabling the 4x scale path toward ~200 contracts.",
          "Automation with Expert Review: Automated data ingestion and layout generation while preserving a final review step for engineers, accelerating trust and adoption during handover.",
        ],
        es: [
          "Estandarización vs. Plantillas a Medida: Prioricé un modelo de datos unificado para los primeros ~50 contratos en lugar de vistas aisladas por cliente, habilitando el camino técnico para escalar a ~200 contratos.",
          "Automatización con Revisión Experta: Automaticé la ingesta y el armado del informe manteniendo un espacio de validación para el ingeniero, facilitando la adopción y el traspaso.",
        ],
      },
      keyLearnings: {
        en: "Internal enterprise platforms succeed when engineers experience automation as relief from repetitive administrative toil so they can focus on high-impact technical problem solving.",
        es: "Las herramientas operativas internas tienen éxito cuando el equipo técnico percibe la automatización como un alivio de tareas administrativas repetitivas para poder enfocarse en ingeniería de alto impacto.",
      },
    },
    frameworks: [
      "Data Unification",
      "Process Automation",
      "Scrum",
      "UX/UI Collaboration",
      "ROI Modeling",
    ],
    impactBadges: {
      en: [
        "~US$45K/yr baseline savings",
        "Up to ~US$180K/yr at scale",
        "~1,200 engineering hrs/mo freed",
        "~50 to 200+ contracts",
      ],
      es: [
        "~US$45K/año ahorro base",
        "Hasta ~US$180K/año a escala",
        "~1.200 hrs/mes liberadas",
        "~50 a 200+ contratos",
      ],
    },
    highlights: {
      en: [
        "Led the project as Product Manager alongside development and UX/UI teams, unifying scattered data sources into a single automated reporting base.",
        "Delivers ~US$3.5K–$4K/month (~US$45K/year) in baseline operational savings across an initial scope of ~50 contracts, with projected scale up to ~US$15K/month (~US$180K/year) across ~200 contracts.",
        "Cuts ~80% of manual reporting hours, freeing up to 1,200 hours/month of engineering capacity for higher-value initiatives without reducing staff.",
      ],
      es: [
        "Lideré el proyecto como Product Manager junto a los equipos de desarrollo y UX/UI, unificando fuentes dispersas en una sola base automatizada.",
        "Genera ~US$3.5K–$4K/mes (~US$45K/año) de ahorro operativo base en un alcance inicial de ~50 contratos, con potencial de escalar hasta ~US$15K/mes (~US$180K/año) en ~200 contratos.",
        "Reduce en ~80% las horas manuales de elaboración de informes, liberando hasta 1.200 horas/mes de ingenieros para tareas de mayor valor sin reducción de personal.",
      ],
    },
  },
  {
    id: "strategy-workshops",
    code: "PROJECT 02",
    leadershipType: "direct",
    leadershipBadge: {
      en: "Workshop Facilitator · Led End-to-End",
      es: "Facilitador de Estrategia · Liderado de Principio a Fin",
    },
    statusBadge: {
      en: "Discovery & Executive Alignment",
      es: "Descubrimiento y Alineación Directiva",
    },
    category: {
      en: "Strategy & Facilitation",
      es: "Estrategia y Facilitación",
    },
    title: {
      en: "Ideation, Prioritization & Alignment Workshops",
      es: "Talleres de Ideación, Priorización y Alineación",
    },
    role: {
      en: "Strategy & Discovery Facilitator · ~10 Regional Executive Sessions",
      es: "Facilitador de Talleres y Descubrimiento · ~10 Sesiones Regionales",
    },
    problem: {
      en: "Leadership teams across banking, retail, consumer goods, and government had more initiatives on the table than they could execute, and no shared framework to decide which ones were truly worth pursuing.",
      es: "Los equipos directivos en empresas de banca, retail, consumo masivo y sector público tenían más iniciativas sobre la mesa de las que podían ejecutar y no contaban con una estructura común para decidir cuáles valía la pena impulsar.",
    },
    action: {
      en: "Facilitated around 10 virtual and in-person workshops for leadership teams across Central America and the Caribbean, adapting methodologies like Working Backwards and Design Thinking to our region's culture and always starting from the end user.",
      es: "Facilité alrededor de 10 talleres en formato virtual y presencial para equipos directivos en Centroamérica y el Caribe, adaptando metodologías como Working Backwards y Design Thinking a la cultura de la región y partiendo siempre del usuario final.",
    },
    resultSummary: {
      en: "Unlocked a new modernization project and reinforced the retention of a ~US$9M+ enterprise contract in the public sector, while generating new B2B commercial opportunities with regional retail and consumer goods leaders.",
      es: "Facilitó el inicio de un nuevo proyecto de modernización y reforzó la retención de un contrato estratégico de ~US$9M+ en el sector público, además de generar nuevas oportunidades comerciales con líderes de consumo masivo y retail en la región.",
    },
    keyMetrics: [
      {
        value: "~US$9M+ Contract",
        label: {
          en: "Enterprise Account Retained & Expanded",
          es: "Contrato Estratégico Retenido y Reforzado",
        },
        sublabel: {
          en: "Public sector institution in Central America + new modernization project",
          es: "Institución del sector público en Centroamérica + nuevo proyecto",
        },
        tone: "amber",
      },
      {
        value: "New B2B Pipeline",
        label: {
          en: "Commercial Demand Generated",
          es: "Nuevas Oportunidades Comerciales",
        },
        sublabel: {
          en: "Executive showcase at a regional cloud & technology innovation event",
          es: "Presentación y descubrimiento en evento regional de innovación tecnológica",
        },
        tone: "emerald",
      },
      {
        value: "~10 Workshops",
        label: {
          en: "Leadership-Level Sessions",
          es: "Sesiones con Equipos Directivos",
        },
        sublabel: {
          en: "Banking, retail, consumer goods & government",
          es: "Banca, retail, consumo masivo y gobierno",
        },
        tone: "terracotta",
      },
    ],
    dossier: {
      goal: {
        en: "Help leadership teams discard low-impact ideas, prioritize high-value initiatives backed by user needs, and align stakeholders on an actionable roadmap.",
        es: "Ayudar a los comités directivos a descartar ideas de bajo impacto, priorizar iniciativas de alto valor centradas en el usuario y alinear a los stakeholders en una hoja de ruta accionable.",
      },
      researchAndDiscovery: {
        en: "Conducted pre-session stakeholder interviews to understand institutional constraints, business priorities, and end-user friction points before facilitating executive alignment.",
        es: "Realicé sesiones previas de entendimiento con actores clave para mapear restricciones operativas, dolores de los usuarios y prioridades del negocio antes de cada taller.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Pragmatic Adaptation vs. Rigid Frameworks: Adapted Working Backwards and Design Thinking to Latin American executive dynamics so teams could reach concrete prioritization decisions within tight workshop windows.",
          "Problem-First Discovery at Tech Events: Focused executive showcases on tangible operational challenges rather than abstract technology features, directly sparking commercial follow-ups.",
        ],
        es: [
          "Adaptación Pragmática vs. Marcos Rígidos: Adapté Working Backwards y Design Thinking a la cultura directiva de la región para lograr acuerdos reales de priorización y descarte en sesiones ejecutivas.",
          "Enfoque en Problemas Reales de Negocio: En eventos de innovación tecnológica centré las sesiones en resolver cuellos de botella concretos del cliente, detonando nuevas oportunidades comerciales.",
        ],
      },
      keyLearnings: {
        en: "Structured product discovery is one of the strongest levers for account retention: helping a client’s leadership team gain clarity on their own strategy builds deep, lasting trust.",
        es: "El descubrimiento estructurado de producto es una palanca clave de retención comercial: cuando ayudas a un equipo directivo a ordenar su estrategia con datos, fortaleces la confianza a largo plazo.",
      },
    },
    frameworks: [
      "Working Backwards",
      "Design Thinking",
      "Customer-Centric Prioritization",
      "Executive Facilitation",
      "Miro",
    ],
    impactBadges: {
      en: [
        "~US$9M+ contract retained",
        "~10 leadership workshops",
        "Banking, retail & government",
        "Central America & Caribbean",
      ],
      es: [
        "Contrato ~US$9M+ reforzado",
        "~10 talleres directivos",
        "Banca, retail y gobierno",
        "Centroamérica y el Caribe",
      ],
    },
    highlights: {
      en: [
        "Facilitated around 10 virtual and in-person workshops for internal and external leadership teams across Central America and the Caribbean in banking, retail, consumer goods, and government.",
        "Led a strategic prioritization workshop for a major public-sector institution that unlocked a new modernization project and reinforced the retention of a ~US$9M+ enterprise contract.",
        "Delivered an executive discovery showcase with a leading consumer goods enterprise at a flagship technology innovation event, generating new commercial demand and business opportunities.",
      ],
      es: [
        "Facilité alrededor de 10 talleres presenciales y virtuales para equipos directivos en Centroamérica y el Caribe en industrias como banca, retail, consumo masivo y gobierno.",
        "Lideré un taller de priorización para una institución del sector público que facilitó el inicio de un nuevo proyecto de modernización y reforzó la retención de un contrato por ~US$9M+.",
        "Ejecuté una sesión de descubrimiento e innovación con una empresa líder de consumo masivo durante un evento regional de tecnología en la nube, generando nuevas oportunidades comerciales.",
      ],
    },
  },
  {
    id: "servicebot",
    code: "PROJECT 03",
    leadershipType: "direct",
    leadershipBadge: {
      en: "Product Manager · Led End-to-End",
      es: "Product Manager · Liderado de Principio a Fin",
    },
    statusBadge: {
      en: "Production Release & Handover",
      es: "Lanzamiento a Producción y Traspaso",
    },
    category: {
      en: "Service Desk & Workflow Automation",
      es: "Automatización de Soporte y Back Office",
    },
    title: {
      en: "Automated Service Desk & Back-Office Assistant",
      es: "Asistente Automatizado para Service Desk y Back Office",
    },
    role: {
      en: "Product Manager · Scoping, MVP Delivery & Handover",
      es: "Product Manager · Definición de Alcance, Entrega de MVP y Traspaso",
    },
    problem: {
      en: "Service Desk and back-office agents spent dozens of hours every month handling repetitive ticket triage, status checks, and routine routing—taking valuable time away from complex support cases.",
      es: "Los agentes de Service Desk y Back Office invertían decenas de horas cada mes en tareas operativas repetitivas de clasificación, consulta y enrutamiento rutinario, restando tiempo para resolver incidentes complejos.",
    },
    action: {
      en: "Led the product from discovery through production readiness and operational handover, focusing the MVP on the highest-frequency back-office workflows to deliver immediate, reliable time savings.",
      es: "Lideré el ciclo de vida del producto desde el levantamiento del problema hasta su preparación para producción y traspaso operativo, enfocando el MVP en automatizar los flujos de mayor volumen en Back Office.",
    },
    resultSummary: {
      en: "Generates ~US$400–$500/mo (~US$5K/yr) in direct Service Desk savings and frees ~80 hours/month (~960 hours/year) of back-office agent capacity.",
      es: "Genera alrededor de ~US$400–$500/mes (~US$5K/año) en ahorro operativo directo para el Service Desk y libera ~80 horas/mes (~960 horas/año) de agentes de Back Office.",
    },
    keyMetrics: [
      {
        value: "~US$5K/yr",
        label: {
          en: "Direct Service Desk Savings",
          es: "Ahorro Operativo en Service Desk",
        },
        sublabel: {
          en: "~US$400–$500/mo baseline operational reduction",
          es: "~US$400–$500/mes de ahorro operativo directo",
        },
        tone: "emerald",
      },
      {
        value: "~80 hrs/mo",
        label: {
          en: "Back-Office Capacity Freed",
          es: "Horas Liberadas en Back Office",
        },
        sublabel: {
          en: "~960 agent hours/year reallocated to complex tickets",
          es: "~960 horas/año reasignadas a casos complejos",
        },
        tone: "terracotta",
      },
      {
        value: "End-to-End",
        label: {
          en: "Operational Handover",
          es: "Traspaso Operativo Completo",
        },
        sublabel: {
          en: "Scoped, validated, and transferred to operations",
          es: "Diseñado, validado y transferido a operación",
        },
        tone: "amber",
      },
    ],
    dossier: {
      goal: {
        en: "Automate high-frequency, low-complexity Service Desk interactions to reclaim ~80 hours/month of back-office bandwidth and reduce monthly operating costs.",
        es: "Automatizar las gestiones repetitivas de mayor frecuencia en el Service Desk para liberar ~80 horas/mes de capacidad en Back Office y optimizar el costo operativo.",
      },
      researchAndDiscovery: {
        en: "Analyzed historical ticket logs and worked with back-office coordinators to isolate the specific request categories where manual intervention added no diagnostic value.",
        es: "Analicé el historial de tickets junto a coordinadores de soporte para identificar las categorías exactas donde la intervención manual no aportaba valor diagnóstico.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Focused Deterministic Scope: Prioritized high-volume structured workflows for the initial launch rather than open-ended chat, ensuring high reliability for operational handover.",
          "Context-Rich Escalation: Designed clear fallback rules so complex cases reach human agents with all pre-collected ticket context.",
        ],
        es: [
          "Alcance Acotado y Confiable: Prioricé los flujos estructurados de mayor volumen antes de abrir casos conversacionales complejos, asegurando estabilidad para el equipo que recibe el traspaso.",
          "Escalamiento con Contexto: Diseñé reglas claras para que las excepciones lleguen al agente humano con toda la información previa lista.",
        ],
      },
      keyLearnings: {
        en: "Well-scoped internal automations create immediate operational breathing room when designed from day one around the team that will maintain them in production.",
        es: "Las automatizaciones operativas bien acotadas generan alivio inmediato cuando se diseñan desde el primer día pensando en el equipo que las operará en el día a día.",
      },
    },
    frameworks: [
      "Service Desk Automation",
      "Conversational Workflows",
      "Scrum",
      "Operational Handover",
    ],
    impactBadges: {
      en: [
        "~US$5K/yr operational savings",
        "~80 hrs/mo back-office freed",
        "Production handover",
      ],
      es: [
        "~US$5K/año ahorro operativo",
        "~80 hrs/mes liberadas en Back Office",
        "Traspaso a operación",
      ],
    },
    highlights: {
      en: [
        "Scoped and led the delivery of an automated assistant for Service Desk and back-office workflows.",
        "Delivers ~US$400–$500/month (~US$5K/year) in direct operational savings for the support operation.",
        "Frees ~80 hours/month of back-office agent capacity so specialists can focus on higher-complexity escalations.",
      ],
      es: [
        "Definí el alcance y lideré la entrega de un asistente automatizado para flujos de Service Desk y Back Office.",
        "Genera ~US$400–$500/mes (~US$5K/año) de ahorro operativo directo para el área de soporte.",
        "Libera ~80 horas/mes de capacidad de agentes de Back Office para la atención de casos de mayor complejidad.",
      ],
    },
  },
  {
    id: "omnibot",
    code: "PROJECT 04",
    leadershipType: "co-led",
    leadershipBadge: {
      en: "Product Manager · Co-Led & Releases",
      es: "Product Manager · Co-Liderazgo y Lanzamientos",
    },
    statusBadge: {
      en: "In Production & Regional Expansion",
      es: "En Producción y Expansión Internacional",
    },
    category: {
      en: "Conversational AI & Operations",
      es: "IA Conversacional y Operaciones",
    },
    title: {
      en: "Omnichannel Alert Automation",
      es: "Automatización Omnicanal de Alertas",
    },
    role: {
      en: "Product Manager · Feature Launches & International Commercial Pilot",
      es: "Product Manager · Lanzamiento de Funcionalidades y Piloto Internacional",
    },
    problem: {
      en: "Observability agents spent a large portion of their shifts manually notifying resolver groups every time an alert came in. This repetitive dispatch work consumed ~30% of agent capacity and took focus away from preventive tasks.",
      es: "Los agentes de observabilidad dedicaban mucho tiempo a notificar manualmente a los grupos resolutores cada vez que llegaba una alerta. Era trabajo repetitivo que absorbía ~30% de su capacidad y restaba tiempo para alertas preventivas.",
    },
    action: {
      en: "Worked as one of the Product Managers of the platform, leading the launch of new features and versions using conversational AI, and co-leading the commercial pilot to bring the solution to external clients in South America and Europe.",
      es: "Fui uno de los Product Managers de la plataforma, liderando el lanzamiento de nuevas versiones con IA conversacional y participando en el despliegue del piloto comercial para clientes en Sudamérica y Europa.",
    },
    resultSummary: {
      en: "Generates ~US$2K–$2.5K/mo (~US$28K–$30K/yr) in direct NOC operational savings, reduces manual agent hours by ~30% (1,000+ minutes/month automated at 100% SLA), and enabled a new commercializable B2B service across Latin America and Europe.",
      es: "Genera entre ~US$2K y $2.5K/mes (~US$28K–$30K/año) en ahorro directo para operaciones de observabilidad, reduce en ~30% las horas manuales de agentes (1.000+ min/mes automatizados al 100% de SLA) y habilitó un nuevo servicio comercializable en Sudamérica y Europa.",
    },
    keyMetrics: [
      {
        value: "~US$28K–$30K/yr",
        label: {
          en: "Direct Operations / NOC Savings",
          es: "Ahorro Directo en Operaciones / NOC",
        },
        sublabel: {
          en: "~US$2K–$2.5K/mo in active production",
          es: "~US$2K–$2.5K/mes en operación productiva",
        },
        tone: "emerald",
      },
      {
        value: "~30% Fewer Hrs",
        label: {
          en: "Agent Capacity Efficiency",
          es: "Reducción en Horas de Agentes",
        },
        sublabel: {
          en: "1,000+ min/mo automated · 100% SLA compliance",
          es: "1.000+ min/mes automatizados · 100% cumplimiento SLA",
        },
        tone: "terracotta",
      },
      {
        value: "LATAM & Europe",
        label: {
          en: "International Footprint & New Service",
          es: "Presencia Internacional y Nuevo Servicio",
        },
        sublabel: {
          en: "Central America, Caribbean, South America & Europe",
          es: "Centroamérica, Caribe, Sudamérica y Europa",
        },
        tone: "amber",
      },
    ],
    dossier: {
      goal: {
        en: "Automate repetitive incident notification across channels while evolving an internal operational tool into a commercializable managed service for enterprise clients.",
        es: "Automatizar la notificación omnicanal de incidentes y evolucionar una plataforma de eficiencia interna hasta convertirla en un servicio comercializable para clientes empresariales.",
      },
      researchAndDiscovery: {
        en: "Monitored observability response times and SLA compliance alongside NOC operators to identify how conversational AI confirmation flows could replace manual phone and chat follow-ups.",
        es: "Analicé los tiempos de respuesta y el cumplimiento de SLAs junto a los operadores para diseñar flujos de confirmación con IA conversacional que reemplazaran el seguimiento manual.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Operational Maturity Before Commercialization: Consolidated the ~30% reduction in manual agent hours internally at 100% SLA compliance before packaging the conversational pilot for external clients in South America and Europe.",
          "Proactive Capacity Reallocation: Automated critical dispatch notifications first so human agents could focus their freed time on non-critical and preventive alerts.",
        ],
        es: [
          "Solidez Interna Antes de Comercializar: Consolidamos primero la reducción de ~30% en horas de agentes y el 100% de SLA en la operación interna antes de lanzar el piloto comercial en Sudamérica y Europa.",
          "Reasignación Preventiva: Al automatizar el contacto inmediato de alertas críticas, permitimos que los agentes dedicaran su tiempo a atender alertas no críticas de forma preventiva.",
        ],
      },
      keyLearnings: {
        en: "Proving measurable operational savings internally (~US$28K–$30K/yr) is the strongest foundation for taking a B2B operational product to external markets.",
        es: "Demostrar ahorros operativos medibles adentro (~US$28K–$30K/año) es la base más sólida para llevar un producto interno al mercado como nuevo servicio B2B.",
      },
    },
    frameworks: [
      "Conversational AI",
      "Observability & SLA",
      "Scrum",
      "OKR",
      "Release Planning",
    ],
    impactBadges: {
      en: [
        "~US$28K–$30K/yr savings",
        "~30% reduction in agent hours",
        "1,000+ min/mo automated",
        "Central America, Caribbean, South America & Europe",
      ],
      es: [
        "~US$28K–$30K/año en ahorro",
        "~30% reducción en horas de agentes",
        "1.000+ min/mes automatizados",
        "Centroamérica, Caribe, Sudamérica y Europa",
      ],
    },
    highlights: {
      en: [
        "Worked as one of the Product Managers of the platform and led the launch of several new features and versions powered by conversational AI.",
        "Generates ~US$2K–$2.5K/month (~US$28K–$30K/year) in direct operational savings and reduces manual agent hours by ~30% (1,000+ minutes/month automated), allowing teams to focus on non-critical alerts.",
        "Operates across Central America and the Caribbean, and expanded to enterprise clients in South America and Europe—enabling it as a new commercializable service.",
      ],
      es: [
        "Fui uno de los Product Managers de la plataforma y lideré el lanzamiento de varias funcionalidades y versiones nuevas con IA conversacional.",
        "Genera entre ~US$2K y $2.5K/mes (~US$28K–$30K/año) en ahorro operativo directo y reduce en ~30% las horas manuales de los agentes (más de 1.000 minutos/mes automatizados), permitiéndoles enfocarse en alertas no críticas.",
        "Opera en Centroamérica y el Caribe, y se expandió mediante pilotos y despliegues en Sudamérica y Europa, habilitándose como un nuevo servicio comercializable.",
      ],
    },
  },
];

export const otherEnterpriseWork: OtherEnterpriseWorkSection = {
  title: {
    en: "Other Enterprise Projects",
    es: "Otros Proyectos Empresariales",
  },
  items: [
    {
      tag: { en: "AI Assessment MVP", es: "MVP con IA" },
      title: {
        en: "AI Candidate Evaluation System",
        es: "Sistema de Evaluación de Candidatos con IA",
      },
      en: "Defined the MVP for an AI-powered candidate evaluation system, ran field tests, and collected and processed the resulting data.",
      es: "Definí el MVP de un sistema de evaluación de candidatos con IA, realicé pruebas en campo y recolecté y procesé los datos obtenidos.",
    },
    {
      tag: { en: "Innovation Workflow", es: "Flujo de Innovación" },
      title: {
        en: "Enterprise Innovation Facilitation",
        es: "Facilitación de Innovación Empresarial",
      },
      en: "As innovation facilitator, helped define an enterprise innovation workflow and supported product squads with methodology, prototyping, and testing.",
      es: "Como facilitador de innovación, ayudé a definir el flujo de innovación empresarial y apoyé a las células de trabajo con metodología, prototipado y pruebas.",
    },
    {
      tag: { en: "Financial Tooling", es: "Herramientas Financieras" },
      title: {
        en: "Cash Flow Reporting Benchmark",
        es: "Benchmarking de Reportes de Flujo de Caja",
      },
      en: "Benchmarked technical and operational solutions to make enterprise cash flow report generation easier.",
      es: "Hice un benchmarking de soluciones para facilitar la generación de reportes de flujo de caja.",
    },
  ],
};

export const talks: TalksSectionData = {
  title: {
    en: "Talks & Webinars",
    es: "Charlas y Webinars",
  },
  intro: {
    en: "I also enjoy sharing what I learn. I've given talks and webinars on AI and data science for professionals and for students at universities and schools across the region.",
    es: "También me gusta compartir lo que aprendo. He dado charlas y webinars sobre IA y ciencia de datos para profesionales y para estudiantes de universidades y colegios de la región.",
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
      en: "Data science for non-technical people",
      es: "Ciencia de datos para no tecnólogos",
    },
  ],
};

export const personalProjectsHeader: PersonalProjectsHeaderData = {
  tag: {
    en: "03 // PERSONAL PROJECTS",
    es: "03 // PROYECTOS PERSONALES",
  },
  title: {
    en: "Selected Builds & Personal Projects",
    es: "Proyectos Personales & Desarrollos Propios",
  },
  description: {
    en: "Digital products and tools I design and build to solve everyday friction. Every project is developed through Spec-Driven Development (SDD), turning structured PM specifications into working code with AI tools.",
    es: "Productos digitales y herramientas que diseño y construyo para resolver fricciones cotidianas reales. Cada proyecto se desarrolla mediante Spec-Driven Development (SDD), convirtiendo especificaciones claras de PM en código funcional con herramientas de IA.",
  },
};

export const personalProjects: PersonalProject[] = [
  {
    id: "donny",
    code: "BUILD 01 // DESKTOP APP",
    title: "Donny: Study Companion",
    tagline: {
      en: "A gamified study companion for macOS that helps me stay consistent without it feeling like a chore.",
      es: "Un compañero de estudio gamificado para macOS que me ayuda a ser constante sin que se sienta como una obligación.",
    },
    problemHypothesis: {
      en: "The hardest part of studying isn't starting, it's keeping it up. Most people drop off after a few days because studying feels lonely and progress is hard to see. If studying felt more like a game, with small rewards and visible progress, it would be easier to come back every day.",
      es: "Lo más difícil de estudiar no es empezar, es mantenerse. La mayoría abandona a los pocos días porque estudiar se siente solitario y el progreso cuesta verlo. Si estudiar se sintiera más como un juego, con pequeñas recompensas y avances visibles, sería más fácil volver cada día.",
    },
    actionAndArchitecture: {
      en: "I built Donny for myself first: a lightweight desktop app that combines game mechanics with techniques like Pomodoro, wrapped in a pixel art look with chiptune sounds. Everything is saved as Markdown notes in my Obsidian vault, so my data stays local.",
      es: "Construí Donny primero para mí: una app de escritorio ligera que combina mecánicas de juego con técnicas como Pomodoro, con estética pixel art y sonidos chiptune. Todo se guarda como notas Markdown en mi bóveda de Obsidian, así que mis datos se quedan en local.",
    },
    resultAndValidation: {
      en: "Built with Spec-Driven Development: I wrote the product specifications as a PM and guided AI coding agents to turn them into a working native macOS app.",
      es: "Construido con Spec-Driven Development: escribí las especificaciones como PM y agentes de IA las convirtieron en una aplicación nativa funcional para macOS.",
    },
    tradeoffNote: {
      en: "Key Decision: Chose local Markdown files over a cloud database to keep 100% local data ownership and zero server maintenance.",
      es: "Decisión de diseño: Prioricé archivos Markdown locales sobre una base de datos en la nube para mantener privacidad total y cero costo de servidor.",
    },
    keyLearning: {
      en: "Writing clear acceptance criteria upfront reduced iteration cycles significantly when building with AI agents.",
      es: "Escribir criterios de aceptación claros antes de programar redujo drásticamente las iteraciones con los agentes de IA.",
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
      en: "Built with Spec-Driven Development",
      es: "Construido con Spec-Driven Development",
    },
    images: [],
  },
  {
    id: "bill-splitter",
    code: "BUILD 02 // MULTIMODAL AI",
    title: "Bill Splitter CLI",
    tagline: {
      en: "A multimodal AI receipt splitter with zero-penny rounding leaks and proportional tax distribution.",
      es: "Un divisor de cuentas con IA multimodal, cuadre exacto al centavo y distribución proporcional de impuestos y propinas.",
    },
    problemHypothesis: {
      en: "Splitting bills in group outings is slow, awkward, and prone to rounding errors. Traditional splitting apps either enforce uniform splits or accumulate penny discrepancies that don't match the receipt total.",
      es: "Dividir cuentas en salidas grupales suele ser lento, incómodo y propenso a errores de redondeo. Las aplicaciones tradicionales imponen divisiones iguales o generan discrepancias de centavos que no cuadran con el total.",
    },
    actionAndArchitecture: {
      en: "Built a CLI and QR-enabled mobile web tool that scans receipts from photos using the Google Gemini API and Pydantic schemas, applying the Hare-Niemeyer algorithm to distribute taxes and tips proportionally.",
      es: "Desarrollé una herramienta CLI y web móvil con código QR que escanea facturas por foto usando la API de Google Gemini y esquemas Pydantic, aplicando el algoritmo de Hare-Niemeyer para prorratear impuestos y propinas.",
    },
    resultAndValidation: {
      en: "100% mathematical reconciliation verified with automated Pytest suites—guaranteeing zero-penny discrepancy against the printed receipt.",
      es: "Cuadre exacto al centavo verificado mediante pruebas automatizadas en Pytest, sin fugas de redondeo frente al total de la factura.",
    },
    tradeoffNote: {
      en: "Key Decision: Used probabilistic AI only for receipt OCR, keeping all financial apportionment 100% deterministic in Python.",
      es: "Decisión de diseño: Usé IA solo para extraer el texto del recibo, manteniendo todo el cálculo matemático 100% determinista en código.",
    },
    keyLearning: {
      en: "Combining structured LLM schemas with deterministic math solves real-world user friction without sacrificing accuracy.",
      es: "Combinar esquemas estructurados de IA con algoritmos matemáticos exactos permite resolver fricciones reales sin sacrificar precisión.",
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
  {
    id: "compound-engine",
    code: "BUILD 03 // FINTECH SYSTEM",
    title: "Personal Wealth & Compounding Engine",
    tagline: {
      en: "A local-first financial modeling system for tracking milestone objectives, expense telemetry, and deterministic compound wealth strategies.",
      es: "Un sistema de modelado financiero local-first para seguimiento de objetivos patrimoniales, telemetría de egresos y estrategias de interés compuesto.",
    },
    problemHypothesis: {
      en: "Personal financial management often fragments across generic expense trackers and static spreadsheets, making it difficult to simulate long-term compounding returns or align daily spending with multi-year targets.",
      es: "La gestión financiera personal suele fragmentarse entre registradores de gastos genéricos y hojas de cálculo estáticas, dificultando simular rendimientos de interés compuesto a largo plazo o alinear el gasto diario con metas plurianuales.",
    },
    actionAndArchitecture: {
      en: "Designing and engineering a local-first mobile system combining real-time expense telemetry, custom financial milestone modeling, and deterministic compound interest calculators.",
      es: "Diseño y desarrollo de un sistema móvil local-first que combina telemetría de egresos en tiempo real, modelado de metas financieras personalizadas y calculadoras deterministas de interés compuesto.",
    },
    resultAndValidation: {
      en: "Architected for strict data sovereignty, privacy, and long-term strategic wealth planning under Spec-Driven Development.",
      es: "Diseñado bajo estricta soberanía de datos, privacidad y planeación patrimonial estratégica mediante Spec-Driven Development.",
    },
    tradeoffNote: {
      en: "Key Decision: Prioritized local-first storage and privacy over fragile third-party bank connections.",
      es: "Decisión de diseño: Prioricé almacenamiento local-first y privacidad sobre integraciones bancarias externas frágiles.",
    },
    keyLearning: {
      en: "Connecting daily expense habits directly to long-term compounding projections changes how users evaluate everyday spending.",
      es: "Conectar los gastos diarios con proyecciones de interés compuesto cambia la forma de tomar decisiones financieras cotidianas.",
    },
    stack: [
      "Mobile Architecture",
      "Local-First Storage",
      "Mathematical Modeling",
      "Financial Telemetry",
      "Spec-Driven Development",
    ],
    liveUrl: "",
    githubUrl: "",
    featuredMetric: {
      en: "In Active Development · Spec-Driven",
      es: "En Desarrollo Activo · Spec-Driven",
    },
    images: [],
  },
  {
    id: "media-telemetry",
    code: "BUILD 04 // DATA ANALYTICS",
    title: "Media Intelligence & Content Telemetry",
    tagline: {
      en: "A unified media telemetry engine and analytics platform for tracking and visualizing personal cinema, television, and anime consumption.",
      es: "Un motor unificado de telemetría y analítica de medios para registrar y visualizar el consumo personal de cine, televisión y anime.",
    },
    problemHypothesis: {
      en: "Consumption of movies, television, and anime is dispersed across disjointed streaming services and tracking logs, losing granular historical data and personal watch habits over time.",
      es: "El consumo de cine, televisión y anime se encuentra disperso entre múltiples plataformas de streaming y registros aislados, perdiendo datos históricos granulares y análisis de hábitos a largo plazo.",
    },
    actionAndArchitecture: {
      en: "Building a unified media logging engine and analytics pipeline that consolidates cinema, series, and anime watch-history with custom metadata schemas and status lifecycles.",
      es: "Construcción de un motor de registro unificado y canal de análisis que consolida el historial de consumo de cine, series y anime con esquemas de metadatos personalizados.",
    },
    resultAndValidation: {
      en: "Unified schema specification and statistical breakdowns of consumption patterns currently in active Spec-Driven iteration.",
      es: "Especificación de esquema unificado y desgloses estadísticos de hábitos de consumo en desarrollo activo bajo SDD.",
    },
    tradeoffNote: {
      en: "Key Decision: Designed a normalized cross-format data schema rather than forcing episodic series into movie-only structures.",
      es: "Decisión de diseño: Diseñé un esquema normalizado multi-formato en lugar de forzar series y anime en estructuras pensadas solo para cine.",
    },
    keyLearning: {
      en: "Clean data schemas defined during the specification phase make downstream analytics simple to build and maintain.",
      es: "Definir esquemas de datos limpios desde la especificación simplifica enormemente la construcción de analítica posterior.",
    },
    stack: [
      "Cross-Platform App",
      "API Aggregation",
      "Data Schemas",
      "Statistical Analytics",
      "Spec-Driven Development",
    ],
    liveUrl: "",
    githubUrl: "",
    featuredMetric: {
      en: "In Active Development · Spec-Driven",
      es: "En Desarrollo Activo · Spec-Driven",
    },
    images: [],
  },
];

export const aboutContent = {
  sectionIndex: "04 // ABOUT & PRODUCT PERSPECTIVE",
  sectionTag: {
    en: "Product Perspective",
    es: "Perspectiva de Producto",
  },
  title: {
    en: "I work between the data, the people who use the product and the team that builds it.",
    es: "Trabajo entre los datos, las personas que usan el producto y el equipo que lo construye.",
  },
  leadQuote: {
    en: "I don't think good products happen by luck. Most of the time they come from understanding the problem really well before anyone writes a line of code.",
    es: "No creo que los buenos productos salgan por suerte. Casi siempre nacen de entender muy bien el problema antes de escribir una sola línea de código.",
  },
  paragraphs: {
    en: [
      "Turning complex, ambiguous workflows into software that feels simple is where I put most of my energy as a Product Manager.",
      "My background is in Psychology, and along the way I trained in data science, machine learning and design thinking. That mix shapes how I work: I start by understanding people, then use data and technology to build for them.",
      "Day to day, I work closely with engineers, designers and business leaders. I enjoy translating between them, because good alignment saves everyone time and makes each iteration faster.",
    ],
    es: [
      "Convertir flujos de trabajo complejos y ambiguos en software que se sienta simple es donde pongo buena parte de mi energía como Product Manager.",
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
      en: "A single feature solves one thing. A well-designed system keeps adding value over time. I try to fix the root of a problem instead of patching the symptoms.",
      es: "Una funcionalidad resuelve una cosa. Un sistema bien pensado sigue aportando valor con el tiempo. Intento resolver la raíz del problema en lugar de poner parches.",
    },
    tradeoffPrinciple: {
      en: "Core focus: Unify underlying workflows so the solution scales smoothly across teams and contracts.",
      es: "Enfoque clave: Unificar la base del flujo para que la solución escale sin fricción a más contratos y equipos.",
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
    tradeoffPrinciple: {
      en: "Core focus: Pair user empathy in discovery with measurable operational metrics in delivery.",
      es: "Enfoque clave: Unir empatía con el usuario en el descubrimiento con métricas operativas claras en la entrega.",
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
    tradeoffPrinciple: {
      en: "Core focus: Clear specifications, well-defined scope, and smooth operational handovers.",
      es: "Enfoque clave: Especificaciones claras, alcance bien definido y traspasos ordenados a operación.",
    },
  },
];
