import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  Cpu,
  Database,
  Gift,
  HelpCircle,
  Layers3,
  Mail,
  MessageSquare,
  Package,
  RefreshCw,
  Smartphone,
  Sparkles,
  Tag,
  Tags,
  TicketPercent,
  Users,
  Wifi,
  Workflow,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const featureVisualConfig: Record<string, { icon: any; accent: string; items: [string, string][] }> = {
  machine: {
    icon: Cpu,
    accent: 'bg-slate-950 text-emerald-300',
    items: [
      ['Order #A184', 'Recipe routed'],
      ['Machine 01', 'Online'],
      ['Production', 'Mixing'],
      ['Status sync', 'Live'],
    ],
  },
  loyalty: {
    icon: Gift,
    accent: 'bg-emerald-600 text-white',
    items: [
      ['Member', '1,240 pts'],
      ['Campaign', '+18% repeat'],
      ['Reward', 'Available'],
      ['Customer', 'Recognized'],
    ],
  },
  'online-ordering': {
    icon: Smartphone,
    accent: 'bg-emerald-600 text-white',
    items: [
      ['Mobile web', 'HTML5'],
      ['Order', '#A184'],
      ['Pickup', '~4 min'],
      ['Notification', 'Enabled'],
    ],
  },
  'waterproof-labels': {
    icon: Tag,
    accent: 'bg-cyan-600 text-white',
    items: [
      ['Order label', '#A184'],
      ['Drink', 'Mango Matcha'],
      ['Options', '50% · low ice'],
      ['Print status', 'Ready'],
    ],
  },
  inventory: {
    icon: Package,
    accent: 'bg-amber-500 text-white',
    items: [
      ['Jasmine tea', 'Healthy'],
      ['Pearls', 'Reorder soon'],
      ['Recipe use', 'Tracked'],
      ['Waste', 'Logged'],
    ],
  },
  reports: {
    icon: BarChart3,
    accent: 'bg-blue-600 text-white',
    items: [
      ['Revenue', '€2,846'],
      ['Orders', '486'],
      ['Repeat', '41%'],
      ['Machine-linked', '92%'],
    ],
  },
  'all-in-one': {
    icon: Layers3,
    accent: 'bg-violet-600 text-white',
    items: [
      ['Ordering', 'Connected'],
      ['Loyalty', 'Connected'],
      ['Production', 'Connected'],
      ['Analytics', 'Connected'],
    ],
  },
  transparency: {
    icon: Activity,
    accent: 'bg-slate-900 text-white',
    items: [
      ['Order trail', 'Visible'],
      ['Status', 'Auditable'],
      ['Payment', 'Structured'],
      ['Logs', 'Available'],
    ],
  },
};

