import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Globe, MessageCircle, Megaphone, Languages, ShoppingCart } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function Navigation() {
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
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Shield className="text-amber-500 w-8 h-8" />
            <div className="rtl:mr-3 ltr:ml-3">
              <h1 className="text-xl font-black text-white">
                {t('siteName')}
              </h1>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
              {navItems.map(({ path, label, icon: Icon }, index) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 font-semibold transition-colors px-2 ${
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