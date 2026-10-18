# Rules

Coding rules for this codebase, with how each applies and where the code does not follow it yet.

## SOLID

- **Single responsibility.** One component renders one section. `chatLogic.js` matches and replies. `ThemeContext` handles theme only. Keep new code to one job.
- **Open and closed.** Add a section by creating a component and adding it to `App.js`. Add a chatbot topic by adding a pattern and a reply. Do not edit unrelated sections.
- **Liskov substitution.** Not a big factor here, as there is almost no inheritance. Components that take the same props should be swappable.
- **Interface segregation.** A component reads only the slice of `portfolioData` it needs (`const { experience } = portfolioData`).
- **Dependency inversion.** Components depend on the data shape, not on literal text. Change content in the data file, not in JSX.

## DRY

- Content lives once in `portfolioData.js`. The chatbot reads from it, so answers update with the site.
- Shared styles live in `src/index.css` (`.card`, `.btn-primary`, `.section-container`) and `animations.css`.

Known repetition to clean up:
- Every section repeats the same `useInView` setup and heading row. A `SectionCard` component could replace it.
- `TechStack.js` repeats the same chip block for each category. A `ChipGroup` component fed from an array would cut about 70 lines.
- The experience and leadership timeline items share markup.

## KISS

- No state library, router, or backend. A static page does not need them.
- Plain regex matching for the chatbot. Do not add an LLM unless a feature needs it.
- Prefer a Tailwind class over a new CSS rule.
- Prefer editing data over adding logic.

## Project conventions

- **Style:** match the surrounding code. Follow the section template in `ARCHITECTURE.md`.
- **Comments:** short and plain. Explain why, not what.
- **Text:** no em dashes, no emojis in new site copy.
- **Files:** lowercase names and extensions. Asset names are descriptive (`software-engineering-python.pdf`).
- **Truthfulness:** claim only what you can show. List a skill as a skill only if there is work or a certificate behind it. Describe concept-only knowledge as concepts.
- **Sync:** after changing the resume, update `portfolioData.js`, and the reverse.
- **Before a release:** run `npm run build` and check the page in light and dark mode at phone and desktop width.
