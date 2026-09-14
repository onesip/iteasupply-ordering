import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Gift,
  Globe2,
  Layers3,
  Link2,
  Mail,
  MessageSquare,
  Plug,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wifi,
  Workflow,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const copy = isEn
    ? {
        eyebrow: 'BUILT FOR BUBBLE TEA OPERATIONS',
        heroTitleA: 'One system.',
        heroTitleB: 'From mobile order to the tea machine.',
        heroDesc:
          'Ordering, loyalty, automation, customer notifications and analytics — connected in one operating layer built specifically for bubble tea stores.',
        primaryCta: 'Book a live demo',
        secondaryCta: 'Explore the platform',
        machinePill: 'Machine-linked workflow',
        loyaltyPill: 'Loyalty that drives repeat visits',
        live: 'LIVE',
        mobileOrder: 'Mobile order',
        orderNo: 'Order #A184',
        orderReady: 'Ready in ~4 min',
        points: '+48 points',
        machineQueue: 'Machine queue',
        machineItem1: 'Mango Matcha · 50% sugar',
        machineItem2: 'Classic Milk Tea · pearls',
        status: 'Status',
        mixing: 'Mixing',
        ready: 'Ready',
        twoAdvantages: 'Two advantages competitors cannot easily copy',
        twoAdvantagesDesc:
          'I\'TEA SUPPLY is not another generic POS. The strongest value comes from connecting the customer relationship with the production workflow.',
        machineTitle: '1. Direct tea-machine integration',
        machineDesc:
          'Orders can move from the customer interface into the production workflow with recipe-level instructions, status visibility and diagnostic logs.',
        machineBullets: [
          'Order-to-machine workflow instead of manual re-entry',
          'Recipe and customization data stays structured',
          'Production status can feed back into the order journey',
          'Remote visibility and logs make issues easier to diagnose',
        ],
        loyaltyTitle: '2. Loyalty built into every order',
        loyaltyDesc:
          'Turn every order into a customer relationship with points, offers, campaigns and targeted re-engagement — without adding another disconnected tool.',
        loyaltyBullets: [
          'Points and member rewards',
          'Campaigns, coupons and targeted offers',
          'Customer history connected to ordering behavior',
          'Designed to increase repeat visits, not just collect data',
        ],
        everythingTitle: 'Everything else works around those two engines',
        everythingDesc:
          'Customers get a fast mobile experience. Staff get a clear production flow. Owners get one source of truth.',
        featureCards: [
          {
            title: 'HTML5 mobile ordering',
            desc: 'No app download. Customers order from any modern phone browser.',
          },
          {
            title: 'Order status system',
            desc: 'Clear stages from received to preparing to ready for pickup.',
          },
          {
            title: 'SMS & email notifications',
            desc: 'Automatically notify customers when an order is confirmed or ready.',
          },
          {
            title: 'Remote ordering',
            desc: 'Customers can order before arrival and reduce queue pressure.',
          },
          {
            title: 'Data & performance analytics',
            desc: 'Track sales, products, customers and operational trends in one place.',
          },
          {
            title: 'Delivery API ready',
            desc: 'Designed to connect external delivery channels into the same operating flow.',
          },
        ],
        journeyKicker: 'ONE CONNECTED JOURNEY',
        journeyTitle: 'From tap to finished drink — without breaking the data chain',
        journeyDesc:
          'The order, customer, production status and loyalty activity remain connected throughout the workflow.',
        journey: [
          ['Order', 'Customer orders on mobile HTML5 interface'],
          ['Route', 'System validates options and routes the order'],
          ['Produce', 'Tea-machine workflow receives structured drink instructions'],
          ['Update', 'Order status changes as production moves forward'],
          ['Notify', 'SMS or email tells the customer when it is ready'],
          ['Learn', 'Points, behavior and sales data feed back into analytics'],
        ],
        integrationKicker: 'OPEN BY DESIGN',
        integrationTitle: 'One platform, multiple touchpoints',
        integrationDesc:
          'Use the pieces you need now and connect more later. The architecture is designed around real store operations, not a closed single-device workflow.',
        integrationLabels: ['HTML5', 'SMS', 'Email', 'Delivery API', 'Tea machine', 'Analytics'],
        dataTitle: 'Owner view',
        dataSubtitle: 'Today · all channels',
        revenue: 'Revenue',
        orders: 'Orders',
        repeat: 'Repeat customers',
        ops: 'Machine-linked orders',
        exhibitionTitle: 'See the complete workflow live at the exhibition',
        exhibitionDesc:
          'We can demonstrate the customer ordering flow, loyalty logic, production status and tea-machine integration as one connected system.',
        exhibitionCta: 'Schedule a walkthrough',
        learnMore: 'View all features',
      }
    : {
        eyebrow: '专为奶茶店运营打造',
        heroTitleA: '一套系统，',
        heroTitleB: '从手机下单直接连接奶茶机。',
        heroDesc:
          '把下单、会员、自动化、顾客通知和数据分析连接在同一个运营系统里，真正围绕奶茶门店的实际流程设计。',
        primaryCta: '预约现场演示',
        secondaryCta: '查看平台功能',
        machinePill: '奶茶机联动',
        loyaltyPill: '提升复购的会员系统',
        live: '实时',
        mobileOrder: '手机下单',
        orderNo: '订单 #A184',
        orderReady: '约 4 分钟完成',
        points: '+48 积分',
        machineQueue: '奶茶机队列',
        machineItem1: '芒果抹茶 · 50% 糖',
        machineItem2: '经典奶茶 · 珍珠',
        status: '状态',
        mixing: '制作中',
        ready: '已完成',
        twoAdvantages: '两个最难被普通点单系统复制的核心优势',
        twoAdvantagesDesc:
          'I\'TEA SUPPLY 不是另一个通用 POS。真正的差异在于把“顾客关系”和“生产流程”直接连接起来。',
        machineTitle: '1. 奶茶机直接联动',
        machineDesc:
          '订单可以从顾客下单界面直接进入生产流程，并保留配方级指令、状态信息和诊断日志。',
        machineBullets: [
          '订单进入奶茶机流程，无需人工二次录入',
          '糖度、冰度、加料等配方信息保持结构化',
          '生产状态可以回传到顾客订单页面',
          '远程状态与日志让故障更容易定位',
        ],
        loyaltyTitle: '2. 会员系统嵌入每一笔订单',
        loyaltyDesc:
          '积分、活动、优惠券和定向触达都和订单行为连接，不需要再叠加一个彼此割裂的会员工具。',
        loyaltyBullets: [
          '积分与会员奖励',
          '活动、优惠券和定向优惠',
          '消费历史直接关联下单行为',
          '目标是提高复购，而不仅仅是收集数据',
        ],
        everythingTitle: '其他所有功能，都围绕这两个核心引擎工作',
        everythingDesc:
          '顾客获得更快的手机体验，员工获得更清晰的制作流程，老板获得统一的数据视图。',
        featureCards: [
          { title: 'HTML5 手机下单', desc: '无需下载 App，任何现代手机浏览器都可以直接下单。' },
          { title: '订单状态系统', desc: '从已接单、制作中到可取餐，每一步都清晰可见。' },
          { title: 'SMS / Email 通知', desc: '订单确认或制作完成后自动通知顾客。' },
          { title: '远程提前下单', desc: '顾客到店前即可下单，降低高峰期排队压力。' },
          { title: '数据与经营分析', desc: '销售、产品、顾客与运营趋势集中在同一个后台。' },
          { title: '外卖 API 接入', desc: '可把外部外卖渠道进一步接入统一运营流程。' },
        ],
        journeyKicker: '完整数据链路',
        journeyTitle: '从点击下单到饮品完成，中间的数据不断链',
        journeyDesc: '订单、顾客、制作状态和会员行为始终处于同一条流程中。',
        journey: [
          ['下单', '顾客通过 HTML5 手机界面下单'],
          ['路由', '系统校验选项并把订单发送到正确流程'],
          ['制作', '奶茶机工作流收到结构化饮品指令'],
          ['更新', '制作推进时订单状态同步变化'],
          ['通知', '完成后通过 SMS 或 Email 通知顾客'],
          ['分析', '积分、行为和销售数据进入经营分析'],
        ],
        integrationKicker: '开放式架构',
        integrationTitle: '一个平台，连接多个触点',
        integrationDesc:
          '现在先用需要的功能，之后再继续接入更多渠道。系统围绕真实门店运营设计，而不是封闭在单一设备里。',
        integrationLabels: ['HTML5', 'SMS', 'Email', '外卖 API', '奶茶机', '数据分析'],
        dataTitle: '老板视图',
        dataSubtitle: '今天 · 全渠道',
        revenue: '营业额',
        orders: '订单',
        repeat: '复购顾客',
        ops: '奶茶机联动订单',
        exhibitionTitle: '展会上直接看完整流程',
        exhibitionDesc: '我们可以现场展示顾客下单、会员逻辑、制作状态和奶茶机联动如何在一套系统中运行。',
        exhibitionCta: '预约完整演示',
        learnMore: '查看全部功能',
      };

  const featureIcons = [Smartphone, Workflow, Bell, Wifi, BarChart3, Plug];
  const journeyIcons = [Smartphone, Link2, Cpu, Activity, MessageSquare, Database];

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[#f7fbf8]">
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-emerald-800 shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              {copy.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              {copy.heroTitleA}{' '}
              <span className="text-emerald-700">{copy.heroTitleB}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              {copy.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                {copy.primaryCta} <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:border-emerald-300 hover:text-emerald-800"
              >
                {copy.secondaryCta} <ChevronRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[copy.machinePill, copy.loyaltyPill].map((item) => (
                <div key={item} className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-2.5 text-sm font-bold text-white">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-emerald-200/50 to-teal-100/20 blur-xl" />
            <div className="relative rounded-[32px] border border-emerald-950/10 bg-slate-950 p-3 shadow-2xl shadow-emerald-950/15">
              <div className="rounded-[26px] bg-[#eef7f1] p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">I'TEA CONTROL</div>
                    <div className="mt-1 text-lg font-black text-slate-950">Connected order flow</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black text-emerald-700 shadow-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {copy.live}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[0.86fr_1.14fr]">
                  <div className="rounded-[26px] border-[5px] border-slate-950 bg-white p-4 shadow-xl">
                    <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-200" />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-400">{copy.mobileOrder}</div>
                        <div className="mt-1 font-black text-slate-950">{copy.orderNo}</div>
                      </div>
                      <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700">
                        <Smartphone className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-5 rounded-2xl bg-[#f6faf7] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                          <ShoppingBag className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-950">Mango Matcha</div>
                          <div className="text-xs text-slate-500">Low ice · 50% sugar</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-white">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{copy.status}</div>
                        <div className="text-sm font-black">{copy.orderReady}</div>
                      </div>
                      <Activity className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div className="mt-3 flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                      <div className="flex items-center gap-2 text-sm font-black text-emerald-900">
                        <Gift className="h-4 w-4" /> {copy.points}
                      </div>
                      <ChevronRight className="h-4 w-4 text-emerald-500" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl bg-emerald-600 p-3 text-white">
                            <Cpu className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-400">{copy.machineQueue}</div>
                            <div className="font-black text-slate-950">2 drinks in production</div>
                          </div>
                        </div>
                        <Wifi className="h-5 w-5 text-emerald-600" />
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3.5">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="text-sm font-black text-slate-950">{copy.machineItem1}</div>
                              <div className="mt-1 text-xs font-bold text-emerald-700">#{isEn ? 'A184' : 'A184'} · {copy.mixing}</div>
                            </div>
                            <div className="h-8 w-8 rounded-full border-4 border-emerald-200 border-t-emerald-600" />
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3.5">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="text-sm font-black text-slate-950">{copy.machineItem2}</div>
                              <div className="mt-1 text-xs font-bold text-slate-500">#A185 · queued</div>
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400">
                              <Cpu className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-emerald-600 p-4 text-white shadow-sm">
                        <Bell className="h-5 w-5" />
                        <div className="mt-4 text-xs font-bold text-emerald-100">Notification</div>
                        <div className="mt-1 text-sm font-black">SMS + Email</div>
                      </div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                        <BarChart3 className="h-5 w-5 text-slate-900" />
                        <div className="mt-4 text-xs font-bold text-slate-400">Data</div>
                        <div className="mt-1 text-sm font-black text-slate-950">Auto-synced</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">CORE DIFFERENTIATION</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.twoAdvantages}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.twoAdvantagesDesc}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex rounded-2xl bg-emerald-500 p-3.5 text-white shadow-lg shadow-emerald-500/20">
                  <Cpu className="h-7 w-7" />
                </div>
                <h3 className="mt-7 text-3xl font-black tracking-[-0.03em]">{copy.machineTitle}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{copy.machineDesc}</p>
                <div className="mt-8 space-y-4">
                  {copy.machineBullets.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="text-sm font-semibold leading-6 text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-9 grid grid-cols-3 gap-2">
                  {['ORDER', 'RECIPE', 'STATUS'].map((label, i) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                      <div className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl ${i === 1 ? 'bg-emerald-500 text-white' : 'bg-white/10 text-emerald-300'}`}>
                        {i === 0 ? <ShoppingBag className="h-4 w-4" /> : i === 1 ? <Cpu className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                      </div>
                      <div className="text-[10px] font-black tracking-[0.12em] text-slate-300">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-[#effaf3] p-8 shadow-xl shadow-emerald-900/5 sm:p-10">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-300/30 blur-3xl" />
              <div className="relative">
                <div className="inline-flex rounded-2xl bg-white p-3.5 text-emerald-700 shadow-md ring-1 ring-emerald-900/5">
                  <Gift className="h-7 w-7" />
                </div>
                <h3 className="mt-7 text-3xl font-black tracking-[-0.03em] text-slate-950">{copy.loyaltyTitle}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{copy.loyaltyDesc}</p>
                <div className="mt-8 space-y-4">
                  {copy.loyaltyBullets.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span className="text-sm font-semibold leading-6 text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-9 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-emerald-900/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">MEMBER</div>
                      <div className="mt-1 text-lg font-black text-slate-950">1,240 points</div>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-800">GOLD</div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[72%] rounded-full bg-emerald-500" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Next reward</span>
                    <span>260 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfcfb] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">ALL-IN-ONE OPERATIONS</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.everythingTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{copy.everythingDesc}</p>
            </div>
            <Link to="/features" className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:border-emerald-300 hover:text-emerald-800 lg:self-auto">
              {copy.learnMore} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {copy.featureCards.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={feature.title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-emerald-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">{copy.journeyKicker}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.journeyTitle}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-emerald-100/80">{copy.journeyDesc}</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-emerald-100">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                One order ID · one customer history · one production trail
              </div>
            </div>

            <div className="space-y-3">
              {copy.journey.map(([title, desc], index) => {
                const Icon = journeyIcons[index];
                return (
                  <div key={title} className="group flex gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-4 transition hover:bg-white/[0.09] sm:p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400 text-emerald-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-black text-white">{index + 1}. {title}</h3>
                        {index < copy.journey.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-emerald-400" />}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-emerald-100/70">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.integrationKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.integrationTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.integrationDesc}</p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {copy.integrationLabels.map((item, index) => (
                <div key={item} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-black ${index === 4 ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-800'}`}>
                  {index === 0 && <Globe2 className="h-4 w-4" />}
                  {index === 1 && <MessageSquare className="h-4 w-4" />}
                  {index === 2 && <Mail className="h-4 w-4" />}
                  {index === 3 && <Plug className="h-4 w-4" />}
                  {index === 4 && <Cpu className="h-4 w-4" />}
                  {index === 5 && <BarChart3 className="h-4 w-4" />}
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-slate-200 bg-[#f8faf9] p-4 shadow-xl shadow-slate-900/5 sm:p-6">
            <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-900/5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-black text-slate-950">{copy.dataTitle}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-400">{copy.dataSubtitle}</div>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  [copy.revenue, '€2,846', '+12.8%'],
                  [copy.orders, '486', '+8.4%'],
                  [copy.repeat, '41%', '+5.2%'],
                  [copy.ops, '92%', 'live'],
                ].map(([label, value, trend]) => (
                  <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="text-xs font-bold text-slate-400">{label}</div>
                    <div className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950">{value}</div>
                    <div className="mt-1 text-xs font-black text-emerald-600">{trend}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-black text-slate-950">Channel performance</div>
                  <div className="text-xs font-bold text-slate-400">Today</div>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    ['Mobile / Web', '64%', 'w-[64%]'],
                    ['In-store', '24%', 'w-[24%]'],
                    ['Delivery API', '12%', 'w-[12%]'],
                  ].map(([label, value, width]) => (
                    <div key={label}>
                      <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-500">
                        <span>{label}</span><span>{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div className={`h-full rounded-full bg-emerald-500 ${width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-600 to-emerald-800 px-6 py-14 text-white shadow-2xl shadow-emerald-900/15 sm:px-10 lg:px-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-50">
                <Zap className="h-4 w-4" /> LIVE DEMO
              </div>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{copy.exhibitionTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-emerald-50/90">{copy.exhibitionDesc}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-7 py-4 text-base font-black text-emerald-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-50 lg:self-auto"
            >
              {copy.exhibitionCta} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
