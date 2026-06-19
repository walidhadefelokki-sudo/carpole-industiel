import React, { useState } from 'react';
import { servicesData } from '../data';
import { Truck, Snowflake, Wrench, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onQuoteClick: () => void;
}

export default function ServicesSection({ onQuoteClick }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState('carrosserie');

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
              <button
                key={service.id}
                id={`btn-service-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`relative text-left p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${
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
            );
          })}
        </div>

        {/* Dynamic Service Breakdown Detail Panel */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Left Frame */}
            <div className="lg:col-span-5 bg-neutral-950 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-15">
                {selectedServiceId === 'carrosserie' && (
                  <img src="/src/assets/images/truck_bodywork_assembly_1781872797628.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {selectedServiceId === 'refrigeration' && (
                  <img src="/src/assets/images/truck_frigo_installation_1781872814520.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {selectedServiceId === 'maintenance' && (
                  <img src="/src/assets/images/refrigerated_truck_constantine_1781872831310.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
              <div>
                <h5 className="text-sm font-mono text-brand-yellow uppercase tracking-wider font-extrabold mb-4">
                  Spécifications Techniques & Atouts
                </h5>
                <p className="text-zinc-700 font-sans text-base leading-relaxed mb-6">
                  {currentService.longDescription}
                </p>

                <div className="space-y-3">
                  {currentService.advantages.map((adv, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-zinc-800 font-medium">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

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