const FeatureDetail = () => {
  const { featureId } = useParams();
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const translatedData = t(`featureDetails.${featureId}`);
  const isMachine = featureId === 'machine';
  const isLoyalty = featureId === 'loyalty';

  const specialData = isMachine
    ? isEn
      ? {
          title: 'Tea-Machine Integration',
          subtitle: 'Connect the digital order trail to the physical production workflow.',
          result: 'Less manual re-entry, more consistent production visibility.',
          how: [
            'Order options remain structured — drink, sugar, ice and add-ons can stay attached to the production instruction.',
            'Cloud recipe mapping translates an order into a machine-ready production workflow.',
            'Machine state and production progress can remain linked to the original order.',
            'Logs and remote visibility create a clearer path for diagnosis when something goes wrong.',
          ],
          scenario: {
            role: 'STORE OPERATIONS',
            quote: 'The important step is not simply automating a drink. It is keeping the order, recipe, production state and customer journey connected.',
          },
          faq: [
            { q: 'Does every drink have to be made by the machine?', a: 'No. A connected workflow can support machine-made and staff-made products while keeping the order trail in one system.' },
            { q: 'What happens to customizations?', a: 'Customizations can remain structured as part of the order and recipe mapping instead of being reduced to an unstructured note.' },
            { q: 'Why do status and logs matter?', a: 'They make the production layer visible. Staff and support teams can understand what was sent, what happened and where an exception occurred.' },
          ],
        }
      : {
          title: '奶茶机联动',
          subtitle: '把数字订单轨迹真正连接到实体生产流程。',
          result: '减少人工二次录入，同时让生产过程更透明、更容易诊断。',
          how: [
            '饮品、糖度、冰度和加料等客制化信息保持结构化，并继续附着在生产指令上。',
            '云端配方映射把订单转换成奶茶机可以执行的生产工作流。',
            '机器状态和制作进度可以继续关联到原始订单。',
            '日志和远程状态为异常诊断提供清晰的依据。',
          ],
          scenario: {
            role: '门店运营',
            quote: '关键不只是让机器自动做一杯饮料，而是让订单、配方、生产状态和顾客体验始终保持连接。',
          },
          faq: [
            { q: '是不是所有饮品都必须由机器制作？', a: '不是。系统可以同时支持机器制作和人工制作，同时保持同一条订单轨迹。' },
            { q: '糖度、冰度和加料怎么处理？', a: '这些客制化信息可以继续作为结构化订单数据参与配方映射，而不是只变成一句备注。' },
            { q: '为什么状态和日志很重要？', a: '它们让生产层变得可见。员工和支持人员可以知道系统发送了什么、发生了什么，以及异常出在哪一步。' },
          ],
        }
    : isLoyalty
      ? isEn
        ? {
            title: 'Loyalty & Membership',
            subtitle: 'Turn each transaction into a customer relationship and the next visit.',
            result: 'A loyalty layer that is attached to actual ordering behavior.',
            how: [
              'Recognize members during ordering and keep purchase history connected to the profile.',
              'Award points and rewards automatically from the same transaction trail.',
              'Create coupons, offers and campaigns for relevant customer groups.',
              'Use customer behavior and repeat-purchase data to understand what brings people back.',
            ],
            scenario: {
              role: 'CUSTOMER GROWTH',
              quote: 'Loyalty works best when it is not another app or spreadsheet. It should be part of the order itself.',
            },
            faq: [
              { q: 'Can customers earn points through mobile ordering?', a: 'Yes. The member relationship can be part of the same mobile ordering journey.' },
              { q: 'Can we run targeted offers?', a: 'The system is designed to support campaigns, coupons and targeted member activity based on customer data.' },
              { q: 'What should we measure?', a: 'Beyond total members, repeat purchase, campaign response and customer behavior are more useful operating signals.' },
            ],
          }
        : {
            title: '会员与积分',
            subtitle: '让每一笔交易都沉淀成顾客关系，并推动下一次到店。',
            result: '会员体系和真实下单行为直接连接，而不是独立存在。',
            how: [
              '顾客下单时识别会员，并让消费历史继续连接到会员档案。',
              '同一笔交易自动累计积分和奖励。',
              '针对不同顾客群体创建优惠券、活动和定向优惠。',
              '用消费行为和复购数据判断什么真正把顾客带回来。',
            ],
            scenario: {
              role: '顾客增长',
              quote: '会员做得好的关键，不是再多一个 App 或 Excel，而是会员本身就属于订单流程。',
            },
            faq: [
              { q: '手机下单可以自动累计积分吗？', a: '可以。会员关系可以直接成为手机下单旅程的一部分。' },
              { q: '可以做定向活动吗？', a: '系统按照会员数据设计，可以支持优惠券、活动和不同顾客群体的定向触达。' },
              { q: '会员系统最应该看什么？', a: '除了会员总数，更值得关注的是复购、活动响应和真实消费行为。' },
            ],
          }
      : null;

  const data = specialData || translatedData;

  if (!data || typeof data === 'string' || !data.title) {
    return <Navigate to="/features" replace />;
  }

  const visual = featureVisualConfig[featureId || ''] || featureVisualConfig['all-in-one'];
  const VisualIcon = visual.icon;

  const copy = isEn
    ? {
        back: 'All features',
        result: 'THE RESULT',
        productView: 'PRODUCT VIEW',
        workflow: 'How the workflow connects',
        workflowDesc: 'The interface is presented as a coherent product flow rather than isolated feature screenshots.',
        live: 'LIVE',
        faq: 'Common questions',
        unified: 'This feature becomes more valuable when the rest of the workflow stays connected.',
        unifiedDesc: 'Ordering, loyalty, machine workflow, notifications and analytics are designed to operate as one system.',
        demo: 'Book a live demo',
        all: 'View all features',
        machineSteps: ['ORDER', 'RECIPE', 'MACHINE', 'STATUS'],
        productionQueue: 'Production queue',
        diagnostic: 'Diagnostic log',
        received: 'Instruction received',
        mapped: 'Recipe mapped',
        mixing: 'Mixing',
        statusReturned: 'Status returned',
        loyaltySteps: ['JOIN', 'EARN', 'REWARD', 'RETURN'],
        memberProfile: 'Member profile',
        points: '1,240 points',
        nextReward: '260 pts to next reward',
        campaign: 'Campaign',
        campaignName: 'After-school return offer',
        repeat: '+18% repeat visits',
      }
    : {
        back: '全部功能',
        result: '最终结果',
        productView: '产品视图',
        workflow: '工作流如何连接',
        workflowDesc: '这里展示的是完整产品流程，而不是彼此孤立的功能截图。',
        live: '实时',
        faq: '常见问题',
        unified: '当其他环节继续保持连接时，这项功能的价值会更高。',
        unifiedDesc: '下单、会员、奶茶机流程、通知和数据分析从一开始就按照一套系统来设计。',
        demo: '预约现场演示',
        all: '查看全部功能',
        machineSteps: ['订单', '配方', '奶茶机', '状态'],
        productionQueue: '生产队列',
        diagnostic: '诊断日志',
        received: '已收到指令',
        mapped: '配方已映射',
        mixing: '制作中',
        statusReturned: '状态已回传',
        loyaltySteps: ['加入', '积累', '奖励', '复购'],
        memberProfile: '会员档案',
        points: '1,240 积分',
        nextReward: '还差 260 积分',
        campaign: '营销活动',
        campaignName: '放学后回店优惠',
        repeat: '复购 +18%',
      };

  const renderSpecialProductView = () => {
    if (isMachine) {
      const icons = [Smartphone, Tags, Cpu, Activity];
      return (
        <div className="rounded-[32px] border border-white/10 bg-white/[0.055] p-5 sm:p-7">
          <div className="grid gap-3 sm:grid-cols-4">
            {copy.machineSteps.map((label, index) => {
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

          <div className="mt-4 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[24px] bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">{copy.productionQueue}</div>
                  <div className="mt-1 text-lg font-black">Machine 01</div>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-black text-emerald-700"><Wifi className="h-3 w-3" /> Online</div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ['A184 · Mango Matcha', copy.mixing, 'w-[72%]'],
                  ['A185 · Classic Milk Tea', 'Queued', 'w-[12%]'],
                  ['A186 · Peach Jasmine', 'Ready', 'w-full'],
                ].map(([name, status, width]) => (
                  <div key={name} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-black text-slate-950">{name}</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.12em] text-emerald-700">{status}</div>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className={`h-full rounded-full bg-emerald-500 ${width}`} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] bg-emerald-400 p-5 text-emerald-950">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em]"><Database className="h-4 w-4" /> {copy.diagnostic}</div>
              <div className="mt-5 space-y-3">
                {[copy.received, copy.mapped, copy.mixing, copy.statusReturned].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-emerald-950/10 px-3 py-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-950 text-white"><Check className="h-3.5 w-3.5" /></div>
                    <span className="text-[11px] font-black">{item}</span>
                    <span className="ml-auto text-[9px] font-bold opacity-60">00:0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (isLoyalty) {
      return (
        <div className="rounded-[32px] border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/5 sm:p-7">
          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[24px] bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300">{copy.memberProfile}</div>
                  <div className="mt-1 text-lg font-black">Gold member</div>
                </div>
                <Users className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="mt-7 text-4xl font-black tracking-[-0.04em]">{copy.points}</div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[72%] rounded-full bg-emerald-400" /></div>
              <div className="mt-3 text-xs font-bold text-slate-400">{copy.nextReward}</div>
              <div className="mt-7 grid grid-cols-4 gap-2">
                {copy.loyaltySteps.map((label, index) => (
                  <div key={label} className="text-center">
                    <div className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-black ${index < 3 ? 'bg-emerald-400 text-emerald-950' : 'bg-white/10 text-white'}`}>{index + 1}</div>
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
                    <div className="mt-1 text-lg font-black text-slate-950">{copy.campaignName}</div>
                  </div>
                  <TicketPercent className="h-6 w-6 text-emerald-700" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400">Audience</div>
                    <div className="mt-2 text-xl font-black text-slate-950">146</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-[10px] font-bold text-slate-400">Result</div>
                    <div className="mt-2 text-xl font-black text-emerald-700">{copy.repeat}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-100 bg-white p-4"><Gift className="h-5 w-5 text-emerald-700" /><div className="mt-3 text-xs font-black text-slate-950">Points & rewards</div></div>
                <div className="rounded-2xl border border-slate-100 bg-white p-4"><Tags className="h-5 w-5 text-emerald-700" /><div className="mt-3 text-xs font-black text-slate-950">Offers & coupons</div></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-white pt-[76px] text-slate-950">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[#f7fbf8] py-16 lg:py-20">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <Link to="/features" className="inline-flex items-center gap-2 text-sm font-black text-emerald-700 hover:text-emerald-900">
              ← {copy.back}
            </Link>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800 shadow-sm">
              <Sparkles className="h-4 w-4" /> PLATFORM FEATURE
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl">{data.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{data.subtitle}</p>
          </div>

          <div className="rounded-[30px] border border-emerald-950/10 bg-slate-950 p-3 shadow-2xl shadow-emerald-950/10">
            <div className="rounded-[24px] bg-white p-5">
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${visual.accent}`}>
                  <VisualIcon className="h-6 w-6" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> {copy.live}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {visual.items.map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5">
                    <div className="text-[11px] font-bold text-slate-400">{label}</div>
                    <div className="mt-1.5 text-sm font-black text-slate-950">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <div className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-800">{copy.result}</div>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl">{data.result}</h2>
              <div className="mt-8 space-y-4">
                {data.how && data.how.map((item: string, i: number) => (
                  <div key={i} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><CheckCircle2 className="h-5 w-5" /></div>
                    <p className="pt-1 text-base font-semibold leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] bg-emerald-950 p-8 text-white shadow-xl sm:p-10">
              <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">{data.scenario.role}</div>
                <p className="mt-5 text-2xl font-black leading-9 tracking-[-0.025em] text-white">“{data.scenario.quote}”</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(isMachine || isLoyalty) ? (
        <section className={`${isMachine ? 'bg-slate-950 text-white' : 'bg-[#f3faf5] text-slate-950'} py-20 lg:py-24`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <div className={`text-xs font-black uppercase tracking-[0.18em] ${isMachine ? 'text-emerald-300' : 'text-emerald-700'}`}>{copy.productView}</div>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl">{copy.workflow}</h2>
              <p className={`mt-4 text-base leading-7 ${isMachine ? 'text-slate-300' : 'text-slate-600'}`}>{copy.workflowDesc}</p>
            </div>
            {renderSpecialProductView()}
          </div>
        </section>
      ) : (
        <section className="bg-[#f7fbf8] py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{copy.productView}</div>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl">{copy.workflow}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{copy.workflowDesc}</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {visual.items.slice(0, 3).map(([label, value], i) => {
                const icons = [Smartphone, Wifi, Bell];
                const Icon = icons[i] || Activity;
                return (
                  <div key={label} className="min-h-[220px] rounded-[26px] border border-emerald-100 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon className="h-5 w-5" /></div>
                    <div className="mt-7 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">SCREEN {i + 1}</div>
                    <p className="mt-2 text-lg font-black leading-7 text-slate-950">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-500">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black tracking-[-0.035em] text-slate-950">{copy.faq}</h2>
          <div className="mt-10 space-y-4">
            {data.faq && data.faq.map((item: any, i: number) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-start gap-3 font-black text-slate-950"><HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /> {item.q}</h3>
                <p className="mt-3 pl-8 text-sm leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-[34px] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10">
          <h2 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">{copy.unified}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">{copy.unifiedDesc}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-white transition hover:bg-emerald-400">
              {copy.demo} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/features" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-black text-white transition hover:bg-white/10">{copy.all}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureDetail;
