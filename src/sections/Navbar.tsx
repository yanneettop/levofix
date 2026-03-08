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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-darker/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-red transition-transform duration-300 group-hover:scale-110">
                <img src="/logo.jpg" alt="Levofix Ltd" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <span className="font-montserrat font-bold text-xl text-white block leading-tight">
                  Levofix <span className="text-brand-red">LTD</span>
                </span>
                <span className="text-brand-grayLight text-xs">Mobile Mechanic London</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white/80 hover:text-brand-red transition-colors duration-300 font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:07880037742"
                className="flex items-center gap-2 text-white/80 hover:text-brand-red transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">07880 037742</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-sm"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-darker/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Logo in mobile menu */}
          <div className="mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-red">
              <img src="/logo.jpg" alt="Levofix Ltd" className="w-full h-full object-cover" />
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
              className={`text-2xl font-montserrat font-semibold text-white hover:text-brand-red transition-all duration-300 ${
                isMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className={`btn-primary mt-4 ${
              isMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
