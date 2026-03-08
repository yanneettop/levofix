import { useEffect, useRef, useState } from 'react';
import { Phone, Calendar, Clock, User, MapPin, Car, MessageSquare, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/447880037742?text=Hi%20Denis%2C%20I%20need%20help%20with%20my%20car.';

interface FormData {
  name: string;
  phone: string;
  vehicle: string;
  issue: string;
  location: string;
  preferredTime: string;
}

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSubmitted(false);
    setFormData({ name: '', phone: '', vehicle: '', issue: '', location: '', preferredTime: '' });
  };

  const inputClass =
    'w-full bg-brand-darker border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white ' +
    'placeholder-white/25 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red ' +
    'transition-colors text-sm';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#1c0e0e] overflow-hidden"
    >
      {/* Top red line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-4xl mx-auto">

          {/* CTA Card */}
          <div className="reveal opacity-0 relative rounded-3xl bg-brand-darker border border-white/5 overflow-hidden p-8 lg:p-14">
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />

            <div className="text-center">
              <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
                Need Help With{' '}
                <span className="text-gradient-red">Your Car?</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                Call Denis at Levofix LTD for diagnostics, servicing and mobile
                repairs across London. Fast response, honest advice.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a
                  href="tel:07880037742"
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-base px-8 py-4"
                >
                  <Phone className="w-5 h-5" />
                  Call Now — 07880 037742
                </a>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="flex items-center gap-2 w-full sm:w-auto justify-center text-base px-8 py-4
                             border-2 border-white/30 text-white font-montserrat font-semibold rounded-lg
                             hover:border-white/60 hover:bg-white/5 transition-all duration-300 active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  Book Diagnostic
                </button>
              </div>

              {/* Contact Info Row */}
              <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-white/5">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="text-white/40 text-xs uppercase tracking-wider">Phone</span>
                  <a
                    href="tel:07880037742"
                    className="text-white font-semibold hover:text-brand-red transition-colors text-sm"
                  >
                    07880 037742
                  </a>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="text-white/40 text-xs uppercase tracking-wider">Hours</span>
                  <span className="text-white font-semibold text-sm">Mon–Fri: 8:30am – 6:00pm</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="text-white/40 text-xs uppercase tracking-wider">Based In</span>
                  <span className="text-white font-semibold text-sm">Poplar, East London</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-brand-dark border border-white/10 rounded-2xl
                          shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div>
                <h3 className="text-white font-bold text-xl">Book a Diagnostic</h3>
                <p className="text-white/40 text-sm mt-0.5">Denis will call you back to confirm</p>
              </div>
              <button
                onClick={closeForm}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center
                           hover:bg-white/10 transition-colors text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-brand-red" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">Request Sent!</h4>
                <p className="text-white/60 text-sm mb-6">
                  Denis will call you back shortly to confirm your booking.
                </p>
                <button onClick={closeForm} className="btn-primary w-full justify-center">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-1.5 block">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="John Smith"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-1.5 block">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      className={inputClass} placeholder="07700 000000"
                    />
                  </div>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-1.5 block">
                    Your Vehicle *
                  </label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text" name="vehicle" required
                      value={formData.vehicle} onChange={handleChange}
                      className={inputClass} placeholder="e.g. Ford Focus 2018"
                    />
                  </div>
                </div>

                {/* Issue */}
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-1.5 block">
                    Vehicle Issue *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/30" />
                    <textarea
                      name="issue" required rows={3}
                      value={formData.issue} onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Describe the problem with your car..."
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-1.5 block">
                    Your Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text" name="location" required
                      value={formData.location} onChange={handleChange}
                      className={inputClass} placeholder="e.g. Stratford, E15"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-1.5 block">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime} onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" className="bg-brand-dark">Select a time...</option>
                      <option value="morning" className="bg-brand-dark">Morning (8:30am – 12pm)</option>
                      <option value="afternoon" className="bg-brand-dark">Afternoon (12pm – 4pm)</option>
                      <option value="evening" className="bg-brand-dark">Late afternoon (4pm – 6pm)</option>
                      <option value="asap" className="bg-brand-dark">As soon as possible</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4 text-base mt-2">
                  Send Booking Request
                </button>

                <p className="text-white/30 text-xs text-center">
                  Mon–Fri 8:30am–6pm · Denis will call to confirm
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating WhatsApp + Call buttons (mobile) */}
      <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center gap-3 px-4 lg:hidden">
        <a
          href="tel:07880037742"
          className="flex-1 max-w-[180px] flex items-center justify-center gap-2 bg-brand-red text-white
                     font-montserrat font-semibold rounded-xl py-3.5 shadow-glowRed
                     hover:bg-brand-redLight transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[180px] flex items-center justify-center gap-2 bg-[#25D366] text-white
                     font-montserrat font-semibold rounded-xl py-3.5 shadow-lg
                     hover:bg-[#20b858] transition-colors"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
