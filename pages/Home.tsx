import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Cpu,
  Gift,
  Globe2,
  Mail,
  Plug,
  Rocket,
  Smartphone,
  Store,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView } from '../src/components/LiveSystemShowcase';

type TourKey = 'mobile' | 'production' | 'loyalty' | 'analytics';
type ValueKey = 'brand' | 'store' | 'customer' | 'expansion';

const Home = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const uiLanguage = isEn ? 'en' : 'zh';
  const [activeTour, setActiveTour] = useState<TourKey>('production');
  const [activeValue, setActiveValue] = useState<ValueKey>('brand');

  const copy = isEn
    ? {
        eyebrow: 'BUILT FOR BEVERAGE BRANDS THAT WANT TO SCALE',
        title: 'Turn store operations into a repeatable growth system.',
        subtitle: 'Connect mobile ordering, machine-linked production, loyalty and analytics so brands can open faster, run more consistently and keep customers coming back.',
        primary: 'Book exhibition demo',
        secondary: 'See business impact',
        proofLabel: "I'TEA SUPPLY IN EUROPE",
        proof: [
          ['400+', 'foodservice businesses in our European network'],
          ['20+', "European countries served by I'TEA Supply"],
          ['NL + IE', 'live connected-store operations'],
        ],
        valueKicker: 'WHY IT MATTERS',
        valueTitle: 'The same platform creates value at every layer of the business.',
        valueDesc: 'At an exhibition, the question is not only what the software can do. It is what changes for headquarters, the store team, the customer and the next location you open.',
        values: {
          brand: {
            label: 'Brand HQ',
            title: 'Standardize the brand without micromanaging every store.',
            desc: 'Bring customer, order, production and performance data into one operating view so headquarters can manage by exception instead of chasing information across systems.',
            bullets: ['One source of operating data', 'Central campaigns and customer logic', 'Production and sales visibility in one view'],
            tour: 'analytics' as TourKey,
          },
          store: {
            label: 'Store operations',
            title: 'Remove handoffs that create errors and slow service.',
            desc: 'Keep drink specifications attached to the order and move them into a structured production workflow with clear status updates for staff and customers.',
            bullets: ['Less manual re-entry', 'Clear production status', 'Simpler day-to-day training and execution'],
            tour: 'production' as TourKey,
          },
          customer: {
            label: 'Customer growth',
            title: 'Make ordering easier — then turn the transaction into the next visit.',
            desc: 'Customers can order from mobile, receive status updates and build loyalty history in the same journey instead of moving between disconnected tools.',
            bullets: ['No-app HTML5 ordering', 'SMS / email status updates', 'Points, offers and repeat-purchase history'],
            tour: 'mobile' as TourKey,
          },
          expansion: {
            label: 'Expansion',
            title: 'Repeat the operating model when you open the next store.',
            desc: 'A connected platform makes it easier to roll out the same ordering, production, loyalty and reporting logic across locations while keeping room for local integrations.',
            bullets: ['Reusable store workflow', 'Central operating logic', 'Open API layer for channels and devices'],
            tour: 'analytics' as TourKey,
          },
        },
        engineKicker: 'TWO ENGINES, ONE BUSINESS LOOP',
        engineTitle: 'Consistency during production. Retention after the transaction.',
        machineTitle: 'Tea-machine integration',
        machineHeadline: 'Turn an order into structured production — not another manual task.',
        machineDesc: 'Drink specifications stay attached to the order as it moves into production, helping stores execute more consistently while keeping output records visible.',
        machineBenefits: ['Fewer manual handoffs', 'Consistent drink execution', 'Production records and status', 'Remote operational visibility'],
        loyaltyTitle: 'Loyalty & membership',
        loyaltyHeadline: 'Own the customer relationship after checkout.',
        loyaltyDesc: 'Points, coupons, campaigns and customer history use the same transaction data as ordering, making retention part of the operating system instead of a separate marketing add-on.',
        loyaltyBenefits: ['Customer history stays connected', 'Campaigns linked to real behavior', 'Rewards that encourage return visits', 'Repeat-purchase insight'],
        workflowKicker: 'FROM FEATURE TO BUSINESS OUTCOME',
        workflowTitle: 'One order creates value for the customer, the store and the brand.',
        workflowSteps: [
          ['Order', 'Easy mobile ordering reduces friction before arrival.', Smartphone],
          ['Route', 'Structured choices reduce ambiguity for the store.', Workflow],
          ['Produce', 'Machine-linked execution reduces manual handoffs.', Cpu],
          ['Retain', 'Loyalty turns the order into a customer relationship.', Gift],
          ['Learn', 'Analytics turns transactions into operating decisions.', BarChart3],
        ] as const,
        reachKicker: 'EUROPEAN OPERATING CONTEXT',
        reachTitle: 'Built in Europe. Designed to travel.',
        reachDesc: "I'TEA Supply already supports more than 400 foodservice businesses across 20+ European countries. The connected ordering and production stack is being operated in live beverage environments in the Netherlands and Ireland.",
        reachBlocks: [
          ["I'TEA Supply network", '400+', 'foodservice businesses'],
          ['European reach', '20+', 'countries served'],
          ['Live system operations', 'NL + IE', 'field-tested environments'],
        ],
        caseKicker: 'BUILT FROM REAL STORE OPERATIONS',
        caseTitle: 'Start with the operating problem — not the feature list.',
        caseIntro: 'Our own live beverage operations force the system to solve the same problems operators face every day: customization, peak periods, production consistency, customer retention and owner visibility.',
        caseColumns: [
          ['Operating challenge', 'High drink customization, peak-hour pressure and multiple customer touchpoints make manual handoffs fragile.'],
          ['Connected response', 'Mobile ordering, structured specifications, production workflow, status updates, loyalty and analytics stay in one order trail.'],
          ['Business value', 'A more repeatable store process, clearer customer journey and better management visibility for the next location.'],
        ],
        tourKicker: 'LIVE PRODUCT WALKTHROUGH',
        tourTitle: 'Show the system only after the business value is clear.',
        tourDesc: 'Switch between the customer, production, loyalty and owner views of the same operating platform.',
        tabs: {
          mobile: ['Ordering', 'Customer ordering and order-ahead'],
          production: ['Production', 'Machine-linked production workflow'],
          loyalty: ['Loyalty', 'Members, rewards and retention'],
          analytics: ['Analytics', 'Sales and operating trends'],
        } as Record<TourKey, [string, string]>,
        capabilityKicker: 'CONNECTED CAPABILITIES',
        capabilityTitle: 'The feature set supports the operating model — not the other way around.',
        capabilities: [
          ['HTML5 ordering', 'No app download required.', Smartphone],
          ['Order status', 'Clear progress to pickup.', Activity],
          ['SMS & email', 'Automated customer updates.', Mail],
          ['Delivery API', 'External channels connect in.', Plug],
          ['Loyalty', 'Points, offers and customer history.', Gift],
          ['Analytics', 'Sales and operating trends.', BarChart3],
        ] as const,
        ctaTitle: 'Do not just look at screens. See the operating model run live.',
        ctaDesc: 'At the exhibition we can walk through the full journey: order, production, status, loyalty and owner analytics.',
        cta: 'Schedule a walkthrough',
      }
    : {
        eyebrow: '为希望规模化发展的饮品品牌打造',
        title: '把门店运营，变成可以复制的增长系统。',
        subtitle: '把手机点单、奶茶机联动、会员和数据分析连接起来，让品牌开店更快、执行更一致、顾客更愿意回来。',
        primary: '预约展会演示',
        secondary: '查看商业价值',
        proofLabel: "I'TEA SUPPLY 欧洲业务",
        proof: [
          ['400+', '欧洲网络中的餐饮企业客户'],
          ['20+', "I'TEA Supply 已服务的欧洲国家"],
          ['荷兰 + 爱尔兰', '连接式门店系统的真实运营环境'],
        ],
        valueKicker: '它到底给业务带来什么',
        valueTitle: '同一套平台，对品牌总部、门店、顾客和扩张都产生不同价值。',
        valueDesc: '展会上真正重要的问题，不只是软件能做什么，而是它能让总部、店员、顾客以及下一家门店发生什么变化。',
        values: {
          brand: {
            label: '品牌总部',
            title: '统一品牌执行，但不需要每天盯着每一家门店。',
            desc: '把顾客、订单、生产和经营数据放在同一个视图里，让总部通过异常和趋势来管理，而不是在多个系统里追数据。',
            bullets: ['统一的运营数据源', '集中管理活动与顾客逻辑', '生产与销售数据同一视图'],
            tour: 'analytics' as TourKey,
          },
          store: {
            label: '门店运营',
            title: '减少最容易出错、最拖慢效率的人工交接。',
            desc: '饮品规格始终跟随订单进入结构化生产流程，同时让店员和顾客都能看到清晰的订单状态。',
            bullets: ['减少人工二次录入', '制作状态清晰', '降低日常培训和执行复杂度'],
            tour: 'production' as TourKey,
          },
          customer: {
            label: '顾客增长',
            title: '先让点单更顺，再把一次交易变成下一次到店。',
            desc: '顾客可以直接手机点单、收到状态通知，并在同一条消费旅程里沉淀会员与积分历史。',
            bullets: ['无需下载 App 的 HTML5 点单', 'SMS / Email 状态通知', '积分、优惠与复购历史'],
            tour: 'mobile' as TourKey,
          },
          expansion: {
            label: '连锁扩张',
            title: '下一家店开起来时，不需要重新发明一套运营方式。',
            desc: '把点单、生产、会员和报表逻辑变成可复制的门店模型，同时保留不同地区的渠道和设备接入能力。',
            bullets: ['可复制的门店工作流', '统一运营逻辑', '开放 API 连接渠道和设备'],
            tour: 'analytics' as TourKey,
          },
        },
        engineKicker: '两个引擎，形成一个商业闭环',
        engineTitle: '生产环节做一致性，交易之后做复购。',
        machineTitle: '奶茶机联动',
        machineHeadline: '让订单直接变成结构化生产，而不是再多一道人工操作。',
        machineDesc: '饮品规格跟随订单进入生产流程，帮助门店更一致地执行，同时保留制作状态与出品记录。',
        machineBenefits: ['减少人工交接', '提升出品一致性', '制作状态与记录可追踪', '远程运营可视性'],
        loyaltyTitle: '会员与营销',
        loyaltyHeadline: '收银结束以后，顾客关系才真正开始。',
        loyaltyDesc: '积分、优惠券、活动和顾客历史直接使用点单交易数据，让复购成为运营系统的一部分，而不是另外外挂一个营销工具。',
        loyaltyBenefits: ['顾客历史保持连接', '活动基于真实消费行为', '奖励促进再次到店', '复购表现可分析'],
        workflowKicker: '从功能翻译成商业结果',
        workflowTitle: '一笔订单，同时给顾客、门店和品牌创造价值。',
        workflowSteps: [
          ['下单', '手机点单降低到店前的操作摩擦。', Smartphone],
          ['路由', '结构化选项减少门店理解偏差。', Workflow],
          ['制作', '奶茶机联动减少人工交接。', Cpu],
          ['留存', '会员把一次订单变成长期顾客关系。', Gift],
          ['决策', '数据分析把交易变成经营判断。', BarChart3],
        ] as const,
        reachKicker: '欧洲业务基础',
        reachTitle: '在欧洲运营，也为跨市场扩张做准备。',
        reachDesc: "I'TEA Supply 已经服务超过 400 家餐饮企业，覆盖 20+ 个欧洲国家；连接点单与生产的系统则已经在荷兰和爱尔兰的真实饮品门店环境中运行。",
        reachBlocks: [
          ["I'TEA Supply 网络", '400+', '餐饮企业客户'],
          ['欧洲覆盖', '20+', '已服务国家'],
          ['真实系统运营', '荷兰 + 爱尔兰', '门店环境验证'],
        ],
        caseKicker: '从真实门店运营中长出来的系统',
        caseTitle: '先解决经营问题，再谈功能。',
        caseIntro: '我们自己的真实饮品门店运营，会不断逼着系统解决运营者每天真正遇到的问题：复杂定制、高峰期、出品一致性、顾客复购和老板远程看店。',
        caseColumns: [
          ['经营问题', '饮品定制多、高峰压力大、顾客触点多，人工交接越多就越容易出错。'],
          ['连接式解决方案', '手机点单、结构化规格、生产流程、状态通知、会员和数据分析保持在同一条订单链路中。'],
          ['业务价值', '门店流程更容易复制，顾客体验更清晰，老板对下一家店的管理也更有把握。'],
        ],
        tourKicker: '真实产品演示',
        tourTitle: '先讲清商业价值，再给客户看系统界面。',
        tourDesc: '在顾客点单、生产、会员和老板数据视图之间切换，直接看同一套平台如何协同。',
        tabs: {
          mobile: ['点单', '顾客点单与提前下单'],
          production: ['生产', '奶茶机联动生产流程'],
          loyalty: ['会员', '会员、奖励与复购'],
          analytics: ['数据', '销售与经营趋势'],
        } as Record<TourKey, [string, string]>,
        capabilityKicker: '连接式功能能力',
        capabilityTitle: '功能是为了支撑运营模型，而不是为了堆功能。',
        capabilities: [
          ['HTML5 点单', '无需下载 App。', Smartphone],
          ['订单状态', '清晰显示制作进度。', Activity],
          ['SMS / Email', '自动发送顾客通知。', Mail],
          ['外卖 API', '外部渠道统一接入。', Plug],
          ['会员', '积分、优惠与顾客历史。', Gift],
          ['数据分析', '销售与经营趋势。', BarChart3],
        ] as const,
        ctaTitle: '不要只看几张界面图，现场看完整运营模型跑起来。',
        ctaDesc: '展会上可以直接演示：点单、生产、状态、会员和老板数据如何在同一套系统里协同。',
        cta: '预约完整演示',
      };

  const tourItems = useMemo(() => [
    { key: 'mobile' as TourKey, icon: Smartphone },
    { key: 'production' as TourKey, icon: Cpu },
    { key: 'loyalty' as TourKey, icon: Gift },
    { key: 'analytics' as TourKey, icon: BarChart3 },
  ], []);

  const valueItems = useMemo(() => [
    { key: 'brand' as ValueKey, icon: Building2 },
    { key: 'store' as ValueKey, icon: Store },
    { key: 'customer' as ValueKey, icon: Users },
    { key: 'expansion' as ValueKey, icon: Rocket },
  ], []);

  const currentValue = copy.values[activeValue];

  return (
    <div className="min-h-screen bg-white pt-16 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.eyebrow}</div>
            <h1 className="mt-5 text-[40px] font-semibold leading-[1.06] tracking-[-0.042em] text-slate-950 sm:text-[48px] lg:text-[56px]">{copy.title}</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-7 text-slate-600">{copy.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700">{copy.primary}<ArrowRight className="h-4 w-4" /></Link>
              <a href="#business-value" className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50">{copy.secondary}</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#f7f8f8] shadow-[0_24px_70px_-45px_rgba(15,23,42,0.4)]">
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
            <div className="p-4 sm:p-5"><LiveSystemView kind={activeTour} language={uiLanguage} /></div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-[#fafafa]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid divide-y divide-slate-200 md:grid-cols-[0.8fr_1fr_1fr_1fr] md:divide-x md:divide-y-0">
              <div className="flex items-center py-5 pr-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{copy.proofLabel}</div>
              {copy.proof.map(([value, label]) => <div key={value} className="py-5 md:px-6"><div className="text-[24px] font-semibold tracking-[-0.03em] text-slate-950">{value}</div><div className="mt-1 text-[12px] leading-5 text-slate-500">{label}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="business-value" className="border-b border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="max-w-md">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.valueKicker}</div>
              <h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[36px]">{copy.valueTitle}</h2>
              <p className="mt-4 text-[15px] leading-6 text-slate-600">{copy.valueDesc}</p>
            </div>
            <div className="border-y border-slate-200">
              <div className="grid border-b border-slate-200 sm:grid-cols-4">
                {valueItems.map(({ key, icon: Icon }) => {
                  const active = activeValue === key;
                  return <button key={key} type="button" onClick={() => { setActiveValue(key); setActiveTour(copy.values[key].tour); }} className={`px-4 py-4 text-left transition ${active ? 'bg-slate-950 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}><Icon className={`h-4 w-4 ${active ? 'text-emerald-300' : 'text-slate-400'}`} /><div className="mt-3 text-[13px] font-semibold">{copy.values[key].label}</div></button>;
                })}
              </div>
              <div className="grid gap-8 py-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <div>
                  <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.03em] text-slate-950">{currentValue.title}</h3>
                  <p className="mt-4 text-[14px] leading-6 text-slate-600">{currentValue.desc}</p>
                  <div className="mt-6 space-y-3">{currentValue.bullets.map((item) => <div key={item} className="flex gap-3 text-[13px] font-medium text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{item}</div>)}</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-[#f7f8f8] p-3"><LiveSystemView kind={currentValue.tour} language={uiLanguage} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#fafafa] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.engineKicker}</div><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[36px]">{copy.engineTitle}</h2></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[[copy.machineTitle, copy.machineHeadline, copy.machineDesc, copy.machineBenefits, '/features/machine', Cpu], [copy.loyaltyTitle, copy.loyaltyHeadline, copy.loyaltyDesc, copy.loyaltyBenefits, '/features/loyalty', Gift]].map(([label, headline, desc, benefits, href, Icon], index) => {
              const C = Icon as React.ComponentType<{ className?: string }>;
              return <article key={String(label)} className="border border-slate-200 bg-white p-7"><div className="flex items-center justify-between border-b border-slate-200 pb-5"><div className="flex items-center gap-3"><C className="h-5 w-5 text-emerald-700" /><span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">{String(label)}</span></div><span className="text-[11px] font-medium text-slate-400">0{index + 1}</span></div><h3 className="mt-6 text-[25px] font-semibold leading-tight tracking-[-0.03em] text-slate-950">{String(headline)}</h3><p className="mt-4 text-[14px] leading-6 text-slate-600">{String(desc)}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{(benefits as string[]).map((item) => <div key={item} className="border-t border-slate-200 pt-3 text-[12px] font-medium text-slate-600">{item}</div>)}</div><Link to={String(href)} className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-slate-800 transition hover:text-emerald-700">Learn more <ArrowRight className="h-3.5 w-3.5" /></Link></article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
            <div className="max-w-sm"><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">{copy.workflowKicker}</div><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[36px]">{copy.workflowTitle}</h2></div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
              {copy.workflowSteps.map(([title, desc, Icon], index) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(title)} className="bg-slate-950 p-5"><div className="flex items-center justify-between"><C className="h-5 w-5 text-emerald-300" /><span className="text-[10px] font-semibold tracking-[0.14em] text-slate-500">0{index + 1}</span></div><div className="mt-5 text-[15px] font-semibold text-white">{String(title)}</div><p className="mt-2 text-[12px] leading-5 text-slate-400">{String(desc)}</p></div>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.reachKicker}</div>
              <h2 className="mt-4 max-w-xl text-[30px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[36px]">{copy.reachTitle}</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-6 text-slate-600">{copy.reachDesc}</p>
              <div className="mt-8 grid border-y border-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">{copy.reachBlocks.map(([label, value, sub]) => <div key={label} className="py-5 sm:px-5 first:pl-0"><div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">{label}</div><div className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-slate-950">{value}</div><div className="mt-1 text-[12px] text-slate-500">{sub}</div></div>)}</div>
            </div>
            <div className="border border-slate-200 bg-[#fafafa] p-6 sm:p-8">
              <div className="flex items-center gap-3"><Globe2 className="h-5 w-5 text-emerald-700" /><span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">European operating footprint</span></div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="border border-slate-200 bg-white p-5"><div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Connected store operations</div><div className="mt-5 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-[12px] font-semibold text-white">NL</span><div><div className="text-[14px] font-semibold text-slate-950">Netherlands</div><div className="text-[12px] text-slate-500">Live beverage operations</div></div></div><div className="mt-4 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-[12px] font-semibold text-white">IE</span><div><div className="text-[14px] font-semibold text-slate-950">Ireland</div><div className="text-[12px] text-slate-500">Partner store operations</div></div></div></div>
                <div className="border border-slate-200 bg-white p-5"><div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">I&apos;TEA Supply network</div><div className="mt-5 text-[42px] font-semibold tracking-[-0.05em] text-slate-950">20+</div><div className="mt-1 text-[13px] text-slate-500">European countries</div><div className="mt-7 flex items-center gap-2 text-[12px] font-medium text-emerald-700"><TrendingUp className="h-4 w-4" />Built around European foodservice operations</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#fafafa] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.caseKicker}</div><h2 className="mt-4 text-[30px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[36px]">{copy.caseTitle}</h2><p className="mt-4 text-[15px] leading-6 text-slate-600">{copy.caseIntro}</p></div>
            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">{copy.caseColumns.map(([title, desc], index) => <div key={title} className="bg-white p-6"><div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">0{index + 1}</div><h3 className="mt-4 text-[17px] font-semibold text-slate-950">{title}</h3><p className="mt-3 text-[13px] leading-6 text-slate-600">{desc}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.tourKicker}</div><h2 className="mt-4 max-w-md text-[30px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[36px]">{copy.tourTitle}</h2><p className="mt-4 max-w-md text-[15px] leading-6 text-slate-600">{copy.tourDesc}</p><div className="mt-7 border-l border-slate-200">{tourItems.map(({ key, icon: Icon }) => { const active = activeTour === key; return <button key={key} type="button" onClick={() => setActiveTour(key)} className={`block w-full border-l-2 px-5 py-3 text-left transition ${active ? '-ml-px border-emerald-600 bg-emerald-50/40' : '-ml-px border-transparent hover:bg-slate-50'}`}><div className="flex items-center gap-3"><Icon className={`h-4 w-4 ${active ? 'text-emerald-700' : 'text-slate-400'}`} /><span className="text-[14px] font-semibold text-slate-900">{copy.tabs[key][0]}</span></div><p className="mt-1 pl-7 text-[12px] leading-5 text-slate-500">{copy.tabs[key][1]}</p></button>; })}</div></div>
            <div className="rounded-lg border border-slate-200 bg-[#f7f8f8] p-4 sm:p-5"><LiveSystemView kind={activeTour} language={uiLanguage} /></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#fafafa] py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.capabilityKicker}</div><h2 className="mt-4 max-w-2xl text-[28px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-[34px]">{copy.capabilityTitle}</h2></div><Link to="/features" className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 hover:text-emerald-700">View all features <ArrowRight className="h-3.5 w-3.5" /></Link></div>
          <div className="mt-8 grid divide-y divide-slate-200 border-y border-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">{copy.capabilities.map(([title, desc, Icon]) => { const C = Icon as React.ComponentType<{ className?: string }>; return <div key={String(title)} className="px-0 py-5 md:px-5 first:pl-0"><C className="h-4 w-4 text-emerald-700" /><div className="mt-4 text-[14px] font-semibold text-slate-950">{String(title)}</div><p className="mt-1 text-[12px] leading-5 text-slate-500">{String(desc)}</p></div>; })}</div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border border-slate-200 bg-slate-950 px-7 py-10 text-white sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300"><Zap className="h-4 w-4" /> Live exhibition walkthrough</div><h2 className="mt-4 max-w-3xl text-[30px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[36px]">{copy.ctaTitle}</h2><p className="mt-4 max-w-2xl text-[14px] leading-6 text-slate-300">{copy.ctaDesc}</p></div>
          <Link to="/contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400">{copy.cta}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
