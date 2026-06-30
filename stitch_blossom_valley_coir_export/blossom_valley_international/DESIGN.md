---
name: Blossom Valley International
colors:
  surface: '#fdf9f2'
  surface-dim: '#dddad3'
  surface-bright: '#fdf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ece8e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#50443f'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#82746e'
  outline-variant: '#d3c3bc'
  surface-tint: '#755849'
  primary: '#604537'
  on-primary: '#ffffff'
  primary-container: '#7a5c4d'
  on-primary-container: '#ffd7c4'
  inverse-primary: '#e5bfac'
  secondary: '#45664c'
  on-secondary: '#ffffff'
  secondary-container: '#c6eccb'
  on-secondary-container: '#4a6c52'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#e5bfac'
  on-primary-fixed: '#2b160b'
  on-primary-fixed-variant: '#5c4133'
  secondary-fixed: '#c6eccb'
  secondary-fixed-dim: '#abd0b0'
  on-secondary-fixed: '#01210d'
  on-secondary-fixed-variant: '#2d4e36'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fdf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e6e2db'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style
The design system for this brand is rooted in **Organic Minimalism**. It bridges the gap between industrial precision (Apple/Herman Miller) and the raw, tactile nature of high-quality coir exports. The target audience includes international architects, interior designers, and luxury eco-retailers who value sustainability as much as sophisticated craftsmanship.

The visual narrative avoids the "crunchy" aesthetic of typical eco-brands, opting instead for a "Natural Luxury" approach. The UI uses expansive whitespace to create a sense of breathability and premium positioning. Every interaction should feel deliberate and calm, evoking the quiet confidence of a heritage brand with a forward-thinking environmental soul.

## Colors
The palette is inspired by the lifecycle of the coconut and the forest floor. 
- **Coconut Brown (#7A5C4D):** Used for structural elements and primary actions, representing the core product.
- **Forest Green (#3E5F46):** Used for sustainability callouts and high-level secondary accents.
- **Warm Beige & Soft White:** These form the primary surface layers, replacing harsh whites with a more natural, "undyed" textile feel.
- **Gold Accents (#D4AF37):** Used sparingly for "Certified Quality" badges, high-end hover states, and premium underlines.
- **Charcoal Grey (#2F2F2F):** Reserved for high-contrast typography to ensure readability against warm backgrounds.

## Typography
The typography system relies on the contrast between the intellectual, editorial feel of **Playfair Display** and the functional, modern clarity of **Inter**.

- **Headlines:** Use Playfair Display with tighter letter-spacing for a sophisticated, magazine-style layout. Large display sizes should be used to introduce product collections.
- **Body Text:** Inter is utilized for all functional text to maintain a professional, tech-forward edge. Use the `body-lg` variant for storytelling sections.
- **Utility:** Small caps with tracking (letter-spacing) are used for category labels and breadcrumbs to reinforce the luxury retail aesthetic.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous margins to mimic high-end interior design catalogs.
- **Margins:** Desktop layouts use an 80px outer margin to frame content like a piece of art.
- **Gaps:** Use a standard 32px gutter for grid items, ensuring no element feels crowded.
- **Rhythm:** Spacing follows an 8px scale. For luxury impact, prioritize vertical "breathing room" (120px+) between major page sections to allow the user to digest high-quality photography without distraction.

## Elevation & Depth
Depth in the design system is achieved through "Atmospheric Layering" rather than traditional shadows.
- **Tonal Layers:** Surfaces utilize Warm Beige (#F5F1EA) on top of Soft White (#FCFBF8) to create subtle, shadowless depth.
- **Glassmorphism:** Use for navigation bars and overlay modals. Apply a `backdrop-filter: blur(20px)` with a 60% opacity Soft White background. This suggests a clean, modern transparency.
- **Ambient Shadows:** When necessary for cards, use extremely diffused shadows (Blur: 40px, Y: 20px) with a very low opacity (5-8%) tinted with Coconut Brown to keep the shadow feeling "warm" rather than grey.

## Shapes
The shape language is "Organic Geometric." While the grid is strict, the corners are notably soft to reflect the fibers of the coir product.
- **Cards:** Use `rounded-xl` (24px) as the default for product cards and content containers.
- **Buttons:** Use a fully rounded pill-shape for primary actions to provide a friendly, accessible touchpoint.
- **Decorative Elements:** Occasional use of organic, non-geometric SVG blobs in Soft White or very faint Gold can be used behind product photography to break the "grid" feel and emphasize natural origin.

## Components
- **Buttons:** Primary buttons feature a Coconut Brown background with Soft White text. Hover states should transition to Forest Green. Use a pill-shape with ample horizontal padding.
- **Product Cards:** Large 24px+ corner radius. Use high-resolution lifestyle photography as the primary focus. Information is placed below the image on a Warm Beige surface.
- **Input Fields:** Soft White backgrounds with a 1px Warm Beige border. On focus, the border transitions to a 1px Gold stroke.
- **Glass Modals:** Use for product quick-views, utilizing the glassmorphism blur effect to keep the user grounded in the main context.
- **Sustainability Chips:** Small, Forest Green pill-shaped labels with Soft White text to highlight "Eco-Friendly" or "100% Organic" attributes.
- **Progressive Disclosure:** Use thin, 1px horizontal lines in Warm Beige to separate list items in technical specification tables.