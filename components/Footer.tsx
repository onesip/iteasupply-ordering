import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu, Gift } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const copy = isEn
    ? {
        desc: 'A connected ordering, loyalty and automation platform built for bubble tea operations.',
        product: 'Platform',
        company: 'Company',
        start: 'Get started',
        features: 'All features',
        machine: 'Machine integration',
        loyalty: 'Loyalty & points',
        pricing: 'Pricing',
        why: 'Why I\'TEA SUPPLY',
        resources: 'Resources',
        contact: 'Contact',
        demo: 'Book a live demo',
        rights: 'All rights reserved.',
        privacy: 'Privacy',
        terms: 'Terms',
      }
    : {
        desc: '专为奶茶运营打造，把下单、会员和自动化连接在一起的一体化平台。',
        product: '平台',
        company: '公司',
        start: '开始使用',
        features: '全部功能',
        machine: '奶茶机联动',
        loyalty: '会员与积分',
        pricing: '价格',
        why: '为什么选择 I\'TEA SUPPLY',
        resources: '资源',
        contact: '联系我们',
        demo: '预约现场演示',
        rights: '保留所有权利。',
        privacy: '隐私',
        terms: '条款',
      };

  return (
    <footer className="border-t border-emerald-950/10 bg-slate-950 py-14 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-black text-white">IT</div>
              <div>
                <div className="text-xl font-black tracking-[-0.03em] text-white">I'TEA SUPPLY</div>
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400">Bubble tea operating system</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">{copy.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300"><Cpu className="h-3.5 w-3.5 text-emerald-400" /> Machine</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300"><Gift className="h-3.5 w-3.5 text-emerald-400" /> Loyalty</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white">{copy.product}</h4>
            <div className="mt-4 space-y-3 text-sm font-semibold">
              <Link to="/features" className="block hover:text-emerald-400">{copy.features}</Link>
              <Link to="/features/machine" className="block hover:text-emerald-400">{copy.machine}</Link>
              <Link to="/features/loyalty" className="block hover:text-emerald-400">{copy.loyalty}</Link>
              <Link to="/pricing" className="block hover:text-emerald-400">{copy.pricing}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white">{copy.company}</h4>
            <div className="mt-4 space-y-3 text-sm font-semibold">
              <Link to="/why-orderpin" className="block hover:text-emerald-400">{copy.why}</Link>
              <Link to="/resources" className="block hover:text-emerald-400">{copy.resources}</Link>
              <Link to="/contact" className="block hover:text-emerald-400">{copy.contact}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white">{copy.start}</h4>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-400">
              {copy.demo} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} I'TEA SUPPLY. {copy.rights}</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">{copy.privacy}</a>
            <a href="#" className="hover:text-white">{copy.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
