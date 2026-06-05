import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`site-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="navbar-inner w-full section-padding">
          <div className="navbar-row flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="navbar-brand flex items-center gap-3 group"
            >
              <div className="w-[4.5rem] h-[4.5rem] rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-glow">
                <img src="/Logo1.png" alt="Levofix Ltd" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <span className="navbar-brand-title font-bebas text-2xl text-white block leading-none tracking-wider">
                  LEVOFIX
                </span>
                <span className="navbar-brand-subtitle text-white/30 text-[10px] font-outfit uppercase tracking-[0.2em]">Mobile Mechanic</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="navbar-link relative px-5 py-2 text-white/50 hover:text-white transition-colors duration-300 font-outfit text-sm uppercase tracking-wider group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-red group-hover:w-5 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:07880037742"
                className="navbar-phone flex items-center gap-2 text-white/40 hover:text-brand-redLight transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-full border border-brand-blueElectric/20 flex items-center justify-center group-hover:border-brand-blueElectric/50 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-blueElectric/60 group-hover:text-brand-blueElectric" />
                </div>
                <span className="text-xs font-outfit tracking-wider">07880 037742</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-xs px-6 py-2.5"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src="/Logo1.png" alt="Levofix Ltd" className="w-full h-full object-contain" />
            </div>
          </div>

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`font-bebas text-4xl tracking-[0.15em] text-white/60 hover:text-white transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.name}
            </a>
          ))}

          <div className="mt-8 flex items-center gap-4">
            <a href="tel:07880037742" className="btn-primary text-xs">
              <Phone className="w-3.5 h-3.5 mr-2 inline" />
              Call Now
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-outline text-xs"
            >
              Book Diagnostic
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
