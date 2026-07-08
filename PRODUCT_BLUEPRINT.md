# Product Blueprint: Preet Patel Portfolio

## 1. Product Vision
To build a singular, seamless portfolio experience that serves two distinct audiences—creative explorers and time-constrained professionals—through a unified dual-mode architecture. The portfolio will feature identical content, structural integrity, and SEO across both **Creative** and **Minimal** modes, shifting only its visual, spatial, and interactive presentation. It is one website, viewed through two completely different lenses.

## 2. Core Philosophy
- **One Content, Two Lenses**: Data and content are completely decoupled from presentation.
- **Storytelling over Gimmicks**: Every animation, layout choice, and transition must have a narrative or functional purpose. Nothing moves just because it looks "cool".
- **Production-Ready**: The architecture must prioritize modularity, reusability, and scalability from Day 1.
- **No Compromises**: Aesthetics, performance, accessibility, and SEO must coexist without trade-offs.

## 3. User Experience Goals
- **Seamless Exploration**: Visitors in Creative Mode should feel like they are exploring a single, continuous cinematic environment without interruption.
- **Efficient Consumption**: Visitors in Minimal Mode should find information instantly with zero friction or visual distraction.
- **Instantaneous Transition**: The switch between modes must be fluid, contextual, and uninterrupted, acting as a perspective shift rather than a page reload.
- **Believability**: Interactions and visuals in Creative Mode should feel grounded, realistic, and highly polished, inspired by aerospace and cinematic realism.

## 4. Storytelling Narrative (Creative Mode)
- **The Premise**: The visitor is observing a continuous space mission representing Preet's creative journey.
- **The Subject**: A spacecraft (representing creativity and ambition) launching from Earth to explore a single, cohesive, uncharted planet.
- **The Environment**: Every section of the portfolio is a geographical or functional location on this planet.
  - **Hero**: *Launch Facility / Orbit insertion.*
  - **About Me**: *Landing Zone / First steps.*
  - **Services**: *Research Station / Analysis.*
  - **Tools I Use**: *Engineering Bay / Equipment check.*
  - **Experience**: *Exploration Route / The journey taken.*
  - **My Work**: *Discovery Site / Unearthing gems.*
  - **Reach Out / Start Project With Me**: *Communication Base / Establishing contact.*
- **The Camera**: Smooth, deliberate, continuous tracking. No abrupt cuts, no teleportation, no disconnected planets.

## 5. Portfolio Information Architecture
- **Global Elements**: Theme Switcher, Navigation, Footer.
- **Identities**: Graphic Designer, Photographer.
- **Sections Flow**:
  1. Hero
  2. About Me
  3. Services
  4. Tools I Use
  5. Experience
  6. My Work
  7. Reach Out
  8. Start Project With Me

## 6. Creative Mode Principles
- **Aesthetic**: Realistic, cinematic, scientific, premium, immersive.
- **Inspiration**: NASA, SpaceX, Apple, National Geographic.
- **Interface**: 80% cinematic environment, 20% minimalistic HUD interface.
- **Vibe**: Believable aerospace engineering. **NOT** cyberpunk, fantasy, Star Wars, or neon gaming. Grounded in reality.

## 7. Minimal Mode Principles
- **Aesthetic**: Clean, elegant, minimal, timeless, editorial, fast.
- **Target Audience**: Recruiters, clients, agencies wanting fast access and professional presentation.
- **Focus**: Apple-level attention to typography, whitespace, and macro-spacing.
- **Interaction**: Zero unnecessary animations. Immediate content delivery. Professional and sharp.

## 8. Motion Principles
- **Purpose-Driven**: Every movement must have a logical reason (e.g., dust moving due to planetary wind, spacecraft thrusting to progress).
- **No Decorative Animations**: If it doesn't serve the story (Creative) or provide crucial functional feedback (Minimal), remove it.
- **Physics-Based**: Transitions should respect momentum, gravity, and mass.
- **Cinematic Flow**: Camera movements should emulate real lenses and drone/crane setups.

## 9. Theme Switching Principles
- **Contextual Transformation**: It is a perspective shift.
- **Transition Mechanics**:
  - HUD elements fade away.
  - The cinematic environment dissolves or pulls back.
  - Typography transforms gracefully into editorial layouts.
  - Spacing dynamically adjusts for optimal readability.
  - Colors shift instantly but smoothly.
- **Content Integrity**: The DOM structure and text remain identical; only CSS classes/variables and layout wrappers adapt.

## 10. Design Language
- **Creative Mode**:
  - *Colors*: Deep space blacks, stark whites, realistic planetary tones (dusty ochre, atmospheric blue), subtle metallic accents.
  - *Typography*: Technical, monospaced accents mixed with highly legible sans-serif for body content.
  - *Shapes*: Functional, geometric, HUD-inspired borders, subtle glassmorphism for legibility against environments.
- **Minimal Mode**:
  - *Colors*: High contrast black/white or very subtle off-white/dark greys.
  - *Typography*: Elegant, large, editorial sans-serif (e.g., Inter, SF Pro, Outfit). High contrast in font weights.
  - *Shapes*: Invisible grids, massive whitespace, sharp or perfectly rounded corners (Apple-esque).

