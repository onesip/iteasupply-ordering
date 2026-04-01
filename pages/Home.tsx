import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import FeatureSlider from '../src/components/FeatureSlider';
import ShopTypeSelector from '../src/components/ShopTypeSelector';
import { useLanguage } from '../src/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-sm mb-6 border border-emerald-500/30"
            >
              <CheckCircle2 className="w-4 h-4" /> 奶茶专用 · 高峰稳定
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
              dangerouslySetInnerHTML={{ __html: t('home.heroTitle') }}
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto font-light"
              dangerouslySetInnerHTML={{ __html: t('home.heroSubtitle') }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/strategy-session" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
                {t('home.ctaStrategy')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                {t('home.ctaDemo')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Type Selector (New Section) */}
      <ShopTypeSelector />

      {/* Pain Points Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">低价冲击下，奶茶店的竞争模式变了</h2>
            <p className="text-lg text-slate-600">
              门店面临结构性压力，5-7€的主流定价受到挑战。真正决定你能不能活下来的是：复购、利润、效率。
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-red-500" />,
                title: "价格稳定被破坏",
                desc: "库迪等国内价格战大牌冲击，主流定价受到挑战。"
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "高峰体验决定口碑",
                desc: "排队、混单、返工会增加差评，直接影响复购。"
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: "成本不可见",
                desc: "加料、杯材、损耗会隐形增加非常多的成本。"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
                title: "系统碎片化",
                desc: "会员、点单、支付、库存分散在不同系统，数据不通。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="mb-4 bg-slate-50 w-14 h-14 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-emerald-50 border border-emerald-100 rounded-2xl p-8 max-w-4xl">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">最终目的：帮奶茶店在价格战里活下来、赚到钱</h3>
              <p className="text-lg text-emerald-800">先用30分钟诊断找到问题，再用我们的系统把复购、毛利和效率做起来，最后把这套方法复制到多店和加盟。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Persona / About Us Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-3xl transform -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="OneSip Store Operations" 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-video"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-serif italic text-slate-800">"I'TEA SUPPLY 的小程序差异不是在线点单，而是队列可见+完成通知+预约取餐。"</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-6">
                <CheckCircle2 className="w-4 h-4" /> {t('home.personaTag')}
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('home.personaTitle')}</h2>
              <p className="text-lg text-slate-600 mb-6" dangerouslySetInnerHTML={{ __html: t('home.personaDesc1') }} />
              <p className="text-lg text-slate-600 mb-8" dangerouslySetInnerHTML={{ __html: t('home.personaDesc2') }} />
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="font-bold text-slate-900 text-lg">{t('home.personaExp')}</div>
                  <div className="text-slate-500">{t('home.personaExpDesc')}</div>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <div className="font-bold text-slate-900 text-lg">{t('home.personaLoop')}</div>
                  <div className="text-slate-500">{t('home.personaLoopDesc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Outcomes Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">I'TEA SUPPLY 应对框架</h2>
            <p className="text-slate-400 text-lg">四大核心支柱，全面提升门店竞争力</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="h-1 w-16 bg-emerald-500 mb-6 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-xl font-bold mb-3">① 复购</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                会员积分 / 储值 / 礼品卡 + 定向触达
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-16 bg-blue-500 mb-6 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-xl font-bold mb-3">② 利润</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cookbook 配方自动扣减（含add-on）+ 损耗记录（手动添加）
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-16 bg-purple-500 mb-6 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-xl font-bold mb-3">③ 效率</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                小程序在线点单队列可见 + 完成通知 + 防水贴标
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-16 bg-orange-500 mb-6 group-hover:w-full transition-all duration-500"></div>
              <h3 className="text-xl font-bold mb-3">④ 稳定</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                奶茶机联动（异常兜底 + 日志可诊断）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Slider Section */}
      <FeatureSlider />

      {/* Comparison Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-slate-50 border-r border-slate-100">
                <h3 className="text-2xl font-bold text-slate-400 mb-8">{t('home.compTitle')}</h3>
                <ul className="space-y-6">
                  {t('home.compList').map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 opacity-60">
                      <span className="text-red-500 font-bold">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{t('home.usTag')}</div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-8">{t('home.usTitle')}</h3>
                <ul className="space-y-6">
                  {t('home.usList').map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="font-medium text-slate-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">{t('home.ctaTitle')}</h2>
          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            {t('home.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/strategy-session" className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
              {t('home.ctaStrategy')} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              {t('home.ctaDemo')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
