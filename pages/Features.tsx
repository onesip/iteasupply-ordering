import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, BarChart3, BellRing, Cpu, Gift, Plug, Smartphone, TicketPercent, Workflow } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type CoreKey = 'machine' | 'loyalty';

const Features = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const uiLanguage = en ? 'en' : 'zh';
  const [active, setActive] = useState<CoreKey>('machine');

  const copy = en
    ? {
        kicker: 'PLATFORM',
        title: 'A connected operating system for bubble tea stores.',
        intro: 'Ordering, loyalty, production, notifications and analytics stay on the same order and customer trail.',
        coreKicker: 'CORE SYSTEMS',
        coreTitle: 'Start with the two capabilities that change store operations most.',
        machine: 'Tea-machine integration',
        machineDesc: 'Move structured drink specifications into production and keep status and output connected to the order.',
        loyalty: 'Loyalty & membership',
        loyaltyDesc: 'Connect points, campaigns and repeat-purchase behavior directly to transactions and customer activity.',
        explore: 'Explore',
        flowKicker: 'SYSTEM FLOW',
        flowTitle: 'Multiple touchpoints, one operating layer.',
        capabilitiesKicker: 'CAPABILITIES',
        capabilitiesTitle: 'The modules around the core workflow.',
        capabilities: [
          ['HTML5 mobile ordering', 'No app download required.', '/features/online-ordering', Smartphone],
          ['Points & membership', 'Recognition, points and history.', '/features/loyalty', Gift],
          ['Campaigns & offers', 'Coupons, rewards and targeted activities.', '/features/loyalty', TicketPercent],
          ['Tea-machine integration', 'Production instructions and status.', '/features/machine', Cpu],
          ['Order status', 'Clear progress to pickup.', '/features/online-ordering', Activity],
          ['SMS & email', 'Automated customer updates.', '/features/online-ordering', BellRing],
          ['Analytics', 'Sales, products, customers and trends.', '/features/reports', BarChart3],
          ['Delivery API', 'Connect external channels.', '/features/all-in-one', Plug],
        ] as const,
        ctaTitle: 'See one order move through the complete system.',
        cta: 'Book a demo',
      }
    : {
        kicker: '平台',
        title: '一套真正连接奶茶门店完整运营流程的系统。',
        intro: '点单、会员、生产、通知和数据分析始终围绕同一笔订单和同一个顾客。',
        coreKicker: '核心系统',
        coreTitle: '先看真正改变门店运营方式的两项能力。',
        machine: '奶茶机联动',
        machineDesc: '把结构化饮品规格送入生产，并让制作状态与产出继续和订单保持连接。',
        loyalty: '会员与积分',
        loyaltyDesc: '积分、活动和复购行为直接建立在真实交易与顾客行为上。',
        explore: '查看',
        flowKicker: '系统流程',
        flowTitle: '多个触点，共用一个运营层。',
        capabilitiesKicker: '平台能力',
        capabilitiesTitle: '围绕核心工作流，把日常运营需要的模块补齐。',
        capabilities: [
          ['HTML5 手机点单', '无需下载 App。', '/features/online-ordering', Smartphone],
          ['积分与会员', '会员识别、积分和消费历史。', '/features/loyalty', Gift],
          ['活动与优惠', '优惠券、奖励和定向活动。', '/features/loyalty', TicketPercent],
          ['奶茶机联动', '生产指令与状态。', '/features/machine', Cpu],
          ['订单状态', '清晰显示制作进度。', '/features/online-ordering', Activity],
          ['SMS / Email', '自动发送顾客通知。', '/features/online-ordering', BellRing],
          ['数据分析', '销售、产品、顾客和趋势。', '/features/reports', BarChart3],
          ['外卖 API', '连接外部渠道。', '/features/all-in-one', Plug],
        ] as const,
        ctaTitle: '直接看一笔订单如何跑完整条链路。',
        cta: '预约演示',
      };

  const core = active === 'machine'
    ? { title: copy.machine, desc: copy.machineDesc, view: 'production' as const, href: '/features/machine', icon: Cpu }
    : { title: copy.loyalty, desc: copy.loyaltyDesc, view: 'loyalty' as const, href: '/features/loyalty', icon: Gift };

  return (
    <div className="min-h-screen bg-white pt-16 text-slate-950">
      <section className="border-b border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.kicker}</div>
            <h1 className="mt-5 text-[42px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[50px] lg:text-[56px]">{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-7 text-slate-600">{copy.intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.coreKicker}</div>
              <h2 className="mt-4 max-w-md text-[32px] font-semibold leading-tight tracking-[-0.035em] sm:text-[38px]">{copy.coreTitle}</h2>
              <div className="mt-8 border-y border-slate-200">
                {([
                  ['machine', copy.machine, copy.machineDesc, Cpu],
                  ['loyalty', copy.loyalty, copy.loyaltyDesc, Gift],
                ] as const).map(([key, title, desc, Icon], index) => {
                  const selected = active === key;
                  return (
                    <button key={key} onClick={() => setActive(key)} className={`w-full border-b border-slate-200 px-0 py-5 text-left last:border-b-0 ${selected ? 'text-slate-950' : 'text-slate-500 hover:text-slate-950'}`}>
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 text-[11px] font-medium text-slate-400">0{index + 1}</div>
                        <div className="min-w-0 flex-1"><div className="flex items-center gap-2"><Icon className={`h-4 w-4 ${selected ? 'text-emerald-700' : 'text-slate-400'}`} /><span className="text-[15px] font-semibold">{title}</span></div><p className="mt-2 text-[12px] leading-5 text-slate-500">{desc}</p></div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.3)] sm:p-5">
              <div className="mb-4 flex items-center justify-between"><div><div className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">{active === 'machine' ? 'PRODUCTION' : 'LOYALTY'}</div><div className="mt-1 text-[18px] font-semibold text-slate-950">{core.title}</div></div><Link to={core.href} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-600 hover:text-emerald-700">{copy.explore}<ArrowRight className="h-3.5 w-3.5" /></Link></div>
              <LiveSystemView kind={core.view} language={uiLanguage} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">{copy.flowKicker}</div><h2 className="mt-4 text-[32px] font-semibold tracking-[-0.035em] sm:text-[38px]">{copy.flowTitle}</h2></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-5">
            {[
              ['Customer', Smartphone], ['Order', Workflow], ['Production', Cpu], ['Engagement', Gift], ['Insight', BarChart3],
            ].map(([label, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(label)} className="bg-slate-950 p-5"><C className="h-4 w-4 text-emerald-300" /><div className="mt-4 text-[13px] font-semibold">{String(label)}</div></div>; })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.capabilitiesKicker}</div><h2 className="mt-4 max-w-md text-[32px] font-semibold leading-tight tracking-[-0.035em] sm:text-[38px]">{copy.capabilitiesTitle}</h2></div>
            <div className="border-t border-slate-200">
              {copy.capabilities.map(([title, desc, href, Icon], index) => (
                <Link key={`${title}-${index}`} to={href} className="group grid gap-3 border-b border-slate-200 py-4 md:grid-cols-[42px_1fr_1fr_24px] md:items-center">
                  <span className="text-[10px] text-slate-400">{String(index + 1).padStart(2, '0')}</span><div className="flex items-center gap-2"><Icon className="h-4 w-4 text-emerald-700" /><span className="text-[14px] font-semibold text-slate-900">{title}</span></div><span className="text-[12px] text-slate-500">{desc}</span><ArrowRight className="h-3.5 w-3.5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#fafafa] py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8"><h2 className="max-w-2xl text-[28px] font-semibold tracking-[-0.03em]">{copy.ctaTitle}</h2><Link to="/contact" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-[13px] font-semibold text-white hover:bg-emerald-700">{copy.cta}<ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
};

export default Features;
