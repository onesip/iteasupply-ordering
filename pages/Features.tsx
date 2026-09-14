import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  CheckCircle2,
  Cpu,
  Gift,
  Globe2,
  Layers3,
  Mail,
  MessageSquare,
  Plug,
  ShoppingBag,
  Smartphone,
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
        title: 'A complete operating layer for modern bubble tea stores.',
        subtitle:
          'Start with mobile ordering or loyalty. Add machine automation, notifications, analytics and external delivery connections without rebuilding the customer journey.',
        machine: 'Machine Integration',
        machineDesc:
          'Connect structured order and recipe data to the tea-machine workflow, keep production status visible and preserve logs for remote diagnosis.',
        loyalty: 'Loyalty & Growth',
        loyaltyDesc:
          'Points, campaigns, coupons and customer history are part of the same order flow — so every transaction can contribute to repeat business.',
        learn: 'Explore feature',
        sectionTitle: 'One platform, eight connected capabilities',
        sectionDesc: 'The platform is designed as a connected system, not a collection of isolated modules.',
        features: [
          ['Mobile HTML5 Ordering', 'Customers order directly from any modern phone browser — no app download required.', '/features/online-ordering'],
          ['Points & Membership', 'Earn points, build member profiles and reward repeat visits automatically.', '/features/loyalty'],
          ['Campaigns & Offers', 'Create member offers, coupons and targeted activity around customer behavior.', '/features/loyalty'],
          ['Tea-Machine Integration', 'Route structured drink instructions into the production workflow and keep status connected.', '/features/machine'],
          ['Order Status System', 'Show clear stages from received to preparing to ready, reducing uncertainty and queue pressure.', '/features/online-ordering'],
          ['SMS & Email Notifications', 'Send confirmation and ready-for-pickup notifications through familiar customer channels.', '/features/online-ordering'],
          ['Data & Analytics', 'Track sales, products, customers, channels and operational trends from one owner view.', '/features/reports'],
          ['Delivery API Connectivity', 'Connect external delivery channels into the same order and operations layer.', '/features/all-in-one'],
        ],
        flowEyebrow: 'HOW THE MODULES CONNECT',
        flowTitle: 'The value is in the workflow, not just the feature list.',
        flowDesc:
          'A mobile order can create a member event, enter the production queue, update its status, trigger a customer notification and become part of your analytics — all under one order trail.',
        flow: ['Mobile order', 'Member & offer', 'Production / machine', 'Live status', 'SMS / Email', 'Analytics'],
        apiTitle: 'Built to connect',
        apiDesc:
          'HTML5 front end, notification channels, automation equipment and delivery APIs can sit in one architecture, so the system can grow with your store operation.',
        ctaTitle: 'Want to see the full workflow rather than isolated screenshots?',
        ctaDesc: 'Book a live walkthrough and we will show the complete order-to-production-to-loyalty flow.',
        cta: 'Book a live demo',
      }
    : {
        eyebrow: '平台能力',
        title: '为现代奶茶店打造的一体化运营系统。',
        subtitle:
          '可以从手机下单或会员系统开始，再逐步加入奶茶机自动化、通知、数据分析和外卖渠道，而不需要重新搭一套顾客流程。',
        machine: '奶茶机联动',
        machineDesc:
          '把结构化订单与配方数据连接到奶茶机工作流，保留生产状态，并通过日志支持远程诊断。',
        loyalty: '会员与增长',
        loyaltyDesc:
          '积分、活动、优惠券和顾客历史都嵌入同一条订单流程，让每一笔交易都可以继续推动复购。',
        learn: '查看功能',
        sectionTitle: '一个平台，八项互相连接的能力',
        sectionDesc: '系统不是多个孤立模块的拼接，而是围绕同一条运营数据链设计。',
        features: [
          ['HTML5 手机下单', '顾客直接用手机浏览器下单，无需下载 App。', '/features/online-ordering'],
          ['积分与会员', '自动累计积分、建立会员档案并奖励复购。', '/features/loyalty'],
          ['活动与优惠', '根据顾客行为创建会员活动、优惠券和定向优惠。', '/features/loyalty'],
          ['奶茶机联动', '把结构化饮品指令送入生产工作流，并保持状态连接。', '/features/machine'],
          ['订单状态系统', '从已接单、制作中到可取餐，每一步都清晰可见。', '/features/online-ordering'],
          ['SMS / Email 通知', '订单确认和制作完成后通过常用渠道自动通知顾客。', '/features/online-ordering'],
          ['数据与经营分析', '从一个老板视图查看销售、产品、顾客、渠道和运营趋势。', '/features/reports'],
          ['外卖 API 接入', '把外部外卖渠道接入同一套订单和运营数据层。', '/features/all-in-one'],
        ],
        flowEyebrow: '模块如何协同',
        flowTitle: '真正的价值不在功能数量，而在完整工作流。',
        flowDesc:
          '一笔手机订单可以同时产生会员行为、进入生产队列、更新状态、触发顾客通知并进入数据分析，而且始终保持同一个订单轨迹。',
        flow: ['手机下单', '会员与活动', '生产 / 奶茶机', '实时状态', 'SMS / Email', '数据分析'],
        apiTitle: '为连接而设计',
        apiDesc:
          'HTML5 前端、通知渠道、自动化设备和外卖 API 可以处于同一架构中，系统可以随着门店运营继续扩展。',
        ctaTitle: '不想只看一堆孤立截图？',
        ctaDesc: '预约现场演示，我们直接展示从下单、生产到会员的完整链路。',
        cta: '预约现场演示',
      };

  const featureIcons = [Smartphone, Gift, Zap, Cpu, Activity, BellRing, BarChart3, Plug];
  const featureAccents = [
    'bg-emerald-50 text-emerald-700',
    'bg-lime-50 text-lime-700',
    'bg-amber-50 text-amber-700',
    'bg-slate-950 text-emerald-300',
    'bg-cyan-50 text-cyan-700',
    'bg-violet-50 text-violet-700',
    'bg-blue-50 text-blue-700',
    'bg-rose-50 text-rose-700',
  ];

  const flowIcons = [Smartphone, Gift, Cpu, Activity, MessageSquare, BarChart3];

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
                <div className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">CORE ADVANTAGE 01</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">{copy.machine}</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{copy.machineDesc}</p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-emerald-300">{copy.learn} <ArrowRight className="h-4 w-4" /></div>
              </div>
            </Link>

            <Link to="/features/loyalty" className="group relative overflow-hidden rounded-[32px] border border-emerald-100 bg-emerald-50 p-8 shadow-xl shadow-emerald-950/5 sm:p-9">
              <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-emerald-300/30 blur-3xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div className="rounded-2xl bg-white p-3.5 text-emerald-700 shadow-sm ring-1 ring-emerald-900/5"><Gift className="h-7 w-7" /></div>
                  <ArrowRight className="h-5 w-5 text-emerald-500 transition group-hover:translate-x-1" />
                </div>
                <div className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-emerald-700">CORE ADVANTAGE 02</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-slate-950">{copy.loyalty}</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{copy.loyaltyDesc}</p>
                <div className="mt-7 inline-flex items-center gap-2 text-sm font-black text-emerald-700">{copy.learn} <ArrowRight className="h-4 w-4" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">CONNECTED MODULES</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.sectionTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.sectionDesc}</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.features.map(([title, desc, link], index) => {
              const Icon = featureIcons[index];
              return (
                <Link key={`${title}-${index}`} to={link} className="group flex min-h-[252px] flex-col rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${featureAccents[index]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.025em] text-slate-950">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-black text-emerald-700">
                    {copy.learn} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{copy.flowEyebrow}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.flowTitle}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{copy.flowDesc}</p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-5 sm:p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.flow.map((label, index) => {
                  const Icon = flowIcons[index];
                  return (
                    <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-emerald-950"><Icon className="h-5 w-5" /></div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">0{index + 1}</div>
                        <div className="mt-1 font-black text-white">{label}</div>
                      </div>
                      {index < copy.flow.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-emerald-400" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"><Workflow className="h-7 w-7" /></div>
              <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.apiTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{copy.apiDesc}</p>
            </div>

            <div className="relative rounded-[32px] border border-emerald-950/10 bg-white p-5 shadow-xl shadow-emerald-950/5 sm:p-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  [Globe2, 'HTML5', 'Customer ordering'],
                  [MessageSquare, 'SMS', 'Ready notifications'],
                  [Mail, 'Email', 'Order communication'],
                  [Cpu, 'Machine', 'Production workflow'],
                  [Plug, 'API', 'Delivery channels'],
                  [BarChart3, 'Data', 'Owner analytics'],
                ].map(([Icon, title, subtitle]: any) => (
                  <div key={title} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5">
                    <Icon className="h-5 w-5 text-emerald-700" />
                    <div className="mt-5 text-base font-black text-slate-950">{title}</div>
                    <div className="mt-1 text-xs font-semibold leading-5 text-slate-500">{subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[36px] bg-emerald-600 px-6 py-12 text-white shadow-2xl shadow-emerald-900/15 sm:px-10 lg:flex-row lg:items-center lg:px-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em]"><Zap className="h-4 w-4" /> LIVE WALKTHROUGH</div>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{copy.ctaTitle}</h2>
            <p className="mt-4 text-base leading-7 text-emerald-50/90">{copy.ctaDesc}</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-7 py-4 text-base font-black text-emerald-800 shadow-xl transition hover:bg-emerald-50 lg:self-auto">
            {copy.cta} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
