# Preet Patel Portfolio: Design System

This document outlines the complete reusable design foundation for the dual-mode portfolio. This system powers both **Creative Mode** and **Minimal Mode** using a shared semantic token architecture.

---

## 1. Design Philosophy
- **One Component, Two Lenses**: Business logic and content remain identical. Only the CSS variables dictating colors, spacing, borders, typography, and motion change.
- **Aesthetic Distinction**: 
  - *Creative Mode* is realistic, cinematic, premium, and documentary-inspired (NASA/Apple).
  - *Minimal Mode* is highly editorial, timeless, fast, and recruiter-friendly.
- **Zero Duplication**: Themes are activated via CSS variable overrides on the root or component wrappers.

---

## 2. Visual Identity
- **Creative Mode Identity**: Stark contrast, deep space backgrounds, subtle glassmorphism, functional HUD aesthetics, and realistic planetary metallic tones. 
- **Minimal Mode Identity**: Stripped back, massive whitespace, stark contrasts (off-white and charcoal), strict typographic grid, invisible structures.

---

## 3. Design Tokens

### 3.1 Border Radius
- `--radius-none`: `0px`
- `--radius-sm`: `2px` (Creative HUD preferred)
- `--radius-md`: `6px`
- `--radius-lg`: `12px` (Minimal cards preferred)
- `--radius-full`: `9999px`

### 3.2 Shadow & Elevation System
- `--shadow-sm`: Subtle separation
- `--shadow-md`: Floating elements
- `--shadow-lg`: Deep elevation (Minimal popovers)
- `--shadow-glow`: Creative mode subtle HUD luminescence
- `--shadow-none`: `none`

### 3.3 Opacity & Glass Tokens (Creative Focus)
- `--opacity-glass`: `0.65`
- `--blur-glass`: `12px`

---

## 4. Typography System
**Typefaces:**
- *Creative Mode*: **Space Grotesk** (Futuristic, technical, yet highly legible).
- *Minimal Mode*: **Inter** (Editorial, sharp, highly professional).

**Typographic Hierarchy Tokens:**
- `--text-display`: Hero massive text (responsive `clamp()`).
- `--text-h1`: Section titles.
- `--text-h2`: Sub-section titles.
- `--text-h3`: Card/Block titles.
- `--text-body`: Standard reading text.
- `--text-ui`: HUD labels, buttons, navigation.
- `--text-mono`: Technical metadata (Creative Mode heavy).

---

## 5. Color Token Architecture
Colors are purely semantic. Components consume these tokens, never raw hex codes.

### Base Tokens
- `--color-background`: Main canvas (Creative: `#050505`, Minimal: `#FAFAFA`).
- `--color-foreground`: Main text (Creative: `#FAFAFA`, Minimal: `#111111`).

### Surface Tokens
- `--color-surface`: Card/Container backgrounds.
- `--color-surface-hover`: Interactive surface state.
- `--color-border`: Dividers and container edges.

### Brand/Accent Tokens
- `--color-primary`: Primary actions and highlights.
- `--color-primary-foreground`: Text inside primary actions.
- `--color-muted`: Secondary text, disabled states, HUD passive elements.
- `--color-accent`: Theme-specific highlights (Creative: Metallic/Ochre, Minimal: Deep Charcoal).

---

## 6. Spacing System
Strict adherence to a 4pt/8pt baseline grid.
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-4`: `16px` (Standard inner padding)
- `--space-8`: `32px` (Component spacing)
- `--space-16`: `64px` (Section spacing - Mobile)
- `--space-32`: `128px` (Section spacing - Desktop)

---

## 7. Grid System
- **Desktop Grid**: 12 columns, `24px` gutters, `max-width: 1440px`.
- **Tablet Grid**: 8 columns, `16px` gutters.
- **Mobile Grid**: 4 columns, `16px` gutters, fluid width.

---

## 8. Component Standards
Shared components must remain visually neutral at the structural level.
- **Buttons**: Minimal mode uses sharp contrast fills. Creative uses subtle glass outlines with glowing hover states.
- **Cards**: Minimal mode uses flat backgrounds with subtle shadows. Creative mode uses frosted glass over the 3D environment.
- **Typography Layout**: Margins between headings and body text are controlled by spacing tokens, not hardcoded CSS.

---

## 9. Motion System
Motion must be purpose-driven. No decorative floating.

**Animation Tokens:**
- `--animate-fast`: `150ms` (Hover states, Minimal Mode transitions).
- `--animate-base`: `300ms` (Standard UI enters).
- `--animate-slow`: `800ms` (Cinematic camera moves, theme switching).

**Easing Curves:**
- `--ease-ui`: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- `--ease-cinematic`: `cubic-bezier(0.65, 0, 0.35, 1)`

---

## 10. Cursor System
- **Creative Mode**: Custom small crosshair or reticle. Expands contextually over interactive HUD elements.
- **Minimal Mode**: Native system cursor with subtle scale modifications on interactive targets.

---

## 11. Theme Switching System
The switch between modes is a perspective change, not a page reload.
- **Sequence**: 
  1. Fade out current mode UI overlay (HUD or Editorial layout).
  2. Swap CSS variables (`.creative` ↔ `.minimal`).
  3. Cinematic background either dissolves (to Minimal) or materializes (to Creative).
  4. Fade in new mode UI.
- **Persistence**: Theme preference is saved locally.

---

## 12. Layout System
- **Section Wrappers**: Standardized `<Section>` components applying `--space-32` vertical padding.
- **Containers**: Standard `<Container>` restricting maximum width and applying responsive horizontal padding.
- **Responsive Stacking**: Flexbox/Grid systems transition from horizontal to vertical seamlessly at `< 768px`.

---

## 13. Responsive Rules
- **Desktop (`>= 1024px`)**: The primary experience. Full cinematic capabilities in Creative. Extensive whitespace in Minimal.
- **Tablet (`>= 768px`)**: Adaptive bridging. HUD elements may consolidate.
- **Mobile (`< 768px`)**: Simplified Creative Mode (no intensive 3D parsing, fallback to high-res video/image loops). Stacked Editorial Minimal Mode.

---

## 14. Accessibility Standards
- **Color Contrast**: Both themes strictly adhere to WCAG AA (4.5:1 for standard text).
- **Reduced Motion**: If `@media (prefers-reduced-motion)` is detected, cinematic animations bypass instantly.
- **Focus Rings**: Standardized `--color-focus` applied to `:focus-visible` across both modes.

---

## 15. Component Naming Convention
- React Components: `PascalCase` (e.g., `ProjectCard`).
- CSS Variables: `kebab-case`, strictly namespaced (e.g., `--color-primary`).
- Avoid mode-specific naming like `CreativeCard`. Use `Card` and let the CSS variables handle the presentation.

---

## 16. Design Do's
- Do rely exclusively on CSS variables for styling.
- Do keep component props focused on data and behavior, not presentation.
- Do prioritize reading flow and typographical scale.

---

## 17. Design Don'ts
- Don't hardcode hex colors or pixel values outside of the global tokens.
- Don't build separate component trees for different themes.
- Don't add animations that delay the user from reading core content in Minimal Mode.

---

## 18. Future Scalability Guidelines
The dual-theme token architecture is designed to support a potential `Theme C` by simply creating a new CSS class (`.theme-c`) and mapping the existing semantic tokens to new values. The React component tree will require zero modifications to support new visual modes.
