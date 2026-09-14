import React, { type ComponentType, type ReactNode } from 'react';
import {
  Activity,
  BarChart3,
  Check,
  ChevronRight,
  Cpu,
  Gift,
  Mail,
  Package,
  Smartphone,
  Tag,
  Users,
  Wifi,
} from 'lucide-react';

type ViewKind = 'analytics' | 'loyalty' | 'catalog' | 'production' | 'mobile' | 'label';

type LiveSystemViewProps = {
  kind: ViewKind;
  compact?: boolean;
  language?: 'en' | 'zh';
};

const analyticsMetrics = [
  ['Revenue', '€5.53k', '+7.1%'],
  ['Orders', '711', '+5.4%'],
  ['Avg. ticket', '€7.56', '+3.5%'],
  ['Returning', '49.8%', '+4.2%'],
];

const productionRows = [
  ['A184', 'Mango Matcha', '16:39', '23.6s', 'Medium', '265g', '225g'],
  ['A183', 'Mango Fruit Milk', '16:38', '35.9s', 'Large', '510g', '504g'],
  ['A182', 'Jasmine Milk Tea', '16:37', '32.2s', 'Large', '485g', '497g'],
  ['A181', 'Brown Sugar Milk', '16:13', '18.0s', 'Large', '498g', '478g'],
];

const menuRows = [
  ['Pineapple Fruit Milk', '500 / 660ml', '€5 / €6', 'Live'],
  ['Grape Fruit Milk', '500 / 660ml', '€5 / €6', 'Live'],
  ['Lychee Iced Milk', '500 / 660ml', '€5 / €6', 'Live'],
  ['Classic Milk Tea', '500ml', '€3.2', 'Live'],
  ['Brown Sugar Milk Tea', '500ml', '€5', 'Live'],
];

const ScreenShell = ({ children, title, eyebrow }: { children: ReactNode; title: string; eyebrow: string }) => (
  <div className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-32px_rgba(15,23,42,0.32)]">
    <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3.5">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <div className="text-right">
        <div className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700">{eyebrow}</div>
        <div className="mt-0.5 text-[11px] font-extrabold text-slate-700">{title}</div>
      </div>
    </div>
    {children}
  </div>
);

