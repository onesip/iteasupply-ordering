import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Heart, 
  Package, 
  Tag,
  BarChart3, 
  Cpu, 
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const features = [
  {
    id: 'online-ordering',
    icon: Smartphone,
    titleKey: 'onlineTitle',
    descKey: 'onlineDesc',
    color: 'bg-emerald-500'
  },
  {
    id: 'waterproof-labels',
    icon: Tag,
    titleKey: 'labelsTitle',
    descKey: 'labelsDesc',
    color: 'bg-teal-500'
  },
  {
    id: 'inventory',
    icon: Package,
    titleKey: 'inventoryTitle',
    descKey: 'inventoryDesc',
    color: 'bg-amber-500'
  },
  {
    id: 'loyalty',
    icon: Heart,
    titleKey: 'loyaltyTitle',
    descKey: 'loyaltyDesc',
    color: 'bg-pink-500'
  },
  {
    id: 'machine',
    icon: Cpu,
    titleKey: 'machineTitle',
    descKey: 'machineDesc',
    color: 'bg-indigo-500'
  },
  {
    id: 'reports',
    icon: BarChart3,
    titleKey: 'reportsTitle',
    descKey: 'reportsDesc',
    color: 'bg-cyan-500'
  },
  {
    id: 'all-in-one',
    icon: Layers,
    titleKey: 'allInOneTitle',
    descKey: 'allInOneDesc',
    color: 'bg-blue-500'
  },
  {
    id: 'transparency',
    icon: ShieldCheck,
    titleKey: 'paymentTitle',
    descKey: 'paymentDesc',
    color: 'bg-purple-500'
  }
];

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

const FeatureSlider = () => {
  const { t } = useLanguage();
  const [activeShopType, setActiveShopType] = useState<string | null>(null);

  // Duplicate features for seamless looping
  const duplicatedFeatures = [...features, ...features];

  const getCardClasses = (featureId: string) => {
    const baseClasses = "w-[300px] md:w-[350px] shrink-0 bg-white rounded-2xl p-8 border hover:shadow-xl transition-all duration-500 flex flex-col h-full";
    
    if (!activeShopType) {
      return `${baseClasses} shadow-sm border-slate-100 group`;
    }

    const isHighlighted = shopTypeHighlights[activeShopType]?.includes(featureId);
    
    if (isHighlighted) {
      return `${baseClasses} shadow-2xl border-emerald-500 ring-2 ring-emerald-500/20 scale-105 z-10 group`;
    }
    
    return `${baseClasses} shadow-sm border-slate-100 opacity-40 scale-95`;
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* 12px is half of the 24px gap */
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('nav.features')}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t('featuresPage.subtitle')}
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
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
      </div>

      <div className="w-full overflow-hidden py-8">
        <div className="flex gap-6 w-max px-4 animate-marquee items-center">
          {duplicatedFeatures.map((feature, index) => (
            <div 
              key={`${feature.id}-${index}`}
              className={getCardClasses(feature.id)}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {t(`features.${feature.titleKey}`)}
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {t(`features.${feature.descKey}`)}
              </p>
              
              <Link 
                to={`/features/${feature.id}`}
                className="inline-flex items-center text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform"
              >
                {t('features.learnMore')} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
