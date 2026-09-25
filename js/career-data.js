// Career data: the single source for the page and both CV templates (see CONTEXT.md).
// Text fields are trusted HTML. Translated fields are { en, cs } pairs.
// After changing anything here, regenerate both CV PDFs (see CLAUDE.md).
const CAREER_DATA = {
  name: "Tomáš Jetelina",
  initials: "TJ",
  headline: "Identity &amp; Cloud Automation Engineer",
  // Path from the site root, e.g. "assets/img/photo.jpg". Empty shows the initials instead.
  photo: "",
  email: "contact@jetelina.cz",
  linkedin: "https://www.linkedin.com/in/tjetelina/",
  website: "https://www.jetelina.cz",
  location: { en: "Prague, Czech Republic", cs: "Praha, Česká republika" },

  intro: {
    en: "I design and automate Azure cloud infrastructure, Entra ID governance and self-hosted DevOps pipelines — turning manual processes into reliable, repeatable code.",
    cs: "Navrhuji a automatizuji cloudovou infrastrukturu v Azure, správu identit v Entra ID a self-hosted DevOps pipeline — a měním manuální procesy ve spolehlivý, opakovatelný kód.",
  },

  about: {
    en: [
      "I'm a cloud and automation engineer focused on Microsoft Entra ID governance, Azure infrastructure and DevOps tooling. My work centers on building frameworks that make identity governance, access reviews and pipeline infrastructure scalable, secure and easy to maintain.",
      "I enjoy turning repetitive, manual administration into automated, auditable processes — from conditional access policy management to self-hosted build agent infrastructure.",
    ],
    cs: [
      "Jsem cloudový a automatizační inženýr zaměřený na správu Microsoft Entra ID, Azure infrastrukturu a DevOps nástroje. Má práce se soustředí na budování frameworků, které dělají identity governance, access review a pipeline infrastrukturu škálovatelnou, bezpečnou a snadno udržovatelnou.",
      "Baví mě přeměňovat opakující se manuální administrativu na automatizované a auditovatelné procesy — od správy conditional access politik až po self-hosted build agent infrastrukturu.",
    ],
  },

  // CV "Profile" paragraph: the About text in the third person.
  profile: {
    en: "Cloud and automation engineer focused on Microsoft Entra ID governance, Azure infrastructure and DevOps tooling. Builds frameworks that make identity governance, access reviews and pipeline infrastructure scalable, secure and easy to maintain — turning manual, repetitive administration into automated, auditable processes.",
    cs: "Cloudový a automatizační inženýr zaměřený na správu Microsoft Entra ID, Azure infrastrukturu a DevOps nástroje. Buduje frameworky, které dělají identity governance, access review a pipeline infrastrukturu škálovatelnou, bezpečnou a snadno udržovatelnou — a mění manuální, opakující se administrativu na automatizované a auditovatelné procesy.",
  },

  skills: [
    { en: "Microsoft Entra ID Governance", cs: "Správa Microsoft Entra ID (governance)" },
    { en: "Azure Infrastructure &amp; RBAC", cs: "Azure infrastruktura &amp; RBAC" },
    { en: "Azure DevOps Pipelines (YAML)", cs: "Azure DevOps pipeline (YAML)" },
    { en: "PowerShell &amp; Automation Scripting", cs: "PowerShell &amp; automatizační skriptování" },
    { en: "Self-Hosted Build Agents &amp; Docker", cs: "Self-hosted build agenti &amp; Docker" },
    { en: "Conditional Access Policy Management", cs: "Správa conditional access politik" },
  ],

  // Plain-language Projects; never name the underlying repositories. Active Directory stays last.
  projects: [
    {
      title: { en: "Pipeline Automation Framework", cs: "Framework pro automatizaci pipeline" },
      description: {
        en: "A reusable DevOps pipeline framework built around modular templates and capabilities, powering API-driven governance, reset and association workflows at scale.",
        cs: "Znovupoužitelný DevOps pipeline framework postavený na modulárních šablonách a capabilities, který pohání API řízené governance, reset a asociační workflow ve velkém měřítku.",
      },
      note: {
        en: "Built together with supporting configuration and shared-parameter components that keep every environment consistent.",
        cs: "Vytvořeno společně s podpůrnou konfigurací a sdílenými parametry, které udržují každé prostředí konzistentní.",
      },
    },
    {
      title: { en: "Identity Governance Solution", cs: "Řešení identity governance" },
      description: {
        en: "An end-to-end identity governance solution for Microsoft Entra ID covering service principals, users, groups &amp; admin units, subscription RBAC, conditional access policies and privileged role management.",
        cs: "Komplexní řešení identity governance pro Microsoft Entra ID pokrývající service principaly, uživatele, skupiny &amp; administrative units, subscription RBAC, conditional access politiky a správu privilegovaných rolí.",
      },
    },
    {
      title: { en: "Build Agent Infrastructure", cs: "Infrastruktura build agentů" },
      description: {
        en: "Docker-based self-hosted build agent infrastructure, with scripted pipelines to build, run and maintain scalable agent capacity.",
        cs: "Docker infrastruktura pro self-hosted build agenty se skriptovanými pipeline pro sestavení, spouštění a udržování škálovatelné kapacity agentů.",
      },
    },
    {
      title: { en: "Active Directory Experience", cs: "Zkušenosti s Active Directory" },
      description: {
        en: "Alongside my current work, I have extensive, ongoing hands-on experience with Microsoft Active Directory. I completed the GOPAS course <a href='https://www.gopas.cz/windows-server-active-directory-internals-and-troubleshooting_goc171' target='_blank' rel='noopener noreferrer'>Windows Server Active Directory Internals and Troubleshooting (GOC171)</a>, and I manage and maintain the Active Directory environment at NN Group.",
        cs: "Kromě své současné práce mám rozsáhlé a stále aktivní praktické zkušenosti s Microsoft Active Directory. Absolvoval jsem kurz GOPAS <a href='https://www.gopas.cz/windows-server-active-directory-internals-and-troubleshooting_goc171' target='_blank' rel='noopener noreferrer'>Windows Server Active Directory Internals and Troubleshooting (GOC171)</a> a spravuji a udržuji prostředí Active Directory ve společnosti NN Group.",
      },
    },
  ],

  // Employers, most recent first. end: null means the role is current.
  employers: [
    {
      name: "NN Group",
      role: "Senior Identity DevOps Engineer",
      earlierRoles: ["Active Directory DevOps Engineer", "Citrix Engineer", "Senior Windows Engineer"],
      start: 2018,
      end: null,
      location: { en: "Prague", cs: "Praha" },
      about: {
        en: "NN Group is an international insurance and asset management company headquartered in the Netherlands, serving millions of customers across Europe and Japan.",
        cs: "NN Group je mezinárodní pojišťovací a asset management společnost se sídlem v Nizozemsku, která obsluhuje miliony zákazníků napříč Evropou a Japonskem.",
      },
      summary: {
        en: "I automate identity infrastructure — Infrastructure as Code for domain controllers and management servers across on-premises, Azure and AWS — after earlier roles in Active Directory operations, Citrix virtualization and Windows Server administration.",
        cs: "Automatizuji identitní infrastrukturu — Infrastructure as Code pro doménové řadiče a management servery napříč on-premise, Azure a AWS — po předchozích rolích v provozu Active Directory, Citrix virtualizaci a správě Windows serverů.",
      },
    },
    {
      name: "Bosal Group",
      role: "Server &amp; Active Directory Administrator",
      start: 2015,
      end: 2018,
      location: { en: "Prague", cs: "Praha" },
      about: {
        en: "Bosal Group is a Belgium-headquartered global manufacturer of towbars, roof racks and exhaust systems, with factories around the world.",
        cs: "Bosal Group je globální výrobce tažných zařízení, střešních nosičů a výfukových systémů se sídlem v Belgii a továrnami po celém světě.",
      },
      summary: {
        en: "Managed Windows Server, Hyper-V/VMware and Active Directory infrastructure across the group's data centre and 20+ factories worldwide.",
        cs: "Spravoval jsem infrastrukturu Windows Server, Hyper-V/VMware a Active Directory napříč datovým centrem skupiny a 20+ továrnami po celém světě.",
      },
    },
    {
      name: "Mallinckrodt",
      role: "Windows Server Administrator, EMEA",
      start: 2013,
      end: 2015,
      location: { en: "Prague", cs: "Praha" },
      about: {
        en: "Mallinckrodt is a global pharmaceutical company producing specialty generics and branded therapeutics.",
        cs: "Mallinckrodt je globální farmaceutická společnost vyrábějící specializovaná generika a značkové léčivé přípravky.",
      },
      summary: {
        en: "Sole EMEA domain administrator, managing server infrastructure across roughly 30 sites alongside Asia-Pacific and US teams.",
        cs: "Byl jsem jediným doménovým administrátorem pro EMEA region a spravoval serverovou infrastrukturu napříč přibližně 30 lokalitami ve spolupráci s týmy z Asie-Pacifiku a USA.",
      },
    },
    {
      name: "Monster",
      role: "IT Support Engineer",
      start: 2010,
      end: 2012,
      location: { en: "Prague", cs: "Praha" },
      about: {
        en: "Monster is a global online job-search platform connecting job seekers with employers worldwide.",
        cs: "Monster je globální online platforma propojující uchazeče o zaměstnání se zaměstnavateli po celém světě.",
      },
      summary: {
        en: "Ran local IT infrastructure and support, and served on the EU security and workflow teams.",
        cs: "Provozoval jsem lokální IT infrastrukturu a podporu a byl členem EU bezpečnostního a workflow týmu.",
      },
    },
    {
      name: "Orco Property Group",
      role: "Network Administrator &amp; IT Helpdesk",
      start: 2008,
      end: 2010,
      location: { en: "Prague", cs: "Praha" },
      about: {
        en: "Orco Property Group is a Central European real estate and hospitality group, including the Mamaison Hotels &amp; Apartments brand.",
        cs: "Orco Property Group je středoevropská realitní a hotelová skupina, do níž patří i značka Mamaison Hotels &amp; Apartments.",
      },
      summary: {
        en: "Administered the corporate domain, servers and Active Directory, and provided 24/7 support for a chain of European hotels.",
        cs: "Spravoval jsem firemní doménu, servery a Active Directory a poskytoval 24/7 podporu pro řetězec evropských hotelů.",
      },
    },
    {
      name: "Raiffeisenbank CZ",
      role: "Network Administrator",
      start: 2006,
      end: 2008,
      location: { en: "Prague", cs: "Praha" },
      about: {
        en: "Raiffeisenbank CZ is a major Czech commercial bank offering retail and corporate banking services.",
        cs: "Raiffeisenbank CZ je významná česká komerční banka nabízející retailové a firemní bankovní služby.",
      },
      summary: {
        en: "Managed domain infrastructure, Active Directory and Exchange, and supported corporate users.",
        cs: "Spravoval jsem doménovou infrastrukturu, Active Directory a Exchange a podporoval firemní uživatele.",
      },
    },
  ],

  languages: [
    { en: "Czech (native)", cs: "Čeština (rodilý mluvčí)" },
    { en: "English (professional working proficiency)", cs: "Angličtina (profesní úroveň)" },
  ],
};
