import React, { useContext } from 'react';
import { ShoppingCart, Eye, Users, Globe, AlertTriangle, Mail } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function BookPage() {
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