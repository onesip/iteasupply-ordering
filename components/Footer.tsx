import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { iteaLogo } from '../src/assets/iteaLogo';

const SUPPLY_SITE = 'https://itea-supply-bv.odoo.com/zh_CN';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const copy = en
    ? { desc: 'Smart ordering, loyalty and production technology for beverage businesses — backed by installation, training, maintenance and ongoing support.', platform: 'Platform', company: 'Company', features: 'Features', machine: 'Machine integration', loyalty: 'Loyalty', pricing: 'Pricing', why: 'Why I\'TEA', resources: 'Resources', contact: 'Contact', demo: 'Book demo', rights: 'All rights reserved.', website: "Visit I'TEA Supply" }
    : { desc: '面向饮品门店的智能点单、会员与生产技术平台，并提供安装、培训、维护和持续售后支持。', platform: '平台', company: '公司', features: '功能', machine: '奶茶机联动', loyalty: '会员', pricing: '价格', why: '为什么选择 I\'TEA', resources: '资源', contact: '联系我们', demo: '预约演示', rights: '保留所有权利。', website: '访问 I\'TEA Supply 官网' };

  return (
    <footer className="border-t border-[#3b2118] bg-[#241109] py-10 text-[#c9b9b0] sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 md:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr] md:gap-10">
          <div className="max-w-sm">
            <a href={SUPPLY_SITE} className="inline-flex rounded-md bg-[#fffaf6] px-2.5 py-2" aria-label={copy.website}>
              <img src={iteaLogo} alt="I'TEA" className="h-[27px] w-auto object-contain" />
            </a>
            <p className="mt-4 text-[12px] leading-6 text-[#9f8c83] sm:text-[13px]">{copy.desc}</p>
            <a href={SUPPLY_SITE} className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#c9b9b0] hover:text-white">{copy.website}<ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
          <div><div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#806b61] sm:text-[11px]">{copy.platform}</div><div className="mt-4 space-y-2.5 text-[13px]"><Link to="/features" className="block hover:text-white">{copy.features}</Link><Link to="/features/machine" className="block hover:text-white">{copy.machine}</Link><Link to="/features/loyalty" className="block hover:text-white">{copy.loyalty}</Link><Link to="/pricing" className="block hover:text-white">{copy.pricing}</Link></div></div>
          <div><div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#806b61] sm:text-[11px]">{copy.company}</div><div className="mt-4 space-y-2.5 text-[13px]"><Link to="/why-orderpin" className="block hover:text-white">{copy.why}</Link><Link to="/resources" className="block hover:text-white">{copy.resources}</Link><Link to="/contact" className="block hover:text-white">{copy.contact}</Link></div></div>
          <div><Link to="/contact" className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-md border border-white/20 px-3.5 text-[12px] font-semibold text-white transition hover:border-[#c89b7b] hover:text-[#f0d2bd] md:w-auto">{copy.demo}<ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
        </div>
        <div className="mt-9 border-t border-white/10 pt-5 text-[11px] text-[#725f56] sm:mt-10">© {new Date().getFullYear()} I&apos;TEA SUPPLY. {copy.rights}</div>
      </div>
    </footer>
  );
};

export default Footer;
