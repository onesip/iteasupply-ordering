import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Headphones,
  Settings2,
  Store,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Pricing = () => {
  const { language } = useLanguage();
  const en = language === 'en';

  const copy = en
    ? {
        kicker: 'PRICING & IMPLEMENTATION',
        title: 'A quotation built around your operation.',
        subtitle: 'We do not force every store into the same package. Pricing depends on the software scope, number of locations, automation setup, integrations and the level of implementation support you need.',
        primary: 'Request a tailored proposal',
        secondary: 'Talk to our team',
        note: 'Software-only, automation-only and complete store solutions can all be scoped separately.',
        scopeKicker: 'WHAT SHAPES THE QUOTATION',
        scopeTitle: 'We price the system around what you actually need.',
        scopes: [
          ['Software scope', 'Ordering, loyalty, notifications, analytics, multi-store management and other modules can be selected around your workflow.', Settings2],
          ['Automation & devices', 'Tea-machine integration, production setup, POS or other hardware requirements are scoped to the store environment.', Cpu],
          ['Rollout & service', 'Installation, configuration, training, maintenance and ongoing support can be included in the implementation plan.', Store],
        ],
        supportKicker: 'IMPLEMENTATION & AFTER-SALES SUPPORT',
        supportTitle: 'You are not left alone after the system is delivered.',
        supportDesc: 'Our team can support the full rollout — from installation and staff onboarding to maintenance and troubleshooting after launch.',
        services: [
          ['Installation & commissioning', 'We can assist with on-site setup, device connection, system configuration and launch preparation.', Wrench],
          ['Training & operating guidance', 'We train owners, managers and store teams so the system is used correctly in daily operations.', GraduationCap],
          ['Maintenance & repair support', 'When hardware or connected equipment needs attention, our team can help diagnose, maintain and coordinate repairs.', Settings2],
          ['Remote troubleshooting & support', 'For software, configuration and operational questions, we provide remote assistance and ongoing technical guidance.', Headphones],
        ],
        processKicker: 'HOW IT WORKS',
        processTitle: 'A clear proposal before you commit.',
        process: [
          ['01', 'Understand the operation', 'We look at your store format, order channels, production flow, locations and existing equipment.'],
          ['02', 'Define the right scope', 'Together we decide which software modules, integrations, devices and services are actually necessary.'],
          ['03', 'Receive a tailored quotation', 'You receive a clear proposal covering the selected system scope, implementation and support.'],
        ],
        ctaTitle: 'Tell us how your store operates. We will build the right scope around it.',
        ctaDesc: 'For exhibition visitors, we can discuss your setup directly and prepare a follow-up proposal after the demo.',
        cta: 'Contact us for pricing',
      }
    : {
        kicker: '价格与实施服务',
        title: '根据你的实际运营需求定制报价。',
        subtitle: '我们不会把所有门店硬塞进同一个套餐。最终报价会根据软件模块、门店数量、自动化设备、第三方对接以及你需要的实施服务范围来确定。',
        primary: '获取定制方案',
        secondary: '联系我们',
        note: '可以单独选择软件、自动化设备，也可以一起规划完整门店解决方案。',
        scopeKicker: '报价主要取决于什么',
        scopeTitle: '只为真正需要的部分付费。',
        scopes: [
          ['软件范围', '手机点单、会员、通知、数据分析、多店管理等模块，可以根据实际运营流程组合。', Settings2],
          ['自动化与设备', '奶茶机联动、生产流程、POS 以及其他硬件，会根据具体门店环境进行配置。', Cpu],
          ['实施与服务', '安装、系统配置、培训、维护以及持续售后支持，都可以纳入实施方案。', Store],
        ],
        supportKicker: '实施与售后支持',
        supportTitle: '系统交付以后，不是让你自己摸索。',
        supportDesc: '我们可以从安装上线一直支持到日常运营，包括员工培训、维护、维修和后续排障。',
        services: [
          ['安装与上线调试', '可以协助现场安装、设备连接、系统配置以及开业前的整体上线准备。', Wrench],
          ['培训与运营指导', '我们会帮助老板、店长和门店员工理解系统，并正确用于每天的实际运营。', GraduationCap],
          ['维护与维修支持', '如果硬件或连接设备出现问题，我们可以协助诊断、维护，并根据情况安排维修。', Settings2],
          ['远程排障与持续支持', '软件、配置或运营流程遇到问题时，我们可以提供远程排查和持续技术支持。', Headphones],
        ],
        processKicker: '报价流程',
        processTitle: '先把需求讲清楚，再给你一份清晰方案。',
        process: [
          ['01', '了解你的门店', '先了解门店业态、点单渠道、制作流程、门店数量和目前已有的设备。'],
          ['02', '确定真正需要的范围', '一起确认软件模块、设备、系统对接以及服务范围，不为了卖套餐而增加不需要的东西。'],
          ['03', '提供定制报价', '最后给出一份清晰方案，把系统范围、实施内容和售后支持分别说明。'],
        ],
        ctaTitle: '告诉我们你的门店是怎么运营的，我们来帮你配置合适的方案。',
        ctaDesc: '展会现场也可以直接聊你的门店情况，演示之后再根据实际需求提供后续报价。',
        cta: '联系我们获取报价',
      };

  return (
    <div className="min-h-screen bg-white pt-16 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-[11px]">{copy.kicker}</div>
            <h1 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[48px] lg:text-[56px]">{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-[17px]">{copy.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700">{copy.primary}<ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">{copy.secondary}</Link>
            </div>
            <div className="mt-6 flex items-start gap-2.5 border-t border-slate-200 pt-5 text-[12px] leading-5 text-slate-500 sm:text-[13px]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{copy.note}</div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#fafafa] py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
            <div className="max-w-sm">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-[11px]">{copy.scopeKicker}</div>
              <h2 className="mt-4 text-[27px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[34px]">{copy.scopeTitle}</h2>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {copy.scopes.map(([title, desc, Icon], index) => {
                const C = Icon as React.ComponentType<{ className?: string }>;
                return <div key={String(title)} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:py-7"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-emerald-700 ring-1 ring-slate-200"><C className="h-5 w-5" /></div><div><div className="flex items-center justify-between gap-3"><h3 className="text-[17px] font-semibold text-slate-950">{String(title)}</h3><span className="text-[10px] font-semibold tracking-[0.12em] text-slate-400">0{index + 1}</span></div><p className="mt-2 text-[13px] leading-6 text-slate-600 sm:text-[14px]">{String(desc)}</p></div></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 sm:text-[11px]">{copy.supportKicker}</div>
            <h2 className="mt-4 text-[27px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[34px]">{copy.supportTitle}</h2>
            <p className="mt-4 text-[14px] leading-6 text-slate-600 sm:text-[15px]">{copy.supportDesc}</p>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {copy.services.map(([title, desc, Icon]) => {
              const C = Icon as React.ComponentType<{ className?: string }>;
              return <div key={String(title)} className="bg-white p-5 sm:p-6"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700"><C className="h-5 w-5" /></div><h3 className="mt-5 text-[16px] font-semibold text-slate-950 sm:text-[17px]">{String(title)}</h3><p className="mt-2 text-[13px] leading-6 text-slate-600">{String(desc)}</p></div>;
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 py-14 text-white sm:py-18 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
            <div className="max-w-sm"><div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:text-[11px]">{copy.processKicker}</div><h2 className="mt-4 text-[27px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[34px]">{copy.processTitle}</h2></div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {copy.process.map(([num, title, desc]) => <div key={num} className="grid gap-2 py-5 sm:grid-cols-[48px_1fr] sm:gap-4 sm:py-6"><div className="text-[10px] font-semibold tracking-[0.14em] text-emerald-300">{num}</div><div><h3 className="text-[16px] font-semibold text-white">{title}</h3><p className="mt-2 text-[13px] leading-6 text-slate-400">{desc}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-7 border border-slate-200 bg-[#fafafa] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div><h2 className="max-w-3xl text-[26px] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[32px]">{copy.ctaTitle}</h2><p className="mt-3 max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-[14px]">{copy.ctaDesc}</p></div>
          <Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto">{copy.cta}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
