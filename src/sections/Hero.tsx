import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown, Bolt, MapPin, Wrench, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setParallax(window.scrollY * 0.25);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero relative min-h-[100svh] flex items-end lg:items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="hero-bg absolute inset-0 overflow-hidden will-change-transform"
          style={{ transform: `translateY(${parallax}px)` }}
        >
          <img
            src="/hero-garage.jpg"
            alt="Levofix LTD garage with cars on lifts and diagnostics bay in East London"
            className="hero-bg-image w-full h-[120%] object-cover object-center animate-ken-burns"
          />
        </div>
        {/* Cinematic overlays */}
        <div className="hero-overlay hero-overlay-side absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent" />
        <div className="hero-overlay hero-overlay-mobile absolute inset-0 bg-[#0a0a0a]/25 sm:bg-transparent" />
        <div className="hero-overlay hero-overlay-bottom absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-transparent" />
        {/* Red ambient glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/8 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="hero-shell relative z-10 w-full section-padding pb-24 pt-36 sm:pb-24 sm:pt-40 lg:pb-16 lg:pt-28 xl:pt-24">
        <div className="relative w-full">
          <div className="hero-content max-w-3xl">

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hero-eyebrow flex items-center gap-4 mb-8"
            >
              <div className="rule-accent" />
              <span className="text-brand-redLight text-xs font-outfit font-semibold tracking-[0.3em] uppercase">
                Mobile Mechanic — East London
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title font-bebas text-5xl min-[360px]:text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] text-white leading-[0.9] mb-8 tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
            >
              FAST MOBILE<br />
              <span className="text-gradient-red">MECHANIC</span><br />
              IN EAST LONDON
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hero-copy text-white/45 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-outfit font-light"
            >
              We come to your home, workplace or roadside for fast diagnostics
              and repairs, with fully equipped workshop support when needed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="hero-actions flex flex-col sm:flex-row items-start gap-4 mb-12"
            >
              <motion.a
                href="tel:07880037742"
                className="btn-primary flex items-center gap-3 text-sm px-8 py-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center gap-3 text-sm px-8 py-4 bg-brand-blueElectric/10 backdrop-blur-sm
                           text-white font-outfit font-semibold uppercase tracking-wider border border-brand-blueElectric/20
                           hover:bg-brand-blueElectric/20 hover:border-brand-blueElectric/40
                           active:scale-95"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Bolt className="w-4 h-4 text-brand-blueElectric" />
                Get Fast Help
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-6 text-white/30"
            >
              {[
                { icon: Wrench, label: 'Fully equipped workshop' },
                { icon: MapPin, label: 'We come to you' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-xs font-outfit tracking-wider uppercase">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blueElectric animate-pulse" />
                <span className="text-brand-blueElectric/70 text-xs font-outfit tracking-wider">Available Today</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-outfit tracking-wider">5.0 / 5</span>
              </div>
            </motion.div>
          </div>

          {/* Side stats — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-side-stats hidden xl:flex absolute right-20 bottom-24 flex-col items-end gap-8"
          >
            {[
              { value: '18+', label: 'YEARS', accent: false },
              { value: '5.0', label: 'RATING', accent: true },
              { value: '131', label: 'REVIEWS', accent: false },
            ].map(({ value, label, accent }) => (
              <div key={label} className="text-right">
                <span className={`hero-stat-value font-bebas text-5xl block leading-none ${accent ? 'text-brand-blueElectric/15' : 'text-white/10'}`}>{value}</span>
                <span className={`hero-stat-label text-[10px] tracking-[0.3em] font-outfit ${accent ? 'text-brand-blueElectric/25' : 'text-white/20'}`}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-outfit">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;
