import React from 'react';
import { Mail, Phone, MapPin, ShieldAlert, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* 1. Brand panel info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScrollTo('accueil')}>
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-neutral-900 border border-brand-yellow/50">
                <span className="font-display font-extrabold text-brand-yellow text-md">C</span>
                <div className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow rounded-tr"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-md tracking-wider leading-none">CARPÔLE</span>
                <span className="font-sans text-[8px] text-zinc-400 tracking-[0.25em] font-semibold uppercase">INDUSTRIEL</span>
              </div>
            </div>

            <p className="font-sans text-zinc-400 text-xs leading-relaxed max-w-sm">
              Conception, assemblage et homologation de carrosseries industrielles isothermes et groupes frigorifiques routiers à Constantine, Algérie. Votre partenaire logistique chaîne du froid depuis 2011.
            </p>
            
            {/* Accreditation Badges */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-zinc-300">
                <Award className="h-3 w-3 text-brand-yellow" />
                <span>MINES CONFORME</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-zinc-300">
                <ShieldAlert className="h-3 w-3 text-brand-yellow" />
                <span>AGREMENT ATP</span>
              </div>
            </div>
          </div>

          {/* 2. Quick Links columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-yellow">Navigation</h4>
            <ul className="space-y-2.5 font-sans text-xs text-zinc-400">
              <li>
                <button onClick={() => handleScrollTo('accueil')} className="hover:text-white transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">
                  Nos services
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('simulateur')} className="hover:text-white transition-colors">
                  Demander un devis
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('galerie')} className="hover:text-white transition-colors">
                  Galerie Photo
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('propos')} className="hover:text-white transition-colors">
                  À propos de nous
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Constantine physical quick coordinates list */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-yellow">Bureau d'études</h4>
            <ul className="space-y-2.5 font-sans text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>Zone Industrielle Palma, RN 5, Constantine, Algérie</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-yellow shrink-0" />
                <span>+213 (0) 550 88 14 22</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-yellow shrink-0" />
                <span>contact@carpole-industriel.dz</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Underline Copyright block */}
      <div className="border-t border-white/5 bg-neutral-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-zinc-500">
          <p>© {currentYear} Carpôle Industriel. Tous droits réservés. Équipement mécanique frigorifique en Algérie.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-300">Mentions Légales</span>
            <span>•</span>
            <span className="hover:text-zinc-300">Conditions Générales</span>
            <span>•</span>
            <span className="hover:text-zinc-300">Constantine</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
