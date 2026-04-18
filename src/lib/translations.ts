import type { Lang } from "@/stores/language-store";

export type Translations = {
  nav: {
    home: string;
    practice: string;
    about: string;
    stories: string;
    insights: string;
    contact: string;
    cta: string;
    mobileNav: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  practice: {
    label: string;
    title: string;
    subtitle: string;
    areas: {
      title: string;
      description: string;
      highlights: string[];
    }[];
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    bio1: string;
    bio2: string;
    credentials: { text: string }[];
    achievements: string[];
    cta: string;
    yearsLabel: string;
  };
  stories: {
    label: string;
    title: string;
    subtitle: string;
    testimonials: {
      name: string;
      title: string;
      quote: string;
      case: string;
    }[];
    metrics: { value: string; label: string }[];
  };
  insights: {
    label: string;
    title: string;
    subtitle: string;
    articles: {
      category: string;
      date: string;
      readTime: string;
      title: string;
      excerpt: string;
    }[];
    quickLinks: string[];
    readArticle: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    info: {
      visit: { title: string; lines: string[] };
      call: { title: string; lines: string[] };
      email: { title: string; lines: string[] };
      hours: { title: string; lines: string[] };
    };
    form: {
      title: string;
      requiredNote: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      practiceLabel: string;
      practicePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      successMsg: string;
      submitAnother: string;
      validationTitle: string;
      validationMsg: string;
      errorTitle: string;
      errorMsg: string;
      toastTitle: string;
      toastMsg: string;
    };
    practiceOptions: string[];
    mapAddress: string;
    mapAddress2: string;
  };
  footer: {
    ctaTitle: string;
    ctaSubtitle: string;
    ctaBtn: string;
    callBtn: string;
    description: string;
    links: Record<string, string[]>;
    copyright: string;
    privacy: string;
    terms: string;
  };
  whyUs: {
    label: string;
    title: string;
    subtitle: string;
    features: {
      title: string;
      description: string;
    }[];
  };
};

const translations: Record<Lang, Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      practice: "مجالات الممارسة",
      about: "عن المحامي",
      stories: "قصص النجاح",
      insights: "الرؤى القانونية",
      contact: "اتصل بنا",
      cta: "احجز استشارة",
      mobileNav: "القائمة",
    },
    hero: {
      badge: "التميّز القانوني في الرياض",
      headline1: "التميّز القانوني",
      headline2: "المبني على النزاهة.",
      subtitle:
        "الاستشارات القانونية الرائدة في المملكة العربية السعودية لحوكمة الشركات، المنازعات التجارية، والاستشارات المتوافقة مع الشريعة الإسلامية. نحمي مصالحكم بكفاءة وإخلاص.",
      cta: "اتصل بنا",
      ctaSecondary: "مجالات الممارسة",
      stats: [
        { value: "+25", label: "سنوات من الخبرة" },
        { value: "+2000", label: "قضية تم حلها" },
        { value: "+500", label: "عميل مؤسسي" },
      ],
    },
    practice: {
      label: "ما نقدّمه",
      title: "مجالات الممارسة",
      subtitle:
        "نقدّم استراتيجيات قانونية حاسمة في كامل نطاق قانون الشركات والتجارة، مبنية على خبرة عميقة في النظام القانوني السعودي.",
      areas: [
        {
          title: "حوكمة الشركات",
          description:
            "استشارات شاملة في هياكل مجالس الإدارة، حقوق المساهمين، الامتثال التنظيمي، وإعادة هيكلة الشركات بما يتوافق مع إصلاحات رؤية المملكة 2030.",
          highlights: [
            "استشارات مجالس الإدارة والامتثال",
            "عمليات الاندماج والاستحواذ",
            "المشاريع المشتركة والشراكات",
            "إعادة هيكلة الشركات",
          ],
        },
        {
          title: "قانون العقارات",
          description:
            "خدمات قانونية شاملة للمعاملات العقارية وتطوير المشاريع الاستثمارية، بما يشمل الامتثال لهيئة العقار وشؤون السجل العقاري في جميع أنحاء المملكة.",
          highlights: [
            "المعاملات العقارية",
            "اتفاقيات التطوير",
            "الامتثال لمعايير هيئة العقار",
            "السجل العقاري وشهادات الملكية",
          ],
        },
        {
          title: "حل النزاعات",
          description:
            "تمثيل استراتيجي أمام المحاكم السعودية والهيئات التجارية ولجان التحكيم الدولية. تحكيم احترافي للنزاعات التجارية والشركات المعقدة.",
          highlights: [
            "القضاء التجاري",
            "التحكيم الدولي",
            "الوساطة والتسوية",
            "تنفيذ الأحكام القضائية",
          ],
        },
        {
          title: "الاستشارات الشرعية",
          description:
            "إرشاد متخصص في هياكل التمويل الإسلامي والعقود المتوافقة مع الشريعة والامتثال للفتاوى في قطاعات البنوك والاستثمار والتجارة بالمملكة.",
          highlights: [
            "هيكلة التمويل الإسلامي",
            "إصدار الصكوك والسندات",
            "التنسيق مع الهيئات الشرعية",
            "الامتثال للفتاوى الشرعية",
          ],
        },
        {
          title: "العقود التجارية",
          description:
            "صياغة ومراجعة وتفاوض العقود التجارية ذات القيمة العالية مع اهتمام دقيق بالأنظمة السعودية لحماية مصالح أعمالكم في كل مرحلة.",
          highlights: [
            "صياغة ومراجعة العقود",
            "عقود الوكالة والتوزيع",
            "اتفاقيات الامتياز التجاري",
            "عقود تقديم الخدمات",
          ],
        },
        {
          title: "الاستثمار الأجنبي",
          description:
            "التنقل بين تراخيص هيئة الاستثمار وأنظمة الملكية الأجنبية وبرامج الحوافز الاستثمارية لمساعدة الشركات الدولية على التأسيس والنمو في المملكة.",
          highlights: [
            "تراخيص هيئة الاستثمار",
            "تأسيس الملكية الأجنبية",
            "حوافز الاستثمار",
            "الموافقات التنظيمية",
          ],
        },
      ],
    },
    about: {
      label: "تعّرف على مؤسس المكتب",
      title1: "المحامي محمد",
      title2: "المسلم",
      bio1: "محامٍ متميّز يمتلك أكثر من عقدين من الخبرة في طليعة المشهد القانوني المتطور في المملكة العربية السعودية. أسّس المحامي محمد المسلم مكتبه على مبدأ أن الاستشارة القانونية الاستثنائية لا ينفصل عن النزاهة الشخصية.",
      bio2: "مرخّص من وزارة العدل السعودية وعضو في هيئة المحامين السعودية، تمثّل بنجاح شركات من فورتشن 500 والجهات الحكومية والمؤسسات الخاصة في نزاعات تجارية معقدة ومعاملات بمليارات الريالات وقضايا تحكيم بارزة. فهمه العميق للشريعة الإسلامية والأطر التجارية الدولية جعله من أكثر المستشارين القانونيين طلباً في الرياض.",
      credentials: [
        { text: "بكالوريوس حقوق، جامعة الملك سعود" },
        { text: "ماجستير قانون تجاري دولي" },
        { text: "مرخّص من وزارة العدل السعودية" },
        { text: "عضو هيئة المحامين السعودية" },
      ],
      achievements: [
        "استشارات بمعاملات تجارية تتجاوز ١٥ مليار ريال",
        "أكثر من ٢٠٠ نزاع تم حله بنجاح",
        "معترف به ضمن Legal 500 الشرق الأوسط",
      ],
      cta: "احجز موعداً",
      yearsLabel: "سنوات من الممارسة",
    },
    stories: {
      label: "شهادات العملاء",
      title: "قصص نجاح العملاء",
      subtitle:
        "موثوق من قادة الأعمال في جميع أنحاء المملكة العربية السعودية ومنطقة الخليج. نتائجنا تتحدث من خلال نجاح عملائنا.",
      testimonials: [
        {
          name: "خالد الراشد",
          title: "الرئيس التنفيذي، مجموعة الراشد القابضة",
          quote:
            "كانت الاستشارات الاستراتيجية لمكتب المسلم للمحاماة حاسمة في صفقة استحواذ بقيمة ملياري ريال. فهمهم للأطر التنظيمية السعودية وهياكل الصفقات الدولية لا مثيل له.",
          case: "استحواذ مؤسسي بملياري ريال",
        },
        {
          name: "سارة ميتشل",
          title: "نائبة الرئيس القانوني، بتروكيم غلوبال",
          quote:
            "عند مواجهة نزاعات متعددة الاختصاصات المعقدة، حقق محمد وفريقه نتائج تفوق توقعاتنا. نهجهم المتوافق مع الشريعة منحنا ثقة كاملة طوال عملية التحكيم.",
          case: "تحكيم دولي",
        },
        {
          name: "عبدالله الفيصل",
          title: "رئيس مجلس الإدارة، مجموعة فيصل العقارية",
          quote:
            "قاد فريقهم القانوني العقاري مشروعنا التطويري البارز عبر كل عقبة تنظيمية. عمق المعرفة في قانون الملكية السعودي وفّر لنا وقتاً وموارد كبيرة.",
          case: "تطوير عقاري كبير",
        },
      ],
      metrics: [
        { value: "٩٨٪", label: "رضا العملاء" },
        { value: "+١٥ مليار ريال", label: "قيمة المعاملات" },
        { value: "+٤٥", label: "جائزة مهنية" },
        { value: "١٢", label: "دولة خليجية تمت خدمتها" },
      ],
    },
    insights: {
      label: "مركز المعرفة",
      title: "الرؤى القانونية",
      subtitle:
        "ابقَ مطلعاً مع التحليلات المتخصصة حول التطورات القانونية السعودية والتغييرات التنظيمية والتوجيهات الخاصة بقطاعكم من فريقنا.",
      articles: [
        {
          category: "قانون الشركات",
          date: "١٥ ديسمبر ٢٠٢٤",
          readTime: "٦ دقائق قراءة",
          title: "التنقل في الإطار الجديد لحوكمة الشركات بالمملكة ضمن رؤية ٢٠٣٠",
          excerpt:
            "تحليل معمّق للإصلاحات الأخيرة في أنظمة حوكمة الشركات السعودية وانعكاساتها على الشركات المحلية والدولية العاملة في المملكة.",
        },
        {
          category: "العقارات",
          date: "٢٨ نوفمبر ٢٠٢٤",
          readTime: "٥ دقائق قراءة",
          title: "فهم هيئة العقار: ما يحتاج كل مطوّر عقاري معرفته في ٢٠٢٥",
          excerpt:
            "تواصل الهيئة العامة للعقار إعادة تشكيل سوق العقارات بالمملكة. إليكم ما يجب على المطوّرين والمستثمرين التحضير له في العام القادم.",
        },
        {
          category: "حل النزاعات",
          date: "١٠ نوفمبر ٢٠٢٤",
          readTime: "٧ دقائق قراءة",
          title: "صعود التحكيم الدولي في مجلس التعاون: دليل استراتيجي",
          excerpt:
            "مع تسارع التجارة العابرة للحدود في الخليج، أصبح التحكيم الدولي الآلية المفضلة لحل النزاعات التجارية المعقدة.",
        },
      ],
      quickLinks: [
        "تحديثات قانون الشركات",
        "تنبيهات تنظيمية",
        "دراسات حالة",
        "موجزات الشريعة الإسلامية",
      ],
      readArticle: "اقرأ المقال",
    },
    contact: {
      label: "تواصل معنا",
      title: "احجز استشارة",
      subtitle:
        "اتخذ الخطوة الأولى نحو حل قضيتك القانونية. فريقنا مستعد لتقديم التوجيه المتخصص الذي تحتاجه.",
      info: {
        visit: {
          title: "زورونا",
          lines: [
            "شارع العليا، أبراج العليا",
            "حي العليا، الرياض ١٢٢١٣",
            "المملكة العربية السعودية",
          ],
        },
        call: {
          title: "اتصل بنا",
          lines: ["0506707007", "+966506707007"],
        },
        email: {
          title: "راسلنا",
          lines: ["info@mohamalmusallam.com"],
        },
        hours: {
          title: "ساعات العمل",
          lines: [
            "الأحد - الخميس: ٩:٠٠ ص - ٦:٠٠ م",
            "الجمعة والسبت: مغلق",
          ],
        },
      },
      form: {
        title: "طلب استشارة",
        requiredNote: "الحقول المعلّمة بـ * مطلوبة",
        nameLabel: "الاسم الكامل *",
        namePlaceholder: "الاسم الكامل",
        emailLabel: "البريد الإلكتروني *",
        emailPlaceholder: "بريدك@مثال.com",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "05XXXXXXXX",
        companyLabel: "اسم الشركة",
        companyPlaceholder: "اسم شركتك",
        practiceLabel: "مجال الممارسة *",
        practicePlaceholder: "اختر مجال الممارسة",
        messageLabel: "رسالتك *",
        messagePlaceholder: "وصف موجز لقضيتك القانونية...",
        submit: "إرسال طلب الاستشارة",
        submitting: "جارٍ الإرسال...",
        success: "تم استلام الطلب",
        successMsg: "شكراً لك. سيقوم فريقنا القانوني بمراجعة استفساركم والرد خلال ٢٤ ساعة عمل.",
        submitAnother: "إرسال طلب آخر",
        validationTitle: "يرجى ملء جميع الحقول المطلوبة",
        validationMsg: "الاسم والبريد الإلكتروني ومجال الممارسة والرسالة مطلوبة.",
        errorTitle: "فشل الإرسال",
        errorMsg: "يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.",
        toastTitle: "تم إرسال طلب الاستشارة",
        toastMsg: "شكراً لتواصلكم. سيقوم فريقنا بالرد خلال ٢٤ ساعة عمل.",
      },
      practiceOptions: [
        "حوكمة الشركات",
        "قانون العقارات",
        "حل النزاعات",
        "الاستشارات الشرعية",
        "العقود التجارية",
        "الاستثمار الأجنبي",
        "أخرى",
      ],
      mapAddress: "شارع العليا، أبراج العليا",
      mapAddress2: "حي العليا، الرياض ١٢٢١٣",
    },
    footer: {
      ctaTitle: "هل أنت مستعد لحماية مصالحك القانونية؟",
      ctaSubtitle:
        "احجز استشارة سرية مع فريقنا القانوني اليوم.",
      ctaBtn: "احجز استشارة",
      callBtn: "اتصل الآن",
      description:
        "مكتب المحامي محمد المسلم — الاستشارات القانونية الرائدة في المملكة لحوكمة الشركات، المنازعات التجارية، والاستشارات المتوافقة مع الشريعة. موثوق من كبرى الشركات في المملكة ومنطقة الخليج.",
      links: {
        "مجالات الممارسة": [
          "حوكمة الشركات",
          "قانون العقارات",
          "حل النزاعات",
          "الاستشارات الشرعية",
          "العقود التجارية",
          "الاستثمار الأجنبي",
        ],
        "المكتب": [
          "عن المكتب",
          "مؤسس المكتب",
          "شهادات العملاء",
          "الرؤى القانونية",
          "التوظيف",
          "اتصل بنا",
        ],
        "روابط سريعة": [
          "احجز استشارة",
          "اتصل بنا",
          "سياسة الخصوصية",
          "الشروط والأحكام",
        ],
      },
      copyright: `© ${new Date().getFullYear()} مكتب المحامي محمد المسلم. جميع الحقوق محفوظة. مرخّص من وزارة العدل السعودية.`,
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
    whyUs: {
      label: "لماذا تختارنا",
      title: "لماذا تختار مكتبنا",
      subtitle:
        "نتميّز بخبرة عميقة ونزاهة لا تقبل المساومة في خدمة عملائنا. إليكم ما يجعلنا الخيار الأول في المملكة.",
      features: [
        {
          title: "خبرة +25 عاماً",
          description:
            "أكثر من عقدين من الملاحة في المشهد القانوني المتطور بالمملكة العربية السعودية مع نجاح مثبت في أصعب القضايا.",
        },
        {
          title: "نزاهة وموثوقية",
          description:
            "تُعامَل كل قضية بأعلى المعايير الأخلاقية والسرية التامة، مما يجعلنا الشريك القانوني الذي يمكنك الوثوق به.",
        },
        {
          title: "فهم عميق للنظام السعودي",
          description:
            "معرفة شاملة بالقانون السعودي والامتثال للشريعة الإسلامية والأطر التنظيمية المتغيرة باستمرار.",
        },
        {
          title: "نتائج استثنائية",
          description:
            "سجل حافل بحل النزاعات المعقدة والمعاملات ذات القيمة العالية التي تتجاوز مليارات الريالات.",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      practice: "Practice Areas",
      about: "About",
      stories: "Success Stories",
      insights: "Insights",
      contact: "Contact",
      cta: "Book Consultation",
      mobileNav: "Menu",
    },
    hero: {
      badge: "Established Legal Excellence in Riyadh",
      headline1: "Legal Excellence",
      headline2: "Built on Integrity.",
      subtitle:
        "Saudi Arabia's premier legal counsel for corporate governance, commercial litigation, and Sharia-compliant advisory. Protecting your interests with unwavering dedication.",
      cta: "Contact Us",
      ctaSecondary: "Practice Areas",
      stats: [
        { value: "25+", label: "Years of Experience" },
        { value: "2,000+", label: "Cases Resolved" },
        { value: "500+", label: "Corporate Clients" },
      ],
    },
    practice: {
      label: "What We Do",
      title: "Practice Areas",
      subtitle:
        "We deliver decisive legal strategies across the full spectrum of corporate and commercial law, grounded in deep expertise of the Saudi legal system.",
      areas: [
        {
          title: "Corporate Governance",
          description:
            "Comprehensive advisory on board structures, shareholder rights, regulatory compliance, and corporate restructuring aligned with Saudi Vision 2030 reforms and SAMA regulations.",
          highlights: [
            "Board Advisory & Compliance",
            "Mergers & Acquisitions",
            "Joint Ventures & Partnerships",
            "Corporate Restructuring",
          ],
        },
        {
          title: "Real Estate Law",
          description:
            "End-to-end legal services for real estate transactions, property development, and investment structuring, including RERA compliance and land registry matters across the Kingdom.",
          highlights: [
            "Property Transactions",
            "Development Agreements",
            "RERA Compliance",
            "Land Registry & Title",
          ],
        },
        {
          title: "Dispute Resolution",
          description:
            "Strategic representation before Saudi courts, commercial tribunals, and international arbitration panels. Expert mediation for complex commercial and corporate disputes.",
          highlights: [
            "Commercial Litigation",
            "International Arbitration",
            "Mediation & Settlement",
            "Enforcement of Judgments",
          ],
        },
        {
          title: "Sharia-Compliant Advisory",
          description:
            "Specialized guidance on Islamic finance structures, Sharia-compliant contracts, and fatwa compliance for banking, investment, and commercial operations in the Kingdom.",
          highlights: [
            "Islamic Finance Structuring",
            "Sukuk & Bond Issuance",
            "Sharia Board Liaison",
            "Fatwa Compliance",
          ],
        },
        {
          title: "Commercial Contracts",
          description:
            "Drafting, reviewing, and negotiating high-value commercial agreements with meticulous attention to Saudi law, protecting your business interests at every stage.",
          highlights: [
            "Contract Drafting & Review",
            "Agency & Distribution",
            "Franchise Agreements",
            "Service Contracts",
          ],
        },
        {
          title: "Foreign Investment",
          description:
            "Navigating SAGIA licensing, foreign ownership regulations, and investment incentive programs to help international businesses establish and thrive in Saudi Arabia.",
          highlights: [
            "SAGIA Licensing",
            "Foreign Ownership Setup",
            "Investment Incentives",
            "Regulatory Approvals",
          ],
        },
      ],
    },
    about: {
      label: "Meet Our Founder",
      title1: "Mohammed",
      title2: "Al-Musallam",
      bio1: "A distinguished legal practitioner with over two decades of experience at the forefront of Saudi Arabia's evolving legal landscape. Mohammed Al-Musallam founded the firm on the principle that exceptional legal counsel must be inseparable from personal integrity.",
      bio2: "Licensed by the Saudi Ministry of Justice and a member of the Saudi Bar Association, he has successfully represented Fortune 500 corporations, government entities, and private enterprises across complex commercial disputes, multi-billion riyal transactions, and landmark arbitration cases.",
      credentials: [
        { text: "LL.B., King Saud University" },
        { text: "LL.M., International Commercial Law" },
        { text: "Licensed Saudi Ministry of Justice" },
        { text: "Saudi Bar Association Member" },
      ],
      achievements: [
        "Advised on SAR 15B+ in corporate transactions",
        "Led 200+ successful dispute resolutions",
        "Recognized by Legal 500 Middle East",
      ],
      cta: "Schedule a Meeting",
      yearsLabel: "Years of Practice",
    },
    stories: {
      label: "Client Testimonials",
      title: "Client Success Stories",
      subtitle:
        "Trusted by industry leaders across Saudi Arabia and the GCC region. Our results speak through the success of our clients.",
      testimonials: [
        {
          name: "Khalid Al-Rashid",
          title: "CEO, Al-Rashid Holdings",
          quote:
            "Al-Musallam Law Firm's strategic counsel was instrumental in our SAR 2 billion acquisition. Their understanding of both Saudi regulatory frameworks and international deal structures is unmatched.",
          case: "SAR 2B Corporate Acquisition",
        },
        {
          name: "Sarah Mitchell",
          title: "VP Legal, PetroChem Global",
          quote:
            "When faced with complex multi-jurisdictional disputes, Mohammed and his team delivered outcomes that exceeded our expectations. Their Sharia-compliant approach gave us complete confidence throughout the arbitration process.",
          case: "International Arbitration",
        },
        {
          name: "Abdullah Al-Faisal",
          title: "Chairman, Faisal Real Estate Group",
          quote:
            "Their real estate legal team navigated our landmark development project through every regulatory hurdle. The depth of knowledge in Saudi property law saved us significant time and resources.",
          case: "Major Real Estate Development",
        },
      ],
      metrics: [
        { value: "98%", label: "Client Satisfaction" },
        { value: "SAR 15B+", label: "Transaction Value" },
        { value: "45+", label: "Industry Awards" },
        { value: "12", label: "GCC Countries Served" },
      ],
    },
    insights: {
      label: "Knowledge Center",
      title: "Legal Insights",
      subtitle:
        "Stay informed with expert analysis on Saudi legal developments, regulatory changes, and industry-specific guidance from our team.",
      articles: [
        {
          category: "Corporate Law",
          date: "December 15, 2024",
          readTime: "6 min read",
          title:
            "Navigating Saudi Arabia's New Corporate Governance Framework Under Vision 2030",
          excerpt:
            "An in-depth analysis of the recent reforms to Saudi corporate governance regulations and their implications for both domestic and international businesses operating in the Kingdom.",
        },
        {
          category: "Real Estate",
          date: "November 28, 2024",
          readTime: "5 min read",
          title:
            "Understanding RERA: What Every Real Estate Developer Needs to Know in 2025",
          excerpt:
            "The Real Estate General Authority continues to reshape Saudi Arabia's property market. Here's what developers and investors must prepare for in the coming year.",
        },
        {
          category: "Dispute Resolution",
          date: "November 10, 2024",
          readTime: "7 min read",
          title:
            "The Rise of International Arbitration in the GCC: A Strategic Guide",
          excerpt:
            "As cross-border commerce accelerates across the Gulf, international arbitration is becoming the preferred mechanism for resolving complex commercial disputes.",
        },
      ],
      quickLinks: [
        "Corporate Law Updates",
        "Regulatory Alerts",
        "Case Studies",
        "Sharia Law Briefings",
      ],
      readArticle: "Read Article",
    },
    contact: {
      label: "Get in Touch",
      title: "Book a Consultation",
      subtitle:
        "Take the first step toward resolving your legal matter. Our team is ready to provide the expert guidance you need.",
      info: {
        visit: {
          title: "Visit Us",
          lines: [
            "Olaya Street, Olaya Towers",
            "Al Olaya, Riyadh 12213",
            "Saudi Arabia",
          ],
        },
        call: {
          title: "Call Us",
          lines: ["0506707007", "+966506707007"],
        },
        email: {
          title: "Email Us",
          lines: ["info@mohamalmusallam.com"],
        },
        hours: {
          title: "Office Hours",
          lines: [
            "Sunday - Thursday: 9:00 AM - 6:00 PM",
            "Friday & Saturday: Closed",
          ],
        },
      },
      form: {
        title: "Request a Consultation",
        requiredNote: "Fields marked with * are required",
        nameLabel: "Full Name *",
        namePlaceholder: "Your full name",
        emailLabel: "Email *",
        emailPlaceholder: "your@email.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "05XXXXXXXX",
        companyLabel: "Company",
        companyPlaceholder: "Your company name",
        practiceLabel: "Practice Area *",
        practicePlaceholder: "Select a practice area",
        messageLabel: "Your Message *",
        messagePlaceholder: "Briefly describe your legal matter...",
        submit: "Submit Consultation Request",
        submitting: "Submitting...",
        success: "Request Received",
        successMsg:
          "Thank you. Our legal team will review your inquiry and respond within 24 business hours.",
        submitAnother: "Submit Another Request",
        validationTitle: "Please fill in all required fields",
        validationMsg: "Name, email, practice area, and message are required.",
        errorTitle: "Submission Failed",
        errorMsg: "Please try again or contact us directly.",
        toastTitle: "Consultation Request Submitted",
        toastMsg:
          "Thank you for reaching out. Our team will contact you within 24 hours.",
      },
      practiceOptions: [
        "Corporate Governance",
        "Real Estate Law",
        "Dispute Resolution",
        "Sharia-Compliant Advisory",
        "Commercial Contracts",
        "Foreign Investment",
        "Other",
      ],
      mapAddress: "Olaya Street, Olaya Towers",
      mapAddress2: "Al Olaya, Riyadh 12213",
    },
    footer: {
      ctaTitle: "Ready to Protect Your Legal Interests?",
      ctaSubtitle:
        "Schedule a confidential consultation with our legal team today.",
      ctaBtn: "Book Consultation",
      callBtn: "Call Now",
      description:
        "Saudi Arabia's premier legal counsel for corporate governance, commercial litigation, and Sharia-compliant advisory services. Trusted by leading businesses across the Kingdom and GCC region.",
      links: {
        "Practice Areas": [
          "Corporate Governance",
          "Real Estate Law",
          "Dispute Resolution",
          "Sharia-Compliant Advisory",
          "Commercial Contracts",
          "Foreign Investment",
        ],
        Company: [
          "About the Firm",
          "Our Founder",
          "Client Testimonials",
          "Legal Insights",
          "Careers",
          "Contact Us",
        ],
        "Quick Links": [
          "Book a Consultation",
          "Contact Us",
          "Privacy Policy",
          "Terms of Service",
        ],
      },
      copyright: `© ${new Date().getFullYear()} Mohammed Al-Musallam Law Firm. All rights reserved. Licensed by the Saudi Ministry of Justice.`,
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    whyUs: {
      label: "Why Choose Us",
      title: "Why Choose Our Firm",
      subtitle:
        "We distinguish ourselves through deep expertise and unwavering integrity in serving our clients. Here is what makes us the premier choice in the Kingdom.",
      features: [
        {
          title: "25+ Years of Experience",
          description:
            "Over two decades navigating Saudi Arabia's evolving legal landscape with proven success across the most challenging cases.",
        },
        {
          title: "Integrity & Trust",
          description:
            "Every case is handled with the highest ethical standards and complete confidentiality, making us the legal partner you can rely on.",
        },
        {
          title: "Deep Saudi Legal Expertise",
          description:
            "Comprehensive knowledge of Saudi law, Sharia compliance, and the continuously evolving regulatory frameworks.",
        },
        {
          title: "Exceptional Results",
          description:
            "Track record of resolving complex disputes and high-value transactions worth billions of riyals.",
        },
      ],
    },
  },
};

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}
