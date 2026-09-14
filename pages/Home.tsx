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
        eyebrow: 'BUBBLE TEA OPERATIONS, CONNECTED',
        title: 'One platform from ordering to production.',
        subtitle:
          'Mobile ordering, loyalty, tea-machine workflow, customer notifications and business analytics — designed to run as one system.',
        primary: 'Book a demo',
        secondary: 'Explore platform',
        coreKicker: 'CORE DIFFERENTIATORS',
        coreTitle: 'Two capabilities at the center of the platform.',
        machineTitle: 'Tea-machine integration',
        machineDesc:
          'Keep drink specifications, production status and output records connected to the order instead of re-entering information manually.',
        machinePoints: ['Structured production routing', 'Drink specifications stay attached', 'Production status and records'],
        loyaltyTitle: 'Loyalty connected to real orders',
        loyaltyDesc:
          'Points, coupons and campaigns use the same customer and transaction history as the ordering flow.',
        loyaltyPoints: ['Points and rewards', 'Campaigns and coupons', 'Repeat-purchase insight'],
        tourKicker: 'PRODUCT TOUR',
        tourTitle: 'Move through the system by workflow.',
        tourDesc: 'Switch views to see the customer, production, loyalty and owner sides of the same operating platform.',
        tabs: {
          mobile: ['Ordering', 'HTML5 ordering and order-ahead'],
          production: ['Production', 'Machine-linked production records'],
          loyalty: ['Loyalty', 'Members, rewards and retention'],
          analytics: ['Analytics', 'Sales and operating trends'],
        } as Record<TourKey, [string, string]>,
        flowKicker: 'ONE ORDER TRAIL',
        flowTitle: 'A connected workflow from tap to pickup.',
        flow: [
          ['Order', 'Customer places an order', Smartphone],
          ['Route', 'Options are validated', Workflow],
          ['Produce', 'Drink enters production', Cpu],
          ['Update', 'Status stays current', Activity],
          ['Notify', 'Customer receives updates', Bell],
          ['Analyse', 'Data flows into reporting', BarChart3],
        ] as const,
        capabilityKicker: 'PLATFORM CAPABILITIES',
        capabilityTitle: 'Everything around the daily store workflow.',
        capabilities: [
          ['HTML5 ordering', 'No app download required.', Smartphone],
          ['Order status', 'Clear progress to pickup.', Activity],
          ['SMS & email', 'Automated customer updates.', Mail],
          ['Delivery API', 'External channels connect in.', Plug],
          ['Loyalty', 'Points, offers and history.', Gift],
          ['Analytics', 'Sales and customer trends.', BarChart3],
        ] as const,
        ctaTitle: 'See the complete workflow live.',
        ctaDesc: 'We can walk through ordering, production, loyalty and analytics in one connected demo.',
        cta: 'Schedule a walkthrough',
      }
    : {
        eyebrow: '连接奶茶门店完整运营流程',
        title: '从点单到生产，一套平台完成。',
        subtitle: '把 HTML5 手机点单、会员、奶茶机生产流程、顾客通知和经营数据放在同一套系统里。',
        primary: '预约演示',
        secondary: '查看平台',
        coreKicker: '核心差异',
        coreTitle: '两项核心能力，构成整个平台的中心。',
        machineTitle: '奶茶机联动',
        machineDesc: '饮品规格、制作状态和出品记录始终和订单保持连接，减少人工二次录入。',
        machinePoints: ['结构化生产路由', '饮品规格保持连接', '制作状态与出品记录'],
        loyaltyTitle: '与真实订单连接的会员系统',
        loyaltyDesc: '积分、优惠券和活动直接使用同一套顾客与交易历史，而不是独立的营销数据库。',
        loyaltyPoints: ['积分与奖励', '活动与优惠券', '复购分析'],
        tourKicker: '产品浏览',
        tourTitle: '按照真实工作流切换查看系统。',
        tourDesc: '在顾客点单、生产、会员和老板数据之间切换，直接看同一套平台的不同工作端。',
        tabs: {
          mobile: ['点单', 'HTML5 点单与提前下单'],
          production: ['生产', '奶茶机联动生产记录'],
          loyalty: ['会员', '会员、奖励与复购'],
          analytics: ['数据', '销售与经营趋势'],
        } as Record<TourKey, [string, string]>,
        flowKicker: '同一条订单轨迹',
        flowTitle: '从点击下单到取餐，流程保持连接。',
        flow: [
          ['下单', '顾客提交订单', Smartphone],
          ['路由', '系统校验选项', Workflow],
          ['制作', '饮品进入生产', Cpu],
          ['更新', '状态持续同步', Activity],
          ['通知', '顾客收到提醒', Bell],
          ['分析', '数据进入报表', BarChart3],
        ] as const,
        capabilityKicker: '平台能力',
        capabilityTitle: '围绕门店日常运营，把关键能力连接起来。',
        capabilities: [
          ['HTML5 点单', '无需下载 App。', Smartphone],
          ['订单状态', '清晰显示制作进度。', Activity],
          ['SMS / Email', '自动发送顾客通知。', Mail],
          ['外卖 API', '外部渠道统一接入。', Plug],
          ['会员', '积分、优惠与历史。', Gift],
          ['数据分析', '销售与顾客趋势。', BarChart3],
        ] as const,
        ctaTitle: '现场看完整系统如何运行。',
        ctaDesc: '我们可以直接演示点单、生产、会员和数据分析如何在一套系统中协同。',
        cta: '预约完整演示',
      };

  const tourItems = useMemo(
    () => [
      { key: 'mobile' as TourKey, icon: Smartphone },
      { key: 'production' as TourKey, icon: Cpu },
      { key: 'loyalty' as TourKey, icon: Gift },
      { key: 'analytics' as TourKey, icon: BarChart3 },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-white pt-16 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.eyebrow}</div>
            <h1 className="mt-5 text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[50px] lg:text-[58px]">{copy.title}</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-slate-600">{copy.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700">{copy.primary}<ArrowRight className="h-4 w-4" /></Link>
              <Link to="/features" className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50">{copy.secondary}</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-[13px] font-medium text-slate-600">
              {['HTML5 ordering', 'Tea-machine workflow', 'Loyalty & campaigns', 'Owner analytics'].map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />{item}</div>)}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f8] shadow-[0_26px_70px_-42px_rgba(15,23,42,0.32)]">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-800"><span className="h-2 w-2 rounded-full bg-emerald-500" /> I&apos;TEA Control</div>
              <div className="text-[11px] text-slate-400">Connected operations</div>
            </div>
            <div className="grid border-b border-slate-200 bg-white sm:grid-cols-4">
              {tourItems.map(({ key, icon: Icon }) => {
                const active = activeTour === key;
                return <button key={key} type="button" onClick={() => setActiveTour(key)} className={`border-b-2 px-4 py-3 text-left transition ${active ? 'border-emerald-600 bg-emerald-50/40' : 'border-transparent hover:bg-slate-50'}`}><div className="flex items-center gap-2 text-[12px] font-semibold text-slate-800"><Icon className={`h-4 w-4 ${active ? 'text-emerald-700' : 'text-slate-400'}`} />{copy.tabs[key][0]}</div></button>;
              })}
            </div>
            <div className="p-4 sm:p-5"><div key={activeTour} className="animate-[fadeIn_.22s_ease-out]"><LiveSystemView kind={activeTour} language={uiLanguage} /></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#fafafa] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="max-w-md"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.coreKicker}</div><h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[38px]">{copy.coreTitle}</h2></div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                ['01', copy.machineTitle, copy.machineDesc, copy.machinePoints, '/features/machine', Cpu],
                ['02', copy.loyaltyTitle, copy.loyaltyDesc, copy.loyaltyPoints, '/features/loyalty', Gift],
              ].map(([num, title, desc, points, href, Icon]) => {
                const C = Icon as React.ComponentType<{ className?: string }>;
                const items = points as string[];
                return <div key={String(num)} className="grid gap-5 py-7 md:grid-cols-[52px_1fr_auto] md:items-start"><div className="text-[12px] font-semibold tracking-[0.12em] text-slate-400">{String(num)}</div><div><div className="flex items-center gap-3"><C className="h-5 w-5 text-emerald-700" /><h3 className="text-[22px] font-semibold tracking-[-0.025em] text-slate-950">{String(title)}</h3></div><p className="mt-3 max-w-2xl text-[15px] leading-6 text-slate-600">{String(desc)}</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">{items.map((item) => <span key={item} className="text-[12px] font-medium text-slate-500">• {item}</span>)}</div></div><Link to={String(href)} className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 transition hover:text-emerald-700">Learn more <ArrowRight className="h-3.5 w-3.5" /></Link></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.tourKicker}</div><h2 className="mt-4 max-w-md text-[32px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[38px]">{copy.tourTitle}</h2><p className="mt-4 max-w-md text-[15px] leading-6 text-slate-600">{copy.tourDesc}</p><div className="mt-7 border-l border-slate-200">{tourItems.map(({ key, icon: Icon }) => { const active = activeTour === key; return <button key={key} type="button" onClick={() => setActiveTour(key)} className={`block w-full border-l-2 px-5 py-3 text-left transition ${active ? '-ml-px border-emerald-600 bg-emerald-50/40' : '-ml-px border-transparent hover:bg-slate-50'}`}><div className="flex items-center gap-3"><Icon className={`h-4 w-4 ${active ? 'text-emerald-700' : 'text-slate-400'}`} /><span className="text-[14px] font-semibold text-slate-900">{copy.tabs[key][0]}</span></div><p className="mt-1 pl-7 text-[12px] leading-5 text-slate-500">{copy.tabs[key][1]}</p></button>; })}</div></div>
            <div className="rounded-2xl border border-slate-200 bg-[#f7f8f8] p-4 sm:p-5"><LiveSystemView kind={activeTour} language={uiLanguage} /></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="max-w-2xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">{copy.flowKicker}</div><h2 className="mt-4 text-[32px] font-semibold tracking-[-0.035em] sm:text-[38px]">{copy.flowTitle}</h2></div><div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">{copy.flow.map(([title, desc, Icon], index) => <div key={title} className="bg-slate-950 p-5"><div className="flex items-center justify-between"><Icon className="h-4 w-4 text-emerald-300" /><span className="text-[10px] text-slate-600">0{index + 1}</span></div><h3 className="mt-5 text-[14px] font-semibold">{title}</h3><p className="mt-2 text-[11px] leading-5 text-slate-400">{desc}</p></div>)}</div></div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"><div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.capabilityKicker}</div><h2 className="mt-4 max-w-md text-[32px] font-semibold leading-tight tracking-[-0.035em] sm:text-[38px]">{copy.capabilityTitle}</h2></div><div className="grid gap-x-8 border-t border-slate-200 sm:grid-cols-2">{copy.capabilities.map(([title, desc, Icon]) => <div key={title} className="flex gap-4 border-b border-slate-200 py-5"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" /><div><h3 className="text-[14px] font-semibold text-slate-900">{title}</h3><p className="mt-1 text-[12px] leading-5 text-slate-500">{desc}</p></div></div>)}</div></div></div>
      </section>

      <section className="border-t border-slate-200 bg-[#fafafa] py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="text-[30px] font-semibold tracking-[-0.035em] text-slate-950">{copy.ctaTitle}</h2><p className="mt-2 max-w-2xl text-[14px] leading-6 text-slate-600">{copy.ctaDesc}</p></div><Link to="/contact" className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800">{copy.cta}<ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
};

export default Home;
