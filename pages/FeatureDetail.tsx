import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Gift,
  HelpCircle,
  Layers3,
  Package,
  Smartphone,
  Tag,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type ViewKind = 'analytics' | 'loyalty' | 'catalog' | 'production' | 'mobile' | 'label';

const featureVisualConfig: Record<string, { icon: any; accent: string; views: ViewKind[] }> = {
  machine: { icon: Cpu, accent: 'bg-slate-950 text-emerald-300', views: ['production', 'label', 'catalog'] },
  loyalty: { icon: Gift, accent: 'bg-emerald-600 text-white', views: ['loyalty', 'mobile', 'analytics'] },
  'online-ordering': { icon: Smartphone, accent: 'bg-emerald-600 text-white', views: ['mobile', 'catalog', 'loyalty'] },
  'waterproof-labels': { icon: Tag, accent: 'bg-cyan-600 text-white', views: ['label', 'production', 'catalog'] },
  inventory: { icon: Package, accent: 'bg-amber-500 text-white', views: ['catalog', 'analytics', 'production'] },
  reports: { icon: BarChart3, accent: 'bg-blue-600 text-white', views: ['analytics', 'loyalty', 'production'] },
  'all-in-one': { icon: Layers3, accent: 'bg-violet-600 text-white', views: ['analytics', 'catalog', 'mobile'] },
  transparency: { icon: Activity, accent: 'bg-slate-900 text-white', views: ['production', 'analytics', 'loyalty'] },
};

const viewLabel = (view: ViewKind, isEn: boolean) => {
  const labels: Record<ViewKind, [string, string]> = {
    analytics: ['Analytics', '数据分析'],
    loyalty: ['Loyalty', '会员'],
    catalog: ['Catalog', '商品管理'],
    production: ['Production', '生产'],
    mobile: ['Mobile ordering', '手机点单'],
    label: ['Production label', '制作标签'],
  };
  return isEn ? labels[view][0] : labels[view][1];
};

const FeatureDetail = () => {
  const { featureId } = useParams();
  const { t, language } = useLanguage();
  const isEn = language === 'en';
  const uiLanguage = isEn ? 'en' : 'zh';
  const data = t(`featureDetails.${featureId}`);

  if (!data || typeof data === 'string' || !data.title) {
    return <Navigate to="/features" replace />;
  }

  const visual = featureVisualConfig[featureId || ''] || featureVisualConfig['all-in-one'];
  const VisualIcon = visual.icon;
  const [activeView, setActiveView] = useState<ViewKind>(visual.views[0]);

  const copy = isEn
    ? {
        back: 'View all features',
        feature: 'PLATFORM FEATURE',
        result: 'WHAT IT DELIVERS',
        product: 'PRODUCT VIEW',
        productTitle: 'Explore this part of the system.',
        productDesc: 'Switch between the most relevant views to understand how the workflow behaves in practice.',
        faq: 'Common questions',
        unified: 'Better when it works as one system.',
        unifiedDesc: 'Ordering, loyalty, production, notifications and analytics are designed to stay connected through the same operating flow.',
        demo: 'Book a live demo',
      }
    : {
        back: '查看全部功能',
        feature: '平台功能',
        result: '它能带来的结果',
        product: '产品界面',
        productTitle: '直接查看这部分系统如何工作。',
        productDesc: '在相关界面之间切换，快速理解实际运营流程。',
        faq: '常见问题',
        unified: '连成一套系统，价值更大。',
        unifiedDesc: '下单、会员、生产、通知和数据分析始终保持在同一条运营链路中。',
        demo: '预约现场演示',
      };

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden bg-[#f7fbf8] py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
          <div>
            <Link to="/features" className="inline-flex items-center gap-2 text-sm font-black text-emerald-700 transition hover:gap-3 hover:text-emerald-900">← {copy.back}</Link>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
              <VisualIcon className="h-4 w-4" /> {copy.feature}
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.01] tracking-[-0.05em] sm:text-6xl">{data.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{data.subtitle}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-700">
              {copy.demo} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[34px] bg-slate-950 p-3 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.6)]">
            <div className="rounded-[27px] bg-white p-3">
              <LiveSystemView kind={visual.views[0]} language={uiLanguage} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{copy.result}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{data.result}</h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {data.how && data.how.map((item: string, i: number) => (
              <div key={i} className="grid grid-cols-[42px_1fr] gap-4 py-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><CheckCircle2 className="h-4 w-4" /></div>
                <p className="pt-1 text-base font-semibold leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9f8] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{copy.product}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.productTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{copy.productDesc}</p>

              <div className="mt-8 space-y-2">
                {visual.views.map((view, index) => {
                  const active = activeView === view;
                  return (
                    <button
                      key={view}
                      type="button"
                      onClick={() => setActiveView(view)}
                      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition duration-300 ${active ? 'border-emerald-200 bg-white shadow-lg shadow-emerald-900/5' : 'border-transparent bg-transparent hover:border-slate-200 hover:bg-white/70'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-black ${active ? 'bg-emerald-600 text-white' : 'bg-white text-slate-400 shadow-sm'}`}>{String(index + 1).padStart(2, '0')}</div>
                        <div className={`text-sm font-black ${active ? 'text-slate-950' : 'text-slate-600'}`}>{viewLabel(view, isEn)}</div>
                      </div>
                      <ArrowRight className={`h-4 w-4 transition ${active ? 'text-emerald-700' : 'text-slate-300'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[36px] bg-slate-950 p-4 shadow-[0_32px_80px_-42px_rgba(15,23,42,0.62)] sm:p-6">
              <div key={activeView} className="rounded-[28px] bg-white p-3">
                <LiveSystemView kind={activeView} language={uiLanguage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.scenario && (
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[36px] bg-emerald-950 px-7 py-10 text-white shadow-xl sm:px-10 lg:px-14 lg:py-14">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="relative max-w-4xl">
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300">{data.scenario.role}</div>
                <p className="mt-5 text-2xl font-black leading-9 tracking-[-0.025em] text-white sm:text-3xl">“{data.scenario.quote}”</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950">{copy.faq}</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {data.faq && data.faq.map((item: any, i: number) => (
              <div key={i} className="py-6">
                <h3 className="flex items-start gap-3 font-black text-slate-950"><HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /> {item.q}</h3>
                <p className="mt-3 pl-8 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[38px] bg-slate-950 px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${visual.accent}`}><VisualIcon className="h-6 w-6" /></div>
              <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] sm:text-4xl">{copy.unified}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">{copy.unifiedDesc}</p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-400">
              {copy.demo} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureDetail;
