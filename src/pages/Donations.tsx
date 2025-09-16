import React, { useContext } from 'react';
import { Heart, Home, Utensils, Stethoscope, GraduationCap, ExternalLink } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function DonationsPage() {
  const { t } = useContext(LanguageContext);
  
  const campaigns = [
    {
      title: t('rebuildHomes'),
      description: t('rebuildHomesDesc'),
      icon: Home,
      goal: '$50,000',
      raised: '$23,450',
      link: 'https://gofundme.com/rebuild-gaza-homes',
      urgent: true
    },
    {
      title: t('emergencyFood'),
      description: t('emergencyFoodDesc'),
      icon: Utensils,
      goal: '$25,000',
      raised: '$18,200',
      link: 'https://gofundme.com/gaza-emergency-food',
      urgent: true
    },
    {
      title: t('medicalSupplies'),
      description: t('medicalSuppliesDesc'),
      icon: Stethoscope,
      goal: '$75,000',
      raised: '$41,800',
      link: 'https://gofundme.com/gaza-medical-aid',
      urgent: false
    },
    {
      title: t('childrenEducation'),
      description: t('childrenEducationDesc'),
      icon: GraduationCap,
      goal: '$30,000',
      raised: '$12,600',
      link: 'https://gofundme.com/gaza-children-education',
      urgent: false
    },
    {
      title: t('familySupport'),
      description: t('familySupportDesc'),
      icon: Heart,
      goal: '$40,000',
      raised: '$28,900',
      link: 'https://gofundme.com/gaza-family-support',
      urgent: true
    },
    {
      title: t('waterSanitation'),
      description: t('waterSanitationDesc'),
      icon: Home,
      goal: '$35,000',
      raised: '$19,750',
      link: 'https://gofundme.com/gaza-water-sanitation',
      urgent: false
    }
  ];

  return (
    <div className="py-[13%] min-h-screen bg-gradient-to-br from-gray-900 via-red-900/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              {t('supportGaza')} <span className="text-red-400">{t('campaigns')}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {t('helpRebuildLives')}
            </p>
            <div className="flex items-center justify-center gap-2 text-red-400">
              <Heart className="w-6 h-6" />
              <span className="font-bold">{t('everyDonationCounts')}</span>
            </div>
          </div>

          {/* Campaigns Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {campaigns.map((campaign, index) => {
              const Icon = campaign.icon;
              const progressPercentage = Math.round((parseFloat(campaign.raised.replace('$', '').replace(',', '')) / parseFloat(campaign.goal.replace('$', '').replace(',', ''))) * 100);
              
              return (
                <a
                  key={index}
                  href={campaign.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group relative"
                >
                  {campaign.urgent && (
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {t('urgent')}
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                      {campaign.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    {campaign.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{t('raised')}: {campaign.raised}</span>
                      <span>{t('goal')}: {campaign.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-red-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-bold text-red-600">{progressPercentage}% {t('funded')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-red-600 font-bold">
                    <span>{t('donateNow')}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Important Notice */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('importantNotice')}</h3>
              <div className="text-left max-w-3xl mx-auto text-gray-700 space-y-3">
                <p>• {t('verifiedCampaigns')}</p>
                <p>• {t('directDonations')}</p>
                <p>• {t('transparentUse')}</p>
                <p>• {t('regularUpdates')}</p>
                <p>• {t('taxDeductible')}</p>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-red-800 font-semibold">
                  {t('emergencyAppeal')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}