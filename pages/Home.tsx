import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Cpu,
  Gift,
  Globe2,
  Mail,
  Plug,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';
import { LiveSystemView, ProofIconRow, SystemProofCard } from '../src/components/LiveSystemShowcase';

const Home = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const uiLanguage = isEn ? 'en' : 'zh';

  const copy = isEn
    ? {
        eyebrow: 'BUILT FOR BUBBLE TEA OPERATIONS',
        heroA: 'One connected system.',
        heroB: 'From mobile order to the tea machine.',
        heroDesc:
          'Ordering, loyalty, production workflows, customer notifications and analytics — connected in one operating layer built specifically for bubble tea stores.',
        primary: 'Book a live demo',
        secondary: 'Explore the platform',
        proof: 'Based on live system interfaces',
        proofDesc: 'Sensitive store, account, device and internal identifiers are removed before publication.',
        coreEyebrow: 'CORE DIFFERENTIATION',
        coreTitle: 'Two engines create the strongest value.',
        coreDesc: 'The customer relationship and the production workflow stay connected instead of living in separate systems.',
        machineTitle: 'Tea-machine integration',
        machineDesc:
          'Structured order data moves into the production workflow. Production output can be tracked without exposing internal device-encoding know-how.',
        machineBullets: ['Order-to-production workflow', 'Structured drink specifications', 'Production records and output data', 'Status and diagnostics visibility'],
        loyaltyTitle: 'Loyalty & membership',
        loyaltyDesc:
          'Every order can become a member event, points transaction, campaign trigger and repeat-purchase signal.',
        loyaltyBullets: ['Points and rewards', 'Coupons and campaigns', 'Member history', 'Repeat-purchase analytics'],
        liveEyebrow: 'REAL SYSTEM EVIDENCE',
        liveTitle: 'Show the product, not just a feature list.',
        liveDesc:
          'These privacy-safe interface reconstructions are based directly on the live screens used in daily operation. Identifying details and proprietary integration logic are intentionally withheld.',
        cards: [
          ['analytics', 'Sales & analytics', 'Owner-level sales, order and trend visibility from the live reporting environment.'],
          ['loyalty', 'Membership overview', 'Member funnel, repeat purchase metrics, rewards and marketing controls.'],
          ['production', 'Machine production records', 'Production timing, size and output data while store and device identifiers remain hidden.'],
          ['catalog', 'Product & menu management', 'Product setup, categories, cup sizes, pricing and on-sale status in one backend.'],
        ] as const,
        flowEyebrow: 'CONNECTED WORKFLOW',
        flowTitle: 'One order trail from customer intent to operational insight.',
        flowDesc: 'The system keeps customer, order, production, notification and loyalty activity connected through the full journey.',
        flow: [
          ['Mobile order', 'HTML5 ordering without an app download', Smartphone],
          ['Order engine', 'Validate options and route the order', Workflow],
          ['Production', 'Send structured production-ready instructions', Cpu],
          ['Status', 'Track progress and operational output', Activity],
          ['Notification', 'SMS / email confirmation and pickup updates', Bell],
          ['Analytics', 'Feed sales and customer behavior into reporting', BarChart3],
        ] as const,
        supportEyebrow: 'ALL-IN-ONE OPERATIONS',
        supportTitle: 'Supporting capabilities around the two core engines.',
        supportDesc: 'Use the parts you need now and connect more later without rebuilding the customer journey.',
        features: [
          ['HTML5 mobile ordering', 'No app download. Customers can order from any modern phone browser.', Smartphone],
          ['Order status', 'Clear stages from received to preparing to ready for pickup.', Activity],
          ['SMS & email', 'Automatically notify customers when an order is confirmed or ready.', Mail],
          ['Delivery API ready', 'External delivery channels can feed the same operational workflow.', Plug],
          ['Loyalty engine', 'Points, campaigns and customer history stay linked to orders.', Gift],
          ['Owner analytics', 'Sales, products, customers and operational trends in one place.', BarChart3],
        ] as const,
        privacyTitle: 'Capability is visible. Proprietary logic stays private.',
        privacyDesc:
          'We deliberately show production results and operational structure, but do not publish QR encoding, field-splicing rules, third-party device composition logic or other internal integration know-how.',
        ctaTitle: 'See the connected workflow live at the exhibition.',
        ctaDesc: 'We can demonstrate ordering, loyalty, production records and tea-machine integration as one operating system.',
        cta: 'Schedule a walkthrough',
      }
    : {
        eyebrow: '专为奶茶门店运营打造',
        heroA: '一套真正连通的系统，',
        heroB: '从手机下单直接连接奶茶机。',
        heroDesc: '把点单、会员、生产流程、顾客通知和经营分析连接在同一套系统里，围绕奶茶门店真实运营设计。',
        primary: '预约现场演示',
        secondary: '查看平台功能',
        proof: '基于真实系统界面',
        proofDesc: '公开展示前会隐藏门店、账号、设备以及内部识别信息。',
        coreEyebrow: '核心差异',
        coreTitle: '两个核心引擎，形成真正难复制的价值。',
        coreDesc: '顾客关系与生产流程不是两套孤立系统，而是始终保持连接。',
        machineTitle: '奶茶机联动',
        machineDesc: '结构化订单进入生产流程，可以追踪制作结果与产出数据，同时不公开内部设备编码等 know-how。',
        machineBullets: ['订单直达生产流程', '饮品规格结构化', '生产记录与产出数据', '状态与诊断可视化'],
        loyaltyTitle: '会员与复购',
        loyaltyDesc: '每一笔订单都可以沉淀成会员行为、积分、营销触发和复购分析。',
        loyaltyBullets: ['积分与奖励', '优惠券与活动', '会员消费历史', '复购分析'],
        liveEyebrow: '真实系统证据',
        liveTitle: '不只讲功能，而是让客户看到产品真的在运行。',
        liveDesc: '下面的展示直接依据真实运营界面重构并脱敏。识别信息和专有对接逻辑会刻意隐藏，只保留对外可展示的产品能力。',
        cards: [
          ['analytics', '销售与数据分析', '基于真实经营报表，展示销售、订单和趋势等老板视角数据。'],
          ['loyalty', '会员总览', '会员漏斗、复购、奖励以及营销入口。'],
          ['production', '机器生产记录', '展示制作时间、规格与产出数据，但隐藏门店与设备识别信息。'],
          ['catalog', '商品与菜单管理', '统一管理产品、分类、杯型、价格以及在售状态。'],
        ] as const,
        flowEyebrow: '完整工作流',
        flowTitle: '从顾客下单到经营分析，保持同一条订单轨迹。',
        flowDesc: '顾客、订单、生产、通知和会员行为贯穿完整流程，不在不同系统之间断开。',
        flow: [
          ['手机下单', 'HTML5 点单，无需下载 App', Smartphone],
          ['订单引擎', '校验选项并路由订单', Workflow],
          ['生产', '生成结构化生产指令', Cpu],
          ['状态', '追踪制作进度和运营产出', Activity],
          ['通知', 'SMS / Email 确认和取餐提醒', Bell],
          ['分析', '销售与顾客行为进入经营报表', BarChart3],
        ] as const,
        supportEyebrow: '一体化运营',
        supportTitle: '所有辅助能力围绕两个核心引擎展开。',
        supportDesc: '现在先启用需要的模块，之后继续连接更多渠道，而不用重新搭建顾客流程。',
        features: [
          ['HTML5 手机下单', '无需下载 App，任何现代手机浏览器都可以直接下单。', Smartphone],
          ['订单状态', '从已接单、制作中到可取餐，每一步清晰可见。', Activity],
          ['SMS / Email', '订单确认或制作完成后自动通知顾客。', Mail],
          ['外卖 API', '外部渠道可以进入同一套订单与生产流程。', Plug],
          ['会员引擎', '积分、活动和顾客历史与订单保持连接。', Gift],
          ['老板数据', '销售、产品、顾客和运营趋势集中在一个后台。', BarChart3],
        ] as const,
        privacyTitle: '能力可以展示，但核心 know-how 不公开。',
        privacyDesc: '网站会展示生产结果和系统结构，但不会公开二维码编码、字段拼接、第三方设备组合规则或其他内部集成逻辑。',
        ctaTitle: '展会上直接看完整联动。',
        ctaDesc: '现场展示点单、会员、生产记录和奶茶机联动如何在一套系统中运行。',
        cta: '预约完整演示',
      };

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[#f7fbf8]">
        <div className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-emerald-800 shadow-sm">
              <ShieldCheck className="h-4 w-4" /> {copy.eyebrow}
            </div>
            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {copy.heroA} <span className="text-emerald-700">{copy.heroB}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{copy.heroDesc}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                {copy.primary} <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/features" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:border-emerald-300 hover:text-emerald-800">
                {copy.secondary} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 rounded-3xl border border-emerald-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <div className="text-sm font-black text-slate-900">{copy.proof}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">{copy.proofDesc}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <LiveSystemView kind="mobile" language={uiLanguage} />
            <div className="space-y-4">
              <LiveSystemView kind="production" compact language={uiLanguage} />
              <ProofIconRow language={uiLanguage} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.coreEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.coreTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.coreDesc}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500"><Cpu className="h-7 w-7" /></div>
              <h3 className="mt-7 text-3xl font-black tracking-[-0.03em]">{copy.machineTitle}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{copy.machineDesc}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {copy.machineBullets.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span className="text-sm font-bold text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8"><LiveSystemView kind="production" compact language={uiLanguage} /></div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-emerald-100 bg-emerald-50 p-8 shadow-xl shadow-emerald-950/5 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm"><Gift className="h-7 w-7" /></div>
              <h3 className="mt-7 text-3xl font-black tracking-[-0.03em] text-slate-950">{copy.loyaltyTitle}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{copy.loyaltyDesc}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {copy.loyaltyBullets.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-emerald-100 bg-white p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8"><LiveSystemView kind="loyalty" compact language={uiLanguage} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.liveEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.liveTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.liveDesc}</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {copy.cards.map(([kind, title, description]) => (
              <SystemProofCard key={kind} kind={kind} title={title} description={description} language={uiLanguage} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{copy.flowEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.flowTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{copy.flowDesc}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {copy.flow.map(([title, desc, Icon], index) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-emerald-950"><Icon className="h-5 w-5" /></div>
                  <div className="text-[10px] font-black text-emerald-200">0{index + 1}</div>
                </div>
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.supportEyebrow}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.supportTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.supportDesc}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {copy.features.map(([title, desc, Icon]) => (
              <div key={title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-xl font-black tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[32px] border border-emerald-100 bg-white p-8 shadow-sm lg:grid-cols-[auto_1fr] lg:items-center sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300"><ShieldCheck className="h-8 w-8" /></div>
            <div>
              <h2 className="text-3xl font-black tracking-[-0.035em]">{copy.privacyTitle}</h2>
              <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">{copy.privacyDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10">
          <Globe2 className="mx-auto h-8 w-8 text-emerald-300" />
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em]">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">{copy.ctaDesc}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-white transition hover:bg-emerald-400">
            {copy.cta} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
