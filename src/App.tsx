import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, ShoppingCart, Users, AlertTriangle, Eye, Globe, MessageCircle, Megaphone, ExternalLink, Languages, Shield, Zap, Target, Download, Smartphone, Lock } from 'lucide-react';

// Language Context
const LanguageContext = createContext({
  language: 'ar',
  toggleLanguage: () => {},
  t: (key: string) => key
});

// Translations
const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    book: 'الكتاب',
    groups: 'المجموعات',
    march: 'المسيرات',
    
    // Site Name
    siteName: 'الجامع',
    siteNameEn: 'ALJAMAE',
    
    // Home Page - Aljamae
    homeHeroTitle: 'الجامع',
    homeHeroSubtitle: 'حركة عالمية من أجل الحرية والحقيقة',
    homeHeroDescription: 'انضم إلى آلاف المقاومين حول العالم في كشف الأجندة الخفية ومحاربة القوى التي تسعى للسيطرة على البشرية. معاً نستطيع تغيير العالم.',
    joinMovement: 'انضم للحركة',
    downloadApp: 'حمل التطبيق',
    fightForFreedom: 'نحارب من أجل الحرية',
    
    // Home Features
    globalResistance: 'مقاومة عالمية',
    globalResistanceDesc: 'شبكة عالمية من المقاومين الذين يكشفون الحقيقة ويحاربون الظلم في كل مكان.',
    secureComms: 'تواصل آمن',
    secureCommsDesc: 'تطبيق الجامع يوفر تواصلاً مشفراً وآمناً بعيداً عن أعين المراقبة والرقابة.',
    truthExposed: 'كشف الحقيقة',
    truthExposedDesc: 'نكشف الأجندة الخفية والمؤامرات العالمية التي تهدف للسيطرة على الشعوب.',
    
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
    missionDescription: 'نحن حركة عالمية تهدف لكشف الحقيقة ومحاربة القوى الخفية التي تسعى للسيطرة على العالم. نؤمن بحق الشعوب في الحرية والكرامة.',
    joinResistance: 'انضم للمقاومة',
    
    // Book Page
    heroTitle: 'قرن الشيطان',
    heroSubtitle: 'كشف شياطين عصرنا',
    heroDescription: 'كتاب مدمر باللغة العربية يكشف عن محركي الدمى الذين ينظمون الصراعات العالمية من الظلال. اكتشف الحقيقة التي لا يريدونك أن تعرفها عن الحرب والسلطة والقوى التي تشكل عالمنا.',
    getTruthNow: 'احصل على الحقيقة الآن',
    learnMore: 'اعرف المزيد',
    bannedByMainstream: 'محظور من الإعلام الرئيسي',
    
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
    scumReadersGroup: 'قراء قرن الشيطان',
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
    mediaHeadquarters: 'مقرات الإعلام حول العالم'
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
    heroTitle: 'THE SCUM OF NATIONS',
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
    scumReadersGroup: 'Scum of Nations Readers',
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
    mediaHeadquarters: 'Media Headquarters Worldwide'
  }
};

