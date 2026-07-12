import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, AlertTriangle, ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';
import { imageConstantinePorteur } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onCtaClick: (targetId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const { t, isRtl } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen bg-neutral-950 flex flex-col justify-center pt-24 overflow-hidden"
    >
      {/* Background Graphic Asset with Dark Opacity Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={imageConstantinePorteur}
          alt="Camion Frigorifique Carpôle à Constantine"
          animate={{
            scale: [1.25, 1.0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="w-full h-full object-cover object-center opacity-85 sm:opacity-75 md:opacity-55 filter saturate-[105%] brightness-[98%]"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and gradient overlay - responsive opacity to keep text absolutely readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/65 sm:via-neutral-950/50 md:via-neutral-950/35 to-neutral-950/10"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/60 md:to-neutral-950/45"></div>
        
        {/* Subtle decorative grid/dots or moving lights of industrial theme for extra creative touch on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 flex flex-col justify-center h-full">
        <div className="max-w-4xl">
          
          {/* Subtle Location & Brand Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
            <span className="text-zinc-300 text-xs font-semibold font-sans tracking-wider uppercase">{t('hero.location')}</span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-zinc-400 text-xs font-mono">{t('hero.badgeText')}</span>
          </motion.div>

          {/* Main Title Headings with custom display font */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.h1 
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
            >
              {t('hero.title1')} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-amber-500">{t('hero.title2')}</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-zinc-300 text-lg md:text-xl max-w-2xl font-sans font-light leading-relaxed pt-2"
            >
              {t('hero.desc')}
            </motion.p>

            {/* CTA action group */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6 pt-6"
            >
              <div className={`flex flex-wrap items-center gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <button
                  id="hero-cta-simulator"
                  onClick={() => onCtaClick('simulateur')}
                  className="group flex items-center gap-2 px-6 py-3.5 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal font-display font-extrabold text-sm uppercase tracking-wider rounded transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-yellow/30"
                >
                  <span>{t('hero.cta_simulateur')}</span>
                  {isRtl ? (
                    <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
                
                <button
                  id="hero-cta-contact"
                  onClick={() => onCtaClick('services')}
                  className="flex items-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 hover:border-white/20 font-display font-extrabold text-sm uppercase tracking-wider rounded transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('hero.cta_services')}
                </button>
              </div>

              {/* Prominent clickable card highlighting subsidiary status under Motorest */}
              <div className={`pt-2 ${isRtl ? 'flex justify-end' : 'flex justify-start'}`}>
                <button
                  id="hero-cta-motorest"
                  onClick={() => onCtaClick('groupe-motorest')}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-neutral-950/80 hover:bg-neutral-950 border border-brand-yellow/30 hover:border-brand-yellow/75 text-white rounded-2xl transition-all duration-300 transform hover:-translate-y-1 max-w-lg cursor-pointer group shadow-xl relative overflow-hidden text-left ${isRtl ? 'sm:flex-row-reverse text-right' : 'sm:flex-row text-left'}`}
                >
                  {/* Subtle corner badge color accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full filter blur-xl group-hover:bg-brand-yellow/10 transition-colors pointer-events-none"></div>
                  
                  {/* Distinct side accent indicator line */}
                  <div className={`absolute top-0 bottom-0 w-1 bg-brand-yellow ${isRtl ? 'right-0' : 'left-0'}`}></div>

                  <div className="p-2.5 bg-brand-yellow/15 text-brand-yellow rounded-xl shrink-0 group-hover:scale-110 transition-all duration-300 self-start sm:self-center">
                    <span className="font-display font-black text-xs px-1">M</span>
                  </div>

                  <div className="space-y-1 relative z-10">
                    <div className={`flex flex-wrap items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                      <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping shrink-0"></span>
                      <span className="font-display font-black text-[10px] uppercase tracking-widest text-brand-yellow">
                        {isRtl ? 'مجموعة موتوريست العالمية' : 'GROUPE MOTOREST'}
                      </span>
                      <span className="text-[8px] bg-brand-yellow/15 text-brand-yellow px-2 py-0.5 rounded font-mono font-black uppercase tracking-wider shrink-0">
                        {isRtl ? 'الفرع الرسمي' : 'FILIALE OFFICIELLE'}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-300 group-hover:text-white transition-colors leading-relaxed font-normal">
                      {isRtl 
                        ? 'كاربول هي فرع معتمد لمجموعة Motorest. اضغط هنا للمزيد.' 
                        : 'Carpôle Industriel est une filiale de Motorest. Cliquez pour en savoir plus.'}
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Corporate stats summary bar underlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-2 border-t border-white/10 pt-12 mt-16 lg:mt-24"
        >
          {[
            { value: t('stats.0.value'), label: t('stats.0.label'), desc: t('stats.0.desc') },
            { value: t('stats.1.value'), label: t('stats.1.label'), desc: t('stats.1.desc') },
            { value: t('stats.2.value'), label: t('stats.2.label'), desc: t('stats.2.desc') },
            { value: t('stats.3.value'), label: t('stats.3.value') === '24/7' ? '24/7' : t('stats.3.value'), labelVal: t('stats.3.label'), desc: t('stats.3.desc') },
          ].map((stat, idx) => (
            <div key={idx} className="relative group p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <span className="block font-display font-black text-3xl sm:text-4xl text-brand-yellow tracking-tight">
                {stat.value}
              </span>
              <span className="block font-display font-bold text-sm text-white mt-1">
                {stat.labelVal || stat.label}
              </span>
              <span className="block font-sans text-xs text-zinc-400 mt-1 font-medium">
                {stat.desc}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
      
      {/* Down section scroll prompt */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 cursor-pointer" onClick={() => onCtaClick('services')}>
        <span className="text-zinc-500 font-sans text-[10px] tracking-widest uppercase mb-1">{t('hero.explorer')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="text-brand-yellow"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </div>

    </section>
  );
}
