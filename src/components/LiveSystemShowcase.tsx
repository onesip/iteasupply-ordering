import React, { type ReactNode } from 'react';
import { Activity, BarChart3, Cpu, Gift, Package, Tag, Users, Wifi } from 'lucide-react';

type ViewKind = 'analytics' | 'loyalty' | 'catalog' | 'production' | 'mobile' | 'label';

type LiveSystemViewProps = {
  kind: ViewKind;
  compact?: boolean;
  language?: 'en' | 'zh';
};

const Shell = ({ title, meta, children }: { title: string; meta: string; children: ReactNode }) => (
  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_14px_34px_-24px_rgba(15,23,42,0.24)]">
    <div className="flex items-center justify-between border-b border-slate-200 bg-[#fbfbfb] px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-semibold text-slate-700">{title}</span>
      </div>
      <span className="text-[10px] text-slate-400">{meta}</span>
    </div>
    {children}
  </div>
);

const Analytics = ({ language = 'en', compact = false }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  const metrics = [
    [zh ? '营业额' : 'Revenue', '€5.53k', '+7.1%'],
    [zh ? '订单' : 'Orders', '711', '+5.4%'],
    [zh ? '客单价' : 'Avg. ticket', '€7.56', '+3.5%'],
    [zh ? '复购率' : 'Returning', '49.8%', '+4.2%'],
  ];
  return (
    <Shell title={zh ? '经营数据' : 'Business analytics'} meta={zh ? '本周' : 'This week'}>
      <div className={compact ? 'p-3.5' : 'p-4 sm:p-5'}>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {metrics.map(([label, value, delta]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-[10px] font-medium text-slate-400">{label}</div>
              <div className="mt-1 text-[17px] font-semibold tracking-[-0.02em] text-slate-950">{value}</div>
              <div className="mt-0.5 text-[10px] font-medium text-emerald-700">{delta}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-slate-200 p-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-slate-500"><span>{zh ? '销售趋势' : 'Sales trend'}</span><BarChart3 className="h-3.5 w-3.5" /></div>
          <div className="mt-3 flex h-24 items-end gap-1.5">
            {[28, 42, 52, 66, 76, 90, 83, 96, 84, 68, 43].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-sm bg-emerald-600/80" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
};

const Loyalty = ({ language = 'en', compact = false }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <Shell title={zh ? '会员与营销' : 'Loyalty & membership'} meta="CRM">
      <div className={compact ? 'p-3.5' : 'p-4 sm:p-5'}>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            [zh ? '会员人数' : 'Members', '768', Users],
            [zh ? '活跃会员' : 'Active', '755', Activity],
            [zh ? '复购会员' : 'Returning', '376', Gift],
          ].map(([label, value, Icon]) => {
            const C = Icon as React.ComponentType<{ className?: string }>;
            return <div key={String(label)} className="rounded-lg border border-slate-200 p-3"><div className="flex items-center justify-between"><span className="text-[10px] text-slate-400">{String(label)}</span><C className="h-3.5 w-3.5 text-emerald-700" /></div><div className="mt-2 text-[20px] font-semibold text-slate-950">{String(value)}</div></div>;
          })}
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-slate-200 p-3">
            <div className="text-[10px] font-medium text-slate-500">{zh ? '会员转化' : 'Member conversion'}</div>
            <div className="mt-3 h-2 rounded-full bg-slate-100"><div className="h-full w-[82%] rounded-full bg-emerald-600" /></div>
            <div className="mt-2 flex justify-between text-[10px] text-slate-400"><span>98.3%</span><span>{zh ? '持续增长' : 'tracked'}</span></div>
          </div>
          <div className="rounded-lg bg-slate-950 p-3 text-white"><div className="text-[10px] text-slate-400">{zh ? '复购率' : 'Repeat rate'}</div><div className="mt-2 text-[22px] font-semibold">49.8%</div><div className="mt-1 text-[10px] text-emerald-300">+4.2%</div></div>
        </div>
      </div>
    </Shell>
  );
};

const Production = ({ language = 'en', compact = false }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  const rows = [
    ['A184', 'Mango Matcha', '16:39', '23.6s', 'M', '265g', '225g'],
    ['A183', 'Mango Fruit Milk', '16:38', '35.9s', 'L', '510g', '504g'],
    ['A182', 'Jasmine Milk Tea', '16:37', '32.2s', 'L', '485g', '497g'],
    ['A181', 'Brown Sugar Milk', '16:13', '18.0s', 'L', '498g', '478g'],
  ];
  return (
    <Shell title={zh ? '生产记录' : 'Production records'} meta={zh ? '在线' : 'Online'}>
      <div className={compact ? 'p-3.5' : 'p-4 sm:p-5'}>
        <div className="mb-3 flex items-center justify-between"><div><div className="text-[10px] text-slate-400">{zh ? '当前班次' : 'Current shift'}</div><div className="mt-0.5 text-[15px] font-semibold text-slate-900">{zh ? '制作与出品' : 'Production output'}</div></div><div className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700"><Wifi className="h-3 w-3" />Live</div></div>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[0.6fr_1.45fr_0.85fr_0.75fr_0.6fr_0.85fr_0.85fr] bg-slate-50 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.07em] text-slate-400"><span>Order</span><span>Product</span><span>Started</span><span>Output</span><span>Size</span><span>Expected</span><span>Actual</span></div>
            {rows.map((row) => <div key={row[0]} className="grid grid-cols-[0.6fr_1.45fr_0.85fr_0.75fr_0.6fr_0.85fr_0.85fr] border-t border-slate-100 px-3 py-2.5 text-[10px] text-slate-500">{row.map((cell, i) => <span key={i} className={i < 2 ? 'font-medium text-slate-800' : ''}>{cell}</span>)}</div>)}
          </div>
        </div>
      </div>
    </Shell>
  );
};

const Catalog = ({ language = 'en', compact = false }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  const rows = [
    ['Pineapple Fruit Milk', '500 / 660ml', '€5 / €6'],
    ['Grape Fruit Milk', '500 / 660ml', '€5 / €6'],
    ['Lychee Iced Milk', '500 / 660ml', '€5 / €6'],
    ['Classic Milk Tea', '500ml', '€3.2'],
  ];
  return (
    <Shell title={zh ? '商品管理' : 'Product management'} meta="Catalog">
      <div className={compact ? 'p-3.5' : 'p-4 sm:p-5'}>
        <div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2"><Package className="h-4 w-4 text-emerald-700" /><span className="text-[13px] font-semibold text-slate-900">{zh ? '饮品目录' : 'Drink catalog'}</span></div><button className="rounded-md bg-slate-950 px-3 py-1.5 text-[10px] font-medium text-white">+ {zh ? '新增' : 'Add'}</button></div>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <div className="grid grid-cols-[1.5fr_1fr_0.8fr_0.7fr] bg-slate-50 px-3 py-2 text-[9px] uppercase tracking-[0.06em] text-slate-400"><span>Product</span><span>Size</span><span>Price</span><span>Status</span></div>
          {rows.map((row) => <div key={row[0]} className="grid grid-cols-[1.5fr_1fr_0.8fr_0.7fr] border-t border-slate-100 px-3 py-2.5 text-[10px]"><span className="font-medium text-slate-800">{row[0]}</span><span className="text-slate-500">{row[1]}</span><span className="text-slate-700">{row[2]}</span><span className="text-emerald-700">Live</span></div>)}
        </div>
      </div>
    </Shell>
  );
};

const Mobile = ({ language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  const products = [
    ['Pineapple Fruit Milk', '€5.00', 'bg-amber-100'],
    ['Grape Fruit Milk', '€5.00', 'bg-violet-100'],
    ['Lychee Iced Milk', '€5.00', 'bg-rose-100'],
  ];
  return (
    <div className="mx-auto max-w-[258px] rounded-[24px] border-[5px] border-slate-950 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.5)]">
      <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-slate-200" />
      <div className="p-2.5">
        <div className="rounded-lg bg-[#f4f8f5] p-3"><div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-700">I&apos;TEA MOBILE</div><div className="mt-1 text-[15px] font-semibold text-slate-950">{zh ? '手机点单' : 'Order ahead'}</div><div className="mt-0.5 text-[9px] text-slate-400">HTML5 · no app</div></div>
        <div className="mt-2 space-y-2">
          {products.map(([name, price, bg]) => <div key={name} className="flex gap-2 rounded-lg border border-slate-100 p-2"><div className={`h-12 w-10 shrink-0 rounded-md ${bg}`}><div className="mx-auto mt-2 h-8 w-4 rounded-b-md bg-white/80" /></div><div className="min-w-0 flex-1"><div className="truncate text-[10px] font-semibold text-slate-900">{name}</div><div className="mt-1 text-[9px] text-slate-400">{zh ? '可选糖度 · 冰度' : 'Sugar · ice options'}</div><div className="mt-1.5 flex items-center justify-between"><span className="text-[11px] font-semibold">{price}</span><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-[11px] text-white">+</span></div></div></div>)}
        </div>
        <div className="mt-2 grid grid-cols-4 border-t border-slate-100 pt-2 text-center text-[8px] text-slate-400"><span className="text-emerald-700">Home</span><span>Menu</span><span>Orders</span><span>Member</span></div>
      </div>
    </div>
  );
};

const Label = ({ language = 'en', compact = false }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <Shell title={zh ? '制作标签' : 'Production label'} meta="Template">
      <div className={compact ? 'p-3.5' : 'p-4 sm:p-5'}>
        <div className="grid gap-3 sm:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-lg border border-slate-200 p-3"><div className="flex items-center gap-2"><Tag className="h-4 w-4 text-emerald-700" /><span className="text-[12px] font-semibold">{zh ? '字段设置' : 'Label fields'}</span></div><div className="mt-3 flex flex-wrap gap-1.5">{['Pickup No.', 'Item', 'Size', 'Modifiers', 'Quantity'].map((x) => <span key={x} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] text-slate-600">{x}</span>)}</div></div>
          <div className="rounded-lg border border-slate-200 bg-[#fcfcfc] p-3"><div className="mx-auto max-w-[180px] bg-white p-3 shadow-sm"><div className="flex justify-between text-[12px] font-semibold"><span>A184</span><span>1</span></div><div className="mt-2 border-t border-slate-900 pt-2 text-[10px] font-semibold">Mango Matcha</div><div className="mt-1 text-[9px] text-slate-500">Medium · 50% · Low ice</div><div className="mt-5 flex items-center gap-2 text-[9px] text-slate-400"><Cpu className="h-3.5 w-3.5" /> Production</div></div></div>
        </div>
      </div>
    </Shell>
  );
};

export const LiveSystemView = ({ kind, compact = false, language = 'en' }: LiveSystemViewProps) => {
  if (kind === 'analytics') return <Analytics compact={compact} language={language} />;
  if (kind === 'loyalty') return <Loyalty compact={compact} language={language} />;
  if (kind === 'catalog') return <Catalog compact={compact} language={language} />;
  if (kind === 'production') return <Production compact={compact} language={language} />;
  if (kind === 'mobile') return <Mobile compact={compact} language={language} />;
  return <Label compact={compact} language={language} />;
};

export default LiveSystemView;
