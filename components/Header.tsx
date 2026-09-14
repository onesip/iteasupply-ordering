import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const copy = language === 'en'
    ? {
        platform: 'Platform',
        features: 'Features',
        pricing: 'Pricing',
        resources: 'Resources',
        why: 'Why I\'TEA',
        demo: 'Book a live demo',
        badge: 'Bubble tea operating system',
      }
    : {
        platform: '平台',
        features: '功能',
        pricing: '价格',
        resources: '资源',
        why: '为什么选择 I\'TEA',
        demo: '预约现场演示',
        badge: '奶茶店一体化运营系统',
      };

  const navLinks = [
    { name: copy.platform, path: '/' },
    { name: copy.features, path: '/features' },
    { name: copy.why, path: '/why-orderpin' },
    { name: copy.pricing, path: '/pricing' },
    { name: copy.resources, path: '/resources' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-emerald-950/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-black tracking-tight text-white shadow-lg shadow-emerald-600/20">
            IT
          </div>
          <div>
            <div className="text-[19px] font-black tracking-[-0.035em] text-slate-950">I'TEA SUPPLY</div>
            <div className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700 sm:block">{copy.badge}</div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active ? 'bg-emerald-50 text-emerald-800' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
            aria-label="Switch language"
          >
            <Globe2 className="h-4 w-4" />
            {language === 'en' ? '中文' : 'EN'}
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:bg-emerald-700"
          >
            {copy.demo}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl p-2 text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-5 shadow-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white"
            >
              {copy.demo}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
