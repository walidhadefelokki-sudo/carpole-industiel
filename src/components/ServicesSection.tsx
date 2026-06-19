import React, { useState } from 'react';
import { servicesData, imageBodywork, imageFrigo, imageConstantinePorteur } from '../data';
import { Truck, Snowflake, Wrench, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onQuoteClick: () => void;
}

export default function ServicesSection({ onQuoteClick }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState('carrosserie');
  const [carrosserieView, setCarrosserieView] = useState<'principale' | 'technique'>('principale');

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
            Savoir-Faire Certifié
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight mt-1">
            Nos Métiers de l’Isolation & du Froid
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-lg leading-relaxed">
            De la tôle robuste aux groupes réfrigérants intelligents, nous offrons une synergie d’ingénierie mécanique et thermique pour équiper vos véhicules utilitaires.
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
                  className={`w-full relative text-left p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-neutral-900 border-neutral-900 text-white shadow-xl shadow-neutral-900/10'
                      : 'bg-white border-zinc-200 text-brand-charcoal hover:shadow-lg'
                  }`}
                >
                  <div className={`p-3 rounded-lg inline-block mb-4 ${isSelected ? 'bg-white/10' : 'bg-brand-yellow/10'}`}>
                    {getIcon(service.iconName)}
                  </div>
                  
                  <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
                  <p className={`font-sans text-xs line-clamp-2 ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {service.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
                    <span className={isSelected ? 'text-brand-yellow' : 'text-neutral-900'}>En savoir plus</span>
                    <ArrowRight className={`h-3 w-3 ${isSelected ? 'text-brand-yellow' : 'text-neutral-900'}`} />
                  </div>
                  
                  {isSelected && (
                    <div className="absolute right-4 top-4 w-2 h-2 rounded-full bg-brand-yellow"></div>
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
                        alt={service.title}
                        className="w-full h-full object-cover opacity-60"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-4">
                        <span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest font-bold">Zoom sur le service</span>
                        <h4 className="text-lg font-display font-black text-white mt-1 leading-tight">
                          {service.title}
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
                            VUE PRINCIPALE
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCarrosserieView('technique'); }}
                            className={`flex-1 py-1.5 text-[10px] font-display font-black uppercase rounded-md tracking-wider transition-all duration-150 text-center ${
                              carrosserieView === 'technique'
                                ? 'bg-neutral-900 text-brand-yellow shadow-sm'
                                : 'text-zinc-600 hover:text-zinc-900'
                            }`}
                          >
                            VUE TECHNIQUE
                          </button>
                        </div>

                        {carrosserieView === 'principale' ? (
                          <div className="space-y-3">
                            <p className="text-zinc-800 font-sans text-xs font-semibold leading-relaxed">
                              Isolation renforcée sous vide pour le transport basse température (-20°C) de produits congelés.
                            </p>
                            <p className="text-zinc-500 font-sans text-[11px] leading-relaxed">
                              Nos ingénieurs et techniciens réalisent ces assemblages certifiés au sein de notre atelier moderne à Constantine, validant chaque étape selon de sévères critères d'isolation thermique.
                            </p>
                            <div className="pt-2 border-t border-zinc-100">
                              <h5 className="text-[10px] font-mono text-neutral-900 uppercase tracking-widest font-black mb-1.5">
                                ATOUTS D'INGÉNIERIE INTÉGRÉS
                              </h5>
                              <div className="space-y-1.5">
                                <div className="flex items-start gap-1.5">
                                  <span className="text-brand-yellow text-xs font-black shrink-0">&gt;</span>
                                  <span className="font-sans text-[11px] text-zinc-700 font-semibold leading-normal">
                                    Plancher renforcé antidérapant en aluminium larmé résistant aux transpalettes
                                  </span>
                                </div>
                                <div className="flex items-start gap-1.5">
                                  <span className="text-brand-yellow text-xs font-black shrink-0">&gt;</span>
                                  <span className="font-sans text-[11px] text-zinc-700 font-semibold leading-normal">
                                    Rails d'arrimage encastrés en acier inoxydable et plinthe en alu
                                  </span>
                                </div>
                                <div className="flex items-start gap-1.5">
                                  <span className="text-brand-yellow text-xs font-black shrink-0">&gt;</span>
                                  <span className="font-sans text-[11px] text-zinc-700 font-semibold leading-normal">
                                    Double joints de portes en élastomère EPDM anti-givre
                                  </span>
                                </div>
                                <div className="flex items-start gap-1.5">
                                  <span className="text-brand-yellow text-xs font-black shrink-0">&gt;</span>
                                  <span className="font-sans text-[11px] text-zinc-700 font-semibold leading-normal">
                                    Huisserie arrière et visserie 100% Inox 314
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <h5 className="text-[10px] font-mono text-amber-600 uppercase tracking-widest font-black mb-2">
                              SÉCURITÉ THERMIQUE CERTIFIÉE
                            </h5>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">ÉPAISSEUR ISOLATION</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">80 mm à 100 mm</div>
                              </div>
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">COEFF. TRANSMISSION K</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">0,36 W/m²K (Certifié)</div>
                              </div>
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">TEMPÉRATURE DE SERVICE</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">-20°C à -25°C</div>
                              </div>
                              <div className="bg-zinc-50 border border-zinc-200/60 p-2.5 rounded-lg">
                                <div className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-bold">HOMOLOGATION ATP</div>
                                <div className="text-[11px] font-sans font-extrabold text-neutral-900 mt-0.5">FRC (Classe C)</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <h5 className="text-[10px] font-mono text-amber-600 uppercase tracking-wider inline-block mb-2 font-bold">
                            Spécifications & Atouts
                          </h5>
                          <p className="text-zinc-700 font-sans text-xs leading-relaxed">
                            {service.longDescription}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-zinc-150">
                          {service.advantages.map((adv, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                              <span className="font-sans text-xs text-zinc-800 font-medium">{adv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Duration and Call to Action */}
                    <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500 font-sans">Durée de réalisation :</span>
                        <span className="px-2 py-0.5 bg-zinc-100 rounded font-display font-bold text-xs text-brand-charcoal">
                          {service.id === 'carrosserie' ? '6-14 jours' : service.id === 'refrigeration' ? '3-5 jours' : '1-2 jours'}
                        </span>
                      </div>

                      <button
                        onClick={onQuoteClick}
                        className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-brand-yellow font-display font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 text-center"
                      >
                        Estimer un prix pour ce travail
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
            <div className="lg:col-span-5 bg-neutral-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-15">
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
                <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest font-bold">Zoom sur le service</span>
                <h4 className="text-2xl sm:text-3xl font-display font-black mt-2 leading-tight">
                  {currentService.title}
                </h4>
                <p className="text-zinc-400 font-sans text-sm mt-4 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-yellow/10 rounded-full">
                    <Shield className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-bold font-display">Garantie & Homologation</p>
                    <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Certificat de conformité agréé par l’État algérien.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Right Frame */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              {selectedServiceId === 'carrosserie' ? (
                <div>
                  {/* Category & Title */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4 border-b border-zinc-100 pb-3">
                    <span className="text-[10px] font-mono font-black text-zinc-500 tracking-wider">
                      CARROSSERIE ISOTHERME RENFORCÉE (CLASSE C)
                    </span>
                    <div className="flex bg-zinc-100 rounded-lg p-0.5 border border-zinc-200/50">
                      <button
                        onClick={() => setCarrosserieView('principale')}
                        className={`px-3 py-1 text-[10px] font-display font-black uppercase rounded-md tracking-wider transition-all duration-150 ${
                          carrosserieView === 'principale'
                            ? 'bg-neutral-900 text-brand-yellow shadow-sm'
                            : 'text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        VUE PRINCIPALE
                      </button>
                      <button
                        onClick={() => setCarrosserieView('technique')}
                        className={`px-3 py-1 text-[10px] font-display font-black uppercase rounded-md tracking-wider transition-all duration-150 ${
                          carrosserieView === 'technique'
                            ? 'bg-neutral-900 text-brand-yellow shadow-sm'
                            : 'text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        VUE TECHNIQUE
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-black text-brand-charcoal mb-4 uppercase tracking-tight">
                    PANNEAUX SANDWICH HAUTE PERFORMANCE 100MM
                  </h3>

                  {carrosserieView === 'principale' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3 text-left">
                        <p className="text-zinc-800 font-sans text-base font-semibold leading-relaxed">
                          Isolation renforcée sous vide pour le transport basse température (-20°C) de produits congelés.
                        </p>
                        <p className="text-zinc-500 font-sans text-sm leading-relaxed">
                          Nos ingénieurs et techniciens réalisent ces assemblages certifiés au sein de notre atelier moderne à Constantine, validant chaque étape selon de sévères critères d'isolation thermique.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-zinc-100">
                        <h4 className="text-xs font-mono font-bold text-neutral-950 uppercase tracking-widest mb-3">
                          ATOUTS D'INGÉNIERIE INTÉGRÉS
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                          <div className="flex items-start gap-2">
                            <span className="text-brand-yellow text-sm font-black shrink-0 mt-0.5">&gt;</span>
                            <span className="font-sans text-xs text-zinc-700 font-semibold leading-normal">
                              Plancher renforcé antidérapant en aluminium larmé résistant aux transpalettes
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-brand-yellow text-sm font-black shrink-0 mt-0.5">&gt;</span>
                            <span className="font-sans text-xs text-zinc-700 font-semibold leading-normal">
                              Rails d'arrimage encastrés en acier inoxydable et plinthe en alu
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-brand-yellow text-sm font-black shrink-0 mt-0.5">&gt;</span>
                            <span className="font-sans text-xs text-zinc-700 font-semibold leading-normal">
                              Double joints de portes en élastomère EPDM anti-givre
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-brand-yellow text-sm font-black shrink-0 mt-0.5">&gt;</span>
                            <span className="font-sans text-xs text-zinc-700 font-semibold leading-normal">
                              Huisserie arrière et visserie 100% Inox 314
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-4">
                          SÉCURITÉ THERMIQUE CERTIFIÉE
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-zinc-50 border border-zinc-200/60 p-3.5 rounded-lg text-left">
                            <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-bold">ÉPAISSEUR ISOLATION</div>
                            <div className="text-sm font-display font-black text-neutral-900 mt-1">80 mm à 100 mm</div>
                          </div>
                          
                          <div className="bg-zinc-50 border border-zinc-200/60 p-3.5 rounded-lg text-left">
                            <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-bold">COEFFICIENT DE TRANSMISSION K</div>
                            <div className="text-sm font-display font-black text-neutral-900 mt-1">0,36 W/m²K (Certifié)</div>
                          </div>
                          
                          <div className="bg-zinc-50 border border-zinc-200/60 p-3.5 rounded-lg text-left">
                            <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-bold">TEMPÉRATURE DE SERVICE</div>
                            <div className="text-sm font-display font-black text-neutral-900 mt-1">-20°C à -25°C</div>
                          </div>
                          
                          <div className="bg-zinc-50 border border-zinc-200/60 p-3.5 rounded-lg text-left">
                            <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-bold">HOMOLOGATION ATP</div>
                            <div className="text-sm font-display font-black text-neutral-900 mt-1">FRC (Classe C)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50 rounded-lg p-3 border border-dashed border-zinc-200 text-left">
                        <p className="text-[11px] font-sans text-zinc-500 leading-normal">
                          Nos ingénieurs et techniciens réalisent ces assemblages certifiés au sein de notre atelier moderne à Constantine, validant chaque étape selon de sévères critères d'isolation thermique.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div>
                  <h5 className="text-sm font-mono text-brand-yellow uppercase tracking-wider font-extrabold mb-4">
                    Spécifications Techniques & Atouts
                  </h5>
                  <p className="text-zinc-700 font-sans text-base leading-relaxed mb-6 text-left">
                    {currentService.longDescription}
                  </p>

                  <div className="space-y-3">
                    {currentService.advantages.map((adv, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-zinc-800 font-medium text-left">{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-8 mt-8 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-sans">Durée moyenne de réalisation :</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded font-display font-bold text-xs text-brand-charcoal">
                    {selectedServiceId === 'carrosserie' ? '6-14 jours' : selectedServiceId === 'refrigeration' ? '3-5 jours' : '1-2 jours'}
                  </span>
                </div>

                <button
                  id="btn-service-interest"
                  onClick={onQuoteClick}
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-brand-yellow font-display font-bold text-xs uppercase tracking-wider rounded transition-all duration-200"
                >
                  Estimer un prix pour ce travail
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
