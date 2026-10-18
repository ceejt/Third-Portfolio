# Product Requirements

## Project scope

A personal portfolio for Cyril Josef Tinae (CJ). It helps recruiters and hiring managers see his work history, skills, projects, and certifications in one place, and contact him.

In scope:
- Static single-page site with a dark and light theme.
- Work history, tech stack, certifications, projects, goals, and contact links.
- Downloadable resume and certificate PDFs.
- A chatbot that answers questions about CJ from the site's own data.

Out of scope:
- User accounts, a database, or an admin panel.
- A blog or CMS.
- External AI calls.

## MVP

The MVP is live when a visitor can:
1. See who CJ is, where he is based, and what role he wants (Header, About).
2. Read his work history (Experience).
3. See his skills (Tech Stack) and verify certifications (PDF links).
4. Open his projects.
5. Download the resume and email him.
6. Switch between dark and light themes.
7. Ask the chatbot basic questions.

## Goals

1. **Get interviews.** Show a fullstack and AI integration profile that matches the current resume.
2. **Be easy to scan.** A recruiter should understand the profile in 30 seconds.
3. **Stay in sync with the resume.** Content changes in one file.
4. **Be cheap to run.** Static hosting, no servers.
5. **Show craft.** Consistent design, smooth interaction, clean code.

## Technical requirements

- React 18, Tailwind CSS, Create React App.
- All content in `src/data/portfolioData.js`.
- Works in current Chrome, Safari, Firefox, and Edge.
- Responsive from phone width to wide desktop.
- Asset paths use `assetPath()`. File names are lowercase so they work on case-sensitive hosts.
- Static build under `build/`, deployable by `gh-pages` or Netlify.
- Chatbot works offline and calls no external API.
- No secrets in the repo.

## Success metrics

These are targets. The site has no analytics yet, so none is measured today.

| Metric | Target | How to measure |
|---|---|---|
| Interview invites that mention the portfolio | Track per application | Manual log |
| Resume downloads | Growing month over month | Add simple analytics (for example Plausible) |
| Lighthouse scores | 90+ performance, accessibility, SEO | Lighthouse run before each release |
| Content drift from resume | Zero known mismatches | Compare resume and site after each update |
| Time to update after a new job or course | Under 15 minutes | Edit `portfolioData.js` and deploy |

## Open items

- Add analytics so resume downloads can be counted.
- Fix the accessibility gaps listed in `DESIGN.md`.
- Add a RAG or LLM-backed chatbot only if it supports a real skill claim.
