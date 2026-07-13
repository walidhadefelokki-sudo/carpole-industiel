import React, { useState, useMemo } from 'react';
import { QuoteInput, QuoteEstimate } from '../types';
import { calculateQuote } from '../data';
import { 
   Check, 
   ArrowRight, 
   ArrowLeft,
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
import { useLanguage } from '../context/LanguageContext';

export default function QuoteSimulator() {
  const { t, isRtl } = useLanguage();

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
  const [uniqueRef, setUniqueRef] = useState('');

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
      setSubmitError(t('quote.error_fill'));
      return;
    }
    setSubmitError('');
    setUniqueRef(`#CI-DEV-${Math.floor(1000 + Math.random() * 9000)}`);
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
    carrier_small: t('quote.truck.carrier_small'),
    truck_medium: t('quote.truck.truck_medium'),
    semi_heavy_duty: t('quote.truck.semi_heavy_duty'),
    special_order: t('quote.truck.special_order')
  };

  const bodyLabels: Record<string, string> = {
    insulated_refrigerated: t('quote.body.insulated_refrigerated'),
    standard_box_dry: t('quote.body.standard_box_dry'),
    meat_hanging: t('quote.body.meat_hanging'),
    subframe_only: t('quote.body.subframe_only')
  };

  const frigoLabels: Record<string, string> = {
    none: t('quote.frigo.none'),
    positive_fresh: t('quote.frigo.positive_fresh'),
    negative_deep_freeze: t('quote.frigo.negative_deep_freeze'),
    dual_multi_temp: t('quote.frigo.dual_multi_temp')
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
            {t('quote.free_estimate_badge')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight mt-1">
            {t('quote.title')}
          </h2>
          <p className="text-zinc-400 font-sans mt-4 text-base sm:text-lg leading-relaxed">
            {t('quote.subtitle')}
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
                        {t('quote.step1_title')}
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'carrier_small', label: t('quote.truck.carrier_small'), desc: t('quote.truck.carrier_small.desc') },
                        { id: 'truck_medium', label: t('quote.truck.truck_medium'), desc: t('quote.truck.truck_medium.desc') },
                        { id: 'semi_heavy_duty', label: t('quote.truck.semi_heavy_duty'), desc: t('quote.truck.semi_heavy_duty.desc') },
                        { id: 'special_order', label: t('quote.truck.special_order'), desc: t('quote.truck.special_order.desc') }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          id={`radio-truck-${item.id}`}
                          onClick={() => handleSelectRadio('truckType', item.id)}
                          className={`p-4 rounded-xl text-left border transition-all duration-200 group relative ${isRtl ? 'text-right' : 'text-left'} ${
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
                        {t('quote.step2_title')}
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'insulated_refrigerated', label: t('quote.body.insulated_refrigerated'), desc: t('quote.body.insulated_refrigerated.desc') },
                        { id: 'standard_box_dry', label: t('quote.body.standard_box_dry'), desc: t('quote.body.standard_box_dry.desc') },
                        { id: 'meat_hanging', label: t('quote.body.meat_hanging'), desc: t('quote.body.meat_hanging.desc') },
                        { id: 'subframe_only', label: t('quote.body.subframe_only'), desc: t('quote.body.subframe_only.desc') }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          id={`radio-body-${item.id}`}
                          onClick={() => handleSelectRadio('bodyType', item.id)}
                          className={`p-4 rounded-xl text-left border transition-all duration-200 group relative ${isRtl ? 'text-right' : 'text-left'} ${
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
                        {t('quote.step3_title')}
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'none', label: t('quote.frigo.none'), desc: t('quote.frigo.none.desc') },
                        { id: 'positive_fresh', label: t('quote.frigo.positive_fresh'), desc: t('quote.frigo.positive_fresh.desc') },
                        { id: 'negative_deep_freeze', label: t('quote.frigo.negative_deep_freeze'), desc: t('quote.frigo.negative_deep_freeze.desc') },
                        { id: 'dual_multi_temp', label: t('quote.frigo.dual_multi_temp'), desc: t('quote.frigo.dual_multi_temp.desc') }
                      ].map((item) => {
                        const disabled = formData.bodyType !== 'insulated_refrigerated' && item.id !== 'none';
                        return (
                          <button
                            type="button"
                            disabled={disabled}
                            key={item.id}
                            id={`radio-frigo-${item.id}`}
                            onClick={() => handleSelectRadio('frigoCapacity', item.id)}
                            className={`p-4 rounded-xl text-left border transition-all duration-200 group relative ${isRtl ? 'text-right' : 'text-left'} ${
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
                        {t('quote.body_warning')}
                      </p>
                    )}
                  </div>

                  {/* Step 4: Trucks count */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-white/5">
                      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-xs font-black font-display">4</div>
                      <label className="block text-sm font-display font-black text-zinc-200 uppercase tracking-wider">
                        {t('quote.step4_title')}
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
                          <div className={isRtl ? 'text-right' : 'text-left'}>
                            <span className="block text-xs font-display font-bold text-white uppercase tracking-wider">{t('quote.subframe_option')}</span>
                            <span className="block text-[10px] text-zinc-400 font-sans leading-none">{t('quote.subframe_desc')}</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Step 5: Optional instructions */}
                  <div className="space-y-3">
                    <label className="block text-xs font-display font-extrabold text-zinc-400 uppercase tracking-widest">
                      {t('quote.client.notes')}
                    </label>
                    <textarea
                      name="notes"
                      id="txt-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder={t('quote.notes_placeholder')}
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
                          {t('quote.result.title_badge')}
                        </span>
                        <h4 className="font-display font-black text-xl text-neutral-900">
                          {t('quote.result.recap_title')}
                        </h4>
                        <p className="text-xs text-zinc-500 font-sans mt-0.5">
                          {t('hero.location')} &bull; {new Date().toLocaleDateString(isRtl ? 'ar-DZ' : 'fr-FR')}
                        </p>
                      </div>

                      {/* Config details list */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">{t('quote.result.carrier')}</span>
                          <div className={`flex gap-2 items-start ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                            <Truck className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">{truckLabels[formData.truckType]}</span>
                          </div>
                        </div>

                        <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">{t('quote.result.structure')}</span>
                          <div className={`flex gap-2 items-start ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                            <Layers className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">{bodyLabels[formData.bodyType]}</span>
                          </div>
                        </div>

                        <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">{t('quote.result.cooling')}</span>
                          <div className={`flex gap-2 items-start ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                            <Snowflake className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">{frigoLabels[formData.frigoCapacity]}</span>
                          </div>
                        </div>

                        <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">{t('quote.result.quantity')}</span>
                          <div className={`flex gap-2 items-center ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                            <Check className="h-4 w-4 text-emerald-600 font-bold shrink-0" />
                            <span className="text-sm font-bold text-neutral-800">
                              {formData.truckCount} {isRtl ? 'شاحنة' : 'camion'}{formData.truckCount > 1 && !isRtl ? 's' : ''}
                            </span>
                          </div>
                        </div>

                        {formData.hasSubframeIncluded && (
                          <div className="space-y-1 pt-1.5 border-t border-zinc-100">
                            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">{t('quote.result.additional')}</span>
                            <div className={`flex gap-2 items-center text-xs text-neutral-700 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                              <Check className="h-3.5 w-3.5 text-emerald-600 font-bold shrink-0" />
                              <span>{t('quote.result.subframe_galva')}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Technical specifications (Delay & Warranty) without any price */}
                      <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-100 space-y-3 mt-6">
                        <div className={`flex justify-between items-center text-xs border-b border-zinc-200/60 pb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`flex items-center gap-1.5 text-zinc-500 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            <span>{t('quote.result.delay_label')}</span>
                          </div>
                          <span className="font-extrabold text-neutral-900">{estimate.durationInDays} {t('quote.days_work')}</span>
                        </div>
                        <div className={`flex justify-between items-center text-xs border-b border-zinc-200/60 pb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`flex items-center gap-1.5 text-zinc-500 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                            <Shield className="w-3.5 h-3.5 shrink-0" />
                            <span>{t('quote.result.warranty_label')}</span>
                          </div>
                          <span className="font-extrabold text-neutral-900">{estimate.warrantyMonths} {t('services.mois')}</span>
                        </div>
                        <div className={`flex justify-between items-center text-xs ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`flex items-center gap-1.5 text-zinc-500 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>{t('quote.result.delivery_place')}</span>
                          </div>
                          <span className="font-extrabold text-neutral-900">{t('quote.result.delivery_val')}</span>
                        </div>
                      </div>

                      {/* Client details section in light mode */}
                      <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200/80 space-y-4 mt-6">
                        <div className={`flex items-center gap-2 pb-2 border-b border-zinc-200/60 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                          <ClipboardList className="h-4 w-4 text-neutral-900" />
                          <span className="block text-xs font-display font-black text-neutral-950 uppercase tracking-widest">
                            {t('quote.client.title')}
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className={`block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                              {t('contact.form.name')} *
                            </label>
                            <input
                              required
                              type="text"
                              name="clientName"
                              id="client-name"
                              placeholder={t('quote.client.name_placeholder')}
                              value={formData.clientName}
                              onChange={handleChange}
                              className={`w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}
                            />
                          </div>
                          <div>
                            <label className={`block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                              {t('quote.client.phone')} *
                            </label>
                            <input
                              required
                              type="tel"
                              name="clientPhone"
                              id="client-phone"
                              placeholder={t('quote.client.phone_placeholder')}
                              value={formData.clientPhone}
                              onChange={handleChange}
                              className={`w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}
                            />
                          </div>
                          <div>
                            <label className={`block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                              {t('contact.form.email')}
                            </label>
                            <input
                              type="email"
                              name="clientEmail"
                              id="client-email"
                              placeholder={t('contact.form.placeholder.email')}
                              value={formData.clientEmail}
                              onChange={handleChange}
                              className={`w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}
                            />
                          </div>
                          <div>
                            <label className={`block text-[9px] uppercase font-bold font-sans tracking-wider text-zinc-500 mb-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                              {t('contact.form.company')} ({isRtl ? 'اختياري' : 'Optionnel'})
                            </label>
                            <input
                              type="text"
                              name="clientCompany"
                              id="client-company"
                              placeholder={t('quote.client.company_placeholder')}
                              value={formData.clientCompany}
                              onChange={handleChange}
                              className={`w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-neutral-800 text-xs focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow/30 transition-colors ${isRtl ? 'text-right' : 'text-left'}`}
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
                        💬 {t('quote.result.notice')}
                      </p>

                      {/* Demander un devis central button */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-brand-yellow hover:bg-neutral-900 text-brand-charcoal hover:text-brand-yellow font-display font-black text-sm uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className={`h-4 w-4 shrink-0 ${isRtl ? 'transform rotate-180' : ''}`} />
                        <span>{t('navbar.simulateur')}</span>
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
                  <h3 className="text-3xl font-display font-black text-white">{t('quote.success.title')}</h3>
                  <p className="text-zinc-400 font-sans text-sm max-w-md mx-auto">
                    {t('quote.success.thank_you')
                      .replace('{name}', formData.clientName)
                      .replace('{ref}', uniqueRef)
                    }
                  </p>
                </div>

                <div className="bg-neutral-950 p-6 rounded-xl border border-white/5 text-left space-y-4 max-w-md mx-auto font-sans text-xs">
                  <span className={`block text-[10px] font-display font-black uppercase text-brand-yellow tracking-widest pb-2 border-b border-white/5 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {t('quote.success.recap')}
                  </span>
                  
                  <div className="grid grid-cols-2 gap-y-3 text-zinc-300">
                    <span className={isRtl ? 'text-right' : 'text-left'}>{t('quote.success.flotte')}</span>
                    <span className={`text-white font-semibold ${isRtl ? 'text-left' : 'text-right'}`}>
                      {formData.truckCount}x {truckLabels[formData.truckType]}
                    </span>

                    <span className={isRtl ? 'text-right' : 'text-left'}>{t('quote.success.structure')}</span>
                    <span className={`text-white font-semibold ${isRtl ? 'text-left' : 'text-right'}`}>
                      {bodyLabels[formData.bodyType]}
                    </span>

                    <span className={isRtl ? 'text-right' : 'text-left'}>{t('quote.success.cooling_sys')}</span>
                    <span className={`text-white font-semibold ${isRtl ? 'text-left' : 'text-right'}`}>
                      {frigoLabels[formData.frigoCapacity]}
                    </span>

                    {formData.hasSubframeIncluded && (
                      <>
                        <span className={isRtl ? 'text-right' : 'text-left'}>{t('quote.success.subframe')}</span>
                        <span className={`text-white font-semibold ${isRtl ? 'text-left' : 'text-right'}`}>{t('quote.success.subframe_val')}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-amber-500/10 p-4 rounded-lg border border-amber-500/20 max-w-md mx-auto text-center">
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {t('quote.success.notice').replace('{phone}', formData.clientPhone)}
                  </p>
                </div>

                <button
                  type="button"
                  id="btn-re-simulate"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg mx-auto transition-all text-xs font-semibold uppercase tracking-wider font-display border border-white/10"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>{t('quote.success.btn_another')}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
