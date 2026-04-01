import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Droplets, ShieldAlert, BarChart, Users } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Resources = () => {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      category: t('resources.catCost'),
      title: t('resources.article1Title'),
      desc: t('resources.article1Desc'),
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    },
    {
      id: 2,
      category: t('resources.catBehavior'),
      title: t('resources.article2Title'),
      desc: t('resources.article2Desc'),
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      id: 3,
      category: t('resources.catOperations'),
      title: t('resources.article3Title'),
      desc: t('resources.article3Desc'),
      icon: <Zap className="w-6 h-6 text-yellow-600" />
    },
    {
      id: 4,
      category: t('resources.catHardware'),
      title: t('resources.article4Title'),
      desc: t('resources.article4Desc'),
      icon: <Droplets className="w-6 h-6 text-cyan-600" />
    },
    {
      id: 5,
      category: t('resources.catStrategy'),
      title: t('resources.article5Title'),
      desc: t('resources.article5Desc'),
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />
    },
    {
      id: 6,
      category: t('resources.catInventory'),
      title: t('resources.article6Title'),
      desc: t('resources.article6Desc'),
      icon: <BarChart className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: t('resources.title') }} />
          <p className="text-xl text-slate-600">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {articles.map((article) => (
            <Link key={article.id} to={`/resources/${article.id}`} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group cursor-pointer flex flex-col">
              <div className="h-48 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {article.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-sm">
                  {article.icon}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {article.desc}
                </p>
                <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                  {t('resources.readBtn')} <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-4xl mx-auto bg-emerald-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">{t('resources.newsletterTitle')}</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">{t('resources.newsletterDesc')}</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t('resources.emailPlaceholder')} 
                className="flex-grow px-6 py-4 rounded-full text-slate-900 outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-emerald-500/30">
                {t('resources.subscribeBtn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
