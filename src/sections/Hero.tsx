import { useEffect, useRef, useState } from 'react';
import { Phone, ChevronDown, Bolt, MapPin, Wrench } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);

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

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setParallax(scrollY * 0.22);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const trustPoints = [
    { icon: Bolt, label: 'Fast mobile response' },
    { icon: MapPin, label: 'We come to you' },
    { icon: Wrench, label: 'Fully equipped workshop' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="group relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 overflow-hidden will-change-transform transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ transform: `translateY(${parallax}px)` }}
        >
          <img
            src="/hero-new.jpg"
            alt="Denis from Levofix LTD — mobile mechanic working on a car in London"
            className="w-full h-full object-cover object-center will-change-transform animate-ken-burns"
          />
        </div>

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
            className="reveal opacity-0 font-montserrat font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl
                       text-white leading-tight mb-5 animation-delay-100"
          >
            Fast Mobile Mechanic in East London
          </h1>

          {/* Subheadline */}
          <p
            className="reveal opacity-0 text-white/70 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10
                       animation-delay-200 leading-relaxed"
          >
            We come to your home, workplace or roadside for fast diagnostics and repairs, with fully equipped
            workshop support available when needed.
          </p>

          {/* CTA Buttons */}
          <div
            className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start
                       gap-4 animation-delay-300 mb-6"
          >
            <a
              href="tel:07880037742"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-lg px-10 py-4
                         shadow-glowRed-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center text-lg px-10 py-4"
            >
              <Bolt className="w-5 h-5" />
              Get Fast Help
            </button>
          </div>

          {/* Trust Bar */}
          <div
            className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5
                       text-white/60 text-sm font-medium tracking-wide animation-delay-400"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{label}</span>
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
