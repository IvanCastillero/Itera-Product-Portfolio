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
  edition: "2026 PORTFOLIO LEDGER // REV 4.2",
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
    label: { en: "2026 Impact", es: "Impacto 2026" },
  },
  {
    key: "enterprise",
    index: "02",
    href: "#enterprise",
    label: { en: "Case Studies", es: "Casos de Estudio" },
  },
  {
    key: "work",
    index: "03",
    href: "#work",
    label: { en: "Product Lab", es: "Laboratorio" },
  },
  {
    key: "about",
    index: "04",
    href: "#about",
    label: { en: "How I Think", es: "Cómo Pienso" },
  },
];

export const heroContent = {
  badge: {
    en: "PRODUCT MANAGEMENT · SYSTEMS & AI",
    es: "PRODUCT MANAGEMENT · SISTEMAS E IA",
  },
  status: {
    en: "Available for Product Roles",
    es: "Abierto a Retos de Producto",
  },
  coreQuestion: {
    en: "“Can I trust how this person thinks?”",
    es: "«¿Puedo confiar en cómo piensa esta persona?»",
  },
  headlinePre: {
    en: "Turning ambiguous operational friction into",
    es: "Convirtiendo problemas operativos complejos en",
  },
  headlineSerif: {
    en: "measurable business impact.",
    es: "impacto de negocio medible.",
  },
  subtitle: {
    en: "My portfolio isn’t just a showcase of final screens—it’s how I frame problems, navigate trade-offs, and deliver audited outcomes. Combining a background in Psychology, Data Science, and Spec-Driven Development to build B2B systems that scale.",
    es: "Mi portafolio no es solo una galería de pantallas finales: es la prueba de cómo estructuro problemas, tomo decisiones y entrego resultados cuantificables. Combino Psicología, Ciencia de Datos y Spec-Driven Development para construir sistemas B2B que escalan.",
  },
  buttons: {
    exploreWork: {
      en: "Inspect Case Studies (PAR)",
      es: "Explorar Casos de Estudio (PAR)",
    },
    githubProfile: {
      en: "GitHub",
      es: "GitHub",
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
      value: "US$9.0M",
      label: {
        en: "Key account contract retained & expanded",
        es: "Contrato clave retenido y reforzado",
      },
    },
    {
      value: "US$78.6K/yr",
      label: {
        en: "Current annual operational savings (Up to US$213.6K/yr at scale)",
        es: "Ahorro operativo anual actual (Hasta US$213.6K/año a escala)",
      },
    },
    {
      value: "1,280 hrs/mo",
      label: {
        en: "Engineering & agent capacity released for high-value work",
        es: "Capacidad de ingeniería y agentes liberada al mes",
      },
    },
  ],
};

export const portfolioImpact2026: PortfolioImpactConsolidation = {
  sectionIndex: "01 // EXECUTIVE LEDGER",
  tag: {
    en: "2026 Quantitative Impact Summary",
    es: "Resumen Cuantitativo de Impacto 2026",
  },
  title: {
    en: "Audited Outcomes Across Led & Co-Led Initiatives",
    es: "Consolidado General de Impacto en Portafolio",
  },
  subtitle: {
    en: "Toggle between initiatives 100% directly led from discovery to handover, consolidated active deployments including co-led platforms, and maximum projected scale.",
    es: "Explora el impacto financiero, operativo y comercial desglosado entre iniciativas 100% lideradas, el total consolidado con despliegues colaborativos y el potencial máximo proyectado.",
  },
  modes: {
    direct: {
      label: {
        en: "100% Directly Led",
        es: "100% Liderados (Impacto Directo)",
      },
      description: {
        en: "Baseline operational savings and capacity released from initiatives 100% led end-to-end: Reportes del CoE (base 50 contracts) + Servicebot + Executive Discovery Workshops.",
        es: "Ahorro operativo base y capacidad liberada en iniciativas 100% lideradas de principio a fin: Reportes del CoE (base 50 contratos) + Servicebot + Talleres de Descubrimiento.",
      },
      metrics: [
        {
          value: "US$4,150/mo",
          unit: { en: "US$49,800 / year", es: "US$49.800 / año" },
          label: {
            en: "Direct Operational Savings",
            es: "Ahorro Operativo Directo",
          },
          detail: {
            en: "US$3,750/mo (Reportes CoE base) + US$400/mo (Servicebot Service Desk)",
            es: "US$3.750/mes (Reportes CoE base) + US$400/mes (Servicebot Service Desk)",
          },
          highlight: "emerald",
        },
        {
          value: "1,280 hrs/mo",
          unit: { en: "Zero headcount reduction", es: "Sin reducción de personal" },
          label: {
            en: "Engineering & Agent Capacity Freed",
            es: "Capacidad Operativa Liberada",
          },
          detail: {
            en: "Up to 1,200 hrs/mo of CoE engineers + 80 hrs/mo of Back Office agents",
            es: "Hasta 1.200 horas/mes de ingenieros CoE + 80 horas/mes en Back Office",
          },
          highlight: "terracotta",
        },
        {
          value: "US$9,000,000",
          unit: { en: "GBM Key Account", es: "Cuenta Clave GBM" },
          label: {
            en: "Contract Retained & Reinforced",
            es: "Contrato Retenido y Reforzado",
          },
          detail: {
            en: "Segundo Registro de la Propiedad (Guatemala) modernization & retention",
            es: "Segundo Registro de la Propiedad (Guatemala): nuevo proyecto y retención",
          },
          highlight: "amber",
        },
      ],
    },
    total: {
      label: {
        en: "Consolidated (Led + Co-Led)",
        es: "Total Consolidado (Liderados + Co-Liderados)",
      },
      description: {
        en: "Combined impact across all initiatives where I led or co-led deployment, adding Omnibot in Production (Outsourcing / NOC) and commercial expansion.",
        es: "Impacto combinado considerando el total de iniciativas donde lideré o co-lideré el despliegue (sumando Omnibot en Producción para Outsourcing / NOC).",
      },
      metrics: [
        {
          value: "US$6,550/mo",
          unit: { en: "US$78,600 / year", es: "US$78.600 / año" },
          label: {
            en: "Combined Financial Savings",
            es: "Ahorro Financiero Consolidado",
          },
          detail: {
            en: "US$4,150/mo directly led + US$2,400/mo (US$28,800/yr) from Omnibot in NOC",
            es: "US$4.150/mes liderados + US$2.400/mes (US$28.800/año) de Omnibot en NOC",
          },
          highlight: "emerald",
        },
        {
          value: "-30% NOC Hrs",
          unit: { en: "+ 1,280 hrs/mo freed", es: "+ 1.280 hrs/mes liberadas" },
          label: {
            en: "Operational Efficiency Gain",
            es: "Eficiencia en Capacidad Operativa",
          },
          detail: {
            en: "30% reduction in NOC agent alert-triage hours + CoE & Service Desk hours",
            es: "Reducción del 30% en horas de agentes NOC + horas de ingenieros y Back Office",
          },
          highlight: "terracotta",
        },
        {
          value: "3 Markets",
          unit: { en: "Guatemala · Peru · Spain", es: "Guatemala · Perú · España" },
          label: {
            en: "Commercial & Service Expansion",
            es: "Expansión Comercial y Nuevos Servicios",
          },
          detail: {
            en: "US$9M retention + Licores de Guatemala (AWS) + Energy Cloud pilot",
            es: "Retención US$9M + Licores de Guatemala (AWS) + piloto Energy Cloud",
          },
          highlight: "amber",
        },
      ],
    },
    scale: {
      label: {
        en: "Maximum Projected Scale",
        es: "Potencial Máximo Proyectado",
      },
      description: {
        en: "Projected portfolio ceiling as Reportes del CoE scales from its initial 50-contract scope (2027) to the full 200-contract enterprise footprint.",
        es: "Techo proyectado del portafolio al escalar Reportes del CoE desde su alcance inicial de 50 contratos (2027) hasta los 200 contratos.",
      },
      metrics: [
        {
          value: "US$17,800/mo",
          unit: { en: "US$213,600 / year", es: "US$213.600 / año" },
          label: {
            en: "Maximum Annualized Savings",
            es: "Potencial Máximo de Ahorro Anual",
          },
          detail: {
            en: "US$15,000/mo (US$180K/yr) CoE at 200 contracts + Servicebot + Omnibot",
            es: "US$15.000/mes (US$180K/año) CoE en 200 contratos + Servicebot + Omnibot",
          },
          highlight: "amber",
        },
        {
          value: "200 Contracts",
          unit: { en: "4x scale from 50 base", es: "Escalamiento 4x desde base 50" },
          label: {
            en: "CoE Automation Footprint",
            es: "Alcance de Escalamiento CoE",
          },
          detail: {
            en: "Initial rollout of 50 contracts starting 2027, architected for 200 contracts",
            es: "Alcance inicial de 50 contratos a partir de 2027, diseñado para 200 contratos",
          },
          highlight: "emerald",
        },
        {
          value: "New B2B Line",
          unit: { en: "Outsourcing Commercialization", es: "Nuevo Servicio Comercializable" },
          label: {
            en: "Monetizable AI Operations",
            es: "Operaciones de IA Comercializables",
          },
          detail: {
            en: "Conversational Omnibot validated with Energy Cloud as a sellable B2B product",
            es: "Omnibot conversacional validado con Energy Cloud como servicio para Outsourcing",
          },
          highlight: "terracotta",
        },
      ],
    },
  },
  keyAccountsSummary: {
    title: {
      en: "Revenue Protection & New Commercial Pipeline",
      es: "Impacto en Ingresos, Retención y Cuentas Clave",
    },
    items: [
      {
        client: "Segundo Registro de la Propiedad (Guatemala)",
        metric: "US$9,000,000",
        description: {
          en: "Executive prioritization workshop that unlocked a new modernization project and protected/reinforced a US$9.0M contract with GBM.",
          es: "Taller de priorización que facilitó el inicio de un nuevo proyecto de modernización y blindó/reforzó la retención de un contrato por US$9.000.000 con GBM.",
        },
      },
      {
        client: "Licores de Guatemala · AWS Innovation Day",
        metric: "New B2B Pipeline",
        description: {
          en: "Led presentation and discovery execution at the AWS Innovation Day, generating new business opportunities and commercial demand for GBM.",
          es: "Presentación y ejecución en el Innovation Day de AWS, generando nuevas oportunidades de negocio y demanda comercial para GBM.",
        },
      },
      {
        client: "Energy Cloud (Perú & España)",
        metric: "New Service Line",
        description: {
          en: "Deployed the conversational Omnibot pilot across Peru and Spain, enabling it as a new commercializable service for GBM Outsourcing.",
          es: "Despliegue del piloto de Omnibot conversacional con Energy Cloud (Perú y España), habilitándolo como un nuevo servicio comercializable para Outsourcing.",
        },
      },
    ],
  },
};

