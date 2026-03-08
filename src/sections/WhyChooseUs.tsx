import { useEffect, useRef } from 'react';
import { Car, Award, Star, SearchCheck, MapPin, User } from 'lucide-react';

const reasons = [
  {
    icon: Car,
    title: 'We Come to You',
    description:
      'No garage visit needed. Denis comes to your home, workplace or roadside and carries out the work on the spot.',
  },
  {
    icon: Award,
    title: '18+ Years of Experience',
    description:
      'Over 18 years of hands-on mechanical experience across all makes of cars and vans. You get a proper mechanic, not a trainee.',
  },
  {
    icon: Star,
    title: '4.9 Rated on Google',
    description:
      'Rated 4.9 out of 5 from 61 genuine Google reviews. Customers return because the work is done right first time.',
  },
  {
    icon: SearchCheck,
    title: 'Honest Diagnostics First',
    description:
      'Denis diagnoses the problem accurately before recommending any repair. No upselling, no unnecessary work.',
  },
  {
    icon: MapPin,
    title: 'East London & Greater London',
    description:
      'Based in Poplar, East London. Denis covers a wide area across Greater London for all mobile mechanic jobs.',
  },
  {
    icon: User,
    title: 'Direct Service from Denis',
    description:
      'You deal with Denis directly — not a call centre, not an agency. Personal, reliable service every time.',
  },
];

const stats = [
  { value: '18+', label: 'Years Experience' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '61', label: 'Verified Reviews' },
  { value: 'E14', label: 'Based in Poplar' },
];

const WhyChooseUs = () => {
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
      id="why"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-brand-navy overflow-hidden"
    >
      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="reveal opacity-0">
              <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
                The <span className="text-gradient-red">Levofix</span> Difference
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                A real mechanic with real experience — who comes to you,
                charges fairly and gets the job done properly.
              </p>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {reasons.map((item, index) => (
              <div
                key={item.title}
                className="reveal opacity-0 group p-6 rounded-2xl bg-[#131929] border border-white/10
                           hover:border-brand-red/60 hover:shadow-glowRed transition-all duration-300"
                style={{ animationDelay: `${(index % 3) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center mb-5
                                group-hover:bg-brand-red/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-redLight transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="reveal opacity-0 animation-delay-200 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center py-6 px-4 rounded-2xl bg-[#131929] border border-white/10"
              >
                <div className="text-3xl lg:text-4xl font-bold text-brand-red mb-1">
                  {value}
                </div>
                <div className="text-white/50 text-sm">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
