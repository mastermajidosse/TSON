import React, { createContext, useState } from 'react';

// Translations
const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    book: 'الكتاب',
    groups: 'المجموعات',
    march: 'الى غزة',
    donations: 'دعم',
    
    // Site Name
    siteName: 'الجامع',
    siteNameEn: 'ALJAMAE',
    
    // Home Page - Aljamae
    homeHeroTitle: 'الجامع',
    homeHeroSubtitle: 'حركة عالمية تهدف لجمع الناس لنصرة الحق',
    homeHeroDescription: 'انضم إلى آلاف المقاومين حول العالم في المساعدة والخير والبناء ونشر الحقيقة و القصاء على من يسعى للسيطرة على البشرية. معاً بادن الله نغير العالم.',
    joinMovement: 'انضم للحركة',
    downloadApp: 'حمل التطبيق',
    fightForFreedom: 'حارب من أجل الحرية',
    
    // Home Features
    globalResistance: 'مقاومة عالمية',
    globalResistanceDesc: 'شبكة عالمية من المقاومين الذين يؤمنون بالحق ويحاربون الظلم.',
    secureComms: 'تواصل آمن',
    secureCommsDesc: 'تطبيق الجامع يوفر تواصلاً مشفراً وآمناً بعيداً عن أعين المراقبة والرقابة.',
    truthExposed: 'كشف الحقيقة',
    truthExposedDesc: 'نكشف الأجندة الخفية ونساعد في رفع الظلم عن غزة.',
    
    // App Section
    theAljamaApp: 'تطبيق الجامع',
    appDescription: 'تطبيق آمن ومشفر للتواصل بين أعضاء الحركة. شارك المعلومات، نظم الأحداث، وتواصل مع المقاومين حول العالم.',
    appFeatures: 'مميزات التطبيق',
    encryptedMessaging: 'رسائل مشفرة',
    anonymousGroups: 'مجموعات مجهولة',
    secureFileSharing: 'مشاركة ملفات آمنة',
    eventOrganizing: 'تنظيم الأحداث',
    downloadNow: 'حمل الآن',
    comingSoon: 'قريباً',
    
    // Mission Section
    ourMission: 'مهمتنا',
    missionDescription: 'نحن حركة عالمية تهدف لكشف الحقيقة القصاء على من يسعى للسيطرة على العالم. نؤمن بحق الشعوب في الحرية والكرامة.',
    joinResistance: 'انضم للمقاومة',
    
    // Book Page
    heroTitle: 'يا حثالة الأمم',
    heroSubtitle: 'فهم أعمق للقضية',
    heroDescription: 'كتاب عن الابادة الجماعية وكيف وصل الحال بالمسلمين حول العالم الى التواطئ والخنوع. معلومات ستغير وجهة نظرك حول العدو الحقيقي',
    getTruthNow: 'احصل على الكتاب الآن',
    learnMore: 'اعرف المزيد',
    bannedByMainstream: 'محظور من الإعلام',
    
    // About Section
    whatTheyDontWant: 'ما لا يريدونك أن',
    know: 'تعرفه',
    shadowNetworks: 'الشبكات الخفية',
    shadowNetworksDesc: 'اكشف الشبكات الخفية للسلطة التي تنظم الصراعات العالمية من أجل الربح والسيطرة.',
    warMachine: 'آلة الحرب',
    warMachineDesc: 'كيف تخدم الصراعات المصطنعة مصالح قلة مختارة بينما تدمر شعوباً بأكملها.',
    hiddenAgenda: 'الأجندة الخفية',
    hiddenAgendaDesc: 'الحقيقة الصادمة حول من يستفيد حقاً من الفوضى والانقسام والحرب الدائمة.',
    earlyReaderQuote: 'هذا الكتاب سيحطم نظرتك للعالم ويكشف الواقع المرعب لكيفية عمل السلطة الحقيقية في عالمنا. الأدلة ساحقة، والاستنتاجات لا مفر منها.',
    earlyReaderReview: '- مراجعة قارئ مبكر',
    
    // Buy Section
    getYourCopy: 'احصل على نسختك',
    today: 'الآن',
    dontLetTruthHidden: 'لا تدع الحقيقة مخفية. سلح نفسك بالمعرفة التي يمكن أن تغير كل شيء.',
    digitalEdition: 'النسخة الرقمية متاحة الآن',
    physicalCopies: 'النسخ المطبوعة قريباً',
    buyOnGumroad: 'اشتري من Gumroad',
    freeBookRequest: 'طلب الكتاب مجاني',
    instantDownload: 'تحميل فوري',
    securePayment: 'دفع آمن ومضمون',
    warningMessage: '⚠️ يحتوي هذا الكتاب على معلومات تتحدى رواية الغرب',
    
    // Contact Section
    contactThe: 'تواصل مع',
    author: 'المؤلف',
    contactDescription: 'هل لديك أسئلة حول الكتاب؟ تريد مشاركة أفكارك؟ تواصل مباشرة.',
    getInTouch: 'تواصل معنا',
    emailResponse: 'أقرأ كل بريد إلكتروني شخصياً وأحاول الرد خلال 24-48 ساعة.',
    
    // Groups Page
    joinThe: 'انضم إلى',
    resistance: 'المقاومة',
    connectTruthSeekers: 'تواصل مع الباحثين عن الحقيقة في مجتمعات تليجرام',
    secureAnonymous: 'انظم ، تفاعل ، ادعم بالفعل',
    members: 'عضو',
    joinGroup: 'انضم للمجموعة',
    securityNotice: 'إشعار أمني',
    securityNoticeText: 'هذه المجموعات مراقبة للنقاش المشروع. استخدم دائماً ممارسات التواصل الآمن. نحن لا نؤيد العنف أو الأنشطة غير القانونية. مهمتنا هي نشر الوعي بالوسائل السلمية.',
    
    // March Page
    marchFor: 'مسيرة من أجل',
    truth: 'الحقيقة',
    organizeJoinProtests: 'نظم وانضم إلى الاحتجاجات السلمية للمطالبة بالمساءلة والشفافية',
    peacefulLegalImpactful: 'سلمي • قانوني • مؤثر',
    upcomingMarches: 'المسيرات القادمة',
    organizing: 'قيد التنظيم',
    planning: 'قيد التخطيط',
    confirmed: 'مؤكد',
    joinMarch: 'انضم للمسيرة',
    getUpdates: 'احصل على التحديثات',
    organizeYourOwn: 'نظم مسيرتك الخاصة',
    organizeDescription: 'لا تجد مسيرة في منطقتك؟ ابدأ مظاهرة سلمية خاصة بك. سنساعدك في تنظيمها بشكل صحيح وقانوني.',
    planningResources: 'موارد التخطيط',
    supportNetwork: 'شبكة الدعم',
    startOrganizing: 'ابدأ التنظيم',
    marchGuidelines: 'إرشادات المسيرة',
    
    // Footer
    truthCannotBeSuppressed: 'الحقيقة لا يمكن قمعها إلى الأبد.',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    
    // Telegram Groups
    toGazaGroup: 'الى غزة',
    toGazaDesc: 'مجموعة لنشر الوعي والعمل لإنقاذ غزة - أي اقتراح مرحب به على صفحتنا',
    breakSilenceGroup: 'كسر الصمت',
    breakSilenceDesc: 'للحصول على المؤثرين للتحدث والعمل من أجل القضية',
    ourNarrativeGroup: 'روايتنا',
    ourNarrativeDesc: 'لقصتنا الخاصة ووجهة نظرنا الخاصة',
    freedomFlotillaGroup: 'Freedom Flotilla',
    freedomFlotillaDesc: 'Supporting the freedom flotilla mission to Gaza',
    
    // March Events
    globalDayOfTruth: 'اليوم العالمي للحقيقة',
    globalDayDesc: 'مظاهرات سلمية تطالب بالشفافية من قادة العالم',
    stopWarProfiteering: 'أوقفوا الربح من الحرب',
    stopWarDesc: 'مسيرة ضد الشركات التي تربح من الصراعات اللا نهائية',
    mediaAccountability: 'مسيرة مساءلة الإعلام',
    mediaAccountabilityDesc: 'المطالبة بالتقارير الصادقة وإنهاء الدعاية',
    majorCitiesWorldwide: 'المدن الكبرى حول العالم',
    washingtonLondonParis: 'واشنطن، لندن، باريس',
    mediaHeadquarters: 'مقرات الإعلام حول العالم',
    
    // Donations Page
    urgentSupport: 'دعم عاجل',
    campaigns: 'المشاريع',
    helpPeopleInNeed: 'ساعد في دعم الأشخاص المحتاجين والمتضررين حول العالم',
    everyDonationCounts: 'كل تبرع يحدث فرقاً',
    
    // Donation Platforms
    ummatyFoundation: 'مؤسسة أمتي',
    ummatyDesc: 'مؤسسة خيرية تدعم الأسر المحتاجة في غزة وتوفر المساعدات الإنسانية',
    chuffedPlatform: 'منصة Chuffed',
    chuffedDesc: 'منصة تبرعات عالمية تدعم القضايا الإنسانية في فلسطين',
    gofundmePlatform: 'منصة GoFundMe',
    gofundmeDesc: 'حملات تبرع متنوعة لدعم غزة والقضايا الإنسانية',
    googleAlternatives: 'بدائل جوجل',
    metaAlternatives: 'بدائل ميتا',
    replaceChrome: 'استبدال Chrome',
    replaceChromeDesc: 'متصفح حر ومفتوح المصدر يحمي خصوصيتك',
    replaceMaps: 'استبدال Maps',
    replaceMapsDesc: 'خدمة خرائط مستقلة بدون تتبع موقعك',
    replaceSheets: 'استبدال Sheets',
    replaceSheetsDesc: 'جداول بيانات حرة ومشفرة',
    replaceDocs: 'استبدال Docs',
    replaceDocsDesc: 'محرر مستندات يحترم خصوصيتك',
    replaceSlides: 'استبدال Slides',
    replaceSlidesDesc: 'أداة عروض تقديمية مستقلة',
    replaceGemini: 'استبدال Gemini',
    replaceGeminiDesc: 'ذكاء اصطناعي حر وشفاف',
    replaceGmail: 'استبدال Gmail',
    replaceGmailDesc: 'بريد إلكتروني مشفر وآمن',
    replaceCalendar: 'استبدال Calendar',
    replaceCalendarDesc: 'تقويم خاص لا يتتبع أنشطتك',
    replaceMeet: 'استبدال Meet',
    replaceMeetDesc: 'مكالمات فيديو مشفرة ومستقلة',
    replaceNotes: 'استبدال Notes',
    replaceNotesDesc: 'تطبيق ملاحظات يحمي بياناتك',
    replaceForms: 'استبدال Forms',
    replaceFormsDesc: 'نماذج حرة بدون جمع بيانات',
    replaceWhatsApp: 'استبدال WhatsApp',
    replaceWhatsAppDesc: 'تطبيق مراسلة مشفر بالكامل',
    replaceInstagram: 'استبدال Instagram',
    replaceInstagramDesc: 'شبكة اجتماعية تحترم خصوصيتك',
    replaceFacebook: 'استبدال Facebook',
    replaceFacebookDesc: 'منصة اجتماعية حرة ومفتوحة المصدر',
    urgent: 'عاجل',
    raised: 'تم جمع',
    goal: 'الهدف',
    funded: 'مكتمل',
    donateNow: 'تبرع الآن',
    importantNotice: 'إشعار مهم',
    verifiedProjects: 'جميع المشاريع تم التحقق منها والتأكد من جديتها',
    directFunding: 'التبرعات تذهب مباشرة لتطوير البدائل التقنية',
    transparentDevelopment: 'تطوير شفاف مع كود مفتوح المصدر',
    regularUpdates: 'تحديثات منتظمة عن تقدم التطوير',
    openSource: 'جميع المشاريع مفتوحة المصدر ومجانية',
    techAppeal: '💻 ساعدنا في بناء مستقبل تقني حر ومستقل عن عمالقة التكنولوجيا',
    
    // Tech Donations Link
    supportTechStartups: 'ادعم الشركات الناشئة التقنية',
    helpBuildAlternatives: 'ساعد في بناء بدائل تقنية حرة ومستقلة عن عمالقة التكنولوجيا',
    
    // Amazon Alternatives
    amazonAlternatives: 'بدائل أمازون',
    replaceAmazon: 'معمورة',
    replaceAmazonDesc: 'منصة تجارة عالمية حرة ومستقلة تدعم التجار المحليين وتحمي بيانات المستخدمين',
    globalMarketplaceEn: 'Global Marketplace',
    
    // Microsoft Alternatives
    microsoftAlternatives: 'بدائل مايكروسوفت',
    replaceWindows: 'استبدال Windows',
    replaceWindowsDesc: 'نظام تشغيل حر ومفتوح المصدر',
    replaceGithub: 'استبدال GitHub',
    replaceGithubDesc: 'منصة تطوير مستقلة للمطورين',
    replaceChatGPT: 'استبدال ChatGPT',
    replaceChatGPTDesc: 'ذكاء اصطناعي حر وشفاف',
    replaceDallE: 'استبدال DALL-E',
    replaceDallEDesc: 'مولد صور بالذكاء الاصطناعي مفتوح المصدر',
    
    // Apple Alternatives
    appleAlternatives: 'بدائل آبل',
    replaceIPhone: 'استبدال iPhone',
    replaceIPhoneDesc: 'هاتف ذكي يحترم خصوصيتك',
    replaceMac: 'استبدال Mac',
    replaceMacDesc: 'حاسوب محمول مفتوح المصدر',
    replaceHeadphones: 'استبدال AirPods',
    replaceHeadphonesDesc: 'سماعات لاسلكية مستقلة',
    
    // Status badges
    notYet: 'ليس بعد',
    ongoing: 'جاري العمل'
  },
  en: {
    // Navigation
    home: 'Home',
    book: 'Book',
    groups: 'Groups',
    march: 'To Gaza',
    
    // Site Name
    siteName: 'ALJAMAE',
    siteNameEn: 'ALJAMAE',
    
    // Home Page - Aljamae
    homeHeroTitle: 'ALJAMAE',
    homeHeroSubtitle: 'A Global Movement for Freedom and Truth',
    homeHeroDescription: 'Join thousands of resisters worldwide in exposing hidden agendas and fighting the forces that seek to control humanity. Together, we can change the world.',
    joinMovement: 'JOIN THE MOVEMENT',
    downloadApp: 'DOWNLOAD APP',
    fightForFreedom: 'FIGHTING FOR FREEDOM',
    
    // Home Features
    globalResistance: 'Global Resistance',
    globalResistanceDesc: 'A worldwide network of resisters exposing truth and fighting injustice everywhere.',
    secureComms: 'Secure Communications',
    secureCommsDesc: 'Aljamae app provides encrypted, secure communication away from surveillance and censorship.',
    truthExposed: 'Truth Exposed',
    truthExposedDesc: 'We expose hidden agendas and global conspiracies aimed at controlling populations.',
    
    // App Section
    theAljamaApp: 'The Aljamae App',
    appDescription: 'A secure, encrypted app for communication between movement members. Share information, organize events, and connect with resisters worldwide.',
    appFeatures: 'App Features',
    encryptedMessaging: 'Encrypted Messaging',
    anonymousGroups: 'Anonymous Groups',
    secureFileSharing: 'Secure File Sharing',
    eventOrganizing: 'Event Organizing',
    downloadNow: 'Download Now',
    comingSoon: 'Coming Soon',
    
    // Mission Section
    ourMission: 'Our Mission',
    missionDescription: 'We are a global movement aimed at exposing truth and fighting hidden forces that seek to control the world. We believe in peoples\' right to freedom and dignity.',
    joinResistance: 'Join the Resistance',
    
    // Book Page
    heroTitle: 'حثالة الأمم',
    heroSubtitle: 'Exposing the Devils of Our Time',
    heroDescription: 'A devastating expose in Arabic revealing the puppet masters who orchestrate global conflicts from the shadows. Discover the truth they don\'t want you to know about war, power, and the forces shaping our world.',
    getTruthNow: 'GET THE TRUTH NOW',
    learnMore: 'LEARN MORE',
    bannedByMainstream: 'BANNED BY MAINSTREAM',
    
    // About Section
    whatTheyDontWant: 'WHAT THEY DON\'T WANT YOU TO',
    know: 'KNOW',
    shadowNetworks: 'Shadow Networks',
    shadowNetworksDesc: 'Uncover the hidden networks of power that orchestrate global conflicts for profit and control.',
    warMachine: 'War Machine',
    warMachineDesc: 'How manufactured conflicts serve the interests of a select few while devastating entire populations.',
    hiddenAgenda: 'Hidden Agenda',
    hiddenAgendaDesc: 'The shocking truth about who really benefits from chaos, division, and perpetual warfare.',
    earlyReaderQuote: 'This book will shatter your worldview and reveal the terrifying reality of how power truly operates in our world. The evidence is overwhelming, the conclusions unavoidable.',
    earlyReaderReview: '- Early Reader Review',
    
    // Buy Section
    getYourCopy: 'GET YOUR COPY',
    today: 'TODAY',
    dontLetTruthHidden: 'Don\'t let the truth remain hidden. Arm yourself with knowledge that could change everything.',
    digitalEdition: 'Digital Edition Available Now',
    physicalCopies: 'Physical copies shipping soon',
    buyOnGumroad: 'Buy on Gumroad',
    freeBookRequest: 'Request Free Book',
    instantDownload: 'Instant Download',
    securePayment: 'Secure & Safe Payment',
    warningMessage: '⚠️ This book contains information that challenges Western narratives',
    
    // Contact Section
    contactThe: 'CONTACT THE',
    author: 'AUTHOR',
    contactDescription: 'Have questions about the book? Want to share your thoughts? Reach out directly.',
    getInTouch: 'Get In Touch',
    emailResponse: 'I read every email personally and try to respond within 24-48 hours.',
    
    // Groups Page
    joinThe: 'JOIN THE',
    resistance: 'RESISTANCE',
    connectTruthSeekers: 'Connect with like-minded truth seekers in our Telegram communities',
    secureAnonymous: 'Secure • Anonymous • Uncensored',
    members: 'members',
    joinGroup: 'Join Group',
    securityNotice: 'Security Notice',
    securityNoticeText: 'These groups are monitored spaces for legitimate discussion. Always use secure communication practices. We do not condone violence or illegal activities. Our mission is to spread awareness through peaceful means.',
    
    // March Page
    marchFor: 'MARCH FOR',
    truth: 'TRUTH',
    organizeJoinProtests: 'Organize and join peaceful protests to demand accountability and transparency',
    peacefulLegalImpactful: 'Peaceful • Legal • Impactful',
    upcomingMarches: 'Upcoming Marches',
    organizing: 'Organizing',
    planning: 'Planning',
    confirmed: 'Confirmed',
    joinMarch: 'Join March',
    getUpdates: 'Get Updates',
    organizeYourOwn: 'Organize Your Own March',
    organizeDescription: 'Can\'t find a march in your area? Start your own peaceful demonstration. We\'ll help you organize it properly and legally.',
    planningResources: 'Planning Resources',
    supportNetwork: 'Support Network',
    startOrganizing: 'Start Organizing',
    marchGuidelines: 'March Guidelines',
    
    // Footer
    truthCannotBeSuppressed: 'The truth cannot be suppressed forever.',
    allRightsReserved: 'All rights reserved.',
    
    // Telegram Groups
    
    // March Events
    globalDayOfTruth: 'Global Day of Truth',
    globalDayDesc: 'Peaceful demonstrations demanding transparency from world leaders',
    stopWarProfiteering: 'Stop War Profiteering',
    stopWarDesc: 'March against corporations that profit from endless conflicts',
    mediaAccountability: 'Media Accountability March',
    mediaAccountabilityDesc: 'Demanding honest reporting and end to propaganda',
    majorCitiesWorldwide: 'Major Cities Worldwide',
    washingtonLondonParis: 'Washington D.C., London, Paris',
    mediaHeadquarters: 'Media Headquarters Worldwide',
    
    // Donations Page
    urgentSupport: 'Urgent Support',
    campaigns: 'Projects',
    helpPeopleInNeed: 'Help support people in need and those affected around the world',
    everyDonationCounts: 'Every donation makes a difference',
    
    // Donation Platforms
    ummatyFoundation: 'UMMATY Foundation',
    ummatyDesc: 'Charitable foundation supporting families in need in Gaza and providing humanitarian aid',
    chuffedPlatform: 'Chuffed Platform',
    chuffedDesc: 'Global donation platform supporting humanitarian causes in Palestine',
    gofundmePlatform: 'GoFundMe Platform',
    gofundmeDesc: 'Various donation campaigns to support Gaza and humanitarian causes',
    googleAlternatives: 'Google Alternatives',
    metaAlternatives: 'Meta Alternatives',
    replaceChrome: 'Replace Chrome',
    replaceChromeDesc: 'Free and open-source browser that protects your privacy',
    replaceMaps: 'Replace Maps',
    replaceMapsDesc: 'Independent mapping service without location tracking',
    replaceSheets: 'Replace Sheets',
    replaceSheetsDesc: 'Free and encrypted spreadsheet application',
    replaceDocs: 'Replace Docs',
    replaceDocsDesc: 'Document editor that respects your privacy',
    replaceSlides: 'Replace Slides',
    replaceSlidesDesc: 'Independent presentation tool',
    replaceGemini: 'Replace Gemini',
    replaceGeminiDesc: 'Free and transparent artificial intelligence',
    replaceGmail: 'Replace Gmail',
    replaceGmailDesc: 'Encrypted and secure email service',
    replaceCalendar: 'Replace Calendar',
    replaceCalendarDesc: 'Private calendar that doesn\'t track your activities',
    replaceMeet: 'Replace Meet',
    replaceMeetDesc: 'Encrypted and independent video calls',
    replaceNotes: 'Replace Notes',
    replaceNotesDesc: 'Notes app that protects your data',
    replaceForms: 'Replace Forms',
    replaceFormsDesc: 'Free forms without data collection',
    replaceWhatsApp: 'Replace WhatsApp',
    replaceWhatsAppDesc: 'Fully encrypted messaging app',
    replaceInstagram: 'Replace Instagram',
    replaceInstagramDesc: 'Social network that respects your privacy',
    replaceFacebook: 'Replace Facebook',
    replaceFacebookDesc: 'Free and open-source social platform',
    urgent: 'Urgent',
    raised: 'Raised',
    goal: 'Goal',
    funded: 'Funded',
    donateNow: 'Donate Now',
    importantNotice: 'Important Notice',
    verifiedProjects: 'All projects are verified and confirmed legitimate',
    directFunding: 'Donations go directly to developing tech alternatives',
    transparentDevelopment: 'Transparent development with open source code',
    regularUpdates: 'Regular updates on development progress',
    openSource: 'All projects are open source and free',
    techAppeal: '💻 Help us build a free and independent tech future away from big tech giants',
    
    // Tech Donations Link
    supportTechStartups: 'Support Tech Startups',
    helpBuildAlternatives: 'Help build free and independent tech alternatives away from big tech giants',
    
    // Amazon Alternatives
    amazonAlternatives: 'Amazon Alternatives',
    replaceAmazon: 'Global Marketplace',
    replaceAmazonDesc: 'Free and independent global commerce platform supporting local merchants and protecting user data',
    globalMarketplaceEn: 'Global Marketplace',
    
    // Microsoft Alternatives
    microsoftAlternatives: 'Microsoft Alternatives',
    replaceWindows: 'Replace Windows',
    replaceWindowsDesc: 'Free and open-source operating system',
    replaceGithub: 'Replace GitHub',
    replaceGithubDesc: 'Independent development platform for developers',
    replaceChatGPT: 'Replace ChatGPT',
    replaceChatGPTDesc: 'Free and transparent artificial intelligence',
    replaceDallE: 'Replace DALL-E',
    replaceDallEDesc: 'Open-source AI image generator',
    
    // Apple Alternatives
    appleAlternatives: 'Apple Alternatives',
    replaceIPhone: 'Replace iPhone',
    replaceIPhoneDesc: 'Smartphone that respects your privacy',
    replaceMac: 'Replace Mac',
    replaceMacDesc: 'Open-source laptop computer',
    replaceHeadphones: 'Replace AirPods',
    replaceHeadphonesDesc: 'Independent wireless headphones',
    
    // Status badges
    notYet: 'Not Yet',
    ongoing: 'Ongoing'
  }
};

export const LanguageContext = createContext({
  language: 'ar' as 'ar' | 'en',
  toggleLanguage: () => {},
  t: (key: string) => key
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}