export const enterpriseIntro = {
  en: "A good PM portfolio answers one question: “Can I trust how this person thinks?” Below are my key enterprise case studies structured using the PAR framework (Problem → Action & Trade-offs → Result), backed by 2026 financial and operational telemetry.",
  es: "Un buen portafolio de Product Manager responde a una sola pregunta: «¿Puedo confiar en cómo piensa esta persona?». A continuación presento mis casos de estudio empresariales estructurados bajo el marco PAR (Problema → Acción y Decisiones → Resultado), respaldados por métricas reales de impacto 2026.",
};

export const enterpriseProjects: EnterpriseProject[] = [
  {
    id: "coe-reports",
    code: "CASE-01 // DIRECT LEAD",
    leadershipType: "direct",
    leadershipBadge: {
      en: "100% Led & Executed · Direct Impact",
      es: "Proyecto Liderado y Ejecutado · Impacto Directo",
    },
    statusBadge: {
      en: "Incubation / Handover",
      es: "Incubación / Traspaso",
    },
    category: {
      en: "Data Unification & Process Automation",
      es: "Unificación de Datos y Automatización Operativa",
    },
    title: {
      en: "Reportes del CoE (Center of Excellence)",
      es: "Reportes del CoE (Centro de Excelencia)",
    },
    role: {
      en: "Lead Product Manager · Discovery, Data Architecture & Handover",
      es: "Product Manager Líder · Descubrimiento, Arquitectura de Datos y Traspaso",
    },
    problem: {
      en: "Center of Excellence (CoE) engineers built monthly service reports for each client manually, pulling scattered metrics across disconnected monitoring and ticketing systems. Highly skilled engineers were losing hundreds of hours every month to repetitive data formatting.",
      es: "El equipo del Centro de Excelencia (CoE) elaboraba los informes de servicio de cada cliente de forma manual a partir de fuentes dispersas en distintos sistemas. Ingenieros especializados invertían cientos de horas al mes en consolidar datos repetitivos en lugar de tareas de alto valor.",
    },
    action: {
      en: "Led product discovery and execution alongside engineering and UX/UI teams to unify fragmented data sources into a single automated reporting engine. Designed a phased rollout starting with a 50-contract baseline (2027) architected to scale seamlessly to 200 contracts.",
      es: "Lideré el descubrimiento y la ejecución junto a desarrollo y UX/UI para unificar fuentes de datos dispersas en una base centralizada de generación automática. Diseñé un despliegue escalonado con alcance inicial de 50 contratos (a partir de 2027) preparado para escalar a 200 contratos.",
    },
    resultSummary: {
      en: "Generated US$3,750/mo (US$45,000/yr) in baseline operational savings across the initial 50 contracts, with a validated scaling pathway to US$15,000/mo (US$180,000/yr) at 200 contracts and up to 1,200 engineering hours/month released.",
      es: "Ahorro operativo base de US$3.750/mes (US$45.000/año) en los primeros 50 contratos, con potencial de escalamiento hasta US$15.000/mes (US$180.000/año) en 200 contratos y hasta 1.200 horas/mes de ingenieros liberadas sin reducción de personal.",
    },
    keyMetrics: [
      {
        value: "US$45,000/yr",
        label: {
          en: "Base Operational Savings",
          es: "Ahorro Operativo Base",
        },
        sublabel: {
          en: "US$3,750/mo · Initial 50 contracts (2027)",
          es: "US$3.750/mes · Alcance inicial 50 contratos (2027)",
        },
        tone: "emerald",
      },
      {
        value: "US$180,000/yr",
        label: {
          en: "Scaling Potential (200 Contracts)",
          es: "Potencial de Escalamiento (200 Contratos)",
        },
        sublabel: {
          en: "Up to US$15,000/mo at full rollout",
          es: "Hasta US$15.000/mes a escala completa",
        },
        tone: "amber",
      },
      {
        value: "1,200 hrs/mo",
        label: {
          en: "Engineering Capacity Freed",
          es: "Capacidad de Ingeniería Liberada",
        },
        sublabel: {
          en: "Reinvested in higher-value tasks (0 layoffs)",
          es: "Reasignada a tareas de mayor valor (sin recortes)",
        },
        tone: "terracotta",
      },
    ],
    dossier: {
      goal: {
        en: "Eliminate manual report compilation bottlenecks in the CoE, standardize cross-contract service metrics, and free up to 1,200 hours/month of senior engineering capacity without reducing headcount.",
        es: "Eliminar el cuello de botella en la confección manual de informes del CoE, estandarizar las métricas entre contratos y liberar hasta 1.200 horas/mes de ingeniería para labores estratégicas sin reducción de personal.",
      },
      researchAndDiscovery: {
        en: "Shadowed CoE engineers and service managers across multiple client accounts to map every manual extraction step, identifying that 80% of reporting time was spent reconciling inconsistent schemas rather than analyzing service health.",
        es: "Realicé sesiones de inmersión con ingenieros del CoE y líderes de servicio para mapear el flujo real de extracción. Detecté que cerca del 80% del tiempo se perdía reconciliando esquemas de datos incompatibles y no en el análisis de valor para el cliente.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Standardization vs. Bespoke Templates: Chose to enforce a unified core data model covering the initial 50 contracts first rather than building custom one-off views per client, enabling the 4x scale path to 200 contracts.",
          "Human-in-the-Loop Handover: Automated data ingestion and layout generation while preserving an executive commentary step for engineers, increasing adoption and trust during handover.",
        ],
        es: [
          "Estandarización vs. Personalización Ad-hoc: Prioricé un modelo de datos unificado para los primeros 50 contratos en lugar de plantillas aisladas por cliente, habilitando la escalabilidad técnica hacia 200 contratos.",
          "Automatización con Control Experto: Automaticé la ingesta y armado del reporte manteniendo un espacio de validación ejecutiva para el ingeniero, acelerando la adopción durante el traspaso.",
        ],
      },
      keyLearnings: {
        en: "In internal enterprise tools, operational handover succeeds when engineers see automation not as a headcount threat, but as relief from administrative toil so they can focus on architecture and root-cause engineering.",
        es: "En productos internos B2B, el traspaso a operación tiene éxito cuando los ingenieros perciben la automatización como liberación de carga administrativa para enfocarse en arquitectura y resolución de problemas complejos.",
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
        "US$3,750/mo base savings",
        "Up to US$15,000/mo at 200 contracts",
        "1,200 engineering hrs/mo freed",
        "50 initial contracts (2027)",
      ],
      es: [
        "US$3.750/mes ahorro base",
        "Hasta US$15.000/mes en 200 contratos",
        "1.200 hrs/mes liberadas",
        "50 contratos iniciales (2027)",
      ],
    },
    highlights: {
      en: [
        "Delivering US$3,750/month (US$45,000/year) in baseline operational savings across an initial scope of 50 contracts starting in 2027.",
        "Architected for multi-contract scalability with a projected ceiling of US$15,000/month (US$180,000/year) upon reaching 200 contracts.",
        "Frees up to 1,200 hours/month of engineering capacity (~80% reduction in manual reporting hours), reallocating talent to higher-value initiatives without staff reductions.",
      ],
      es: [
        "Genera un ahorro operativo base de US$3.750/mes (US$45.000/año) con un alcance inicial de 50 contratos a partir de 2027.",
        "Diseñado para escalar hasta US$15.000/mes (US$180.000/año) al alcanzar el despliegue en 200 contratos.",
        "Libera hasta 1.200 horas/mes de capacidad de ingenieros (~80% menos horas manuales) para tareas de mayor valor, sin reducción de personal.",
      ],
    },
  },
  {
    id: "strategy-workshops",
    code: "CASE-02 // DIRECT LEAD",
    leadershipType: "direct",
    leadershipBadge: {
      en: "100% Led & Executed · Client Discovery",
      es: "Proyecto Liderado y Ejecutado · Clientes / Descubrimiento",
    },
    statusBadge: {
      en: "Client Discovery & Commercial Impact",
      es: "Clientes / Descubrimiento",
    },
    category: {
      en: "Executive Facilitation & Account Strategy",
      es: "Estrategia, Priorización y Cuentas Clave",
    },
    title: {
      en: "Workshops: Segundo Registro de la Propiedad & Licores de Guatemala",
      es: "Talleres: Segundo Registro de la Propiedad y Licores de Guatemala",
    },
    role: {
      en: "Lead Workshop & Strategy Facilitator · ~10 Regional Executive Sessions",
      es: "Facilitador Líder de Estrategia y Descubrimiento · ~10 Talleres Regionales",
    },
    problem: {
      en: "Enterprise leadership teams in government, retail, and banking had competing modernization initiatives and lacked an objective prioritization framework—stalling new project kickoffs and putting multi-million-dollar account renewals at risk.",
      es: "Equipos directivos en sector público, retail y banca tenían múltiples iniciativas compitiendo entre sí sin una estructura común de decisión, lo que frenaba nuevos proyectos de modernización y ponía en riesgo la retención de contratos estratégicos.",
    },
    action: {
      en: "Designed and led ~10 high-stakes discovery and prioritization workshops adapting Working Backwards and Design Thinking to LATAM executive culture—including a flagship prioritization workshop for Segundo Registro de la Propiedad and an executive showcase with Licores de Guatemala at the AWS Innovation Day.",
      es: "Diseñé y facilité alrededor de 10 talleres ejecutivos adaptando Working Backwards y Design Thinking a la cultura directiva de la región, destacando el taller de priorización con el Segundo Registro de la Propiedad y la ejecución con Licores de Guatemala en el Innovation Day de AWS.",
    },
    resultSummary: {
      en: "Unlocked a new modernization project and reinforced the retention of a US$9,000,000 contract with GBM at Segundo Registro de la Propiedad (Guatemala), while generating new commercial demand with Licores de Guatemala.",
      es: "Facilitó el inicio de un nuevo proyecto de modernización y blindó/reforzó la retención de un contrato por US$9.000.000 con GBM en el Segundo Registro de la Propiedad (Guatemala), además de abrir nueva demanda comercial con Licores de Guatemala.",
    },
    keyMetrics: [
      {
        value: "US$9,000,000",
        label: {
          en: "Contract Retained & Reinforced",
          es: "Contrato Retenido y Blindado",
        },
        sublabel: {
          en: "Segundo Registro de la Propiedad (Guatemala) + new modernization project",
          es: "Segundo Registro de la Propiedad (Guatemala) + nuevo proyecto",
        },
        tone: "amber",
      },
      {
        value: "AWS Innovation Day",
        label: {
          en: "Commercial Pipeline Generated",
          es: "Demanda Comercial Generada",
        },
        sublabel: {
          en: "Licores de Guatemala executive presentation & discovery",
          es: "Presentación y ejecución con Licores de Guatemala",
        },
        tone: "emerald",
      },
      {
        value: "~10 Workshops",
        label: {
          en: "Regional C-Level & Director Sessions",
          es: "Talleres con Equipos Directivos",
        },
        sublabel: {
          en: "Banking, retail & government (virtual & in-person)",
          es: "Banca, retail y gobierno (virtual y presencial)",
        },
        tone: "terracotta",
      },
    ],
    dossier: {
      goal: {
        en: "Align C-level and director stakeholders around user-backed, high-ROI initiatives that unblock modernization roadmaps and strengthen GBM’s position as a strategic partner.",
        es: "Alinear a directores y tomadores de decisión en torno a iniciativas de alto retorno validadas desde el usuario final, desbloqueando hojas de ruta de modernización y fortaleciendo la relación comercial con GBM.",
      },
      researchAndDiscovery: {
        en: "Conducted pre-workshop stakeholder interviews to surface hidden political bottlenecks, institutional constraints, and end-user friction points before bringing decision-makers into the room.",
        es: "Realicé entrevistas previas con actores clave para mapear restricciones institucionales, dolores reales de los usuarios y prioridades de negocio antes de cada sesión presencial o virtual.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Pragmatic Adaptation vs. Rigid Playbooks: Stripped away academic jargon from Working Backwards and Design Thinking to focus executives on concrete impact/effort matrices and immediate 90-day execution commitments.",
          "Problem-First Framing at AWS Innovation Day: With Licores de Guatemala, anchored the showcase on operational bottlenecks rather than generic cloud features, directly translating into commercial follow-ups.",
        ],
        es: [
          "Adaptación Pragmática vs. Metodología Rígida: Ajusté Working Backwards y Design Thinking a la cultura corporativa regional para lograr decisiones de descarte y priorización en sesiones de tiempo limitado.",
          "Enfoque en Dolor de Negocio en AWS Innovation Day: Con Licores de Guatemala centré la sesión en casos de uso accionables y no en teoría tecnológica, detonando demanda comercial real.",
        ],
      },
      keyLearnings: {
        en: "Discovery is a commercial multiplier: when a PM helps a client’s leadership team gain clarity on their own roadmap, trust skyrockets—protecting multi-million-dollar renewals ($9M) far more effectively than a traditional sales pitch.",
        es: "El descubrimiento de producto es un multiplicador comercial: cuando ayudas a un comité directivo a ordenar su propia estrategia con datos, construyes una confianza que blinda contratos multimillonarios (US$9M) mejor que cualquier discurso de ventas.",
      },
    },
    frameworks: [
      "Working Backwards",
      "Design Thinking",
      "Executive Prioritization",
      "AWS Innovation Day",
      "Miro",
    ],
    impactBadges: {
      en: [
        "US$9.0M contract retained (Guatemala)",
        "New modernization project unlocked",
        "Licores de Guatemala · AWS Innovation Day",
        "~10 leadership workshops",
      ],
      es: [
        "Contrato US$9.0M blindado (Guatemala)",
        "Nuevo proyecto de modernización",
        "Licores de Guatemala · AWS Innovation Day",
        "~10 talleres directivos",
      ],
    },
    highlights: {
      en: [
        "Segundo Registro de la Propiedad (Guatemala): Led the prioritization workshop that kicked off a new modernization project and protected/reinforced a US$9,000,000 contract with GBM.",
        "Licores de Guatemala: Led the presentation and execution during the AWS Innovation Day, unlocking new business opportunities and commercial demand for GBM.",
        "Facilitated ~10 virtual and in-person workshops across the region for banking, retail, and government leaders—discarding low-value ideas and aligning stakeholders on data-backed roadmaps.",
      ],
      es: [
        "Segundo Registro de la Propiedad (Guatemala): Taller de priorización que facilitó el inicio de un nuevo proyecto de modernización y blindó/reforzó la retención de un contrato por US$9.000.000 con GBM.",
        "Licores de Guatemala: Presentación y ejecución en el Innovation Day de AWS, generando nuevas oportunidades de negocio y demanda comercial para GBM.",
        "Facilité ~10 talleres regionales (presenciales y virtuales) en banca, retail y gobierno, logrando descartar iniciativas de bajo impacto y alinear decisiones con datos.",
      ],
    },
  },
  {
    id: "servicebot",
    code: "CASE-03 // DIRECT LEAD",
    leadershipType: "direct",
    leadershipBadge: {
      en: "100% Led & Executed · Direct Impact",
      es: "Proyecto Liderado y Ejecutado · Impacto Directo",
    },
    statusBadge: {
      en: "Scheduled for Prod in Dec. / Handover",
      es: "Previsto a producción en dic. / Traspaso",
    },
    category: {
      en: "Service Desk & Back Office Automation",
      es: "Automatización de Service Desk y Back Office",
    },
    title: {
      en: "Servicebot (Service Desk & Back Office)",
      es: "Servicebot (Service Desk y Back Office)",
    },
    role: {
      en: "Lead Product Manager · MVP Definition, Delivery & Handover",
      es: "Product Manager Líder · Definición de MVP, Ejecución y Traspaso",
    },
    problem: {
      en: "Service Desk and Back Office agents spent recurring operational hours handling repetitive ticket triage, status lookups, and standard routing—driving up cost-per-ticket and slowing response times for complex incidents.",
      es: "Los agentes del Service Desk y de Back Office invertían decenas de horas mensuales en tareas operativas repetitivas de clasificación, consulta y seguimiento rutinario, elevando el costo operativo y restando capacidad para casos complejos.",
    },
    action: {
      en: "Led the product lifecycle of Servicebot from problem framing to handover, prioritizing the highest-frequency Back Office workflows to deliver immediate, auditable time savings ahead of its December production release.",
      es: "Lideré el ciclo de producto de Servicebot hasta su etapa de traspaso y salida a producción prevista en diciembre, priorizando la automatización de los flujos de mayor volumen operativo en el Service Desk.",
    },
    resultSummary: {
      en: "Delivers US$400/mo (US$4,800/yr) in direct operational savings for the Service Desk and frees 80 hours/month of Back Office agent capacity.",
      es: "Genera un ahorro operativo directo de US$400/mes (US$4.800/año) para el Service Desk y libera 80 horas/mes de capacidad en agentes de Back Office.",
    },
    keyMetrics: [
      {
        value: "US$4,800/yr",
        label: {
          en: "Service Desk Operational Savings",
          es: "Ahorro Operativo en Service Desk",
        },
        sublabel: {
          en: "US$400/mo validated baseline savings",
          es: "US$400/mes de ahorro operativo directo",
        },
        tone: "emerald",
      },
      {
        value: "80 hrs/mo",
        label: {
          en: "Back Office Capacity Freed",
          es: "Horas Liberadas en Back Office",
        },
        sublabel: {
          en: "960 agent hours/year reallocated",
          es: "960 horas/año de agentes liberadas",
        },
        tone: "terracotta",
      },
      {
        value: "Dec. Prod",
        label: {
          en: "Deployment & Handover Milestone",
          es: "Hito de Producción y Traspaso",
        },
        sublabel: {
          en: "Completed incubation & operational transfer",
          es: "Previsto a producción en dic. / Traspaso",
        },
        tone: "amber",
      },
    ],
    dossier: {
      goal: {
        en: "Automate high-frequency, low-complexity Service Desk interactions to reclaim 80 hours/month of Back Office agent bandwidth and reduce monthly operational costs.",
        es: "Automatizar las gestiones repetitivas de mayor frecuencia en el Service Desk para liberar 80 horas/mes de agentes de Back Office y reducir el costo operativo mensual.",
      },
      researchAndDiscovery: {
        en: "Analyzed historical Service Desk ticket logs and interviewed Back Office coordinators to isolate the exact ticket categories where manual intervention added zero diagnostic value.",
        es: "Analicé la distribución histórica de tickets junto a coordinadores de Back Office para aislar las categorías donde la intervención manual no agregaba valor diagnóstico.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Focused Scope for Fast Time-to-Value: Scoped the initial release strictly around deterministic Back Office bottlenecks rather than open-ended generative chat, guaranteeing reliable handover for December production.",
          "Seamless Escalation Path: Built clear fallback rules so edge cases route immediately to human agents with full context attached.",
        ],
        es: [
          "Alcance Acotado para Impacto Rápido: Enfoqué el lanzamiento en los flujos deterministas de mayor fricción en Back Office antes de expandir casos conversacionales abiertos, asegurando un traspaso sólido para diciembre.",
          "Escalamiento con Contexto: Diseñé reglas de transferencia limpias para que los casos complejos lleguen al agente humano con el contexto completo pre-cargado.",
        ],
      },
      keyLearnings: {
        en: "Even compact, well-scoped operational automations (80 hrs/mo freed) compound into meaningful organizational leverage when paired with a clean handover to operations.",
        es: "Las automatizaciones operativas bien acotadas (80 horas/mes liberadas) generan un retorno inmediato y sostenible cuando se diseñan desde el día uno pensando en el equipo que recibirá el traspaso.",
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
        "US$400/mo (US$4,800/yr) savings",
        "80 hrs/mo Back Office freed",
        "Prod release scheduled Dec.",
      ],
      es: [
        "US$400/mes (US$4.800/año) ahorro",
        "80 horas/mes Back Office liberadas",
        "Previsto a prod. en dic.",
      ],
    },
    highlights: {
      en: [
        "Generates US$400/month (US$4,800/year) in direct operational savings for the Service Desk.",
        "Frees 80 hours/month of Back Office agent capacity, allowing specialists to focus on complex support escalations.",
        "Structured for operational handover with production deployment scheduled for December.",
      ],
      es: [
        "Genera un ahorro operativo directo de US$400/mes (US$4.800/año) para el Service Desk.",
        "Libera 80 horas/mes de agentes de Back Office para atención de casos de mayor complejidad.",
        "Estructurado para traspaso operativo con salida prevista a producción en diciembre.",
      ],
    },
  },
  {
    id: "omnibot",
    code: "CASE-04 // CO-LED DEPLOYMENT",
    leadershipType: "co-led",
    leadershipBadge: {
      en: "Partially Led · Collaborative Deployment",
      es: "Liderado Parcialmente · Despliegue / Colaborativo",
    },
    statusBadge: {
      en: "In Production / Handover",
      es: "Producción / Traspaso",
    },
    category: {
      en: "Conversational AI & NOC Observability",
      es: "IA Conversacional, Outsourcing y NOC",
    },
    title: {
      en: "Omnibot: Omnichannel Alert & Operations AI",
      es: "Omnibot: Automatización Omnicanal en NOC y Outsourcing",
    },
    role: {
      en: "Product Manager (Co-Led) · Feature Launches & International Commercial Pilot",
      es: "Product Manager (Co-Líder) · Lanzamiento de Versiones y Expansión Comercial",
    },
    problem: {
      en: "Observability and NOC agents spent excessive hours manually contacting resolver groups whenever critical alerts fired. This manual dispatch bottleneck consumed 30% of agent capacity and delayed attention to non-critical preventive alerts.",
      es: "Los agentes de observabilidad (Outsourcing / NOC) dedicaban gran parte de su turno a notificar manualmente a los grupos resolutores ante cada alerta, consumiendo capacidad crítica y restando foco a alertas preventivas.",
    },
    action: {
      en: "Co-led version launches and operational deployment of Omnibot using conversational AI to automate multi-channel alert notification and escalation. Spearheaded the commercial pilot of conversational Omnibot with Energy Cloud across Peru and Spain.",
      es: "Co-lideré el lanzamiento de nuevas versiones y despliegues de la plataforma con IA conversacional para automatizar la notificación a grupos resolutores, e impulsé el despliegue del piloto comercial de Omnibot conversacional con Energy Cloud en Perú y España.",
    },
    resultSummary: {
      en: "Achieved US$2,400/mo (US$28,800/yr) in direct operational savings in Outsourcing/NOC, reduced agent alert-handling hours by 30%, and unlocked a new commercializable B2B service with Energy Cloud (Peru & Spain).",
      es: "Ahorro operativo directo de US$2.400/mes (US$28.800/año) en Outsourcing/NOC, reducción del 30% en horas de agentes y habilitación de Omnibot como nuevo servicio comercializable tras el piloto con Energy Cloud (Perú y España).",
    },
    keyMetrics: [
      {
        value: "US$28,800/yr",
        label: {
          en: "Direct NOC / Outsourcing Savings",
          es: "Ahorro Directo en Outsourcing / NOC",
        },
        sublabel: {
          en: "US$2,400/mo in active production",
          es: "US$2.400/mes en operación productiva",
        },
        tone: "emerald",
      },
      {
        value: "-30% Hours",
        label: {
          en: "Agent Capacity Efficiency",
          es: "Reducción en Horas de Agentes",
        },
        sublabel: {
          en: "1,000+ min/mo automated · 100% SLA compliance",
          es: "Enfoque liberado para alertas no críticas · 100% SLA",
        },
        tone: "terracotta",
      },
      {
        value: "Peru & Spain",
        label: {
          en: "Energy Cloud Commercial Pilot",
          es: "Piloto Comercial Energy Cloud",
        },
        sublabel: {
          en: "Enabled as a new sellable Outsourcing service",
          es: "Nuevo servicio comercializable para Outsourcing",
        },
        tone: "amber",
      },
    ],
    dossier: {
      goal: {
        en: "Cut manual incident dispatch time in the NOC while transforming an internal efficiency tool into a revenue-generating managed service for external enterprise clients.",
        es: "Reducir el tiempo manual de despacho de alertas en el NOC y evolucionar una herramienta de eficiencia interna hasta convertirla en un servicio comercializable para clientes externos.",
      },
      researchAndDiscovery: {
        en: "Monitored NOC response funnels and SLA logs across Central America, the Caribbean, and Europe, identifying how conversational confirmation loops could replace manual phone and chat chasing.",
        es: "Analicé los embudos de respuesta del NOC y el cumplimiento de SLAs en la región, identificando cómo los flujos de confirmación por IA conversacional podían sustituir el seguimiento manual.",
      },
      decisionsAndTradeoffs: {
        en: [
          "Internal Stability vs. External Commercialization: Hardened SLA reliability in internal NOC operations first (achieving a 30% reduction in agent hours) before packaging the conversational workflow for the Energy Cloud pilot in Peru and Spain.",
          "Alert Triage Prioritization: Automated high-volume critical notifications first so human agents could proactively address non-critical alerts before they escalated.",
        ],
        es: [
          "Madurez Operativa antes de Comercializar: Consolidamos primero la reducción del 30% en horas de agentes dentro del NOC interno antes de empaquetar el piloto conversacional para Energy Cloud en Perú y España.",
          "Reasignación Inteligente de Atención: Al automatizar el contacto crítico inmediato, permitimos que los agentes se enfocaran en resolver alertas no críticas de forma preventiva.",
        ],
      },
      keyLearnings: {
        en: "The strongest B2B products often start as internal operational solutions: proving US$28.8K/yr in internal NOC savings gave us the exact operational evidence needed to take Omnibot to market with Energy Cloud.",
        es: "Los mejores productos B2B suelen nacer resolviendo un dolor propio: demostrar US$28.800/año de ahorro real en nuestro NOC fue la mejor carta de presentación para llevar Omnibot al mercado con Energy Cloud.",
      },
    },
    frameworks: [
      "Conversational AI",
      "NOC Observability",
      "B2B Commercialization",
      "Scrum",
      "OKR & Release Planning",
    ],
    impactBadges: {
      en: [
        "US$2,400/mo (US$28.8K/yr) NOC savings",
        "30% reduction in agent hours",
        "Energy Cloud pilot (Peru & Spain)",
        "New sellable Outsourcing service",
      ],
      es: [
        "US$2.400/mes (US$28.8K/año) ahorro NOC",
        "30% reducción horas de agentes",
        "Piloto Energy Cloud (Perú y España)",
        "Nuevo servicio comercializable",
      ],
    },
    highlights: {
      en: [
        "Delivers US$2,400/month (US$28,800/year) in direct operational savings across Outsourcing / NOC operations.",
        "Achieved a 30% reduction in agent hours (automating 1,000+ minutes/month at 100% SLA), enabling agents to focus on non-critical alerts.",
        "Commercial expansion: Deployed the conversational Omnibot pilot with Energy Cloud (Peru and Spain), enabling it as a new commercializable service for Outsourcing (alongside deployments in Central America, Caribbean, Portugal, and the UK).",
      ],
      es: [
        "Genera un ahorro operativo directo de US$2.400/mes (US$28.800/año) en Outsourcing / NOC.",
        "Reducción del 30% en horas de agentes (más de 1.000 minutos/mes automatizados al 100% de SLA), permitiéndoles enfocarse en alertas no críticas.",
        "Expansión comercial: Despliegue del piloto de Omnibot conversacional con Energy Cloud (Perú y España), habilitándolo como un nuevo servicio comercializable para Outsourcing (además de presencia en Centroamérica, Caribe, Portugal y Reino Unido).",
      ],
    },
  },
];

