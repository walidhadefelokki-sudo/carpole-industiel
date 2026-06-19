import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ShieldAlert, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
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
      q: "Qu’est-ce que la certification thermique ATP et d’Algérie ?",
      a: "La certification de conformité isotherme est un document réglementaire obligatoire délivré après montage par notre service agréé. Elle atteste que notre paroi et le groupe frigorifique maintiennent la température (-20°C ou +4°C) requise pour la santé publique face aux températures caniculaires algériennes."
    },
    {
      q: "Quelles marques de frigos installez-vous sur les camions ?",
      a: "Nous installons et raccordons des groupes frigorifiques de classe mondiale tels que Carrier, Thermo King, Zanotti et Dongin Thermo. Notre atelier possède toutes les buses, faisceaux d’origine et calculateurs numériques de reprogrammation pour ces marques."
    },
    {
      q: "Proposez-vous le service d’entretien de la carrosserie seulement ?",
      a: "Oui absolument. En dehors de l’assemblage initial, notre atelier effectue la re-conception, la réparation des ponts thermiques de cloisons endommagées, la soudure inox du plancher, le changement de rideaux à lanières et la correction des étanchéités de portes arrières."
    },
    {
      q: "Quels sont vos délais d’intervention à Constantine ?",
      a: "Pour une simple pose de groupe frigorifique, le délai est de 2 à 4 jours ouvrés. Pour une structure de carrosserie isotherme complète fabriquée sur-mesure (panneaux + faux-châssis + frigo), comptez entre 6 et 14 jours selon le volume du châssis carrossé."
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !phone) {
      alert("Veuillez saisir au moins votre nom et votre numéro de téléphone.");
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
            Contact & Support Technique
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-charcoal tracking-tight">
            Prêt à Équiper Votre Véhicule ?
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-lg leading-relaxed">
            Contactez notre bureau d’études techniques à Constantine ou venez directement nous rencontrer pour un audit physique de vos camions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT 5 COLUMNS: Contact details, business hours & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Coordination details element */}
            <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-6">
              <h3 className="font-display font-black text-lg text-brand-charcoal border-b border-zinc-200 pb-3">
                Coordonnées de l'Atelier
              </h3>
              
              <div className="space-y-4">
                
                {/* Physical Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <MapPin className="h-5 w-5 text-brand-yellow font-bold" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">Adresse Physique</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1">Zone Industrielle Palma, RN 5, Constantine, 25000, Algérie</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <Phone className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">Service Commercial & Atelier</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1 font-semibold">+213 (0) 31 66 12 34 <span className="text-zinc-400 font-normal">(Fixe Constantine)</span></p>
                    <p className="font-sans text-xs text-zinc-600 font-semibold">+213 (0) 550 88 14 22 <span className="text-zinc-400 font-normal">(Mobile)</span></p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <Mail className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">Support par Courriel</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1 font-mono">contact@carpole-industriel.dz</p>
                    <p className="font-sans text-xs text-zinc-500 font-mono">medi.belabed@gmail.com</p>
                  </div>
                </div>

                {/* Work timetable */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-brand-yellow/10 text-brand-charcoal rounded-lg shrink-0">
                    <Clock className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-neutral-800">Heures d’Ouverture</h4>
                    <p className="font-sans text-xs text-zinc-600 mt-1">Dimanche - Jeudi : 08h00 - 17h00</p>
                    <p className="font-sans text-xs text-zinc-600">Samedi (Maintenance Urgente) : 08h00 - 12h00</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive FAQ Accordion */}
            <div className="space-y-3">
              <h3 className="font-display font-black text-lg text-brand-charcoal mb-4">
                Questions Fréquentes
              </h3>
              
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border border-zinc-200 rounded-xl overflow-hidden bg-white">
                    <button
                      type="button"
                      id={`faq-toggle-${index}`}
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center p-4 text-left font-display font-bold text-sm text-neutral-900 bg-zinc-50 hover:bg-zinc-100 transition-colors"
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
                          <p className="p-4 font-sans text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 bg-white">
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
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display font-black text-xl text-white mb-1">Écrivez à Nos Ingénieurs</h3>
                      <p className="font-sans text-xs text-zinc-400">Remplissez ce formulaire d'étude de faisabilité d'atelier.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5">Nom Complet *</label>
                        <input
                          required
                          type="text"
                          id="form-contact-name"
                          placeholder="Ex: Salim Belkacem"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5">Téléphone *</label>
                        <input
                          required
                          type="tel"
                          id="form-contact-phone"
                          placeholder="Ex: 0550 12 34 56"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5">E-mail</label>
                        <input
                          type="email"
                          id="form-contact-email"
                          placeholder="Email professionnel"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5">Sujet d’intérêt</label>
                        <select
                          id="form-contact-subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow appearance-none"
                        >
                          <option value="carrosserie">Construction de Carrosserie</option>
                          <option value="frigo">Montage de Groupe Frigo</option>
                          <option value="maintenance">Maintenance ou Réparation d’urgence</option>
                          <option value="autre">Autre demande industrielle</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest mb-1.5">Détaillez votre projet ou dimensions de châssis</label>
                      <textarea
                        id="form-contact-msg"
                        rows={4}
                        placeholder="Précisez la marque de votre véhicule, l'année du modèle, le volume utile souhaité, ou s'il s'agit d'une cargaison spécifique (produits laitiers, crème glacée, viandes suspendues)..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-yellow"
                      />
                    </div>

                    <button
                      type="submit"
                      id="btn-send-message"
                      className="w-full py-3.5 bg-brand-yellow hover:bg-amber-400 text-brand-charcoal text-center font-display font-black text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Envoyer ma demande technique</span>
                      <Send className="h-4 w-4" />
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
                      <h4 className="font-display font-black text-2xl text-white">Message Reçu avec Succès !</h4>
                      <p className="font-sans text-sm text-zinc-400 max-w-md mx-auto">
                        Merci <span className="text-white font-bold">{formName}</span>. Votre demande de conseil a été transmise directement à notre directeur de travaux à Constantine.
                      </p>
                    </div>

                    <p className="font-sans text-xs text-zinc-500 italic max-w-sm mx-auto">
                      Un technicien spécialisé va analyser votre volume de véhicule et vous répondre par e-mail ou par téléphone sous 24 heures maximum.
                    </p>

                    <button
                      type="button"
                      id="btn-another-msg"
                      onClick={handleResetForm}
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg font-display text-xs font-bold uppercase transition-colors"
                    >
                      Écrire un autre message
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
