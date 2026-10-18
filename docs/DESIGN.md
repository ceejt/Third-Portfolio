# Design

## Branding identity

- **Voice:** plain, direct, first person. Short sentences. No filler.
- **Look:** minimal and monochrome. Content is the focus, so there are no brand accent colors.
- **Positioning:** fullstack developer and designer with AI integration experience.
- **Chatbot name:** TinAI.

## Theme

- Dark and light themes, switched by a class on `<html>` (`darkMode: "class"`).
- Dark is the default. The choice is saved in `localStorage` under `theme`.
- Toggled by `ThemeToggle`. The body color change takes 300 ms.

## Colors

Defined in `tailwind.config.js`.

| Token | Hex | Use |
|---|---|---|
| `light.bg` | #FFFFFF | Page background, light |
| `light.text` | #1C1E21 | Body text, light |
| `light.card` | #F5F5F5 | Card background, light |
| `dark.bg` | #0A0A0A | Page background, dark |
| `dark.text` | #FFFFFF | Body text, dark |
| `dark.card` | #1C1E21 | Card background, dark |
| `primary` | #B6B6B6 | Muted accents, years, URLs, bullets |
| `secondary` | #1C1E21 | Hover borders, primary button in light |
| `border` | #B6B6B6 | Card and chip borders |

Secondary text uses `text-gray-600` in light and `text-gray-400` in dark.

## Typography

| Role | Font | Size |
|---|---|---|
| Body, headings | Geist (400 to 900 variable) | `p` 14px |
| Code, years, URLs, location | Fira Code | 10px to 14px |
| h1 | Geist semibold | 24px |
| h2 (section titles) | Geist semibold | 18px |
| h3 (card titles) | Geist medium | 14px |
| h4 (captions, meta) | Geist medium | 10px |

Both fonts load from Google Fonts in `public/index.html`.

## Spacing

- Page container: `.section-container` is `max-w-7xl`, centered, with `px-4 sm:px-6 lg:px-8` and `py-12`.
- Page grid: `gap-8` between columns, `space-y-8` between sections.
- Cards: `.card` has `p-6`, `rounded-lg`, and a 1px border.
- Inside cards: `gap-2` for the heading row, `mb-6` after it, `space-y-4` between list items, `gap-2` between chips.
- Inner items (projects, certifications): `border rounded-lg p-4`.

## Components

- **Section card:** `.card animate-on-scroll`, heading row with a 20px icon.
- **Timeline item:** `border-l-2 border-border pl-4`, border turns `secondary` (light) or `primary` (dark) on hover. Used by Leadership and Experience.
- **Chip:** `px-3 py-1 rounded-md border border-border text-h4 hover-lift`.
- **Buttons:** `.btn-primary` and `.btn-secondary`, defined in `src/index.css`.
- **Long lists:** `max-h-[600px] overflow-y-auto pr-2` (Leadership, Certifications).

## Animations

Defined in `src/styles/animations.css` and `tailwind.config.js`.

| Name | Effect | Use |
|---|---|---|
| `animate-on-scroll` plus `visible` | Fade and rise 20px, 0.6s | Section entrance, triggered once by `useInView` |
| `animate-fade-in` | Opacity 0 to 1, 0.6s | Header |
| `hover-lift` | Rise 4px and soft shadow, 0.3s | Cards, chips |
| `hover-scale` | Scale to 1.05, 0.3s | Images |
| `float` | 10px vertical loop, 3s | Decorative |

The scrollbar is thin (8px) and recolored for each theme.

## Accessibility

Current state, from reading the code (not a full audit):

- Images have `alt` text. The theme toggle, chat button, and modal close button have `aria-label`.
- Layout is responsive and works at phone width.
- Dark and light themes are both available.

Known gaps to fix:

- `primary` (#B6B6B6) on a white or light card is low contrast (about 2:1, below the 4.5:1 WCAG AA target). It is used as text for years, URLs, and bullets in light mode.
- `text-h4` is 10px, which is small for reading.
- The scroll-in animation does not respect `prefers-reduced-motion`.
- Gallery alt text is generic ("Gallery 1").
- Project cards are clickable `div` elements, not links, so they are not keyboard accessible.
