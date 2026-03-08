import { useEffect, useRef } from 'react';
import { Phone, Calendar, CheckCircle2, ChevronDown, Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    { label: '18+ Years Experience' },
    { label: '4.9 ★ on Google', highlight: true },
    { label: 'Mobile Service Across London' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-new.jpg"
          alt="Denis from Levofix LTD — mobile mechanic working on a car in London"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark on left where text sits, open on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-28 pb-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">

          {/* Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-brand-redLight text-sm font-semibold tracking-widest uppercase">
              Mobile Mechanic — East London
            </span>
          </div>

          {/* Headline */}
          <h1
            className="reveal opacity-0 font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       text-white leading-[1.1] mb-6 animation-delay-100"
          >
            Mobile Car{' '}
            <span className="text-gradient-red">Diagnostics</span>
            <br />
            &amp; Repairs Across London
          </h1>

          {/* Subheadline */}
          <p
            className="reveal opacity-0 text-white/75 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10
                       animation-delay-200 leading-relaxed"
          >
            Professional mobile mechanic based in East London. Diagnostics,
            servicing, brakes, suspension and fault finding — carried out at
            your location.
          </p>

          {/* CTA Buttons */}
          <div
            className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start
                       gap-4 animation-delay-300 mb-10"
          >
            <a
              href="tel:07880037742"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-base px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Call Now — 07880 037742
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 w-full sm:w-auto justify-center text-base px-8 py-4
                         border-2 border-white/40 text-white font-montserrat font-semibold rounded-lg
                         transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              Book Diagnostic
            </button>
          </div>

          {/* Trust Badges */}
          <div
            className="reveal opacity-0 flex flex-col sm:flex-row flex-wrap items-center
                       justify-center lg:justify-start gap-4 animation-delay-400"
          >
            {trustBadges.map(({ label, highlight }) => (
              <div key={label} className="flex items-center gap-2">
                {highlight ? (
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                )}
                <span className={`text-sm font-medium ${highlight ? 'text-yellow-400' : 'text-white/80'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-brand-red transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
