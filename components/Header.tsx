import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Globe2, Menu, X } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const en = language === 'en';

  const copy = en
    ? { platform: 'Platform', features: 'Features', why: 'Why I\'TEA', pricing: 'Pricing', resources: 'Resources', demo: 'Book demo' }
    : { platform: '平台', features: '功能', why: '为什么选择 I\'TEA', pricing: '价格', resources: '资源', demo: '预约演示' };

  const links = [
    [copy.platform, '/'],
    [copy.features, '/features'],
    [copy.why, '/why-orderpin'],
    [copy.pricing, '/pricing'],
    [copy.resources, '/resources'],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/96 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-semibold tracking-tight text-white">IT</span>
          <span className="text-[16px] font-semibold tracking-[-0.025em] text-slate-950">I&apos;TEA SUPPLY</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([name, path]) => {
            const active = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
            return <Link key={path} to={path} className={`text-[13px] font-medium transition ${active ? 'text-slate-950' : 'text-slate-500 hover:text-slate-950'}`}>{name}</Link>;
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={() => setLanguage(en ? 'zh' : 'en')} className="inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-[12px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900" aria-label="Switch language">
            <Globe2 className="h-3.5 w-3.5" /> {en ? '中文' : 'EN'}
          </button>
          <Link to="/contact" className="inline-flex h-9 items-center gap-1.5 rounded-md bg-slate-950 px-4 text-[12px] font-semibold text-white transition hover:bg-emerald-700">{copy.demo}<ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button onClick={() => setLanguage(en ? 'zh' : 'en')} className="rounded-md px-2.5 py-2 text-[11px] font-medium text-slate-600">{en ? '中文' : 'EN'}</button>
          <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-slate-800 hover:bg-slate-50" aria-label="Toggle menu">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto max-w-7xl">
            {links.map(([name, path]) => <Link key={path} to={path} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-[14px] font-medium text-slate-800">{name}</Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-slate-950 text-[13px] font-semibold text-white">{copy.demo}<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
