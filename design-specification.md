# GetHyped.nl - Frontend Design Specification

## 1. Full Page Structure
1.  **Navbar**: Sticky top navigation with Logo, Center pill-menu, and CTA.
2.  **Hero Section**: High-impact H1 ("Get Hyped. Get Noticed. Get Results.") paired with slanted geometry/statistic cards (e.g., "10M+ Organische views").
3.  **Intro Text Area**: Bold textual statement ("Klaar met gokken...").
4.  **Expertises**: Deck-of-cards scrolling layout showcasing 4 pillars (Social strategy, Content creation, Activation, Data).
5.  **Selected Work ("Content dat scoort")**: Showcase section featuring masonry/grid project cards with custom shape treatments (Bullit, Roasta, Loco).
6.  **Logo Wall**: Auto-scrolling infinite marquee highlighting client logos.
7.  **Contact/CTA Section**: Final push interaction panel.
8.  **Footer**: Robust footer with large branding, sitemap, location, and legal links.

## 2. Layout System
*   **Adaptive Root Scaling (Osmo)**: Instead of pixels, the layout uses dynamic `em`/`rem` scaling mapped to viewport widths using `clamp()` logic. 
    *   *Desktop Ideal Container*: 1920px. Base scaling down to 992px constraint.
*   **Alignment Logic**: Heavy reliance on flexbox column alignments, max-width character rules for paragraphs (`ch` units), and 12-column grid mapping (`.max-width-col-[N]`).
*   **Section Spacing System**: 
    *   Vertical rhythms rely on generous `em`-based scales: `96px` translates to `6em` on desktop down to `3.5em` on mobile. Uses intervals like 64, 96, 128, 160, 256.
    *   Global page padding sits at a comfortable `2.5em`.

## 3. Typography System
*   **Font Family**: `Inter, sans-serif` universally used for both headers and paragraphs.
*   **Font Sizes (Desktop / 1920px base)**:
    *   `XXL Heading (H1)`: `128px` (8em)
    *   `XL Heading`: `96px` (6em)
    *   `L Heading`: `88px` (5.5em)
    *   `M Heading`: `64px` (4em)
    *   `S Heading`: `56px` (3.5em)
    *   `XS Heading`: `32px` (2em)
    *   `Paragraph XL`: `40px` (2.5em)
    *   `Paragraph L`: `32px` (2em)
    *   `Paragraph M`: `24px` (1.5em)
    *   `Paragraph Regular`: `20px` (1.25em)
    *   `Paragraph S`: `16px` (1em)
*   **Font Weights**:
    *   Headings: Semi-bold (`600`)
    *   Paragraphs: Medium (`500`) and Normal (`400`)
*   **Line Heights**: Extremely tight for headers (`0.95em` – `1em`), standard legible height for body copy (`1.3em` – `1.4em`).
*   **Letter Spacing**: Tight kerning on display headings (`-0.05em`).

## 4. Color System
*   **Backgrounds / Neutrals**:
    *   Primary Background (Creme / Eggshell): `#faf4ec`
    *   Off-White: `#fffef7`
    *   Pure White: `#ffffff`
    *   Taupe/Grey Base: `#eae4d8`
*   **Text Colors**:
    *   Primary Dark (Near-Black): `#161616`
    *   Grey Accent: `#acb7c1`
*   **Brand / Functional Accents**:
    *   **Red** (Primary CTA & Highlights): `#fa5424`
    *   **Pink** (Content Creation): `#fcb8fa`
    *   **Green** (Activation): `#33c791`
    *   **Blue** (Data / Tech): `#0d8dff`

## 5. Navbar Behavior
*   **Positioning**: Top-fixed but responds dynamically to scroll events.
*   **Scroll Effect**: Intelligent sticky functionality—disappears when scrolling down to maximize screen real estate, immediately slides back into view on upward scroll.
*   **Spacing**: Sits with an interior margin relative to global constraints, with a pill-like aesthetic for the center menu items.
*   **Mobile Behavior**: Fluidly transforms into a hamburger toggle triggering a full-screen drawer or dropdown menu.

## 6. Animations
*   **Button-Color-Swoosh**: Intricate micro-interaction on hover. A secondary color sweeps across the background (`skew` and `translate` transforms involved) while text flips or swaps with dynamic timing (`var(--elastic-ease-out)`).
*   **Card Sticker Hover**: Subtly skewing (`rotate(-1deg)`) and scaling inputs giving a tactile "jelly" feedback on generic interactive elements.
*   **Scroll & Sticky Stacking**: The core "Expertises" list item uses `position: sticky` and `top` offsets. As the user scrolls, each card sticks just below the previous one, stacking aesthetically in sequence.
*   **Parallax & Fade-ins**: Native webflow interaction bindings trigger bottom-up reveals and opacities as elements enter the viewport threshold.

## 7. Responsive Behavior
*   **Breakpoints Logic**: Standard scale down:
    *   Desktop > 991px
    *   Tablet (991px > 768px)
    *   Mobile Landscape (767px > 480px)
    *   Mobile Portrait (< 479px)
*   **Mobile Layout Changes**:
    *   Hero section stats detach from their angled layout into straightforward vertical flex/grid alignments.
    *   `size-unit` calculations dynamically drop `em` relative sizes to maintain readable text dimensions despite tighter screens.
    *   Multi-column structures drop universally from 2-3 columns to 1 column.
