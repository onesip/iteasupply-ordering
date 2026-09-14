import React from 'react';
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
  ShieldCheck,
  Smartphone,
  Tag,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

const featureVisualConfig: Record<string, { icon: any; accent: string; views: Array<'analytics' | 'loyalty' | 'catalog' | 'production' | 'mobile' | 'label'> }> = {
  machine: { icon: Cpu, accent: 'bg-slate-950 text-emerald-300', views: ['production', 'label', 'catalog'] },
  loyalty: { icon: Gift, accent: 'bg-emerald-600 text-white', views: ['loyalty', 'mobile', 'analytics'] },
  'online-ordering': { icon: Smartphone, accent: 'bg-emerald-600 text-white', views: ['mobile', 'catalog', 'loyalty'] },
  'waterproof-labels': { icon: Tag, accent: 'bg-cyan-600 text-white', views: ['label', 'production', 'catalog'] },
  inventory: { icon: Package, accent: 'bg-amber-500 text-white', views: ['catalog', 'analytics', 'production'] },
  reports: { icon: BarChart3, accent: 'bg-blue-600 text-white', views: ['analytics', 'loyalty', 'production'] },
  'all-in-one': { icon: Layers3, accent: 'bg-violet-600 text-white', views: ['analytics', 'catalog', 'mobile'] },
  transparency: { icon: Activity, accent: 'bg-slate-900 text-white', views: ['production', 'analytics', 'loyalty'] },
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

  const copy = isEn
    ? {
        back: 'View all features',
        feature: 'PLATFORM FEATURE',
        result: 'THE RESULT',
        evidence: 'PRIVACY-SAFE SYSTEM EVIDENCE',
        evidenceTitle: 'Based on live interfaces, rebuilt for public exhibition use.',
        evidenceDesc:
          'The views below are reconstructed from the live operating environment so customers can see a real workflow without exposing store identifiers, account data, device serials or proprietary integration logic.',
        privateLogic: 'Internal QR encoding, field-splicing rules and third-party device composition logic are intentionally not shown.',
        faq: 'Common questions',
        unified: 'This feature becomes more valuable when it is connected.',
        unifiedDesc: 'Ordering, loyalty, machine workflow, notifications and analytics are designed to work as one operating system.',
        demo: 'Book a live demo',
      }
    : {
        back: '查看全部功能',
        feature: '平台功能',
        result: '最终结果',
        evidence: '隐私安全的真实系统证据',
        evidenceTitle: '基于真实系统界面，为公开展会重新整理。',
        evidenceDesc: '下面的界面直接依据真实运营环境重构，让客户看到真实工作流，同时隐藏门店、账号、设备序列号以及专有集成逻辑。',
        privateLogic: '二维码编码、字段拼接规则和第三方设备组合逻辑属于内部 know-how，不会对外展示。',
        faq: '常见问题',
        unified: '当它与其他模块连接时，这项功能的价值会更高。',
        unifiedDesc: '下单、会员、奶茶机流程、通知和数据分析从一开始就按照一套运营系统来设计。',
        demo: '预约现场演示',
      };

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[#f7fbf8] py-16 lg:py-20">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8">
          <div>
            <Link to="/features" className="inline-flex items-center gap-2 text-sm font-black text-emerald-700 hover:text-emerald-900">← {copy.back}</Link>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
              <VisualIcon className="h-4 w-4" /> {copy.feature}
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl">{data.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{data.subtitle}</p>
          </div>
          <div className="rounded-[30px] border border-emerald-950/10 bg-white p-3 shadow-2xl shadow-emerald-950/10">
            <LiveSystemView kind={visual.views[0]} language={uiLanguage} />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800">{copy.result}</div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl">{data.result}</h2>
              <div className="mt-8 space-y-4">
                {data.how && data.how.map((item: string, i: number) => (
                  <div key={i} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><CheckCircle2 className="h-5 w-5" /></div>
                    <p className="pt-1 text-base font-semibold leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[30px] bg-emerald-950 p-8 text-white shadow-xl sm:p-10">
              <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">{data.scenario.role}</div>
                <p className="mt-5 text-2xl font-black leading-9 tracking-[-0.025em] text-white">“{data.scenario.quote}”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
              <ShieldCheck className="h-4 w-4" /> {copy.evidence}
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.evidenceTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{copy.evidenceDesc}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {visual.views.map((view, index) => (
              <div key={`${view}-${index}`} className={index === 0 ? 'lg:col-span-2' : ''}>
                <LiveSystemView kind={view} compact={index !== 0} language={uiLanguage} />
              </div>
            ))}
          </div>

          {(featureId === 'machine' || featureId === 'waterproof-labels' || featureId === 'all-in-one') && (
            <div className="mt-8 flex items-start gap-4 rounded-[24px] border border-amber-200 bg-amber-50 p-5 text-amber-950">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm font-bold leading-6">{copy.privateLogic}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black tracking-[-0.035em] text-slate-950">{copy.faq}</h2>
          <div className="mt-10 space-y-4">
            {data.faq && data.faq.map((item: any, i: number) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-start gap-3 font-black text-slate-950"><HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /> {item.q}</h3>
                <p className="mt-3 pl-8 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-[34px] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10">
          <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${visual.accent}`}><VisualIcon className="h-7 w-7" /></div>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{copy.unified}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">{copy.unifiedDesc}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-white transition hover:bg-emerald-400">
            {copy.demo} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeatureDetail;
