// EN/CZ interface strings (no build step, no external i18n library).
// Career content (roles, Projects, Employers, skills) lives in career-data.js, not here.
const UI_STRINGS = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "nav.toggle": "Toggle navigation",
    "lang.switch": "Switch to Czech",
    "theme.toDark": "Switch to dark mode",
    "theme.toLight": "Switch to light mode",
    "hero.eyebrow": "Hello, I'm",
    "hero.getInTouch": "Get in Touch",
    "about.title": "About Me",
    "about.linkedin": "View full profile on LinkedIn →",
    "about.skillsTitle": "Core Skills",
    "about.projectsTitle": "Projects I've Been Working On",
    "about.projectsIntro": "Here are some of the projects I've been building and maintaining:",
    "about.employersTitle": "Where I've Worked",
    "about.employersIntro": "A quick look at the companies that have shaped my career:",
    "about.earlierRoles": "Earlier roles",
    "contact.title": "Contact",
    "contact.subtitle": "Have a question or want to connect? Send me a message, or reach me directly.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.direct": "Reach me directly",
    "contact.sending": "Sending…",
    "contact.success": "Thanks! Your message has been sent. I'll get back to you soon.",
    "contact.error": "Sorry, the message couldn't be sent. Please email me directly at {email}.",
    "cv.title": "Curriculum Vitae",
    "cv.subtitle": "View or download my CV as a PDF in your preferred language.",
    "cv.view.en": "View CV (English)",
    "cv.view.cs": "View CV (Czech)",
    "footer.rights": "All rights reserved.",
  },
  cs: {
    "nav.home": "Domů",
    "nav.about": "O mně",
    "nav.contact": "Kontakt",
    "nav.cv": "Životopis",
    "nav.toggle": "Zobrazit navigaci",
    "lang.switch": "Přepnout do angličtiny",
    "theme.toDark": "Přepnout na tmavý režim",
    "theme.toLight": "Přepnout na světlý režim",
    "hero.eyebrow": "Dobrý den, jsem",
    "hero.getInTouch": "Kontaktujte mě",
    "about.title": "O mně",
    "about.linkedin": "Zobrazit celý profil na LinkedIn →",
    "about.skillsTitle": "Klíčové dovednosti",
    "about.projectsTitle": "Projekty, na kterých jsem pracoval",
    "about.projectsIntro": "Zde je několik projektů, které jsem budoval a udržoval:",
    "about.employersTitle": "Kde jsem pracoval",
    "about.employersIntro": "Stručný přehled společností, které formovaly mou kariéru:",
    "about.earlierRoles": "Předchozí pozice",
    "contact.title": "Kontakt",
    "contact.subtitle": "Máte dotaz nebo se chcete spojit? Napište mi zprávu, nebo mě kontaktujte přímo.",
    "contact.name": "Jméno",
    "contact.email": "E-mail",
    "contact.message": "Zpráva",
    "contact.send": "Odeslat zprávu",
    "contact.direct": "Kontaktujte mě přímo",
    "contact.sending": "Odesílám…",
    "contact.success": "Děkuji! Vaše zpráva byla odeslána. Brzy se vám ozvu.",
    "contact.error": "Omlouvám se, zprávu se nepodařilo odeslat. Napište mi prosím přímo na {email}.",
    "cv.title": "Životopis",
    "cv.subtitle": "Zobrazte si nebo stáhněte můj životopis ve formátu PDF v preferovaném jazyce.",
    "cv.view.en": "Zobrazit životopis (anglicky)",
    "cv.view.cs": "Zobrazit životopis (česky)",
    "footer.rights": "Všechna práva vyhrazena.",
  },
};

const LANG_STORAGE_KEY = "site-lang";

function t(key, lang) {
  return UI_STRINGS[lang][key] ?? UI_STRINGS.en[key];
}

// A Visitor's saved choice wins; otherwise Czech browsers get Czech and everyone else English.
function initialLanguage() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "cs") return saved;
  } catch {}
  const preferred = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
  return preferred.startsWith("cs") ? "cs" : "en";
}

function saveLanguage(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {}
}

function applyUiStrings(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n"), lang);
  });
}
