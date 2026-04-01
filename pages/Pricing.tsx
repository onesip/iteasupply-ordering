import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: t('pricing.title') }} />
          <p className="text-xl text-slate-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* ESSENTIAL */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('pricing.essential')}</h3>
            <p className="text-slate-500 text-sm mb-6">{t('pricing.essentialDesc')}</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">{t('pricing.essentialPrice')}</span>
              <span className="text-slate-500">/mo</span>
              <div className="text-sm text-emerald-600 font-medium mt-1">{t('pricing.essentialNote')}</div>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <FeatureItem text={t('pricing.features.pos')} />
              <FeatureItem text={t('pricing.features.online')} />
              <FeatureItem text={t('pricing.features.inventory')} />
              <FeatureItem text={t('pricing.features.reporting')} />
            </div>

            <Link to="/contact" className="w-full block text-center bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 rounded-xl transition-colors">
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* PRO */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-500 p-8 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('home.usTag')}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('pricing.pro')}</h3>
            <p className="text-slate-500 text-sm mb-6">{t('pricing.proDesc')}</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">{t('pricing.proPrice')}</span>
              <span className="text-slate-500">/mo</span>
              <div className="text-sm text-emerald-600 font-medium mt-1">{t('pricing.proNote')}</div>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <FeatureItem text={t('pricing.features.support')} />
              <FeatureItem text={t('pricing.features.machine')} highlight />
              <FeatureItem text={t('pricing.features.multi')} />
              <FeatureItem text={t('pricing.features.advInventory')} />
            </div>

            <Link to="/contact" className="w-full block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-emerald-200">
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* CHAIN */}
          <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-8 flex flex-col text-white">
            <h3 className="text-xl font-bold text-white mb-2">{t('pricing.chain')}</h3>
            <p className="text-slate-400 text-sm mb-6">{t('pricing.chainDesc')}</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{t('pricing.chainPrice')}</span>
              <div className="text-sm text-slate-400 font-medium mt-1">{t('pricing.chainNote')}</div>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <FeatureItem text={t('pricing.features.priority')} dark />
              <FeatureItem text={t('pricing.features.loyalty')} dark />
              <FeatureItem text={t('pricing.features.chainDash')} dark />
              <FeatureItem text={t('pricing.features.recipe')} dark />
            </div>

            <Link to="/contact" className="w-full block text-center bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-xl transition-colors">
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        {/* Add-ons & Hardware Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Add-ons */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              {t('pricing.addons')}
            </h3>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900">{t('pricing.inventoryPlus')}</h4>
                  <p className="text-sm text-slate-500">{t('pricing.inventoryPlusDesc')}</p>
                </div>
              </div>
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900">{t('pricing.smsPlatform')}</h4>
                  <p className="text-sm text-slate-500">{t('pricing.smsPlatformDesc')}</p>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900">{t('pricing.smsCredits')}</h4>
                  <p className="text-sm text-slate-500">{t('pricing.smsCreditsDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hardware */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              {t('pricing.hardware')}
            </h3>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <HardwareRow text={t('pricing.posTerm')} />
              <HardwareRow text={t('pricing.kdsScreen')} />
            </div>
          </div>
        </div>

        {/* Transparency Note */}
        <div className="max-w-3xl mx-auto bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6" /> {t('pricing.promise')}
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1 bg-emerald-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-emerald-900">{t('pricing.sovereignty')}</h4>
                <p className="text-emerald-800 text-sm">{t('pricing.sovereigntyDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-emerald-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-emerald-900">{t('pricing.transparency')}</h4>
                <p className="text-emerald-800 text-sm">{t('pricing.transparencyDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-emerald-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-emerald-900">{t('pricing.stability')}</h4>
                <p className="text-emerald-800 text-sm">{t('pricing.stabilityDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-emerald-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-emerald-900">{t('pricing.delivery')}</h4>
                <p className="text-emerald-800 text-sm">{t('pricing.deliveryDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 bg-emerald-300 rounded-full"></div>
              <div>
                <h4 className="font-bold text-emerald-900">{t('pricing.gdpr')}</h4>
                <p className="text-emerald-800 text-sm">{t('pricing.gdprDesc')}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const FeatureItem = ({ text, included = true, highlight = false, textSuffix = "", dark = false }: { text: string, included?: boolean, highlight?: boolean, textSuffix?: string, dark?: boolean }) => (
  <div className={`flex items-start gap-3 ${!included ? 'opacity-50' : ''}`}>
    {included ? (
      <Check className={`w-5 h-5 shrink-0 ${highlight ? 'text-emerald-500' : (dark ? 'text-emerald-400' : 'text-slate-900')}`} />
    ) : (
      <X className="w-5 h-5 shrink-0 text-slate-400" />
    )}
    <span className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'} ${highlight ? 'font-bold text-slate-900' : ''}`}>
      {text} <span className="text-emerald-600 font-normal">{textSuffix}</span>
    </span>
  </div>
);

const HardwareRow = ({ text }: { text: string }) => (
  <div className="p-4 border-b border-slate-100 last:border-0 flex justify-between items-center hover:bg-slate-50 transition-colors">
    <span className="text-slate-700 font-medium">{text}</span>
  </div>
);

export default Pricing;
