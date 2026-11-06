"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Boxes, BriefcaseBusiness, Check, ChevronDown, Compass, Cpu, FileSpreadsheet, Globe2, Layers3, Lightbulb, Mail, Menu, PackageSearch, Phone, Quote, Settings2, ShieldCheck, ShoppingCart, TrendingUp, UsersRound, X } from "lucide-react";
import { profile, projects } from "@/data/profile";

type Lang = "en" | "ar";
const copy = {
  en: {
    seoTitle: "Abdelrahman Moataz | Commercial Operations & Electrical Supplies",
    seoDescription: "Explore the professional experience, projects, and commercial expertise of Abdelrahman Moataz in electrical supplies, sales management, procurement, and business operations.",
    nav: ["Home", "About", "Expertise", "Experience", "Projects", "SPEED", "Contact"],
    eyebrow: "COMMERCIAL OPERATIONS · ELECTRICAL SUPPLIES",
    title: <>Building better business<br className="desktop-break" /> operations. <span>Driving</span><br className="desktop-break" /> commercial growth.</>,
    intro: "I connect sales, procurement, operations, and technology to create more efficient business processes and sustainable growth.",
    explore: "Explore my work", work: "Let’s work together", scroll: "SCROLL TO EXPLORE",
    aboutEyebrow: "A COMMERCIAL MINDSET", aboutTitle: "I understand the business behind the products.",
    about1: "I’m a commercial operations and sales professional with practical experience in the electrical supplies industry. My work brings together sales development, customer relationships, supplier coordination, pricing, procurement, team leadership, and daily business operations.",
    about2: "Beyond closing sales, I care about the full commercial workflow—from understanding customer needs and preparing quotations to coordinating supplies, monitoring transactions, and improving how work gets done.",
    about3: "I’m especially interested in using business systems, data, and automation to help companies become more organized, efficient, and ready to grow.",
    philosophy: "Understand the business. Improve the process. Deliver measurable results.",
    expertiseLabel: "WHAT I BRING", expertiseTitle: "Commercial experience, connected.", expertiseLead: "A practical mix of customer-facing work, operational thinking, and business systems.",
    experienceLabel: "ON THE GROUND", experienceTitle: "Experience across the workflow.", experienceRole: "Commercial Sales & Operations / Team Leadership (functional scope)", company: "Electrical supplies & general contracting sector", date: "Employment dates to be confirmed",
    responsibilities: ["Managing and monitoring daily sales activities", "Preparing and reviewing commercial quotations", "Coordinating incoming goods and purchasing requirements", "Supporting supplier relationships", "Reviewing daily operational reports", "Monitoring customer transactions and credit sales", "Coordinating and guiding sales team members", "Improving customer communication and sales processes"],
    metricsLabel: "PROGRESS, IN PRACTICE", metricsTitle: "Focused on outcomes that matter.", verify: "User-provided figures · Verify before publishing", verifiedFigures: "Figures verified by profile owner", years: "Sales experience", leadership: "Team leadership", salesGrowth: "Reported sales growth", over: "over five months",
    servicesLabel: "WAYS TO WORK TOGETHER", servicesTitle: "What I can help with.", serviceCta: "Discuss a need",
    projectsLabel: "SELECTED WORK", projectsTitle: "Ideas grounded in day-to-day business.", projectsLead: "Practical systems and commercial improvements, shared with care for confidentiality and accuracy.", viewDetails: "View case study",
    toolsLabel: "TOOLS & SYSTEMS", toolsTitle: "Practical tools for better work.", toolsNote: "Tools shown reflect the working toolkit described for this portfolio. Add or remove tools to match current experience.",
    industriesLabel: "INDUSTRY CONTEXT", industriesTitle: "Where commercial detail matters.",
    speedLabel: "A BUSINESS VISION IN DEVELOPMENT", speedTitle: <>Introducing <span>SPEED</span></>, speedTag: "A smarter way to source, supply & manage.", speedText: "SPEED is a developing business vision focused on electrical supplies, commercial services, and smarter business operations.", speedState: "Developing venture · Not yet represented as an established company", speedCta: "Explore the vision",
    contactLabel: "START A CONVERSATION", contactTitle: "Let’s make business work better.", contactLead: "Tell me what you’re working on. I’m open to conversations about electrical supplies, commercial operations, and collaboration.", name: "Your name", email: "Email address", companyField: "Company (optional)", inquiry: "What would you like to discuss?", message: "A little about your request", send: "Prepare email", sendNote: "This form opens your email app. No message is sent from this website.", setupNote: "Contact details are being configured. Please update the profile settings before publishing.", pathways: ["Looking for an electrical supplies partner?", "Need help with sales & commercial operations?", "Interested in business collaboration?"], egypt: "Based in Egypt · Open to professional opportunities",
    footerLine: "I don’t just sell products. I understand the business behind them.", rights: "All rights reserved.", details: "Case study", challenge: "Challenge", contribution: "My contribution", approach: "Approach", result: "Outcome / status", tools: "Tools & focus", close: "Close",
  },
  ar: {
    seoTitle: "عبدالرحمن معتز | العمليات التجارية والتوريدات الكهربائية",
    seoDescription: "تعرّف على خبرة ومشروعات ومهارات عبدالرحمن معتز في التوريدات الكهربائية وإدارة المبيعات والمشتريات والعمليات التجارية.",
    nav: ["الرئيسية", "نبذة", "الخبرات", "المسيرة", "المشروعات", "SPEED", "تواصل"],
    eyebrow: "العمليات التجارية · التوريدات الكهربائية",
    title: <>أطور العمليات التجارية<br className="desktop-break" /> وأدفع <span>النمو</span><br className="desktop-break" /> التجاري إلى الأمام.</>,
    intro: "أربط بين المبيعات والمشتريات والعمليات والتكنولوجيا لبناء عمليات تجارية أكثر كفاءة وتحقيق نمو مستدام.",
    explore: "اكتشف أعمالي", work: "لنتعاون معاً", scroll: "تابع لاستكشاف الموقع",
    aboutEyebrow: "عقلية تجارية عملية", aboutTitle: "أفهم ما وراء المنتجات من أعمال.",
    about1: "أنا متخصص في المبيعات والعمليات التجارية بقطاع التوريدات الكهربائية، وأمتلك خبرة عملية تجمع بين تطوير المبيعات وعلاقات العملاء والتنسيق مع الموردين والتسعير والمشتريات وقيادة الفريق ومتابعة العمليات اليومية.",
    about2: "لا يقتصر اهتمامي على إتمام البيع؛ بل يشمل مسار العمل التجاري كاملاً، من فهم احتياجات العميل وإعداد عروض الأسعار إلى تنسيق التوريدات ومتابعة المعاملات وتحسين أساليب العمل.",
    about3: "أهتم بشكل خاص باستخدام أنظمة الأعمال والبيانات والأتمتة لمساعدة الشركات على أن تصبح أكثر تنظيماً وكفاءة واستعداداً للنمو.",
    philosophy: "افهم العمل. طوّر العملية. واصل تحقيق نتائج قابلة للقياس.",
    expertiseLabel: "ما أقدمه", expertiseTitle: "خبرة تجارية مترابطة.", expertiseLead: "مزيج عملي من التعامل مع العملاء والتفكير التشغيلي وأنظمة الأعمال.",
    experienceLabel: "خبرة ميدانية", experienceTitle: "خبرة عبر مسار العمل.", experienceRole: "المبيعات والعمليات التجارية / قيادة الفريق (نطاق المسؤوليات)", company: "قطاع التوريدات الكهربائية والمقاولات العامة", date: "تواريخ العمل قيد التأكيد",
    responsibilities: ["إدارة ومتابعة أنشطة المبيعات اليومية", "إعداد ومراجعة عروض الأسعار التجارية", "تنسيق البضائع الواردة واحتياجات الشراء", "دعم العلاقات مع الموردين", "مراجعة تقارير العمليات اليومية", "متابعة معاملات العملاء والمبيعات الآجلة", "تنسيق وتوجيه أعضاء فريق المبيعات", "تحسين التواصل مع العملاء وإجراءات البيع"],
    metricsLabel: "إنجازات على أرض الواقع", metricsTitle: "تركيز على نتائج تصنع الفرق.", verify: "أرقام مقدمة من المستخدم · يجب التحقق منها قبل النشر", verifiedFigures: "تم التحقق من الأرقام بواسطة صاحب الملف", years: "سنوات في المبيعات", leadership: "سنة في قيادة الفريق", salesGrowth: "نمو مبيعات مُبلّغ عنه", over: "خلال خمسة أشهر",
    servicesLabel: "مجالات التعاون", servicesTitle: "كيف يمكنني المساعدة.", serviceCta: "ناقش احتياجك",
    projectsLabel: "نماذج من العمل", projectsTitle: "أفكار تنطلق من تفاصيل العمل اليومي.", projectsLead: "أنظمة عملية وتطوير تجاري مع مراعاة السرية ودقة المعلومات.", viewDetails: "عرض دراسة الحالة",
    toolsLabel: "الأدوات والأنظمة", toolsTitle: "أدوات عملية لتحسين الأداء.", toolsNote: "تعكس الأدوات المذكورة مجموعة العمل الموضحة لهذا الملف. حدّثها بما يتوافق مع خبرتك الحالية.",
    industriesLabel: "القطاعات", industriesTitle: "قطاعات تصنع فيها التفاصيل التجارية فرقاً.",
    speedLabel: "رؤية تجارية قيد التطوير", speedTitle: <>نقدم لكم <span>SPEED</span></>, speedTag: "طريقة أذكى للتوريد والإدارة.", speedText: "SPEED رؤية تجارية قيد التطوير، تركز على التوريدات الكهربائية والخدمات التجارية وتحسين إدارة الأعمال.", speedState: "مشروع قيد التطوير · لا يُعرض كشركة قائمة حالياً", speedCta: "اكتشف الرؤية",
    contactLabel: "لِنبدأ حواراً", contactTitle: "لنجعل أعمالك أكثر كفاءة.", contactLead: "أخبرني بما تعمل عليه. أرحب بالحديث عن التوريدات الكهربائية والعمليات التجارية وفرص التعاون.", name: "الاسم", email: "البريد الإلكتروني", companyField: "الشركة (اختياري)", inquiry: "ما الموضوع الذي ترغب في مناقشته؟", message: "نبذة عن طلبك", send: "إعداد رسالة بريد", sendNote: "يفتح هذا النموذج تطبيق البريد لديك. لن تُرسل الرسالة من هذا الموقع.", setupNote: "يجري إعداد بيانات التواصل. يرجى تحديث إعدادات الملف قبل النشر.", pathways: ["هل تبحث عن شريك لتوريدات الكهرباء؟", "هل تحتاج دعماً في المبيعات والعمليات التجارية؟", "هل ترغب في تعاون تجاري؟"], egypt: "مقيم في مصر · منفتح على الفرص المهنية",
    footerLine: "لا أبيع المنتجات فحسب، بل أفهم الأعمال التي تقف وراءها.", rights: "جميع الحقوق محفوظة.", details: "دراسة الحالة", challenge: "التحدي", contribution: "مساهمتي", approach: "المنهجية", result: "النتيجة / الحالة", tools: "الأدوات ومجالات التركيز", close: "إغلاق",
  },
} as const;

