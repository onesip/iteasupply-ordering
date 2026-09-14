import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Cpu,
  Gift,
  HelpCircle,
  Layers3,
  Package,
  Smartphone,
  Sparkles,
  Tag,
  Wifi,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const featureVisualConfig: Record<string, { icon: any; accent: string; items: [string, string][] }> = {
  machine: {
    icon: Cpu,
    accent: 'bg-slate-950 text-emerald-300',
    items: [
      ['Order #A184', 'Recipe routed'],
      ['Machine 01', 'Online'],
      ['Production', 'Mixing'],
      ['Status sync', 'Live'],
    ],
  },
  loyalty: {
    icon: Gift,
    accent: 'bg-emerald-600 text-white',
    items: [
      ['Member', '1,240 pts'],
      ['Campaign', '+18% return'],
      ['Reward', 'Ready'],
      ['Customer', 'Recognized'],
    ],
  },
  'online-ordering': {
    icon: Smartphone,
    accent: 'bg-emerald-600 text-white',
    items: [
      ['Mobile web', 'HTML5'],
      ['Order', '#A184'],
      ['Pickup', '~4 min'],
      ['Notification', 'Enabled'],
    ],
  },
  'waterproof-labels': {
    icon: Tag,
    accent: 'bg-cyan-600 text-white',
    items: [
      ['Order label', '#A184'],
      ['Drink', 'Mango Matcha'],
      ['Options', '50% · low ice'],
      ['Print status', 'Ready'],
    ],
  },
  inventory: {
    icon: Package,
    accent: 'bg-amber-500 text-white',
    items: [
      ['Jasmine tea', 'Healthy'],
      ['Pearls', 'Reorder soon'],
      ['Recipe use', 'Tracked'],
      ['Waste', 'Logged'],
    ],
  },
  reports: {
    icon: BarChart3,
    accent: 'bg-blue-600 text-white',
    items: [
      ['Revenue', '€2,846'],
      ['Orders', '486'],
      ['Repeat', '41%'],
      ['Machine-linked', '92%'],
    ],
  },
  'all-in-one': {
    icon: Layers3,
    accent: 'bg-violet-600 text-white',
    items: [
      ['Ordering', 'Connected'],
      ['Loyalty', 'Connected'],
      ['Production', 'Connected'],
      ['Analytics', 'Connected'],
    ],
  },
  transparency: {
    icon: Activity,
    accent: 'bg-slate-900 text-white',
    items: [
      ['Order trail', 'Visible'],
      ['Status', 'Auditable'],
      ['Payment', 'Structured'],
      ['Logs', 'Available'],
    ],
  },
};

const FeatureDetail = () => {
  const { featureId } = useParams();
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const data = t(`featureDetails.${featureId}`);

  if (!data || typeof data === 'string' || !data.title) {
    return <Navigate to="/features" replace />;
  }

  const visual = featureVisualConfig[featureId || ''] || featureVisualConfig['all-in-one'];
  const VisualIcon = visual.icon;

  const copy = isEn
    ? {
        result: 'THE RESULT',
        preview: 'PRODUCT WORKFLOW PREVIEW',
        previewDesc: 'A clean product mockup is shown here until final exhibition screenshots are inserted.',
        live: 'LIVE',
        faq: 'Common questions',
        unified: 'This feature becomes more valuable when it is connected.',
        unifiedDesc: 'Ordering, loyalty, machine workflow, notifications and analytics are designed to work as one system.',
        demo: 'Book a live demo',
        all: 'View all features',
      }
    : {
        result: '最终结果',
        preview: '产品流程预览',
        previewDesc: '在展会最终真实截图替换前，这里先使用清晰的产品界面 mockup 展示流程。',
        live: '实时',
        faq: '常见问题',
        unified: '当它与其他模块连接时，这项功能的价值会更高。',
        unifiedDesc: '下单、会员、奶茶机流程、通知和数据分析从一开始就按照一套系统来设计。',
        demo: '预约现场演示',
        all: '查看全部功能',
      };

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[#f7fbf8] py-16 lg:py-20">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <Link to="/features" className="inline-flex items-center gap-2 text-sm font-black text-emerald-700 hover:text-emerald-900">
              ← {copy.all}
            </Link>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
              <Sparkles className="h-4 w-4" /> PLATFORM FEATURE
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl">{data.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{data.subtitle}</p>
          </div>

          <div className="rounded-[30px] border border-emerald-950/10 bg-slate-950 p-3 shadow-2xl shadow-emerald-950/10">
            <div className="rounded-[24px] bg-white p-5">
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${visual.accent}`}>
                  <VisualIcon className="h-6 w-6" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {copy.live}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {visual.items.map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5">
                    <div className="text-[11px] font-bold text-slate-400">{label}</div>
                    <div className="mt-1.5 text-sm font-black text-slate-950">{value}</div>
                  </div>
                ))}
              </div>
            </div>
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
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{copy.preview}</div>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl">{data.title} · workflow view</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{copy.previewDesc}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {(data.mediaSlots && data.mediaSlots.length > 0 ? data.mediaSlots.slice(0, 3) : visual.items.slice(0, 3)).map((media: any, i: number) => {
              const label = typeof media === 'object' && media.content ? media.content : media[0];
              const icons = [Smartphone, Wifi, Bell];
              const Icon = icons[i] || Activity;
              return (
                <div key={i} className="min-h-[220px] rounded-[26px] border border-emerald-100 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-7 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">SCREEN {i + 1}</div>
                  <p className="mt-2 text-lg font-black leading-7 text-slate-950">{label}</p>
                  <div className="mt-5 flex gap-2">
                    <span className="h-2 w-16 rounded-full bg-emerald-500" />
                    <span className="h-2 w-8 rounded-full bg-emerald-100" />
                    <span className="h-2 w-12 rounded-full bg-slate-100" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black tracking-[-0.035em] text-slate-950">{copy.faq}</h2>
          <div className="mt-10 space-y-4">
            {data.faq && data.faq.map((item: any, i: number) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-start gap-3 font-black text-slate-950">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /> {item.q}
                </h3>
                <p className="mt-3 pl-8 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-[34px] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10">
          <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">{copy.unified}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">{copy.unifiedDesc}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-white transition hover:bg-emerald-400">
              {copy.demo} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/features" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-black text-white transition hover:bg-white/10">
              {copy.all}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureDetail;
