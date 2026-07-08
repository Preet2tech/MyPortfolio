# Preet Patel Portfolio: Content Architecture

This document outlines the complete Data Foundation and Content Architecture for the dual-mode portfolio. This system ensures that all portfolio data is strictly typed, decoupled from UI components, and fully scalable.

---

## 1. Complete Content Architecture
The portfolio utilizes a **Static TypeScript Data Layer**. All text, metadata, links, and configurations are exported as strongly typed objects. 
- **Single Source of Truth**: Neither the Creative Mode nor the Minimal Mode components contain hardcoded strings. They purely consume this data layer.
- **Benefits**: Zero build-step overhead for content parsing, perfect IDE autocomplete, and immediate static rendering (SSG).

---

## 2. Data Model Documentation

### 2.1 Profile Model (`Profile`)
The centralized core identity object.
- **Fields**: `name`, `role`, `shortIntro`, `longAbout`, `email`, `socials` (LinkedIn, X), `location`, `availability`, `languages`, `seoDescription`, `metaKeywords`.

### 2.2 Hero Model (`HeroData`)
- **Fields**: `headline`, `tagline`, `description`, `missionLabel` (Creative), `professionalLabel` (Minimal), `ctaButtons` (label, href, variant).

### 2.3 About Model (`AboutData`)
- **Fields**: `biography`, `education` (array), `interests`, `designPhilosophy`, `statistics` (e.g., years experience, projects completed), `timeline`.

### 2.4 Services Model (`Service`)
- **Fields**: `id`, `title`, `shortDescription`, `longDescription`, `features`, `toolsUsed`, `iconName` (Lucide), `displayOrder`.

### 2.5 Tools Model (`Tool`)
- **Fields**: `id`, `name`, `category`, `iconName`, `experienceLevel`, `yearsUsed`, `description`, `url`.

### 2.6 Experience Model (`ExperienceItem`)
- **Fields**: `id`, `company`, `role`, `employmentType`, `startDate`, `endDate` (or "Present"), `description`, `achievements`, `skillsUsed`.

### 2.7 Project Model (`Project`)
- **Fields**: `id`, `slug`, `title`, `category`, `thumbnail`, `gallery`, `shortDescription`, `problemStatement`, `solution`, `toolsUsed`, `role`, `liveUrl`, `githubUrl`, `isFeatured`, `seoMetadata`.

### 2.8 Contact & Footer Models (`ContactData`, `FooterData`)
- **Contact**: `email`, `preferredMethod`, `availabilityTimezone`, `responseTime`, `ctaMessage`.
- **Footer**: `copyrightYear`, `credits`, `version`, `navigation` (internal links), `socials`.

---

## 3. Recommended Folder Structure
```text
/src
  ├── types/
  │   └── content.types.ts     # Interfaces defining the shape of all models
  ├── content/
  │   ├── config/              # Centralized site configurations
  │   │   ├── site.ts          # SEO defaults, global metadata
  │   │   └── navigation.ts    # Header/Footer routes
  │   ├── data/                # The actual content instances
  │   │   ├── profile.ts
  │   │   ├── hero.ts
  │   │   ├── about.ts
  │   │   ├── services.ts
  │   │   ├── tools.ts
  │   │   ├── experience.ts
  │   │   ├── projects.ts
  │   │   └── contact.ts
  │   └── index.ts             # Barrel file exporting all content seamlessly
```

---

## 4. Type Definitions Recommendation
All models are defined as strict TypeScript `interface` or `type` aliases. 
- Use `?` for optional fields (e.g., `githubUrl?: string`).
- Use string literals for restricted categories (e.g., `type ToolCategory = "Design" | "Development" | "Analytics"`).

---

## 5. Naming Conventions
- **Files**: `kebab-case` (e.g., `content.types.ts`).
- **Interfaces**: `PascalCase` (e.g., `ExperienceItem`).
- **Data Objects**: `camelCase` (e.g., `export const heroData: HeroData = { ... }`).
- **Asset Names**: `kebab-case` prefixed by category (e.g., `project-alpha-thumbnail.jpg`).

---

## 6. Configuration Architecture
Separating configuration from content allows for easy global tweaks.
- `siteConfig`: Handles global SEO (default title, description, openGraph base image).
- `navigationConfig`: Handles the main array of `{ label, href }` objects to ensure the header and footer routing are always perfectly synced.

---

## 7. Content Management Strategy
Currently, content is managed by directly editing the `.ts` files in the `src/content/data/` directory. This is optimal for a developer portfolio. Because the models are strictly typed, the compiler will instantly warn you if a required field is missing or misspelled during an update.

---

## 8. SEO Content Strategy
- Every significant model (like `Project`) includes an optional `seoMetadata` object (`{ title, description, keywords }`).
- Next.js `generateMetadata` will dynamically import the project data and map these fields to `Metadata` objects.
- `siteConfig` acts as the absolute fallback for any missing SEO data.

---

## 9. Asset Organization Strategy
- Store all static images in `/public/assets/`.
- Subdirectories: `/public/assets/projects/`, `/public/assets/profile/`, `/public/assets/creative-mode/`.
- Content files reference assets via absolute root paths (e.g., `thumbnail: "/assets/projects/alpha-thumb.webp"`). 
- Use `.webp` or `.avif` for optimal performance.

---

## 10. Validation Strategy
- **Primary**: TypeScript compilation. If data violates the interface, the build fails.
- **Secondary (Future)**: Zod schemas. If the project ever transitions to fetching data over an API or reading from raw JSON/Markdown, Zod schemas should be mapped 1:1 with the TypeScript interfaces for runtime parsing.

---

## 11. Future CMS Migration Strategy
Because all UI components consume data from `src/content/index.ts`, migrating to a Headless CMS (like Sanity, Contentful, or Strapi) is trivial:
1. Replace the static objects in `src/content/data/*` with async `fetch()` calls to the CMS.
2. The TypeScript interfaces (`src/types/content.types.ts`) remain identical.
3. The UI components require **zero changes** since they are already expecting the exact shape defined by the interfaces.

---

## 12. Best Practices for Maintaining Content
- **Never duplicate data**: If your email is used in the Hero, Footer, and Contact section, reference `profile.email` in all three places.
- **Embrace optionals**: If a project doesn't have a live URL, omit the field rather than passing an empty string or placeholder. The UI will adapt automatically.
- **Keep it modular**: If the `projects.ts` file grows too large, split it into individual files (`projects/alpha.ts`, `projects/beta.ts`) and export them as an array from `projects/index.ts`.