export const otherEnterpriseWork: OtherEnterpriseWorkSection = {
  title: {
    en: "Additional Discovery, AI & Innovation Initiatives",
    es: "Otras Iniciativas de Descubrimiento, IA e Innovación",
  },
  items: [
    {
      tag: { en: "AI Assessment MVP", es: "MVP Evaluación con IA" },
      title: {
        en: "AI Candidate Evaluation System",
        es: "Sistema de Evaluación con IA",
      },
      en: "Defined the MVP for an AI-powered candidate and literacy evaluation system, executed field testing, and built the data collection and scoring pipeline.",
      es: "Definí el MVP de un sistema de evaluación de candidatos e IA, lideré las pruebas en campo y estructuré la recolección y procesamiento de datos.",
    },
    {
      tag: { en: "Innovation Governance", es: "Gobierno de Innovación" },
      title: {
        en: "Enterprise Innovation Workflow",
        es: "Flujo de Innovación Empresarial",
      },
      en: "Co-designed the enterprise innovation funnel and coached product squads on hypothesis validation, rapid prototyping, and user testing.",
      es: "Como facilitador de innovación, ayudé a definir el flujo de innovación empresarial y acompañé a las células con metodología, prototipado y pruebas.",
    },
    {
      tag: { en: "Financial Tooling", es: "Benchmarking Financiero" },
      title: {
        en: "Cash Flow Reporting Benchmark",
        es: "Benchmarking de Flujo de Caja",
      },
      en: "Conducted technical and operational benchmarking of enterprise solutions to streamline cash flow report generation.",
      es: "Realicé el benchmarking técnico y funcional de soluciones para agilizar la generación automatizada de reportes de flujo de caja.",
    },
  ],
};

