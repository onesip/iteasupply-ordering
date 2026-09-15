import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Gift,
  GraduationCap,
  Settings2,
  ShieldCheck,
  Smartphone,
  Store,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type TourKey = 'mobile' | 'production' | 'loyalty' | 'analytics';

const HomeExhibition = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const uiLanguage = en ? 'en' : 'zh';
  const [activeOutcome, setActiveOutcome] = useState(0);
  const [activeTour, setActiveTour] = useState<TourKey>('production');

  useEffect(() => {
    const timer = window.setInterval(() => setActiveOutcome((value) => (value + 1) % 4), 2300);
    return () => window.clearInterval(timer);
  }, []);

  const copy = en
    ? {
        eyebrow: 'BUBBLE TEA ORDERING + PRODUCTION AUTOMATION + LOYALTY',
        title: 'Ordering, production and loyalty — connected for bubble tea stores.',
        subtitle: 'Mobile ordering, tea-machine integration, order status, customer notifications, loyalty and analytics in one operating system.',
        primary: 'Book a live demo',
        secondary: 'See what you get',
        fit: 'Built for independent stores, growing beverage brands and multi-store operators.',
        deconstruct: 'DECONSTRUCT ONE ORDER',
        deconstructSub: 'See what one customer order can do for the whole business.',
        orderLabel: 'LIVE ORDER',
        orderNumber: '#A184',
        orderDrink: 'Mango Matcha',
        orderOptions: 'Medium · 50% sugar · Low ice',
        outcomes: [
          ['Faster ordering', 'No app required', 'Customer orders on mobile before or at the store.', Smartphone],
          ['Cleaner production', 'Less manual re-entry', 'Drink specifications move into a structured production workflow.', Cpu],
          ['Better customer experience', 'Status stays visible', 'Order progress and notifications keep customers informed.', Activity],
          ['More repeat visits', 'Loyalty starts automatically', 'Points, offers and purchase history stay connected to the order.', Gift],
        ] as const,
        dataTrail: 'ONE ORDER → FOUR BUSINESS OUTCOMES → ONE DATA TRAIL',
        whatTitle: 'What are you actually buying?',
        whatDesc: 'A practical store operating setup — not another isolated software subscription.',
        offers: [
          ['Store software', 'Mobile ordering, order status, notifications, loyalty and analytics.', Smartphone],
          ['Tea-machine integration', 'Structured drink information continues into the production workflow.', Cpu],
          ['Implementation & support', 'Installation, setup, staff guidance, maintenance and remote troubleshooting.', Wrench],
        ] as const,
        valueKicker: 'WHAT CHANGES IN THE STORE',
        valueTitle: 'Less friction for staff. More consistency for the brand. More reasons for customers to return.',
        values: [
          ['Less manual work', 'Reduce repeated order entry and unnecessary handoffs.', Zap],
          ['More consistent drinks', 'Keep size, sugar, ice and modifiers structured through production.', ShieldCheck],
          ['Stronger customer retention', 'Use real order history for points, campaigns and rewards.', Users],
          ['Better owner visibility', 'See customer, sales and production signals in one view.', BarChart3],
        ] as const,
        twoTitle: 'Two capabilities make the platform different from a normal POS.',
        machineTitle: 'Tea-machine integration',
        machineDesc: 'The order does not stop at checkout. Drink specifications can continue into production, reducing handoffs and improving consistency.',
        machineBullets: ['Structured production flow', 'Machine-linked execution', 'Production status', 'Output records'],
        loyaltyTitle: 'Loyalty & member growth',
        loyaltyDesc: 'The transaction becomes a customer relationship. Points, campaigns and purchase history remain connected to the same order data.',
        loyaltyBullets: ['Points & rewards', 'Coupons & campaigns', 'Purchase history', 'Repeat-purchase insights'],
        tourKicker: 'PRODUCT WALKTHROUGH',
        tourTitle: 'One platform, four operational views.',
        tabs: {
          mobile: ['Ordering', 'Customer mobile ordering'],
          production: ['Production', 'Machine-linked workflow'],
          loyalty: ['Loyalty', 'Members and retention'],
          analytics: ['Analytics', 'Owner operating view'],
        } as Record<TourKey, [string, string]>,
        proofKicker: 'BUILT FROM REAL BEVERAGE OPERATIONS',
        proofTitle: 'A technology layer backed by a European beverage supply business.',
        proofText: 'I’TEA Supply combines ingredients, equipment and smart automation for beverage businesses. The platform is shaped around real store workflows rather than generic retail theory.',
        proofStats: [['400+', 'foodservice businesses in our European network'], ['20+', 'European countries served by I’TEA Supply'], ['NL + IE', 'live connected-store operating environments']],
        supportKicker: 'IMPLEMENTATION & AFTER-SALES SUPPORT',
        supportTitle: 'We help the store get it running — and keep it running.',
        supportItems: [
          ['Installation & commissioning', 'On-site setup, configuration and launch support.', Settings2],
          ['Training & guidance', 'Practical operating guidance for staff and managers.', GraduationCap],
          ['Maintenance & repair', 'Technical support for connected equipment and system issues.', Wrench],
          ['Remote troubleshooting', 'Remote checks and ongoing support after launch.', Activity],
        ] as const,
        pricingTitle: 'Pricing is tailored to your store setup.',
        pricingText: 'Software scope, number of locations, automation hardware, integrations and implementation needs all affect the final proposal.',
        pricingCta: 'Request a tailored proposal',
      }
    : {
        eyebrow: '奶茶店点单 + 生产自动化 + 会员系统',
        title: '把点单、制作和会员复购，连接成一套奶茶店运营系统。',
        subtitle: '手机点单、奶茶机联动、订单状态、顾客通知、会员营销和数据分析，一套系统协同。',
        primary: '预约现场演示',
        secondary: '看看具体卖什么',
        fit: '适合独立奶茶店、成长中的饮品品牌和多门店经营者。',
        deconstruct: '解构一笔订单',
        deconstructSub: '一笔顾客订单，究竟能为门店带来什么？',
        orderLabel: '实时订单',
        orderNumber: '#A184',
        orderDrink: '芒果抹茶',
        orderOptions: '中杯 · 50% 糖 · 少冰',
        outcomes: [
          ['点单更快', '无需下载 App', '顾客可以在到店前或到店后直接用手机下单。', Smartphone],
          ['制作更顺', '减少人工二次录入', '饮品规格继续进入结构化的制作流程。', Cpu],
          ['顾客体验更清楚', '状态始终可见', '订单进度和通知让顾客知道什么时候可以取餐。', Activity],
          ['更容易复购', '会员自动沉淀', '积分、优惠和消费历史继续跟随这笔订单。', Gift],
        ] as const,
        dataTrail: '一笔订单 → 四种商业价值 → 一条完整数据链',
        whatTitle: '你实际买到的是什么？',
        whatDesc: '是一套真正可以落地的门店运营配置，而不是一个彼此孤立的软件订阅。',
        offers: [
          ['门店软件系统', '手机点单、订单状态、通知、会员和数据分析。', Smartphone],
          ['奶茶机联动', '结构化饮品信息继续进入生产和制作流程。', Cpu],
          ['安装与售后支持', '安装、调试、员工指导、维护维修和远程排障。', Wrench],
        ] as const,
        valueKicker: '门店到底会发生什么变化',
        valueTitle: '店员更省事，品牌更稳定，顾客更愿意回来。',
        values: [
          ['减少人工操作', '减少订单重复录入和不必要的人工交接。', Zap],
          ['提高出品一致性', '杯型、糖度、冰度和加料信息持续保持结构化。', ShieldCheck],
          ['提高顾客复购', '使用真实消费记录做积分、活动和奖励。', Users],
          ['老板看得更清楚', '顾客、销售和生产信息集中在同一个视图里。', BarChart3],
        ] as const,
        twoTitle: '和普通 POS 最大的不同，主要在这两件事。',
        machineTitle: '奶茶机联动',
        machineDesc: '订单不会在付款后就结束。饮品规格可以继续进入制作流程，减少人工交接，提高出品一致性。',
        machineBullets: ['结构化制作流程', '奶茶机联动执行', '制作状态', '出品记录'],
        loyaltyTitle: '会员与复购',
        loyaltyDesc: '一笔交易会继续变成顾客关系。积分、活动和消费历史都和同一笔订单数据保持连接。',
        loyaltyBullets: ['积分与奖励', '优惠券与活动', '消费历史', '复购分析'],
        tourKicker: '产品演示',
        tourTitle: '一套平台，四个实际运营视角。',
        tabs: {
          mobile: ['点单', '顾客手机点单'],
          production: ['生产', '奶茶机联动流程'],
          loyalty: ['会员', '会员与复购'],
          analytics: ['数据', '老板经营视图'],
        } as Record<TourKey, [string, string]>,
        proofKicker: '来自真实饮品业务',
        proofTitle: '背后不是一家纯软件公司，而是一家欧洲饮品供应与自动化企业。',
        proofText: 'I’TEA Supply 为欧洲饮品企业提供原料、设备和智能自动化方案。这套平台围绕真实门店工作流持续调整，而不是从通用零售模板改出来的。',
        proofStats: [['400+', '欧洲网络中的餐饮企业客户'], ['20+', 'I’TEA Supply 已服务的欧洲国家'], ['荷兰 + 爱尔兰', '连接式门店系统的真实运营环境']],
        supportKicker: '安装实施与售后支持',
        supportTitle: '我们不只把系统交给你，还会帮助门店真正跑起来。',
        supportItems: [
          ['安装与调试', '现场安装、系统设置和上线支持。', Settings2],
          ['培训与指导', '针对店员和管理人员提供实际操作指导。', GraduationCap],
          ['维护与维修', '对连接设备和系统问题提供技术支持。', Wrench],
          ['远程排障', '上线后继续提供远程检查与持续支持。', Activity],
        ] as const,
        pricingTitle: '每家门店配置不同，因此采用定制报价。',
        pricingText: '软件范围、门店数量、自动化设备、第三方接入和实施需求都会影响最终方案。',
        pricingCta: '联系我们获取方案与报价',
      };

  const tourItems = useMemo(() => [
    { key: 'mobile' as TourKey, icon: Smartphone },
    { key: 'production' as TourKey, icon: Cpu },
    { key: 'loyalty' as TourKey, icon: Gift },
    { key: 'analytics' as TourKey, icon: BarChart3 },
  ], []);

  return (
    <div className="min-h-screen bg-[#fffdfb] pt-16 text-[#2f211b]">
      <section className="border-b border-[#eadfd6] bg-[#fffdfb]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-18">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.eyebrow}</div>
            <h1 className="mt-5 text-[39px] font-semibold leading-[1.06] tracking-[-0.042em] text-[#391A10] sm:text-[48px] lg:text-[55px]">{copy.title}</h1>
            <p className="mt-5 text-[16px] leading-7 text-[#6d5a51] sm:text-[17px]">{copy.subtitle}</p>
            <div className="mt-5 flex items-center gap-2 text-[12px] font-medium text-[#7a645a]"><Store className="h-4 w-4 text-[#7a3d27]" />{copy.fit}</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#391A10] px-5 text-sm font-semibold text-white transition hover:bg-[#5a2a1a]">{copy.primary}<ArrowRight className="h-4 w-4" /></Link>
              <a href="#what-we-sell" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#cdbdb3] bg-white px-5 text-sm font-semibold text-[#4b3026] transition hover:bg-[#f8f2ed]">{copy.secondary}</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#ddcfc6] bg-white shadow-[0_24px_70px_-45px_rgba(57,26,16,0.35)]">
            <div className="border-b border-[#eadfd6] px-4 py-3 sm:px-5">
              <div className="flex items-center justify-between gap-4"><div><div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7a3d27]">{copy.deconstruct}</div><div className="mt-1 text-[13px] font-semibold text-[#391A10]">{copy.deconstructSub}</div></div><div className="hidden rounded-full bg-[#f5ebe4] px-3 py-1.5 text-[10px] font-semibold text-[#6f3a28] sm:block">LIVE</div></div>
            </div>

            <div className="relative bg-[#fbf7f3] p-4 sm:p-5 lg:p-6">
              <div className="mx-auto max-w-[290px] rounded-lg border border-[#d8c8be] bg-white p-4 shadow-[0_14px_40px_-34px_rgba(57,26,16,0.55)]">
                <div className="flex items-center justify-between"><span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#a28f84]">{copy.orderLabel}</span><span className="rounded bg-[#391A10] px-2 py-1 text-[10px] font-semibold text-white">{copy.orderNumber}</span></div>
                <div className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-[#391A10]">{copy.orderDrink}</div>
                <div className="mt-1 text-[11px] text-[#806b61]">{copy.orderOptions}</div>
                <div className="mt-4 flex gap-2"><span className="rounded-full bg-[#f4e7df] px-2 py-1 text-[9px] font-medium text-[#6d3b29]">HTML5</span><span className="rounded-full bg-[#f4e7df] px-2 py-1 text-[9px] font-medium text-[#6d3b29]">PAID</span><span className="rounded-full bg-[#f4e7df] px-2 py-1 text-[9px] font-medium text-[#6d3b29]">MEMBER</span></div>
              </div>

              <div className="hidden md:block"><div className="mx-auto h-8 w-px bg-[#cdbdb3]" /><div className="mx-[12.5%] border-t border-[#cdbdb3]" /></div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 md:mt-0 md:grid-cols-4">
                {copy.outcomes.map(([title, metric, desc, Icon], index) => {
                  const C = Icon as React.ComponentType<{ className?: string }>;
                  const active = activeOutcome === index;
                  return <button key={String(title)} type="button" onClick={() => setActiveOutcome(index)} className={`relative min-w-0 rounded-lg border p-4 text-left transition-all duration-500 md:mt-5 ${active ? 'border-[#7a3d27] bg-[#fffaf6] shadow-[0_14px_35px_-30px_rgba(57,26,16,0.5)]' : 'border-[#e2d6ce] bg-white'}`}><span className={`absolute left-1/2 top-[-21px] hidden h-5 w-px -translate-x-1/2 md:block ${active ? 'bg-[#7a3d27]' : 'bg-[#cdbdb3]'}`} /><div className={`flex h-9 w-9 items-center justify-center rounded-md ${active ? 'bg-[#391A10] text-white' : 'bg-[#f3e7df] text-[#7a3d27]'}`}><C className="h-4 w-4" /></div><div className="mt-4 text-[14px] font-semibold leading-5 text-[#391A10]">{String(title)}</div><div className="mt-1 text-[11px] font-semibold text-[#7a3d27]">{String(metric)}</div><p className="mt-2 text-[10px] leading-4 text-[#87736a] sm:text-[11px] sm:leading-5">{String(desc)}</p></button>;
                })}
              </div>

              <div className="mt-4 flex items-center justify-center rounded-md border border-[#e4d8d0] bg-white px-3 py-2.5 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-[#806b61] sm:text-[10px]">{copy.dataTrail}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-sell" className="border-b border-[#eadfd6] bg-[#f8f3ef] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><h2 className="text-[29px] font-semibold tracking-[-0.035em] text-[#391A10] sm:text-[35px]">{copy.whatTitle}</h2><p className="mt-3 text-[14px] leading-6 text-[#6d5a51]">{copy.whatDesc}</p></div>
          <div className="mt-9 grid gap-px overflow-hidden border border-[#ddcfc6] bg-[#ddcfc6] md:grid-cols-3">
            {copy.offers.map(([title, desc, Icon], index) => { const C = Icon as React.ComponentType<{ className?: string }>; return <article key={String(title)} className="bg-[#fffdfb] p-6"><div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f1e4da] text-[#6a321f]"><C className="h-5 w-5" /></div><span className="text-[10px] font-semibold tracking-[0.14em] text-[#b29d92]">0{index + 1}</span></div><h3 className="mt-5 text-[18px] font-semibold text-[#391A10]">{String(title)}</h3><p className="mt-2 text-[12px] leading-5 text-[#746158]">{String(desc)}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.valueKicker}</div><h2 className="mt-4 text-[29px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[35px]">{copy.valueTitle}</h2></div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{copy.values.map(([title, desc, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(title)} className="border-t-2 border-[#7a3d27] pt-5"><C className="h-5 w-5 text-[#7a3d27]" /><div className="mt-4 text-[15px] font-semibold text-[#391A10]">{String(title)}</div><p className="mt-2 text-[11px] leading-5 text-[#746158]">{String(desc)}</p></div>; })}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-[#fffdfb] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[29px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[35px]">{copy.twoTitle}</h2>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {[[copy.machineTitle, copy.machineDesc, copy.machineBullets, Cpu], [copy.loyaltyTitle, copy.loyaltyDesc, copy.loyaltyBullets, Gift]].map(([title, desc, bullets, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <article key={String(title)} className="border border-[#ddcfc6] bg-white p-6 sm:p-7"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#391A10] text-white"><C className="h-5 w-5" /></div><h3 className="mt-5 text-[23px] font-semibold tracking-[-0.03em] text-[#391A10]">{String(title)}</h3><p className="mt-3 text-[13px] leading-6 text-[#6d5a51]">{String(desc)}</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{(bullets as string[]).map((item) => <div key={item} className="flex gap-2 border-t border-[#eadfd6] pt-3 text-[11px] font-medium text-[#5f4b42]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7a3d27]" />{item}</div>)}</div></article>; })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-[#f8f3ef] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div><div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.tourKicker}</div><h2 className="mt-4 text-[29px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[35px]">{copy.tourTitle}</h2><div className="mt-6 grid grid-cols-2 gap-2 lg:block lg:border-l lg:border-[#d8c8be]">{tourItems.map(({ key, icon: Icon }) => { const active = activeTour === key; return <button key={key} type="button" onClick={() => setActiveTour(key)} className={`w-full rounded-md border px-3 py-3 text-left transition lg:rounded-none lg:border-0 lg:border-l-2 lg:px-5 ${active ? 'border-[#391A10] bg-white lg:-ml-px lg:border-l-[#391A10]' : 'border-[#dfd2ca] bg-white/60 lg:-ml-px lg:border-l-transparent lg:bg-transparent'}`}><div className="flex items-center gap-2"><Icon className={`h-4 w-4 ${active ? 'text-[#7a3d27]' : 'text-[#a9968b]'}`} /><span className="text-[12px] font-semibold text-[#4b3026] sm:text-[13px]">{copy.tabs[key][0]}</span></div><p className="mt-1 hidden pl-6 text-[11px] text-[#826e64] sm:block">{copy.tabs[key][1]}</p></button>; })}</div></div>
            <div className="rounded-lg border border-[#d8c8be] bg-white p-3 sm:p-5"><LiveSystemView kind={activeTour} language={uiLanguage} /></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-white py-14 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:items-start">
          <div><div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.proofKicker}</div><h2 className="mt-4 text-[29px] font-semibold tracking-[-0.035em] text-[#391A10] sm:text-[35px]">{copy.proofTitle}</h2><p className="mt-4 text-[13px] leading-6 text-[#6d5a51]">{copy.proofText}</p></div>
          <div className="grid border-y border-[#ddcfc6] sm:grid-cols-3 sm:divide-x sm:divide-[#ddcfc6]">{copy.proofStats.map(([value, label]) => <div key={value} className="py-5 sm:px-6 first:pl-0"><div className="text-[30px] font-semibold tracking-[-0.04em] text-[#391A10]">{value}</div><div className="mt-1 text-[11px] leading-5 text-[#7e6a60]">{label}</div></div>)}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-[#fffdfb] py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.supportKicker}</div><h2 className="mt-4 text-[29px] font-semibold tracking-[-0.035em] text-[#391A10] sm:text-[35px]">{copy.supportTitle}</h2></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{copy.supportItems.map(([title, desc, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(title)} className="border border-[#e3d6ce] bg-white p-5"><C className="h-5 w-5 text-[#7a3d27]" /><h3 className="mt-4 text-[14px] font-semibold text-[#391A10]">{String(title)}</h3><p className="mt-2 text-[11px] leading-5 text-[#766259]">{String(desc)}</p></div>; })}</div></div>
      </section>

      <section className="bg-[#fffdfb] px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-7 border border-[#d9c9c0] bg-[#391A10] px-6 py-8 text-white sm:px-9 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="max-w-3xl text-[27px] font-semibold leading-tight tracking-[-0.035em] sm:text-[33px]">{copy.pricingTitle}</h2><p className="mt-3 max-w-2xl text-[12px] leading-6 text-[#d7c6bd]">{copy.pricingText}</p></div><Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#f3e4da] px-5 text-sm font-semibold text-[#391A10] transition hover:bg-white">{copy.pricingCta}<ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
};

export default HomeExhibition;
