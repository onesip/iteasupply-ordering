import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Store, 
  Target, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp,
  Award,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const WhyITeaSupply = () => {
  const { t } = useLanguage();

  // Helper to safely cast translation arrays
  const getList = (key: string) => {
    const result = t(key);
    return Array.isArray(result) ? result : [];
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            {t('why.heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {/* Render HTML for line breaks if needed, or just text */}
            <span dangerouslySetInnerHTML={{ __html: t('why.heroSubtitle') as string }} />
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>{t('why.foundersTitle')}</span>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t('why.foundersDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Partner 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('why.partner1Title')}</h3>
              <div className="space-y-4 text-slate-600">
                <p className="font-medium text-slate-800">{t('why.partner1Edu')}</p>
                <p>{t('why.partner1Exp')}</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-emerald-700">{t('why.partner1Focus')}</p>
                </div>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('why.partner2Title')}</h3>
              <div className="space-y-4 text-slate-600">
                <p className="font-medium text-slate-800">{t('why.partner2Edu')}</p>
                <p>{t('why.partner2Exp')}</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-blue-700">{t('why.partner2Focus')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800/20 transform skew-x-12"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Store className="w-8 h-8 text-emerald-400" />
              {t('why.originTitle')}
            </h2>
            <div className="space-y-6 text-lg text-emerald-50 leading-relaxed">
              <p className="whitespace-pre-line">{t('why.originP1')}</p>
              <p>{t('why.originP2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            {t('why.principlesTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {getList('why.principles').map((item: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-colors group">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            {t('why.resultsTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {getList('why.results').map((item: any, index: number) => (
              <div key={index} className="flex flex-col items-start p-6 rounded-xl bg-slate-50 border border-slate-100 h-full hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 bg-white rounded-lg shadow-sm text-emerald-600">
                  {index === 0 && <TrendingUp className="w-6 h-6" />}
                  {index === 1 && <Users className="w-6 h-6" />}
                  {index === 2 && <CheckCircle2 className="w-6 h-6" />}
                  {index === 3 && <ShieldCheck className="w-6 h-6" />}
                  {index === 4 && <Award className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('why.ctaTitle')}
          </h2>
          <p className="text-xl text-slate-300 mb-10 whitespace-pre-line leading-relaxed">
            {t('why.ctaDesc')}
          </p>
          <Link 
            to="/strategy-session" 
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-full hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1"
          >
            {t('why.ctaBtn')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyITeaSupply;
