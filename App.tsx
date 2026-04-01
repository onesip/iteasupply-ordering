import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Store, Zap, Users, Building2, 
  TrendingUp, ShieldCheck, Coffee, Smartphone, BarChart3, 
  Menu, X, Globe
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const pricingPlans = [
    {
      id: 'basic',
      name: '【稳开张】基础版',
      target: '适合：新开店、单店起步、预算有限',
      desc: '满足日常收银与基础管理，帮你算清每一笔账，稳健迈出第一步。',
      icon: <Store className="w-8 h-8 text-blue-500" />,
      color: 'blue',
      features: [
        '智能 POS 收银系统',
        '基础配方与库存管理',
        '每日营业报表',
        '员工权限管理'
      ]
    },
    {
      id: 'omni',
      name: '【治混乱】全渠道版',
      target: '适合：单量大、高峰期容易乱的门店',
      desc: '打通线上线下，规范后厨动线，告别错单漏单，提升出杯效率。',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      color: 'orange',
      popular: true,
      features: [
        '包含【基础版】所有功能',
        '扫码/小程序在线点单',
        'KDS 智能厨显系统',
        '防水防糊贴标打印',
        '实时队列与取餐通知'
      ]
    },
    {
      id: 'auto',
      name: '【黑科技】自动出杯版',
      target: '适合：追求极致效率、面临招工难的门店',
      desc: '软硬件深度融合，机器代人，确保口味绝对统一，彻底解放双手。',
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      color: 'cyan',
      features: [
        '包含【全渠道版】所有功能',
        '智能奶茶机深度联动',
        '扫码自动按配方制作',
        '设备异常自动转人工',
        '机器耗材精准统计'
      ]
    },
    {
      id: 'growth',
      name: '【促回头】增长版',
      target: '适合：客流稳定，急需提升复购率的门店',
      desc: '建立私域流量池，精准营销触达，把“来一次”的客人变成“常来”的老客。',
      icon: <TrendingUp className="w-8 h-8 text-rose-500" />,
      color: 'rose',
      features: [
        '包含【全渠道版】所有功能',
        '高级会员系统 (积分/储值/礼品卡)',
        'WhatsApp/SMS 定向营销触达',
        '自动化复购营销活动',
        '客户画像与消费偏好分析'
      ]
    },
    {
      id: 'chain',
      name: '【管多店】连锁版',
      target: '适合：多店品牌、开放加盟的总部',
      desc: '千店一面，标准化管理，数据实时回传，让总部轻松掌控全局。',
      icon: <Building2 className="w-8 h-8 text-purple-500" />,
      color: 'purple',
      features: [
        '包含【增长版】所有功能',
        '总部全局数据看板',
        '多门店数据对比分析',
        '中央配方一键下发同步',
        '供应链与加盟商管理',
        '开放 API 对接'
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50">
      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                I'TEA SUPPLY
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://itea-supply-bv.odoo.com/" className={`text-sm font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                首页
              </a>
              <button onClick={() => scrollToSection('advantages')} className={`text-sm font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                关于我们
              </button>
              <button onClick={() => scrollToSection('solutions')} className={`text-sm font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                解决方案
              </button>
              <button onClick={() => scrollToSection('contact')} className={`px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg ${isScrolled ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white text-emerald-900 hover:bg-emerald-50'}`}>
                预约演示
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-slate-900' : 'text-white'}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col space-y-4"
            >
              <a href="https://itea-supply-bv.odoo.com/" className="text-slate-800 font-medium py-2 border-b border-slate-50">首页</a>
              <button onClick={() => scrollToSection('advantages')} className="text-left text-slate-800 font-medium py-2 border-b border-slate-50">关于我们</button>
              <button onClick={() => scrollToSection('solutions')} className="text-left text-slate-800 font-medium py-2 border-b border-slate-50">解决方案</button>
              <button onClick={() => scrollToSection('contact')} className="bg-emerald-600 text-white py-3 rounded-lg font-bold text-center">预约演示</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981806-ec527fa84c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-sm mb-6 border border-emerald-500/30"
            >
              <CheckCircle2 className="w-4 h-4" /> 专为奶茶行业打造的数字化引擎
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
            >
              奶茶店需要的不是收银机<br/>而是<span className="text-emerald-400">“赚钱操作系统”</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              从单店起步到千店连锁，I'TEA SUPPLY 提供全链路解决方案。打通 POS、在线点单、库存配方、会员营销与智能设备，帮你算清毛利、提升效率、锁定复购。
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button onClick={() => scrollToSection('solutions')} className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
                查看解决方案 <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                预约系统演示
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">低价冲击下，决定生死的三个关键</h2>
            <p className="text-lg text-slate-600">
              竞争越来越激烈，光靠降价只会越做越亏。你需要一套系统，帮你守住利润、抢回复购、提升效率。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">算不清的“隐形亏损”</h3>
              <p className="text-slate-600">加料多给、杯材浪费、库存对不上... 没有精准的配方扣减，你永远不知道每杯奶茶到底赚了多少钱。</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">高峰期的“混乱崩盘”</h3>
              <p className="text-slate-600">手写杯贴易错、前台后厨全靠吼、顾客围着催单... 效率低下直接导致客诉增加，流失潜在客户。</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">留不住的“一次性顾客”</h3>
              <p className="text-slate-600">没有会员体系，无法触达老客，只能靠不断打折吸引新客，陷入恶性循环，无法建立品牌忠诚度。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Pricing Tiers */}
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">五大版本，匹配你的每个发展阶段</h2>
            <p className="text-lg text-slate-600">
              无论你是刚起步的单店，还是准备扩张的连锁品牌，总有一款方案适合你。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border-2 relative flex flex-col h-full ${
                  plan.popular ? 'border-orange-500 shadow-xl shadow-orange-100 relative transform md:-translate-y-4' : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">
                    最受欢迎
                  </div>
                )}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-${plan.color}-50`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                </div>
                <div className="mb-6">
                  <p className={`text-sm font-medium px-3 py-1.5 rounded-lg inline-block mb-3 bg-${plan.color}-50 text-${plan.color}-700`}>
                    {plan.target}
                  </p>
                  <p className="text-slate-600 leading-relaxed">{plan.desc}</p>
                </div>
                
                <div className="flex-grow">
                  <div className="h-px w-full bg-slate-100 mb-6"></div>
                  <h4 className="font-bold text-slate-900 mb-4">核心功能：</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 text-${plan.color}-500`} />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button onClick={() => scrollToSection('contact')} className={`w-full py-3 rounded-xl font-bold transition-colors ${
                    plan.popular 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}>
                    了解详情
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">为什么选择 I'TEA SUPPLY？</h2>
              <p className="text-lg text-slate-600 mb-10">
                我们不仅仅是软件提供商，我们自己也开奶茶店。我们用真实的门店运营经验，打磨出这套真正懂奶茶的系统。
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">数据主权与支付透明</h4>
                    <p className="text-slate-600">支付账户在您自己名下（Stripe），我们不抽交易费。所有经营数据属于您，随时可导出，绝不绑架客户。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">All-in-One 全链路打通</h4>
                    <p className="text-slate-600">收银、点单、会员、库存、营销、设备联动，全部在一个系统内完成。告别数据孤岛，出了问题一条链路排查，不扯皮。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">源自真实门店的实战经验</h4>
                    <p className="text-slate-600">防水贴标、配方扣减、队列可见... 每一个功能都是为了解决真实门店的高峰痛点而生，好用、实用、管用。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="I'TEA SUPPLY System" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="font-bold text-slate-900">系统稳定运行中</span>
                </div>
                <p className="text-sm text-slate-500">"换了系统后，高峰期再也没有乱过，新员工半天就能上手。"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-emerald-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">准备好升级你的奶茶店了吗？</h2>
          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            留下您的联系方式，我们的专家将为您提供 30 分钟免费门店诊断，并演示系统如何帮您提升利润与效率。
          </p>
          
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl text-left">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">您的称呼</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900" placeholder="如：王先生" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">联系电话</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900" placeholder="您的手机号码" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">门店情况</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900 bg-white">
                  <option>准备开新店</option>
                  <option>单店运营中</option>
                  <option>2-5家门店</option>
                  <option>5家以上连锁</option>
                </select>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-emerald-200 mt-4">
                提交预约
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">提交即表示您同意我们的隐私政策，我们将尽快与您联系。</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tighter">I'TEA SUPPLY</span>
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} I'TEA SUPPLY. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

