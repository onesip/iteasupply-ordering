import React, { type ReactNode } from 'react';
import { Activity, BarChart3, Cpu, Gift, Package, QrCode, Tag, Users, Wifi } from 'lucide-react';

type ViewKind = 'analytics' | 'loyalty' | 'catalog' | 'production' | 'mobile' | 'label';

type LiveSystemViewProps = {
  kind: ViewKind;
  compact?: boolean;
  language?: 'en' | 'zh';
};

const Shell = ({ title, meta, children }: { title: string; meta: string; children: ReactNode }) => (
  <div className="w-full overflow-hidden rounded-lg border border-[#ded4cd] bg-white shadow-[0_14px_34px_-24px_rgba(57,26,16,0.22)] sm:rounded-xl">
    <div className="flex min-h-10 items-center justify-between gap-3 border-b border-[#ebe2dc] bg-[#fcfaf8] px-3 py-2.5 sm:px-4">
      <div className="flex min-w-0 items-center gap-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#7a3d27]" />
        <span className="truncate text-[10px] font-semibold text-[#50372d] sm:text-[11px]">{title}</span>
      </div>
      <span className="shrink-0 text-[9px] text-[#9d897f] sm:text-[10px]">{meta}</span>
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
      <div className={compact ? 'p-3' : 'p-3 sm:p-5'}>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {metrics.map(([label, value, delta]) => (
            <div key={label} className="rounded-md border border-[#ebe2dc] bg-white p-2.5 sm:rounded-lg sm:p-3">
              <div className="truncate text-[9px] font-medium text-[#9d897f] sm:text-[10px]">{label}</div>
              <div className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-[#391A10] sm:text-[17px]">{value}</div>
              <div className="mt-0.5 text-[9px] font-medium text-[#7a3d27] sm:text-[10px]">{delta}</div>
            </div>
          ))}
        </div>
        <div className="mt-2.5 rounded-md border border-[#ebe2dc] p-2.5 sm:mt-3 sm:rounded-lg sm:p-3">
          <div className="flex items-center justify-between text-[9px] font-medium text-[#806b61] sm:text-[10px]"><span>{zh ? '销售趋势' : 'Sales trend'}</span><BarChart3 className="h-3.5 w-3.5" /></div>
          <div className="mt-3 flex h-20 items-end gap-1 sm:h-24 sm:gap-1.5">
            {[28, 42, 52, 66, 76, 90, 83, 96, 84, 68, 43].map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-[#7a3d27]/80" style={{ height: `${height}%` }} />)}
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
      <div className={compact ? 'p-3' : 'p-3 sm:p-5'}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            [zh ? '会员人数' : 'Members', '768', Users],
            [zh ? '活跃会员' : 'Active', '755', Activity],
            [zh ? '复购会员' : 'Returning', '376', Gift],
          ].map(([label, value, Icon], index) => {
            const C = Icon as React.ComponentType<{ className?: string }>;
            return <div key={String(label)} className={`rounded-md border border-[#ebe2dc] p-2.5 sm:rounded-lg sm:p-3 ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}><div className="flex items-center justify-between"><span className="text-[9px] text-[#9d897f] sm:text-[10px]">{String(label)}</span><C className="h-3.5 w-3.5 text-[#7a3d27]" /></div><div className="mt-2 text-[18px] font-semibold text-[#391A10] sm:text-[20px]">{String(value)}</div></div>;
          })}
        </div>
        <div className="mt-2 grid gap-2 sm:mt-3 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-md border border-[#ebe2dc] p-2.5 sm:rounded-lg sm:p-3"><div className="text-[9px] font-medium text-[#806b61] sm:text-[10px]">{zh ? '会员转化' : 'Member conversion'}</div><div className="mt-3 h-2 rounded-full bg-[#f1e8e2]"><div className="h-full w-[82%] rounded-full bg-[#7a3d27]" /></div><div className="mt-2 flex justify-between text-[9px] text-[#9d897f] sm:text-[10px]"><span>98.3%</span><span>{zh ? '持续追踪' : 'tracked'}</span></div></div>
          <div className="rounded-md bg-[#391A10] p-2.5 text-white sm:rounded-lg sm:p-3"><div className="text-[9px] text-[#c9b5aa] sm:text-[10px]">{zh ? '复购率' : 'Repeat rate'}</div><div className="mt-2 text-[20px] font-semibold sm:text-[22px]">49.8%</div><div className="mt-1 text-[9px] text-[#efcbb5] sm:text-[10px]">+4.2%</div></div>
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
      <div className={compact ? 'p-3' : 'p-3 sm:p-5'}>
        <div className="mb-3 flex items-center justify-between gap-3"><div><div className="text-[9px] text-[#9d897f] sm:text-[10px]">{zh ? '当前班次' : 'Current shift'}</div><div className="mt-0.5 text-[13px] font-semibold text-[#391A10] sm:text-[15px]">{zh ? '制作与出品' : 'Production output'}</div></div><div className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#fbf3ee] px-2 py-1 text-[9px] font-medium text-[#7a3d27] sm:text-[10px]"><Wifi className="h-3 w-3" />Live</div></div>
        <div className="space-y-2 sm:hidden">
          {rows.slice(0, 3).map((row) => <div key={row[0]} className="rounded-md border border-[#ebe2dc] bg-white p-3"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><div className="text-[10px] font-semibold text-[#7a3d27]">#{row[0]}</div><div className="mt-1 truncate text-[12px] font-semibold text-[#391A10]">{row[1]}</div></div><div className="shrink-0 rounded-md bg-[#faf6f3] px-2 py-1 text-[9px] font-medium text-[#806b61]">{row[4]}</div></div><div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#f0e8e3] pt-3"><div><div className="text-[8px] uppercase tracking-[0.08em] text-[#a69287]">{zh ? '开始' : 'Start'}</div><div className="mt-1 text-[10px] font-medium text-[#5f4b42]">{row[2]}</div></div><div><div className="text-[8px] uppercase tracking-[0.08em] text-[#a69287]">{zh ? '时长' : 'Output'}</div><div className="mt-1 text-[10px] font-medium text-[#5f4b42]">{row[3]}</div></div><div><div className="text-[8px] uppercase tracking-[0.08em] text-[#a69287]">{zh ? '实际' : 'Actual'}</div><div className="mt-1 text-[10px] font-medium text-[#5f4b42]">{row[6]}</div></div></div></div>)}
        </div>
        <div className="hidden overflow-hidden rounded-lg border border-[#ebe2dc] sm:block">
          <div className="grid grid-cols-[0.6fr_1.45fr_0.85fr_0.75fr_0.6fr_0.85fr_0.85fr] bg-[#faf7f5] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.07em] text-[#9d897f]"><span>Order</span><span>Product</span><span>Started</span><span>Output</span><span>Size</span><span>Expected</span><span>Actual</span></div>
          {rows.map((row) => <div key={row[0]} className="grid grid-cols-[0.6fr_1.45fr_0.85fr_0.75fr_0.6fr_0.85fr_0.85fr] border-t border-[#f0e8e3] px-3 py-2.5 text-[10px] text-[#806b61]">{row.map((cell, i) => <span key={i} className={i < 2 ? 'font-medium text-[#4b3026]' : ''}>{cell}</span>)}</div>)}
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
      <div className={compact ? 'p-3' : 'p-3 sm:p-5'}>
        <div className="mb-3 flex items-center justify-between gap-3"><div className="flex min-w-0 items-center gap-2"><Package className="h-4 w-4 shrink-0 text-[#7a3d27]" /><span className="truncate text-[12px] font-semibold text-[#391A10] sm:text-[13px]">{zh ? '饮品目录' : 'Drink catalog'}</span></div><button className="shrink-0 rounded-md bg-[#391A10] px-3 py-1.5 text-[9px] font-medium text-white sm:text-[10px]">+ {zh ? '新增' : 'Add'}</button></div>
        <div className="space-y-2 sm:hidden">{rows.map((row) => <div key={row[0]} className="rounded-md border border-[#ebe2dc] p-3"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><div className="truncate text-[11px] font-semibold text-[#391A10]">{row[0]}</div><div className="mt-1 text-[9px] text-[#9d897f]">{row[1]}</div></div><div className="shrink-0 text-[10px] font-semibold text-[#5f4b42]">{row[2]}</div></div><div className="mt-2 text-[9px] font-medium text-[#7a3d27]">Live</div></div>)}</div>
        <div className="hidden overflow-hidden rounded-lg border border-[#ebe2dc] sm:block"><div className="grid grid-cols-[1.5fr_1fr_0.8fr_0.7fr] bg-[#faf7f5] px-3 py-2 text-[9px] uppercase tracking-[0.06em] text-[#9d897f]"><span>Product</span><span>Size</span><span>Price</span><span>Status</span></div>{rows.map((row) => <div key={row[0]} className="grid grid-cols-[1.5fr_1fr_0.8fr_0.7fr] border-t border-[#f0e8e3] px-3 py-2.5 text-[10px]"><span className="font-medium text-[#4b3026]">{row[0]}</span><span className="text-[#806b61]">{row[1]}</span><span className="text-[#5f4b42]">{row[2]}</span><span className="text-[#7a3d27]">Live</span></div>)}</div>
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
    <div className="mx-auto w-full max-w-[258px] rounded-[22px] border-[4px] border-[#391A10] bg-white shadow-[0_20px_45px_-30px_rgba(57,26,16,0.45)] sm:rounded-[24px] sm:border-[5px]">
      <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-[#dfd2c9]" />
      <div className="p-2.5">
        <div className="rounded-lg bg-[#fbf4ef] p-3"><div className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7a3d27]">I&apos;TEA MOBILE</div><div className="mt-1 text-[15px] font-semibold text-[#391A10]">{zh ? '手机点单' : 'Order ahead'}</div><div className="mt-0.5 text-[9px] text-[#9d897f]">HTML5 · no app</div></div>
        <div className="mt-2 space-y-2">{products.map(([name, price, bg]) => <div key={name} className="flex gap-2 rounded-lg border border-[#f0e8e3] p-2"><div className={`h-12 w-10 shrink-0 rounded-md ${bg}`}><div className="mx-auto mt-2 h-8 w-4 rounded-b-md bg-white/80" /></div><div className="min-w-0 flex-1"><div className="truncate text-[10px] font-semibold text-[#391A10]">{name}</div><div className="mt-1 text-[9px] text-[#9d897f]">{zh ? '可选糖度 · 冰度' : 'Sugar · ice options'}</div><div className="mt-1.5 flex items-center justify-between"><span className="text-[11px] font-semibold">{price}</span><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7a3d27] text-[11px] text-white">+</span></div></div></div>)}</div>
        <div className="mt-2 grid grid-cols-4 border-t border-[#f0e8e3] pt-2 text-center text-[8px] text-[#a69287]"><span className="text-[#7a3d27]">Home</span><span>Menu</span><span>Orders</span><span>Member</span></div>
      </div>
    </div>
  );
};

const Label = ({ language = 'en', compact = false }: Omit<LiveSystemViewProps, 'kind'>) => {
  const zh = language === 'zh';
  return (
    <Shell title={zh ? '自动制作标签' : 'Automatic production label'} meta={zh ? '订单触发' : 'Order-triggered'}>
      <div className={compact ? 'p-3' : 'p-3 sm:p-5'}>
        <div className="grid gap-3 sm:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-lg border border-[#ebe2dc] p-3">
            <div className="flex items-center gap-2"><Tag className="h-4 w-4 text-[#7a3d27]" /><span className="text-[12px] font-semibold text-[#391A10]">{zh ? '订单信息自动带入' : 'Order data carried to label'}</span></div>
            <div className="mt-3 flex flex-wrap gap-1.5">{[zh ? '取餐号' : 'Pickup No.', zh ? '饮品名' : 'Item', zh ? '规格' : 'Specification', zh ? '小料' : 'Modifiers', zh ? '数量' : 'Quantity', 'QR'].map((x) => <span key={x} className="rounded-md border border-[#dfd2c9] bg-[#faf7f5] px-2 py-1 text-[9px] text-[#6d5a51]">{x}</span>)}</div>
            <p className="mt-3 text-[9px] leading-4 text-[#9d897f]">{zh ? '标签用于门店制作和连接式生产流程。' : 'The label gives the store a clear production reference immediately after the order is received.'}</p>
          </div>
          <div className="rounded-lg border border-[#ebe2dc] bg-[#f7f7f7] p-3">
            <div className="mx-auto max-w-[205px] bg-white px-3 py-3 shadow-sm ring-1 ring-black/5">
              <div className="flex items-end justify-between border-b-2 border-black pb-1"><div><div className="text-[8px] font-medium uppercase text-slate-500">Pickup Number</div><div className="text-[18px] font-bold leading-none text-black">A184</div></div><div className="text-right"><div className="text-[8px] font-medium uppercase text-slate-500">Quantity</div><div className="text-[16px] font-bold leading-none text-black">1</div></div></div>
              <div className="mt-2 bg-black px-2 py-1 text-[9px] font-semibold text-white">Dining Type · Pickup</div>
              <div className="border-b border-black px-1 py-1.5"><div className="text-[8px] uppercase text-slate-500">Item Name</div><div className="text-[11px] font-bold text-black">Mango Matcha</div></div>
              <div className="border-b border-black px-1 py-1.5"><div className="text-[8px] uppercase text-slate-500">Specification</div><div className="text-[10px] font-semibold text-black">Medium · 50% · Low ice</div></div>
              <div className="px-1 py-1.5"><div className="text-[8px] uppercase text-slate-500">Modifiers</div><div className="text-[10px] font-semibold text-black">Pearls</div></div>
              <div className="mt-1 flex items-end justify-between gap-3"><div className="text-[8px] leading-3 text-slate-500">Production line 01</div><QrCode className="h-16 w-16 shrink-0 text-black" strokeWidth={1.8} /></div>
            </div>
          </div>
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
