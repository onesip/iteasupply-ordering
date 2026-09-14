import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cpu,
  Database,
  Gift,
  Globe2,
  Layers3,
  Link2,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Plug,
  QrCode,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Tags,
  TicketPercent,
  Users,
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
        heroTitleA: 'From mobile order',
        heroTitleB: 'to tea machine.',
        heroTitleC: 'One connected system.',
        heroDesc:
          'Ordering, loyalty, production, notifications and analytics — connected in one operating layer built for modern bubble tea stores.',
        primaryCta: 'Book a live demo',
        secondaryCta: 'Explore the system',
        heroTags: ['HTML5 ordering', 'Loyalty', 'Tea machine', 'SMS & email', 'Analytics', 'Delivery API'],
        live: 'LIVE',
        customerApp: 'CUSTOMER',
        orderEngine: 'ORDER ENGINE',
        production: 'PRODUCTION',
        mobileOrder: 'Mobile order',
        orderNo: 'Order #A184',
        drink: 'Mango Matcha',
        drinkOptions: 'Low ice · 50% sugar',
        paid: 'Paid',
        member: 'Member recognized',
        points: '+48 points',
        validated: 'Options validated',
        routed: 'Recipe routed',
        readyTime: '~4 min',
        machineOne: 'Machine 01',
        machineOnline: 'Online',
        recipe: 'Recipe',
        recipeValue: 'MM-050-LI',
        machineStatus: 'Mixing',
        statusSync: 'Status sync',
        notified: 'Customer notified',
        proofLabel: 'WHY THIS IS DIFFERENT',
        proofTitle: 'Two engines make the platform more than a generic ordering system.',
        proofDesc:
          'The customer relationship and the production workflow stay connected to the same order trail. That is where the operational value compounds.',
        machineKicker: 'CORE 01 · MACHINE INTEGRATION',
        machineTitle: 'The order does not stop at the screen.',
        machineDesc:
          'Structured drink instructions can continue into the tea-machine workflow. Recipe, customization, production state and logs stay connected instead of being re-entered manually.',
        machineBullets: [
          'Cloud recipe mapping and structured drink instructions',
          'Order-to-machine dispatch without manual re-entry',
          'Production state linked back to the order',
          'Remote visibility and diagnostic logs for easier support',
        ],
        machineFlow: ['ORDER', 'RECIPE', 'MACHINE', 'STATUS'],
        machineConsole: 'Machine control',
        machineQueue: 'Production queue',
        queueOne: 'A184 · Mango Matcha',
        queueTwo: 'A185 · Classic Milk Tea',
        queueThree: 'A186 · Peach Jasmine',
        inProgress: 'In progress',
        queued: 'Queued',
        complete: 'Complete',
        loyaltyKicker: 'CORE 02 · LOYALTY & GROWTH',
        loyaltyTitle: 'Turn every order into the next visit.',
        loyaltyDesc:
          'Membership is part of the ordering flow, not a separate database. Points, rewards, campaigns and customer history can all build on the same transaction.',
        lifecycle: ['Join', 'Earn', 'Reward', 'Return'],
        memberName: 'Member profile',
        memberTier: 'Gold member',
        memberPoints: '1,240 pts',
        nextReward: 'Next reward',
        rewardDistance: '260 pts',
        campaign: 'Campaign',
        campaignName: 'After-school return offer',
        campaignAudience: 'High-frequency members · 146 customers',
        campaignResult: '+18% repeat visits',
        capabilitiesKicker: 'CONNECTED CAPABILITIES',
        capabilitiesTitle: 'Everything around the two core engines is connected too.',
        capabilitiesDesc:
          'Customers get a clean mobile experience. Staff get one production flow. Owners get one source of truth.',
        capabilities: [
          ['HTML5 mobile ordering', 'No app download. Customers order from any modern phone browser.'],
          ['Order status system', 'Received, preparing and ready states remain visible throughout the journey.'],
          ['SMS & email notifications', 'Automatically send order confirmation and ready-for-pickup updates.'],
          ['Remote pre-order', 'Customers order before arrival and reduce front-counter queue pressure.'],
          ['Data & performance analytics', 'Track sales, products, members, channels and operational trends.'],
          ['Delivery API connectivity', 'External delivery channels can feed the same order and production layer.'],
        ],
        journeyKicker: 'ONE CONNECTED JOURNEY',
        journeyTitle: 'From tap to finished drink — without breaking the data chain.',
        journeyDesc:
          'The same order can carry customer, recipe, production, notification and loyalty data all the way through the store workflow.',
        journey: [
          ['01', 'Order', 'HTML5 mobile order'],
          ['02', 'Validate', 'Options, payment, member'],
          ['03', 'Produce', 'Recipe to machine / staff'],
          ['04', 'Update', 'Live order status'],
          ['05', 'Notify', 'SMS or email'],
          ['06', 'Learn', 'Loyalty + analytics'],
        ],
        statusKicker: 'CUSTOMER EXPERIENCE',
        statusTitle: 'A clear status journey means fewer questions at the counter.',
        statusDesc:
          'Customers can see progress and receive proactive notifications instead of repeatedly asking whether their drink is ready.',
        confirmed: 'Order confirmed',
        preparing: 'Preparing',
        ready: 'Ready for pickup',
        textPreview: 'Your I\'TEA order #A184 is ready for pickup.',
        ownerKicker: 'OWNER VIEW',
        ownerTitle: 'One dashboard for sales, customers and production.',
        ownerDesc:
          'The same data trail that powers ordering and production can become a practical operating view for the owner.',
        revenue: 'Revenue',
        orders: 'Orders',
        repeat: 'Repeat customers',
        machineLinked: 'Machine-linked orders',
        topProducts: 'Top products',
        channelMix: 'Channel mix',
        storePerformance: 'Store performance',
        openKicker: 'OPEN BY DESIGN',
        openTitle: 'One order engine, multiple customer and sales channels.',
        openDesc:
          'Own HTML5 ordering, in-store ordering, delivery platforms and future third-party services can connect into the same operating flow instead of creating separate silos.',
        channels: ['Own HTML5 store', 'In-store ordering', 'Delivery platforms', 'Third-party APIs'],
        coreEngine: 'ONE ORDER ENGINE',
        outputs: ['Production', 'Loyalty', 'Notifications', 'Analytics'],
        exhibitionTitle: 'Show the workflow, not just a feature list.',
        exhibitionDesc:
          'At the exhibition we can demonstrate the customer order, member logic, production status and tea-machine connection as one end-to-end system.',
        exhibitionCta: 'Schedule a walkthrough',
        allFeatures: 'View all features',
      }
    : {
        eyebrow: '专为奶茶店运营打造',
        heroTitleA: '从手机下单',
        heroTitleB: '到奶茶机。',
        heroTitleC: '一套完整连接的系统。',
        heroDesc: '把下单、会员、生产、通知和数据分析连接在同一个运营系统里，真正围绕现代奶茶门店的流程设计。',
        primaryCta: '预约现场演示',
        secondaryCta: '查看完整系统',
        heroTags: ['HTML5 下单', '会员', '奶茶机', 'SMS / Email', '数据分析', '外卖 API'],
        live: '实时',
        customerApp: '顾客端',
        orderEngine: '订单中台',
        production: '生产端',
        mobileOrder: '手机下单',
        orderNo: '订单 #A184',
        drink: '芒果抹茶',
        drinkOptions: '少冰 · 50% 糖',
        paid: '已支付',
        member: '已识别会员',
        points: '+48 积分',
        validated: '选项已校验',
        routed: '配方已路由',
        readyTime: '约 4 分钟',
        machineOne: '奶茶机 01',
        machineOnline: '在线',
        recipe: '配方',
        recipeValue: 'MM-050-LI',
        machineStatus: '制作中',
        statusSync: '状态同步',
        notified: '已通知顾客',
        proofLabel: '为什么不一样',
        proofTitle: '两个核心引擎，让它不只是一个普通点单系统。',
        proofDesc: '顾客关系和生产流程始终连接在同一条订单轨迹上，真正的运营价值就在这里不断累积。',
        machineKicker: '核心 01 · 奶茶机联动',
        machineTitle: '订单不会停在屏幕里。',
        machineDesc: '结构化的饮品指令可以继续进入奶茶机生产流程。配方、客制化、制作状态和日志保持连接，不需要员工再次手工录入。',
        machineBullets: [
          '云端配方映射与结构化饮品指令',
          '订单直接进入奶茶机流程，无需人工二次录入',
          '生产状态与原订单保持关联',
          '远程状态与诊断日志让支持更高效',
        ],
        machineFlow: ['订单', '配方', '奶茶机', '状态'],
        machineConsole: '奶茶机控制',
        machineQueue: '生产队列',
        queueOne: 'A184 · 芒果抹茶',
        queueTwo: 'A185 · 经典奶茶',
        queueThree: 'A186 · 蜜桃茉莉',
        inProgress: '制作中',
        queued: '排队中',
        complete: '已完成',
        loyaltyKicker: '核心 02 · 会员与增长',
        loyaltyTitle: '让每一笔订单，都变成下一次到店。',
        loyaltyDesc: '会员不是一个独立数据库，而是下单流程的一部分。积分、奖励、活动和顾客历史都可以建立在同一笔交易上。',
        lifecycle: ['加入', '积累', '奖励', '复购'],
        memberName: '会员档案',
        memberTier: 'Gold 会员',
        memberPoints: '1,240 积分',
        nextReward: '下一奖励',
        rewardDistance: '还差 260',
        campaign: '营销活动',
        campaignName: '放学后回店优惠',
        campaignAudience: '高频会员 · 146 位顾客',
        campaignResult: '复购 +18%',
        capabilitiesKicker: '互相连接的能力',
        capabilitiesTitle: '围绕两个核心引擎，其他功能也全部连在一起。',
        capabilitiesDesc: '顾客得到顺畅的手机体验，员工得到统一的生产流程，老板得到统一的数据视图。',
        capabilities: [
          ['HTML5 手机下单', '无需下载 App，任何现代手机浏览器都可以直接下单。'],
          ['订单状态系统', '从已接单、制作中到可取餐，整个过程持续可见。'],
          ['SMS / Email 通知', '订单确认和制作完成后主动通知顾客。'],
          ['远程提前下单', '顾客到店前即可下单，减少前台高峰排队压力。'],
          ['数据与经营分析', '统一查看销售、产品、会员、渠道和运营趋势。'],
          ['外卖 API 接入', '外部渠道可以进入同一个订单和生产数据层。'],
        ],
        journeyKicker: '完整数据链路',
        journeyTitle: '从点击下单到饮品完成，中间的数据不断链。',
        journeyDesc: '同一笔订单可以一路携带顾客、配方、生产、通知和会员数据贯穿整个门店流程。',
        journey: [
          ['01', '下单', 'HTML5 手机下单'],
          ['02', '校验', '选项、支付、会员'],
          ['03', '制作', '配方进入机器 / 人工'],
          ['04', '更新', '实时订单状态'],
          ['05', '通知', 'SMS 或 Email'],
          ['06', '分析', '会员 + 数据分析'],
        ],
        statusKicker: '顾客体验',
        statusTitle: '状态清楚，前台就少很多“我的饮料好了吗？”',
        statusDesc: '顾客可以自己查看进度，并在完成后收到主动通知，不需要反复向员工确认。',
        confirmed: '订单已确认',
        preparing: '制作中',
        ready: '可以取餐',
        textPreview: '您的 I\'TEA 订单 #A184 已制作完成，可以取餐。',
        ownerKicker: '老板视图',
        ownerTitle: '销售、顾客和生产，放在同一个 Dashboard。',
        ownerDesc: '驱动下单和生产的同一条数据链，也可以直接形成老板日常真正会用的经营视图。',
        revenue: '营业额',
        orders: '订单',
        repeat: '复购顾客',
        machineLinked: '奶茶机联动订单',
        topProducts: '热销产品',
        channelMix: '渠道占比',
        storePerformance: '门店表现',
        openKicker: '开放式架构',
        openTitle: '一个订单引擎，连接多个顾客和销售渠道。',
        openDesc: '自有 HTML5、店内点单、外卖平台和未来第三方服务，都可以进入同一条运营流程，而不是各自形成新的数据孤岛。',
        channels: ['自有 HTML5', '店内点单', '外卖平台', '第三方 API'],
        coreEngine: '统一订单引擎',
        outputs: ['生产', '会员', '通知', '数据分析'],
        exhibitionTitle: '展会上应该展示完整工作流，而不是一串功能列表。',
        exhibitionDesc: '我们可以现场演示顾客下单、会员逻辑、制作状态和奶茶机如何在同一套系统里完成闭环。',
        exhibitionCta: '预约完整演示',
        allFeatures: '查看全部功能',
      };

  const capabilityIcons = [Smartphone, Activity, Bell, Clock3, BarChart3, Plug];
  const journeyIcons = [Smartphone, CheckCircle2, Cpu, RefreshCw, MessageSquare, Database];
  const channelIcons = [Globe2, Store, ShoppingBag, Plug];
  const outputIcons = [Cpu, Gift, Bell, BarChart3];

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[#f7fbf8]">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-emerald-800 shadow-sm"
            >
              <Sparkles className="h-4 w-4" /> {copy.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              {copy.heroTitleA}{' '}
              <span className="text-emerald-700">{copy.heroTitleB}</span>
              <br />
              {copy.heroTitleC}
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

            <div className="mt-8 flex flex-wrap gap-2">
              {copy.heroTags.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-600 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[44px] bg-gradient-to-br from-emerald-200/60 via-white to-teal-100/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-emerald-950/10 bg-slate-950 p-3 shadow-2xl shadow-emerald-950/15">
              <div className="rounded-[27px] bg-[#eef7f1] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">I'TEA SUPPLY · CONNECTED FLOW</div>
                    <div className="mt-1 text-lg font-black tracking-[-0.02em] text-slate-950">Order → Engine → Production</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black text-emerald-700 shadow-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {copy.live}
                  </div>
                </div>

                <div className="grid gap-3 xl:grid-cols-[0.92fr_0.9fr_1.05fr]">
                  <div className="rounded-[24px] border-[4px] border-slate-950 bg-white p-4 shadow-lg">
                    <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-slate-200" />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">{copy.customerApp}</div>
                        <div className="mt-1 text-sm font-black text-slate-950">{copy.mobileOrder}</div>
                      </div>
                      <Smartphone className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div className="mt-4 rounded-2xl bg-slate-50 p-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                          <ShoppingBag className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-black text-slate-950">{copy.drink}</div>
                          <div className="mt-0.5 text-[11px] font-semibold text-slate-500">{copy.drinkOptions}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-emerald-50 p-2.5">
                        <div className="text-[10px] font-bold text-emerald-700">{copy.orderNo}</div>
                        <div className="mt-1 text-xs font-black text-slate-950">{copy.paid}</div>
                      </div>
                      <div className="rounded-xl bg-emerald-50 p-2.5">
                        <div className="text-[10px] font-bold text-emerald-700">{copy.member}</div>
                        <div className="mt-1 text-xs font-black text-slate-950">{copy.points}</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">{copy.orderEngine}</div>
                        <div className="mt-1 text-sm font-black text-slate-950">{copy.orderNo}</div>
                      </div>
                      <Layers3 className="h-5 w-5 text-slate-900" />
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {[copy.validated, copy.member, copy.routed].map((label, index) => (
                        <div key={label} className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-3 py-2.5">
                          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-700">{label}</span>
                          <span className="ml-auto text-[10px] font-black text-emerald-700">0{index + 1}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-950 px-3 py-3 text-white">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400">ETA</div>
                        <div className="mt-0.5 text-xs font-black">{copy.readyTime}</div>
                      </div>
                      <Workflow className="h-5 w-5 text-emerald-300" />
                    </div>
                  </div>

                  <div className="rounded-[24px] bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">{copy.production}</div>
                        <div className="mt-1 text-sm font-black text-slate-950">{copy.machineOne}</div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-black text-emerald-700">
                        <Wifi className="h-3 w-3" /> {copy.machineOnline}
                      </div>
                    </div>
                    <div className="mt-4 rounded-2xl bg-emerald-50 p-3.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-bold text-emerald-700">{copy.recipe}</div>
                          <div className="mt-1 text-sm font-black text-slate-950">{copy.recipeValue}</div>
                        </div>
                        <Cpu className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                        <div className="h-full w-[68%] rounded-full bg-emerald-500" />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[10px] font-bold text-slate-500">
                        <span>{copy.machineStatus}</span>
                        <span>68%</span>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-slate-100 p-2.5">
                        <RefreshCw className="h-4 w-4 text-emerald-700" />
                        <div className="mt-2 text-[10px] font-black text-slate-700">{copy.statusSync}</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-2.5">
                        <Bell className="h-4 w-4 text-emerald-700" />
                        <div className="mt-2 text-[10px] font-black text-slate-700">{copy.notified}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.proofLabel}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.proofTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.proofDesc}</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{copy.machineKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.machineTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{copy.machineDesc}</p>
            <div className="mt-8 space-y-4">
              {copy.machineBullets.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-semibold leading-6 text-slate-100">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/features/machine" className="mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-black text-white transition hover:bg-emerald-400">
              {copy.allFeatures} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[44px] bg-emerald-400/10 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.055] p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">{copy.machineConsole}</div>
                  <div className="mt-1 text-xl font-black">{copy.machineQueue}</div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-300">
                  <Wifi className="h-4 w-4" /> {copy.machineOnline}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                {copy.machineFlow.map((label, index) => {
                  const icons = [ShoppingBag, Tags, Cpu, Activity];
                  const Icon = icons[index];
                  return (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-center">
                      <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${index === 2 ? 'bg-emerald-400 text-emerald-950' : 'bg-white/10 text-emerald-300'}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-[10px] font-black tracking-[0.12em] text-slate-300">{label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 space-y-3">
                {[
                  [copy.queueOne, copy.inProgress, 'w-[72%]', 'bg-emerald-400'],
                  [copy.queueTwo, copy.queued, 'w-[14%]', 'bg-slate-500'],
                  [copy.queueThree, copy.complete, 'w-full', 'bg-emerald-400'],
                ].map(([name, status, width, color]) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-slate-900/55 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-black text-white">{name}</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-300">{status}</div>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full rounded-full ${width} ${color}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ['9', 'Channels'],
                  ['Cloud', 'Recipes'],
                  ['Live', 'Logs'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white p-4 text-slate-950">
                    <div className="text-lg font-black">{value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3faf5] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="order-2 lg:order-1">
            <div className="rounded-[32px] border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-950/5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[24px] bg-slate-950 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300">{copy.memberName}</div>
                      <div className="mt-1 text-lg font-black">{copy.memberTier}</div>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-emerald-950">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-8 text-4xl font-black tracking-[-0.04em]">{copy.memberPoints}</div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-emerald-400" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>{copy.nextReward}</span>
                    <span>{copy.rewardDistance}</span>
                  </div>
                  <div className="mt-7 grid grid-cols-4 gap-2">
                    {copy.lifecycle.map((label, index) => (
                      <div key={label} className="text-center">
                        <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-black ${index < 3 ? 'bg-emerald-400 text-emerald-950' : 'bg-white/10 text-white'}`}>
                          {index + 1}
                        </div>
                        <div className="mt-2 text-[9px] font-bold text-slate-300">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] bg-emerald-50 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">{copy.campaign}</div>
                        <div className="mt-1 text-base font-black text-slate-950">{copy.campaignName}</div>
                      </div>
                      <TicketPercent className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-emerald-900/5">
                      <div className="text-xs font-bold text-slate-500">{copy.campaignAudience}</div>
                      <div className="mt-3 text-2xl font-black text-emerald-700">{copy.campaignResult}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      <Gift className="h-5 w-5 text-emerald-700" />
                      <div className="mt-3 text-xs font-black text-slate-950">Points & rewards</div>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-white p-4">
                      <Tags className="h-5 w-5 text-emerald-700" />
                      <div className="mt-3 text-xs font-black text-slate-950">Offers & coupons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.loyaltyKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">{copy.loyaltyTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{copy.loyaltyDesc}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {copy.lifecycle.map((label, index) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2.5 text-sm font-black text-slate-800 shadow-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">{index + 1}</span>
                  {label}
                </div>
              ))}
            </div>
            <Link to="/features/loyalty" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-emerald-700">
              {copy.allFeatures} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.capabilitiesKicker}</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.capabilitiesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{copy.capabilitiesDesc}</p>
            </div>
            <Link to="/features" className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:border-emerald-300 hover:text-emerald-800 lg:self-auto">
              {copy.allFeatures} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {copy.capabilities.map(([title, desc], index) => {
              const Icon = capabilityIcons[index];
              return (
                <div key={title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.02em] text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f7fbf8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.journeyKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.journeyTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.journeyDesc}</p>
          </div>

          <div className="relative mt-12 grid gap-4 lg:grid-cols-6">
            <div className="absolute left-[8%] right-[8%] top-9 hidden h-px bg-emerald-200 lg:block" />
            {copy.journey.map(([number, title, desc], index) => {
              const Icon = journeyIcons[index];
              return (
                <div key={number} className="relative rounded-[24px] border border-emerald-100 bg-white p-5 shadow-sm">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-[10px] font-black tracking-[0.16em] text-emerald-700">{number}</div>
                  <div className="mt-1 text-base font-black text-slate-950">{title}</div>
                  <div className="mt-2 text-xs font-semibold leading-5 text-slate-500">{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.statusKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">{copy.statusTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{copy.statusDesc}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border-[5px] border-slate-950 bg-white p-5 shadow-2xl">
              <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-200" />
              <div className="mt-6 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{copy.orderNo}</div>
              <div className="mt-5 space-y-4">
                {[
                  [copy.confirmed, true],
                  [copy.preparing, true],
                  [copy.ready, false],
                ].map(([label, active], index) => (
                  <div key={String(label)} className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full ${active ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'}`}>
                      {index < 2 ? <Check className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-black text-slate-950">{label}</div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full rounded-full bg-emerald-500 ${index === 0 ? 'w-full' : index === 1 ? 'w-[68%]' : 'w-[12%]'}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[26px] bg-slate-950 p-5 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-emerald-950">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black">SMS</div>
                    <div className="mt-0.5 text-[10px] font-bold text-slate-400">just now</div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-200">{copy.textPreview}</p>
              </div>
              <div className="rounded-[26px] border border-emerald-100 bg-emerald-50 p-5">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-700" />
                  <div className="text-sm font-black text-slate-950">Email notification</div>
                </div>
                <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-xs font-black text-slate-950">Your drink is ready</div>
                  <div className="mt-2 text-[11px] leading-5 text-slate-500">Order #A184 · Pickup counter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{copy.ownerKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{copy.ownerTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{copy.ownerDesc}</p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.055] p-5 sm:p-7">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                [copy.revenue, '€2,846', '+12.4%'],
                [copy.orders, '486', '+8.2%'],
                [copy.repeat, '41%', '+5.1%'],
                [copy.machineLinked, '92%', '+3.8%'],
              ].map(([label, value, delta]) => (
                <div key={label} className="rounded-2xl bg-white p-4 text-slate-950">
                  <div className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-400">{label}</div>
                  <div className="mt-3 text-2xl font-black tracking-[-0.03em]">{value}</div>
                  <div className="mt-1 text-xs font-black text-emerald-600">{delta}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] bg-white p-5 text-slate-950">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black">{copy.storePerformance}</div>
                    <div className="mt-1 text-[10px] font-bold text-slate-400">10:00 — 19:00</div>
                  </div>
                  <BarChart3 className="h-5 w-5 text-emerald-700" />
                </div>
                <div className="mt-6 flex h-36 items-end gap-2">
                  {[42, 58, 50, 68, 76, 92, 72, 86, 61, 48].map((height, index) => (
                    <div key={index} className="flex-1">
                      <div className="rounded-t-lg bg-emerald-500" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] bg-white p-5 text-slate-950">
                  <div className="text-xs font-black">{copy.topProducts}</div>
                  <div className="mt-4 space-y-3">
                    {[
                      ['Mango Matcha', '18%'],
                      ['Classic Milk Tea', '15%'],
                      ['Strawberry Matcha', '12%'],
                    ].map(([name, share]) => (
                      <div key={name}>
                        <div className="flex justify-between gap-3 text-[11px] font-bold text-slate-600">
                          <span>{name}</span><span>{share}</span>
                        </div>
                        <div className="mt-1.5 h-1.5 rounded-full bg-slate-100">
                          <div className="h-full rounded-full bg-emerald-500" style={{ width: share }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[24px] bg-emerald-400 p-5 text-emerald-950">
                  <div className="text-xs font-black">{copy.channelMix}</div>
                  <div className="mt-3 flex items-center gap-3">
                    <MonitorSmartphone className="h-7 w-7" />
                    <div>
                      <div className="text-2xl font-black">63%</div>
                      <div className="text-[10px] font-bold">Mobile / remote</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{copy.openKicker}</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">{copy.openTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{copy.openDesc}</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_0.72fr_1fr] lg:items-center">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {copy.channels.map((label, index) => {
                const Icon = channelIcons[index];
                return (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-black text-slate-950">{label}</div>
                    <ArrowRight className="ml-auto h-4 w-4 text-emerald-500" />
                  </div>
                );
              })}
            </div>

            <div className="relative flex min-h-[250px] items-center justify-center">
              <div className="absolute inset-x-0 top-1/2 hidden h-px bg-emerald-200 lg:block" />
              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-slate-950 p-6 text-center text-lg font-black text-white shadow-2xl ring-[18px] ring-emerald-50">
                {copy.coreEngine}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {copy.outputs.map((label, index) => {
                const Icon = outputIcons[index];
                return (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-[#f7fbf8] p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-black text-slate-950">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-emerald-950 px-6 py-14 text-center text-white shadow-2xl sm:px-10 lg:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 text-emerald-950">
            <QrCode className="h-7 w-7" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">{copy.exhibitionTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-100">{copy.exhibitionDesc}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-emerald-950 transition hover:bg-emerald-50">
              {copy.exhibitionCta} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/features" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-black text-white transition hover:bg-white/10">
              {copy.allFeatures}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
