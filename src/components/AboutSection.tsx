import React from 'react';
import { ShieldCheck, Target, Award, Users, MapPin, Milestone } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Zéro Pont Thermique',
      desc: 'Notre procédé de thermo-moulage de cloisons isole hermétiquement la cargaison.'
    },
    {
      icon: Target,
      title: 'Savoir-Faire Soudeur',
      desc: 'Soudure et fixation de faux-châssis exécutées en acier trempé traité antirouille.'
    },
    {
      icon: Award,
      title: 'Homologation d’État',
      desc: 'Toutes nos transformations obtiennent le certificat officiel de réception par les Mines.'
    },
    {
      icon: Users,
      title: 'Accompagnement Local',
      desc: 'Atelier de proximité basé à Constantine pour un entretien rapide de votre flotte.'
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
                src="/src/assets/images/truck_bodywork_assembly_1781872797628.jpg"
                alt="Atelier de Constantine"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
              
              {/* Overlay Badge containing local address */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md text-brand-charcoal p-4 rounded-xl shadow-lg border border-zinc-200/50 flex gap-4">
                <div className="p-2.5 bg-brand-yellow/10 rounded-lg text-brand-yellow shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm">Siège Social & Atelier Central</h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">Zone Industrielle Palma, RN 5, Constantine, Algérie</p>
                </div>
              </div>
            </div>

            {/* Behind floating outline decorative element */}
            <div className="absolute -inset-4 border-2 border-dashed border-brand-yellow/20 rounded-2xl -z-10 transform translate-x-2 translate-y-3 pointer-events-none"></div>

          </div>

          {/* Right Block: Pitch & History of Carpôle Industriel */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-brand-yellow bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest font-bold inline-block">
                Qui sommes-nous ?
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight">
                Carpôle Industriel : <br/>
                La Référence du Froid Routier
              </h2>
            </div>

            <p className="font-sans text-zinc-600 text-base leading-relaxed">
              Basée à <strong>Constantine</strong>, cœur logistique de l’Est algérien, l’entreprise <strong>Carpôle Industriel</strong> est née de la volonté de fournir aux transporteurs et entreprises alimentaires des équipements isothermes et frigorifiques d’une fiabilité absolue. 
            </p>

            <p className="font-sans text-zinc-600 text-sm leading-relaxed">
              Nous associons des techniques modernes d'isolation composite (panneaux sandwich étanches ultra-légers) avec des compétences de chaudronnerie lourde pour garantir des installations robustes. Qu'il s’agisse d'un petit utilitaire pour les livraisons en centre-ville ou d’un ensemble lourd articulé, nous adaptons les puissances frigorifiques pour supporter les chaleurs extrêmes du climat algérien.
            </p>

            {/* Core commitment grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
              {values.map((v, index) => {
                const IconComp = v.icon;
                return (
                  <div key={index} id={`about-val-${index}`} className="flex gap-3">
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
        <div className="mt-16 bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 border border-white/5 relative overflow-hidden shadow-xl text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full filter blur-2xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <h4 className="font-display font-extrabold text-lg text-brand-yellow">Vous possédez déjà votre groupe frigorifique ?</h4>
              <p className="font-sans text-zinc-300 text-sm max-w-2xl">
                Nous assurons l’installation mécanique et le montage électrique de vos propres boîtiers de réfrigération (neufs ou occasions révisés) à des tarifs compétitifs, avec raccordement cabine sécurisé.
              </p>
            </div>
            <button
              id="about-cta-contact"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal font-display font-black text-xs uppercase tracking-wider rounded transition-all shrink-0"
            >
              Parler à un installateur
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
