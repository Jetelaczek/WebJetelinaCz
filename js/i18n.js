// Lightweight EN/CZ translation toggle (no build step, no external i18n library)
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "hero.eyebrow": "Hello, I'm",
    "hero.tagline": "Cloud &amp; Identity Governance Engineer",
    "hero.lead": "I design and automate Azure cloud infrastructure, Entra ID governance and self-hosted DevOps pipelines — turning manual processes into reliable, repeatable code.",
    "hero.getInTouch": "Get in Touch",
    "about.title": "About Me",
    "about.p1": "I'm a cloud and automation engineer focused on Microsoft Entra ID governance, Azure infrastructure and DevOps tooling. My work centers on building frameworks that make identity governance, access reviews and pipeline infrastructure scalable, secure and easy to maintain.",
    "about.p2": "I enjoy turning repetitive, manual administration into automated, auditable processes — from conditional access policy management to self-hosted build agent infrastructure.",
    "about.linkedin": "View full profile on LinkedIn →",
    "about.skillsTitle": "Core Skills",
    "about.skill1": "Microsoft Entra ID Governance",
    "about.skill2": "Azure Infrastructure &amp; RBAC",
    "about.skill3": "Azure DevOps Pipelines (YAML)",
    "about.skill4": "PowerShell &amp; Automation Scripting",
    "about.skill5": "Self-Hosted Build Agents &amp; Docker",
    "about.skill6": "Conditional Access Policy Management",
    "about.projectsTitle": "Current Projects",
    "about.projectsIntro": "My current work is mainly about coding and taking care of the following projects:",
    "about.adTitle": "Active Directory Experience",
    "about.adText": "Earlier in my career I also gained deep, hands-on experience with Microsoft Active Directory. I completed an in-depth <a href='https://www.gopas.cz/windows-server-active-directory-internals-and-troubleshooting_goc171' target='_blank' rel='noopener noreferrer'>Active Directory Internals and Troubleshooting</a> training program, and today I'm responsible for managing and maintaining the Active Directory environment at NN Group.",
    "projects.framework.title": "Pipeline Automation Framework",
    "projects.framework.desc": "A reusable DevOps pipeline framework built around modular templates and capabilities, powering API-driven governance, reset and association workflows at scale.",
    "projects.framework.note": "Built together with supporting configuration and shared-parameter components that keep every environment consistent.",
    "projects.governance.title": "Identity Governance Solution",
    "projects.governance.desc": "An end-to-end identity governance solution for Microsoft Entra ID covering service principals, users, groups &amp; admin units, subscription RBAC, conditional access policies and privileged role management.",
    "projects.agents.title": "Build Agent Infrastructure",
    "projects.agents.desc": "Docker-based self-hosted build agent infrastructure, with scripted pipelines to build, run and maintain scalable agent capacity.",
    "cv.title": "Curriculum Vitae",
    "cv.subtitle": "View or download my CV as a PDF in your preferred language.",
    "cv.downloadEn": "View CV (English)",
    "cv.downloadCz": "Zobrazit životopis (Česky)",
    "contact.title": "Contact",
    "contact.subtitle": "Have a question or want to connect? Reach out below.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "footer.rights": "All rights reserved.",
  },
  cs: {
    "nav.home": "Domů",
    "nav.about": "O mně",
    "nav.contact": "Kontakt",
    "nav.cv": "Životopis",
    "hero.eyebrow": "Ahoj, jsem",
    "hero.tagline": "Cloud &amp; Identity Governance Engineer",
    "hero.lead": "Navrhuji a automatizuji cloudovou infrastrukturu v Azure, správu identit v Entra ID a self-hosted DevOps pipeline — a měním manuální procesy ve spolehlivý, opakovatelný kód.",
    "hero.getInTouch": "Kontaktujte mě",
    "about.title": "O mně",
    "about.p1": "Jsem cloudový a automatizační inženýr zaměřený na správu Microsoft Entra ID, Azure infrastrukturu a DevOps nástroje. Má práce se soustředí na budování frameworků, které dělají identity governance, access review a pipeline infrastrukturu škálovatelnou, bezpečnou a snadno udržovatelnou.",
    "about.p2": "Baví mě přeměňovat opakující se manuální administrativu na automatizované a auditovatelné procesy — od správy conditional access politik až po self-hosted build agent infrastrukturu.",
    "about.linkedin": "Zobrazit celý profil na LinkedIn →",
    "about.skillsTitle": "Klíčové dovednosti",
    "about.skill1": "Správa Microsoft Entra ID (governance)",
    "about.skill2": "Azure infrastruktura &amp; RBAC",
    "about.skill3": "Azure DevOps pipeline (YAML)",
    "about.skill4": "PowerShell &amp; automatizační skriptování",
    "about.skill5": "Self-hosted build agenti &amp; Docker",
    "about.skill6": "Správa conditional access politik",
    "about.projectsTitle": "Aktuální projekty",
    "about.projectsIntro": "Má současná práce je hlavně o programování a starosti o následující projekty:",
    "about.adTitle": "Zkušenosti s Active Directory",
    "about.adText": "Dříve ve své kariéře jsem také získal hluboké praktické zkušenosti s Microsoft Active Directory. Absolvoval jsem podrobné školení <a href='https://www.gopas.cz/windows-server-active-directory-internals-and-troubleshooting_goc171' target='_blank' rel='noopener noreferrer'>Active Directory Internals and Troubleshooting</a> a dnes jsem zodpovědný za správu a údržbu prostředí Active Directory ve společnosti NN Group.",
    "projects.framework.title": "Framework pro automatizaci pipeline",
    "projects.framework.desc": "Znovupoužitelný DevOps pipeline framework postavený na modulárních šablonách a capabilities, který pohání API řízené governance, reset a asociační workflow ve velkém měřítku.",
    "projects.framework.note": "Vytvořeno společně s podpůrnou konfigurací a sdílenými parametry, které udržují každé prostředí konzistentní.",
    "projects.governance.title": "Řešení identity governance",
    "projects.governance.desc": "Komplexní řešení identity governance pro Microsoft Entra ID pokrývající service principaly, uživatele, skupiny &amp; administrative units, subscription RBAC, conditional access politiky a správu privilegovaných rolí.",
    "projects.agents.title": "Infrastruktura build agentů",
    "projects.agents.desc": "Docker infrastruktura pro self-hosted build agenty se skriptovanými pipeline pro sestavení, spouštění a udržování škálovatelné kapacity agentů.",
    "cv.title": "Životopis",
    "cv.subtitle": "Zobrazte si nebo stáhněte můj životopis ve formátu PDF v preferovaném jazyce.",
    "cv.downloadEn": "View CV (English)",
    "cv.downloadCz": "Zobrazit životopis (česky)",
    "contact.title": "Kontakt",
    "contact.subtitle": "Máte dotaz nebo se chcete spojit? Napište mi níže.",
    "contact.name": "Jméno",
    "contact.email": "E-mail",
    "contact.message": "Zpráva",
    "contact.send": "Odeslat zprávu",
    "footer.rights": "Všechna práva vyhrazena.",
  },
};

const STORAGE_KEY = "site-lang";
const langToggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.documentElement.lang = lang;
  langToggle.textContent = lang === "en" ? "CZ" : "EN";
  localStorage.setItem(STORAGE_KEY, lang);
}

langToggle.addEventListener("click", () => {
  const current = document.documentElement.lang === "cs" ? "cs" : "en";
  applyLanguage(current === "en" ? "cs" : "en");
});

const savedLang = localStorage.getItem(STORAGE_KEY);
applyLanguage(savedLang === "cs" ? "cs" : "en");
