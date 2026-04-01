import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always dark text on white background if scrolled or not on home page
  const isHome = location.pathname === '/';
  const headerBg = isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
  const textColor = isScrolled || !isHome ? 'text-slate-900' : 'text-white';
  const buttonBg = isScrolled || !isHome ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-900 hover:bg-emerald-50';

  const navLinks = [
    { name: t('nav.home'), path: 'https://itea-supply-bv.odoo.com/' },
    { name: t('nav.why'), path: '/why-orderpin' },
    { name: t('nav.features'), path: '/features' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.resources'), path: '/resources' },
    { name: t('nav.strategy'), path: '/strategy-session' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`text-2xl font-bold tracking-tighter transition-colors ${textColor}`}>
              I'TEA SUPPLY
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.path.startsWith('http') ? (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium hover:text-emerald-500 transition-colors ${textColor}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-medium hover:text-emerald-500 transition-colors ${textColor}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-medium hover:text-emerald-500 transition-colors ${textColor}`}
            >
              <Globe className="w-4 h-4" />
              {language === 'zh' ? 'EN' : '中'}
            </button>

            <Link 
              to="/contact"
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg ${buttonBg}`}
            >
              {t('nav.bookDemo')}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-medium ${textColor}`}
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={textColor}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            link.path.startsWith('http') ? (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-800 font-medium py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-slate-800 font-medium py-2 border-b border-slate-50"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="bg-emerald-600 text-white py-3 rounded-lg font-bold text-center"
          >
            {t('nav.bookDemo')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
