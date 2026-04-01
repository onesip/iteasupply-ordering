import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../src/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tighter">I'TEA SUPPLY</span>
            <p className="text-sm mt-4 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-emerald-400 transition-colors">{t('nav.features')}</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-400 transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link to="/features/machine" className="hover:text-emerald-400 transition-colors">{t('features.machineTitle')}</Link></li>
              <li><Link to="/features/waterproof-labels" className="hover:text-emerald-400 transition-colors">{t('features.labelsTitle')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/why-itea-supply" className="hover:text-emerald-400 transition-colors">{t('nav.why')}</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/resources" className="hover:text-emerald-400 transition-colors">{t('nav.resources')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.getStarted')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/strategy-session" className="hover:text-emerald-400 transition-colors">{t('nav.strategy')}</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">{t('nav.bookDemo')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} I'TEA SUPPLY. {t('footer.rights')}.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
