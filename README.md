# Portfolio App

A premium, dual-mode portfolio built with Next.js, Tailwind CSS, and Framer Motion. 

This repository currently contains the **Minimal Mode** (v1.0.0-minimal) release. It features a fully responsive, highly optimized, accessible, and SEO-fortified foundation designed to communicate professionalism and scale seamlessly.

## 🚀 Features

- **Blazing Fast**: Engineered with Next.js 16 App Router, utilizing aggressive Static Site Generation (SSG).
- **Data-Driven Architecture**: The entire application's content (About, Experience, Projects, Services) is perfectly abstracted into the `src/content/` directory. You never have to touch React components to update your copy.
- **Dynamic Case Studies**: Drop a new object into `src/content/data/projects.ts` and the system automatically generates a stunning `/projects/[slug]` case study page complete with OpenGraph and Twitter SEO tags.
- **Image Optimization**: All imagery leverages the native Next.js `<Image>` component for zero layout shifts and automatic WebP serving.
- **Accessible & Responsive**: 100% responsive across all viewports. Natively keyboard navigable with strict ARIA labels, semantic HTML, and focus rings.

## 📂 Architecture

```text
src/
├── app/                  # Next.js App Router (Layouts, Pages, SEO)
├── components/           # Shared UI and Layout blocks
│   ├── layout/           # Navbar, Footer, Section wrappers
│   └── ui/               # Buttons, Inputs, EmptyStates, Icons
├── content/              # 🧠 The Brain: Data layer for the entire app
│   └── data/             # profile, projects, tools, experience, etc.
├── features/             # Feature Slices (Modular domains)
│   ├── about/            
│   ├── case-study/       
│   ├── contact/          
│   ├── experience/       
│   ├── hero/             
│   ├── projects/         
│   ├── services/         
│   └── tools/            
├── lib/                  # Utilities (Tailwind cn merge)
├── providers/            # React Context providers (Theme, Motion)
└── types/                # Strict TypeScript interfaces
```

## 🛠️ Local Development

1. **Install dependencies**
   ```bash
   pnpm install
   # or npm install
   ```

2. **Start the development server**
   ```bash
   pnpm dev
   # or npm run dev
   ```

3. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Vercel Deployment

This application is meticulously configured for a one-click Vercel deployment. 

1. Push your repository to GitHub.
2. Import the repository into Vercel.
3. Add the `NEXT_PUBLIC_APP_URL` environment variable pointing to your production domain (e.g., `https://preetpatel.com`) so the dynamic `sitemap.xml` and `robots.txt` generate correctly.
4. Deploy!

## 🔮 Future Architecture (Creative Mode)

This repository serves as the foundation for Phase 5: The Creative Mode Mission Environment. The data structures and feature slices have been heavily modularized to support swapping out the "Minimal" visual layer with an interactive Three.js/Framer Motion driven 3D experience in the future, without modifying the underlying data layer.
