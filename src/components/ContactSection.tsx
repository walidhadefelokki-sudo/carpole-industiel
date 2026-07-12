import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t, isRtl } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('carrosserie');
  const [message, setMessage] = useState('');

  // Accordion FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t('contact.faq.0.q'),
      a: t('contact.faq.0.a')
    },
    {
      q: t('contact.faq.1.q'),
      a: t('contact.faq.1.a')
    },
    {
      q: t('contact.faq.2.q'),
      a: t('contact.faq.2.a')
    },
    {
      q: t('contact.faq.3.q'),
      a: t('contact.faq.3.a')
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !phone) {
      alert(t('quote.error_fill'));
      return;
    }
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormName('');
    setPhone('');
    setEmail('');
    setSubject('carrosserie');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-display font-extrabold text-brand-yellow bg-neutral-900 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
            {isRtl ? 'الاتصال والدعم الفني والمهني' : 'Contact & Support Technique'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight leading-tight">
            {t('contact.title')}
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-lg leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT 5 COLUMNS: Contact details, business hours & FAQ */}
          <div className="lg:col-span-5 space-y-8">

            {/* Google Maps Embed Frame */}
            <div className="w-full h-64 bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm relative group">
              <iframe
                title="Localisation Carpôle Industriel - Constantine"
                src="https://maps.google.com/maps?q=8JVR%2B9C6%2C%20Constantine&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-3 left-3 bg-neutral-900/90 text-white text-[10px] font-mono px-2.5 py-1 rounded border border-white/10 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping animate-duration-1000"></span>
                <span>8JVR+9C6, Constantine</span>
              </div>
            </div>
            
            {/* Coordination details element */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-6">
              <h3 className={`font-display font-black text-lg text-brand-charcoal border-b border-zinc-200 pb-3 ${isRtl ? 'text-right' : 'text-left'}`}>
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4">
                
                {/* Physical Location */}
                <div className={`flex gap-4 items-start ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <MapPin className="h-5 w-5 text-brand-yellow font-bold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">{t('contact.info.addr')}</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1">{t('contact.info.addr_desc')}</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className={`flex gap-4 items-start ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <Phone className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">{t('contact.info.tel')}</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1 font-semibold" dir="ltr">
                      0770 97 32 53
                    </p>
                    <p className="font-sans text-xs text-zinc-600 font-semibold" dir="ltr">
                      0770 97 32 03
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className={`flex gap-4 items-start ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <Mail className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">{t('contact.info.email')}</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1 font-mono">a.derrouiche@motorest-dz.com</p>
                  </div>
                </div>

                {/* Work timetable */}
                <div className={`flex gap-4 items-start ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <Clock className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">{t('contact.info.hours')}</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1">{t('contact.info.hours_desc')}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive FAQ Accordion */}
            <div className="space-y-3">
              <h3 className={`font-display font-black text-lg text-brand-charcoal mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                {t('contact.faq.title')}
              </h3>
              
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border border-zinc-200 rounded-xl overflow-hidden bg-white">
                    <button
                      type="button"
                      id={`faq-toggle-${index}`}
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className={`w-full flex justify-between items-center p-4 font-display font-bold text-sm text-neutral-900 bg-zinc-50 hover:bg-zinc-100 transition-colors ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className={`p-4 font-sans text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 bg-white ${isRtl ? 'text-right' : 'text-left'}`}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT 7 COLUMNS: Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-white/5 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full filter blur-3xl pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <form onSubmit={handleContactSubmit} className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <div>
                      <h3 className="font-display font-black text-xl text-white mb-1">
                        {isRtl ? 'راسل مهندسي ورشتنا' : 'Écrivez à Nos Ingénieurs'}
                      </h3>
                      <p className="font-sans text-xs text-zinc-400">
                        {isRtl ? 'يرجى ملء الاستمارة أدناه لإجراء دراسة الجدوى وتخطيط أسطول شاحناتك.' : 'Remplissez ce formulaire d\'étude de faisabilité d\'atelier.'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>{t('contact.form.name')} *</label>
                        <input
                          required
                          type="text"
                          id="form-contact-name"
                          placeholder={t('contact.form.placeholder.name')}
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className={`w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow ${isRtl ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>{isRtl ? 'الهاتف الجوال *' : 'Téléphone *'}</label>
                        <input
                          required
                          type="tel"
                          id="form-contact-phone"
                          placeholder={isRtl ? 'مثال: XX XX XX 0550' : 'Ex: 0550 12 34 56'}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow ${isRtl ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>{t('contact.form.email')}</label>
                        <input
                          type="email"
                          id="form-contact-email"
                          placeholder={t('contact.form.placeholder.email')}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow ${isRtl ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                      
                      <div>
                        <label className={`block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>{t('contact.form.subject')}</label>
                        <select
                          id="form-contact-subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={`w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow appearance-none ${isRtl ? 'text-right' : 'text-left'}`}
                        >
                          <option value="carrosserie">{isRtl ? 'بناء وتجهيز الهيكل' : 'Construction de Carrosserie'}</option>
                          <option value="frigo">{isRtl ? 'تركيب وحدة تبريد' : 'Montage de Groupe Frigo'}</option>
                          <option value="maintenance">{isRtl ? 'صيانة أو إصلاح عاجل' : 'Maintenance ou Réparation d’urgence'}</option>
                          <option value="autre">{isRtl ? 'طلب صناعي آخر' : 'Autre demande industrielle'}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                        {isRtl ? 'تفاصيل مشروعك أو أبعاد ومواصفات الشاسيه' : 'Détaillez votre projet ou dimensions de châssis'}
                      </label>
                      <textarea
                        id="form-contact-msg"
                        rows={4}
                        placeholder={t('contact.form.placeholder.message')}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow ${isRtl ? 'text-right' : 'text-left'}`}
                      />
                    </div>

                    <button
                      type="submit"
                      id="btn-send-message"
                      className="w-full py-4 bg-brand-yellow hover:bg-neutral-950 text-brand-charcoal hover:text-brand-yellow text-center font-display font-black text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{t('contact.form.send')}</span>
                      <Send className={`h-4 w-4 shrink-0 ${isRtl ? 'transform rotate-180' : ''}`} />
                    </button>

                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-8"
                  >
                    <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto border border-brand-yellow">
                      <Check className="h-8 w-8 text-brand-yellow" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-black text-2xl text-white">
                        {isRtl ? 'تم استلام رسالتكم بنجاح!' : 'Message Reçu avec Succès !'}
                      </h4>
                      <p className="font-sans text-sm text-zinc-400 max-w-md mx-auto">
                        {isRtl ? (
                          <>شكراً <span className="text-white font-bold">{formName}</span>. تم إرسال رسالتكم وطلب الدعم الفني مباشرة لمدير ورشتنا في قسنطينة.</>
                        ) : (
                          <>Merci <span className="text-white font-bold">{formName}</span>. Votre demande de conseil a été transmise directement à notre directeur de travaux à Constantine.</>
                        )}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-zinc-500 italic max-w-sm mx-auto">
                      {isRtl ? 'سيقوم مهندس مختص بدراسة تفاصيل مركبتك والرد عليك عبر الهاتف أو البريد الإلكتروني في غضون 24 ساعة كحد أقصى.' : 'Un technicien spécialisé va analyser votre volume de véhicule et vous répondre par e-mail ou par téléphone sous 24 heures maximum.'}
                    </p>

                    <button
                      type="button"
                      id="btn-another-msg"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg font-display text-xs font-bold uppercase transition-colors"
                    >
                      {isRtl ? 'إرسال رسالة أخرى' : 'Écrire un autre message'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
