# Spec: Portfolio 2026 Makeover & Quantitative Case Studies (`specs/portfolio-2026-makeover.md`)

## 1. Objective & Vision
Transform Iván Castillero's Product Manager portfolio from a generic dark-mode SaaS template into a **bespoke, editorial-industrial Product Engineering & Strategy dossier** that answers one question immediately: *"Can I trust how this person thinks?"*

The redesign accomplishes three primary goals:
1. **Quantitative Impact First (2026 Portfolio Consolidation)**: Surface concrete, auditable financial, operational, and commercial metrics across directly led and co-led enterprise initiatives at GBM.
2. **PM Thought Process & PAR Case Study Architecture**: Restructure enterprise and personal projects around **Problem → Action & Trade-offs → Result (PAR)**, including expandable/interactive deep-dive dossiers covering Goals, Discovery/User Research, Solution Architecture, Quantified Impact, and Key Learnings.
3. **Bespoke Visual Makeover ("Editorial Precision & Product Telemetry")**: Eliminate generic AI-template tropes (`#08080C` + purple blobs + centered SaaS hero + uniform rounded cards). Replace with a warm carbon-obsidian & architectural stone palette, editorial serif + geometric sans + technical monospace typography, exposed 1px structural hairlines with crosshair indices, and interactive ledger/dossier components.

---

## 2. Quantitative Content Model (2026 Consolidation)

### 2.1 Consolidated Portfolio Executive Ledger
- **Direct & Co-Led Operational Savings**:
  - **US$4,150/mo (US$49,800/yr)** in 100% directly led initiatives (*Reportes del CoE* base + *Servicebot*).
  - **US$6,550/mo (US$78,600/yr)** total across led and co-led deployments (adding *Omnibot*).
  - **Up to US$17,800/mo (US$213,600/yr)** maximum projected annualized savings upon scaling *Reportes del CoE* to 200 contracts.
- **Commercial & Key Account Impact**:
  - **US$9,000,000** contract retained and reinforced (*Segundo Registro de la Propiedad, Guatemala*).
  - **New commercial pipeline & B2B service lines** unlocked (*Licores de Guatemala* at AWS Innovation Day + *Energy Cloud* in Peru & Spain).
- **Engineering & Operational Capacity Released**:
  - **Up to 1,280 hrs/mo** of engineering & back-office capacity reallocated to higher-value strategic work (up to 1,200 hrs/mo in CoE + 80 hrs/mo in Service Desk, plus 30% agent hour reduction in NOC).

### 2.2 Enterprise Case Studies (Structured with PAR + Deep-Dive Dossier)
1. **Reportes del CoE** *(100% Led · Incubation / Handover)*
   - **Problem**: Center of Excellence (CoE) engineers manually compiled monthly client service reports from fragmented data sources, consuming hundreds of engineering hours on repetitive low-leverage tasks.
   - **Action & Trade-offs**: Unified scattered data sources into a single automated reporting pipeline with UX/UI and engineering teams. Prioritized a standardized data schema for the initial 50-contract rollout (2027) before custom edge-case visualizations to ensure scalability up to 200 contracts.
   - **Result**:
     - **US$3,750/mo (US$45,000/yr)** base operational savings across 50 initial contracts.
     - **Up to US$15,000/mo (US$180,000/yr)** projected scale across 200 contracts.
     - **Up to 1,200 hrs/mo** of engineering capacity freed for high-value technical work (zero headcount reduction).

2. **Talleres Estratégicos: Segundo Registro de la Propiedad & Licores de Guatemala** *(100% Led · Client Discovery & Executive Alignment)*
   - **Problem**: Key enterprise accounts faced roadmap ambiguity and competing modernization priorities, putting multi-million-dollar renewals and new cloud adoption pipelines at risk.
   - **Action & Trade-offs**: Designed and facilitated custom executive prioritization and discovery workshops (Working Backwards, Design Thinking) tailored to LATAM institutional culture. Focused stakeholders on user-validated modernization milestones and AWS Innovation Day execution.
   - **Result**:
     - **US$9,000,000** contract retained and reinforced with GBM at *Segundo Registro de la Propiedad (Guatemala)*, kicking off a new modernization project.
     - New commercial demand and B2B opportunities generated with *Licores de Guatemala* during the *AWS Innovation Day*.
     - ~10 executive workshops facilitated across banking, retail, and government.

3. **Servicebot** *(100% Led · Scheduled for Production Dec. / Handover)*
   - **Problem**: Service Desk and Back Office agents spent recurring hours triaging routine tickets and executing manual administrative lookups.
   - **Action & Trade-offs**: Scoped and led the delivery of an automated conversational & workflow resolution agent integrated into Service Desk operations, focusing the MVP on the highest-frequency ticket categories for rapid handover.
   - **Result**:
     - **US$400/mo (US$4,800/yr)** direct operational savings for the Service Desk.
     - **80 hrs/mo** of Back Office agent capacity freed for complex escalations.

4. **Omnibot** *(Co-Led / Collaborative Deployment · Production / Handover)*
   - **Problem**: NOC / Outsourcing observability agents manually notified resolver groups on every incoming alert, creating response bottlenecks and alert fatigue.
   - **Action & Trade-offs**: Co-led platform feature launches and commercial expansion. Deployed conversational AI alert triage across internal NOC operations and piloted an external commercializable offering with *Energy Cloud* (Peru & Spain).
   - **Result**:
     - **US$2,400/mo (US$28,800/yr)** direct operational savings in Outsourcing / NOC.
     - **30% reduction in agent hours** (1,000+ minutes automated/month) at 100% SLA compliance, allowing agents to focus on non-critical/proactive analysis.
     - **Commercial expansion**: Piloted conversational Omnibot with *Energy Cloud* (Peru & Spain), turning an internal tool into a commercializable Outsourcing service.

