import React from 'react';
import { Mail, Phone, MapPin, ShieldAlert, Award, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isRtl } = useLanguage();
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
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* 1. Brand panel info */}
          <div className="md:col-span-5 space-y-4">
            <div className={`flex items-center gap-2 cursor-pointer ${isRtl ? 'flex-row-reverse' : 'flex-row'}`} onClick={() => handleScrollTo('accueil')}>
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-neutral-900 border border-brand-yellow/50">
                <span className="font-display font-extrabold text-brand-yellow text-md">{isRtl ? 'ك' : 'C'}</span>
                <div className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow rounded-tr"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-white text-md tracking-wider leading-none">{isRtl ? 'كاربول' : 'CARPÔLE'}</span>
                <span className="font-sans text-[8px] text-zinc-400 tracking-[0.25em] font-semibold uppercase">{isRtl ? 'الصناعية' : 'INDUSTRIEL'}</span>
              </div>
            </div>

            <p className="font-sans text-zinc-400 text-xs leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
            
            {/* Accreditation Badges */}
            <div className={`flex items-center gap-3 pt-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-zinc-300 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <Award className="h-3 w-3 text-brand-yellow" />
                <span>{isRtl ? 'مطابق للمناجم' : 'MINES CONFORME'}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-zinc-300 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <ShieldAlert className="h-3 w-3 text-brand-yellow" />
                <span>{isRtl ? 'اعتماد ATP للبرودة' : 'AGREMENT ATP'}</span>
              </div>
            </div>

            {/* Social Buttons (Facebook Link) */}
            <div className={`flex gap-3 pt-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
              <a
                href="https://web.facebook.com/SARLCARPOLE/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                id="footer-facebook-btn"
                className="p-2 bg-white/5 hover:bg-brand-yellow hover:text-brand-charcoal text-zinc-300 rounded transition-all duration-300 border border-white/10 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-lg"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links columns */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-yellow">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-zinc-400">
              <li>
                <button onClick={() => handleScrollTo('accueil')} className="hover:text-white transition-colors cursor-pointer">
                  {t('navbar.accueil')}
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  {t('navbar.services')}
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('simulateur')} className="hover:text-white transition-colors cursor-pointer">
                  {t('navbar.simulateur')}
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('galerie')} className="hover:text-white transition-colors cursor-pointer">
                  {t('navbar.galerie')}
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo('propos')} className="hover:text-white transition-colors cursor-pointer">
                  {t('navbar.propos')}
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Constantine physical quick coordinates list */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-yellow">
              {isRtl ? 'مكتب الدراسات والورشة' : "Bureau d'études"}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-zinc-400">
              <li className={`flex items-start gap-2.5 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <MapPin className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>{t('about.address')}</span>
              </li>
              <li className={`flex items-start gap-2.5 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <Phone className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span dir="ltr">0770 97 32 53</span>
                  <span dir="ltr">0770 97 32 03</span>
                </div>
              </li>
              <li className={`flex items-center gap-2.5 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                <Mail className="h-4 w-4 text-brand-yellow shrink-0" />
                <span>a.derrouiche@motorest-dz.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Underline Copyright block */}
      <div className="border-t border-white/5 bg-neutral-950 py-6">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-zinc-500 ${isRtl ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
          <p>© {currentYear} Carpôle Industriel. {t('footer.rights')}</p>
          <div className={`flex gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="hover:text-zinc-300 cursor-pointer">{isRtl ? 'الشروط القانونية' : 'Mentions Légales'}</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">{isRtl ? 'الشروط العامة' : 'Conditions Générales'}</span>
            <span>•</span>
            <span className="hover:text-zinc-300 cursor-pointer">{t('preloader.location')}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
