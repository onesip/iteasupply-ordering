import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Activity, ArrowRight, BarChart3, ChevronDown, Cpu, Gift, Layers3, Package, Smartphone, Tag } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type ViewKind = 'analytics' | 'loyalty' | 'catalog' | 'production' | 'mobile' | 'label';

const config: Record<string, { icon: any; views: ViewKind[] }> = {
  machine: { icon: Cpu, views: ['production', 'label', 'catalog'] },
  loyalty: { icon: Gift, views: ['loyalty', 'mobile', 'analytics'] },
  'online-ordering': { icon: Smartphone, views: ['mobile', 'catalog', 'loyalty'] },
  'waterproof-labels': { icon: Tag, views: ['label', 'production', 'catalog'] },
  inventory: { icon: Package, views: ['catalog', 'analytics', 'production'] },
  reports: { icon: BarChart3, views: ['analytics', 'loyalty', 'production'] },
  'all-in-one': { icon: Layers3, views: ['analytics', 'catalog', 'mobile'] },
  transparency: { icon: Activity, views: ['production', 'analytics', 'loyalty'] },
};

const labels: Record<ViewKind, [string, string]> = {
  analytics: ['Analytics', '数据分析'], loyalty: ['Loyalty', '会员'], catalog: ['Catalog', '商品管理'], production: ['Production', '生产'], mobile: ['Mobile ordering', '手机点单'], label: ['Production label', '制作标签'],
};

const FeatureDetail = () => {
  const { featureId } = useParams();
  const { t, language } = useLanguage();
  const en = language === 'en';
  const uiLanguage = en ? 'en' : 'zh';
  const data = t(`featureDetails.${featureId}`);
  const visual = config[featureId || ''] || config['all-in-one'];
  const [activeView, setActiveView] = useState<ViewKind>(visual.views[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!data || typeof data === 'string' || !data.title) return <Navigate to="/features" replace />;
  const VisualIcon = visual.icon;

  const copy = en
    ? { back: 'All features', feature: 'PLATFORM FEATURE', result: 'WHAT IT DELIVERS', product: 'PRODUCT VIEW', productTitle: 'See how this part of the system works.', faq: 'Common questions', demo: 'Book a demo', connected: 'Works better as part of one connected system.' }
    : { back: '全部功能', feature: '平台功能', result: '它能带来的结果', product: '产品界面', productTitle: '直接查看这部分系统如何工作。', faq: '常见问题', demo: '预约演示', connected: '作为一套完整系统的一部分，价值更大。' };

  return (
    <div className="min-h-screen bg-white pt-16 text-slate-950">
      <section className="border-b border-slate-200 bg-white py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8">
          <div>
            <Link to="/features" className="text-[12px] font-medium text-slate-500 hover:text-emerald-700">← {copy.back}</Link>
            <div className="mt-7 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700"><VisualIcon className="h-3.5 w-3.5" />{copy.feature}</div>
            <h1 className="mt-4 text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[48px] lg:text-[54px]">{data.title}</h1>
            <p className="mt-5 max-w-xl text-[16px] leading-7 text-slate-600">{data.subtitle}</p>
            <Link to="/contact" className="mt-7 inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-[13px] font-semibold text-white hover:bg-emerald-700">{copy.demo}<ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-[#f7f8f8] p-4"><LiveSystemView kind={visual.views[0]} language={uiLanguage} /></div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.result}</div><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] sm:text-[36px]">{data.result}</h2></div>
          <div className="border-y border-slate-200">
            {data.how && data.how.map((item: string, i: number) => <div key={i} className="grid grid-cols-[36px_1fr] gap-4 border-b border-slate-200 py-4 last:border-b-0"><span className="text-[10px] text-slate-400">0{i + 1}</span><p className="text-[14px] leading-6 text-slate-700">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#fafafa] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.68fr_1.32fr] lg:px-8">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.product}</div>
            <h2 className="mt-4 max-w-md text-[30px] font-semibold leading-tight tracking-[-0.035em] sm:text-[36px]">{copy.productTitle}</h2>
            <div className="mt-7 border-y border-slate-200">
              {visual.views.map((view, index) => {
                const selected = activeView === view;
                return <button key={view} onClick={() => setActiveView(view)} className={`flex w-full items-center justify-between border-b border-slate-200 py-4 text-left last:border-b-0 ${selected ? 'text-slate-950' : 'text-slate-500 hover:text-slate-950'}`}><span className="flex items-center gap-3"><span className="text-[10px] text-slate-400">0{index + 1}</span><span className="text-[13px] font-semibold">{en ? labels[view][0] : labels[view][1]}</span></span><ArrowRight className={`h-3.5 w-3.5 ${selected ? 'text-emerald-700' : 'text-slate-300'}`} /></button>;
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.3)]"><LiveSystemView kind={activeView} language={uiLanguage} /></div>
        </div>
      </section>

      {data.scenario && <section className="py-16"><div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8"><div className="border-l-2 border-emerald-700 pl-6"><div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">{data.scenario.role}</div><p className="mt-3 text-[22px] font-medium leading-8 tracking-[-0.02em] text-slate-900">“{data.scenario.quote}”</p></div></div></section>}

      <section className="border-t border-slate-200 py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em]">{copy.faq}</h2>
          <div className="mt-7 border-y border-slate-200">
            {data.faq && data.faq.map((item: any, i: number) => {
              const open = openFaq === i;
              return <div key={i} className="border-b border-slate-200 last:border-b-0"><button onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left"><span className="text-[14px] font-semibold text-slate-900">{item.q}</span><ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition ${open ? 'rotate-180' : ''}`} /></button>{open && <p className="pb-5 pr-10 text-[13px] leading-6 text-slate-600">{item.a}</p>}</div>;
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#fafafa] py-14"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8"><h2 className="max-w-2xl text-[27px] font-semibold tracking-[-0.03em]">{copy.connected}</h2><Link to="/contact" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 text-[13px] font-semibold text-white hover:bg-emerald-800">{copy.demo}<ArrowRight className="h-4 w-4" /></Link></div></section>
    </div>
  );
};

export default FeatureDetail;
