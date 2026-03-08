import { useEffect, useRef } from 'react';
import { CheckCircle2, Wrench, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const bullets = [
    { icon: Wrench,       text: 'Experienced across all makes and vans' },
    { icon: MapPin,       text: 'Diagnostics and repairs at your location' },
    { icon: MessageCircle,text: 'Honest advice before any repair work' },
    { icon: ShieldCheck,  text: 'Professional service across London' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#1d1915]"
    >
      {/* Subtle red glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Side */}
            <div className="reveal opacity-0 relative flex justify-center">
              <div className="relative">
                {/* Pulsing outer ring */}
                <div className="absolute inset-0 m-auto w-72 h-72 lg:w-[22rem] lg:h-[22rem] rounded-full border border-brand-red/20 animate-pulse" />

                {/* Logo circle */}
                <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-brand-red shadow-glowRed mx-auto">
                  <img
                    src="/logo.jpg"
                    alt="Levofix Ltd — Denis Levoskin Mobile Mechanic London"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stats badge */}
                <div className="absolute bottom-4 -right-4 lg:right-0 bg-brand-dark border border-brand-red/30 rounded-xl px-5 py-4 shadow-glowRed">
                  <span className="block text-3xl font-bold text-brand-red leading-none">18+</span>
                  <span className="block text-white/60 text-xs mt-1">Years Experience</span>
                </div>

                {/* Google rating badge */}
                <div className="absolute top-4 -left-4 lg:left-0 bg-brand-dark border border-white/10 rounded-xl px-4 py-3">
                  <span className="block text-yellow-400 text-sm font-bold">★ 4.9</span>
                  <span className="block text-white/50 text-xs">Google Rating</span>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-brand-red/30 rounded-tl-lg" />
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-brand-red/30 rounded-br-lg" />
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="reveal opacity-0">
                <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
                  Meet Denis at{' '}
                  <span className="text-gradient-red">Levofix LTD</span>
                </h2>
              </div>

              <div className="reveal opacity-0 animation-delay-100">
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  Denis Levoskin is an experienced mobile mechanic with over
                  18 years of hands-on experience across all makes of cars and
                  vans. Based in Poplar, East London, Denis founded Levofix LTD
                  in 2020 to offer a more convenient and dependable alternative
                  to the traditional garage.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  Instead of taking your car in and waiting, Denis comes directly
                  to your home, workplace or roadside — carrying out accurate
                  diagnostics and quality repairs on the spot.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="reveal opacity-0 animation-delay-200 space-y-3">
                {bullets.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 p-4 rounded-lg bg-brand-dark border border-white/5
                               hover:border-brand-red/30 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                      <Icon className="w-4 h-4 text-brand-red" />
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span className="text-white/80 font-medium text-sm">{text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="reveal opacity-0 animation-delay-300 mt-8">
                <a
                  href="tel:07880037742"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Call Denis — 07880 037742
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
