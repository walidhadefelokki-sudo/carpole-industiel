/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { useLanguage } from './context/LanguageContext';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import QuoteSimulator from './components/QuoteSimulator';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ShieldCheck, Truck } from 'lucide-react';

export default function App() {
  const { lang, isRtl, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('accueil');
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Simulate a pristine loading delay for smooth entrance sequence
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1200);

    // Synchronize scroll navigation active keys
    const handleScrollSync = () => {
      const sections = ['accueil', 'services', 'simulateur', 'galerie', 'propos', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSync);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollSync);
    };
  }, []);

  const handleCtaClick = (targetId: string) => {
    setActiveTab(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className={`relative overflow-x-hidden min-h-screen font-sans selection:bg-brand-yellow selection:text-brand-charcoal ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Subtle, high-end page entry loading animation screen */}
      <AnimatePresence>
        {isPageLoading && (
          <motion.div
            id="page-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-neutral-950 z-[999] flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col items-center space-y-4 max-w-sm px-6 text-center">
              
              {/* Sliding cargo truck preloader */}
              <div className="relative w-64 h-24 flex flex-col justify-end items-center overflow-hidden mb-6 bg-neutral-900/60 rounded-xl border border-white/5 p-4 shadow-2xl">
                {/* Dotted atmospheric grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Horizontal road track */}
                <div className="absolute bottom-4 left-4 right-4 h-[2px] bg-white/10 overflow-hidden rounded">
                  <motion.div
                    animate={{ x: [-80, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                    className="w-[200%] h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,#fbbf24_8px,#fbbf24_16px)] opacity-30"
                  />
                </div>

                {/* Animated Truck & load group */}
                <motion.div
                  animate={{ 
                    x: [-110, 110]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.8, 
                    ease: 'easeInOut',
                    repeatType: 'loop'
                  }}
                  className="flex items-end gap-1.5 pb-1 relative z-10"
                >
                  {/* Container Load with letter C */}
                  <motion.div
                    animate={{ 
                      y: [0, -1.2, 0],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={{ 
                      duration: 0.4, 
                      repeat: Infinity, 
                      ease: 'easeInOut' 
                    }}
                    className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-brand-yellow/50 bg-neutral-950 text-brand-yellow shadow-lg shadow-brand-yellow/5"
                  >
                    <span className="font-display font-black text-sm">{isRtl ? 'ك' : 'C'}</span>
                    <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-brand-yellow rounded-sm"></div>
                  </motion.div>

                  {/* Truck Head */}
                  <motion.div
                    animate={{ 
                      y: [0, -1.8, 0],
                    }}
                    transition={{ 
                      duration: 0.35, 
                      repeat: Infinity, 
                      ease: 'easeInOut' 
                    }}
                    className="text-brand-yellow flex items-center"
                  >
                    <Truck className="h-8 w-8 filter drop-shadow-[0_2px_8px_rgba(251,191,36,0.3)]" />
                  </motion.div>
                </motion.div>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-black text-xl tracking-widest text-white">{t('preloader.title')}</h3>
                <p className="font-sans text-[10px] text-brand-yellow font-bold uppercase tracking-[0.3em]">{t('preloader.location')}</p>
              </div>

              {/* Progress wireline indicator */}
              <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden mt-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="h-full bg-brand-yellow"
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Real application frame */}
      {!isPageLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main sticky navigation header */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Core scrollable content blocks */}
          <main>
            <Hero onCtaClick={handleCtaClick} />
            <ServicesSection onQuoteClick={() => handleCtaClick('simulateur')} />
            <QuoteSimulator />
            <GallerySection />
            <AboutSection />
            <ContactSection />
          </main>

          {/* Clean corporate footer */}
          <Footer />
        </motion.div>
      )}

    </div>
  );
}

