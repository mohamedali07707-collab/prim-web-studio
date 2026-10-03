// مخزن النصوص المستخدمة في الترجمة العربية والإنجليزية لكل قسم من الموقع
const translations = {
  ar: {
    meta: {
      home: 'تصميم مواقع احترافية تجعل عملك يبدو جادًا.',
      services: 'خدمات تصميم مواقع احترافية مبنية على أهدافك.',
      work: 'أعمال مختارة من بريم ويب ستوديو.',
      about: 'نبذة عن بريم ويب ستوديو، تصميم مواقع أنيقة وعملية.',
      contact: 'تواصل مع بريم ويب ستوديو للإستفسار عن موقعك التالي.'
    },
    pageTitles: {
      home: 'بريم ويب ستوديو | تصميم وتطوير المواقع',
      services: 'الخدمات | بريم ويب ستوديو',
      work: 'الأعمال | بريم ويب ستوديو',
      about: 'من نحن | بريم ويب ستوديو',
      contact: 'تواصل معنا | بريم ويب ستوديو'
    },
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      work: 'الأعمال',
      about: 'من نحن',
      contact: 'تواصل',
      cta: 'ابدأ مشروعك'
    },
    homePage: {
      heroHeading: 'نصمم مواقع تعكس هوية عملك بوضوح',
      heroText: 'نساعد الشركات والعلامات التجارية على بناء تجربة رقمية واضحة، احترافية، ومتماسكة عبر الإنترنت.',
      primaryAction: 'ابدأ مشروعك',
      secondaryAction: 'استعرض أعمالنا',
      servicesEyebrow: 'ما الذي نقوم به',
      servicesHeading: 'نصنع حضورًا رقميًا قويًا لعلامتك التجارية',
      businessTitle: 'مواقع الأعمال',
      businessText: 'تصميم مواقع احترافية تعكس قيمة الشركة وتدعم النمو.',
      landingTitle: 'الصفحات المقصودة',
      landingText: 'صفحات هادئة، واضحة، وموجهة نحو تحويل الزوار إلى عملاء.',
      personalTitle: 'المواقع الشخصية',
      personalText: 'هوية رقمية أنيقة للمهنيين والمنتجين والمبدعين.',
      approachEyebrow: 'نهجنا',
      approachHeading: 'تصميم عملي، مرئي، ومريح للمستخدم.',
      approachText: 'لا نبالغ في التفاصيل. نحن نركز على الوضوح، التركيز، والهوية التي تجعل الموقع يليق بعملك.',
      approachAction: 'اعرف المزيد'
    },
    hero: {
      eyebrow: 'تصميم المواقع',
      heading: "مواقع تجعل عملك احترافيا",
      text: 'نصمم ونبني مواقع أنيقة وحديثة للشركات والمهنيين والعلامات الشخصية.',
      primary: 'ابدأ مشروعك',
      secondary: 'شاهد أعمالنا',
      statOne: '10+',
      statOneLabel: 'سنوات خبرة',
      statTwo: '40+',
      statTwoLabel: 'مشاريع مصممة'
    },
    work: {
      eyebrow: 'أعمال مختارة',
      heading: 'أعمال مختارة',
      description: 'مجموعة من المواقع المصممة لمساعدة العلامات التجارية على الظهور بوضوح وموثوقية واحترافية.',
      view: 'عرض المشروع',
      aster: { name: 'Aster House', category: 'موقع ضيافة' },
      northline: { name: 'STRUCORA', category: 'موقع أعمال' },
      verde: { name: 'Verde Clinic', category: 'موقع احترافي' }
    },
    servicesOverview: {
      eyebrow: 'ما الذي نقوم به',
      heading: 'ما الذي نقوم به',
      business: {
        title: 'مواقع الأعمال',
        text: 'مواقع احترافية تمنح الشركات حضورًا أقوى عبر الإنترنت.'
      },
      landing: {
        title: 'الصفحات المقصودة',
        text: 'صفحات مركزة تهتم بالوضوح، العرض، وتحويل الزوار إلى عملاء.'
      },
      personal: {
        title: 'المواقع الشخصية',
        text: 'مواقع أنيقة للمهنيين والمبدعين والمستقلين والعلامات الشخصية.'
      }
    },
    process: {
      eyebrow: 'كيف نعمل',
      heading: 'كيف نعمل',
      step1: { title: 'أخبرنا بما تحتاج', text: 'نفهم نشاطك وأهدافك ومتطلباتك.' },
      step2: { title: 'نصمم ونبني', text: 'نحوّل الفكرة إلى موقع أنيق واحترافي.' },
      step3: { title: 'أنت تطلقه', text: 'يُجهز الموقع للإطلاق ويكون جاهزًا للجمهور.' }
    },
    aboutPreview: {
      eyebrow: 'عن المؤسسة',
      heading: 'تصميمٌ له غرض. وبناءٌ للناس.',
      text: 'تُصمم بريم ويب ستوديو مواقع أنيقة وحديثة للشركات والأفراد الذين يريدون حضورًا أقوى عبر الإنترنت.',
      button: 'عن بريم ويب ستوديو'
    },
    cta: {
      heading: 'لنصنع شيئًا يستحق الزيارة.',
      text: 'هل لديك فكرة لموقعك التالي؟ دعنا نحولها إلى موقع واضح، مفيد، واحترافي.',
      button: 'ابدأ مشروعك'
    },
    pages: {
      services: {
        eyebrow: 'الخدمات',
        heading: 'الخدمات',
        intro: 'مواقع بسيطة واحترافية مبنية حول أهدافك.',
        websiteDesign: { title: 'تصميم المواقع', text: 'تصميم بصري احترافي وتخطيط متجاوب.' },
        businessWebsites: { title: 'مواقع الأعمال', text: 'مواقع كاملة للشركات والمنظمات.' },
        landingPages: { title: 'الصفحات المقصودة', text: 'مواقع صفحة واحدة مركزة للحملات والخدمات.' },
        personalWebsites: { title: 'المواقع الشخصية', text: 'مواقع شخصية وبروفايل للعلامات التجارية.' },
        socialLanding: { title: 'صفحات الوسائط الاجتماعية', text: 'صفحات بسيطة أولية تهدف إلى تنظيم الروابط المهمة ومعلومات الاتصال.' }
      },
      workPage: {
        eyebrow: 'الأعمال المختارة',
        heading: 'الأعمال المختارة',
        intro: 'مجموعة متنامية من المواقع والمفاهيم الرقمية التي أنشأتها بريم ويب ستوديو.',
        view: 'عرض المشروع',
        aster: { name: 'MADA', category: 'تصميم داخلي', desc: 'موقع لشركة مدى للتصميم الداخلي للمنازل والشركات، يعرض حلولًا عصرية ومساحات مدروسة.' },
        northline: { name: 'STRUCORA', category: 'هندسة ومقاولات', desc: 'موقع لشركة هندسية تجمع التصميم المعماري بالتنفيذ المنضبط والجودة طويلة الأمد.' },
        verde: { name: 'Verde Clinic', category: 'رعاية صحية', desc: 'موقع موثوق يعزز الثقة والوضوح.' },
        luma: { name: 'دجلة للخدمات القانونية', category: 'محاماة وخدمات قانونية', desc: 'موقع لشركة محاماة يعرّف بخدمات دجلة القانونية ويعرض معلومات التواصل بوضوح.' },
        lane: { name: 'Lane Andrade', category: 'علامة شخصية', desc: 'موقع شخصي يجمع نبذة تعريفية وروابط التواصل والتعاون في واجهة أنيقة.' },
        solis: { name: 'Solis Studio', category: 'استوديو', desc: 'صفحة عرض جميلة للعلامة التجارية الإبداعية.' }
      },
      aboutPage: {
        eyebrow: 'من نحن',
        heading: 'عن بريم ويب ستوديو',
        intro: 'بريم ويب ستوديو لتصميم المواقع، نعمل مع الشركات والمهنيين لبناء حضور رقمي واضح يعكس طبيعة أعمالهم. نهتم بالمحتوى وسهولة الاستخدام بقدر اهتمامنا بالشكل، لتكون النتيجة موقعًا عمليًا ومريحًا على مختلف الأجهزة.',
        approachTitle: 'نهجنا',
        approachText: 'نبدأ بفهم عملك ثم نبني تجربة رقمية مرتبة تسهّل على زوارك معرفة ما تقدمه وكيفية التواصل معك.',
        points: ['الوضوح', 'التسلسل البصري الجيد', 'التصميم المتجاوب', 'العرض الاحترافي', 'البساطة', 'التصميم الهادف']
      },
      contactPage: {
        eyebrow: 'تواصل',
        heading: 'دعنا نتحدث',
        intro: 'أخبرنا بما تحتاج، ودعنا نناقش موقعك القادم.',
        emailTitle: 'البريد الإلكتروني',
        emailAction: 'أرسل لنا رسالة',
        socialTitle: 'تابعنا وتواصل معنا',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        instagram: 'إنستغرام',
        facebook: 'فيسبوك',
        location: 'بغداد، العراق'
      },
      footer: {
        brand: 'بريم ويب ستوديو',
        description: 'تصميم مواقع أفضل لأعمال أفضل.',
        navigation: 'التصفح',
        social: 'تواصل',
        locationTitle: 'الموقع',
        home: 'الرئيسية',
        services: 'الخدمات',
        work: 'الأعمال',
        about: 'من نحن',
        contact: 'تواصل',
        instagram: 'إنستغرام',
        facebook: 'فيسبوك',
        whatsapp: 'واتساب',
        location: 'بغداد، العراق',
        copyright: '© 2026 بريم ويب ستوديو. جميع الحقوق محفوظة.'
      }
    }
  },
  en: {
    meta: {
      home: 'Professional web design that makes your business look serious.',
      services: 'Professional website services designed around your goals.',
      work: 'Selected work from Prim Web Studio.',
      about: 'About Prim Web Studio and our design approach.',
      contact: 'Contact Prim Web Studio about your next website.'
    },
    pageTitles: {
      home: 'Prim Web Studio | Web Design & Development',
      services: 'Services | Prim Web Studio',
      work: 'Selected Work | Prim Web Studio',
      about: 'About | Prim Web Studio',
      contact: 'Contact | Prim Web Studio'
    },
    nav: {
      home: 'Home',
      services: 'Services',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      cta: 'Start a Project'
    },
    homePage: {
      heroHeading: 'We design websites that clearly reflect your brand.',
      heroText: 'We help businesses and brands build a clear, professional, and consistent online experience.',
      primaryAction: 'Start a Project',
      secondaryAction: 'Explore Our Work',
      servicesEyebrow: 'What We Do',
      servicesHeading: 'We build a strong digital presence for your brand.',
      businessTitle: 'Business Websites',
      businessText: 'Professional websites that reflect your company’s value and support its growth.',
      landingTitle: 'Landing Pages',
      landingText: 'Clear, focused pages designed to turn visitors into customers.',
      personalTitle: 'Personal Websites',
      personalText: 'A polished online presence for professionals, creators, and entrepreneurs.',
      approachEyebrow: 'Our Approach',
      approachHeading: 'Practical design, clear visuals, and an easy experience.',
      approachText: 'We keep things focused on clarity, purpose, and an identity that fits your business, without unnecessary detail.',
      approachAction: 'Learn More'
    },
    hero: {
      eyebrow: 'Web Design',
      heading: 'Websites that make your business look serious.',
      text: 'We design and develop clean, modern websites for businesses, professionals, and personal brands.',
      primary: 'Start a Project',
      secondary: 'View Our Work',
      statOne: '10+',
      statOneLabel: 'Years of experience',
      statTwo: '40+',
      statTwoLabel: 'Projects designed'
    },
    work: {
      eyebrow: 'Selected Work',
      heading: 'Selected Work',
      description: 'A selection of websites designed to help brands look clear, credible, and professional online.',
      view: 'View Project',
      aster: { name: 'Aster House', category: 'Hospitality Website' },
      northline: { name: 'Northline', category: 'Business Website' },
      verde: { name: 'Verde Clinic', category: 'Professional Website' }
    },
    servicesOverview: {
      eyebrow: 'What We Do',
      heading: 'What We Do',
      business: {
        title: 'Business Websites',
        text: 'Professional websites designed to give businesses a stronger online presence.'
      },
      landing: {
        title: 'Landing Pages',
        text: 'Focused landing pages designed around clarity, presentation, and conversion.'
      },
      personal: {
        title: 'Personal Websites',
        text: 'Clean websites for professionals, creators, freelancers, and personal brands.'
      }
    },
    process: {
      eyebrow: 'How We Work',
      heading: 'How We Work',
      step1: { title: 'Tell us what you need', text: 'We understand your business, goals, and requirements.' },
      step2: { title: 'We design & build', text: 'We turn the idea into a clean and professional website.' },
      step3: { title: 'You launch', text: 'Your website is prepared for launch and ready for your audience.' }
    },
    aboutPreview: {
      eyebrow: 'About',
      heading: 'Designed with purpose. Built for people.',
      text: 'Prim Web Studio creates clean, modern websites for businesses and individuals who want a stronger presence online.',
      button: 'About Prim Web Studio'
    },
    cta: {
      heading: 'Let’s build something worth visiting.',
      text: 'Have an idea for your next website? Let’s turn it into something clear, useful, and professional.',
      button: 'Start a Project'
    },
    pages: {
      services: {
        eyebrow: 'Services',
        heading: 'Services',
        intro: 'Simple, professional websites built around your goals.',
        websiteDesign: { title: 'Website Design', text: 'Professional visual design and responsive layouts.' },
        businessWebsites: { title: 'Business Websites', text: 'Complete websites for businesses and organizations.' },
        landingPages: { title: 'Landing Pages', text: 'Focused single-page websites for campaigns and services.' },
        personalWebsites: { title: 'Personal Websites', text: 'Portfolios and personal brand websites.' },
        socialLanding: { title: 'Social Media Landing Pages', text: 'Simple mobile-first pages that organize important social links and contact information.' }
      },
      workPage: {
        eyebrow: 'Selected Work',
        heading: 'Selected Work',
        intro: 'A growing collection of websites and digital concepts created by Prim Web Studio.',
        view: 'View Project',
        aster: { name: 'MADA', category: 'Interior Design', desc: 'A website for MADA, an interior design company creating considered spaces for homes and businesses.' },
        northline: { name: 'STRUCORA', category: 'Architecture & Construction', desc: 'A website for an engineering firm combining architectural vision with disciplined delivery and lasting quality.' },
        verde: { name: 'Verde Clinic', category: 'Healthcare', desc: 'A calm, reassuring site that makes care feel more accessible.' },
        luma: { name: 'Dajla Legal Services', category: 'Law & Legal Services', desc: 'A law firm website introducing Dajla’s legal services and presenting contact information clearly.' },
        lane: { name: 'Lane Andrade', category: 'Personal Brand', desc: 'A personal landing page bringing together an introduction, social links, and collaboration details in a polished layout.' },
        solis: { name: 'Solis Studio', category: 'Studio', desc: 'A refined portfolio that balances simplicity with creative character.' }
      },
      aboutPage: {
        eyebrow: 'About',
        heading: 'About Prim Web Studio',
        intro: 'Prim Web Studio is an Iraqi web design studio working with businesses and professionals to build a clear online presence that reflects what they do. We give content and usability as much attention as visual design, creating practical websites that work comfortably across devices.',
        approachTitle: 'Our Approach',
        approachText: 'We start by understanding your business, then shape a considered digital experience that helps visitors see what you offer and how to reach you.',
        points: ['Clarity', 'Good visual hierarchy', 'Responsive design', 'Professional presentation', 'Simplicity', 'Purposeful design']
      },
      contactPage: {
        eyebrow: 'Contact',
        heading: 'Let’s Talk',
        intro: 'Tell us what you need and let’s discuss your next website.',
        emailTitle: 'Email',
        emailAction: 'Send us a message',
        socialTitle: 'Connect with us',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        facebook: 'Facebook',
        location: 'Baghdad, Iraq'
      },
      footer: {
        brand: 'PRIM WEB STUDIO',
        description: 'Designing better websites for better businesses.',
        navigation: 'Explore',
        social: 'Connect',
        locationTitle: 'Location',
        home: 'Home',
        services: 'Services',
        work: 'Work',
        about: 'About',
        contact: 'Contact',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        location: 'Baghdad, Iraq',
        copyright: '© 2026 Prim Web Studio. All rights reserved.'
      }
    }
  }
};

