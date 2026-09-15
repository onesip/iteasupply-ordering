import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  Cpu,
  CreditCard,
  Gift,
  GraduationCap,
  Package,
  Settings2,
  Smartphone,
  Store,
  Tag,
  Trash2,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type ScreenKey = 'ordering' | 'label' | 'production' | 'loyalty' | 'analytics' | 'catalog';
type LiveKind = 'mobile' | 'label' | 'production' | 'loyalty' | 'analytics' | 'catalog';

const screenKind: Record<ScreenKey, LiveKind> = {
  ordering: 'mobile',
  label: 'label',
  production: 'production',
  loyalty: 'loyalty',
  analytics: 'analytics',
  catalog: 'catalog',
};

const Home = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const uiLanguage = en ? 'en' : 'zh';
  const [heroStep, setHeroStep] = useState(0);
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('label');

  useEffect(() => {
    const timer = window.setInterval(() => setHeroStep((step) => (step + 1) % 4), 2600);
    return () => window.clearInterval(timer);
  }, []);

  const copy = en
    ? {
        eyebrow: 'BUBBLE TEA ORDERING · AUTOMATION · LOYALTY',
        title: 'One order. One production flow. One system to run the store.',
        subtitle: 'I’TEA connects mobile ordering, automatic production labels, tea-machine-linked workflows, membership and store analytics for beverage businesses.',
        primary: 'Book a live demo',
        secondary: 'See one order in action',
        fit: 'Built for bubble tea shops, beverage stores and growing chains.',
        deconstruct: 'DECONSTRUCT ONE ORDER',
        deconstructSub: 'See what one transaction activates across the store.',
        orderTitle: 'Order #A184',
        orderItem: 'Mango Matcha',
        orderSpecs: 'Medium · 50% sugar · Low ice · Pearls',
        input: 'Customer ordered on mobile',
        heroNodes: [
          ['Sticker prints', 'Order, drink, modifiers and QR', Tag, 'label'],
          ['Machine workflow', 'Structured production, less re-entry', Cpu, 'production'],
          ['Member retention', 'Points, campaigns and purchase history', Gift, 'loyalty'],
          ['Business data', 'Production history and analytics', BarChart3, 'analytics'],
        ] as const,
        heroFooter: 'One order → production → customer retention → management data',
        coreKicker: 'THE AUTOMATION CORE',
        coreTitle: 'The order does not stop at checkout.',
        coreDesc: 'The most important part of the platform is the production connection: a customer order becomes a clear production label, then continues into a tea-machine-linked workflow with production records.',
        steps: [
          {
            n: '01', title: 'Customer orders on mobile',
            text: 'Customers can order from an HTML5 mobile page without downloading an app. Product, size, sugar, ice and modifiers stay attached to the same order.',
            bullets: ['No app required', 'Order ahead', 'Drink customization', 'Order status supported'],
            screen: 'ordering' as ScreenKey,
          },
          {
            n: '02', title: 'A production sticker is generated automatically',
            text: 'The production label turns the order into something the store team can act on immediately. It can carry the pickup number, drink name, specifications, modifiers and QR reference.',
            bullets: ['Pickup number', 'Drink name', 'Specification', 'Modifiers / toppings', 'QR reference'],
            screen: 'label' as ScreenKey,
          },
          {
            n: '03', title: 'The order continues into the tea-machine workflow',
            text: 'This is the key differentiator. Structured drink information can continue into automated beverage production, reducing manual handoffs while keeping production output visible.',
            bullets: ['Tea-machine-linked workflow', 'Less manual re-entry', 'More consistent execution', 'Production records & output history', 'Remote operational visibility'],
            screen: 'production' as ScreenKey,
          },
        ],
        automationKicker: 'WHY AUTOMATION MATTERS',
        automationTitle: 'Tea-machine integration is not an add-on. It is the center of the workflow.',
        automationText: 'Many systems stop after the order is paid. I’TEA is designed so order data can continue into production, remain traceable, and then return to the management layer as usable operational data.',
        automationPoints: [
          ['Order → production', 'Drink specifications stay connected instead of being typed again.', Zap],
          ['Production consistency', 'Structured instructions support a repeatable store standard.', Cpu],
          ['Traceability', 'Production records make output, timing and history visible.', ClipboardList],
          ['Scale', 'A repeatable workflow is easier to train, support and roll out across locations.', Building2],
        ] as const,
        beyondKicker: 'AFTER THE DRINK IS MADE',
        beyondTitle: 'The same order keeps working for the business.',
        beyondDesc: 'Automation is the core, but the same system also supports customer retention and day-to-day store management after production.',
        management: [
          ['Membership & campaigns', 'Points, coupons, campaigns and customer purchase history.', Gift],
          ['Sales & customer analytics', 'Sales, traffic, repeat customers and product trends.', BarChart3],
          ['Production records', 'Review production timing, output and historical records.', ClipboardList],
          ['Wastage & loss', 'Record wastage and operational loss for better control.', Trash2],
          ['Inventory', 'Manage products, materials and stock movement.', Package],
          ['Finance & payments', 'Review payment, transaction and financial operating data.', CreditCard],
          ['Delivery integration', 'Connect delivery channels and external APIs into the same order flow.', Truck],
          ['Multi-store control', 'Keep a central operating view as the business expands.', Store],
        ] as const,
        realKicker: 'REAL PRODUCT VIEWS',
        realTitle: 'See the customer, production and management flow.',
        realDesc: 'The platform connects the front-end customer journey with production and the operating data behind the store.',
        tabs: {
          ordering: ['Mobile ordering', 'Customer order-ahead and customization'],
          label: ['Production label', 'Automatic sticker output with order information'],
          production: ['Production records', 'Machine-linked output and history'],
          loyalty: ['Membership', 'Members, campaigns and retention'],
          analytics: ['Analytics', 'Sales and customer performance'],
          catalog: ['Product control', 'Menu, sizes, prices and product status'],
        } as Record<ScreenKey, [string, string]>,
        proofKicker: 'BUILT FOR REAL BEVERAGE OPERATIONS',
        proofTitle: 'Software, automation and implementation — together.',
        proofText: 'I’TEA Supply combines beverage ingredients, equipment and smart automation for European foodservice businesses. The platform is shaped around real beverage-store workflows, not a generic retail template.',
        proofStats: [['400+', 'foodservice businesses in our European network'], ['20+', 'European countries served by I’TEA Supply'], ['NL + IE', 'live connected-store operating environments']],
        supportKicker: 'IMPLEMENTATION & AFTER-SALES SUPPORT',
        supportTitle: 'A connected system also needs people who can make it work in the store.',
        supportText: 'Our team can support the rollout from installation and commissioning through staff guidance, maintenance, repair and remote troubleshooting.',
        supportItems: [
          ['Installation & commissioning', 'On-site setup, configuration and launch support.', Settings2],
          ['Training & operating guidance', 'Practical guidance for staff and managers.', GraduationCap],
          ['Maintenance & repair', 'Technical support for connected equipment and system issues.', Wrench],
          ['Remote troubleshooting', 'Remote checks and ongoing support after launch.', Activity],
        ] as const,
        pricingTitle: 'Every store setup is different. Pricing is tailored to your project.',
        pricingText: 'Software modules, store count, automation hardware, integrations and implementation requirements determine the final proposal.',
        pricingCta: 'Request a tailored proposal',
      }
    : {
        eyebrow: '奶茶店点单 · 自动化生产 · 会员运营',
        title: '一笔订单，一条生产链，一套系统把门店连接起来。',
        subtitle: 'I’TEA 把手机点单、自动制作标签、奶茶机联动生产、会员运营和门店数据分析连接成一套饮品店运营系统。',
        primary: '预约现场演示',
        secondary: '看一笔订单如何运转',
        fit: '适合奶茶店、饮品门店以及正在扩张的连锁品牌。',
        deconstruct: '解构一笔订单',
        deconstructSub: '看看一笔交易在门店里会自动触发哪些环节。',
        orderTitle: '订单 #A184',
        orderItem: '芒果抹茶',
        orderSpecs: '中杯 · 50% 糖 · 少冰 · 珍珠',
        input: '顾客通过手机下单',
        heroNodes: [
          ['自动出标签', '订单、饮品、小料和二维码', Tag, 'label'],
          ['奶茶机生产', '结构化制作，减少二次录入', Cpu, 'production'],
          ['会员复购', '积分、活动和消费历史', Gift, 'loyalty'],
          ['经营数据', '生产记录与经营分析', BarChart3, 'analytics'],
        ] as const,
        heroFooter: '一笔订单 → 自动生产 → 顾客复购 → 经营数据',
        coreKicker: '自动化核心链路',
        coreTitle: '订单不会在付款之后就结束。',
        coreDesc: '整套系统最重要的是生产联动：顾客订单先自动生成清晰的制作标签，然后继续进入奶茶机联动生产流程，并留下制作和出品记录。',
        steps: [
          {
            n: '01', title: '顾客手机下单',
            text: '顾客通过 HTML5 手机页面直接下单，无需下载 App。商品、杯型、糖度、冰度和小料始终跟随同一笔订单。',
            bullets: ['无需下载 App', '支持提前下单', '饮品定制', '支持订单状态'],
            screen: 'ordering' as ScreenKey,
          },
          {
            n: '02', title: '系统自动生成制作标签',
            text: '标签把订单转化成门店可以立即执行的制作信息，包括取餐号、饮品名、规格、小料和二维码参考。',
            bullets: ['取餐号', '饮品名称', '规格', '小料 / Modifiers', '二维码参考'],
            screen: 'label' as ScreenKey,
          },
          {
            n: '03', title: '订单继续进入奶茶机联动生产',
            text: '这是最核心的差异化。结构化的饮品信息可以继续进入自动化饮品生产流程，减少人工交接，同时保留生产状态和出品记录。',
            bullets: ['奶茶机联动生产', '减少人工二次录入', '提高出品一致性', '生产记录与出品历史', '远程运营可视性'],
            screen: 'production' as ScreenKey,
          },
        ],
        automationKicker: '为什么自动化重要',
        automationTitle: '奶茶机联动不是附加功能，而是整条流程的核心。',
        automationText: '很多系统在顾客付款以后就结束了。I’TEA 的逻辑是让订单数据继续进入生产，保留可追踪的记录，再把这些数据回到门店管理层。',
        automationPoints: [
          ['订单 → 生产', '饮品规格持续跟随订单，不需要重新录入。', Zap],
          ['出品一致性', '结构化制作信息帮助门店更容易执行统一标准。', Cpu],
          ['可追踪', '生产记录让制作时间、出品和历史更清楚。', ClipboardList],
          ['可复制扩张', '流程更标准，也更容易培训、支持和复制到新门店。', Building2],
        ] as const,
        beyondKicker: '饮品做好以后',
        beyondTitle: '同一笔订单还会继续为门店产生价值。',
        beyondDesc: '自动化是核心，但生产结束以后，同一套系统还继续支持会员复购和门店日常经营管理。',
        management: [
          ['会员与营销活动', '积分、优惠券、活动和顾客消费历史。', Gift],
          ['销售与顾客分析', '营业额、客流、复购和产品趋势。', BarChart3],
          ['生产记录', '查看制作时间、出品情况和历史记录。', ClipboardList],
          ['报损与损耗', '记录报损和运营损耗，帮助门店控制成本。', Trash2],
          ['库存管理', '管理商品、原料与库存变化。', Package],
          ['财政与支付', '查看支付、交易和经营相关财务数据。', CreditCard],
          ['外卖一体化', '把外卖渠道和外部 API 接入同一订单流程。', Truck],
          ['多门店管理', '品牌扩张以后仍然保留统一的管理视图。', Store],
        ] as const,
        realKicker: '真实产品界面',
        realTitle: '从顾客端到生产端，再到老板管理端。',
        realDesc: '同一套平台把前端顾客体验、门店生产和后台经营数据连接起来。',
        tabs: {
          ordering: ['手机点单', '顾客提前下单与饮品定制'],
          label: ['制作标签', '订单信息自动生成制作贴纸'],
          production: ['生产记录', '奶茶机联动出品与历史记录'],
          loyalty: ['会员运营', '会员、营销活动与复购'],
          analytics: ['数据分析', '销售与顾客经营表现'],
          catalog: ['商品管理', '菜单、杯型、价格和商品状态'],
        } as Record<ScreenKey, [string, string]>,
        proofKicker: '来自真实饮品业务',
        proofTitle: '软件、自动化设备和实施支持放在一起。',
        proofText: 'I’TEA Supply 为欧洲餐饮客户提供饮品原料、设备和智能自动化方案。这套平台围绕真实饮品门店工作流程持续调整，而不是通用零售模板。',
        proofStats: [['400+', '欧洲网络中的餐饮企业客户'], ['20+', 'I’TEA Supply 已服务的欧洲国家'], ['荷兰 + 爱尔兰', '连接式门店系统的真实运营环境']],
        supportKicker: '安装实施与售后支持',
        supportTitle: '连接式系统不仅需要软件，也需要有人真正帮门店落地。',
        supportText: '我们的团队可以从安装调试开始，一直支持到员工指导、维护维修和远程排障。',
        supportItems: [
          ['安装与调试', '现场安装、配置和上线支持。', Settings2],
          ['培训与运营指导', '针对店员和管理人员提供实际操作指导。', GraduationCap],
          ['维护与维修', '针对连接设备和系统问题提供技术支持。', Wrench],
          ['远程排障', '上线以后继续提供远程检查和持续支持。', Activity],
        ] as const,
        pricingTitle: '每家门店的需求不同，因此采用定制报价。',
        pricingText: '软件模块、门店数量、自动化设备、第三方接入和实施需求都会影响最终方案。',
        pricingCta: '联系我们获取方案与报价',
      };

  const screenTabs = useMemo(() => (Object.keys(copy.tabs) as ScreenKey[]), [copy.tabs]);
  const activeHero = copy.heroNodes[heroStep];

  return (
    <div className="min-h-screen bg-[#fffdfb] pt-16 text-[#2f211b]">
      <section className="border-b border-[#eadfd6] bg-[#fffdfb]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.eyebrow}</div>
            <h1 className="mt-5 text-[40px] font-semibold leading-[1.06] tracking-[-0.042em] text-[#391A10] sm:text-[48px] lg:text-[56px]">{copy.title}</h1>
            <p className="mt-5 text-[16px] leading-7 text-[#6d5a51] sm:text-[17px]">{copy.subtitle}</p>
            <div className="mt-6 flex items-center gap-2 text-[12px] font-medium text-[#7a645a]"><Store className="h-4 w-4 text-[#7a3d27]" />{copy.fit}</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#391A10] px-5 text-sm font-semibold text-white transition hover:bg-[#5a2a1a]">{copy.primary}<ArrowRight className="h-4 w-4" /></Link>
              <a href="#automation-core" className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#cdbdb3] bg-white px-5 text-sm font-semibold text-[#4b3026] transition hover:bg-[#f8f2ed]">{copy.secondary}</a>
            </div>
          </div>

          <div className="rounded-xl border border-[#ddcfc6] bg-[#f8f3ef] p-3 shadow-[0_26px_65px_-48px_rgba(57,26,16,0.5)] sm:p-5">
            <div className="flex items-end justify-between gap-4 border-b border-[#e4d7cf] pb-4">
              <div><div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#7a3d27]">{copy.deconstruct}</div><div className="mt-1 text-[12px] text-[#806b61]">{copy.deconstructSub}</div></div>
              <span className="hidden rounded-full bg-white px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8c7468] sm:inline">LIVE FLOW</span>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="space-y-3">
                <div className="rounded-lg border border-[#d9c9c0] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between"><span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#9d897f]">{copy.input}</span><Smartphone className="h-4 w-4 text-[#7a3d27]" /></div>
                  <div className="mt-5 text-[21px] font-semibold tracking-[-0.03em] text-[#391A10]">{copy.orderTitle}</div>
                  <div className="mt-1 text-[15px] font-semibold text-[#4b3026]">{copy.orderItem}</div>
                  <div className="mt-1 text-[11px] leading-5 text-[#806b61]">{copy.orderSpecs}</div>
                  <div className="mt-4 flex items-center gap-2 border-t border-[#efe6df] pt-3 text-[10px] font-medium text-[#7a3d27]"><ArrowRight className="h-3.5 w-3.5" />{en ? 'Order data stays connected' : '订单数据持续保持连接'}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                  {copy.heroNodes.map(([title, desc, Icon], index) => {
                    const C = Icon as React.ComponentType<{ className?: string }>;
                    const active = heroStep === index;
                    return <button key={String(title)} type="button" onClick={() => setHeroStep(index)} className={`rounded-lg border p-3 text-left transition ${active ? 'border-[#7a3d27] bg-[#391A10] text-white shadow-sm' : 'border-[#dfd2c9] bg-white text-[#4b3026] hover:border-[#b99f91]'}`}><div className="flex items-center gap-2"><C className={`h-4 w-4 ${active ? 'text-[#f0cbb5]' : 'text-[#7a3d27]'}`} /><span className="text-[11px] font-semibold">{title}</span></div><div className={`mt-1.5 text-[9px] leading-4 ${active ? 'text-[#d9c8be]' : 'text-[#8d786d]'}`}>{desc}</div></button>;
                  })}
                </div>
              </div>

              <div className="min-w-0">
                <div className="mb-2 flex items-center justify-between text-[10px]"><span className="font-semibold text-[#7a3d27]">{activeHero[0]}</span><span className="text-[#a08b80]">0{heroStep + 1}/04</span></div>
                <LiveSystemView kind={screenKind[activeHero[3] as ScreenKey]} compact language={uiLanguage} />
                <div className="mt-3 flex items-center gap-2 rounded-md bg-[#391A10] px-3 py-2 text-[10px] font-medium text-[#f4e6dd]"><Zap className="h-3.5 w-3.5 text-[#e7b89c]" />{copy.heroFooter}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="automation-core" className="border-b border-[#eadfd6] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.coreKicker}</div><h2 className="mt-4 text-[31px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[38px]">{copy.coreTitle}</h2><p className="mt-4 text-[15px] leading-7 text-[#6d5a51]">{copy.coreDesc}</p></div>
          <div className="mt-12 space-y-12 lg:space-y-16">
            {copy.steps.map((step, index) => (
              <div key={step.n} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="rounded-xl border border-[#ded2ca] bg-[#faf7f4] p-4 sm:p-6"><LiveSystemView kind={screenKind[step.screen]} language={uiLanguage} /></div>
                <div className="max-w-xl"><div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#a17f6e]">{step.n}</div><h3 className="mt-3 text-[25px] font-semibold leading-tight tracking-[-0.03em] text-[#391A10] sm:text-[29px]">{step.title}</h3><p className="mt-4 text-[14px] leading-7 text-[#6d5a51]">{step.text}</p><div className="mt-6 grid gap-2 sm:grid-cols-2">{step.bullets.map((item) => <div key={item} className="flex gap-2 border-t border-[#eadfd6] pt-3 text-[12px] font-medium text-[#5f4b42]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7a3d27]" />{item}</div>)}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2a130c] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d3ab91]">{copy.automationKicker}</div><h2 className="mt-4 text-[31px] font-semibold leading-tight tracking-[-0.035em] sm:text-[38px]">{copy.automationTitle}</h2><p className="mt-5 text-[14px] leading-7 text-[#c8b4aa]">{copy.automationText}</p><Link to="/features/machine" className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-[#efc7ae] hover:text-white">{en ? 'Explore machine integration' : '查看奶茶机联动'}<ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">{copy.automationPoints.map(([title, desc, Icon], index) => { const C = Icon as React.ComponentType<{ className?: string }>; return <article key={String(title)} className="bg-[#2a130c] p-6"><div className="flex items-center justify-between"><C className="h-5 w-5 text-[#e2b89e]" /><span className="text-[10px] font-semibold tracking-[0.14em] text-[#80675c]">0{index + 1}</span></div><h3 className="mt-5 text-[16px] font-semibold text-white">{String(title)}</h3><p className="mt-2 text-[12px] leading-6 text-[#bba79d]">{String(desc)}</p></article>; })}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-[#f8f3ef] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.beyondKicker}</div><h2 className="mt-4 text-[31px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[38px]">{copy.beyondTitle}</h2><p className="mt-4 text-[15px] leading-7 text-[#6d5a51]">{copy.beyondDesc}</p></div>
          <div className="mt-10 grid gap-px overflow-hidden border border-[#ddcfc6] bg-[#ddcfc6] sm:grid-cols-2 lg:grid-cols-4">{copy.management.map(([title, desc, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <article key={String(title)} className="bg-[#fffdfb] p-5 sm:p-6"><C className="h-5 w-5 text-[#7a3d27]" /><h3 className="mt-4 text-[15px] font-semibold text-[#391A10]">{String(title)}</h3><p className="mt-2 text-[12px] leading-5 text-[#766259]">{String(desc)}</p></article>; })}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.realKicker}</div><h2 className="mt-4 text-[31px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[38px]">{copy.realTitle}</h2><p className="mt-4 text-[14px] leading-7 text-[#6d5a51]">{copy.realDesc}</p><div className="mt-7 border-l border-[#d8c8be]">{screenTabs.map((key) => { const active = activeScreen === key; return <button key={key} type="button" onClick={() => setActiveScreen(key)} className={`block w-full border-l-2 px-5 py-3 text-left transition ${active ? '-ml-px border-[#391A10] bg-[#fbf6f2]' : '-ml-px border-transparent hover:bg-[#fcfaf8]'}`}><div className="text-[13px] font-semibold text-[#4b3026]">{copy.tabs[key][0]}</div><p className="mt-1 text-[11px] leading-5 text-[#826e64]">{copy.tabs[key][1]}</p></button>; })}</div></div>
            <div className="rounded-xl border border-[#d8c8be] bg-[#f8f3ef] p-3 sm:p-5"><LiveSystemView kind={screenKind[activeScreen]} language={uiLanguage} /></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-[#fffdfb] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-start lg:px-8">
          <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.proofKicker}</div><h2 className="mt-4 text-[31px] font-semibold leading-tight tracking-[-0.035em] text-[#391A10] sm:text-[38px]">{copy.proofTitle}</h2><p className="mt-4 text-[14px] leading-7 text-[#6d5a51]">{copy.proofText}</p></div>
          <div className="grid border-y border-[#ddcfc6] sm:grid-cols-3 sm:divide-x sm:divide-[#ddcfc6]">{copy.proofStats.map(([value, label]) => <div key={value} className="py-5 sm:px-6 first:pl-0"><div className="text-[30px] font-semibold tracking-[-0.04em] text-[#391A10]">{value}</div><div className="mt-1 text-[12px] leading-5 text-[#7e6a60]">{label}</div></div>)}</div>
        </div>
      </section>

      <section className="border-b border-[#eadfd6] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="max-w-3xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a3d27]">{copy.supportKicker}</div><h2 className="mt-4 text-[31px] font-semibold tracking-[-0.035em] text-[#391A10] sm:text-[38px]">{copy.supportTitle}</h2><p className="mt-4 text-[14px] leading-7 text-[#6d5a51]">{copy.supportText}</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{copy.supportItems.map(([title, desc, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(title)} className="border border-[#e3d6ce] bg-[#fffdfb] p-5"><C className="h-5 w-5 text-[#7a3d27]" /><h3 className="mt-4 text-[15px] font-semibold text-[#391A10]">{String(title)}</h3><p className="mt-2 text-[12px] leading-5 text-[#766259]">{String(desc)}</p></div>; })}</div></div>
      </section>

      <section className="bg-[#fffdfb] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border border-[#d9c9c0] bg-[#391A10] px-7 py-10 text-white sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="max-w-3xl text-[28px] font-semibold leading-tight tracking-[-0.035em] sm:text-[34px]">{copy.pricingTitle}</h2><p className="mt-4 max-w-2xl text-[13px] leading-6 text-[#d7c6bd]">{copy.pricingText}</p></div><Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#f3e4da] px-5 text-sm font-semibold text-[#391A10] transition hover:bg-white">{copy.pricingCta}<ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
};

export default Home;
