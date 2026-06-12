import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './src/contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyITeaSupply from './pages/WhyITeaSupply';
import Features from './pages/Features';
import FeatureDetail from './pages/FeatureDetail';
import StrategySession from './pages/StrategySession';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import RedirectToCoupon from './src/components/RedirectToCoupon';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans text-slate-900">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/why-orderpin" element={<WhyITeaSupply />} />
              <Route path="/features" element={<Features />} />
              <Route path="/features/:featureId" element={<FeatureDetail />} />
              <Route path="/strategy-session" element={<StrategySession />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:articleId" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/onesip-offer" element={<RedirectToCoupon />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
