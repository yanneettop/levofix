import { useEffect, useRef } from 'react';
import { CheckCircle2, Bolt, Wrench, MapPin, ShieldCheck } from 'lucide-react';

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
    { icon: Bolt,          text: 'Fast mobile response across East London' },
    { icon: Wrench,        text: 'Honest diagnostics and practical repairs' },
    { icon: MapPin,        text: 'Fully equipped workshop support' },
    { icon: ShieldCheck,   text: 'Friendly, professional service' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-white"
    >
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Side */}
            <div className="reveal opacity-0 relative flex justify-center">
              <div className="relative">
                {/* Pulsing outer ring */}
                <div className="absolute inset-0 m-auto w-72 h-72 lg:w-[22rem] lg:h-[22rem] rounded-full border border-brand-red/15 animate-pulse" />

                {/* Logo circle */}
                <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-brand-red shadow-glowRed mx-auto">
                  <img
                    src="/logo3.png"
                    alt="Levofix Ltd — Denis Levoskin Mobile Mechanic London"
                    className="w-full h-full object-cover scale-[1.35]"
                  />
                </div>

                {/* Stats badge */}
                <div className="absolute bottom-4 -right-4 lg:right-0 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-lg">
                  <span className="block text-3xl font-bold text-brand-red leading-none">18+</span>
                  <span className="block text-gray-500 text-xs mt-1">Years Experience</span>
                </div>

                {/* Google rating badge */}
                <div className="absolute top-4 -left-4 lg:left-0 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                  <span className="block text-yellow-500 text-sm font-bold">★ 4.9</span>
                  <span className="block text-gray-400 text-xs">Google Rating</span>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-brand-red/20 rounded-tl-lg" />
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-brand-red/20 rounded-br-lg" />
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="reveal opacity-0">
                <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                  Mobile Mechanic Service You Can Rely On
                </h2>
              </div>

              <div className="reveal opacity-0 animation-delay-100">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Levofix LTD provides fast, practical mobile mechanic support across East London, helping drivers with on-site diagnostics, repairs and professional advice. Built on real roadside experience, the service is designed to make car problems easier to deal with, whether you are at home, at work or stuck on the road. For more involved jobs, vehicles can also be taken to our fully equipped workshop.
                </p>
              </div>

              <div className="reveal opacity-0 animation-delay-200 space-y-3">
                {bullets.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 border border-gray-200
                               hover:border-brand-red/40 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/20 transition-colors">
                      <Icon className="w-4 h-4 text-brand-red" />
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm">{text}</span>
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
