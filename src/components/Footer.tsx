import React, { useContext } from 'react';
import { Shield } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useContext(LanguageContext);
  
  return (
    <footer className="bg-black py-8 border-t border-amber-600/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4 md:mb-0">
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