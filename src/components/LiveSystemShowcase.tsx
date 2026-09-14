import React, { type ComponentType, type ReactNode } from 'react';
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Cpu,
  Gift,
  Package,
  ShieldCheck,
  Smartphone,
  Tag,
  Users,
} from 'lucide-react';

type ViewKind = 'analytics' | 'loyalty' | 'catalog' | 'production' | 'mobile' | 'label';

type LiveSystemViewProps = {
  kind: ViewKind;
  compact?: boolean;
  language?: 'en' | 'zh';
};

const metricCards = [
  ['Net sales', '€5.4k', '-4.5%'],
  ['Orders', '711', '-10.8%'],
  ['Avg. ticket', '€7.56', '+7.1%'],
  ['Items sold', '1,047', '-7.4%'],
];

const productionRows = [
  ['A184', 'Mango Matcha', '16:39', '241g', '23.6s', 'Medium', '265g', '225g'],
  ['A183', 'Mango Fruit Milk', '16:38', '115g', '35.9s', 'Large', '510g', '504g'],
  ['A182', 'Jasmine Milk Tea', '16:37', '378g', '32.2s', 'Large', '485g', '497g'],
  ['A181', 'Brown Sugar Milk', '16:13', '329g', '18.0s', 'Large', '498g', '478g'],
  ['A180', 'Lychee Milk Tea', '16:09', '100g', '22.5s', 'Medium', '250g', '261g'],
];

const menuRows = [
  ['Pineapple Fruit Milk', '500 / 660ml', '€5 / €6', 'On sale'],
  ['Grape Fruit Milk', '500 / 660ml', '€5 / €6', 'On sale'],
  ['Lychee Iced Milk', '500 / 660ml', '€5 / €6', 'On sale'],
  ['Classic Milk Tea', '500ml', '€3.2', 'On sale'],
  ['Brown Sugar Milk Tea', '500ml', '€5', 'On sale'],
];

const ScreenShell = ({ children, label }: { children: ReactNode; label: string }) => (
  <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
    <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
      </div>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">
        <ShieldCheck className="h-3.5 w-3.5" /> {label}
      </div>
    </div>
    {children}
  </div>
);

