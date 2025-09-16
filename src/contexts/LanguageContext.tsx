import React, { createContext, useState } from 'react';

// Translations
const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    book: 'الكتاب',
    groups: 'المجموعات',
    march: 'المسيرات',
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
    heroTitle: 'حثالة الأمم',
    heroSubtitle: 'كشف العدو الحقيقي',
    heroDescription: 'كتاب عن الابادة الجماعية وكيف وصل الحال بالمسلمين حول العالم بمئات الملايين الى التواطئ والخنوع. اكتشف الحقيقة التي لا يريدونك أن تعرفها عن الحرب والسلطة والقوى التي تشكل عالمنا وكيف تواجهها وتقتلها للأبد',
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
    today: 'اليوم',
    dontLetTruthHidden: 'لا تدع الحقيقة تبقى مخفية. سلح نفسك بالمعرفة التي يمكن أن تغير كل شيء.',
    digitalEdition: 'النسخة الرقمية متاحة الآن',
    physicalCopies: 'النسخ المطبوعة قريباً',
    payWithPaypal: 'ادفع بـ PayPal',
    directPurchase: 'شراء مباشر',
    instantDownload: 'تحميل فوري',
    moneyBackGuarantee: 'ضمان استرداد المال لمدة 30 يوماً',
    warningMessage: '⚠️ تحذير: يحتوي هذا الكتاب على معلومات تتحدى الروايات السائدة',
    
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
    secureAnonymous: 'آمن • مجهول • غير خاضع للرقابة',
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
    truthSeekersUnited: 'متحدون في البحث عن الحقيقة',
    truthSeekersDesc: 'مجموعة النقاش الرئيسية للقراء والباحثين عن الحقيقة',
    scumReadersGroup: 'قراء حثالة الأمم',
    scumReadersDesc: 'مجموعة حصرية لقراء الكتاب لمناقشة الكشوفات',
    globalAwakening: 'الصحوة العالمية',
    globalAwakeningDesc: 'مجتمع دولي لكشف المؤامرات العالمية',
    warCrimesExposed: 'جرائم الحرب المكشوفة',
    warCrimesDesc: 'توثيق وكشف جرائم الحرب في جميع أنحاء العالم',
    shadowNetworksIntel: 'استخبارات الشبكات الخفية',
    shadowNetworksIntelDesc: 'تبادل المعلومات الاستخباراتية حول هياكل السلطة الخفية',
    resistanceNetwork: 'شبكة المقاومة',
    resistanceNetworkDesc: 'تنظيم المقاومة السلمية ضد القمع',
    
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
    supportGaza: 'دعم غزة',
    campaigns: 'الحملات',
    helpRebuildLives: 'ساعد في إعادة بناء الحياة وتوفير الاحتياجات الأساسية للعائلات المتضررة',
    everyDonationCounts: 'كل تبرع يحدث فرقاً',
    rebuildHomes: 'إعادة بناء المنازل',
    rebuildHomesDesc: 'ساعد العائلات في إعادة بناء منازلهم المدمرة وإعادة حياتهم الطبيعية',
    emergencyFood: 'طعام طارئ',
    emergencyFoodDesc: 'توفير وجبات غذائية أساسية للعائلات المحتاجة والأطفال',
    medicalSupplies: 'المستلزمات الطبية',
    medicalSuppliesDesc: 'أدوية ومعدات طبية ضرورية للمستشفيات والعيادات',
    childrenEducation: 'تعليم الأطفال',
    childrenEducationDesc: 'دعم تعليم الأطفال وتوفير المواد الدراسية والكتب',
    familySupport: 'دعم العائلات',
    familySupportDesc: 'مساعدة مالية مباشرة للعائلات الأكثر احتياجاً',
    waterSanitation: 'المياه والصرف الصحي',
    waterSanitationDesc: 'إصلاح شبكات المياه وتوفير مياه نظيفة وآمنة',
    urgent: 'عاجل',
    raised: 'تم جمع',
    goal: 'الهدف',
    funded: 'مكتمل',
    donateNow: 'تبرع الآن',
    importantNotice: 'إشعار مهم',
    verifiedCampaigns: 'جميع الحملات تم التحقق منها والتأكد من صحتها',
    directDonations: 'التبرعات تذهب مباشرة للمستفيدين دون وسطاء',
    transparentUse: 'استخدام شفاف للأموال مع تقارير دورية',
    regularUpdates: 'تحديثات منتظمة عن تقدم المشاريع',
    taxDeductible: 'التبرعات قابلة للخصم الضريبي في معظم البلدان',
    emergencyAppeal: '🚨 نداء عاجل: الوضع في غزة يتطلب مساعدة فورية. كل دولار يمكن أن ينقذ حياة.'
  },
  en: {
    // Navigation
    home: 'Home',
    book: 'Book',
    groups: 'Groups',
    march: 'March',
    
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
    payWithPaypal: 'Pay with PayPal',
    directPurchase: 'Direct Purchase',
    instantDownload: 'Instant Download',
    moneyBackGuarantee: '30-Day Money Back Guarantee',
    warningMessage: '⚠️ WARNING: This book contains information that challenges mainstream narratives',
    
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
    truthSeekersUnited: 'Truth Seekers United',
    truthSeekersDesc: 'Main discussion group for readers and truth seekers',
    scumReadersGroup: 'حثالة الأمم Readers',
    scumReadersDesc: 'Exclusive group for book readers to discuss revelations',
    globalAwakening: 'Global Awakening',
    globalAwakeningDesc: 'International community exposing global conspiracies',
    warCrimesExposed: 'War Crimes Exposed',
    warCrimesDesc: 'Documenting and exposing war crimes worldwide',
    shadowNetworksIntel: 'Shadow Networks Intel',
    shadowNetworksIntelDesc: 'Intelligence sharing about hidden power structures',
    resistanceNetwork: 'Resistance Network',
    resistanceNetworkDesc: 'Organizing peaceful resistance against oppression',
    
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
    supportGaza: 'Support Gaza',
    campaigns: 'Campaigns',
    helpRebuildLives: 'Help rebuild lives and provide essential needs for affected families',
    everyDonationCounts: 'Every donation makes a difference',
    rebuildHomes: 'Rebuild Homes',
    rebuildHomesDesc: 'Help families rebuild their destroyed homes and restore their normal lives',
    emergencyFood: 'Emergency Food',
    emergencyFoodDesc: 'Provide essential meals for families in need and children',
    medicalSupplies: 'Medical Supplies',
    medicalSuppliesDesc: 'Essential medicines and medical equipment for hospitals and clinics',
    childrenEducation: 'Children\'s Education',
    childrenEducationDesc: 'Support children\'s education and provide school materials and books',
    familySupport: 'Family Support',
    familySupportDesc: 'Direct financial assistance for families most in need',
    waterSanitation: 'Water & Sanitation',
    waterSanitationDesc: 'Repair water networks and provide clean, safe water',
    urgent: 'Urgent',
    raised: 'Raised',
    goal: 'Goal',
    funded: 'Funded',
    donateNow: 'Donate Now',
    importantNotice: 'Important Notice',
    verifiedCampaigns: 'All campaigns are verified and confirmed authentic',
    directDonations: 'Donations go directly to beneficiaries without intermediaries',
    transparentUse: 'Transparent use of funds with regular reports',
    regularUpdates: 'Regular updates on project progress',
    taxDeductible: 'Donations are tax-deductible in most countries',
    emergencyAppeal: '🚨 Emergency Appeal: The situation in Gaza requires immediate help. Every dollar can save a life.'
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