// Language Provider Component
function LanguageProvider({ children }: { children: React.ReactNode }) {
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

// Navigation Component
function Navigation() {
  const location = useLocation();
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  
  const navItems = [
    { path: '/', label: t('home'), icon: Globe },
    { path: '/book', label: t('book'), icon: ShoppingCart },
    { path: '/groups', label: t('groups'), icon: MessageCircle },
    { path: '/march', label: t('march'), icon: Megaphone },
  ];

  return (
    <header className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-amber-600/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="text-amber-500 w-8 h-8" />
            <div>
              <h1 className="text-xl font-black text-white">
                {t('siteName')}
              </h1>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex space-x-6">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 font-semibold transition-colors ${
                    location.pathname === path
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
            </nav>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 px-3 py-2 rounded-lg font-semibold transition-all"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm">{language === 'ar' ? 'EN' : 'عر'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Home Page Component (Aljamae)
function HomePage() {
  const { t } = useContext(LanguageContext);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-red-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-6xl lg:text-8xl font-black text-white leading-tight">
                  {t('homeHeroTitle')}
                </h2>
                <p className="text-xl font-semibold text-red-400">{t('homeHeroSubtitle')}</p>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('homeHeroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  {t('joinMovement')}
                </button>
                <button className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  {t('downloadApp')}
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-600 via-red-800 to-black rounded-full shadow-2xl flex items-center justify-center">
                  <Shield className="w-32 h-32 text-amber-400" />
                </div>
                <div className="absolute -top-4 -right-4 bg-red-800 text-amber-200 px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                  {t('fightForFreedom')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                <Users className="w-12 h-12 text-amber-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{t('globalResistance')}</h4>
                <p className="text-gray-400">{t('globalResistanceDesc')}</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-red-800/30 hover:border-red-700/50 transition-all">
                <Lock className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{t('secureComms')}</h4>
                <p className="text-gray-400">{t('secureCommsDesc')}</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                <Eye className="w-12 h-12 text-amber-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{t('truthExposed')}</h4>
                <p className="text-gray-400">{t('truthExposedDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black mb-8 text-white">
                {t('theAljamaApp')}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {t('appDescription')}
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-black/60 p-8 rounded-lg border-2 border-amber-600/50">
                  <h4 className="text-2xl font-bold text-amber-400 mb-6">{t('appFeatures')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                      <span className="text-white font-semibold">{t('encryptedMessaging')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-green-500" />
                      <span className="text-white font-semibold">{t('anonymousGroups')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-green-500" />
                      <span className="text-white font-semibold">{t('secureFileSharing')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-green-500" />
                      <span className="text-white font-semibold">{t('eventOrganizing')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-black rounded-3xl shadow-2xl border-4 border-amber-600/30 flex items-center justify-center">
                    <Smartphone className="w-24 h-24 text-amber-400" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                      {t('downloadNow')} - {t('comingSoon')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-black mb-8 text-white">
              {t('ourMission')}
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {t('missionDescription')}
            </p>
            
            <div className="bg-gradient-to-r from-red-900/20 via-amber-900/10 to-black/50 p-8 rounded-lg border border-amber-600/30">
              <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto">
                <Shield className="w-6 h-6" />
                {t('joinResistance')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Book Page Component
function BookPage() {
  const { t } = useContext(LanguageContext);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-red-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  {t('heroTitle')}
                </h2>
                <p className="text-xl font-semibold text-red-400">{t('heroSubtitle')}</p>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#buy" 
                  className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t('getTruthNow')}
                </a>
                <a 
                  href="#about" 
                  className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  {t('learnMore')}
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-amber-600 via-red-800 to-black rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/cover(1)(1).png" 
                    alt="The Scum of Nations Book Cover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-red-800 text-amber-200 px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                  {t('bannedByMainstream')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-center mb-12 text-white">
              {t('whatTheyDontWant')} <span className="text-amber-400">{t('know')}</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                <Users className="w-12 h-12 text-amber-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{t('shadowNetworks')}</h4>
                <p className="text-gray-400">{t('shadowNetworksDesc')}</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-red-800/30 hover:border-red-700/50 transition-all">
                <Globe className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{t('warMachine')}</h4>
                <p className="text-gray-400">{t('warMachineDesc')}</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                <AlertTriangle className="w-12 h-12 text-amber-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{t('hiddenAgenda')}</h4>
                <p className="text-gray-400">{t('hiddenAgendaDesc')}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/20 via-amber-900/10 to-black/50 p-8 rounded-lg border border-amber-600/30">
              <blockquote className="text-xl italic text-gray-300 text-center leading-relaxed">
                "{t('earlyReaderQuote')}"
              </blockquote>
              <p className="text-amber-400 text-center mt-4 font-bold">{t('earlyReaderReview')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="py-20 bg-gradient-to-br from-red-900/20 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-black mb-8 text-white">
              {t('getYourCopy')} <span className="text-amber-400">{t('today')}</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12">
              {t('dontLetTruthHidden')}
            </p>
            
            <div className="bg-black/60 p-8 rounded-lg border-2 border-amber-600/50 max-w-md mx-auto">
              <div className="mb-6">
                <div className="text-3xl font-black text-white mb-2">$19.99</div>
                <div className="text-gray-400">{t('digitalEdition')}</div>
                <div className="text-sm text-amber-400 mt-1">{t('physicalCopies')}</div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-red-800 hover:bg-red-900 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  {t('payWithPaypal')}
                </button>
                
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all border-2 border-gray-600 hover:border-amber-500">
                  {t('directPurchase')}
                </button>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>{t('instantDownload')}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>{t('moneyBackGuarantee')}</span>
                </div>
              </div>
            </div>
            
            <p className="text-amber-400 font-bold mt-8 text-lg">
              {t('warningMessage')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl font-black mb-8 text-white">
              {t('contactThe')} <span className="text-amber-400">{t('author')}</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12">
              {t('contactDescription')}
            </p>
            
            <div className="bg-gray-800/50 p-8 rounded-lg border border-amber-600/30">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Mail className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-bold text-white">{t('getInTouch')}</span>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:author@scumofnations.com" 
                  className="block bg-red-800 hover:bg-red-900 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
                >
                  author@scumofnations.com
                </a>
                
                <p className="text-gray-400 text-sm">
                  {t('emailResponse')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Groups Page Component
function GroupsPage() {
  const { t } = useContext(LanguageContext);
  
  const telegramGroups = [
    {
      name: t('truthSeekersUnited'),
      description: t('truthSeekersDesc'),
      members: "12.5K",
      link: "https://t.me/truthseekersunited"
    },
    {
      name: t('scumReadersGroup'),
      description: t('scumReadersDesc'),
      members: "8.2K",
      link: "https://t.me/scumofnationsreaders"
    },
    {
      name: t('globalAwakening'),
      description: t('globalAwakeningDesc'),
      members: "25.1K",
      link: "https://t.me/globalawakening"
    },
    {
      name: t('warCrimesExposed'),
      description: t('warCrimesDesc'),
      members: "15.7K",
      link: "https://t.me/warcrimes_exposed"
    },
    {
      name: t('shadowNetworksIntel'),
      description: t('shadowNetworksIntelDesc'),
      members: "9.8K",
      link: "https://t.me/shadownetworks"
    },
    {
      name: t('resistanceNetwork'),
      description: t('resistanceNetworkDesc'),
      members: "18.3K",
      link: "https://t.me/resistancenetwork"
    }
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              {t('joinThe')} <span className="text-amber-400">{t('resistance')}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {t('connectTruthSeekers')}
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <MessageCircle className="w-6 h-6" />
              <span className="font-bold">{t('secureAnonymous')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {telegramGroups.map((group, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-700 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {group.name}
                      </h3>
                      <p className="text-amber-400 text-sm font-semibold">{group.members} {t('members')}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {group.description}
                </p>
                
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-800 hover:bg-red-900 text-white py-3 px-4 rounded-lg font-bold text-center transition-all transform hover:scale-105"
                >
                  {t('joinGroup')}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-900/20 via-amber-900/10 to-black/50 p-8 rounded-lg border border-amber-600/30">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('securityNotice')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('securityNoticeText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// March Page Component
function MarchPage() {
  const { t } = useContext(LanguageContext);
  
  const upcomingMarches = [
    {
      title: t('globalDayOfTruth'),
      date: "March 15, 2025",
      location: t('majorCitiesWorldwide'),
      description: t('globalDayDesc'),
      status: t('organizing')
    },
    {
      title: t('stopWarProfiteering'),
      date: "April 22, 2025",
      location: t('washingtonLondonParis'),
      description: t('stopWarDesc'),
      status: t('planning')
    },
    {
      title: t('mediaAccountability'),
      date: "May 10, 2025",
      location: t('mediaHeadquarters'),
      description: t('mediaAccountabilityDesc'),
      status: t('confirmed')
    }
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              {t('marchFor')} <span className="text-amber-400">{t('truth')}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {t('organizeJoinProtests')}
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <Megaphone className="w-6 h-6" />
              <span className="font-bold">{t('peacefulLegalImpactful')}</span>
            </div>
          </div>

          {/* Upcoming Marches */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('upcomingMarches')}</h2>
            <div className="space-y-6">
              {upcomingMarches.map((march, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-amber-600/30 hover:border-amber-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{march.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                        <span className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {march.location}
                        </span>
                        <span>{march.date}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        march.status === t('confirmed') ? 'bg-green-800 text-green-200' :
                        march.status === t('organizing') ? 'bg-amber-800 text-amber-200' :
                        'bg-red-800 text-red-200'
                      }`}>
                        {march.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {march.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                      {t('joinMarch')}
                    </button>
                    <button className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-6 py-3 rounded-lg font-bold transition-all">
                      {t('getUpdates')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organize Your Own March */}
          <div className="bg-gradient-to-r from-red-900/20 via-amber-900/10 to-black/50 p-8 rounded-lg border border-amber-600/30 mb-12">
            <div className="text-center mb-6">
              <Megaphone className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('organizeYourOwn')}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('organizeDescription')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-amber-400 mb-3">{t('planningResources')}</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Legal requirements and permits</li>
                  <li>• Safety guidelines and protocols</li>
                  <li>• Media outreach templates</li>
                  <li>• Volunteer coordination tools</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-amber-400 mb-3">{t('supportNetwork')}</h4>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Connect with local organizers</li>
                  <li>• Access to promotional materials</li>
                  <li>• Legal support and advice</li>
                  <li>• Post-event impact measurement</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                {t('startOrganizing')}
              </button>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-gray-800/30 p-8 rounded-lg border border-red-800/30">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">{t('marchGuidelines')}</h3>
              <div className="text-left max-w-2xl mx-auto text-gray-300 space-y-3">
                <p>• All marches must be peaceful and non-violent</p>
                <p>• Obtain proper permits and follow local laws</p>
                <p>• Respect private property and public spaces</p>
                <p>• Maintain dignity and focus on the message</p>
                <p>• Document everything for transparency</p>
                <p>• Coordinate with local authorities for safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  const { language, t } = useContext(LanguageContext);
  
  return (
    <footer className="bg-black py-8 border-t border-amber-600/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Shield className="text-amber-500 w-6 h-6" />
            <div>
              <span className="font-bold text-white">
                {t('siteName')}
              </span>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© 2025 Aljamae. {t('allRightsReserved')}</p>
            <p className="mt-1">{t('truthCannotBeSuppressed')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/march" element={<MarchPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;