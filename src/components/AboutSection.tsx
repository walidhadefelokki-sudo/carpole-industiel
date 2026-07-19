import React from 'react';
import { ShieldCheck, Target, Award, Users, MapPin, Tractor, Wrench, Settings } from 'lucide-react';
import { imageBodywork } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t, isRtl } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: t('about.val.0.title'),
      desc: t('about.val.0.desc')
    },
    {
      icon: Target,
      title: t('about.val.1.title'),
      desc: t('about.val.1.desc')
    },
    {
      icon: Award,
      title: t('about.val.2.title'),
      desc: t('about.val.2.desc')
    },
    {
      icon: Users,
      title: t('about.val.3.title'),
      desc: t('about.val.3.desc')
    }
  ];

  return (
    <section id="propos" className="py-20 bg-neutral-50 relative overflow-hidden border-b border-zinc-200">
      
      {/* Structural background highlights mimicking metal joints */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neutral-900/[0.01] border-l-2 border-t-2 border-neutral-900/10 pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Image Collage & Constantine Highlight Frame */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-neutral-300 aspect-4/3">
              <img
                src={imageBodywork}
                alt="Atelier de Constantine"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
              
              {/* Overlay Badge containing local address */}
              <div className={`absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md text-brand-charcoal p-4 rounded-xl shadow-lg border border-zinc-200/50 flex gap-4 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                <div className="p-2.5 bg-brand-yellow/10 rounded-lg text-brand-yellow shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm">{t('about.sede')}</h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">{t('about.address')}</p>
                </div>
              </div>
            </div>

            {/* Behind floating outline decorative element */}
            <div className="absolute -inset-4 border-2 border-dashed border-brand-yellow/20 rounded-2xl -z-10 transform translate-x-2 translate-y-3 pointer-events-none"></div>

          </div>

          {/* Right Block: Pitch & History of Carpôle Industriel */}
          <div className={`lg:col-span-6 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-brand-yellow bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest font-bold inline-block">
                {t('about.badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight leading-tight">
                {t('about.title1')} <br/>
                {t('about.title2')}
              </h2>
            </div>

            <p className="font-sans text-zinc-600 text-base leading-relaxed">
              {t('about.p1')}
            </p>

            <p className="font-sans text-zinc-600 text-sm leading-relaxed">
              {t('about.p2')}
            </p>

            {/* Core commitment grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
              {values.map((v, index) => {
                const IconComp = v.icon;
                return (
                  <div key={index} id={`about-val-${index}`} className={`flex gap-3 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                    <div className="p-2 bg-brand-yellow/10 rounded-lg h-10 w-10 flex items-center justify-center text-brand-yellow shrink-0">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-neutral-900">{v.title}</h4>
                      <p className="font-sans text-xs text-zinc-500 mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Localized trust statement */}
        <div id="groupe-frigo" className={`mt-16 bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 border border-white/5 relative overflow-hidden shadow-xl text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full filter blur-2xl"></div>
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 ${isRtl ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="space-y-2">
              <h4 className="font-display font-extrabold text-lg text-brand-yellow">{t('about.extra_title')}</h4>
              <p className="font-sans text-zinc-300 text-sm max-w-2xl">
                {t('about.extra_desc')}
              </p>
            </div>
            <button
              id="about-cta-contact"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal font-display font-black text-xs uppercase tracking-wider rounded transition-all shrink-0 cursor-pointer animate-pulse"
            >
              {t('about.extra_btn')}
            </button>
          </div>
        </div>

        {/* Carrier Partner Section */}
        <div id="partenaire-carrier" className={`mt-10 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950/90 border border-blue-400/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl text-center ${isRtl ? 'md:text-right font-sans' : 'md:text-left'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full filter blur-2xl pointer-events-none"></div>
          
          <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10`}>
            <div className="space-y-4 flex-1">
              <div className={`flex flex-wrap items-center gap-4 ${isRtl ? 'justify-start md:justify-end flex-row-reverse' : 'justify-start'}`}>
                <div className="shrink-0 bg-white py-1 px-2 rounded-xl shadow-md flex items-center justify-center border border-white/20">
                  <div className="flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_of_the_Carrier_Corporation.svg" alt="Carrier Logo" className="h-7 w-auto mb-1" />
                    <span className="text-[#00358e] font-sans font-black italic tracking-[0.15em] text-[9px] uppercase leading-none">
                      Transicold
                    </span>
                  </div>
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <span className="text-[10px] font-mono font-black uppercase text-blue-200 bg-blue-900/80 border border-blue-400/30 px-3 py-1 rounded-full tracking-wider shadow-sm inline-block">
                    {isRtl ? 'شريك رسمي' : 'PARTENAIRE OFFICIEL'}
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-white mt-1.5">
                    {isRtl ? 'الماركة المعتمدة لوحدات التبريد' : 'Notre Marque Frigorifique de Confiance'}
                  </h4>
                </div>
              </div>

              <p className={`font-sans text-blue-100/90 text-xs sm:text-sm max-w-4xl leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                {isRtl 
                  ? 'نحن فخورون بشراكتنا مع كارير (Carrier)، الرائدة عالمياً في حلول تبريد النقل. نقوم بتجهيز مركباتكم بأكثر وحدات التبريد موثوقية في السوق، لضمان سلسلة تبريد مثالية.' 
                  : 'Nous sommes fiers d\'être partenaire de Carrier, leader mondial des solutions de réfrigération de transport. Nous équipons vos véhicules avec les groupes frigorifiques les plus fiables du marché pour garantir une chaîne du froid optimale.'}
              </p>
            </div>
          </div>
        </div>

        {/* Independent section highlighting Motorest Subsidiary Status */}
        <div id="groupe-motorest" className={`mt-10 bg-gradient-to-br from-emerald-950 via-neutral-900 to-emerald-950/90 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl text-center ${isRtl ? 'md:text-right font-sans' : 'md:text-left'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-yellow/5 rounded-full filter blur-2xl pointer-events-none"></div>
          
          <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10`}>
            <div className="space-y-4 flex-1">
              <div className={`flex flex-wrap items-center gap-3 ${isRtl ? 'justify-start md:justify-end flex-row-reverse' : 'justify-start'}`}>
                <div className="p-2 bg-brand-yellow text-brand-charcoal rounded-xl shadow-md shrink-0">
                  <Tractor className="h-5 w-5" />
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <span className="text-[10px] font-mono font-black uppercase text-brand-yellow bg-emerald-900/60 border border-emerald-500/30 px-3 py-1 rounded-full tracking-wider shadow-sm inline-block">
                    {isRtl ? 'مجموعة موتوريست العالمية' : 'GROUPE MOTOREST'}
                  </span>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-white mt-1">
                    {isRtl ? 'الفرع الرسمي المعتمد للتجهيز الفلاحي والصناعي' : 'Filiale Officielle du Groupe Motorest'}
                  </h4>
                </div>
              </div>

              <p className={`font-sans text-emerald-100/80 text-xs sm:text-sm max-w-4xl leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                {isRtl 
                  ? 'بصفتنا فرعاً معتمداً لمجموعة موتوريست (Motorest)، نوفر لشركائنا وعملائنا تكاملاً شاملاً يجمع بين تصنيع وتجهيز هياكل الشاحنات وتوفير أحدث حلول العتاد الفلاحي، قطع الغيار الأصلية والإطارات المتينة لجميع آليات الخدمة الشاقة.' 
                  : 'En tant que filiale officielle du groupe Motorest, nous combinons notre savoir-faire en carrosserie industrielle avec l’expertise historique de notre maison mère dans le domaine du matériel agricole, des pièces d’usure d’origine, et des pneumatiques de haute performance pour tous types de machines et véhicules.'}
              </p>

              {/* Grid of the 3 pillars */}
              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <Tractor className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs text-white">
                      {isRtl ? 'عتاد فلاحي متطور' : 'Matériel Agricole'}
                    </h5>
                    <p className="text-[10px] text-zinc-400">
                      {isRtl ? 'جرارات وآلات حديثة' : 'Tracteurs & équipements'}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs text-white">
                      {isRtl ? 'قطع غيار أصلية' : 'Pièces de Rechange'}
                    </h5>
                    <p className="text-[10px] text-zinc-400">
                      {isRtl ? 'ضمان الأداء والاستدامة' : 'Composants certifiés'}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <Settings className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs text-white">
                      {isRtl ? 'إطارات مخصصة' : 'Pneumatiques'}
                    </h5>
                    <p className="text-[10px] text-zinc-400">
                      {isRtl ? 'لكل الطرق والآلات' : 'Pneus agricoles & industriels'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              id="motorest-action-btn"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal font-display font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shrink-0 cursor-pointer shadow-lg hover:shadow-brand-yellow/20 transform hover:-translate-y-0.5 flex items-center gap-2 self-center"
            >
              <span>{isRtl ? 'طلب معلومات / كتالوج' : 'Nous Contacter / Catalogue'}</span>
              <Wrench className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}