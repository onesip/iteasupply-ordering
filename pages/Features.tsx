import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Database, Gift, Globe, Printer, Cpu, BarChart3, Building2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const shopTypeHighlights: Record<string, string[]> = {
  chain: ['machine', 'inventory', 'all-in-one'],
  local: ['loyalty', 'inventory', 'reports'],
  old: ['waterproof-labels', 'online-ordering'],
  new: ['inventory', 'waterproof-labels', 'loyalty'],
  hybrid: ['waterproof-labels', 'online-ordering', 'reports'],
  automation: ['machine', 'online-ordering', 'inventory']
};

const shopTypesList = [
  { id: 'chain', labelKey: 'shopTypes.types.chain.label' },
  { id: 'local', labelKey: 'shopTypes.types.local.label' },
  { id: 'old', labelKey: 'shopTypes.types.old.label' },
  { id: 'new', labelKey: 'shopTypes.types.new.label' },
  { id: 'hybrid', labelKey: 'shopTypes.types.hybrid.label' },
  { id: 'automation', labelKey: 'shopTypes.types.automation.label' }
];

const Features = () => {
  const { t } = useLanguage();
  const [activeShopType, setActiveShopType] = useState<string | null>(null);

  const features = [
    {
      id: 'online-ordering',
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: t('features.onlineTitle'),
      desc: t('features.onlineDesc'),
      link: "/features/online-ordering"
    },
    {
      id: 'waterproof-labels',
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: t('features.labelsTitle'),
      desc: t('features.labelsDesc'),
      link: "/features/waterproof-labels"
    },
    {
      id: 'inventory',
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: t('features.inventoryTitle'),
      desc: t('features.inventoryDesc'),
      link: "/features/inventory"
    },
    {
      id: 'loyalty',
      icon: <Gift className="w-8 h-8 text-pink-600" />,
      title: t('features.loyaltyTitle'),
      desc: t('features.loyaltyDesc'),
      link: "/features/loyalty"
    },
    {
      id: 'machine',
      icon: <Cpu className="w-8 h-8 text-red-600" />,
      title: t('features.machineTitle'),
      desc: t('features.machineDesc'),
      link: "/features/machine"
    },
    {
      id: 'reports',
      icon: <BarChart3 className="w-8 h-8 text-teal-600" />,
      title: t('features.reportsTitle'),
      desc: t('features.reportsDesc'),
      link: "/features/reports"
    },
    {
      id: 'all-in-one',
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      title: t('features.allInOneTitle'),
      desc: t('features.allInOneDesc'),
      link: "/features/all-in-one"
    },
    {
      id: 'transparency',
      icon: <CreditCard className="w-8 h-8 text-slate-600" />,
      title: t('features.paymentTitle'),
      desc: t('features.paymentDesc'),
      link: "/features/transparency"
    }
  ];

  const getCardClasses = (featureId: string) => {
    const baseClasses = "bg-white p-8 rounded-2xl border transition-all duration-500 group flex flex-col h-full";
    
    if (!activeShopType) {
      return `${baseClasses} shadow-sm border-slate-200 hover:shadow-md hover:-translate-y-1`;
    }

    const isHighlighted = shopTypeHighlights[activeShopType]?.includes(featureId);
    
    if (isHighlighted) {
      return `${baseClasses} shadow-2xl border-emerald-500 ring-2 ring-emerald-500/20 scale-105 z-10`;
    }
    
    return `${baseClasses} shadow-sm border-slate-100 opacity-40 scale-95`;
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: t('features.heroTitle') }} />
          <p className="text-xl text-slate-600 mb-10">
            {t('features.heroSubtitle')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-slate-700 font-medium mr-2">
              {t('featuresPage.youAre')}
            </span>
            <button
              onClick={() => setActiveShopType(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeShopType === null 
                  ? 'bg-slate-800 text-white' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {t('nav.features_all') || '所有功能'}
            </button>
            {shopTypesList.map(type => (
              <button
                key={type.id}
                onClick={() => setActiveShopType(type.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeShopType === type.id 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {t(type.labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto py-8">
          {features.map((feature) => (
            <Link 
              key={feature.id} 
              to={feature.link}
              className={getCardClasses(feature.id)}
            >
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {feature.desc}
              </p>
              <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                {t('features.learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30">
            {t('features.ctaBtn')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
