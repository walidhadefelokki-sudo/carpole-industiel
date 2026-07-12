import React, { useState } from 'react';
import { servicesData, imageBodywork, imageFrigo, imageConstantinePorteur } from '../data';
import { Truck, Snowflake, Wrench, CheckCircle2, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import imageMeatInterior from '../assets/images/isothermal_meat_interior_1781889077703.jpg';
import imageEmptyInterior from '../assets/images/isothermal_empty_interior_1781889101777.jpg';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onQuoteClick: () => void;
}

export default function ServicesSection({ onQuoteClick }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState('carrosserie');
  const [carrosserieView, setCarrosserieView] = useState<'principale' | 'technique'>('principale');
  const { t, isRtl } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck':
        return <Truck className="h-6 w-6 text-brand-yellow" />;
      case 'Snowflake':
        return <Snowflake className="h-6 w-6 text-brand-yellow" />;
      case 'Wrench':
        return <Wrench className="h-6 w-6 text-brand-yellow" />;
      default:
        return <Truck className="h-6 w-6 text-brand-yellow" />;
    }
  };

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  return (
    <section id="services" className="py-20 bg-neutral-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Copy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-display font-extrabold text-brand-yellow bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight mt-1">
            {t('services.title')}
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Tab Selection Cards / Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {servicesData.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                className="flex flex-col animate-fadeIn"
              >
                <button
                  id={`btn-service-${service.id}`}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full relative ${isRtl ? 'text-right' : 'text-left'} p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-neutral-900 border-neutral-900 text-white shadow-xl shadow-neutral-900/10'
                      : 'bg-white border-zinc-200 text-brand-charcoal hover:shadow-lg'
                  }`}
                >
                  <div className={`p-3 rounded-lg inline-block mb-4 ${isSelected ? 'bg-white/10' : 'bg-brand-yellow/10'}`}>
                    {getIcon(service.iconName)}
                  </div>
                  
                  <h3 className="font-display font-bold text-lg mb-2">{t(`services.${service.id}.title`)}</h3>
                  <p className={`font-sans text-xs line-clamp-2 ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {t(`services.${service.id}.description`)}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
                    <span className={isSelected ? 'text-brand-yellow' : 'text-neutral-900'}>{t('services.learn_more')}</span>
                    {isRtl ? (
                      <ArrowLeft className={`h-3 w-3 ${isSelected ? 'text-brand-yellow' : 'text-neutral-900'}`} />
                    ) : (
                      <ArrowRight className={`h-3 w-3 ${isSelected ? 'text-brand-yellow' : 'text-neutral-900'}`} />
                    )}
                  </div>
                  
                  {isSelected && (
                    <div className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-4 w-2 h-2 rounded-full bg-brand-yellow`}></div>
                  )}
                </button>

                {/* Inline Mobile detail panel */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-4 bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-lg p-5 space-y-4 text-brand-charcoal text-left"
                  >
                    {/* Visual Left Frame Image */}
                    <div className="relative h-48 rounded-lg overflow-hidden bg-neutral-950">
                      <img
                        src={
                          service.id === 'carrosserie'
                            ? imageBodywork
                            : service.id === 'refrigeration'
                            ? imageFrigo
                            : imageConstantinePorteur
                        }
                        alt={t(`services.${service.id}.title`)}
                        className="w-full h-full object-cover opacity-60"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-4">
                        <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest font-bold">{t('services.key_assets')}</span>
                        <h4 className="text-lg font-display font-black text-white mt-1 leading-tight">
                          {t(`services.${service.id}.title`)}
                        </h4>
                      </div>
                    </div>

                    {/* Explanatory Info */}
                    {service.id === 'carrosserie' ? (
                      <div className="space-y-4">
                        <div className="flex bg-zinc-100 rounded-lg p-0.5 border border-zinc-200/50 w-full justify-center">
                          <button
                            onClick={(e) => { e.stopPropagation(); setCarrosserieView('principale'); }}
                            className={`flex-1 py-1.5 text-[10px] font-display font-black uppercase rounded-md tracking-wider transition-all duration-150 text-center ${
                              carrosserieView === 'principale'
                                ? 'bg-neutral-900 text-brand-yellow shadow-sm'
                                : 'text-zinc-600 hover:text-zinc-900'
                            }`}
                          >
                            {t('services.view_main')}
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCarrosserieView('technique'); }}
                            className={`flex-1 py-1.5 text-[10px] font-display font-black uppercase rounded-md tracking-wider transition-all duration-150 text-center ${
                              carrosserieView === 'technique'
                                ? 'bg-neutral-900 text-brand-yellow shadow-sm'
                                : 'text-zinc-600 hover:text-zinc-900'
                            }`}
                          >
                            {t('services.view_tech')}
                          </button>
                        </div>
                        {carrosserieView === 'principale' ? (
                          <div className="space-y-3">
                            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-zinc-250 shadow-sm bg-neutral-900">
                              <img 
                                src={imageMeatInterior} 
                                alt="Intérieur" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute bottom-2 left-2 bg-neutral-950/80 px-2 py-0.5 rounded text-[8px] font-mono text-white">
                                {t('services.view_main')}
                              </div>
                            </div>
                            <p className="text-zinc-800 font-sans text-xs font-semibold leading-relaxed">
                              {t('services.carrosserie.principale.title')}
                            </p>
                            <p className="text-zinc-500 font-sans text-[11px] leading-relaxed">
                              {t('services.carrosserie.principale.desc')}
                            </p>
                            <div className="pt-2 border-t border-zinc-100">
                              <h5 className="text-[10px] font-mono text-neutral-900 uppercase tracking-widest font-black mb-1.5">
                                {t('services.carrosserie.engineering_title')}
                              </h5>
                              <div className="space-y-1.5">
                                {[0, 1, 2, 3, 4].map((idx) => (
                                  <div key={idx} className="flex items-start gap-1.5">
                                    <span className="text-brand-yellow text-xs font-black shrink-0">&gt;</span>
                                    <span className="font-sans text-[11px] text-zinc-700 font-semibold leading-normal">
                                      {t(`services.carrosserie.adv.${idx}`)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-zinc-250 shadow-sm bg-neutral-900">
                              <img 
                                src={imageEmptyInterior} 
                                alt="Intérieur technique" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute bottom-2 left-2 bg-neutral-950/80 px-2 py-0.5 rounded text-[8px] font-mono text-white">
                                {t('services.view_tech')}
                              </div>
                            </div>
                            <h5 className="text-[10px] font-mono text-amber-600 uppercase tracking-widest font-black mb-2">
                              {t('services.carrosserie.security_title')}
                            </h5>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg text-left">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">{t('services.char.thickness')}</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">{t('services.char.thickness_val')}</div>
                              </div>
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg text-left">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">{t('services.char.k_coeff')}</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">{t('services.char.k_coeff_val')}</div>
                              </div>
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg text-left">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">{t('services.char.temp')}</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">{t('services.char.temp_val')}</div>
                              </div>
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg text-left">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">{t('services.char.atp')}</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">{t('services.char.atp_val')}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-[10px] font-mono text-amber-600 uppercase tracking-wider inline-block mb-2 font-bold">
                            {t('services.specifications_title')}
                          </h5>
                          <p className="text-zinc-700 font-sans text-xs leading-relaxed">
                            {t(`services.${service.id}.longDescription`)}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-zinc-150">
                          {[0, 1, 2, 3, 4].map((idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                              <span className="font-sans text-xs text-zinc-800 font-medium">{t(`services.${service.id}.adv.${idx}`)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Duration and Call to Action */}
                    <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500 font-sans">{t('services.duration_label')}</span>
                        <span className="px-2 py-0.5 bg-zinc-100 rounded font-display font-bold text-xs text-brand-charcoal">
                          {service.id === 'carrosserie' ? t('services.duration.carrosserie') : service.id === 'refrigeration' ? t('services.duration.refrigeration') : t('services.duration.maintenance')}
                        </span>
                      </div>

                      <button
                        onClick={onQuoteClick}
                        className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-brand-yellow font-display font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 text-center"
                      >
                        {t('services.estimate_btn')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Service Breakdown Detail Panel */}
        <div className="hidden md:block bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Left Frame */}
            <div className={`lg:col-span-5 bg-neutral-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden ${isRtl ? 'border-l border-white/5' : 'border-r border-white/5'}`}>
              <div className="absolute inset-0 opacity-30">
                {selectedServiceId === 'carrosserie' && (
                  <img src={imageBodywork} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {selectedServiceId === 'refrigeration' && (
                  <img src={imageFrigo} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {selectedServiceId === 'maintenance' && (
                  <img src={imageConstantinePorteur} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
              </div>
              
              <div className="relative z-10">
                <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest font-bold">{t('services.key_assets')}</span>
                <h4 className="text-2xl sm:text-3xl font-display font-black mt-2 leading-tight">
                  {t(`services.${currentService.id}.title`)}
                </h4>
                <p className="text-zinc-400 font-sans text-sm mt-4 leading-relaxed">
                  {t(`services.${currentService.id}.description`)}
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-yellow/10 rounded-full">
                    <Shield className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <p className="text-xs text-white font-bold font-display">{t('services.warranty_title')}</p>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5">{t('services.warranty_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Right Frame */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              {selectedServiceId === 'carrosserie' ? (
                <div>
                  {/* Category & Title */}
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] uppercase tracking-wider mb-2 font-black">
                    <Wrench className="h-3.5 w-3.5 inline text-zinc-500" /> {t('services.engineering_sheet')}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-charcoal mb-1 uppercase tracking-tight">
                    {t('services.sheet_title')}
                  </h3>

                  <div className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-widest mb-4">
                    {t('services.sheet_subtitle')}
                  </div>

                  <hr className="border-t border-zinc-200/80 mb-6" />

                  {/* Inside layout splits text vs side-by-side images */}
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                    
                    {/* Left content block: 7cols */}
                    <div className="xl:col-span-7 space-y-4 text-left">
                      <p className={`text-zinc-950 font-sans text-sm sm:text-base font-bold leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                        {t('services.carrosserie.principale.title')}
                      </p>
                      
                      {/* Internal Subtabs */}
                      <div className="flex bg-zinc-100 rounded-lg p-0.5 border border-zinc-200/50 w-full mb-3" dir="ltr">
                        <button
                          onClick={() => setCarrosserieView('principale')}
                          className={`flex-1 py-1 text-[10px] font-display font-black uppercase rounded-md tracking-wider transition-all duration-150 text-center ${
                            carrosserieView === 'principale'
                              ? 'bg-neutral-900 text-brand-yellow shadow-sm'
                              : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          {t('services.key_assets')}
                        </button>
                        <button
                          onClick={() => setCarrosserieView('technique')}
                          className={`flex-1 py-1 text-[10px] font-display font-black uppercase rounded-md tracking-wider transition-all duration-150 text-center ${
                            carrosserieView === 'technique'
                              ? 'bg-neutral-900 text-brand-yellow shadow-sm'
                              : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          {t('services.characteristics')}
                        </button>
                      </div>

                      {carrosserieView === 'principale' ? (
                        <motion.div
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-2 pt-1"
                        >
                          {[0, 1, 2, 3].map((idx) => (
                            <div key={idx} className={`flex items-start gap-2 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                              <span className="text-brand-yellow text-xs font-black shrink-0 mt-0.5">&gt;</span>
                              <span className="font-sans text-xs text-zinc-700 font-semibold leading-relaxed">
                                {t(`services.carrosserie.adv.${idx}`)}
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="grid grid-cols-2 gap-2 pt-1"
                        >
                          <div className={`bg-zinc-50 border border-zinc-150 p-2.5 rounded ${isRtl ? 'text-right' : 'text-left'}`}>
                            <div className="text-[8px] font-mono text-zinc-400 font-bold uppercase">{t('services.char.thickness')}</div>
                            <div className="text-xs font-display font-black text-neutral-900 mt-0.5">{t('services.char.thickness_val')}</div>
                          </div>
                          <div className={`bg-zinc-50 border border-zinc-150 p-2.5 rounded ${isRtl ? 'text-right' : 'text-left'}`}>
                            <div className="text-[8px] font-mono text-zinc-400 font-bold uppercase">{t('services.char.k_coeff')}</div>
                            <div className="text-xs font-display font-black text-neutral-900 mt-0.5">{t('services.char.k_coeff_val')}</div>
                          </div>
                          <div className={`bg-zinc-50 border border-zinc-150 p-2.5 rounded ${isRtl ? 'text-right' : 'text-left'}`}>
                            <div className="text-[8px] font-mono text-zinc-400 font-bold uppercase">{t('services.char.temp')}</div>
                            <div className="text-xs font-display font-black text-neutral-900 mt-0.5">{t('services.char.temp_val')}</div>
                          </div>
                          <div className={`bg-zinc-50 border border-zinc-150 p-2.5 rounded ${isRtl ? 'text-right' : 'text-left'}`}>
                            <div className="text-[8px] font-mono text-zinc-400 font-bold uppercase">{t('services.char.atp')}</div>
                            <div className="text-xs font-display font-black text-neutral-900 mt-0.5">{t('services.char.atp_val')}</div>
                          </div>
                        </motion.div>
                      )}

                      <p className={`text-zinc-500 font-sans text-xs leading-relaxed pt-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                        {t('services.carrosserie.principale.desc')}
                      </p>
                    </div>

                    {/* Right images block: 5cols */}
                    <div className="xl:col-span-5 grid grid-cols-1 gap-4">
                      {/* Image Card 1: VUE PRINCIPALE */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setCarrosserieView('principale')}
                        className={`group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border shadow transition-all duration-300 bg-neutral-900 ${
                          carrosserieView === 'principale' ? 'border-brand-yellow ring-2 ring-brand-yellow/30' : 'border-zinc-200 hover:border-zinc-350'
                        }`}
                      >
                        <img 
                          src={imageMeatInterior} 
                          alt="Intérieur" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-mono font-bold tracking-widest text-white border border-white/10 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                          {t('services.view_main')}
                        </div>
                      </motion.div>

                      {/* Image Card 2: VUE TECHNIQUE */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setCarrosserieView('technique')}
                        className={`group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border shadow transition-all duration-300 bg-neutral-900 ${
                          carrosserieView === 'technique' ? 'border-brand-yellow ring-2 ring-brand-yellow/30' : 'border-zinc-200 hover:border-zinc-350'
                        }`}
                      >
                        <img 
                          src={imageEmptyInterior} 
                          alt="Intérieur" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[9px] font-mono font-bold tracking-widest text-white border border-white/10 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                          {t('services.view_tech')}
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              ) : (
                <div>
                  <h5 className={`text-sm font-mono text-brand-yellow uppercase tracking-wider font-extrabold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {t('services.specifications_title')}
                  </h5>
                  <p className={`text-zinc-700 font-sans text-base leading-relaxed mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {t(`services.${currentService.id}.longDescription`)}
                  </p>

                  <div className="space-y-3">
                    {[0, 1, 2, 3, 4].map((idx) => (
                      <div key={idx} className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                        <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-zinc-800 font-medium">{t(`services.${currentService.id}.adv.${idx}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8 mt-8 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-sans">{t('services.duration_label_avg')}</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded font-display font-bold text-xs text-brand-charcoal">
                    {selectedServiceId === 'carrosserie' ? t('services.duration.carrosserie') : selectedServiceId === 'refrigeration' ? t('services.duration.refrigeration') : t('services.duration.maintenance')}
                  </span>
                </div>

                <button
                  id="btn-service-interest"
                  onClick={onQuoteClick}
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-brand-yellow font-display font-bold text-xs uppercase tracking-wider rounded transition-all duration-200"
                >
                  {t('services.estimate_btn')}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
