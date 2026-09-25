// Renders the CV from CAREER_DATA in the language set on <html lang>.
// Regenerate the PDFs after changing career-data.js (see CLAUDE.md).

const CV_STRINGS = {
  en: {
    profile: "Profile",
    skills: "Core Skills",
    experience: "Experience",
    earlierRoles: "Earlier roles",
    projects: "Selected Projects",
    languages: "Languages",
  },
  cs: {
    profile: "Profil",
    skills: "Klíčové dovednosti",
    experience: "Praxe",
    earlierRoles: "Předchozí pozice",
    projects: "Vybrané projekty",
    languages: "Jazyky",
  },
};

// Paths in CAREER_DATA are relative to the site root; this file sits three levels below it.
const SITE_ROOT = "../../../";

const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function renderCv() {
  const d = CAREER_DATA;
  const lang = document.documentElement.lang === "cs" ? "cs" : "en";
  const s = CV_STRINGS[lang];

  document.title = `${d.name} — CV`;

  const section = (heading, body) => `
    <section>
      <h3 class="section-heading">${heading}</h3>
      ${body}
    </section>`;

  document.body.innerHTML = `
    <header class="cv-header">
      <div>
        <h1>${d.name}</h1>
        <h2 class="role">${d.headline}</h2>
        <p class="contact-line">
          <span>${d.email}</span>
          <span>${displayUrl(d.linkedin)}</span>
          <span>${displayUrl(d.website)}</span>
          <span>${pick(d.location, lang)}</span>
        </p>
      </div>
      ${d.photo ? `<img class="photo" src="${SITE_ROOT}${d.photo}" alt="${d.name}" />` : ""}
    </header>

    ${section(s.profile, `<p>${pick(d.profile, lang)}</p>`)}

    ${section(
      s.skills,
      `<div class="skills-grid">${d.skills.map((skill) => `<span class="skill-pill">${pick(skill, lang)}</span>`).join("")}</div>`
    )}

    ${section(
      s.experience,
      d.employers
        .map(
          (employer) => `
          <div class="entry">
            <div class="entry-title">${employer.role} — ${employer.name}</div>
            <div class="entry-meta">${formatDates(employer, lang)} · ${pick(employer.location, lang)}</div>
            <ul>
              <li>${pick(employer.summary, lang)}</li>
              ${employer.earlierRoles ? `<li>${s.earlierRoles}: ${employer.earlierRoles.join(", ")}</li>` : ""}
            </ul>
          </div>`
        )
        .join("")
    )}

    ${section(
      s.projects,
      d.projects
        .map(
          (project) => `
          <div class="entry">
            <div class="entry-title">${pick(project.title, lang)}</div>
            <ul><li>${pick(project.description, lang)}</li></ul>
          </div>`
        )
        .join("")
    )}

    ${section(s.languages, `<p>${d.languages.map((language) => pick(language, lang)).join(" · ")}</p>`)}
  `;
}

renderCv();
