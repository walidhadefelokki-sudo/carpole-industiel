import React, { useState } from 'react';
import { galleryData } from '../data';
import { GalleryItem } from '../types';
import { Eye, MapPin, X, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'carrosserie' | 'frigo' | 'realisation'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'Toutes nos réalisations' },
    { id: 'carrosserie', label: 'Carrosseries Isothermes' },
    { id: 'frigo', label: 'Groupes Frigorifiques' },
    { id: 'realisation', label: 'Véhicules Prêts à Livrer' },
  ];

  const filteredPhotos = galleryData.filter(photo => {
    if (activeFilter === 'all') return true;
    return photo.category === activeFilter;
  });

  return (
    <section id="galerie" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-display font-extrabold text-brand-yellow bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
            Galerie Photos Réelles
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight">
            Immersion dans Nos Ateliers de Constantine
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-lg leading-relaxed">
            Consultez les photos professionnelles de nos compagnons installant des parois sandwiches de précision et connectant les circuits d’énergie frigorifiques.
          </p>
        </div>

        {/* Filter categories buttons row */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              id={`filter-btn-${f.id}`}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-4 sm:px-6 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === f.id
                  ? 'bg-neutral-900 border-neutral-900 text-brand-yellow shadow-md'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Categories Grid displays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={photo.id}
                id={`gallery-card-${photo.id}`}
                className="group relative bg-neutral-900 rounded-xl overflow-hidden aspect-video shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
                onClick={() => setSelectedPhoto(photo)}
              >
                
                {/* Image item representation */}
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-100 group-hover:saturate-125"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark overlay details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6">
                  
                  {/* Category marker bar */}
                  <span className="text-[9px] font-mono font-bold uppercase text-brand-yellow tracking-widest bg-brand-yellow/10 border border-brand-yellow/30 px-2.5 py-0.5 rounded self-start mb-2">
                    {photo.category === 'carrosserie' ? 'Soudure & Carrosserie' : photo.category === 'frigo' ? 'Montage Frigorifique' : 'Livraison Client'}
                  </span>

                  <h3 className="text-white font-display font-bold text-base sm:text-lg mb-1 tracking-tight leading-tight group-hover:text-brand-yellow transition-colors">
                    {photo.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-sans mt-1">
                    <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{photo.location}</span>
                  </div>

                  {/* Absolute Zoom indicator */}
                  <div className="absolute top-4 right-4 p-2 bg-neutral-950/80 rounded-full text-brand-yellow opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <Eye className="h-4 w-4" />
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox photo viewer popup Modal with specs */}
        <AnimatePresence>
          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur Backlight overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPhoto(null)}
                className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
              />
              
              {/* Lightbox Frame container box */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-white"
              >
                {/* Close absolute button */}
                <button
                  id="btn-close-lightbox"
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2.5 bg-neutral-950 text-zinc-400 hover:text-white rounded-full z-20 outline-none transition-colors border border-white/10"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left big image preview */}
                  <div className="md:col-span-7 bg-neutral-950/50 aspect-video md:aspect-auto flex items-center justify-center border-r border-white/5">
                    <img
                      src={selectedPhoto.imageUrl}
                      alt={selectedPhoto.title}
                      className="w-full h-auto max-h-[80vh] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Right description block */}
                  <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-2.5 py-1 rounded-sm uppercase tracking-wider">
                          Atelier Carpôle Constantine
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-display font-black text-white leading-tight">
                        {selectedPhoto.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
                        <MapPin className="h-4 w-4 text-brand-yellow shrink-0" />
                        <span>{selectedPhoto.location}</span>
                      </div>

                      <p className="text-zinc-300 font-sans text-sm leading-relaxed pt-2 border-t border-white/5">
                        {selectedPhoto.description}
                      </p>

                      {/* Technical checklist details */}
                      <div className="space-y-2 pt-4">
                        <p className="text-xs uppercase text-zinc-500 font-mono font-bold">Standard de réalisation</p>
                        <div className="flex items-center gap-2 text-xs font-sans text-zinc-300">
                          <Check className="h-3.5 w-3.5 text-brand-yellow" />
                          <span>Inspections thermiques infrarouge</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-sans text-zinc-300">
                          <Check className="h-3.5 w-3.5 text-brand-yellow" />
                          <span>Mise sous pression et test de gaz étanche</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-sans text-zinc-300">
                          <Check className="h-3.5 w-3.5 text-brand-yellow" />
                          <span>Fermetures inox anti-vibration</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <button
                        id="btn-lightbox-action"
                        onClick={() => {
                          setSelectedPhoto(null);
                          const el = document.getElementById('simulateur');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-3 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal font-display font-black text-xs uppercase tracking-wider rounded transition-all duration-200"
                      >
                        Estimer un équipement similaire
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