export const talks: TalksSectionData = {
  title: {
    en: "Talks, Webinars & Knowledge Sharing",
    es: "Charlas, Webinars y Divulgación",
  },
  intro: {
    en: "Clear communication is core to product leadership. I regularly deliver talks and workshops on AI, data science, and the future of work for corporate teams, universities, and schools across the region.",
    es: "Comunicar ideas complejas con claridad es parte esencial del rol de PM. He impartido charlas y webinars sobre IA y ciencia de datos para profesionales, universidades y colegios de la región.",
  },
  topics: [
    {
      en: "The Future of Work in the Age of AI",
      es: "El futuro del trabajo en la era de la IA",
    },
    {
      en: "AI: Myths vs. Operational Realities",
      es: "IA: mitos y realidades operativas",
    },
    {
      en: "Data Science for Non-Technical Leaders",
      es: "Ciencia de datos para no tecnólogos",
    },
  ],
};

export const personalProjectsHeader: PersonalProjectsHeaderData = {
  tag: {
    en: "03 // SPEC-DRIVEN PRODUCT LAB",
    es: "03 // LABORATORIO DE PRODUCTO (SDD)",
  },
  title: {
    en: "Personal Builds & Technical Teardowns",
    es: "Desarrollos Propios & Laboratorio SDD",
  },
  description: {
    en: "I don’t wait for permission to build. In my personal lab, I take everyday friction, write rigorous PM specifications (PRDs, data schemas, and acceptance criteria), and ship working software using Spec-Driven Development (SDD) with AI engineering workflows.",
    es: "No espero a tener un equipo asignado para resolver problemas. En mi laboratorio personal convierto fricciones reales en especificaciones rigurosas de producto (PRDs, esquemas de datos y criterios de aceptación) y las transformo en software funcional mediante Spec-Driven Development (SDD).",
  },
};

