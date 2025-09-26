import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, MessageCircle, Megaphone, ShoppingCart, Chrome, Mail, Calendar, FileText, Presentation, Bot, MapPin, Grid, Clipboard, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function TechDonationsPage() {
  const { t } = useContext(LanguageContext);
  
  const amazonAlternatives = [
    {
      title: t('replaceAmazon'),
      description: t('replaceAmazonDesc'),
      icon: ShoppingCart,
      goal: '$150,000',
      raised: '$12,500',
      link: 'https://gofundme.com/replace-amazon',
      isOngoing: true
    }
  ];

  const googleAlternatives = [
    {
      title: t('replaceChrome'),
      description: t('replaceChromeDesc'),
      icon: Chrome,
      goal: '$50,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-chrome',
    },
    {
      title: t('replaceMaps'),
      description: t('replaceMapsDesc'),
      icon: MapPin,
      goal: '$75,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-maps',
    },
    {
      title: t('replaceSheets'),
      description: t('replaceSheetsDesc'),
      icon: Grid,
      goal: '$40,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-sheets',
    },
    {
      title: t('replaceDocs'),
      description: t('replaceDocsDesc'),
      icon: FileText,
      goal: '$45,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-docs',
    },
    {
      title: t('replaceSlides'),
      description: t('replaceSlidesDesc'),
      icon: Presentation,
      goal: '$35,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-slides',
    },
    {
      title: t('replaceGemini'),
      description: t('replaceGeminiDesc'),
      icon: Bot,
      goal: '$100,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-gemini',
    },
    {
      title: t('replaceGmail'),
      description: t('replaceGmailDesc'),
      icon: Mail,
      goal: '$60,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-gmail',
    },
    {
      title: t('replaceCalendar'),
      description: t('replaceCalendarDesc'),
      icon: Calendar,
      goal: '$30,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-calendar',
    },
    {
      title: t('replaceMeet'),
      description: t('replaceMeetDesc'),
      icon: MessageSquare,
      goal: '$55,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-meet',
    },
    {
      title: t('replaceNotes'),
      description: t('replaceNotesDesc'),
      icon: FileText,
      goal: '$25,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-notes',
    },
    {
      title: t('replaceForms'),
      description: t('replaceFormsDesc'),
      icon: Clipboard,
      goal: '$35,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-forms',
    }
  ];

  const metaAlternatives = [
    {
      title: t('replaceWhatsApp'),
      description: t('replaceWhatsAppDesc'),
      icon: MessageSquare,
      goal: '$80,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-whatsapp',
    },
    {
      title: t('replaceInstagram'),
      description: t('replaceInstagramDesc'),
      icon: Instagram,
      goal: '$90,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-instagram',
    },
    {
      title: t('replaceFacebook'),
      description: t('replaceFacebookDesc'),
      icon: Facebook,
      goal: '$120,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-facebook',
    }
  ];

  const microsoftAlternatives = [
    {
      title: t('replaceWindows'),
      description: t('replaceWindowsDesc'),
      icon: Chrome,
      goal: '$200,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-windows',
    },
    {
      title: t('replaceOffice'),
      description: t('replaceOfficeDesc'),
      icon: FileText,
      goal: '$150,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-office',
    },
    {
      title: t('replaceTeams'),
      description: t('replaceTeamsDesc'),
      icon: MessageSquare,
      goal: '$80,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-teams',
    }
  ];

  const appleAlternatives = [
    {
      title: t('replaceiOS'),
      description: t('replaceiOSDesc'),
      icon: Chrome,
      goal: '$300,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-ios',
    },
    {
      title: t('replacemacOS'),
      description: t('replacemacOSDesc'),
      icon: Chrome,
      goal: '$250,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-macos',
    },
    {
      title: t('replaceSafari'),
      description: t('replaceSafariDesc'),
      icon: Chrome,
      goal: '$60,000',
      raised: '$0',
      link: 'https://gofundme.com/replace-safari',
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {t('supportTechStartups')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('helpBuildAlternatives')}
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <Heart className="w-6 h-6" />
              <span className="font-bold">{t('everyDonationCounts')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Alternatives Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
              {t('amazonAlternatives')}
            </h2>
            
            <div className="max-w-md mx-auto mb-12">
              {amazonAlternatives.map((project, index) => {
                const Icon = project.icon;
                const raisedAmount = parseInt(project.raised.replace(/[$,]/g, ''));
                const goalAmount = parseInt(project.goal.replace(/[$,]/g, ''));
                const progressPercentage = Math.round((raisedAmount / goalAmount) * 100);
                
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all transform hover:scale-105 group relative"
                  >
                    {/* Ongoing Badge */}
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {t('ongoing')}
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{t('raised')}: {project.raised}</span>
                        <span>{t('goal')}: {project.goal}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-bold text-orange-600">{progressPercentage}% {t('funded')}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-orange-600 font-bold text-sm">{t('donateNow')}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Google Alternatives Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
              {t('googleAlternatives')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {googleAlternatives.map((project, index) => {
                const Icon = project.icon;
                const raisedAmount = parseInt(project.raised.replace(/[$,]/g, ''));
                const goalAmount = parseInt(project.goal.replace(/[$,]/g, ''));
                const progressPercentage = Math.round((raisedAmount / goalAmount) * 100);
                
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all transform hover:scale-105 group relative"
                  >
                    {/* Not Yet Badge */}
                    {!project.isOngoing && (
                      <div className="absolute top-3 right-3 bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {t('notYet')}
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{t('raised')}: {project.raised}</span>
                        <span>{t('goal')}: {project.goal}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-bold text-blue-600">{progressPercentage}% {t('funded')}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-blue-600 font-bold text-sm">{t('donateNow')}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Meta Alternatives Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
              {t('metaAlternatives')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {metaAlternatives.map((project, index) => {
                const Icon = project.icon;
                const raisedAmount = parseInt(project.raised.replace(/[$,]/g, ''));
                const goalAmount = parseInt(project.goal.replace(/[$,]/g, ''));
                const progressPercentage = Math.round((raisedAmount / goalAmount) * 100);
                
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all transform hover:scale-105 group relative"
                  >
                    {/* Not Yet Badge */}
                    {!project.isOngoing && (
                      <div className="absolute top-3 right-3 bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {t('notYet')}
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{t('raised')}: {project.raised}</span>
                        <span>{t('goal')}: {project.goal}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-bold text-purple-600">{progressPercentage}% {t('funded')}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-purple-600 font-bold text-sm">{t('donateNow')}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Microsoft Alternatives Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
              {t('microsoftAlternatives')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {microsoftAlternatives.map((project, index) => {
                const Icon = project.icon;
                const raisedAmount = parseInt(project.raised.replace(/[$,]/g, ''));
                const goalAmount = parseInt(project.goal.replace(/[$,]/g, ''));
                const progressPercentage = Math.round((raisedAmount / goalAmount) * 100);
                
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all transform hover:scale-105 group relative"
                  >
                    {/* Not Yet Badge */}
                    {!project.isOngoing && (
                      <div className="absolute top-3 right-3 bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {t('notYet')}
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{t('raised')}: {project.raised}</span>
                        <span>{t('goal')}: {project.goal}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-bold text-indigo-600">{progressPercentage}% {t('funded')}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-indigo-600 font-bold text-sm">{t('donateNow')}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Apple Alternatives Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
              {t('appleAlternatives')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {appleAlternatives.map((project, index) => {
                const Icon = project.icon;
                const raisedAmount = parseInt(project.raised.replace(/[$,]/g, ''));
                const goalAmount = parseInt(project.goal.replace(/[$,]/g, ''));
                const progressPercentage = Math.round((raisedAmount / goalAmount) * 100);
                
                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-500 hover:shadow-lg transition-all transform hover:scale-105 group relative"
                  >
                    {/* Not Yet Badge */}
                    {!project.isOngoing && (
                      <div className="absolute top-3 right-3 bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {t('notYet')}
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-gray-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-center text-sm">
                      {project.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{t('raised')}: {project.raised}</span>
                        <span>{t('goal')}: {project.goal}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gray-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm font-bold text-gray-600">{progressPercentage}% {t('funded')}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-gray-600 font-bold text-sm">{t('donateNow')}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

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