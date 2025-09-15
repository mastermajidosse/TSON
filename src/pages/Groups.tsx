import React, { useContext } from 'react';
import { MessageCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function GroupsPage() {
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