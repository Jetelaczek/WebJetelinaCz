# jetelina.cz

Tomáš Jetelina's personal website, an online CV at https://www.jetelina.cz. Terms such as Visitor, Career data, Project, Employer, CV and Headline are defined in `CONTEXT.md`. The raw career facts (employment history, the AD course, which repositories back which Project) are in `docs/career-sources.md`: read it before writing or changing any career content.

## Site requirements

- **Two languages.** Every visible string exists in English and Czech.
- **Sections, in nav order:**
  - **Home**: a brief introduction.
  - **About**: professional background and skills, followed by:
    - **"Projects I've Been Working On"**: Project cards in plain language, never naming the underlying repositories. The title never says "Current Projects". The Active Directory experience is its own card and always the last one, mentioning the GOPAS AD course (linked) and the NN Group AD environment Tomáš manages. Describe that experience as ongoing.
    - **"Where I've Worked"** (CZ "Kde jsem pracoval"): one card per Employer with what the company does, Tomáš's role(s) and the dates.
  - **Contact**: a form and contact details for Visitors.
  - **CV**: view or download the CV as a PDF in English and Czech; each link opens the PDF in a new tab.
- **CV stays in step with the site.** When career content changes, update both CVs to match and regenerate both PDFs.
- **Design:** clean, modern, professional and responsive on desktop and mobile. Strictly black & white: greys only, no accent colour, on the page (light and dark themes) and in both CVs. Clear typography, smooth but subtle animations and transitions, and images optimised for fast loading.
- **Content:** concise and well structured, with high-quality images where they help. Proofread all text in both languages.

## Agent skills

### Issue tracker

Issues and specs live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default label strings are used as-is (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), recorded as a `Status:` line in each issue file. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
