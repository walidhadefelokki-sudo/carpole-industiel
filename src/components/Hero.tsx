import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, AlertTriangle, ArrowRight, ArrowDown } from 'lucide-react';
import { imageConstantinePorteur } from '../data';

interface HeroProps {
  onCtaClick: (targetId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
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
      <div className="absolute inset-0 z-0">
        <img
          src={imageConstantinePorteur}
          alt="Camion Frigorifique Carpôle à Constantine"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 filter saturate-75 brightness-75 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/90 duration-300"></div>
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
            <span className="text-zinc-300 text-xs font-semibold font-sans tracking-wider uppercase">Constantine, Algérie</span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-zinc-400 text-xs font-mono">Expertise carrosserie & frigorifique</span>
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
              L’EXCELLENCE INDUSTRIELLE <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-amber-500">Pour votre Flotte Frigorifique</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-zinc-300 text-lg md:text-xl max-w-2xl font-sans font-light leading-relaxed pt-2"
            >
              Carpôle Industriel conçoit, fabrique et installe des carrosseries isothermes et des groupes frigorifiques hautes performances à Constantine. Sécurisez la chaîne du froid de vos transports routiers en Algérie.
            </motion.p>

            {/* CTA action group */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-6"
            >
              <button
                id="hero-cta-simulator"
                onClick={() => onCtaClick('simulateur')}
                className="group flex items-center gap-2 px-6 py-3.5 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal font-display font-extrabold text-sm uppercase tracking-wider rounded transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-yellow/30"
              >
                <span>Demander un devis</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-cta-contact"
                onClick={() => onCtaClick('services')}
                className="flex items-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 hover:border-white/20 font-display font-extrabold text-sm uppercase tracking-wider rounded transition-all duration-300 transform hover:-translate-y-1"
              >
                Découvrir nos services
              </button>
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
            { value: '15+', label: 'Années d’Expérience', desc: 'Savoir-faire artisanal' },
            { value: '500+', label: 'Camions Transformés', desc: 'À travers l’Algérie entière' },
            { value: '100%', label: 'Normes ATP Respectées', desc: 'Garantie de chaîne de froid' },
            { value: '24/7', label: 'Support Technique', desc: 'Assistance & maintenance à Constantine' },
          ].map((stat, idx) => (
            <div key={idx} className="relative group p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <span className="block font-display font-black text-3xl sm:text-4xl text-brand-yellow tracking-tight">
                {stat.value}
              </span>
              <span className="block font-display font-bold text-sm text-white mt-1">
                {stat.label}
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
        <span className="text-zinc-500 font-sans text-[10px] tracking-widest uppercase mb-1">Explorer</span>
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
