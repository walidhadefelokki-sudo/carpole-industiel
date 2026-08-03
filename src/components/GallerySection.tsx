import React, { useState } from 'react';
import { galleryData } from '../data';
import { GalleryItem } from '../types';
import { Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySection() {
  const { t, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'carrosserie' | 'frigo' | 'realisation'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: t('gallery.cat.all') },
    { id: 'carrosserie', label: t('gallery.cat.carrosserie') },
    { id: 'frigo', label: t('gallery.cat.frigo') },
    { id: 'realisation', label: t('gallery.cat.realisation') },
  ];

  const filteredPhotos = galleryData.filter(photo => {
    if (activeFilter === 'all') return true;
    return photo.category === activeFilter;
  });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'carrosserie': return t('gallery.cat_body');
      case 'frigo': return t('gallery.cat_cooling');
      default: return t('gallery.cat_deliv');
    }
  };

  return (
    <section id="galerie" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-display font-extrabold text-brand-yellow bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
            {t('gallery.real_label')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight">
            {t('gallery.imm_title')}
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-lg leading-relaxed">
            {t('gallery.imm_desc')}
          </p>
        </div>

        {/* Filter categories buttons row */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              id={`filter-btn-${f.id}`}
              onClick={() => setActiveFilter(f.id as any)}
              className={`w-full md:w-auto text-center px-2 sm:px-6 py-3 sm:py-2 rounded-xl sm:rounded-full font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === f.id
                  ? 'bg-neutral-900 border-neutral-900 text-brand-yellow shadow-md'
                  : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Categories Grid displaying with alternating 40%-60%, 50%-50%, 60%-40% widths */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => {
              const photoTitle = t(`gallery.item.${photo.id}.title`) || photo.title;
              const photoLocation = t(`gallery.item.${photo.id}.loc`) || photo.location;

              const rowIndex = Math.floor(index / 2);
              const isSecondInRow = index % 2 === 1;
              const pattern = rowIndex % 3;

              // Pattern 0: (40% - 60%) => md:col-span-4 & md:col-span-6
              // Pattern 1: (50% - 50%) => md:col-span-5 & md:col-span-5
              // Pattern 2: (60% - 40%) => md:col-span-6 & md:col-span-4
              let colSpanClass = "";
              if (pattern === 0) {
                colSpanClass = isSecondInRow ? "md:col-span-6" : "md:col-span-4";
              } else if (pattern === 1) {
                colSpanClass = "md:col-span-5";
              } else {
                colSpanClass = isSecondInRow ? "md:col-span-4" : "md:col-span-6";
              }

              if (!isSecondInRow && index === filteredPhotos.length - 1) {
                colSpanClass = "md:col-span-10";
              }

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={photo.id}
                  id={`gallery-card-${photo.id}`}
                  className={`group relative bg-neutral-900 rounded-2xl overflow-hidden h-72 sm:h-80 md:h-[360px] shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl ${colSpanClass}`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  
                    {/* Image item representation */}
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      loop
                      className="w-full h-full z-0"
                    >
                      {photo.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image}
                            alt={`${photoTitle}-${index}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                  {/* Subtle dark overlay details on hover */}
                  <div
                    className={`absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 ${
                      isRtl ? "items-end" : "items-start"
                    }`}
                  >
                    <h3 className={`text-white font-display font-bold text-base sm:text-lg tracking-tight leading-tight group-hover:text-brand-yellow transition-colors ${isRtl ? 'text-right' : 'text-left'}`}>
                      {photoTitle}
                    </h3>

                    {/* Absolute Zoom indicator */}
                    <div className={`absolute top-4 p-2 bg-neutral-950/80 rounded-full text-brand-yellow opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ${isRtl ? 'left-4' : 'right-4'}`}>
                      <Eye className="h-4 w-4" />
                    </div>

                  </div>

                </motion.div>
              );
            })}
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
                  className={`absolute top-4 p-2.5 bg-neutral-950 text-zinc-400 hover:text-white rounded-full z-20 outline-none transition-colors border border-white/10 ${isRtl ? 'left-4' : 'right-4'}`}
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left big image preview */}
                  <div className="md:col-span-7 bg-neutral-950/50 aspect-video md:aspect-auto flex items-center justify-center border-r border-white/5">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      loop
                      className="w-full h-full z-0"
                    >
                      {selectedPhoto.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image}
                            alt={`${selectedPhoto.title}-${index}`}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Right description block */}
                  <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <h3 className={`text-xl sm:text-2xl font-display font-black text-white leading-tight ${isRtl ? 'text-right' : 'text-left'}`}>
                        {t(`gallery.item.${selectedPhoto.id}.title`) || selectedPhoto.title}
                      </h3>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <button
                        id="btn-lightbox-action"
                        onClick={() => {
                          setSelectedPhoto(null);
                          const el = document.getElementById('simulateur');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-3 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal font-display font-black text-xs uppercase tracking-wider rounded transition-all duration-200 cursor-pointer"
                      >
                        {t('gallery.std_btn')}
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
