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
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import QuoteSimulator from './components/QuoteSimulator';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ShieldCheck } from 'lucide-react';

export default function App() {
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
    <div className="relative overflow-x-hidden min-h-screen font-sans selection:bg-brand-yellow selection:text-brand-charcoal">
      
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
              
              {/* Spinning technical emblem */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                className="relative flex items-center justify-center w-16 h-16 rounded border border-brand-yellow/40 bg-neutral-900"
              >
                <span className="font-display font-extrabold text-brand-yellow text-2xl">C</span>
                <div className="absolute top-0 right-0 w-3 h-3 bg-brand-yellow rounded-tr"></div>
              </motion.div>

              <div className="space-y-1">
                <h3 className="font-display font-black text-xl tracking-widest text-white">CARPÔLE INDUSTRIEL</h3>
                <p className="font-sans text-[10px] text-brand-yellow font-bold uppercase tracking-[0.3em]">Constantine, Algérie</p>
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