const AnalyticsView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const title = language === 'zh' ? '经营数据洞察' : 'Operational analytics';
  return (
    <ScreenShell label={language === 'zh' ? '脱敏展示' : 'SANITIZED'}>
      <div className={compact ? 'p-4' : 'p-5'}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">OWNER VIEW</div>
            <div className="mt-1 text-lg font-black text-slate-950">{title}</div>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black text-emerald-700">7 DAYS</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {metricCards.map(([label, value, delta]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-900/5">
              <div className="text-[10px] font-bold text-slate-400">{label}</div>
              <div className="mt-1 text-lg font-black text-slate-950">{value}</div>
              <div className={`mt-1 text-[10px] font-bold ${delta.startsWith('+') ? 'text-emerald-600' : 'text-rose-500'}`}>{delta}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-black text-slate-800">Sales trend</div>
            <BarChart3 className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="mt-4 flex h-28 items-end gap-2">
            {[28, 36, 48, 64, 75, 89, 83, 96, 86, 70, 42].map((height, index) => (
              <div key={index} className="flex flex-1 items-end gap-1">
                <div className="w-1/2 rounded-t bg-blue-500/80" style={{ height: `${height}%` }} />
                <div className="w-1/2 rounded-t bg-emerald-400/80" style={{ height: `${Math.max(16, height - 8)}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
};

const LoyaltyView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const t = language === 'zh';
  return (
    <ScreenShell label={t ? '脱敏展示' : 'SANITIZED'}>
      <div className={compact ? 'p-4' : 'p-5'}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">LOYALTY</div>
            <div className="mt-1 text-lg font-black text-slate-950">{t ? '会员数据与复购' : 'Member data & retention'}</div>
          </div>
          <Gift className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 p-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              [t ? '会员人数' : 'Members', '768'],
              [t ? '消费会员' : 'Active', '755'],
              [t ? '复购会员' : 'Repeat', '376'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-[10px] font-bold text-slate-500">{label}</div>
                <div className="mt-1 text-xl font-black text-slate-950">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11px] font-black text-emerald-700">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">98.3% conversion</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">49.8% repeat</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            [t ? '新增会员' : 'New members', '12'],
            [t ? '复购会员' : 'Returning', '84'],
            [t ? '优惠券' : 'Coupons', 'Active'],
            [t ? '活动' : 'Campaigns', '6'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-100 bg-white p-3">
              <div className="text-[10px] font-bold text-slate-400">{label}</div>
              <div className="mt-1 text-base font-black text-slate-900">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
};

const CatalogView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => (
  <ScreenShell label={language === 'zh' ? '脱敏展示' : 'SANITIZED'}>
    <div className={compact ? 'p-4' : 'p-5'}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">CATALOG</div>
          <div className="mt-1 text-lg font-black text-slate-950">{language === 'zh' ? '商品与菜单管理' : 'Product & menu management'}</div>
        </div>
        <Package className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
        <div className="grid grid-cols-[1.5fr_1fr_0.8fr_0.8fr] bg-slate-50 px-3 py-2 text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">
          <span>Product</span><span>Size</span><span>Price</span><span>Status</span>
        </div>
        {menuRows.map((row) => (
          <div key={row[0]} className="grid grid-cols-[1.5fr_1fr_0.8fr_0.8fr] items-center border-t border-slate-100 px-3 py-2.5 text-[11px]">
            <span className="font-bold text-slate-800">{row[0]}</span>
            <span className="text-slate-500">{row[1]}</span>
            <span className="font-bold text-slate-700">{row[2]}</span>
            <span className="text-emerald-600">{row[3]}</span>
          </div>
        ))}
      </div>
    </div>
  </ScreenShell>
);

const ProductionView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const t = language === 'zh';
  return (
    <ScreenShell label={t ? '敏感字段已隐藏' : 'SENSITIVE FIELDS HIDDEN'}>
      <div className={compact ? 'p-4' : 'p-5'}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">PRODUCTION DATA</div>
            <div className="mt-1 text-lg font-black text-slate-950">{t ? '机器生产记录' : 'Machine production records'}</div>
          </div>
          <Cpu className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
          <div className="min-w-[760px]">
            <div className="grid grid-cols-[0.65fr_1.45fr_0.9fr_0.75fr_0.75fr_0.9fr_0.9fr_0.9fr] bg-slate-50 px-3 py-2 text-[9px] font-black uppercase tracking-[0.08em] text-slate-400">
              <span>Order</span><span>Product</span><span>Started</span><span>Cup wt.</span><span>Output</span><span>Size</span><span>Expected</span><span>Actual</span>
            </div>
            {productionRows.map((row) => (
              <div key={`${row[0]}-${row[2]}`} className="grid grid-cols-[0.65fr_1.45fr_0.9fr_0.75fr_0.75fr_0.9fr_0.9fr_0.9fr] border-t border-slate-100 px-3 py-2.5 text-[10px] text-slate-600">
                {row.map((cell, index) => <span key={index} className={index < 2 ? 'font-bold text-slate-800' : ''}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          {t ? '门店、设备序列号和内部识别信息未公开。' : 'Store, device serial and internal identifiers are not exposed.'}
        </div>
      </div>
    </ScreenShell>
  );
};

const MobileView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const t = language === 'zh';
  const products = [
    ['Pineapple Fruit Milk', 'Mango & pineapple, creamy and refreshing', '€5'],
    ['Grape Fruit Milk', 'Juicy grape with fresh milk', '€5'],
    ['Lychee Iced Milk', 'Fresh lychee with crystal agar', '€5'],
  ];
  return (
    <div className="mx-auto max-w-[270px] rounded-[30px] border-[6px] border-slate-950 bg-white shadow-xl">
      <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-slate-200" />
      <div className={compact ? 'p-3' : 'p-4'}>
        <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
          <div className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">I'TEA MOBILE</div>
          <div className="mt-1 text-lg font-black text-slate-950">{t ? '手机点单' : 'Order ahead'}</div>
          <div className="mt-1 text-[10px] text-slate-500">HTML5 · no app download</div>
        </div>
        <div className="mt-3 space-y-3">
          {products.map(([name, desc, price], index) => (
            <div key={name} className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="flex gap-3">
                <div className={`h-16 w-14 shrink-0 rounded-xl ${index === 0 ? 'bg-amber-100' : index === 1 ? 'bg-violet-100' : 'bg-rose-100'}`}>
                  <div className="mx-auto mt-3 h-10 w-6 rounded-b-xl rounded-t-md bg-white/70" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-black text-slate-900">{name}</div>
                  <div className="mt-1 line-clamp-2 text-[9px] leading-4 text-slate-400">{desc}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-black text-slate-900">{price}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-sm font-black text-white">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LabelView = ({ compact = false, language = 'en' }: Omit<LiveSystemViewProps, 'kind'>) => {
  const t = language === 'zh';
  return (
    <ScreenShell label={t ? '内部编码逻辑未展示' : 'INTERNAL LOGIC NOT SHOWN'}>
      <div className={compact ? 'p-4' : 'p-5'}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">PRODUCTION SETUP</div>
            <div className="mt-1 text-lg font-black text-slate-950">{t ? '制作标签与生产信息' : 'Production label & output data'}</div>
          </div>
          <Tag className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              {[
                ['Pickup number', 'A184'],
                ['Quantity', '1'],
                ['Drink', 'Mango Matcha'],
                ['Specification', '50% sugar · low ice'],
                ['Modifiers', 'Pearls'],
                ['Production status', 'Ready'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white p-3 ring-1 ring-slate-900/5">
                  <div className="font-bold text-slate-400">{label}</div>
                  <div className="mt-1 font-black text-slate-800">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mx-auto max-w-[160px] border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between text-[9px] font-black"><span>Pickup A184</span><span>Qty 1</span></div>
              <div className="mt-2 bg-slate-950 px-2 py-1 text-[9px] font-black text-white">TAKEAWAY</div>
              <div className="mt-2 text-xs font-black">Mango Matcha</div>
              <div className="mt-1 bg-slate-950 px-2 py-1 text-[9px] font-bold text-white">50% sugar · low ice</div>
              <div className="mt-2 text-[9px] text-slate-500">Pearls</div>
              <div className="mt-8 rounded-lg bg-emerald-50 p-2 text-center text-[8px] font-black text-emerald-800">PRODUCTION READY</div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          {t ? '仅展示生产结果与字段结构，不公开二维码编码或第三方设备拼接规则。' : 'Shows production output and field structure only; QR encoding and third-party device composition rules are intentionally not exposed.'}
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

export const SystemProofCard = ({
  kind,
  title,
  description,
  language = 'en',
}: {
  kind: ViewKind;
  title: string;
  description: string;
  language?: 'en' | 'zh';
}) => (
  <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5">
    <div className="bg-slate-50 p-3">
      <LiveSystemView kind={kind} compact language={language} />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700">
        <CheckCircle2 className="h-4 w-4" /> {language === 'zh' ? '基于真实系统界面' : 'BASED ON LIVE SYSTEM INTERFACES'}
      </div>
      <h3 className="mt-3 text-xl font-black tracking-[-0.02em] text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  </div>
);

export const ProofIconRow = ({ language = 'en' }: { language?: 'en' | 'zh' }) => {
  const items = language === 'zh'
    ? [
        ['顾客端', Smartphone],
        ['会员端', Users],
        ['生产端', Cpu],
        ['老板端', Activity],
      ]
    : [
        ['Customer', Smartphone],
        ['Loyalty', Users],
        ['Production', Cpu],
        ['Owner', Activity],
      ];
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map(([label, Icon]) => {
        const I = Icon as ComponentType<{ className?: string }>;
        return (
          <div key={String(label)} className="rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm">
            <I className="mx-auto h-4 w-4 text-emerald-700" />
            <div className="mt-2 text-[10px] font-black uppercase tracking-[0.08em] text-slate-600">{label}</div>
          </div>
        );
      })}
    </div>
  );
};
