import React, { useState, useMemo } from 'react';
import { QuoteInput, QuoteEstimate, TruckType, BodyType, RefrigeratorCapacity } from '../types';
import { calculateQuote } from '../data';
import { 
  Check, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Sparkles, 
  RefreshCw, 
  FileText, 
  Send, 
  Shield, 
  Clock, 
  Layers, 
  Truck,
  Snowflake,
  ClipboardList
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function QuoteSimulator() {
  const [formData, setFormData] = useState<QuoteInput>({
    truckType: 'truck_medium',
    bodyType: 'insulated_refrigerated',
    frigoCapacity: 'positive_fresh',
    truckCount: 1,
    hasSubframeIncluded: true,
    notes: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    clientCompany: '',
    clientCity: 'Constantine'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // We can still fetch the high-end technical duration/warranty estimate (without displaying any pricing)
  const estimate: QuoteEstimate = useMemo(() => {
    return calculateQuote(formData);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'truckCount') {
      const parsed = parseInt(value);
      setFormData(prev => ({ ...prev, [name]: isNaN(parsed) ? 1 : Math.max(1, parsed) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectRadio = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.clientPhone) {
      setSubmitError('Veuillez remplir votre nom et votre numéro de téléphone.');
      return;
    }
    setSubmitError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      truckType: 'truck_medium',
      bodyType: 'insulated_refrigerated',
      frigoCapacity: 'positive_fresh',
      truckCount: 1,
      hasSubframeIncluded: true,
      notes: '',
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      clientCompany: '',
      clientCity: 'Constantine'
    });
  };

  const truckLabels: Record<string, string> = {
    carrier_small: 'Camionnette & Utilitaire (<3.5t)',
    truck_medium: 'Porteur Moyen (3.5t à 12t)',
    semi_heavy_duty: 'Poids-lourd Rigide (12t à 19t)',
    custom_project: 'Semi-Remorque & Spéciaux (>19t)'
  };

  const bodyLabels: Record<string, string> = {
    insulated_refrigerated: 'Isotherme Renforcée (Frigo)',
    standard_box_dry: 'Fourgon Tôlé Sec Standard',
    heavy_duty_tipper: 'Benne Hydraulique Renforcée',
    subframe_only: 'Faux-châssis Seul'
  };

  const frigoLabels: Record<string, string> = {
    none: 'Aucune Réfrigération',
    positive_fresh: 'Froid Positif Frais (+2°C à +8°C)',
    negative_deep_freeze: 'Froid Négatif Surgelé (-20°C)',
    dual_multi_temp: 'Bi-Température Compartimenté'
  };

  return (
    <section id="simulateur" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Decorative gradient radial backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full filter blur-3xl -mr-[100px] -mt-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full filter blur-3xl -ml-[100px] -mb-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-extrabold text-brand-yellow bg-white/5 border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Demande de devis gratuit
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight mt-1">
            Demander un Devis en Ligne
          </h2>
          <p className="text-zinc-400 font-sans mt-4 text-base sm:text-lg leading-relaxed">
            Configurez vos besoins en carrosserie et froid industriel en 4 étapes simples. Notre équipe à <strong className="text-white font-medium">Constantine</strong> vous transmettra une offre personnalisée sous une heure.
          </p>
        </div>

        {/* Workspace Form Frame */}
        <div className="bg-neutral-950/40 rounded-2xl border border-white/10 p-5 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* LEFT COLUMN: Input form elements */}
                <div className="lg:col-span-7 space-y-8">
                  
                  {/* Step 1: Chassis */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-xs font-black font-display">1</div>
                      <label className="block text-sm font-display font-black text-zinc-200 uppercase tracking-wider">
                        1. TYPE DE CHÂSSIS / VÉHICULE
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'carrier_small', label: 'Camionnette & Utilitaire (<3.5t)', desc: 'Ex: Hyundai Porter, Kia K2500, DFAC' },
                        { id: 'truck_medium', label: 'Porteur Moyen (3.5t à 12t)', desc: 'Ex: ISUZU NPR, JMC, Renault D-Series' },
                        { id: 'semi_heavy_duty', label: 'Poids-lourd Rigide (12t à 19t)', desc: 'Ex: Mercedes Actros Porteur, Volvo FE' },
                        { id: 'custom_project', label: 'Semi-Remorque & Spéciaux (>19t)', desc: 'Ex: Remorques frigorifiques de grande taille' }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          id={`radio-truck-${item.id}`}
                          onClick={() => handleSelectRadio('truckType', item.id)}
                          className={`p-4 rounded-xl text-left border transition-all duration-200 group relative ${
                            formData.truckType === item.id
                              ? 'bg-brand-yellow/10 border-brand-yellow text-white shadow-md shadow-brand-yellow/5'
                              : 'bg-neutral-900/50 border-white/5 text-zinc-400 hover:border-white/10 hover:bg-neutral-900'
                          }`}
                        >
                          <span className="block text-sm font-bold text-white mb-1 font-display transition-colors group-hover:text-brand-yellow">{item.label}</span>
                          <span className="block text-[11px] text-zinc-500 font-sans leading-tight">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Body Structure */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-xs font-black font-display">2</div>
                      <label className="block text-sm font-display font-black text-zinc-200 uppercase tracking-wider">
                        2. TYPE DE STRUCTURE / CARROSSERIE
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'insulated_refrigerated', label: 'Isotherme Renforcée (Frigo)', desc: 'Panneaux sandwich isolants étanches' },
                        { id: 'standard_box_dry', label: 'Fourgon Tôlé Sec Standard', desc: 'Sans isolation thermique' },
                        { id: 'heavy_duty_tipper', label: 'Benne Hydraulique Renforcée', desc: 'Soudure d’acier robuste pour vrac' },
                        { id: 'subframe_only', label: 'Faux-châssis Seul pré-galvanisé', desc: 'Pour recevoir une carrosserie tierce' }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          id={`radio-body-${item.id}`}
                          onClick={() => handleSelectRadio('bodyType', item.id)}
                          className={`p-4 rounded-xl text-left border transition-all duration-200 group relative ${
                            formData.bodyType === item.id
                              ? 'bg-brand-yellow/10 border-brand-yellow text-white shadow-md shadow-brand-yellow/5'
                              : 'bg-neutral-900/50 border-white/5 text-zinc-400 hover:border-white/10 hover:bg-neutral-900'
                          }`}
                        >
                          <span className="block text-sm font-bold text-white mb-1 font-display transition-colors group-hover:text-brand-yellow">{item.label}</span>
                          <span className="block text-[11px] text-zinc-500 font-sans leading-tight">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Refrigeration system */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-xs font-black font-display">3</div>
                      <label className="block text-sm font-display font-black text-zinc-200 uppercase tracking-wider">
                        3. CAPACITÉ DE RÉFRIGÉRATION / FROID
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'none', label: 'Aucune Réfrigération Seule Isotherme', desc: 'Pour conservations de courtes distances' },
                        { id: 'positive_fresh', label: 'Froid Positif Frais (+2°C à +8°C)', desc: 'Fruits, légumes, pharmacie, fleurs' },
                        { id: 'negative_deep_freeze', label: 'Froid Négatif Surgelé (-20°C)', desc: 'Viandes, poissons, glaces, surgelés' },
                        { id: 'dual_multi_temp', label: 'Bi-Température Compartimenté', desc: 'Multizones frais + congelé simultané' }
                      ].map((item) => {
                        const disabled = formData.bodyType !== 'insulated_refrigerated' && item.id !== 'none';
                        return (
                          <button
                            type="button"
                            disabled={disabled}
                            key={item.id}
                            id={`radio-frigo-${item.id}`}
                            onClick={() => handleSelectRadio('frigoCapacity', item.id)}
                            className={`p-4 rounded-xl text-left border transition-all duration-200 group relative ${
                              disabled 
                                ? 'opacity-25 cursor-not-allowed bg-neutral-950/20 border-white/5'
                                : formData.frigoCapacity === item.id
                                  ? 'bg-brand-yellow/10 border-brand-yellow text-white shadow-md'
                                  : 'bg-neutral-900/50 border-white/5 text-zinc-400 hover:border-white/10 hover:bg-neutral-900'
                            }`}
                          >
                            <span className="block text-sm font-bold text-white mb-1 font-display transition-colors group-hover:text-brand-yellow">{item.label}</span>
                            <span className="block text-[11px] text-zinc-500 font-sans leading-tight">{item.desc}</span>
                          </button>
                        );
                      })}
                    </div>
                    {formData.bodyType !== 'insulated_refrigerated' && (
                      <p className="text-amber-500 font-sans text-xs italic mt-2">
                        * L’installation d’un groupe frigorifique nécessite une structure & carrosserie de type "Isotherme Renforcée (Frigo)".
                      </p>
                    )}
                  </div>

                  {/* Step 4: Trucks count */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-xs font-black font-display">4</div>
                      <label className="block text-sm font-display font-black text-zinc-200 uppercase tracking-wider">
                        4. NOMBRE DE CAMIONS À ÉQUIPER
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="number"
                          name="truckCount"
                          id="inp-truck-count"
                          min="1"
                          max="50"
                          value={formData.truckCount}
                          onChange={handleChange}
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans focus:outline-none focus:border-brand-yellow text-base font-bold transition-all"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="flex items-center gap-3 bg-neutral-900 border border-white/10 hover:border-white/20 p-4 rounded-xl cursor-pointer transition-colors w-full select-none">
                          <input
                            type="checkbox"
                            name="hasSubframeIncluded"
                            id="chk-subframe"
                            checked={formData.hasSubframeIncluded}
                            onChange={handleChange}
                            className="w-5 h-5 accent-brand-yellow rounded focus:ring-0 focus:outline-none"
                          />
                          <div>
                            <span className="block text-xs font-display font-bold text-white uppercase tracking-wider">Faux-châssis galva</span>
                            <span className="block text-[10px] text-zinc-400 font-sans leading-none">Traitement anticorrosion</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Optional instructions */}
                  <div className="space-y-3">
                    <label className="block text-xs font-display font-extrabold text-zinc-400 uppercase tracking-widest">
                      INDICATIONS PARTICULIÈRES (OPTIONNEL)
                    </label>
                    <textarea
                      name="notes"
                      id="txt-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Ex: Demande de hayon élévateur, séparation par cloison amovible mobile, double porte latérale, rayonnage d'étagères repliables..."
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-brand-yellow placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                </div>

                {/* RIGHT COLUMN: Configuration recap & CTA (No prices) */}
                <div className="lg:col-span-5 self-stretch lg:sticky lg:top-28">
                  <div className="bg-white text-neutral-900 rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                    
                    {/* Decorative yellow header rim */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow"></div>
                    
                    <div className="space-y-6 pt-2">
                      <div className="border-b border-zinc-100 pb-4">
                        <span className="text-[10px] font-display font-black text-brand-yellow bg-neutral-900 text-white px-2.5 py-1 rounded inline-block uppercase tracking-wider mb-2">
                          FICHE TECHNIQUE DE DEVIS
                        </span>
                        <h4 className="font-display font-black text-xl text-neutral-900">
                          Récapitulatif de Configuration
                        </h4>
                        <p className="text-xs text-zinc-500 font-sans mt-0.5">
                          Constantine, Algérie &bull; {new Date().toLocaleDateString('fr-FR')}
                        </p>
                      </div>

                      {/* Config details list */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">1. Véhicule & Châssis</span>
                          <div className="flex gap-2 items-start">
                            <Truck className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">{truckLabels[formData.truckType]}</span>
                          </div>
                        </div>

                        <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">2. Type de Structure</span>
                          <div className="flex gap-2 items-start">
                            <Layers className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">{bodyLabels[formData.bodyType]}</span>
                          </div>
                        </div>

                        <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">3. Volume Froid / Réfrigération</span>
                          <div className="flex gap-2 items-start">
                            <Snowflake className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">{frigoLabels[formData.frigoCapacity]}</span>
                          </div>
                        </div>

                        <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">4. Quantité de Véhicules</span>
                          <div className="flex gap-2 items-center">
                            <Check className="h-4 w-4 text-emerald-600 font-bold shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">
                              {formData.truckCount} camion{formData.truckCount > 1 ? 's' : ''} à équiper
                            </span>
                          </div>
                        </div>

                        {formData.hasSubframeIncluded && (
                          <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">Options Additionnelles</span>
                            <div className="flex gap-2 items-center text-xs text-neutral-700">
                              <Check className="h-3.5 w-3.5 text-emerald-600 font-bold shrink-0" />
                              <span>Faux-châssis galvanisé traité anti-corrosion</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Technical specifications (Delay & Warranty) without any price */}
                      <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100 space-y-3 mt-6">
                        <div className="flex justify-between items-center text-xs border-b border-zinc-200/60 pb-2">
                          <div className="flex items-center gap-1.5 text-zinc-500">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>Délai d’Atelier Estimatif :</span>
                          </div>
                          <span className="font-extrabold text-neutral-900">{estimate.durationInDays} Jours ouvrés</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-b border-zinc-200/60 pb-2">
                          <div className="flex items-center gap-1.5 text-zinc-500">
                            <Shield className="w-3.5 h-3.5 shrink-0" />
                            <span>Garantie Carole :</span>
                          </div>
                          <span className="font-extrabold text-neutral-900">{estimate.warrantyMonths} Mois</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center gap-1.5 text-zinc-500">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>Lieu de livraison :</span>
                          </div>
                          <span className="font-extrabold text-neutral-900">Atelier Constantine</span>
                        </div>
                      </div>

                      {/* Client details section in light mode */}
                      <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200/80 space-y-4 mt-6">
                        <div className="flex items-center gap-2 pb-2 border-b border-zinc-200/60">
                          <ClipboardList className="h-4 w-4 text-neutral-900" />
                          <span className="block text-xs font-display font-black text-neutral-950 uppercase tracking-widest">
                            Vos coordonnées professionnelles
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1">Nom Complet *</label>
                            <input
                              required
                              type="text"
                              name="clientName"
                              id="client-name"
                              placeholder="Ex: Karim Benhadj"
                              value={formData.clientName}
                              onChange={handleChange}
                              className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1">Téléphone mobile *</label>
                            <input
                              required
                              type="tel"
                              name="clientPhone"
                              id="client-phone"
                              placeholder="Ex: 0550 XX XX XX"
                              value={formData.clientPhone}
                              onChange={handleChange}
                              className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1">Adresse Email</label>
                            <input
                              type="email"
                              name="clientEmail"
                              id="client-email"
                              placeholder="Ex: contact@entreprise.dz"
                              value={formData.clientEmail}
                              onChange={handleChange}
                              className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1">Nom Entreprise (Optionnel)</label>
                            <input
                              type="text"
                              name="clientCompany"
                              id="client-company"
                              placeholder="Ex: SARL Trans Logistics Froid"
                              value={formData.clientCompany}
                              onChange={handleChange}
                              className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors"
                            />
                          </div>
                        </div>
                        {submitError && (
                          <p className="text-red-500 font-sans text-xs font-semibold">{submitError}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      {/* Notice */}
                      <p className="text-[11px] text-zinc-500 font-sans leading-relaxed text-center italic bg-zinc-50 p-3.5 rounded-lg border border-zinc-100">
                        💬 Pour vous garantir la meilleure qualité au meilleur prix d’Algérie, chaque devis est calculé sur-mesure par nos ingénieurs d’assemblage selon vos besoins réels.
                      </p>

                      {/* Demander un devis central button */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-brand-yellow hover:bg-neutral-900 text-brand-charcoal hover:text-brand-yellow font-display font-black text-sm uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="h-4 w-4 shrink-0" />
                        <span>Demander un devis</span>
                      </button>
                    </div>

                  </div>
                </div>

              </form>
            ) : (
              /* Submission success screen (Without any pricing output) */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                tabIndex={0}
                className="bg-neutral-900 border border-brand-yellow/20 p-8 sm:p-12 rounded-2xl text-center space-y-8 max-w-2xl mx-auto focus:outline-none"
              >
                <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto border border-brand-yellow/30 relative">
                  <Check className="h-10 w-10 text-brand-yellow" />
                  <div className="absolute inset-0 rounded-full bg-brand-yellow/10 animate-ping opacity-75"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-display font-black text-white">Demande de Devis Envoyée !</h3>
                  <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto">
                    Merci <span className="text-white font-bold">{formData.clientName}</span>. Votre demande de configuration a été enregistrée avec succès sous la référence unique <strong className="text-brand-yellow font-mono">#CI-DEV-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                  </p>
                </div>

                <div className="bg-neutral-950 p-6 rounded-xl border border-white/5 text-left space-y-4 max-w-md mx-auto font-sans text-xs">
                  <span className="block text-[10px] font-display font-black uppercase text-brand-yellow tracking-widest pb-2 border-b border-white/5">
                    RÉCAPITULATIF REÇU
                  </span>
                  
                  <div className="grid grid-cols-2 gap-y-3 text-zinc-300">
                    <span className="text-zinc-500">Flotte configurée :</span>
                    <span className="text-white font-semibold text-right">
                      {formData.truckCount}x {truckLabels[formData.truckType]}
                    </span>

                    <span className="text-zinc-500">Structure / Carrosserie :</span>
                    <span className="text-white font-semibold text-right">
                      {bodyLabels[formData.bodyType]}
                    </span>

                    <span className="text-zinc-500">Système Froid :</span>
                    <span className="text-white font-semibold text-right">
                      {frigoLabels[formData.frigoCapacity]}
                    </span>

                    {formData.hasSubframeIncluded && (
                      <>
                        <span className="text-zinc-500">Sous-chassis :</span>
                        <span className="text-white font-semibold text-right">Faux-châssis galva inclus</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20 max-w-md mx-auto text-center">
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    💡 Un ingénieur de notre bureau d’études de <strong className="text-white">Constantine</strong> prépare l’étude de prix de votre projet et vous contactera au <strong className="text-brand-yellow">{formData.clientPhone}</strong> sous 60 minutes pour affiner les schémas techniques de construction de vos camions.
                  </p>
                </div>

                <button
                  type="button"
                  id="btn-re-simulate"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg mx-auto transition-all text-xs font-semibold uppercase tracking-wider font-display border border-white/10"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Faire une autre demande de devis</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
