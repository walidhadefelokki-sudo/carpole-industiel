import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone, Compass, MessageSquare, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/images/logo.png';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: t('navbar.accueil'), icon: Compass },
    { id: 'services', label: t('navbar.services'), icon: Truck },
    { id: 'simulateur', label: t('navbar.simulateur'), icon: MessageSquare },
    { id: 'galerie', label: t('navbar.galerie'), icon: Compass },
    { id: 'propos', label: t('navbar.propos'), icon: Info },
    { id: 'contact', label: t('navbar.contact'), icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
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
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg py-3 border-b border-white/5' 
          : 'bg-neutral-950/80 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo Brand Segment */}
          <div 
            onClick={() => handleNavClick('accueil')} 
            className={`flex items-center gap-2 cursor-pointer group ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 sm:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-md font-sans text-sm font-medium transition-colors duration-200 overflow-hidden group ${
                    isActive 
                      ? 'text-brand-yellow font-semibold' 
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-yellow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover Highlight Underlay */}
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-200" />
                </button>
              );
            })}
          </div>

          {/* Desktop CTA Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-white/10 rounded p-1 bg-neutral-900/60" dir="ltr">
              <button
                onClick={() => setLang('fr')}
                className={`px-2 py-1 text-[11px] font-black rounded transition-all duration-200 ${lang === 'fr' ? 'bg-brand-yellow text-brand-charcoal font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-2 py-1 text-[11px] font-black rounded transition-all duration-200 ${lang === 'ar' ? 'bg-brand-yellow text-brand-charcoal font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                عربي
              </button>
            </div>

            <button
              id="cta-nav-simulator"
              onClick={() => handleNavClick('simulateur')}
              className="px-4 py-2 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-charcoal font-display font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-yellow/20"
            >
              {t('navbar.cta')}
            </button>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-1 border border-white/10 rounded p-0.5 bg-neutral-900/60" dir="ltr">
              <button
                onClick={() => setLang('fr')}
                className={`px-1.5 py-0.5 text-[10px] font-black rounded transition-all duration-200 ${lang === 'fr' ? 'bg-brand-yellow text-brand-charcoal' : 'text-zinc-400 hover:text-white'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-1.5 py-0.5 text-[10px] font-black rounded transition-all duration-200 ${lang === 'ar' ? 'bg-brand-yellow text-brand-charcoal' : 'text-zinc-400 hover:text-white'}`}
              >
                عربي
              </button>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-neutral-950 border-t border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-md ${isRtl ? 'text-right' : 'text-left'} text-base font-semibold transition-colors ${
                      isActive 
                        ? 'bg-neutral-900 text-brand-yellow border-l-4 border-brand-yellow' 
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-brand-yellow' : 'text-zinc-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-3 px-4">
                <button
                  id="mobile-cta-devise"
                  onClick={() => handleNavClick('simulateur')}
                  className="w-full py-3 bg-brand-yellow hover:bg-amber-500 text-brand-charcoal text-center font-display font-bold text-sm rounded shadow-md"
                >
                  {t('navbar.cta')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
