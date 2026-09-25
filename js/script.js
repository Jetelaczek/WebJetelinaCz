const root = document.documentElement;
let currentLang = initialLanguage();

// Language
const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  currentLang = lang;
  root.lang = lang;
  applyUiStrings(lang);
  renderPage(lang);
  langToggle.textContent = lang === "en" ? "CZ" : "EN";
  langToggle.setAttribute("aria-label", t("lang.switch", lang));
  navToggle.setAttribute("aria-label", t("nav.toggle", lang));
  updateThemeToggle();
}

langToggle.addEventListener("click", () => {
  const next = currentLang === "en" ? "cs" : "en";
  saveLanguage(next);
  setLanguage(next);
});

// Light/dark theme: follows the system until the Visitor picks one, then remembers it.
const THEME_STORAGE_KEY = "site-theme";
const themeToggle = document.getElementById("themeToggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const ICON_SUN =
  '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></svg>';
const ICON_MOON =
  '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>';

const currentTheme = () => root.dataset.theme || (systemDark.matches ? "dark" : "light");

function updateThemeToggle() {
  const isDark = currentTheme() === "dark";
  themeToggle.innerHTML = isDark ? ICON_SUN : ICON_MOON;
  themeToggle.setAttribute("aria-label", t(isDark ? "theme.toLight" : "theme.toDark", currentLang));
}

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {}
  updateThemeToggle();
});

systemDark.addEventListener("change", updateThemeToggle);

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

const setActiveLink = () => {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", setActiveLink);

// Reveal on scroll animation
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Analytics: GoatCounter (cookie-free), loaded only once a site code is configured.
function trackEvent(path) {
  window.goatcounter?.count?.({ path, event: true });
}

if (SITE_CONFIG.goatcounterCode) {
  const counter = document.createElement("script");
  counter.async = true;
  counter.src = "https://gc.zgo.at/count.js";
  counter.dataset.goatcounter = `https://${SITE_CONFIG.goatcounterCode}.goatcounter.com/count`;
  document.body.appendChild(counter);
}

document.getElementById("cvDownloads").addEventListener("click", (event) => {
  const link = event.target.closest("[data-cv]");
  if (link) trackEvent(`cv-open-${link.dataset.cv}`);
});

// Contact form: delivers the Contact message through Web3Forms.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function showFormError() {
  formStatus.textContent = t("contact.error", currentLang).replace("{email}", CAREER_DATA.email);
  formStatus.classList.add("error");
}

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const submitButton = contactForm.querySelector("button[type=submit]");
  formStatus.classList.remove("error");

  if (!SITE_CONFIG.web3formsAccessKey) {
    showFormError();
    return;
  }

  const data = Object.fromEntries(new FormData(contactForm));
  submitButton.disabled = true;
  formStatus.textContent = t("contact.sending", currentLang);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: SITE_CONFIG.web3formsAccessKey,
        subject: `Website contact from ${data.name}`,
        from_name: "jetelina.cz",
        name: data.name,
        email: data.email,
        message: data.message,
        botcheck: data.botcheck ?? "",
      }),
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.message);

    formStatus.textContent = t("contact.success", currentLang);
    contactForm.reset();
    trackEvent("contact-sent");
  } catch {
    showFormError();
  } finally {
    submitButton.disabled = false;
  }
});

setLanguage(currentLang);
setActiveLink();
