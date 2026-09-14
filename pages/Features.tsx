import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle2,
  Clock3,
  Cpu,
  Gift,
  Globe2,
  Layers3,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Plug,
  ShoppingBag,
  Smartphone,
  Tags,
  TicketPercent,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Features = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const copy = isEn
    ? {
        eyebrow: 'PLATFORM CAPABILITIES',
        title: 'A bubble tea operating system, not a collection of disconnected tools.',
        subtitle:
          'The platform connects customer ordering, loyalty, production, notifications and owner analytics around the same order trail.',
        coreOne: 'CORE 01',
        coreTwo: 'CORE 02',
        machine: 'Tea-Machine Integration',
        machineDesc:
          'Route structured recipe and customization data into the production workflow, keep status visible and preserve logs for support.',
        loyalty: 'Loyalty & Membership',
        loyaltyDesc:
          'Points, coupons, campaigns and customer history stay connected to the transaction that created them.',
        explore: 'Explore feature',
        architectureKicker: 'SYSTEM ARCHITECTURE',
        architectureTitle: 'Multiple touchpoints, one operating layer.',
        architectureDesc:
          'Customer-facing channels, store operations and production do not need separate data silos. They can share the same order, customer and status information.',
        touchpoints: ['HTML5 ordering', 'In-store ordering', 'Delivery channels', 'Third-party APIs'],
        engine: 'ORDER & CUSTOMER ENGINE',
        engineSub: 'One source of truth',
        outputs: ['Production', 'Loyalty', 'Notifications', 'Analytics'],
        capabilitiesKicker: 'CONNECTED MODULES',
        capabilitiesTitle: 'Eight capabilities designed to work together.',
        capabilitiesDesc: 'Each module is useful on its own, but the value increases when the workflow remains connected.',
        features: [
          ['HTML5 Mobile Ordering', 'Customers order directly from any modern phone browser — no app download required.', '/features/online-ordering'],
          ['Points & Membership', 'Recognize members, award points and retain customer history automatically.', '/features/loyalty'],
          ['Campaigns & Offers', 'Create coupons, rewards and targeted activities around customer behavior.', '/features/loyalty'],
          ['Tea-Machine Integration', 'Send structured drink instructions into the production workflow and keep status linked.', '/features/machine'],
          ['Order Status System', 'Show clear stages from received to preparing to ready for pickup.', '/features/online-ordering'],
          ['SMS & Email Notifications', 'Send confirmation and ready-for-pickup notifications through familiar channels.', '/features/online-ordering'],
          ['Data & Analytics', 'Track sales, products, customers, channels and operational trends from one owner view.', '/features/reports'],
          ['Delivery API Connectivity', 'Connect external delivery channels into the same order and operations layer.', '/features/all-in-one'],
        ],
        workflowKicker: 'END-TO-END WORKFLOW',
        workflowTitle: 'A single order can trigger the entire store journey.',
        workflowDesc:
          'Ordering, member recognition, production routing, status, notification and analytics all stay attached to one order trail.',
        workflow: ['Mobile order', 'Member / offer', 'Production route', 'Machine / staff', 'Status + notify', 'Analytics'],
        machinePreview: 'Production console',
        order: 'Order #A184',
        recipe: 'Recipe mapped',
        machineState: 'Machine 01 · Mixing',
        statusBack: 'Status returned',
        loyaltyPreview: 'Customer lifecycle',
        lifecycle: ['Join', 'Earn', 'Reward', 'Return'],
        campaign: 'Targeted campaign',
        repeatLift: '+18% repeat visits',
        ctaTitle: 'See how the modules behave as one system.',
        ctaDesc: 'A live demo is more useful than eight isolated screenshots. We can show the complete order-to-production-to-loyalty journey.',
        cta: 'Book a live demo',
      }
    : {
        eyebrow: '平台能力',
        title: '不是一堆彼此割裂的工具，而是一套奶茶店运营系统。',
        subtitle: '顾客下单、会员、生产、通知和老板数据围绕同一条订单轨迹连接起来。',
        coreOne: '核心 01',
        coreTwo: '核心 02',
        machine: '奶茶机联动',
        machineDesc: '把结构化配方和客制化数据送入生产流程，保留制作状态，并留下支持诊断所需的日志。',
        loyalty: '会员与积分',
        loyaltyDesc: '积分、优惠券、活动和顾客历史，都和产生它们的订单保持连接。',
        explore: '查看功能',
        architectureKicker: '系统架构',
        architectureTitle: '多个触点，共用一个运营数据层。',
        architectureDesc: '顾客渠道、门店运营和生产端不需要各自形成数据孤岛，可以共享同一笔订单、同一个顾客和同一套状态信息。',
        touchpoints: ['HTML5 下单', '店内点单', '外卖渠道', '第三方 API'],
        engine: '订单与顾客中台',
        engineSub: '统一数据源',
        outputs: ['生产', '会员', '通知', '数据分析'],
        capabilitiesKicker: '互相连接的模块',
        capabilitiesTitle: '八项能力，从一开始就按照协同工作来设计。',
        capabilitiesDesc: '每个模块单独都有价值，但当数据链保持连接时，价值会明显放大。',
        features: [
          ['HTML5 手机下单', '顾客直接用手机浏览器下单，无需下载 App。', '/features/online-ordering'],
          ['积分与会员', '自动识别会员、累计积分并保留顾客消费历史。', '/features/loyalty'],
          ['活动与优惠', '根据顾客行为创建优惠券、奖励和定向活动。', '/features/loyalty'],
          ['奶茶机联动', '把结构化饮品指令送入生产流程，并保持状态连接。', '/features/machine'],
          ['订单状态系统', '从已接单、制作中到可取餐，每一步都清晰可见。', '/features/online-ordering'],
          ['SMS / Email 通知', '订单确认和制作完成后通过常用渠道主动通知顾客。', '/features/online-ordering'],
          ['数据与经营分析', '统一查看销售、产品、顾客、渠道和运营趋势。', '/features/reports'],
          ['外卖 API 接入', '把外部外卖渠道接入同一个订单和运营数据层。', '/features/all-in-one'],
        ],
        workflowKicker: '端到端工作流',
        workflowTitle: '一笔订单，可以触发整个门店流程。',
        workflowDesc: '下单、会员识别、生产路由、状态、通知和分析始终挂在同一条订单轨迹上。',
        workflow: ['手机下单', '会员 / 活动', '生产路由', '机器 / 人工', '状态 + 通知', '数据分析'],
        machinePreview: '生产控制台',
        order: '订单 #A184',
        recipe: '配方已映射',
        machineState: '奶茶机 01 · 制作中',
        statusBack: '状态已回传',
        loyaltyPreview: '顾客生命周期',
        lifecycle: ['加入', '积累', '奖励', '复购'],
        campaign: '定向活动',
        repeatLift: '复购 +18%',
        ctaTitle: '真正看懂它，要看这些模块如何作为一套系统运行。',
        ctaDesc: '现场演示比八张孤立截图更有价值。我们可以直接展示从下单、生产到会员的完整链路。',
        cta: '预约现场演示',
      };

  const featureIcons = [Smartphone, Gift, TicketPercent, Cpu, Activity, BellRing, BarChart3, Plug];
  const touchIcons = [Globe2, ShoppingBag, Layers3, Plug];
  const outputIcons = [Cpu, Gift, BellRing, BarChart3];
  const workflowIcons = [Smartphone, Users, Workflow, Cpu, MessageSquare, BarChart3];

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[#f7fbf8] py-16 lg:py-24">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-800 shadow-sm">
              <Layers3 className="h-4 w-4" /> {copy.eyebrow}
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">{copy.subtitle}</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Link to="/features/machine" className="group relative overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/10 sm:p-9">
              <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div className="rounded-2xl bg-emerald-500 p-3.5 text-white"><Cpu className="h-7 w-7" /></div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-300" />
                </div>
                <div className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{copy.coreOne}</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">{copy.machine}</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{copy.machineDesc}</p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{copy.machinePreview}</div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[
                      [copy.order, copy.recipe],
                      [copy.machineState, copy.statusBack],
                    ].map(([a, b]) => (
                      <div key={a} className="rounded-xl bg-white/5 p-3">
                        <div className="text-xs font-black text-white">{a}</div>
                        <div className="mt-1 text-[10px] font-bold text-emerald-300">{b}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-emerald-300">{copy.explore} <ArrowRight className="h-4 w-4" /></div>
              </div>
            </Link>

            <Link to="/features/loyalty" className="group relative overflow-hidden rounded-[32px] border border-emerald-100 bg-emerald-50 p-8 shadow-xl shadow-emerald-950/5 sm:p-9">
              <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-emerald-300/30 blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div className="rounded-2xl bg-white p-3.5 text-emerald-700 shadow-sm ring-1 ring-emerald-900/5"><Gift className="h-7 w-7" /></div>
                  <ArrowRight className="h-5 w-5 text-emerald-500 transition group-hover:translate-x-1" />
                </div>
                <div className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.coreTwo}</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-slate-950">{copy.loyalty}</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{copy.loyaltyDesc}</p>

                <div className="mt-8 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-emerald-900/5">
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">{copy.loyaltyPreview}</div>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {copy.lifecycle.map((label, index) => (
                      <div key={label} className="text-center">
                        <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-black ${index < 3 ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'}`}>{index + 1}</div>
                        <div className="mt-2 text-[9px] font-bold text-slate-500">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2.5">
                    <span className="text-[10px] font-black text-slate-700">{copy.campaign}</span>
                    <span className="text-xs font-black text-emerald-700">{copy.repeatLift}</span>
                  </div>
                </div>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-emerald-700">{copy.explore} <ArrowRight className="h-4 w-4" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.architectureKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.architectureTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.architectureDesc}</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_0.78fr_1fr] lg:items-center">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {copy.touchpoints.map((label, index) => {
                const Icon = touchIcons[index];
                return (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="h-5 w-5" /></div>
                    <div className="font-black text-slate-950">{label}</div>
                    <ArrowRight className="ml-auto h-4 w-4 text-emerald-500" />
                  </div>
                );
              })}
            </div>

            <div className="relative flex min-h-[260px] items-center justify-center">
              <div className="absolute inset-x-0 top-1/2 hidden h-px bg-emerald-200 lg:block" />
              <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full bg-slate-950 p-6 text-center text-white shadow-2xl ring-[18px] ring-emerald-50">
                <Workflow className="h-7 w-7 text-emerald-300" />
                <div className="mt-3 text-base font-black leading-5">{copy.engine}</div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{copy.engineSub}</div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {copy.outputs.map((label, index) => {
                const Icon = outputIcons[index];
                return (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-[#f7fbf8] p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white"><Icon className="h-5 w-5" /></div>
                    <div className="font-black text-slate-950">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.capabilitiesKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.capabilitiesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.capabilitiesDesc}</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.features.map(([title, desc, link], index) => {
              const Icon = featureIcons[index];
              return (
                <Link key={`${title}-${index}`} to={link} className="group flex min-h-[260px] flex-col rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${index === 3 ? 'bg-slate-950 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.025em] text-slate-950">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-black text-emerald-700">
                    {copy.explore} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{copy.workflowKicker}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.workflowTitle}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{copy.workflowDesc}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {copy.workflow.map((label, index) => {
                const Icon = workflowIcons[index];
                return (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-emerald-950"><Icon className="h-5 w-5" /></div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">0{index + 1}</div>
                      <div className="mt-1 font-black text-white">{label}</div>
                    </div>
                    {index < copy.workflow.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-emerald-400" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[34px] bg-emerald-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 text-emerald-950"><MonitorSmartphone className="h-7 w-7" /></div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-100">{copy.ctaDesc}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-emerald-950 transition hover:bg-emerald-50">
            {copy.cta} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