---

## 3. Visual & Architectural Design System

### 3.1 Typography
- **Display / Editorial Headlines**: `Instrument Serif` or `Newsreader` (via `next/font/google`) for high-contrast editorial authority on key statements and case study titles.
- **Primary UI & Body**: `Plus Jakarta Sans` or `Inter` with `text-wrap: balance` on headings and `text-wrap: pretty` on body copy (`max-width: 75ch`).
- **Technical Telemetry / Metrics**: `JetBrains Mono` for index numbers (`[01]`, `CASE-01`), financial ledger figures (`US$9.0M`, `US$213.6K/yr`), and framework tags.

### 3.2 Color Palette (Warm Carbon, Paper & Signal Copper/Emerald)
- **Background Primary**: `#0B0B0A` (Warm Carbon Obsidian — no cold blue/purple cast).
- **Surface / Elevated Dossier**: `#121210` and `#171714` with subtle architectural grain and exposed `1px solid rgba(244, 241, 234, 0.09)` hairlines.
- **Primary Ink**: `#F4F1EA` (Warm Alabaster / Editorial Paper).
- **Secondary Ink**: `#A6A29A` (Muted Warm Stone).
- **Primary Accent**: `#E05A36` / `#F26B43` (International Signal Terracotta / Editorial Vermilion) for active states, decision callouts, and interactive triggers.
- **Quantitative / Financial Signal**: `#34D399` (Precision Emerald) & `#EAB308` (Amber Scale Projection) for audited savings and revenue figures.

### 3.3 Layout & Interactive Components
1. **Top Architectural Command Bar (`Navbar.tsx`)**: Exposed border bar with document index (`IC // PORTFOLIO 2026.Q4`), section jump links, EN/ES toggle, and direct CV download.
2. **Editorial Split Hero + Executive Impact Ledger (`Hero.tsx`)**:
   - Asymmetric editorial masthead answering *"Can I trust how this person thinks?"*
   - Interactive **2026 Impact Ledger** right below/beside the masthead with a toggle between:
     - **100% Led Initiatives** (`US$49.8K/yr` base savings · `1,280 hrs/mo` freed · `US$9.0M` retained)
     - **Total Portfolio + Co-Led** (`US$78.6K/yr` current · `US$213.6K/yr` scale projection · Multi-country expansion)
3. **Enterprise Case Study Dossiers (`EnterpriseSection.tsx`)**:
   - Filterable/scannable **PAR (Problem → Action → Result)** layout.
   - Each project displays its Leadership Scope badge (`100% Led` vs `Co-Led Deployment`), Status badge (`Incubation / Handover`, `Production`, `Client Discovery`), prominent Financial/Operational Metric Ledger, PAR summary, and an interactive **"Inspect PM Dossier (Decisions, Trade-offs & Learnings)"** drawer/accordion showing:
     - Goal & Business Context
     - User Research & Discovery
     - Key Product Decisions & Trade-offs
     - Impact Breakdown (Current vs. Scale Projection)
     - Key Learnings
4. **Personal Product Lab (`PersonalProjectsSection.tsx`)**:
   - Structured with PAR + Spec-Driven Development (SDD) architecture blueprints (`Donny`, `Bill Splitter CLI`, `Personal Wealth Engine`, `Media Telemetry`).
5. **PM Thinking & Philosophy (`AboutSection.tsx`)**:
   - Editorial essay column + 3 numbered architectural decision pillars.

---

## 4. Acceptance Criteria
1. **AC-1 (2026 Quantitative Accuracy)**: All numbers from the 2026 summary (`US$3,750/mo`, `US$45,000/yr`, `50` to `200` contracts, `US$15,000/mo` / `US$180,000/yr`, `1,200 hrs/mo`, `US$400/mo` / `US$4,800/yr`, `80 hrs/mo`, `US$9,000,000` Segundo Registro, Licores de Guatemala AWS Innovation Day, `US$2,400/mo` / `US$28,800/yr`, `30%` NOC hour reduction, Energy Cloud Peru & Spain, and consolidated totals `US$4,150/mo` / `US$49,800/yr`, `US$6,550/mo` / `US$78,600/yr`, `US$17,800/mo` / `US$213,600/yr`) are accurately represented in both Spanish (`es`) and English (`en`).
2. **AC-2 (PM Case Study Structure - PAR & Thinking)**: Every enterprise and personal project clearly presents Problem, Action/Decisions, and Result (PAR), plus an interactive breakdown of Trade-offs, Research/Discovery, and Key Learnings.
3. **AC-3 (Bespoke Non-AI Design System)**: Zero purple/violet SaaS glows (`#8B5CF6`/`#A855F7` removed). Uses editorial typography (`Instrument Serif`, `Plus Jakarta Sans`, `JetBrains Mono`), architectural hairline grid, and modern CSS (`text-wrap: balance`, `text-wrap: pretty`, `oklch` color interpolation fallback).
4. **AC-4 (Build & Lint Verification)**: `npm run build` and `npm run lint` pass with 0 errors.
