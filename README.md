# Iván Castillero — Product Manager Portfolio

A minimalist, high-craft personal portfolio built for **Iván Castillero**, Technical & B2B Product Manager. Designed following the modern **Linear / Raycast dark mode design system** (#08080C obsidian background, subtle ambient violet glows `#8B5CF6`, 1px borders, and bento card architecture).

---

## ⚡ Features & Architecture

- **Linear / Raycast Design System**: Deep obsidian palette (`#08080C`), subtle violet ambient lighting (`#8B5CF6` / `#A855F7`), 1px translucent borders, and pill-shaped badges.
- **Dynamic Bilingual Support (EN / ES)**: Instant toggle between English and Spanish with persistent preferences.
- **Enterprise Track Record (Confidential B2B @ GBM)**: Bento-style showcase highlighting high-stakes systems, AI support intelligence, and prioritization frameworks under NDA-compliant anonymized metrics.
- **Selected Personal Projects (Deep Dives)**: Detailed cards with problem/hypothesis, product solutions, tech stacks, live demos, and GitHub repositories.
- **Interactive Microinteractions**:
  - Interactive ambient cursor spotlight.
  - One-click **Copy Email** with animated feedback toast.
  - Interactive **Resume / CV Modal** with print/PDF export and quick summary copy.
  - Responsive sticky navbar with initials monogram (`IC`) and live status pulse.

---

## 🚀 Getting Started

### 1. Run Locally
The development server is running at:
```bash
npm run dev
# Open http://localhost:3000
```

### 2. Build for Production
To compile and generate optimized static pages:
```bash
npm run build
```

---

## 📁 File Structure

```
ivan-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with dark theme & SEO metadata
│   │   ├── globals.css        # Linear styling tokens & ambient radial glow utilities
│   │   └── page.tsx           # Home page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky glassmorphic navbar with language switch & CV button
│   │   ├── Hero.tsx           # High-impact hero with badges, headline & action pills
│   │   ├── AboutSection.tsx   # Product perspective, user psychology & 3 core pillars
│   │   ├── EnterpriseSection.tsx # GBM B2B enterprise bento grid with impact badges
│   │   ├── PersonalProjectsSection.tsx # Personal projects with problem/solution deep dives
│   │   ├── ResumeModal.tsx    # Raycast-style modal for executive CV & PDF export
│   │   ├── SpotlightBackground.tsx # Ambient mouse-tracking violet glow
│   │   ├── Icons.tsx          # Pixel-perfect SVG brand icons
│   │   └── Footer.tsx         # Minimal footer with location & contact handles
│   ├── context/
│   │   └── LanguageContext.tsx# React context for seamless EN/ES switching
│   ├── data/
│   │   └── content.ts         # Centralized bilingual content dictionary (easy to update)
│   └── types/
│       └── index.ts           # TypeScript interfaces for case studies and projects
```

---

## ✍️ Customizing Your Content

All texts, projects, links, and contact information are centralized in a single file:
👉 **[`src/data/content.ts`](file:///Users/ivanmanuel/.gemini/antigravity/scratch/ivan-portfolio/src/data/content.ts)**

You can quickly update:
- Your real email, LinkedIn URL, and GitHub handle.
- Your project URLs or add new case studies.
- Your resume milestones and education.

---

## 🌐 1-Click Deployment (Vercel)

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Initial commit of Ivan Castillero portfolio"
   git remote add origin https://github.com/ivanmanuel/ivan-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) -> **Add New Project** -> Select `ivan-portfolio`.
3. Click **Deploy**. Your portfolio will be live worldwide with HTTPS and custom domain support!
