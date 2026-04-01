import React, { useState } from 'react';
import { CheckCircle, Clock, FileText, TrendingUp, Users, Zap } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

const StrategySession = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopName: '',
    storeType: '',
    currentPos: '',
    painPoint: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Strategy Session Request:', formData);
    alert("Booking request sent! (This is a demo)");
  };

  return (
    <div className="bg-white min-h-screen py-20">
      {/* Hero */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-6">
            <Clock className="w-4 h-4" /> {t('strategy.tag')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: t('strategy.title') }} />
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            {t('strategy.subtitle')}
          </p>
        </div>
      </div>

      {/* What You Get */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('strategy.deliverablesTitle')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t('strategy.audit')}</h3>
                <ul className="space-y-3">
                  {t('strategy.auditList').map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t('strategy.margin')}</h3>
                <ul className="space-y-3">
                  {t('strategy.marginList').map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t('strategy.retention')}</h3>
                <ul className="space-y-3">
                  {t('strategy.retentionList').map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t('strategy.efficiency')}</h3>
                <ul className="space-y-3">
                  {t('strategy.efficiencyList').map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation & Form */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left: Prep List */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('strategy.prepTitle')}</h3>
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <ul className="space-y-6">
                {t('strategy.prepList').map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-emerald-900 font-medium text-lg">
                    <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-800 font-bold shrink-0">{i + 1}</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('strategy.formTitle')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('strategy.formName')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('strategy.formShop')}</label>
                  <input 
                    type="text" 
                    name="shopName"
                    value={formData.shopName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('strategy.formEmail')}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t('strategy.formLoc')}</label>
                    <select 
                      name="storeType"
                      value={formData.storeType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="single">Single Store</option>
                      <option value="multi">Multi-Store</option>
                      <option value="chain">Chain/Franchise</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t('strategy.formPos')}</label>
                    <input 
                      type="text" 
                      name="currentPos"
                      value={formData.currentPos}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('strategy.formPain')}</label>
                  <select 
                    name="painPoint"
                    value={formData.painPoint}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    required
                  >
                    <option value="">Select...</option>
                    {t('strategy.formPainOptions').map((option: string, i: number) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 mt-4">
                  {t('strategy.submit')}
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">
                  {t('strategy.noCard')}
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StrategySession;
