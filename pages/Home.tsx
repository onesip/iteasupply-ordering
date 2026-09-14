import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Cpu,
  Gift,
  Mail,
  Plug,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type TourKey = 'mobile' | 'production' | 'loyalty' | 'analytics';

const Home = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const uiLanguage = isEn ? 'en' : 'zh';
  const [activeTour, setActiveTour] = useState<TourKey>('production');

  const copy = isEn
    ? {
        eyebrow: 'OPERATING SYSTEM FOR BUBBLE TEA',
        heroA: 'From customer order',
        heroB: 'to production — connected.',
        heroDesc:
          'Mobile ordering, loyalty, tea-machine workflow, notifications and analytics in one operating system built for bubble tea stores.',
        primary: 'Book a live demo',
        secondary: 'Explore features',
        heroNotes: ['HTML5 ordering', 'Tea-machine workflow', 'Loyalty & campaigns', 'Owner analytics'],
        coreEyebrow: 'WHAT MAKES IT DIFFERENT',
        coreTitle: 'Two systems that become far more valuable when they work together.',
        machineTitle: 'Tea-machine integration',
        machineDesc: 'Orders move into a structured production workflow with drink specifications, production status and output records.',
        machinePoints: ['Order-to-production flow', 'Structured drink specifications', 'Production status & records'],
        loyaltyTitle: 'Loyalty that stays connected to orders',
        loyaltyDesc: 'Points, coupons, campaigns and repeat-purchase data sit on top of real order behavior — not a separate marketing database.',
        loyaltyPoints: ['Points & rewards', 'Campaigns & coupons', 'Repeat-purchase analytics'],
        tourEyebrow: 'INTERACTIVE PRODUCT TOUR',
        tourTitle: 'Click through the system the way a store actually uses it.',
        tourDesc: 'Switch between customer ordering, production, membership and owner analytics to see how the operating flow connects.',
        tabs: {
          mobile: ['Ordering', 'HTML5 mobile ordering and order-ahead experience.'],
          production: ['Production', 'Machine-linked production records and structured output.'],
          loyalty: ['Loyalty', 'Member growth, rewards and repeat-purchase tracking.'],
          analytics: ['Analytics', 'Sales, orders and operational trends in one owner view.'],
        } as Record<TourKey, [string, string]>,
        flowEyebrow: 'ONE CONNECTED FLOW',
        flowTitle: 'The data stays connected from tap to pickup.',
        flowDesc: 'One order can carry customer intent, production status, notifications and loyalty activity through the same journey.',
        flow: [
          ['Order', 'Customer orders on mobile', Smartphone],
          ['Route', 'Options are validated and routed', Workflow],
          ['Produce', 'Drink enters production', Cpu],
          ['Update', 'Status changes through the workflow', Activity],
          ['Notify', 'Customer receives updates', Bell],
          ['Learn', 'Sales and customer behavior feed analytics', BarChart3],
        ] as const,
        capabilityEyebrow: 'BUILT TO GROW WITH THE STORE',
        capabilityTitle: 'One platform around the day-to-day operation.',
        capabilities: [
          ['HTML5 mobile ordering', 'No app download required.', Smartphone],
          ['Order status', 'From confirmed to ready for pickup.', Activity],
          ['SMS & email', 'Automated customer updates.', Mail],
          ['Delivery API', 'External channels can feed the same flow.', Plug],
          ['Loyalty engine', 'Points, offers and customer history.', Gift],
          ['Owner analytics', 'Sales, products and customer trends.', BarChart3],
        ] as const,
        ctaTitle: 'See the whole workflow live.',
        ctaDesc: 'At the exhibition we can walk through ordering, loyalty, production and analytics as one connected system.',
        cta: 'Schedule a walkthrough',
      }
    : {
        eyebrow: '专为奶茶门店打造的运营系统',
        heroA: '从顾客下单，',
        heroB: '一直连接到生产。',
        heroDesc: '把 HTML5 手机点单、会员、奶茶机生产流程、顾客通知和数据分析放在同一套运营系统里。',
        primary: '预约现场演示',
        secondary: '查看功能',
        heroNotes: ['HTML5 手机点单', '奶茶机生产流程', '会员与营销', '经营数据'],
        coreEyebrow: '真正的差异',
        coreTitle: '两套核心能力连接起来，价值才真正放大。',
        machineTitle: '奶茶机联动',
        machineDesc: '订单进入结构化生产流程，饮品规格、制作状态和出品记录都保持连接。',
        machinePoints: ['订单直达生产', '饮品规格结构化', '制作状态与出品记录'],
        loyaltyTitle: '与订单真正连接的会员系统',
        loyaltyDesc: '积分、优惠券、活动和复购数据直接建立在真实消费行为上，而不是独立的营销数据库。',
        loyaltyPoints: ['积分与奖励', '活动与优惠券', '复购分析'],
        tourEyebrow: '交互式产品浏览',
        tourTitle: '像真实门店一样切换查看整套系统。',
        tourDesc: '点击不同模块，在手机点单、生产、会员和老板数据之间切换，直接看系统如何连成一体。',
        tabs: {
          mobile: ['点单', 'HTML5 手机点单与提前下单体验。'],
          production: ['生产', '奶茶机联动的生产记录与出品数据。'],
          loyalty: ['会员', '会员增长、奖励和复购追踪。'],
          analytics: ['数据', '销售、订单和经营趋势统一查看。'],
        } as Record<TourKey, [string, string]>,
        flowEyebrow: '一条完整链路',
        flowTitle: '从点击下单到取餐，数据始终不断链。',
        flowDesc: '同一笔订单贯穿顾客需求、生产状态、通知和会员行为。',
        flow: [
          ['下单', '顾客手机下单', Smartphone],
          ['路由', '系统校验并分发订单', Workflow],
          ['制作', '饮品进入生产', Cpu],
          ['更新', '制作过程中同步状态', Activity],
          ['通知', '顾客收到进度提醒', Bell],
          ['分析', '销售和顾客行为进入数据分析', BarChart3],
        ] as const,
        capabilityEyebrow: '随着门店一起成长',
        capabilityTitle: '一套平台覆盖日常运营。',
        capabilities: [
          ['HTML5 手机点单', '无需下载 App。', Smartphone],
          ['订单状态', '从确认到可取餐清晰可见。', Activity],
          ['SMS / Email', '自动发送顾客通知。', Mail],
          ['外卖 API', '外部渠道进入同一流程。', Plug],
          ['会员引擎', '积分、优惠和消费历史。', Gift],
          ['老板数据', '销售、产品和顾客趋势。', BarChart3],
        ] as const,
        ctaTitle: '现场看完整系统如何跑起来。',
        ctaDesc: '展会上可以直接演示手机点单、会员、生产和数据分析如何连接在一起。',
        cta: '预约完整演示',
      };

  const tourItems = useMemo(() => [
    { key: 'mobile' as TourKey, icon: Smartphone },
    { key: 'production' as TourKey, icon: Cpu },
    { key: 'loyalty' as TourKey, icon: Gift },
    { key: 'analytics' as TourKey, icon: BarChart3 },
  ], []);

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden bg-[#f7fbf8]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-44 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> {copy.eyebrow}
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.6rem]">
              {copy.heroA} <span className="text-emerald-700">{copy.heroB}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{copy.heroDesc}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-black text-white shadow-xl shadow-slate-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700">
                {copy.primary} <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/features" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-800">
                {copy.secondary}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {copy.heroNotes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[600px]">
            <div className="absolute left-0 top-12 z-20 w-[44%] transition duration-500 hover:-translate-y-2 hover:rotate-[-1deg]">
              <LiveSystemView kind="mobile" language={uiLanguage} />
            </div>
            <div className="absolute right-0 top-0 z-10 w-[78%] transition duration-500 hover:-translate-y-2">
              <LiveSystemView kind="production" compact language={uiLanguage} />
            </div>
            <div className="absolute bottom-0 right-[2%] z-30 w-[67%] transition duration-500 hover:-translate-y-2 hover:rotate-[0.4deg]">
              <LiveSystemView kind="analytics" compact language={uiLanguage} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 text-sm font-black text-slate-500 sm:px-6 lg:px-8">
          {['HTML5', 'LOYALTY', 'MACHINE', 'SMS / EMAIL', 'ANALYTICS', 'DELIVERY API'].map((item, index) => (
            <React.Fragment key={item}>
              <span className="tracking-[0.08em]">{item}</span>
              {index < 5 && <span className="hidden h-1 w-1 rounded-full bg-emerald-400 sm:block" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{copy.coreEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">{copy.coreTitle}</h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white shadow-[0_24px_70px_-38px_rgba(15,23,42,0.65)] sm:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl transition duration-500 group-hover:bg-emerald-500/30" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 p-3.5 text-white"><Cpu className="h-6 w-6" /></div>
                  <span className="text-xs font-black tracking-[0.18em] text-emerald-300">01</span>
                </div>
                <h3 className="mt-8 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{copy.machineTitle}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{copy.machineDesc}</p>
                <div className="mt-7 space-y-3">
                  {copy.machinePoints.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-100"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {item}</div>
                  ))}
                </div>
                <Link to="/features/machine" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-emerald-300 transition hover:gap-3 hover:text-emerald-200">Explore machine integration <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[34px] border border-emerald-100 bg-[#effaf3] p-8 shadow-[0_24px_70px_-40px_rgba(6,95,70,0.22)] sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/60 blur-3xl transition duration-500 group-hover:bg-emerald-200/80" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-3.5 text-emerald-700 shadow-sm"><Gift className="h-6 w-6" /></div>
                  <span className="text-xs font-black tracking-[0.18em] text-emerald-700">02</span>
                </div>
                <h3 className="mt-8 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl">{copy.loyaltyTitle}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{copy.loyaltyDesc}</p>
                <div className="mt-7 space-y-3">
                  {copy.loyaltyPoints.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-800"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> {item}</div>
                  ))}
                </div>
                <Link to="/features/loyalty" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-emerald-700 transition hover:gap-3 hover:text-emerald-900">Explore loyalty <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9f8] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{copy.tourEyebrow}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">{copy.tourTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{copy.tourDesc}</p>

              <div className="mt-8 space-y-2">
                {tourItems.map(({ key, icon: Icon }, index) => {
                  const active = activeTour === key;
                  const [title, desc] = copy.tabs[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTour(key)}
                      className={`group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition duration-300 ${active ? 'border-emerald-200 bg-white shadow-lg shadow-emerald-900/5' : 'border-transparent bg-transparent hover:border-slate-200 hover:bg-white/70'}`}
                    >
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${active ? 'bg-emerald-600 text-white' : 'bg-white text-slate-500 shadow-sm group-hover:text-emerald-700'}`}><Icon className="h-5 w-5" /></div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-sm font-black ${active ? 'text-slate-950' : 'text-slate-700'}`}>{String(index + 1).padStart(2, '0')} · {title}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-500">{desc}</div>
                      </div>
                      <ArrowRight className={`h-4 w-4 shrink-0 transition ${active ? 'translate-x-0 text-emerald-700' : '-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-emerald-600'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[520px] rounded-[38px] bg-slate-950 p-4 shadow-[0_32px_80px_-40px_rgba(15,23,42,0.65)] sm:p-6">
              <div className="absolute inset-x-16 top-0 h-32 rounded-full bg-emerald-400/20 blur-3xl" />
              <div key={activeTour} className="relative rounded-[30px] bg-white p-3 sm:p-4">
                <LiveSystemView kind={activeTour} language={uiLanguage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300">{copy.flowEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.flowTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{copy.flowDesc}</p>
          </div>

          <div className="relative mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-emerald-500/20 lg:block" />
            {copy.flow.map(([title, desc, Icon], index) => (
              <div key={title} className="group relative rounded-[24px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.075]">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-emerald-300 shadow-lg transition group-hover:bg-emerald-500 group-hover:text-white"><Icon className="h-5 w-5" /></div>
                <div className="mt-5 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">STEP {String(index + 1).padStart(2, '0')}</div>
                <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{copy.capabilityEyebrow}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">{copy.capabilityTitle}</h2>
            </div>
            <Link to="/features" className="inline-flex items-center gap-2 self-start text-sm font-black text-emerald-700 transition hover:gap-3 hover:text-emerald-900 lg:self-auto">View all features <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {copy.capabilities.map(([title, desc, Icon], index) => (
              <div key={title} className="group grid gap-4 py-6 transition md:grid-cols-[80px_1fr_1fr_36px] md:items-center">
                <div className="text-xs font-black tracking-[0.14em] text-slate-300">{String(index + 1).padStart(2, '0')}</div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-emerald-700 transition group-hover:bg-emerald-50"><Icon className="h-4 w-4" /></div>
                  <h3 className="text-lg font-black text-slate-950">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-500">{desc}</p>
                <ArrowRight className="hidden h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600 md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300">LIVE DEMO</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.ctaTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{copy.ctaDesc}</p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-400">
              {copy.cta} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
