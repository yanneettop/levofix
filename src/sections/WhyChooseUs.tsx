import { useEffect, useRef } from 'react';
import { Car, Award, SearchCheck, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Car,
    title: 'Mobile Mechanic Service',
    description:
      'We come to you anywhere in London. No need to take your vehicle to a garage — Denis brings the fully-equipped mobile workshop right to your door.',
  },
  {
    icon: Award,
    title: 'Fast Response',
    description:
      'Unexpected breakdown? We offer same-day service slots across East London. Call Denis and get back on the road quickly with a real mobile mechanic.',
  },
  {
    icon: Wrench,
    title: 'Experienced Technician',
    description:
      'Over 18 years experience with all engine makes and brands. Expert diagnosed and quality repairs you can trust every time.',
  },
  {
    icon: SearchCheck,
    title: 'Professional Equipment',
    description:
      "Denis uses dealer-grade diagnostic equipment to accurately identify your car's problems — fast, honest, no guesswork.",
  },
];

const stats = [
  { value: '18+',  label: 'Years Experience' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '61',   label: 'Verified Reviews' },
  { value: 'E14',  label: 'Based in Poplar' },
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
      className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden"
    >
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="reveal opacity-0">
              <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
                The <span className="text-gradient-red">Levofix</span> Difference
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                A real mechanic with real experience — who comes to you,
                charges fairly and gets the job done properly.
              </p>
            </div>
          </div>

          {/* Reasons Grid — 2 col */}
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {reasons.map((item, index) => (
              <div
                key={item.title}
                className="reveal opacity-0 group flex gap-5 p-6 rounded-2xl bg-white border border-gray-200
                           hover:border-brand-red/40 hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center
                                group-hover:bg-brand-red/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar — outlined white boxes */}
          <div className="reveal opacity-0 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center py-6 px-4 rounded-2xl bg-white border-2 border-gray-200"
              >
                <div className="text-3xl lg:text-4xl font-bold text-brand-red mb-1">
                  {value}
                </div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
