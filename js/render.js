// Fills the page's career content from CAREER_DATA in the given language.

const CV_FILES = [
  { lang: "en", href: "assets/cv/Tomas_Jetelina_CV_EN.pdf" },
  { lang: "cs", href: "assets/cv/Tomas_Jetelina_CV_CZ.pdf" },
];

function renderPage(lang) {
  const d = CAREER_DATA;

  document.title = `${d.name} | ${htmlToText(d.headline)}`;

  document.getElementById("heroName").textContent = d.name;
  document.getElementById("heroHeadline").innerHTML = d.headline;
  document.getElementById("heroIntro").innerHTML = pick(d.intro, lang);
  document.getElementById("heroAvatar").innerHTML = d.photo
    ? `<img src="${d.photo}" alt="${d.name}" width="220" height="220" />`
    : d.initials;

  document.getElementById("aboutText").innerHTML = pick(d.about, lang)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  document.getElementById("skillsList").innerHTML = d.skills
    .map((skill) => `<li>${pick(skill, lang)}</li>`)
    .join("");

  document.getElementById("projectsGrid").innerHTML = d.projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${pick(project.title, lang)}</h3>
          <p>${pick(project.description, lang)}</p>
          ${project.note ? `<p class="project-note">${pick(project.note, lang)}</p>` : ""}
        </article>`
    )
    .join("");

  document.getElementById("employersGrid").innerHTML = d.employers
    .map(
      (employer) => `
        <article class="project-card">
          <h3>${employer.name}</h3>
          <p>${pick(employer.about, lang)}</p>
          <p class="card-meta">${employer.role} · ${formatDates(employer, lang)} · ${pick(employer.location, lang)}</p>
          ${employer.earlierRoles ? `<p class="project-note">${t("about.earlierRoles", lang)}: ${employer.earlierRoles.join(", ")}</p>` : ""}
          <p class="project-note">${pick(employer.summary, lang)}</p>
        </article>`
    )
    .join("");

  // The CV in the current language comes first.
  document.getElementById("cvDownloads").innerHTML = [...CV_FILES]
    .sort((a, b) => (a.lang === lang ? -1 : b.lang === lang ? 1 : 0))
    .map(
      (cv, i) =>
        `<a class="btn ${i === 0 ? "btn-primary" : "btn-outline"}" href="${cv.href}" target="_blank" rel="noopener noreferrer" data-cv="${cv.lang}">${t(`cv.view.${cv.lang}`, lang)}</a>`
    )
    .join("");

  const emailLink = document.getElementById("contactEmail");
  emailLink.href = `mailto:${d.email}`;
  emailLink.textContent = d.email;

  document.querySelectorAll("[data-linkedin]").forEach((link) => {
    link.href = d.linkedin;
  });
  document.getElementById("footerName").textContent = d.name;
}
