import { useEffect, useRef } from 'react';
import { ArrowRight, Wrench, Zap, BatteryCharging, Wind, CircleDot, Hammer } from 'lucide-react';

const featured = [
  {
    title: 'Car Diagnostics',
    img: '/service-diagnostics.jpg',
    description: 'Full OBD computer diagnostics to identify engine warning lights, fault codes and performance issues accurately.',
  },
  {
    title: 'Brake Repair',
    img: '/service-brakes.jpg',
    description: 'Brake pads, discs, calipers and fluid replacement. Full brake inspection and repair carried out on-site.',
  },
  {
    title: 'Suspension Repair',
    img: '/service-suspension.jpg',
    description: 'Shock absorbers, springs, bushes and steering components diagnosed and repaired where your car is parked.',
  },
  {
    title: 'Transmission Diagnostics',
    img: '/service-transmission.jpg',
    description: 'Gearbox, clutch and transmission fault diagnosis. Honest assessment before any repair work is carried out.',
  },
  {
    title: 'Fault Finding',
    img: '/service-fault.jpg',
    description: 'Systematic electrical and mechanical fault tracing for complex problems that other garages struggle to resolve.',
  },
  {
    title: 'Pre-Purchase Inspection',
    img: '/service-inspection.jpg',
    description: "Thinking of buying a used car? Denis will inspect it thoroughly so you know exactly what you're getting.",
  },
];

const more = [
  { icon: Wrench,         title: 'Full & Interim Servicing' },
  { icon: Zap,            title: 'Engine Diagnostics' },
  { icon: BatteryCharging,title: 'Battery Replacement' },
  { icon: Wind,           title: 'AC Repair' },
  { icon: CircleDot,      title: 'Wheel Alignment' },
  { icon: Hammer,         title: 'General Repairs' },
];

const Services = () => {
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

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white"
    >
      {/* Section Header */}
      <div className="w-full section-padding mb-14">
        <div className="max-w-7xl mx-auto text-center">
          <div className="reveal opacity-0">
            <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Professional{' '}
              <span className="text-gradient-red">Car Services</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              All services are carried out at your location — home, workplace
              or roadside. No need to visit a garage.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Image Cards */}
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featured.map((service, index) => (
              <div
                key={service.title}
                className="reveal opacity-0 group flex flex-col rounded-2xl overflow-hidden
                           border border-gray-200 bg-white
                           hover:border-brand-red/40 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-brand-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold
                               hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* More Services */}
          <div className="reveal opacity-0 border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-4 text-center">
              Also Available
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {more.map(({ icon: Icon, title }) => (
                <button
                  key={title}
                  onClick={scrollToContact}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white border border-gray-200
                             hover:border-brand-red/40 hover:shadow-sm transition-all duration-300 group text-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center
                                  group-hover:bg-brand-red/20 transition-colors">
                    <Icon className="w-4 h-4 text-brand-red" />
                  </div>
                  <span className="text-gray-700 text-xs font-medium leading-tight">{title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
