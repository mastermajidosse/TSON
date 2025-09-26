import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, MessageCircle, Megaphone, ShoppingCart, ExternalLink } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function DonationsPage() {
  const { t } = useContext(LanguageContext);
  
  const donationPlatforms = [
    {
      title: t('ummatyFoundation'),
      description: t('ummatyDesc'),
      link: 'https://ummaty.org/gaza',
      color: 'blue'
    },
    {
      title: t('chuffedPlatform'),
      description: t('chuffedDesc'),
      link: 'https://chuffed.org/palestine',
      color: 'green'
    },
    {
      title: t('gofundmePlatform'),
      description: t('gofundmeDesc'),
      link: 'https://www.gofundme.com/s?q=gaza',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {t('urgentSupport')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('helpPeopleInNeed')}
            </p>
            <div className="flex items-center justify-center gap-2 text-red-600">
              <Heart className="w-6 h-6" />
              <span className="font-bold">{t('everyDonationCounts')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Platforms Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {donationPlatforms.map((platform, index) => {
                const colorClasses = {
                  blue: 'border-blue-500 hover:border-blue-600 hover:shadow-blue-100',
                  green: 'border-green-500 hover:border-green-600 hover:shadow-green-100',
                  purple: 'border-purple-500 hover:border-purple-600 hover:shadow-purple-100'
                };
                
                const buttonClasses = {
                  blue: 'bg-blue-600 hover:bg-blue-700',
                  green: 'bg-green-600 hover:bg-green-700',
                  purple: 'bg-purple-600 hover:bg-purple-700'
                };
                
                return (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-lg border-2 ${colorClasses[platform.color as keyof typeof colorClasses]} hover:shadow-lg transition-all transform hover:scale-105 group`}
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {platform.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                      {platform.description}
                    </p>
                    
                    <div className="text-center">
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 ${buttonClasses[platform.color as keyof typeof buttonClasses]} text-white px-6 py-3 rounded-lg font-bold text-sm transition-all transform hover:scale-105`}
                      >
                        <span>{t('donateNow')}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Donations Link Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/tech-donations"
              className="block bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all transform hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {t('supportTechStartups')}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {t('helpBuildAlternatives')}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-700 transition-colors">
                    <span>{t('learnMore')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center">
                <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('importantNotice')}</h3>
                <div className="text-left max-w-3xl mx-auto text-gray-700 space-y-3">
                  <p>• {t('verifiedProjects')}</p>
                  <p>• {t('directFunding')}</p>
                  <p>• {t('transparentDevelopment')}</p>
                  <p>• {t('regularUpdates')}</p>
                  <p>• {t('openSource')}</p>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-semibold">
                    {t('techAppeal')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-gray-900 py-6 md:py-8 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <Globe className="w-4 h-4" />
                {t('home')}
              </Link>
              <Link
                to="/book"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <ShoppingCart className="w-4 h-4" />
                {t('book')}
              </Link>
              <Link
                to="/groups"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4" />
                {t('groups')}
              </Link>
              <Link
                to="/march"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 font-semibold transition-colors px-2 text-sm md:text-base"
              >
                <Megaphone className="w-4 h-4" />
                {t('march')}
              </Link>
              <Link
                to="/donations"
                className="flex items-center gap-2 text-blue-400 font-semibold px-2 text-sm md:text-base"
              >
                <Heart className="w-4 h-4" />
                {t('donations')}
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}