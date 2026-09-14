import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  Cpu,
  Gift,
  Layers3,
  Plug,
  Smartphone,
  TicketPercent,
  Workflow,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type CoreKey = 'machine' | 'loyalty';

const Features = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const uiLanguage = isEn ? 'en' : 'zh';
  const [activeCore, setActiveCore] = useState<CoreKey>('machine');

  const copy = isEn
    ? {
        eyebrow: 'PLATFORM',
        title: 'One operating system around the full bubble tea journey.',
        subtitle: 'Ordering, loyalty, production, notifications and analytics share the same operating flow instead of becoming separate tools.',
        coreEyebrow: 'TWO CORE SYSTEMS',
        coreTitle: 'Start with the two capabilities that change how the store operates.',
        machine: 'Tea-machine integration',
        machineDesc: 'Move structured drink specifications into production and keep production status and output connected to the order.',
        loyalty: 'Loyalty & membership',
        loyaltyDesc: 'Link points, campaigns and repeat-purchase behavior directly to real orders and customer activity.',
        explore: 'Explore in detail',
        viewMachine: 'Production view',
        viewLoyalty: 'Loyalty view',
        flowEyebrow: 'SYSTEM FLOW',
        flowTitle: 'Every touchpoint can feed the same operating layer.',
        flowDesc: 'The goal is not to add more software. It is to keep the order and customer trail intact from the first tap to the final report.',
        flowSteps: [
          ['Customer', 'HTML5 / in-store / delivery', Smartphone],
          ['Order engine', 'Options, status and routing', Workflow],
          ['Production', 'Machine or staff workflow', Cpu],
          ['Engagement', 'Loyalty and notifications', Gift],
          ['Insight', 'Sales and customer analytics', BarChart3],
        ] as const,
        capabilitiesEyebrow: 'CONNECTED CAPABILITIES',
        capabilitiesTitle: 'Everything needed around the core workflow.',
        capabilities: [
          ['HTML5 mobile ordering', 'Mobile ordering without an app download.', '/features/online-ordering', Smartphone],
          ['Points & membership', 'Member recognition, points and customer history.', '/features/loyalty', Gift],
          ['Campaigns & offers', 'Coupons, rewards and targeted activities.', '/features/loyalty', TicketPercent],
          ['Tea-machine integration', 'Structured production instructions and status.', '/features/machine', Cpu],
          ['Order status', 'Clear progress from confirmed to ready.', '/features/online-ordering', Activity],
          ['SMS & email', 'Automated confirmation and pickup updates.', '/features/online-ordering', BellRing],
          ['Analytics', 'Sales, products, customers and trends.', '/features/reports', BarChart3],
          ['Delivery API', 'Connect external channels into the same flow.', '/features/all-in-one', Plug],
        ] as const,
        ctaTitle: 'The best way to understand it is to see one order move through the system.',
        ctaDesc: 'We can show the complete customer-to-production-to-loyalty journey in a live walkthrough.',
        cta: 'Book a live demo',
      }
    : {
        eyebrow: '平台',
        title: '围绕奶茶门店完整流程的一套运营系统。',
        subtitle: '点单、会员、生产、通知和数据分析共享同一条运营链路，而不是变成彼此割裂的工具。',
        coreEyebrow: '两个核心系统',
        coreTitle: '先看真正改变门店运营方式的两项能力。',
        machine: '奶茶机联动',
        machineDesc: '把结构化饮品规格送入生产，并让制作状态和产出继续和订单保持连接。',
        loyalty: '会员与积分',
        loyaltyDesc: '积分、活动和复购行为直接建立在真实订单与顾客行为之上。',
        explore: '查看详细功能',
        viewMachine: '生产界面',
        viewLoyalty: '会员界面',
        flowEyebrow: '系统流程',
        flowTitle: '所有触点都可以进入同一个运营层。',
        flowDesc: '目标不是堆更多软件，而是让同一笔订单和同一个顾客从第一次点击一直连接到最终报表。',
        flowSteps: [
          ['顾客', 'HTML5 / 店内 / 外卖', Smartphone],
          ['订单引擎', '选项、状态与路由', Workflow],
          ['生产', '机器或人工制作', Cpu],
          ['运营', '会员与顾客通知', Gift],
          ['分析', '销售与顾客数据', BarChart3],
        ] as const,
        capabilitiesEyebrow: '互相连接的能力',
        capabilitiesTitle: '围绕核心流程，把日常运营需要的能力补齐。',
        capabilities: [
          ['HTML5 手机点单', '无需下载 App 的移动端点单。', '/features/online-ordering', Smartphone],
          ['积分与会员', '会员识别、积分和消费历史。', '/features/loyalty', Gift],
          ['活动与优惠', '优惠券、奖励和定向活动。', '/features/loyalty', TicketPercent],
          ['奶茶机联动', '结构化生产指令与状态。', '/features/machine', Cpu],
          ['订单状态', '从确认到可取餐清晰可见。', '/features/online-ordering', Activity],
          ['SMS / Email', '自动发送确认和取餐通知。', '/features/online-ordering', BellRing],
          ['数据分析', '销售、产品、顾客和趋势。', '/features/reports', BarChart3],
          ['外卖 API', '外部渠道进入同一条运营流程。', '/features/all-in-one', Plug],
        ] as const,
        ctaTitle: '真正看懂它，最好直接看一笔订单如何跑完整条链路。',
        ctaDesc: '现场可以展示从顾客下单、生产到会员沉淀的完整过程。',
        cta: '预约现场演示',
      };

  const core = activeCore === 'machine'
    ? {
        title: copy.machine,
        desc: copy.machineDesc,
        view: 'production' as const,
        href: '/features/machine',
        icon: Cpu,
        label: copy.viewMachine,
      }
    : {
        title: copy.loyalty,
        desc: copy.loyaltyDesc,
        view: 'loyalty' as const,
        href: '/features/loyalty',
        icon: Gift,
        label: copy.viewLoyalty,
      };

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden bg-[#f7fbf8] py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-36 top-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-800 shadow-sm">
              <Layers3 className="h-4 w-4" /> {copy.eyebrow}
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[1.01] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">{copy.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{copy.coreEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.coreTitle}</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
            <div className="space-y-3 lg:sticky lg:top-28">
              {([
                ['machine', copy.machine, copy.machineDesc, Cpu],
                ['loyalty', copy.loyalty, copy.loyaltyDesc, Gift],
              ] as const).map(([key, title, desc, Icon], index) => {
                const active = activeCore === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveCore(key)}
                    className={`group w-full rounded-[26px] border p-5 text-left transition duration-300 ${active ? 'border-emerald-200 bg-white shadow-xl shadow-emerald-900/5' : 'border-slate-200 bg-white/50 hover:border-emerald-100 hover:bg-white'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${active ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-500 group-hover:text-emerald-700'}`}><Icon className="h-5 w-5" /></div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-lg font-black text-slate-950">{String(index + 1).padStart(2, '0')} · {title}</h3>
                          <ArrowRight className={`h-4 w-4 shrink-0 transition ${active ? 'text-emerald-700' : 'text-slate-300'}`} />
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[38px] bg-slate-950 p-4 shadow-[0_32px_80px_-42px_rgba(15,23,42,0.65)] sm:p-6">
              <div className="rounded-[30px] bg-white p-3 sm:p-4">
                <div className="mb-4 flex items-center justify-between gap-4 px-1">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">{core.label}</div>
                    <div className="mt-1 text-xl font-black tracking-[-0.025em] text-slate-950">{core.title}</div>
                  </div>
                  <Link to={core.href} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-black text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800">
                    {copy.explore} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div key={activeCore}>
                  <LiveSystemView kind={core.view} language={uiLanguage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300">{copy.flowEyebrow}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.flowTitle}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{copy.flowDesc}</p>
            </div>

            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-emerald-500/10 via-emerald-400 to-emerald-500/10 lg:block" />
              {copy.flowSteps.map(([title, desc, Icon], index) => (
                <div key={title} className="group relative rounded-[24px] border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.075]">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300 ring-1 ring-white/10 transition group-hover:bg-emerald-500 group-hover:text-white"><Icon className="h-5 w-5" /></div>
                  <div className="mt-5 text-[9px] font-black uppercase tracking-[0.16em] text-slate-500">0{index + 1}</div>
                  <h3 className="mt-2 text-sm font-black text-white">{title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-700">{copy.capabilitiesEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">{copy.capabilitiesTitle}</h2>
          </div>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {copy.capabilities.map(([title, desc, href, Icon], index) => (
              <Link key={`${title}-${index}`} to={href} className="group grid gap-4 py-6 transition md:grid-cols-[70px_1.1fr_1fr_36px] md:items-center">
                <div className="text-xs font-black tracking-[0.14em] text-slate-300">{String(index + 1).padStart(2, '0')}</div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-emerald-700 transition group-hover:bg-emerald-50"><Icon className="h-4 w-4" /></div>
                  <h3 className="text-lg font-black text-slate-950">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-500">{desc}</p>
                <ArrowRight className="hidden h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600 md:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-950 px-7 py-14 text-white shadow-2xl sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.ctaTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{copy.ctaDesc}</p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-400">
              {copy.cta} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
