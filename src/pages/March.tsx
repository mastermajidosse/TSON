import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Users, Globe, Heart, MessageCircle, Megaphone, ShoppingCart } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function MarchPage() {
  const { t, language } = useContext(LanguageContext);
  
  const participatingCountries = [
    { name: 'الجزائر', flag: '🇩🇿', status: 'confirmed' },
    { name: 'أستراليا', flag: '🇦🇺', status: 'confirmed' },
    { name: 'النمسا', flag: '🇦🇹', status: 'confirmed' },
    { name: 'البحرين', flag: '🇧🇭', status: 'confirmed' },
    { name: 'بنغلاديش', flag: '🇧🇩', status: 'confirmed' },
    { name: 'بلجيكا', flag: '🇧🇪', status: 'confirmed' },
    { name: 'البرازيل', flag: '🇧🇷', status: 'confirmed' },
    { name: 'كولومبيا', flag: '🇨🇴', status: 'confirmed' },
    { name: 'قبرص', flag: '🇨🇾', status: 'confirmed' },
    { name: 'الدنمارك', flag: '🇩🇰', status: 'confirmed' },
    { name: 'فنلندا', flag: '🇫🇮', status: 'confirmed' },
    { name: 'فرنسا', flag: '🇫🇷', status: 'confirmed' },
    { name: 'ألمانيا', flag: '🇩🇪', status: 'confirmed' },
    { name: 'اليونان', flag: '🇬🇷', status: 'confirmed' },
    { name: 'إندونيسيا', flag: '🇮🇩', status: 'confirmed' },
    { name: 'أيرلندا', flag: '🇮🇪', status: 'confirmed' },
    { name: 'إيطاليا', flag: '🇮🇹', status: 'confirmed' },
    { name: 'الأردن', flag: '🇯🇴', status: 'confirmed' },
    { name: 'الكويت', flag: '🇰🇼', status: 'confirmed' },
    { name: 'ليبيا', flag: '🇱🇾', status: 'confirmed' },
    { name: 'لوكسمبورغ', flag: '🇱🇺', status: 'confirmed' },
    { name: 'ماليزيا', flag: '🇲🇾', status: 'confirmed' },
    { name: 'المالديف', flag: '🇲🇻', status: 'confirmed' },
    { name: 'المكسيك', flag: '🇲🇽', status: 'confirmed' },
    { name: 'باكستان', flag: '🇵🇰', status: 'confirmed' },
    { name: 'الفلبين', flag: '🇵🇭', status: 'confirmed' },
    { name: 'جنوب أفريقيا', flag: '🇿🇦', status: 'confirmed' },
    { name: 'إسبانيا', flag: '🇪🇸', status: 'confirmed' },
    { name: 'سريلانكا', flag: '🇱🇰', status: 'confirmed' },
    { name: 'السويد', flag: '🇸🇪', status: 'confirmed' },
    { name: 'سويسرا', flag: '🇨🇭', status: 'confirmed' },
    { name: 'تايلاند', flag: '🇹🇭', status: 'confirmed' },
    { name: 'تونس', flag: '🇹🇳', status: 'confirmed' },
    { name: 'تركيا', flag: '🇹🇷', status: 'confirmed' },
    { name: 'المملكة المتحدة', flag: '🇬🇧', status: 'confirmed' },
    { name: 'الولايات المتحدة', flag: '🇺🇸', status: 'confirmed' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-green-900/20 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                  {language === 'ar' ? 'انضم للحركة' : 'JOIN THE MOVEMENT'}
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-green-400">
                  {language === 'ar' ? 'ندعو المتطوعين للانضمام إلى طاقم البحر والبر وأن يكونوا جزءاً من مهمة تاريخية' : 'We\'re calling on volunteers to join our sea and land crews and be part of a historic mission.'}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  {language === 'ar' ? 'شارك الآن' : 'GET INVOLVED'}
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  {language === 'ar' ? 'تبرع' : 'DONATE'}
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-green-600/30">
                  <img 
                    src="https://images.pexels.com/photos/8828678/pexels-photo-8828678.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Gaza Support Movement" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 md:py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 text-gray-900">
              {language === 'ar' ? 'وفود من جميع أنحاء العالم' : 'DELEGATIONS FROM ACROSS THE WORLD'}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-12 leading-relaxed">
              {language === 'ar' 
                ? 'وفود من 45 دولة التزمت بالفعل بالإبحار إلى غزة كجزء من أكبر مهمة بحرية لكسر الحصار غير القانوني لإسرائيل.'
                : 'Delegations from 45 countries have already committed to sail to Gaza as part of the largest maritime mission to break Israel\'s illegal siege.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Participating Countries */}
      <section className="py-12 md:py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">
              {language === 'ar' ? 'الدول المشاركة' : 'Participating Countries'}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {participatingCountries.map((country, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-green-500/50 transition-all text-center">
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">{country.name}</h4>
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-900/20 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-black mb-8 text-white">
              {language === 'ar' ? 'كن جزءاً من التاريخ' : 'BE PART OF HISTORY'}
            </h3>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              {language === 'ar' 
                ? 'انضم إلى آلاف المتطوعين من جميع أنحاء العالم في مهمة تاريخية لكسر الحصار وإيصال المساعدات الإنسانية إلى غزة.'
                : 'Join thousands of volunteers from around the world in a historic mission to break the siege and deliver humanitarian aid to Gaza.'
              }
            </p>
            
            <div className="bg-black/60 p-6 md:p-8 rounded-lg border-2 border-green-600/50">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 mb-4">
                <Ship className="w-6 h-6" />
                {language === 'ar' ? 'انضم للمهمة' : 'GET INVOLVED'}
              </button>
              
              <p className="text-gray-400 text-sm">
                {language === 'ar' 
                  ? 'سجل اهتمامك وسنتواصل معك بالتفاصيل'
                  : 'Register your interest and we\'ll contact you with details'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-black py-6 md:py-8 border-t border-green-600/30">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <Globe className="w-4 h-4" />
                {t('home')}
              </Link>
              <Link
                to="/book"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <ShoppingCart className="w-4 h-4" />
                {t('book')}
              </Link>
              <Link
                to="/groups"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                {t('groups')}
              </Link>
              <Link
                to="/march"
                className="flex items-center gap-2 text-green-400 font-semibold px-2 text-sm md:text-base"
              >
                <Ship className="w-4 h-4" />
                {t('march')}
              </Link>
              <Link
                to="/donations"
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <Heart className="w-4 h-4" />
                {t('donations')}
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}