// دالة مساعدة تستخرج قيمة داخل كائنات الترجمات المتداخلة حسب مسار نصي
function getNestedValue(object, path) {
  return path.split('.').reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), object);
}

// تحديث البيانات الوصفية للصفحة بحسب اللغة المختارة
function setPageMeta(language) {
  const currentPage = document.body.dataset.page || 'home';
  const title = getNestedValue(translations[language].pageTitles, currentPage) || translations[language].pageTitles.home;
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');
  const descriptionText = translations[language].meta[currentPage] || translations[language].meta.home;

  if (metaDescription) {
    metaDescription.setAttribute('content', descriptionText);
  }
}

// تبديل اللغة الحالية وتحديث جميع النصوص والتخطيط لليمين أو اليسار
function updateLanguage(language) {
  const html = document.documentElement;
  html.lang = language;
  html.dir = language === 'ar' ? 'rtl' : 'ltr';

  document.body.classList.toggle('rtl', language === 'ar');
  document.body.classList.toggle('ltr', language !== 'ar');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = getNestedValue(translations[language], key);

    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    const value = getNestedValue(translations[language], key);

    if (value) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  const currentPage = document.body.dataset.page || 'home';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((link) => {
    const pageName = link.getAttribute('data-page');
    link.classList.toggle('is-current', pageName === currentPage);
  });

  localStorage.setItem('primeWebStudioLang', language);
  setPageMeta(language);
}

// فتح وإغلاق قائمة الهاتف المحمول في كل صفحة بسهولة
function initMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// تفعيل تأثير الظهور الخفيف للعناصر أثناء التمرير في الصفحة
function initRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
}

// اختيار اللغة الافتراضية من localStorage أو استخدام العربية بشكل مبدئي
function initLanguageSwitcher() {
  const savedLanguage = localStorage.getItem('primeWebStudioLang') || 'ar';
  const selectedLanguage = ['ar', 'en'].includes(savedLanguage) ? savedLanguage : 'ar';

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.lang;
      if (language) {
        updateLanguage(language);
      }
    });
  });

  updateLanguage(selectedLanguage);
}

function initSocialLinkPlaceholders() {
  document.querySelectorAll('[data-link-placeholder]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });
}

// تشغيل جميع الوظائف الأساسية عند أن تصبح الصفحة جاهزة بالكامل
function initPage() {
  initMenu();
  initRevealAnimations();
  initLanguageSwitcher();
  initSocialLinkPlaceholders();
}

document.addEventListener('DOMContentLoaded', initPage);
