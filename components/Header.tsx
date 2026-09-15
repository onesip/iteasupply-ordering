import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Globe2, Menu, X } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { BRAND_LOGO } from '../src/assets/brandLogo';

const SUPPLY_SITE = 'https://itea-supply-bv.odoo.com/zh_CN';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const en = language === 'en';

  const copy = en
    ? { platform: 'Platform', features: 'Features', why: 'Why I\'TEA', pricing: 'Pricing', resources: 'Resources', demo: 'Book demo', supply: "Back to I'TEA Supply" }
    : { platform: '平台', features: '功能', why: '为什么选择 I\'TEA', pricing: '价格', resources: '资源', demo: '预约演示', supply: '返回 I\'TEA Supply 官网' };

  const links = [
    [copy.platform, '/'],
    [copy.features, '/features'],
    [copy.why, '/why-orderpin'],
    [copy.pricing, '/pricing'],
    [copy.resources, '/resources'],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadfd6] bg-[#fffdfb]/96 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={SUPPLY_SITE} className="flex min-w-0 items-center" aria-label={copy.supply} title={copy.supply}>
          <img src={BRAND_LOGO} alt="I'TEA" className="h-[31px] w-auto object-contain sm:h-[34px]" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([name, path]) => {
            const active = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
            return <Link key={path} to={path} className={`text-[13px] font-medium transition ${active ? 'text-[#391A10]' : 'text-[#79665d] hover:text-[#391A10]'}`}>{name}</Link>;
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button onClick={() => setLanguage(en ? 'zh' : 'en')} className="inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-[12px] font-medium text-[#79665d] transition hover:bg-[#f7f1ec] hover:text-[#391A10]" aria-label="Switch language">
            <Globe2 className="h-3.5 w-3.5" /> {en ? '中文' : 'EN'}
          </button>
          <Link to="/contact" className="inline-flex h-9 items-center gap-1.5 rounded-md bg-[#391A10] px-4 text-[12px] font-semibold text-white transition hover:bg-[#5a2a1a]">{copy.demo}<ArrowUpRight className="h-3.5 w-3.5" /></Link>
        </div>

        <div className="flex shrink-0 items-center gap-0.5 lg:hidden">
          <button onClick={() => setLanguage(en ? 'zh' : 'en')} className="min-h-11 rounded-md px-2.5 text-[11px] font-medium text-[#6c5a52]" aria-label="Switch language">{en ? '中文' : 'EN'}</button>
          <button onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-md text-[#391A10] hover:bg-[#f7f1ec]" aria-label="Toggle menu">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#eadfd6] bg-[#fffdfb] px-4 pb-5 pt-2 shadow-lg lg:hidden">
          <div className="mx-auto max-w-7xl">
            {links.map(([name, path]) => <Link key={path} to={path} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-[#efe6df] text-[14px] font-medium text-[#4b3026]">{name}</Link>)}
            <a href={SUPPLY_SITE} className="mt-2 flex min-h-12 items-center justify-between border-b border-[#efe6df] text-[13px] font-medium text-[#79665d]">{copy.supply}<ArrowUpRight className="h-4 w-4" /></a>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#391A10] px-4 text-[13px] font-semibold text-white">{copy.demo}<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