const AnalyticsView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <ScreenShell eyebrow="OPERATIONS" title={zh ? '经营数据洞察' : 'Operational analytics'}>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{zh ? '全店数据' : 'ALL CHANNELS'}</div>
            <div className="mt-1 text-lg font-black tracking-[-0.02em] text-slate-950">{zh ? '本周表现' : 'This week at a glance'}</div>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black text-emerald-700">LIVE</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {analyticsMetrics.map(([label, value, delta]) => (
            <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5">
              <div className="text-[10px] font-bold text-slate-400">{label}</div>
              <div className="mt-1.5 text-lg font-black tracking-[-0.02em] text-slate-950">{value}</div>
              <div className="mt-1 text-[10px] font-black text-emerald-600">{delta}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-black text-slate-800">{zh ? '销售趋势' : 'Sales trend'}</div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400"><BarChart3 className="h-3.5 w-3.5" /> 12:00–20:00</div>
          </div>
          <div className="mt-5 flex h-28 items-end gap-2">
            {[26, 38, 52, 67, 76, 91, 82, 96, 88, 70, 46].map((height, index) => (
              <div key={index} className="group relative flex flex-1 items-end justify-center">
                <div className="w-full rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-300 transition-all duration-300 group-hover:from-emerald-700 group-hover:to-emerald-400" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
};

const LoyaltyView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <ScreenShell eyebrow="LOYALTY" title={zh ? '会员与复购' : 'Membership & retention'}>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-gradient-to-br from-[#ecfdf3] via-white to-[#eef8ff] p-5 ring-1 ring-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{zh ? '会员概览' : 'MEMBER OVERVIEW'}</div>
                <div className="mt-1 text-2xl font-black tracking-[-0.03em] text-slate-950">768</div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white"><Users className="h-5 w-5" /></div>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[82%] rounded-full bg-emerald-500" />
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] font-bold text-slate-500">
              <span>{zh ? '活跃会员 755' : '755 active members'}</span>
              <span>98.3%</span>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-5 text-white">
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300">{zh ? '复购率' : 'REPEAT RATE'}</div>
            <div className="mt-2 text-3xl font-black tracking-[-0.04em]">49.8%</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-slate-300"><Activity className="h-4 w-4 text-emerald-400" /> {zh ? '持续追踪复购趋势' : 'Tracked over time'}</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            [zh ? '新增会员' : 'New members', '12'],
            [zh ? '回访会员' : 'Returning', '84'],
            [zh ? '优惠券' : 'Coupons', 'Active'],
            [zh ? '活动' : 'Campaigns', '6'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-100 bg-white p-3.5">
              <div className="text-[10px] font-bold text-slate-400">{label}</div>
              <div className="mt-1.5 text-base font-black text-slate-950">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
};

const CatalogView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <ScreenShell eyebrow="CATALOG" title={zh ? '商品与菜单管理' : 'Product & menu management'}>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Package className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-black text-slate-950">{zh ? '商品目录' : 'Product catalog'}</div>
              <div className="text-[10px] font-semibold text-slate-400">{zh ? '杯型 · 价格 · 分类 · 状态' : 'Size · price · category · status'}</div>
            </div>
          </div>
          <div className="rounded-xl bg-slate-950 px-3 py-2 text-[10px] font-black text-white">+ {zh ? '新增' : 'ADD'}</div>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-[1.5fr_1fr_0.8fr_0.7fr] bg-slate-50 px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">
            <span>Product</span><span>Size</span><span>Price</span><span>Status</span>
          </div>
          {menuRows.map((row) => (
            <div key={row[0]} className="grid grid-cols-[1.5fr_1fr_0.8fr_0.7fr] items-center border-t border-slate-100 px-3 py-3 text-[10px]">
              <span className="font-bold text-slate-800">{row[0]}</span>
              <span className="text-slate-500">{row[1]}</span>
              <span className="font-bold text-slate-700">{row[2]}</span>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 font-bold text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{row[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
};

const ProductionView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <ScreenShell eyebrow="PRODUCTION" title={zh ? '机器生产记录' : 'Machine production records'}>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{zh ? '当前班次' : 'CURRENT SHIFT'}</div>
            <div className="mt-1 text-lg font-black tracking-[-0.02em] text-slate-950">{zh ? '生产与出品' : 'Production output'}</div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-[10px] font-black text-emerald-700"><Wifi className="h-3.5 w-3.5" /> ONLINE</div>
        </div>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
          <div className="min-w-[690px]">
            <div className="grid grid-cols-[0.65fr_1.45fr_0.9fr_0.75fr_0.9fr_0.9fr_0.9fr] bg-slate-50 px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.08em] text-slate-400">
              <span>Order</span><span>Product</span><span>Started</span><span>Output</span><span>Size</span><span>Expected</span><span>Actual</span>
            </div>
            {productionRows.map((row) => (
              <div key={`${row[0]}-${row[2]}`} className="grid grid-cols-[0.65fr_1.45fr_0.9fr_0.75fr_0.9fr_0.9fr_0.9fr] items-center border-t border-slate-100 px-3 py-3 text-[10px] text-slate-600">
                <span className="font-black text-slate-900">{row[0]}</span>
                <span className="font-bold text-slate-800">{row[1]}</span>
                <span>{row[2]}</span><span>{row[3]}</span><span>{row[4]}</span><span>{row[5]}</span><span>{row[6]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
};

const MobileView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  const products = [
    ['Pineapple Fruit Milk', 'Creamy mango & pineapple', '€5.00', 'bg-amber-100'],
    ['Grape Fruit Milk', 'Juicy grape with fresh milk', '€5.00', 'bg-violet-100'],
    ['Lychee Iced Milk', 'Fresh lychee & crystal agar', '€5.00', 'bg-rose-100'],
  ];
  return (
    <div className="mx-auto max-w-[282px] rounded-[34px] border-[7px] border-slate-950 bg-white p-2 shadow-[0_28px_70px_-34px_rgba(15,23,42,0.55)]">
      <div className="mx-auto mt-1.5 h-1.5 w-16 rounded-full bg-slate-200" />
      <div className={compact ? 'p-2' : 'p-2.5'}>
        <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-[#fff7ed] via-white to-[#ecfdf5] p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">I'TEA MOBILE</div>
              <div className="mt-1 text-lg font-black tracking-[-0.03em] text-slate-950">{zh ? '手机点单' : 'Order ahead'}</div>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm"><Smartphone className="h-4 w-4 text-emerald-700" /></div>
          </div>
          <div className="mt-3 flex gap-2 text-[9px] font-bold text-slate-500">
            <span className="rounded-full bg-white px-2.5 py-1 shadow-sm">Pickup</span>
            <span className="rounded-full bg-white px-2.5 py-1 shadow-sm">HTML5</span>
          </div>
        </div>
        <div className="mt-3 space-y-2.5">
          {products.map(([name, desc, price, bg], index) => (
            <div key={name} className="group rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex gap-3">
                <div className={`relative h-16 w-14 shrink-0 overflow-hidden rounded-xl ${bg}`}>
                  <div className="absolute left-1/2 top-3 h-11 w-7 -translate-x-1/2 rounded-b-xl rounded-t-md bg-white/80 shadow-sm" />
                  <div className="absolute bottom-1.5 left-1/2 h-1.5 w-7 -translate-x-1/2 rounded-full bg-white/70" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[11px] font-black text-slate-900">{name}</div>
                  <div className="mt-1 line-clamp-2 text-[9px] leading-4 text-slate-400">{desc}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[12px] font-black text-slate-900">{price}</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white transition group-hover:scale-105"><ChevronRight className="h-3.5 w-3.5" /></div>
                  </div>
                </div>
              </div>
              {index === 0 && <div className="mt-2 inline-flex rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-black text-emerald-700">POPULAR</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LabelView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <ScreenShell eyebrow="PRODUCTION" title={zh ? '制作标签' : 'Production label'}>
      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="mx-auto max-w-sm rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4 border-b border-slate-950 pb-3">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">PICKUP</div>
              <div className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-950">A184</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">QTY</div>
              <div className="mt-1 text-2xl font-black text-slate-950">1</div>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {[
              [zh ? '商品' : 'Item', 'Mango Matcha'],
              [zh ? '规格' : 'Size', 'Medium 500ml'],
              [zh ? '选项' : 'Options', '50% sugar · low ice'],
              [zh ? '加料' : 'Modifiers', 'Pearls'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-6 border-b border-slate-100 pb-2.5">
                <span className="text-[10px] font-bold text-slate-400">{label}</span>
                <span className="text-right text-[11px] font-black text-slate-800">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-2xl bg-emerald-50 px-3 py-2.5 text-[10px] font-black text-emerald-800"><Check className="h-4 w-4" /> {zh ? '生产信息已就绪' : 'Production data ready'}</div>
        </div>
      </div>
    </ScreenShell>
  );
};

export const LiveSystemView = ({ kind, compact = false, language = 'en' }: LiveSystemViewProps) => {
  if (kind === 'analytics') return <AnalyticsView compact={compact} language={language} />;
  if (kind === 'loyalty') return <LoyaltyView compact={compact} language={language} />;
  if (kind === 'catalog') return <CatalogView compact={compact} language={language} />;
  if (kind === 'production') return <ProductionView compact={compact} language={language} />;
  if (kind === 'mobile') return <MobileView compact={compact} language={language} />;
  return <LabelView compact={compact} language={language} />;
};

export const SystemProofCard = ({ icon: Icon, label, value }: { icon: ComponentType<{ className?: string }>; label: string; value: string }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</div>
        <div className="mt-1 text-sm font-black text-slate-950">{value}</div>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon className="h-4 w-4" /></div>
    </div>
  </div>
);

export const ProofIconRow = ({ language = 'en' }: { language?: 'en' | 'zh' }) => {
  const zh = language === 'zh';
  const items = [
    [Cpu, zh ? '生产' : 'Production'],
    [Gift, zh ? '会员' : 'Loyalty'],
    [BarChart3, zh ? '数据' : 'Analytics'],
    [Tag, zh ? '标签' : 'Labels'],
    [Mail, zh ? '通知' : 'Notifications'],
  ] as const;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([Icon, label]) => (
        <div key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[10px] font-black text-slate-700 shadow-sm">
          <Icon className="h-3.5 w-3.5 text-emerald-700" /> {label}
        </div>
      ))}
    </div>
  );
};