## 11. UX Guidelines
- **Predictability**: Navigation must always behave as expected, regardless of the active mode.
- **Feedback**: Immediate tactile or visual feedback on hover/click/scroll.
- **Readability**: Contrast ratios must meet WCAG AA/AAA standards in both modes.
- **Performance**: Heavy 3D/Cinematic assets in Creative Mode must not block initial rendering or navigation.

## 12. Component Philosophy
- **Agnostic Components**: A generic `<Button />` or `<Section />` does not hardcode its mode. It relies on global state/context or CSS variables to determine its appearance.
- **Single Source of Truth**: Content is passed via props or a central data structure, never duplicated across modes.
- **Composition over Inheritance**: Use compound components and slots (children) to handle complex layouts without creating prop drilling nightmares.

## 13. Technical Architecture Recommendations
- **Framework**: Next.js (App Router) for hybrid rendering, SEO, and structured route management.
- **Styling**: Vanilla CSS (CSS Modules) or modern CSS-in-JS utilizing CSS Variables heavily for the theme switch.
- **3D/Animation**: React Three Fiber (R3F) and Three.js for Creative Mode environments. Framer Motion or GSAP for layout transitions, camera movements, and mode-switching orchestration.
- **State Management**: React Context or Zustand for lightweight global theme state (`creative` vs `minimal`).

## 14. Folder Structure Recommendations
```text
/src
  /app            # Next.js App Router (Pages, Layouts, global metadata)
  /components
    /ui           # Base, mode-agnostic UI elements (Buttons, Typography)
    /sections     # Page sections (Hero, About, Work - utilizing mode logic)
    /creative     # 3D models, R3F canvases, cinematic overlays
    /minimal      # Editorial layout wrappers if necessary
  /styles         # Global CSS, CSS variables for themes, utility classes
  /lib            # Utility functions, animation helpers, hooks
  /data           # JSON/TS files storing the single-source-of-truth portfolio content
  /public         # Static assets (Textures, Models, Fonts, Images)
```

## 15. Performance Strategy
- **Lazy Loading**: 3D assets and heavy textures in Creative Mode must be lazily loaded (`next/dynamic` or React `Suspense`).
- **Asset Optimization**: Use Draco compression for 3D models. WebP/AVIF formats for images.
- **Minimal Mode Priority**: Minimal mode should require near-zero JavaScript payload to render the core text.
- **Preloading**: Preload critical fonts and first-fold assets to prevent layout shifts.

## 16. Accessibility Strategy
- **Semantic HTML**: Proper use of `<main>`, `<section>`, `<header>`, `<footer>`, and heading hierarchy (`<h1>` to `<h6>`).
- **Aria Labels**: Crucial for Creative Mode's HUD elements to remain screen-reader friendly.
- **Reduced Motion**: Respect `prefers-reduced-motion` media query by falling back to Minimal Mode or stripping cinematic camera moves in Creative Mode.
- **Keyboard Navigation**: The entire portfolio flow must be navigable via Tab/Enter keys.

## 17. SEO Strategy
- **Static Generation / SSR**: Identical content must be easily crawlable in the DOM.
- **Metadata**: Utilize Next.js Metadata API for dynamic titles, descriptions, and Open Graph tags.
- **Single URLs**: No separate URLs for modes (e.g., no `/creative` and `/minimal`). The mode is purely a presentation layer (client-side or cookie-based preference).

## 18. Responsive Strategy
- **Fluid Typography & Spacing**: Use CSS `clamp()` for scalable text and padding across all breakpoints.
- **Mobile Creative Mode**: Simplified camera movements, optimized/reduced 3D assets, and touch-friendly HUD.
- **Mobile Minimal Mode**: Stacked layouts and optimized tap targets.

## 19. Development Rules (Anti-Overengineering)
1. **No Duplication**: Never create duplicated section components (e.g., `<HeroCreative />` and `<HeroMinimal />` with hardcoded text). Feed them the same data.
2. **Commit Often**: Use feature branches for every section and major component.
3. **Strict Standards**: ESLint and Prettier configured from Phase 1.
4. **No Placeholder Systems**: Build it right the first time. Do not introduce custom systems if standard solutions exist.
5. **Phase Discipline**: Generate only ONE objective at a time. Future phases will never generate the entire website at once.

## 20. Future Phase Roadmap
- **Phase 1**: Project Initialization & Foundation (Next.js Setup, Linting, Architecture, Folder Structure).
- **Phase 2**: Global Design System & CSS Variables (Typography, Colors, Spacing mapping for both modes).
- **Phase 3**: Content Architecture (Headless data structures for all portfolio text/data).
- **Phase 4**: Minimal Mode Implementation (Core layout, UI components, sections, and responsive design).
- **Phase 5**: Theme Switching Engine & State Management.
- **Phase 6**: Creative Mode Environment Foundation (Three.js/R3F setup, planetary surface, lighting).
- **Phase 7**: Creative Mode Storytelling & Animation (Camera paths, spacecraft implementation, cinematic flow).
- **Phase 8**: Creative Mode Interface Integration (HUD elements, interactive layers).
- **Phase 9**: Refinement, Performance Optimization, & Accessibility Audit.
- **Phase 10**: Final Polish, Deployment & SEO Setup.
