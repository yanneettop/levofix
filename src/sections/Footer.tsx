import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/447880037742?text=Hi%20Denis%2C%20I%20need%20help%20with%20my%20car.';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/Levofix+LTD+75+Wallwood+Street+London+E14+7GS';

const quickLinks = [
  { name: 'Home',     href: '#home' },
  { name: 'About',   href: '#about' },
  { name: 'Services',href: '#services' },
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

const Footer = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0b0b0b] border-t border-white/5">

      {/* Main Footer */}
      <div className="w-full section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <button
                onClick={() => scrollToSection('#home')}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-red flex-shrink-0">
                  <img src="/logo3.png" alt="Levofix Ltd" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <span className="font-montserrat font-bold text-xl text-white block leading-tight">
                    Levofix <span className="text-brand-red">LTD</span>
                  </span>
                  <span className="text-white/40 text-xs">Mobile Mechanic London</span>
                </div>
              </button>

              <p className="text-white/45 text-sm leading-relaxed mb-5">
                Denis Levoskin — professional mobile mechanic based in Poplar,
                East London. Serving customers across Greater London since 2020.
              </p>

              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center
                             text-white/40 hover:bg-brand-red/20 hover:border-brand-red/30 hover:text-brand-red
                             transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center
                             text-white/40 hover:bg-brand-red/20 hover:border-brand-red/30 hover:text-brand-red
                             transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center
                             text-white/40 hover:bg-[#25D366]/20 hover:border-[#25D366]/30 hover:text-[#25D366]
                             transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/45 hover:text-brand-red transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="text-white/45 hover:text-brand-red transition-colors duration-300 text-sm text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-white/30 text-xs block mb-0.5">Phone</span>
                    <a
                      href="tel:07880037742"
                      className="text-white text-sm font-medium hover:text-brand-red transition-colors"
                    >
                      07880 037742
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-white/30 text-xs block mb-0.5">Email</span>
                    <a
                      href="mailto:info@levofix.co.uk"
                      className="text-white text-sm font-medium hover:text-brand-red transition-colors"
                    >
                      info@levofix.co.uk
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-white/30 text-xs block mb-0.5">Address</span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-brand-red transition-colors"
                    >
                      75 Wallwood Street<br />
                      London, E14 7GS
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-brand-red" />
                  </div>
                  <div>
                    <span className="text-white/30 text-xs block mb-0.5">Hours</span>
                    <span className="text-white text-sm font-medium">
                      Mon–Fri: 8:30am – 6:00pm
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="w-full section-padding py-5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Levofix LTD. Registered in England & Wales.
              All rights reserved.
            </p>
            <p className="text-white/25 text-xs">
              Mobile Mechanic London · Poplar · East London · E14
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
