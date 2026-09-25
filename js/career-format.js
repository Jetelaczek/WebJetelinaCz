// Helpers shared by the page and the CV templates for reading CAREER_DATA.

const PRESENT_LABEL = { en: "Present", cs: "současnost" };

// Returns the value for `lang` from a translated { en, cs } field; plain values pass through.
function pick(field, lang) {
  if (field && typeof field === "object" && !Array.isArray(field) && "en" in field) {
    return field[lang] ?? field.en;
  }
  return field;
}

function formatDates(employer, lang) {
  return `${employer.start} – ${employer.end ?? PRESENT_LABEL[lang]}`;
}

// Converts a trusted HTML snippet (e.g. "Identity &amp; Cloud") to plain text.
function htmlToText(html) {
  const el = document.createElement("template");
  el.innerHTML = html;
  return el.content.textContent;
}
