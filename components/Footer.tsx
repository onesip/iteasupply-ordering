import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const copy = en
    ? { desc: 'Connected ordering, loyalty and production technology for bubble tea operations.', platform: 'Platform', company: 'Company', features: 'Features', machine: 'Machine integration', loyalty: 'Loyalty', pricing: 'Pricing', why: 'Why I\'TEA', resources: 'Resources', contact: 'Contact', demo: 'Book demo', rights: 'All rights reserved.' }
    : { desc: '为奶茶门店连接点单、会员与生产流程的一体化技术平台。', platform: '平台', company: '公司', features: '功能', machine: '奶茶机联动', loyalty: '会员', pricing: '价格', why: '为什么选择 I\'TEA', resources: '资源', contact: '联系我们', demo: '预约演示', rights: '保留所有权利。' };

  return (
    <footer className="border-t border-slate-800 bg-[#0b1110] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <div className="text-[16px] font-semibold tracking-[-0.02em] text-white">I&apos;TEA SUPPLY</div>
            <p className="mt-3 text-[13px] leading-6 text-slate-500">{copy.desc}</p>
          </div>
          <div><div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{copy.platform}</div><div className="mt-4 space-y-2.5 text-[13px]"><Link to="/features" className="block hover:text-white">{copy.features}</Link><Link to="/features/machine" className="block hover:text-white">{copy.machine}</Link><Link to="/features/loyalty" className="block hover:text-white">{copy.loyalty}</Link><Link to="/pricing" className="block hover:text-white">{copy.pricing}</Link></div></div>
          <div><div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{copy.company}</div><div className="mt-4 space-y-2.5 text-[13px]"><Link to="/why-orderpin" className="block hover:text-white">{copy.why}</Link><Link to="/resources" className="block hover:text-white">{copy.resources}</Link><Link to="/contact" className="block hover:text-white">{copy.contact}</Link></div></div>
          <div><Link to="/contact" className="inline-flex h-9 items-center gap-1.5 rounded-md border border-white/15 px-3.5 text-[12px] font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-300">{copy.demo}<ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-5 text-[11px] text-slate-600">© {new Date().getFullYear()} I&apos;TEA SUPPLY. {copy.rights}</div>
      </div>
    </footer>
  );
};

export default Footer;
