import React, { useContext } from 'react';
import { Megaphone, Globe, AlertTriangle } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function MarchPage() {
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
    <div className="py-[13%] min-h-screen bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
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