const expertise = [
  { icon: TrendingUp, title: { en: "Sales management", ar: "إدارة المبيعات" }, desc: { en: "Develop sales activity, relationships, team coordination, and performance visibility.", ar: "تطوير نشاط المبيعات والعلاقات وتنسيق الفريق ومتابعة الأداء." }, tags: { en: ["Sales development", "Customer relationships", "Team coordination", "Performance monitoring"], ar: ["تطوير المبيعات", "علاقات العملاء", "تنسيق الفريق", "متابعة الأداء"] } },
  { icon: Lightbulb, title: { en: "Electrical supplies", ar: "التوريدات الكهربائية" }, desc: { en: "Support sourcing and product matching across electrical finishing and industrial components.", ar: "دعم التوريد ومطابقة المنتجات لتشطيبات الكهرباء والمكونات الصناعية." }, tags: { en: ["Finishing supplies", "Industrial components", "Specifications", "Product matching"], ar: ["مستلزمات التشطيب", "مكونات صناعية", "المواصفات", "مطابقة المنتجات"] } },
  { icon: FileSpreadsheet, title: { en: "Pricing & quotations", ar: "التسعير وعروض الأسعار" }, desc: { en: "Prepare clear commercial quotations, BOQ pricing, and cost calculations.", ar: "إعداد عروض أسعار تجارية واضحة وتسعير جداول الكميات وحساب التكاليف." }, tags: { en: ["Commercial quotes", "BOQ pricing", "Cost calculations", "Margin review"], ar: ["عروض تجارية", "تسعير الكميات", "حساب التكاليف", "مراجعة الهوامش"] } },
  { icon: PackageSearch, title: { en: "Procurement & supply", ar: "المشتريات وسلاسل الإمداد" }, desc: { en: "Coordinate suppliers, compare prices, and track purchasing requirements and availability.", ar: "تنسيق الموردين ومقارنة الأسعار ومتابعة احتياجات الشراء والتوافر." }, tags: { en: ["Supplier coordination", "Price comparisons", "Purchasing", "Availability"], ar: ["تنسيق الموردين", "مقارنة الأسعار", "المشتريات", "التوافر"] } },
  { icon: Settings2, title: { en: "Business operations", ar: "العمليات التجارية" }, desc: { en: "Bring daily reporting, inventory coordination, and collection tracking into focus.", ar: "متابعة التقارير اليومية وتنسيق المخزون والتحصيلات بصورة أوضح." }, tags: { en: ["Daily reporting", "Sales & purchasing", "Inventory", "Collections"], ar: ["تقارير يومية", "المبيعات والمشتريات", "المخزون", "التحصيل"] } },
  { icon: Cpu, title: { en: "Business technology", ar: "تكنولوجيا الأعمال" }, desc: { en: "Use spreadsheets, ERP and CRM workflows, and reporting to improve processes.", ar: "استخدام الجداول ومسارات ERP وCRM والتقارير لتحسين العمليات." }, tags: { en: ["Excel", "ERP systems", "CRM workflows", "Automation"], ar: ["Excel", "أنظمة ERP", "مسارات CRM", "الأتمتة"] } },
];
const services = [
  { icon: PackageSearch, title: { en: "Electrical supplies sourcing", ar: "توفير التوريدات الكهربائية" }, desc: { en: "Source and match products to commercial requirements and availability.", ar: "البحث عن المنتجات ومطابقتها مع الاحتياجات التجارية ومدى التوافر." } },
  { icon: FileSpreadsheet, title: { en: "Quotations & pricing", ar: "عروض الأسعار والتسعير" }, desc: { en: "Structure quotation workflows and support practical, accurate pricing.", ar: "تنظيم عروض الأسعار ودعم التسعير العملي والدقيق." } },
  { icon: TrendingUp, title: { en: "Sales development", ar: "تطوير المبيعات" }, desc: { en: "Strengthen sales routines, customer relationships, and activity tracking.", ar: "تعزيز إجراءات البيع وعلاقات العملاء ومتابعة النشاط." } },
  { icon: UsersRound, title: { en: "Supplier coordination", ar: "التنسيق مع الموردين" }, desc: { en: "Coordinate supplier communication, purchasing needs, and availability.", ar: "تنسيق التواصل مع الموردين واحتياجات الشراء والتوافر." } },
  { icon: BarChart3, title: { en: "Business reporting & analysis", ar: "تقارير الأعمال وتحليلها" }, desc: { en: "Make daily business movements easier to see and act on.", ar: "تسهيل متابعة حركة الأعمال اليومية واتخاذ الإجراءات المناسبة." } },
  { icon: Layers3, title: { en: "Process improvement", ar: "تحسين العمليات" }, desc: { en: "Spot workflow friction and explore useful systems and automation.", ar: "تحديد معوقات سير العمل واستكشاف الأنظمة والأتمتة المفيدة." } },
];
const toolsList = ["Microsoft Excel", "Google Sheets", "Google Apps Script", "ERP systems", "OrgaSoft ERP", "CRM workflows", "Microsoft PowerPoint"];
const industries = [
  { icon: Lightbulb, title: { en: "Electrical distribution", ar: "توزيع الكهرباء" }, id: "01" },
  { icon: BriefcaseBusiness, title: { en: "Finishing & contracting", ar: "التشطيبات والمقاولات" }, id: "02" },
  { icon: Boxes, title: { en: "Industrial components", ar: "المكونات الكهربائية الصناعية" }, id: "03" },
  { icon: ShoppingCart, title: { en: "Procurement & operations", ar: "المشتريات والعمليات التجارية" }, id: "04" },
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduced ? 0 : 0.55, delay }}>{children}</motion.div>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState("");
  const [active, setActive] = useState("home");
  const projectTriggerRef = useRef<HTMLButtonElement>(null);
  const restoreProjectFocusRef = useRef(true);
  const t = copy[lang];
  const rtl = lang === "ar";
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const saved = fromUrl === "ar" || fromUrl === "en" ? fromUrl : window.localStorage.getItem("portfolio-language");
    window.setTimeout(() => {
      if (saved === "ar" || saved === "en") setLang(saved);
    }, 0);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.title = t.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.seoDescription);
  }, [lang, rtl, t.seoTitle, t.seoDescription]);
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (projectId) document.querySelector<HTMLDivElement>(".project-modal")?.focus();
    else if (restoreProjectFocusRef.current) projectTriggerRef.current?.focus();
    restoreProjectFocusRef.current = true;
  }, [projectId]);

  const navIds = ["home", "about", "expertise", "experience", "projects", "speed", "contact"];
  const goToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const changeLanguage = () => {
    const next = rtl ? "en" : "ar";
    window.localStorage.setItem("portfolio-language", next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(window.history.state, "", url);
    setLang(next);
  };
  function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = { name: String(data.get("name") || ""), email: String(data.get("email") || ""), company: String(data.get("company") || ""), inquiry: String(data.get("inquiry") || ""), message: String(data.get("message") || "") };
    if (!profile.email) { setFormMessage(t.setupNote); return; }
    const subject = encodeURIComponent(`${values.inquiry} — ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company}\nInquiry: ${values.inquiry}\n\n${values.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormMessage(t.sendNote);
  }

  const selectedProject = projects.find((project) => project.id === projectId);
  return <>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Abdelrahman Moataz home"><span className="brand-mark">AM<span>.</span></span><span className="brand-name">ABDELRAHMAN<br />MOATAZ</span></a>
      <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label={rtl ? "التنقل الرئيسي" : "Main navigation"}>
        {t.nav.map((label, index) => <a key={navIds[index]} className={active === navIds[index] ? "active" : ""} href={`#${navIds[index]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <button className="lang-toggle" onClick={changeLanguage} aria-label={rtl ? "Switch to English" : "التغيير إلى العربية"}><Globe2 size={15} /> {rtl ? "EN" : "عربي"}</button>
      </nav>
      <div className="header-actions"><button className="mobile-lang" onClick={changeLanguage} aria-label={rtl ? "Switch to English" : "التغيير إلى العربية"}>{rtl ? "EN" : "عربي"}</button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true"></div><div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-inner wrap">
          <Reveal className="hero-copy"><div className="eyebrow light"><span className="eyebrow-dot"></span>{t.eyebrow}</div><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><div className="hero-identity"><span className="identity-line"></span><span>{profile.name}</span><span className="identity-divider">/</span><span>{rtl ? "العمليات التجارية وتطوير الأعمال" : profile.positioning}</span></div><div className="hero-buttons"><a className="button button-orange" href="#projects">{t.explore}<ArrowUpRight size={17} /></a><a className="button button-outline" href="#contact">{t.work}<Arrow size={17} /></a></div></Reveal>
          <Reveal className="hero-art" delay={0.15}><div className="hero-orbit orbit-a"></div><div className="hero-orbit orbit-b"></div><div className="hero-cross cross-a"></div><div className="hero-cross cross-b"></div><div className="hero-core"><span className="core-overline">COMMERCIAL<br />OPERATIONS</span><span className="core-monogram">AM<span>.</span></span><span className="core-caption">SALES · SYSTEMS · SUPPLY</span></div><div className="art-label art-label-top"><span>01</span><i></i>{rtl ? "الأنظمة التجارية" : "COMMERCIAL SYSTEMS"}</div><div className="art-label art-label-bottom"><span>02</span><i></i>{rtl ? "توريدات الكهرباء" : "ELECTRICAL SUPPLIES"}</div><div className="art-coordinate">30°02′ N<br />31°14′ E</div></Reveal>
          <a className="hero-scroll" href="#about"><span>{t.scroll}</span><ArrowDown size={15} /></a>
        </div>
        <div className="hero-bottom"><span>PERSONAL BRAND / 2026</span><span>CAIRO · EGYPT</span></div>
      </section>

      <section className="about section-pad" id="about"><div className="wrap about-grid"><Reveal><div className="eyebrow"><span className="eyebrow-dot"></span>{t.aboutEyebrow}</div><h2 className="section-title">{t.aboutTitle}</h2><p className="philosophy"><Quote size={18} />{t.philosophy}</p></Reveal><Reveal delay={0.1} className="about-copy"><p>{t.about1}</p><p>{t.about2}</p><p>{t.about3}</p><a className="text-link" href="#expertise">{rtl ? "تعرّف على مجالات الخبرة" : "Explore my expertise"}<Arrow size={16} /></a></Reveal></div></section>

      <section className="expertise section-pad" id="expertise"><div className="wrap"><Reveal className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot"></span>{t.expertiseLabel}</div><h2 className="section-title">{t.expertiseTitle}</h2></div><p className="section-lead">{t.expertiseLead}</p></Reveal><div className="expertise-grid">{expertise.map(({ icon: Icon, title, desc, tags }, i) => <Reveal key={title.en} delay={i * 0.045} className="expertise-card"><div className="card-top"><span className="icon-box"><Icon size={21} strokeWidth={1.7} /></span><span className="card-index">0{i + 1}</span></div><h3>{title[lang]}</h3><p>{desc[lang]}</p><ul>{tags[lang].map((tag) => <li key={tag}>{tag}</li>)}</ul></Reveal>)}</div></div></section>

      <section className="experience section-pad" id="experience"><div className="wrap"><Reveal className="section-heading"><div><div className="eyebrow light"><span className="eyebrow-dot"></span>{t.experienceLabel}</div><h2 className="section-title">{t.experienceTitle}</h2></div><div className="experience-note"><span className="note-rule"></span><span>{rtl ? "خبرة عملية في قطاع التوريدات الكهربائية" : "Hands-on experience in electrical supplies"}</span></div></Reveal><Reveal className="timeline-card"><div className="timeline-marker"><span></span></div><div className="timeline-content"><div className="timeline-meta"><span>{profile.experienceDates || t.date}</span><span className="timeline-status"><span></span>{rtl ? "خبرة عملية" : "PRACTICAL EXPERIENCE"}</span></div><h3>{t.company}</h3><p className="timeline-role">{t.experienceRole}</p><div className="responsibility-grid">{t.responsibilities.map((item) => <div key={item} className="responsibility"><Check size={14} /><span>{item}</span></div>)}</div></div><div className="timeline-stamp"><BriefcaseBusiness size={29} strokeWidth={1.2} /><span>COMMERCIAL<br />OPERATIONS</span></div></Reveal></div></section>

      <section className="metrics section-pad"><div className="wrap metrics-wrap"><Reveal><div className="eyebrow"><span className="eyebrow-dot"></span>{t.metricsLabel}</div><h2 className="section-title">{t.metricsTitle}</h2><div className="verify-note"><ShieldCheck size={15} />{profile.achievementsVerified ? t.verifiedFigures : t.verify}</div></Reveal><div className="metric-grid"><Reveal className="metric-card"><strong>3<span>+</span></strong><span>{t.years}</span></Reveal><Reveal delay={0.08} className="metric-card"><strong>1</strong><span>{t.leadership}</span></Reveal><Reveal delay={0.16} className="metric-card metric-feature"><strong>30<span>%+</span></strong><span>{t.salesGrowth}</span><small>{t.over}</small></Reveal></div></div></section>

      <section className="services section-pad"><div className="wrap"><Reveal className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot"></span>{t.servicesLabel}</div><h2 className="section-title">{t.servicesTitle}</h2></div><a className="button button-dark" href="#contact">{t.work}<Arrow size={16} /></a></Reveal><div className="services-grid">{services.map(({ icon: Icon, title, desc }, i) => <Reveal className="service-row" key={title.en} delay={i * 0.04}><span className="service-index">0{i + 1}</span><span className="service-icon"><Icon size={19} /></span><div className="service-copy"><h3>{title[lang]}</h3><p>{desc[lang]}</p></div><a className="service-arrow" href="#contact" aria-label={`${t.serviceCta}: ${title[lang]}`}><ArrowUpRight size={18} /></a></Reveal>)}</div></div></section>

      <section className="projects section-pad" id="projects"><div className="wrap"><Reveal className="section-heading"><div><div className="eyebrow light"><span className="eyebrow-dot"></span>{t.projectsLabel}</div><h2 className="section-title">{t.projectsTitle}</h2></div><p className="section-lead">{t.projectsLead}</p></Reveal><div className="project-grid">{projects.map((project, i) => <Reveal key={project.id} delay={i * 0.06} className={`project-card project-${project.id}`}><div className={`project-visual visual-${project.id}`}><span className="project-number">{project.number}</span><div className="visual-art" aria-hidden="true">{project.id === "growth" ? <><div className="chart-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div><TrendingUp size={45} /></> : project.id === "quotations" ? <div className="quote-sheet"><span></span><span></span><span></span><span></span><span className="quote-total"></span><FileSpreadsheet size={28} /></div> : project.id === "reporting" ? <div className="dashboard-art"><span></span><span></span><span></span><span></span><i></i></div> : <div className="speed-visual">S<span>.</span></div>}</div><span className="visual-tag">{project.tag}</span></div><div className="project-info"><span className="project-state"><span></span>{project.state}</span><h3>{project.title[lang]}</h3><p>{project.summary[lang]}</p><button className="text-link" onClick={(event) => { projectTriggerRef.current = event.currentTarget; setProjectId(project.id); }}>{t.viewDetails}<Arrow size={15} /></button></div></Reveal>)}</div></div></section>

      <section className="tools section-pad"><div className="wrap tools-layout"><Reveal><div className="eyebrow"><span className="eyebrow-dot"></span>{t.toolsLabel}</div><h2 className="section-title">{t.toolsTitle}</h2><p>{t.toolsNote}</p></Reveal><Reveal delay={0.12} className="tools-cloud">{toolsList.map((tool, i) => <span className={`tool-chip ${i === 0 || i === 3 ? "tool-primary" : ""}`} key={tool}>{i < 4 ? <FileSpreadsheet size={15} /> : <Layers3 size={15} />}{tool}</span>)}</Reveal></div></section>

      <section className="industries section-pad"><div className="wrap"><Reveal className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot"></span>{t.industriesLabel}</div><h2 className="section-title">{t.industriesTitle}</h2></div><Compass className="industries-compass" size={32} strokeWidth={1.2} /></Reveal><div className="industry-grid">{industries.map(({ icon: Icon, title, id }, i) => <Reveal key={id} delay={i * 0.07} className={`industry-card industry-${id}`}><div className="industry-pattern" aria-hidden="true"></div><span className="industry-id">{id} / 04</span><Icon size={27} strokeWidth={1.4} /><h3>{title[lang]}</h3><ArrowUpRight className="industry-arrow" size={17} /></Reveal>)}</div></div></section>

      <section className="speed-section section-pad" id="speed"><div className="speed-grain" aria-hidden="true"></div><div className="wrap speed-layout"><Reveal className="speed-brand"><span className="speed-overline">{t.speedLabel}</span><div className="speed-wordmark">SPEED<span>.</span></div><div className="speed-brand-rule"><i></i><span>SUPPLY · PROCESS · EFFICIENCY</span></div></Reveal><Reveal delay={0.1} className="speed-content"><div className="eyebrow light"><span className="eyebrow-dot"></span>{rtl ? "رؤية مستقبلية" : "A FUTURE DIRECTION"}</div><h2 className="section-title">{t.speedTitle}</h2><h3>{t.speedTag}</h3><p>{t.speedText}</p><div className="speed-plans"><span><Check size={14} />{rtl ? "توريدات كهربائية" : "Electrical supplies"}</span><span><Check size={14} />{rtl ? "خدمات تجارية" : "Commercial services"}</span><span><Check size={14} />{rtl ? "أنظمة أعمال أذكى" : "Smarter business systems"}</span></div><div className="speed-footer"><span>{t.speedState}</span>{profile.speedUrl ? <a href={profile.speedUrl} target="_blank" rel="noreferrer">{t.speedCta}<ArrowUpRight size={15} /></a> : <a href="#contact">{t.speedCta}<ArrowUpRight size={15} /></a>}</div></Reveal></div></section>

      <section className="contact section-pad" id="contact"><div className="wrap contact-layout"><Reveal className="contact-intro"><div className="eyebrow"><span className="eyebrow-dot"></span>{t.contactLabel}</div><h2 className="section-title">{t.contactTitle}</h2><p>{t.contactLead}</p><div className="contact-paths">{t.pathways.map((path, i) => <div key={path}><span>0{i + 1}</span>{path}</div>)}</div><div className="contact-location"><span className="location-dot"></span>{t.egypt}</div><div className="contact-methods">{profile.email && <a href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>}{profile.phone && <a href={`tel:${profile.phone}`}><Phone size={16} />{profile.phone}</a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={16} />LinkedIn</a>}{profile.whatsapp && <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(rtl ? "مرحباً، أرغب في التواصل بخصوص فرصة عمل." : "Hello, I would like to discuss a business opportunity.")}`} target="_blank" rel="noreferrer"><Phone size={16} />WhatsApp</a>}</div></Reveal><Reveal delay={0.12} className="contact-form-wrap"><form className="contact-form" onSubmit={submitContact}><div className="form-row"><label>{t.name}<input name="name" required placeholder={rtl ? "الاسم بالكامل" : "Your full name"} /></label><label>{t.email}<input name="email" type="email" required placeholder="name@company.com" /></label></div><label>{t.companyField}<input name="company" placeholder={rtl ? "اسم الشركة" : "Company name"} /></label><label>{t.inquiry}<select name="inquiry" defaultValue="" required><option value="" disabled>{rtl ? "اختر موضوعاً" : "Select an inquiry type"}</option>{t.pathways.map((path) => <option key={path}>{path}</option>)}</select><ChevronDown className="select-chevron" size={16} /></label><label>{t.message}<textarea name="message" rows={4} required placeholder={rtl ? "اكتب رسالتك هنا..." : "Write your message here..."} /></label><button type="submit" className="button button-orange form-submit">{t.send}<ArrowUpRight size={17} /></button><span className="form-note">{formMessage || t.sendNote}</span></form></Reveal></div></section>
    </main>

    <footer className="footer"><div className="wrap"><div className="footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark">AM<span>.</span></span><span className="brand-name">ABDELRAHMAN<br />MOATAZ</span></a><p>{t.footerLine}</p><a className="back-top" href="#home" aria-label="Back to top"><Arrow size={17} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}. {t.rights}</span><span>{profile.positioning.toUpperCase()}</span></div></div></footer>

    <AnimatePresence>{selectedProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => { if (event.target === event.currentTarget) setProjectId(null); }}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => { if (event.key === "Escape") { setProjectId(null); return; } if (event.key === "Tab") { const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')); const first = items[0]; const last = items[items.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); } } }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}><button className="modal-close" onClick={() => setProjectId(null)} aria-label={t.close}><X size={19} /></button><span className="modal-tag">{selectedProject.number} / {t.details} · {selectedProject.state}</span><h2 id="modal-title">{selectedProject.title[lang]}</h2><p className="modal-summary">{selectedProject.summary[lang]}</p><div className="modal-grid"><div><span>{t.challenge}</span><p>{selectedProject.challenge[lang]}</p></div><div><span>{t.contribution}</span><p>{selectedProject.contribution[lang]}</p></div><div><span>{t.approach}</span><p>{selectedProject.approach[lang]}</p></div><div className="modal-outcome"><span>{t.result}</span><p>{selectedProject.outcome[lang]}</p></div><div><span>{t.tools}</span><p>{selectedProject.tools}</p></div></div><button className="button button-dark modal-action" onClick={() => { restoreProjectFocusRef.current = false; setProjectId(null); goToContact(); }}>{t.work}<Arrow size={16} /></button></motion.div></motion.div>}</AnimatePresence>
  </>;
}
