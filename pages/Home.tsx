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

const Home = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const uiLanguage = en ? 'en' : 'zh';
  const [activeTour, setActiveTour] = useState<TourKey>('production');
  const [hookStep, setHookStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setHookStep((step) => (step + 1) % 3), 2200);
    return () => window.clearInterval(timer);
  }, []);

  const copy = en
    ? {
        eyebrow: 'BUBBLE TEA ORDERING, LOYALTY & AUTOMATION SYSTEM',
        title: 'Take orders. Make drinks. Bring customers back — in one connected system.',
        subtitle: 'A complete operating platform for bubble tea shops and beverage brands: mobile ordering, member marketing, tea-machine integration, customer notifications and business analytics.',
        primary: 'Book a live demo',
        secondary: 'See what you get',
        fit: 'Built for bubble tea shops, cafés and growing beverage chains.',
        hookLabel: 'LIVE ORDER JOURNEY',
        hookIntro: 'One order keeps moving after checkout.',
        hookSteps: [
          ['Order received', 'Customer order + drink options'],
          ['Sent to production', 'Structured production workflow'],
          ['Customer retained', 'Status, points and purchase history'],
        ],
        getTitle: 'What exactly are we offering?',
        getDesc: 'Not just software and not just a machine. I’TEA connects the customer journey, store workflow and automated production into one practical operating setup.',
        offers: [
          ['Store software', 'Mobile ordering, order status, customer notifications, loyalty and analytics.', Smartphone],
          ['Tea-machine integration', 'Structured drink specifications move into a connected production workflow.', Cpu],
          ['Implementation & support', 'Installation, setup, staff guidance, maintenance and remote troubleshooting.', Wrench],
        ] as const,
        whyKicker: 'WHY OPERATORS BUY IT',
        whyTitle: 'The value is simpler operations, more consistent drinks and a stronger customer relationship.',
        whyCards: [
          ['Less manual work', 'Reduce repeated order entry and unnecessary handoffs between customer, counter and production.', Zap],
          ['More consistent execution', 'Keep drink options and production instructions structured so the store can reproduce the same standard.', ShieldCheck],
          ['More repeat business', 'Use the same order data for points, rewards, offers and repeat-purchase analysis.', Users],
          ['Better owner visibility', 'See sales, customer and production signals in one management view instead of separate tools.', BarChart3],
        ] as const,
        twoTitle: 'Two capabilities make the platform especially different for beverage operators.',
        machineTitle: 'Tea-machine integration',
        machineText: 'The order does not stop at checkout. Drink specifications can continue into the production workflow, helping reduce re-entry, improve consistency and keep output records visible.',
        machineBullets: ['Machine-linked production flow', 'Structured drink specifications', 'Production status and output records', 'Remote operational visibility'],
        loyaltyTitle: 'Loyalty & member growth',
        loyaltyText: 'The customer relationship stays connected to the transaction. Points, coupons, campaigns and purchase history can all use the same ordering data.',
        loyaltyBullets: ['Points and member rewards', 'Campaigns and coupons', 'Customer purchase history', 'Repeat-purchase insights'],
        flowKicker: 'ONE CONNECTED CUSTOMER-TO-CUP JOURNEY',
        flowTitle: 'From order to finished drink — without breaking the data chain.',
        flowSteps: [
          ['1', 'Customer orders', 'HTML5 mobile ordering or connected sales channel'],
          ['2', 'System structures the order', 'Product, size, sugar, ice and modifiers stay attached'],
          ['3', 'Production receives it', 'Store staff or connected machine workflow sees the right instructions'],
          ['4', 'Customer is updated', 'Order status, SMS or email can keep the customer informed'],
          ['5', 'The business learns', 'Sales and member data return to analytics and future campaigns'],
        ],
        proofKicker: 'BUILT FROM REAL BEVERAGE OPERATIONS',
        proofTitle: 'Designed by a beverage supply partner that also operates real stores.',
        proofText: 'I’TEA Supply combines ingredients, equipment and smart automation for beverage businesses in Europe. The software is shaped by real store workflows rather than by a generic retail template.',
        proofStats: [['400+', 'foodservice businesses in our European network'], ['20+', 'European countries served by I’TEA Supply'], ['NL + IE', 'live connected-store operating environments']],
        tourKicker: 'PRODUCT WALKTHROUGH',
        tourTitle: 'See the customer, production, loyalty and owner views of the same platform.',
        tabs: {
          mobile: ['Ordering', 'Customer mobile ordering'],
          production: ['Production', 'Machine-linked workflow'],
          loyalty: ['Loyalty', 'Members and retention'],
          analytics: ['Analytics', 'Owner operating view'],
        } as Record<TourKey, [string, string]>,
        supportKicker: 'IMPLEMENTATION & AFTER-SALES SUPPORT',
        supportTitle: 'A system only works if the store can actually run it.',
        supportText: 'Our team can support the full rollout — from installation and configuration to staff guidance, maintenance and remote troubleshooting.',
        supportItems: [
          ['Installation & commissioning', 'On-site setup, configuration and launch support.', Settings2],
          ['Training & operating guidance', 'Practical guidance for staff and managers.', GraduationCap],
          ['Maintenance & repair support', 'Technical support for connected equipment and system issues.', Wrench],
          ['Remote troubleshooting', 'Remote checks and ongoing operational support after launch.', Activity],
        ] as const,
        pricingTitle: 'Every store setup is different. Pricing is tailored to your project.',
        pricingText: 'Software scope, number of locations, automation hardware, integrations and implementation requirements all affect the final proposal.',
        pricingCta: 'Request a tailored proposal',
        capabilities: ['HTML5 mobile ordering', 'Order status', 'SMS / email notifications', 'Loyalty & campaigns', 'Tea-machine integration', 'Analytics', 'Delivery API integration', 'Multi-store ready'],
      }
    : {
        eyebrow: '奶茶店点单、会员与自动化系统',
        title: '顾客下单、门店制作、会员复购——一套系统连接起来。',
        subtitle: '面向奶茶店和饮品品牌的一体化运营平台：手机点单、会员营销、奶茶机联动、顾客通知和经营数据分析。',
        primary: '预约现场演示',
        secondary: '看看具体卖什么',
        fit: '适合奶茶店、咖啡饮品店以及正在扩张的连锁品牌。',
        hookLabel: '实时订单旅程',
        hookIntro: '一笔订单，付款以后还会继续往下走。',
        hookSteps: [
          ['订单进入系统', '顾客订单 + 饮品选项'],
          ['进入生产流程', '结构化制作流程'],
          ['沉淀顾客价值', '状态、积分与消费历史'],
        ],
        getTitle: '我们到底在提供什么？',
        getDesc: '不是单独卖一个软件，也不是单独卖一台机器。I’TEA 把顾客下单、门店运营和自动化生产连接成一套真正能落地的门店系统。',
        offers: [
          ['门店软件系统', '手机点单、订单状态、顾客通知、会员营销和数据分析。', Smartphone],
          ['奶茶机联动', '把结构化的饮品规格继续传递到连接式生产流程。', Cpu],
          ['安装与售后支持', '安装、调试、员工指导、维护维修和远程排障。', Wrench],
        ] as const,
        whyKicker: '为什么门店需要它',
        whyTitle: '真正的价值，是让门店更省事、出品更稳定、顾客更愿意回来。',
        whyCards: [
          ['减少人工操作', '减少顾客、收银和制作之间反复录入和重复沟通。', Zap],
          ['提高出品一致性', '糖度、冰度、规格和制作信息保持结构化，门店更容易执行统一标准。', ShieldCheck],
          ['提高复购', '同一笔订单数据可以继续用于积分、优惠、活动和复购分析。', Users],
          ['老板看得更清楚', '销售、顾客和生产信息集中到一个管理视图里。', BarChart3],
        ] as const,
        twoTitle: '对于饮品门店，最有差异化的是两件事。',
        machineTitle: '奶茶机联动',
        machineText: '订单不会在付款以后就结束。饮品规格可以继续进入生产流程，减少二次录入，提高一致性，并留下清晰的制作和出品记录。',
        machineBullets: ['奶茶机联动生产流程', '结构化饮品规格', '制作状态与出品记录', '远程运营可视性'],
        loyaltyTitle: '会员与复购',
        loyaltyText: '顾客关系和订单数据保持连接。积分、优惠券、营销活动和消费历史都可以围绕真实交易行为展开。',
        loyaltyBullets: ['积分与会员奖励', '营销活动与优惠券', '顾客消费历史', '复购数据分析'],
        flowKicker: '从顾客到出杯的一条完整链路',
        flowTitle: '从下单到饮品完成，中间的数据不断链。',
        flowSteps: [
          ['1', '顾客下单', '通过 HTML5 手机页面或其他接入渠道下单'],
          ['2', '系统整理订单', '商品、杯型、糖度、冰度和加料信息保持结构化'],
          ['3', '进入制作流程', '员工或连接式奶茶机工作流获得正确的制作信息'],
          ['4', '通知顾客', '订单状态、短信或邮件可以同步制作进度'],
          ['5', '沉淀经营数据', '销售和会员数据进入分析与后续营销'],
        ],
        proofKicker: '来自真实饮品门店运营',
        proofTitle: '我们本身就是欧洲饮品供应和门店运营的一部分。',
        proofText: 'I’TEA Supply 在欧洲提供原料、设备和智能自动化方案。这套系统不是从通用零售模板改出来的，而是围绕真实饮品门店的工作流程持续调整。',
        proofStats: [['400+', '欧洲网络中的餐饮企业客户'], ['20+', 'I’TEA Supply 已服务的欧洲国家'], ['荷兰 + 爱尔兰', '连接式门店系统的真实运营环境']],
        tourKicker: '产品演示',
        tourTitle: '同一套平台里，看看顾客端、生产端、会员端和老板端。',
        tabs: {
          mobile: ['点单', '顾客手机点单'],
          production: ['生产', '奶茶机联动流程'],
          loyalty: ['会员', '会员与复购'],
          analytics: ['数据', '老板经营视图'],
        } as Record<TourKey, [string, string]>,
        supportKicker: '安装实施与售后支持',
        supportTitle: '系统好不好，最后还是要看门店能不能真正用起来。',
        supportText: '我们的团队可以从安装调试开始一直支持到正式运营，包括员工指导、维护维修和远程排障。',
        supportItems: [
          ['安装与调试', '现场安装、系统设置和上线支持。', Settings2],
          ['培训与运营指导', '针对店员和管理人员提供实际操作指导。', GraduationCap],
          ['维护与维修支持', '对连接设备和系统问题提供技术支持。', Wrench],
          ['远程排障与持续支持', '上线后继续提供远程检查和运营支持。', Activity],
        ] as const,
        pricingTitle: '每家门店的需求不同，所以我们采用定制报价。',
        pricingText: '软件模块、门店数量、自动化设备、第三方接入和实施服务都会影响最终方案。',
        pricingCta: '联系我们获取方案与报价',
        capabilities: ['HTML5 手机点单', '订单状态', 'SMS / Email 通知', '会员与营销', '奶茶机联动', '数据分析', '外卖 API 接入', '多门店扩展'],
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.eyebrow}</div>
            <h1 className="mt-5 text-[40px] font-semibold leading-[1.06] tracking-[-0.042em] text-[#391A10] sm:text-[48px] lg:text-[56px]">{copy.title}</h1>
            <p className="mt-5 text-[17px] leading-7 text-[#6d5a51]">{copy.subtitle}</p>
            <div className="mt-6 flex items-center gap-2 text-[12px] font-medium text-[#7a645a]"><Store className="h-4 w-4 text-[#7a3d27]" />{copy.fit}</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#391A10] px-5 text-sm font-semibold text-white transition hover:bg-[#5a2a1a]">{copy.primary}<ArrowRight className="h-4 w-4" /></Link>
              <a href="#what-we-sell" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#cdbdb3] bg-white px-5 text-sm font-semibold text-[#4b3026] transition hover:bg-[#f8f2ed]">{copy.secondary}</a>
            </div>
          </div>

          <div>
            <div className="mb-3 overflow-hidden rounded-lg border border-[#ddcfc6] bg-white shadow-[0_12px_35px_-30px_rgba(57,26,16,0.45)]">
              <div className="flex items-center justify-between border-b border-[#eee3db] px-4 py-2.5">
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#8a4a30] shadow-[0_0_0_4px_rgba(138,74,48,0.10)]" /><span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#806b61]">{copy.hookLabel}</span></div>
                <span className="hidden text-[11px] text-[#a28f84] sm:block">{copy.hookIntro}</span>
              </div>
              <div className="grid grid-cols-3">
                {copy.hookSteps.map(([title, desc], index) => {
                  const active = hookStep === index;
                  return <div key={title} className={`relative px-3 py-3 transition sm:px-4 ${active ? 'bg-[#fbf5f0]' : 'bg-white'}`}><div className="flex items-center gap-2"><span className={`flex h-5 w-5 items-center justify-center rounded-full border text-[9px] font-semibold transition ${active ? 'border-[#391A10] bg-[#391A10] text-white' : 'border-[#d9ccc4] text-[#9e8a7f]'}`}>{index + 1}</span><span className={`truncate text-[10px] font-semibold sm:text-[11px] ${active ? 'text-[#391A10]' : 'text-[#806b61]'}`}>{title}</span></div><p className="mt-1.5 hidden pl-7 text-[10px] leading-4 text-[#a08d82] sm:block">{desc}</p>{active && <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#7a3d27]" />}</div>;
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#dfd2c9] bg-[#f7f1ec] shadow-[0_24px_70px_-45px_rgba(57,26,16,0.35)]">
              <div className="flex items-center justify-between border-b border-[#e6d9d0] bg-white px-4 py-3">
                <div className="flex items-center gap-2 text-[12px] font-semibold text-[#4b3026]"><span className="h-2 w-2 rounded-full bg-[#8a4a30]" /> I&apos;TEA Control</div>
                <div className="text-[11px] text-[#9a8479]">Connected operations</div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#e6d9d0] bg-white">
                {tourItems.map(({ key, icon: Icon }) => {
                  const active = activeTour === key;
                  return <button key={key} type="button" onClick={() => setActiveTour(key)} className={`min-w-[74px] border-b-2 px-2 py-3 text-left transition sm:px-4 ${active ? 'border-[#391A10] bg-[#fbf6f2]' : 'border-transparent hover:bg-[#fcfaf8]'}`}><div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#4b3026] sm:text-[12px]"><Icon className={`h-4 w-4 ${active ? 'text-[#7a3d27]' : 'text-[#aa958a]'}`} /><span>{copy.tabs[key][0]}</span></div></button>;
                })}
              </div>
              <div className="p-3 sm:p-5"><LiveSystemView kind={activeTour} language={uiLanguage} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-sell" className="border-b border-[#eadfd6] bg-[#f8f3ef] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><h2 className="text-[30px] font-semibold tracking-[-0.035em] text-[#391A10] sm:text-[36px]">{copy.getTitle}</h2><p className="mt-4 text-[15px] leading-7 text-[#6d5a51]">{copy.getDesc}</p></div>
          <div className="mt-10 grid gap-px overflow-hidden border border-[#ddcfc6] bg-[#ddcfc6] md:grid-cols-3">
            {copy.offers.map(([title, desc, Icon], i) => { const C = Icon as React.ComponentType<{ className?: string }>; return <article key={String(title)} className="bg-[#fffdfb] p-6 sm:p-7"><div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#f1e4da] text-[#6a321f]"><C className="h-5 w-5" /></div><span className="text-[10px] font-semibold tracking-[0.14em] text-[#b29d92]">0{i + 1}</span></div><h3 className="mt-5 text-[19px] font-semibold text-[#391A10]">{String(title)}</h3><p className="mt-3 text-[13px] leading-6 text-[#746158]">{String(desc)}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.whyKicker}</div><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[36px]">{copy.whyTitle}</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{copy.whyCards.map(([title, desc, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(title)} className="border-t-2 border-[#7a3d27] bg-[#fffdfb] pt-5"><C className="h-5 w-5 text-[#7a3d27]" /><div className="mt-4 text-[16px] font-semibold text-[#391A10]">{String(title)}</div><p className="mt-2 text-[12px] leading-5 text-[#746158]">{String(desc)}</p></div>; })}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-[#fffdfb] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-[30px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[36px]">{copy.twoTitle}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[[copy.machineTitle, copy.machineText, copy.machineBullets, Cpu], [copy.loyaltyTitle, copy.loyaltyText, copy.loyaltyBullets, Gift]].map(([title, text, bullets, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <article key={String(title)} className="border border-[#ddcfc6] bg-white p-7"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#391A10] text-white"><C className="h-5 w-5" /></div><h3 className="mt-6 text-[24px] font-semibold tracking-[-0.03em] text-[#391A10]">{String(title)}</h3><p className="mt-4 text-[14px] leading-6 text-[#6d5a51]">{String(text)}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{(bullets as string[]).map((item) => <div key={item} className="flex gap-2 border-t border-[#eadfd6] pt-3 text-[12px] font-medium text-[#5f4b42]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7a3d27]" />{item}</div>)}</div></article>; })}
          </div>
        </div>
      </section>

      <section className="bg-[#2a130c] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d0a98f]">{copy.flowKicker}</div><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] sm:text-[36px]">{copy.flowTitle}</h2></div>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5">{copy.flowSteps.map(([n, title, desc]) => <div key={n} className="bg-[#2a130c] p-5"><div className="text-[10px] font-semibold tracking-[0.16em] text-[#d0a98f]">{n}</div><div className="mt-4 text-[15px] font-semibold text-white">{title}</div><p className="mt-2 text-[12px] leading-5 text-[#baa79d]">{desc}</p></div>)}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:items-start">
          <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.proofKicker}</div><h2 className="mt-4 text-[30px] font-semibold tracking-[-0.035em] text-[#391A10] sm:text-[36px]">{copy.proofTitle}</h2><p className="mt-4 text-[14px] leading-7 text-[#6d5a51]">{copy.proofText}</p></div>
          <div className="grid border-y border-[#ddcfc6] sm:grid-cols-3 sm:divide-x sm:divide-[#ddcfc6]">{copy.proofStats.map(([value, label]) => <div key={value} className="py-5 sm:px-6 first:pl-0"><div className="text-[30px] font-semibold tracking-[-0.04em] text-[#391A10]">{value}</div><div className="mt-1 text-[12px] leading-5 text-[#7e6a60]">{label}</div></div>)}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-[#f8f3ef] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.tourKicker}</div><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[36px]">{copy.tourTitle}</h2><div className="mt-7 border-l border-[#d8c8be]">{tourItems.map(({ key, icon: Icon }) => { const active = activeTour === key; return <button key={key} type="button" onClick={() => setActiveTour(key)} className={`block w-full border-l-2 px-5 py-3 text-left transition ${active ? '-ml-px border-[#391A10] bg-white' : '-ml-px border-transparent hover:bg-white/60'}`}><div className="flex items-center gap-3"><Icon className={`h-4 w-4 ${active ? 'text-[#7a3d27]' : 'text-[#a9968b]'}`} /><span className="text-[14px] font-semibold text-[#4b3026]">{copy.tabs[key][0]}</span></div><p className="mt-1 pl-7 text-[12px] text-[#826e64]">{copy.tabs[key][1]}</p></button>; })}</div></div><div className="rounded-lg border border-[#d8c8be] bg-white p-3 sm:p-5"><LiveSystemView kind={activeTour} language={uiLanguage} /></div></div></div>
      </section>

      <section className="border-b border-[#eadfd6] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.supportKicker}</div><h2 className="mt-4 text-[30px] font-semibold tracking-[-0.035em] text-[#391A10] sm:text-[36px]">{copy.supportTitle}</h2><p className="mt-4 text-[14px] leading-7 text-[#6d5a51]">{copy.supportText}</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{copy.supportItems.map(([title, desc, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(title)} className="border border-[#e3d6ce] bg-[#fffdfb] p-5"><C className="h-5 w-5 text-[#7a3d27]" /><h3 className="mt-4 text-[15px] font-semibold text-[#391A10]">{String(title)}</h3><p className="mt-2 text-[12px] leading-5 text-[#766259]">{String(desc)}</p></div>; })}</div></div>
      </section>

      <section className="bg-[#fffdfb] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border border-[#d9c9c0] bg-[#391A10] px-7 py-10 text-white sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="max-w-3xl text-[28px] font-semibold leading-tight tracking-[-0.035em] sm:text-[34px]">{copy.pricingTitle}</h2><p className="mt-4 max-w-2xl text-[13px] leading-6 text-[#d7c6bd]">{copy.pricingText}</p><div className="mt-5 flex flex-wrap gap-2">{copy.capabilities.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-medium text-[#eadfd7]">{item}</span>)}</div></div><Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#f3e4da] px-5 text-sm font-semibold text-[#391A10] transition hover:bg-white">{copy.pricingCta}<ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
};

export default Home;
