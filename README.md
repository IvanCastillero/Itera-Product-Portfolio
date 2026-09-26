# Iván Castillero: Product Manager Portfolio

A minimalist, high-craft personal portfolio built for **Iván Castillero**, Product Manager. Designed following the modern **Linear / Raycast dark mode design system** (`#08080C` obsidian background, subtle ambient violet glows `#8B5CF6`, 1px borders, and bento card architecture).

---

## ⚡ Features & Architecture

- **Linear / Raycast Design System**: Deep obsidian palette (`#08080C`), subtle violet ambient lighting (`#8B5CF6` / `#A855F7`), 1px translucent borders, and pill-shaped badges.
- **Dynamic Bilingual Support (EN / ES)**: Instant toggle between English and Spanish with persistent preferences.
- **Enterprise Experience**: Bento-style showcase highlighting alert automation with conversational AI, strategy facilitation workshops, report automation, and tech talks.
- **Personal Projects (Deep Dives)**: Featured full-width showcase of **Donny** (gamified study companion for macOS built with Tauri v2, Rust, React 19, and Spec Driven Development).
- **Interactive Microinteractions**:
  - Interactive ambient cursor spotlight.
  - One-click **Copy Email** with animated feedback toast.
  - Direct access to authentic **Resume (PDF)**.
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
├── public/
│   └── cv.pdf             # Real executive resume in PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with dark theme & SEO metadata
│   │   ├── globals.css        # Linear styling tokens & ambient radial glow utilities
│   │   └── page.tsx           # Home page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky glassmorphic navbar with language switch & CV link
│   │   ├── Hero.tsx           # High-impact hero with badges, headline & action pills
│   │   ├── AboutSection.tsx   # Product perspective, user psychology & 3 core pillars
│   │   ├── EnterpriseSection.tsx # Enterprise bento grid with impact badges and talks
│   │   ├── PersonalProjectsSection.tsx # Personal projects deep dive (Donny)
│   │   ├── SpotlightBackground.tsx # Ambient mouse-tracking violet glow
│   │   ├── Icons.tsx          # Pixel-perfect SVG brand icons
│   │   └── Footer.tsx         # Minimal footer with location & contact handles
│   ├── context/
│   │   └── LanguageContext.tsx# React context for seamless EN/ES switching
│   ├── data/
│   │   └── content.ts         # Centralized bilingual content dictionary
│   └── types/
│       └── index.ts           # TypeScript interfaces for case studies and projects
```

---

## ✍️ Customizing Your Content

All texts, projects, links, and contact information are centralized in a single file:
👉 **[`src/data/content.ts`](file:///Users/ivanmanuel/.gemini/antigravity/scratch/ivan-portfolio/src/data/content.ts)**

---

## 🌐 1-Click Deployment (Vercel)

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **Add New** > **Project**.
3. Import **`Itera-Product-Portfolio`**.
4. Click **Deploy**. Your portfolio will be live worldwide with automatic HTTPS!
