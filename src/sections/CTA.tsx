import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Clock, User, MapPin, Car, MessageSquare, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/447880037742?text=Hi%2C%20I%20need%20help%20with%20my%20car.';

interface FormData {
  name: string;
  phone: string;
  vehicle: string;
  issue: string;
  location: string;
  preferredTime: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    vehicle: '',
    issue: '',
    location: '',
    preferredTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => {
    const preferredTimeLabel =
      {
        morning: 'Morning (8:30am - 12pm)',
        afternoon: 'Afternoon (12pm - 4pm)',
        evening: 'Late afternoon (4pm - 6pm)',
        asap: 'As soon as possible',
      }[formData.preferredTime] || 'Not specified';

    return [
      'Hi, I would like to book a diagnostic with Levofix LTD.',
      '',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Vehicle: ${formData.vehicle}`,
      `Location: ${formData.location}`,
      `Preferred time: ${preferredTimeLabel}`,
      '',
      `Issue: ${formData.issue}`,
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/447880037742?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSubmitted(false);
    setFormData({ name: '', phone: '', vehicle: '', issue: '', location: '', preferredTime: '' });
  };

  const inputClass =
    'w-full bg-white/[0.03] border border-white/10 py-3.5 pl-11 pr-4 text-white font-outfit text-sm ' +
    'placeholder-white/20 focus:border-brand-red/50 focus:outline-none focus:ring-0 ' +
    'transition-colors duration-300';

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-4xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="rule-accent" />
              <span className="text-brand-redLight text-xs font-outfit font-semibold tracking-[0.3em] uppercase">
                Get In Touch
              </span>
              <div className="rule-accent" />
            </div>
            <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] tracking-wide mb-6">
              NEED HELP WITH<br />
              <span className="text-gradient-red">YOUR CAR?</span>
            </h2>
            <p className="text-white/35 text-base font-outfit font-light max-w-xl mx-auto">
              Contact Levofix LTD for diagnostics, servicing and mobile
              repairs across London. Fast response, honest advice.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="tel:07880037742"
              className="btn-primary flex items-center gap-3 w-full sm:w-auto justify-center text-sm px-10 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
            <motion.button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-3 w-full sm:w-auto justify-center text-sm px-10 py-4
                         border border-brand-blueElectric/25 text-white font-outfit font-semibold uppercase tracking-wider
                         hover:border-brand-blueElectric/50 hover:bg-brand-blueElectric/5
                         active:scale-95"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Calendar className="w-4 h-4 text-brand-blueElectric" />
              Book Diagnostic
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="grid sm:grid-cols-3 gap-[1px] bg-white/5 border border-white/5"
          >
            {[
              { icon: Phone, label: 'Phone', value: '07880 037742', href: 'tel:07880037742' },
              { icon: Clock, label: 'Hours', value: 'Mon-Fri: 8:30am - 6:00pm' },
              { icon: MapPin, label: 'Based In', value: 'Poplar, East London' },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#050505] flex flex-col items-center gap-3 py-8 px-4 group hover:bg-white/[0.02] transition-colors duration-500 cursor-default"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-brand-red/30 transition-colors duration-500">
                  <Icon className="w-4 h-4 text-brand-redLight" />
                </div>
                <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-outfit">{label}</span>
                {href ? (
                  <a href={href} className="text-white/70 font-outfit font-semibold text-sm hover:text-brand-redLight transition-colors">
                    {value}
                  </a>
                ) : (
                  <span className="text-white/70 font-outfit font-semibold text-sm text-center">{value}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={(e) => { if (e.target === e.currentTarget) closeForm(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/5 max-h-[90vh] overflow-y-auto"
            >
              {/* Red top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-red to-brand-redLight" />

              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <div>
                  <h3 className="font-bebas text-3xl text-white tracking-wider">BOOK A DIAGNOSTIC</h3>
                  <p className="text-white/30 text-xs font-outfit mt-1">Our team will call you back to confirm</p>
                </div>
                <motion.button
                  onClick={closeForm}
                  aria-label="Close booking form"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center
                             hover:border-brand-red/30 transition-colors text-white/40 hover:text-white"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 text-center"
                  >
                    <div className="w-16 h-16 border border-brand-red/30 flex items-center justify-center mx-auto mb-5">
                      <Phone className="w-7 h-7 text-brand-redLight" />
                    </div>
                    <h4 className="font-bebas text-3xl text-white tracking-wider mb-2">REQUEST SENT!</h4>
                    <p className="text-white/40 text-sm font-outfit mb-6">
                      Your details have been prepared in WhatsApp. Send the message there and our team will call you back to confirm.
                    </p>
                    <button onClick={closeForm} className="btn-primary w-full justify-center">
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="p-6 space-y-4"
                  >
                    {[
                      { label: 'Your Name', name: 'name', type: 'text', placeholder: 'John Smith', icon: User, required: true },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '07700 000000', icon: Phone, required: true },
                      { label: 'Your Vehicle', name: 'vehicle', type: 'text', placeholder: 'e.g. Ford Focus 2018', icon: Car, required: true },
                      { label: 'Your Location', name: 'location', type: 'text', placeholder: 'e.g. Stratford, E15', icon: MapPin, required: true },
                    ].map(({ label, name, type, placeholder, icon: Icon, required }) => (
                      <div key={name}>
                        <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-outfit mb-1.5 block">
                          {label} {required && '*'}
                        </label>
                        <div className="relative">
                          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                          <input
                            type={type}
                            name={name}
                            required={required}
                            value={formData[name as keyof FormData]}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder={placeholder}
                          />
                        </div>
                      </div>
                    ))}

                    {/* Issue textarea */}
                    <div>
                      <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-outfit mb-1.5 block">
                        Vehicle Issue *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/15" />
                        <textarea
                          name="issue"
                          required
                          rows={3}
                          value={formData.issue}
                          onChange={handleChange}
                          className={`${inputClass} resize-none`}
                          placeholder="Describe the problem with your car..."
                        />
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-outfit mb-1.5 block">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="" className="bg-[#0a0a0a]">Select a time...</option>
                          <option value="morning" className="bg-[#0a0a0a]">Morning (8:30am - 12pm)</option>
                          <option value="afternoon" className="bg-[#0a0a0a]">Afternoon (12pm - 4pm)</option>
                          <option value="evening" className="bg-[#0a0a0a]">Late afternoon (4pm - 6pm)</option>
                          <option value="asap" className="bg-[#0a0a0a]">As soon as possible</option>
                        </select>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary w-full justify-center py-4 text-sm mt-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Booking Request
                    </motion.button>

                    <p className="text-white/20 text-[10px] text-center font-outfit tracking-wider">
                      Mon-Fri 8:30am-6pm · We will call to confirm
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp button (mobile) */}
      <div className="fixed bottom-5 right-5 z-30 lg:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Levofix on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]
                     text-white shadow-[0_12px_34px_rgba(37,211,102,0.35)]
                     transition-transform duration-300 hover:scale-105 hover:bg-[#20b858]
                     active:scale-95"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTA;
