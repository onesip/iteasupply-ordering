import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const BlogDetail = () => {
  const { t } = useLanguage();
  const { articleId } = useParams();
  
  // This is a simplified way to get article data. 
  // In a real app, you might fetch this from an API or a more structured data source.
  const articleKey = `article${articleId}`;
  const titleKey = `resources.${articleKey}Title`;
  // const descKey = `resources.${articleKey}Desc`; // Unused
  const bodyKey = `resources.${articleKey}Body`;
  const ctaKey = `resources.${articleKey}Cta`;
  const catKey = `resources.cat${getErrorCategory(articleId)}`;

  // Helper to map ID to category key suffix (based on Resources.tsx order)
  function getErrorCategory(id: string | undefined) {
    switch(id) {
      case '1': return 'Cost';
      case '2': return 'Behavior';
      case '3': return 'Operations';
      case '4': return 'Hardware';
      case '5': return 'Strategy';
      case '6': return 'Inventory';
      default: return 'Cost';
    }
  }

  // Check if translation exists (simplified check)
  const title = t(titleKey);
  // const desc = t(descKey); // Unused
  const body = t(bodyKey);
  const cta = t(ctaKey);
  const category = t(catKey);

  if (title === titleKey) {
    // Translation key returned as is, meaning not found
    return <Navigate to="/resources" replace />;
  }

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/resources" className="inline-flex items-center text-slate-500 hover:text-emerald-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> {t('nav.resources')}
        </Link>
        
        <div className="mb-6">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
          {title}
        </h1>
        
        <div className="flex items-center gap-6 text-slate-500 text-sm mb-12 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>I'TEA SUPPLY Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>
        
        <div className="prose prose-lg prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: body }} />
        
        <div className="mt-16 pt-8 border-t border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('home.ctaTitle')}</h3>
          <div className="bg-emerald-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-emerald-900 text-lg mb-2">{t('home.ctaStrategy')}</h4>
              <p className="text-emerald-700 font-medium">{cta !== ctaKey ? cta : t('home.ctaDesc')}</p>
            </div>
            <Link to="/strategy-session" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold transition-colors whitespace-nowrap shadow-lg hover:shadow-emerald-500/30">
              {t('nav.bookDemo')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
