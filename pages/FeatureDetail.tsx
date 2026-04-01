import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, PlayCircle, HelpCircle, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const FeatureDetail = () => {
  const { featureId } = useParams();
  const { t } = useLanguage();
  
  // Fetch feature data from translations
  const data = t(`featureDetails.${featureId}`);

  // Check if data exists (if t returns the key, it means not found)
  if (!data || typeof data === 'string' || !data.title) {
    return <Navigate to="/features" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Result & How */}
          <div className="grid md:grid-cols-2 gap-16 mb-20 items-start">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-4 py-2 rounded-full mb-6">
                {t('featureDetail.result')}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{data.result}</h2>
              <ul className="space-y-6">
                {data.how && data.how.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-2 rounded-full shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="text-lg text-slate-700 pt-1">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Scenario */}
            <div className="bg-emerald-50 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden h-full flex flex-col justify-center">
              <div className="relative z-10">
                <div className="font-bold text-emerald-700 uppercase tracking-wider text-sm mb-4">{data.scenario.role}</div>
                <p className="text-xl md:text-2xl font-serif italic text-emerald-900 leading-relaxed">"{data.scenario.quote}"</p>
              </div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>

          {/* Media Slots */}
          {data.mediaSlots && data.mediaSlots.length > 0 && (
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t('featureDetail.seeAction')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.mediaSlots.map((media: any, i: number) => (
                  <div key={i} className="bg-slate-100 rounded-2xl aspect-video flex flex-col items-center justify-center relative overflow-hidden shadow-sm border border-slate-200 group cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                    {media.type === 'video' ? (
                      <PlayCircle className="w-12 h-12 text-slate-400 group-hover:text-emerald-600 transition-colors mb-3 z-10" />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-slate-400 group-hover:text-emerald-600 transition-colors mb-3 z-10" />
                    )}
                    <p className="text-slate-600 font-medium text-center px-4 z-10 text-sm">{media.content}</p>
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-slate-500 uppercase">
                      {media.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t('featureDetail.faq')}</h3>
            <div className="space-y-6">
              {data.faq && data.faq.map((item: any, i: number) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" /> {item.q}
                  </h4>
                  <p className="text-slate-600 ml-7">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-slate-50 rounded-3xl p-12 border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t('featureDetail.unifiedTitle')}
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
               {t('featureDetail.unifiedSubtitle')}
            </p>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="font-bold text-emerald-700 mb-6 text-lg">
                {data.cta}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
                  {t('featureDetail.bookDemo')} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/strategy-session" className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all">
                  {t('featureDetail.freeStrategy')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