export const personalProjects: PersonalProject[] = [
  {
    id: "donny",
    code: "LAB-01 // DESKTOP APP",
    title: "Donny: Study Companion",
    tagline: {
      en: "A local-first, gamified macOS study companion built via Spec-Driven Development that turns focus habits into a pixel-art RPG loop.",
      es: "Un compañero de estudio gamificado y local-first para macOS que convierte la constancia diaria en un bucle de progreso pixel-art.",
    },
    problemHypothesis: {
      en: "The hardest part of self-directed learning isn’t starting—it’s day-4 retention. Standard timers feel sterile and isolated. Hypothesis: pairing Pomodoro sessions with immediate RPG feedback loops and local Obsidian Markdown ownership increases daily session completion.",
      es: "Lo más difícil de estudiar no es empezar, sino sostener el hábito después del cuarto día. Las apps de tiempo tradicionales se sienten frías y aisladas. Hipótesis: integrar mecánicas de recompensa estilo RPG con notas locales en Obsidian reduce el abandono.",
    },
    actionAndArchitecture: {
      en: "Authored modular product specs and acceptance criteria as a PM, orchestrating AI coding agents (Antigravity) to build a lightweight Tauri v2 + Rust + React 19 desktop app with Web Audio chiptune synthesis and direct Obsidian vault persistence.",
      es: "Escribí las especificaciones modulares y criterios de aceptación como PM, guiando agentes de IA (Antigravity) para construir una app de escritorio ligera en Tauri v2 + Rust + React 19 con audio chiptune sintético y persistencia directa en Markdown (Obsidian).",
    },
    resultAndValidation: {
      en: "Shipped a working native macOS build with zero cloud lock-in, sub-50MB memory footprint, and full Spec-Driven test coverage.",
      es: "Aplicación nativa para macOS funcional con cero dependencia de la nube, bajo consumo de memoria y arquitectura validada paso a paso contra especificaciones.",
    },
    tradeoffNote: {
      en: "Trade-off: Chose local Markdown files over a cloud database to guarantee 100% user data ownership and zero recurring server costs.",
      es: "Decisión de diseño: Prioricé archivos Markdown locales sobre una base de datos en la nube para garantizar soberanía de datos y costo cero de infraestructura.",
    },
    keyLearning: {
      en: "Writing unambiguous acceptance criteria before generating code cut rework by more than half when collaborating with AI coding agents.",
      es: "Definir criterios de aceptación verificables antes de generar código redujo drásticamente las iteraciones de corrección con los agentes de IA.",
    },
    stack: [
      "Tauri v2",
      "Rust",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "NES.css",
      "Web Audio API",
      "Obsidian Markdown",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/IvanCastillero/donny-study-companion",
    featuredMetric: {
      en: "Spec-Driven · Native macOS",
      es: "Spec-Driven · macOS Nativo",
    },
    images: [],
  },
  {
    id: "bill-splitter",
    code: "LAB-02 // MULTIMODAL AI",
    title: "Bill Splitter CLI & Web QR",
    tagline: {
      en: "Multimodal AI receipt parser with Hare-Niemeyer mathematical apportionment for zero-penny rounding discrepancies.",
      es: "Divisor de cuentas con IA multimodal y algoritmo matemático Hare-Niemeyer para garantizar cuadre exacto al centavo.",
    },
    problemHypothesis: {
      en: "Group bill splitting fails on two fronts: manual item entry is tedious, and naive percentage splits create penny rounding leaks where individual shares don’t sum to the receipt total.",
      es: "Dividir cuentas grupales falla en dos puntos: transcribir ítems a mano es tedioso y los prorrateos simples de impuestos/propinas generan fugas de centavos que no cuadran con el total de la factura.",
    },
    actionAndArchitecture: {
      en: "Combined Google Gemini multimodal vision (structured via strict Pydantic schemas) to extract line items from receipt photos with the Hare-Niemeyer largest-remainder algorithm to allocate taxes and tips deterministically.",
      es: "Combiné visión multimodal de Google Gemini (validada con esquemas Pydantic) para extraer ítems desde fotos de facturas con el algoritmo de Hare-Niemeyer de mayores restos para distribuir impuestos y propinas sin errores de redondeo.",
    },
    resultAndValidation: {
      en: "100% mathematical reconciliation across automated Pytest suites—every split matches the exact receipt total down to the last cent.",
      es: "100% de exactitud contable validada con suites automatizadas en Pytest: cada división suma exactamente el total impreso al centavo.",
    },
    tradeoffNote: {
      en: "Trade-off: Delegated OCR extraction to probabilistic AI (Gemini), but kept financial math 100% deterministic in Python.",
      es: "Decisión de diseño: Usé IA probabilística solo para leer el recibo, pero mantuve el cálculo financiero 100% determinista en código.",
    },
    keyLearning: {
      en: "AI products earn user trust when probabilistic LLM outputs are constrained by strict schemas and deterministic domain logic.",
      es: "Los productos con IA ganan confianza cuando acotas la salida probabilística del modelo con esquemas estrictos y lógica de negocio determinista.",
    },
    stack: [
      "Python 3.10+",
      "Google Gemini API",
      "Pydantic",
      "Hare-Niemeyer Algorithm",
      "Typer",
      "Rich",
      "Pytest",
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
    code: "LAB-03 // FINTECH SYSTEM",
    title: "Personal Wealth & Compounding Engine",
    tagline: {
      en: "Local-first financial telemetry and deterministic compound wealth simulator connecting daily cash flow to multi-year capital milestones.",
      es: "Sistema local-first de telemetría financiera y simulación determinista de interés compuesto conectado a metas patrimoniales.",
    },
    problemHypothesis: {
      en: "Personal finance tools split into passive expense loggers or static spreadsheets, leaving a gap between daily spending decisions and long-term compounding trajectories.",
      es: "Las herramientas financieras personales suelen dividirse entre registradores pasivos de gastos u hojas de cálculo estáticas, desconectando el gasto diario de la curva de interés compuesto a largo plazo.",
    },
    actionAndArchitecture: {
      en: "Architecting a local-first mobile system using Spec-Driven Development that links real-time expense telemetry with multi-scenario compound interest engines and milestone tracking.",
      es: "Diseño y arquitectura de un sistema móvil local-first bajo Spec-Driven Development que conecta telemetría de egresos en tiempo real con motores deterministas de interés compuesto.",
    },
    resultAndValidation: {
      en: "Complete domain specification, deterministic financial formulas, and local-first storage architecture currently in active implementation.",
      es: "Especificación funcional completa, modelos matemáticos deterministas y arquitectura local-first actualmente en desarrollo activo.",
    },
    tradeoffNote: {
      en: "Trade-off: Prioritized offline-first privacy and manual/CSV precision over fragile third-party bank scraping integrations.",
      es: "Decisión de diseño: Prioricé privacidad local-first y control exacto sobre integraciones bancarias frágiles de terceros.",
    },
    keyLearning: {
      en: "Financial interfaces should show the future opportunity cost of a decision, not just a historical ledger of past transactions.",
      es: "Una buena interfaz financiera debe mostrar el costo de oportunidad futuro de una decisión, no solo el historial contable del pasado.",
    },
    stack: [
      "Mobile Architecture",
      "Local-First Storage",
      "Financial Modeling",
      "Expense Telemetry",
      "Spec-Driven Development",
    ],
    liveUrl: "",
    githubUrl: "",
    featuredMetric: {
      en: "Active Build · Spec-Driven",
      es: "En Desarrollo · Spec-Driven",
    },
    images: [],
  },
  {
    id: "media-telemetry",
    code: "LAB-04 // DATA ANALYTICS",
    title: "Media Intelligence & Content Telemetry",
    tagline: {
      en: "Unified cross-medium tracking engine and statistical analytics pipeline for cinema, series, and anime consumption.",
      es: "Motor unificado de registro y analítica estadística para historial de consumo de cine, series y anime.",
    },
    problemHypothesis: {
      en: "Cultural consumption is fragmented across siloed streaming platforms and single-medium trackers (Letterboxd, MAL, Trakt), losing cross-format behavioral insights.",
      es: "El registro de consumo cultural está fragmentado entre plataformas de streaming y trackers aislados por formato, impidiendo analizar hábitos y estadísticas unificadas.",
    },
    actionAndArchitecture: {
      en: "Designing a normalized metadata schema and API aggregation pipeline that unifies movies, TV series, and anime into a single personal telemetry warehouse.",
      es: "Diseño de un esquema de metadatos normalizado y pipeline de agregación de APIs que unifica cine, series y anime en un solo motor de analítica personal.",
    },
    resultAndValidation: {
      en: "Unified schema specification and lifecycle state machine defined; analytics dashboard in active SDD iteration.",
      es: "Esquema de datos unificado y máquina de estados de ciclo de vida definidos; panel analítico en iteración bajo SDD.",
    },
    tradeoffNote: {
      en: "Trade-off: Built a normalized cross-medium schema with custom adapters rather than forcing episodic anime/TV into movie-centric tables.",
      es: "Decisión de diseño: Creé un esquema normalizado multi-formato con adaptadores propios en lugar de forzar series y anime en tablas diseñadas solo para películas.",
    },
    keyLearning: {
      en: "Clean data modeling upfront makes downstream analytics effortless; messy schemas create permanent UI complexity.",
      es: "Un modelo de datos limpio desde la especificación hace que la analítica sea simple; un esquema confuso traslada la deuda técnica a la interfaz.",
    },
    stack: [
      "Normalized Schemas",
      "API Aggregation",
      "Statistical Analytics",
      "Cross-Platform UI",
      "Spec-Driven Development",
    ],
    liveUrl: "",
    githubUrl: "",
    featuredMetric: {
      en: "Active Build · Spec-Driven",
      es: "En Desarrollo · Spec-Driven",
    },
    images: [],
  },
];

export const aboutContent = {
  sectionIndex: "04 // PRODUCT PHILOSOPHY & BACKGROUND",
  sectionTag: {
    en: "Why Psychology + Data + Systems",
    es: "Por qué Psicología + Datos + Sistemas",
  },
  title: {
    en: "I sit at the intersection of human behavior, quantitative evidence, and engineering execution.",
    es: "Trabajo en la intersección entre el comportamiento humano, la evidencia cuantitativa y la ejecución técnica.",
  },
  leadQuote: {
    en: "Good products don’t happen by accident. They happen when a team understands the human problem deeply, measures what actually moves the needle, and aligns on clear specifications before writing code.",
    es: "Los buenos productos no nacen por casualidad. Nacen cuando el equipo entiende a fondo el problema humano, mide lo que realmente mueve la aguja del negocio y alinea especificaciones claras antes de programar.",
  },
  paragraphs: {
    en: [
      "Over the past years as a Product Manager across Central America, the Caribbean, and Europe, I’ve led B2B platforms, AI automations, and executive discovery workshops in banking, retail, government, and tech operations.",
      "My foundation is in Psychology, complemented by specialized training in Data Science, Machine Learning, and Design Thinking. That combination shapes my product instinct: Psychology helps me uncover the real user friction behind what stakeholders ask for; Data Science lets me size the opportunity and audit the ROI.",
      "With engineering and UX/UI teams, I practice Spec-Driven thinking—translating ambiguous business goals into crisp problem statements, explicit trade-offs, and verifiable acceptance criteria so teams ship with speed and confidence.",
    ],
    es: [
      "Durante los últimos años como Product Manager en proyectos regionales e internacionales, he liderado soluciones de automatización con IA, plataformas de datos y talleres estratégicos para banca, retail, gobierno y operaciones tecnológicas.",
      "Mi formación base es en Psicología y en el camino me especialicé en Ciencia de Datos, Machine Learning y Design Thinking. Esa combinación define mi criterio como PM: la psicología me permite descubrir la fricción humana real detrás de lo que se pide; los datos me permiten dimensionar el impacto y demostrar el retorno financiero.",
      "Junto a los equipos de ingeniería y UX/UI aplico un enfoque guiado por especificaciones claras: traduzco problemas ambiguos de negocio en decisiones explícitas, alcances bien acotados y criterios de aceptación verificables.",
    ],
  },
};

export const productPillars: ProductPillar[] = [
  {
    number: "01",
    tag: {
      en: "ARCHITECTURE OVER PATCHES",
      es: "SISTEMAS ANTES QUE PARCHES",
    },
    title: {
      en: "Scalable systems over isolated features",
      es: "Sistemas escalables antes que funciones sueltas",
    },
    description: {
      en: "An isolated feature patches a symptom once. A well-architected system compounds value—like designing Reportes del CoE for 50 initial contracts while preparing the schema to scale 4x to 200 contracts (US$180K/yr).",
      es: "Una funcionalidad aislada resuelve un síntoma puntual. Un sistema bien pensado multiplica su valor en el tiempo, como diseñar Reportes del CoE para 50 contratos iniciales dejando lista la arquitectura para escalar a 200 contratos (US$180K/año).",
    },
    tradeoffPrinciple: {
      en: "Default choice: Invest 20% more in unified data models upfront to avoid 400% rewrite costs at scale.",
      es: "Regla de decisión: Invertir en unificar el modelo de datos al inicio para evitar reconstruir el producto al escalar.",
    },
  },
  {
    number: "02",
    tag: {
      en: "QUALITATIVE + QUANTITATIVE",
      es: "EVIDENCIA CUALITATIVA Y CUANTITATIVA",
    },
    title: {
      en: "Empathy for discovery, hard numbers for impact",
      es: "Empatía para descubrir, números duros para validar",
    },
    description: {
      en: "I talk to users and shadow operators to understand why a workflow hurts, and I use financial and operational telemetry (hours freed, SLA compliance, USD saved) to prove the solution worked.",
      es: "Converso con los usuarios y observo su operación para entender por qué existe una fricción, y uso métricas financieras y operativas (horas liberadas, cumplimiento de SLA, ahorro en USD) para demostrar que la solución movió la aguja.",
    },
    tradeoffPrinciple: {
      en: "Default choice: Never ship a feature without a baseline metric and an auditable definition of success.",
      es: "Regla de decisión: Ninguna iniciativa sale a producción sin una línea base medida y un criterio de éxito auditable.",
    },
  },
  {
    number: "03",
    tag: {
      en: "SPEC-DRIVEN EXECUTION",
      es: "EJECUCIÓN GUIADA POR ESPECIFICACIONES",
    },
    title: {
      en: "Radical clarity for engineering & stakeholders",
      es: "Claridad radical para ingeniería y negocio",
    },
    description: {
      en: "Ambiguity is the most expensive tax in software. Whether facilitating a US$9M account workshop or writing specs for developers and AI agents, I make constraints, non-goals, and acceptance criteria explicit.",
      es: "La ambigüedad es el impuesto más caro en el desarrollo de software. Tanto al facilitar un taller para una cuenta de US$9M como al redactar especificaciones para desarrollo, hago explícitos los alcances, los no-objetivos y los criterios de aceptación.",
    },
    tradeoffPrinciple: {
      en: "Default choice: Cut scope early and explicitly rather than compromising reliability or handover readiness.",
      es: "Regla de decisión: Acotar el alcance a tiempo y con transparencia antes que comprometer la calidad del traspaso.",
    },
  },
];
