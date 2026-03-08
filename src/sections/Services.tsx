import { useEffect, useRef } from 'react';
import {
  Cpu, Wrench, Disc, Settings2, Gauge, Zap,
  SearchCheck, BatteryCharging, Wind, CircleDot,
  Hammer, ClipboardCheck, ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Car Diagnostics',
    description:
      'Full OBD computer diagnostics to identify engine warning lights, fault codes and performance issues accurately.',
  },
  {
    icon: Wrench,
    title: 'Full & Interim Servicing',
    description:
      'Complete or interim service including oil change, filters, fluid top-ups and safety checks at your location.',
  },
  {
    icon: Disc,
    title: 'Brake Repair',
    description:
      'Brake pads, discs, calipers and fluid replacement. Full brake inspection and repair carried out on-site.',
  },
  {
    icon: Settings2,
    title: 'Suspension Repair',
    description:
      'Shock absorbers, springs, bushes and steering components diagnosed and repaired where your car is parked.',
  },
  {
    icon: Gauge,
    title: 'Transmission Diagnostics',
    description:
      'Gearbox, clutch and transmission fault diagnosis. Honest assessment before any repair work is carried out.',
  },
  {
    icon: Zap,
    title: 'Engine Diagnostics',
    description:
      'In-depth engine fault finding covering misfires, sensors, timing issues and more — all at your location.',
  },
  {
    icon: SearchCheck,
    title: 'Fault Finding',
    description:
      'Systematic electrical and mechanical fault tracing for complex problems that other garages struggle to resolve.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Replacement',
    description:
      'Battery testing and replacement for all makes and models. Quick mobile service — no towing required.',
  },
  {
    icon: Wind,
    title: 'AC Repair',
    description:
      'Air conditioning diagnostics, re-gas and repair. Keep your car comfortable year-round.',
  },
  {
    icon: CircleDot,
    title: 'Wheel Alignment',
    description:
      'Wheel alignment checks and correction to improve tyre wear, handling and fuel efficiency.',
  },
  {
    icon: Hammer,
    title: 'General Repairs',
    description:
      'From minor fixes to more involved mechanical repairs — Denis handles a wide range of jobs on all makes and vans.',
  },
  {
    icon: ClipboardCheck,
    title: 'Pre-Purchase Inspection',
    description:
      "Thinking of buying a used car? Denis will inspect it thoroughly so you know exactly what you're getting.",
  },
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
      className="relative py-20 lg:py-32 bg-brand-dark"
    >
      {/* Subtle glow top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="w-full section-padding mb-14">
        <div className="max-w-7xl mx-auto text-center">
          <div className="reveal opacity-0">
            <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Professional{' '}
              <span className="text-gradient-red">Car Services</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              All services are carried out at your location — home, workplace
              or roadside. No need to visit a garage.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal opacity-0 group flex flex-col p-6 rounded-2xl
                           bg-brand-darker border border-white/10
                           hover:border-brand-red/60 hover:shadow-glowRed
                           transition-all duration-300"
                style={{ animationDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5
                                group-hover:bg-brand-red/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-brand-red" />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-redLight transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold
                             hover:gap-3 transition-all duration-300 group-hover:text-brand-redLight"
                >
                  Book this service
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
