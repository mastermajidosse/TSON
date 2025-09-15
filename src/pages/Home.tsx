import React, { useContext } from 'react';
import { Shield, Users, Lock, Eye, Download, Smartphone, MessageCircle, Target } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function HomePage() {
  const { t } = useContext(LanguageContext);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-red-900/20 to-black">
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