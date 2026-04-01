import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Store, 
  Building2, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight,
  Coffee,
  Sprout,
  Utensils
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopTypeSelector = () => {
  const { t } = useLanguage();
  const [activeType, setActiveType] = useState('chain');

  const types = [
    { id: 'chain', icon: Building2, color: 'purple' },
    { id: 'local', icon: Store, color: 'blue' },
    { id: 'old', icon: Coffee, color: 'orange' },
    { id: 'new', icon: Sprout, color: 'emerald' },
    { id: 'hybrid', icon: Utensils, color: 'rose' },
    { id: 'automation', icon: Zap, color: 'cyan' }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors: Record<string, string> = {
      emerald: isActive ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100',
      blue: isActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      purple: isActive ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      orange: isActive ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600 hover:bg-orange-100',
      cyan: isActive ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100',
      rose: isActive ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-600 hover:bg-rose-100',
    };
    return colors[color];
  };

  const getBorderColor = (color: string) => {
    const colors: Record<string, string> = {
      emerald: 'border-emerald-200',
      blue: 'border-blue-200',
      purple: 'border-purple-200',
      orange: 'border-orange-200',
      cyan: 'border-cyan-200',
      rose: 'border-rose-200',
    };
    return colors[color];
  };

  const getBgColor = (color: string) => {
     const colors: Record<string, string> = {
      emerald: 'bg-emerald-900',
      blue: 'bg-blue-900',
      purple: 'bg-purple-900',
      orange: 'bg-orange-900',
      cyan: 'bg-cyan-900',
      rose: 'bg-rose-900',
    };
    return colors[color];
  };

  const getSubFeatureIconColor = (color: string) => {
    const colors: Record<string, string> = {
      emerald: 'bg-emerald-50 text-emerald-600',
      blue: 'bg-blue-50 text-blue-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600',
      cyan: 'bg-cyan-50 text-cyan-600',
      rose: 'bg-rose-50 text-rose-600',
    };
    return colors[color];
  };

  const activeColor = types.find(t => t.id === activeType)?.color || 'emerald';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('shopTypes.title')}
          </h2>
          <p className="text-lg text-slate-600">
            {t('shopTypes.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map((type) => {
            const Icon = type.icon;
            const isActive = activeType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${getColorClasses(type.color, isActive)}`}
              >
                <Icon className="w-5 h-5" />
                {t(`shopTypes.types.${type.id}.label`)}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8"
            >
              {/* Left: Pain Points */}
              <div className="lg:col-span-4 space-y-6">
                <div className={`p-8 rounded-3xl bg-slate-50 border ${getBorderColor(activeColor)} h-full`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                    {t(`shopTypes.types.${activeType}.painTitle`)}
                  </h3>
                  <div className="space-y-6">
                    {(t(`shopTypes.types.${activeType}.pains`) as string[]).map((pain, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 text-sm font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-slate-700 leading-relaxed">{pain}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <p className="font-medium text-slate-900 italic">
                      {t(`shopTypes.types.${activeType}.needs`)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Solution */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  {/* Hero Feature (Large) */}
                  <div className={`md:col-span-2 p-8 rounded-3xl text-white relative overflow-hidden group cursor-pointer ${getBgColor(activeColor)}`}
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Zap className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4 backdrop-blur-sm">
                        Core Solution
                      </div>
                      <h3 className="text-3xl font-bold mb-4">
                        {t(`shopTypes.types.${activeType}.heroFeature.title`)}
                      </h3>
                      <p className="text-white/80 text-lg mb-8 max-w-lg">
                        {t(`shopTypes.types.${activeType}.heroFeature.desc`)}
                      </p>
                      <Link 
                        to={`/features/${t(`shopTypes.types.${activeType}.heroFeature.key`)}`}
                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Sub Features (Smaller) */}
                  {(t(`shopTypes.types.${activeType}.subFeatures`) as any[]).map((feature: any, idx: number) => (
                    <Link 
                      key={idx}
                      to={`/features/${feature.key}`}
                      className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl ${getSubFeatureIconColor(activeColor)}`}>
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 text-sm">{feature.desc}</p>
                    </Link>
                  ))}
                </div>
                
                {/* Additional Features */}
                {((t(`shopTypes.types.${activeType}.additionalFeatures`) as any[])?.length > 0) && (
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-slate-500 text-sm font-medium">
                        {t('shopTypes.more') || 'Plus:'}
                      </span>
                      {(t(`shopTypes.types.${activeType}.additionalFeatures`) as any[]).map((feature: any, idx: number) => (
                        <Link
                          key={idx}
                          to={`/features/${feature.key}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-100 hover:border-slate-300 transition-all"
                        >
                          {feature.title}
                          <ArrowRight className="w-3 h-3 opacity-50" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ShopTypeSelector;
