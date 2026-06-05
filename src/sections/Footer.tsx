import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/447880037742?text=Hi%2C%20I%20need%20help%20with%20my%20car.';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/Levofix+Ltd+Mobile+Mechanic+Poplar+Unit+13+Green+Shield+Industrial+Estate+Bradfield+Rd+London+E16+2AU';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Car Diagnostics',
  'Full & Interim Servicing',
  'Brake Repair',
  'Suspension Repair',
  'Engine Diagnostics',
  'Fault Finding',
  'Battery Replacement',
  'Pre-Purchase Inspection',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505]">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Main Footer */}
      <div className="w-full section-padding py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >

            {/* Brand Column */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-1">
              <button
                onClick={() => scrollToSection('#home')}
                className="flex items-center gap-3 mb-6 group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <img src="/Logo1.png" alt="Levofix Ltd" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <span className="font-bebas text-2xl text-white block leading-none tracking-wider">
                    LEVOFIX
                  </span>
                  <span className="text-white/25 text-[10px] font-outfit uppercase tracking-[0.2em]">Mobile Mechanic</span>
                </div>
              </button>

              <p className="text-white/25 text-sm leading-relaxed mb-6 font-outfit font-light">
                Professional mobile mechanic team based in Poplar,
                East London. Serving customers across Greater London since 2020.
              </p>

              {/* Social */}
              <div className="flex gap-2">
                {[
                  { icon: Facebook, label: 'Facebook', href: '#' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 border border-white/5 flex items-center justify-center
                               text-white/20 hover:border-brand-red/30 hover:text-brand-redLight
                               transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 border border-white/5 flex items-center justify-center
                             text-white/20 hover:border-[#25D366]/30 hover:text-[#25D366]
                             transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <h4 className="font-bebas text-lg text-white tracking-[0.15em] mb-5">QUICK LINKS</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/25 hover:text-brand-redLight transition-colors duration-300 text-sm font-outfit"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <h4 className="font-bebas text-lg text-white tracking-[0.15em] mb-5">OUR SERVICES</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="text-white/25 hover:text-brand-redLight transition-colors duration-300 text-sm font-outfit text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <h4 className="font-bebas text-lg text-white tracking-[0.15em] mb-5">CONTACT</h4>
              <ul className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: '07880 037742', href: 'tel:07880037742' },
                  { icon: Mail, label: 'Email', value: 'info@levofix.co.uk', href: 'mailto:info@levofix.co.uk' },
                  { icon: MapPin, label: 'Address', value: 'Unit 13, Green Shield Industrial Estate\nBradfield Rd, London E16 2AU', href: GOOGLE_MAPS_URL, external: true },
                  { icon: Clock, label: 'Hours', value: 'Monâ€“Fri: 8:30am â€“ 6:00pm' },
                ].map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 border border-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-brand-redLight" />
                    </div>
                    <div>
                      <span className="text-white/15 text-[10px] block mb-0.5 font-outfit uppercase tracking-[0.2em]">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="text-white/50 text-sm font-outfit hover:text-brand-redLight transition-colors whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-white/50 text-sm font-outfit">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="w-full section-padding py-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/15 text-xs text-center sm:text-left font-outfit">
              &copy; {new Date().getFullYear()} Levofix LTD. Registered in England & Wales.
              All rights reserved.
            </p>
            <p className="text-white/15 text-xs font-outfit">
              Mobile Mechanic London · Poplar · East London · E16
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
