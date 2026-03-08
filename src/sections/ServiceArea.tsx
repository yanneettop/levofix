import { useEffect, useRef } from 'react';
import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';

const areas = [
  'Poplar',
  'Canary Wharf',
  'Tower Hamlets',
  'Stratford',
  'Hackney',
  'Bow',
  'Bethnal Green',
  'Mile End',
  'Whitechapel',
  'Greenwich',
  'Deptford',
  'Walthamstow',
  'Barking',
  'Ilford',
  'Lewisham',
  'Bermondsey',
  'Stepney',
  'Islington',
];

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/Levofix+LTD+75+Wallwood+Street+London+E14+7GS';

const ServiceArea = () => {
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

  return (
    <section
      id="area"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[#0e1a16] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64
                      bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Content Side */}
            <div>
              <div className="reveal opacity-0">
                <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
                  Service Area
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
                  Mobile Mechanic Serving{' '}
                  <span className="text-gradient-red">Poplar, East London</span>{' '}
                  &amp; Greater London
                </h2>
                <p className="text-white/65 text-lg leading-relaxed mb-8">
                  Levofix LTD is based in Poplar, East London (E14) and covers
                  a wide area across Greater London. Denis travels to your
                  location — whether that's a residential street, workplace car
                  park or roadside — and carries out the work on the spot.
                </p>
              </div>

              {/* Info Cards */}
              <div className="reveal opacity-0 animation-delay-100 space-y-3 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-dark border border-white/5">
                  <div className="w-11 h-11 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Based In</p>
                    <p className="text-white/50 text-sm">
                      Poplar, East London — E14 7GS
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-dark border border-white/5">
                  <div className="w-11 h-11 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Coverage</p>
                    <p className="text-white/50 text-sm">
                      East London, Greater London &amp; surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-dark border border-white/5">
                  <div className="w-11 h-11 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Not sure if we cover your area?</p>
                    <a
                      href="tel:07880037742"
                      className="text-brand-red text-sm font-semibold hover:text-brand-redLight transition-colors"
                    >
                      Call Denis — 07880 037742
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="reveal opacity-0 animation-delay-200 flex flex-wrap gap-3">
                <a
                  href="tel:07880037742"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20
                             text-white font-montserrat font-semibold rounded-lg text-sm
                             hover:border-white/50 hover:bg-white/5 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Find Us on Maps
                </a>
              </div>
            </div>

            {/* Areas Grid */}
            <div className="reveal opacity-0 animation-delay-100">
              <div className="p-6 lg:p-8 rounded-2xl bg-brand-dark border border-white/5">
                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-red" />
                  Areas We Cover
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg
                                 bg-brand-darker border border-white/5
                                 hover:border-brand-red/30 transition-colors duration-200 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0
                                       group-hover:scale-125 transition-transform" />
                      <span className="text-white/65 text-sm group-hover:text-white/90 transition-colors">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/5 text-center">
                  <p className="text-white/35 text-sm">
                    + all surrounding areas within Greater London
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
