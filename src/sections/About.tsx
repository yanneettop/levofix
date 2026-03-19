import { motion } from 'framer-motion';
import { Bolt, Wrench, MapPin, ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const bullets = [
  { icon: Bolt, text: 'Fast mobile response across East London' },
  { icon: Wrench, text: 'Honest diagnostics and practical repairs' },
  { icon: MapPin, text: 'Fully equipped workshop support' },
  { icon: ShieldCheck, text: 'Friendly, professional service' },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-36 bg-[#f7f7f5] overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image Side */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Logo display */}
                <div className="relative flex items-center justify-center">
                  <img
                    src="/Logo1.png"
                    alt="Levofix Ltd — Mobile Mechanic Team London"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-brand-red/30" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-brand-red/30" />

                {/* Floating stat cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
                  className="absolute -bottom-6 -right-6 lg:-right-10 bg-white border border-black/5 p-5 shadow-lg"
                >
                  <span className="font-bebas text-5xl text-brand-red block leading-none">18+</span>
                  <span className="text-black/40 text-[10px] tracking-[0.2em] uppercase font-outfit">Years Experience</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45, type: 'spring', stiffness: 200, damping: 20 }}
                  className="absolute -top-4 -right-4 lg:-right-8 bg-white border border-brand-blueElectric/15 px-4 py-3 shadow-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500 text-sm">★</span>
                    <span className="font-bebas text-2xl text-black/80 leading-none">4.9</span>
                  </div>
                  <span className="text-brand-blueElectric/50 text-[9px] tracking-[0.15em] uppercase font-outfit">Google Rating</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="rule-accent" />
                  <span className="text-brand-red text-xs font-outfit font-semibold tracking-[0.3em] uppercase">
                    About Us
                  </span>
                </div>
                <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-black/85 leading-[0.95] mb-8 tracking-wide">
                  MOBILE MECHANIC<br />
                  SERVICE YOU CAN<br />
                  <span className="text-brand-red">RELY ON</span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-black/45 text-base leading-relaxed mb-10 font-outfit font-light max-w-lg">
                  Levofix LTD is a team of experienced mobile mechanics providing fast, practical
                  support across East London — from on-site diagnostics to hands-on repairs and
                  professional advice. Built on years of real roadside experience, our service is
                  designed to make car problems easier to deal with, whether you are at home, at
                  work or stuck on the road.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
                className="space-y-3 mb-10"
              >
                {bullets.map(({ icon: Icon, text }) => (
                  <motion.div
                    key={text}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 border border-black/5 bg-white
                               hover:border-brand-red/20 hover:shadow-sm transition-all duration-500 group cursor-default"
                  >
                    <div className="w-10 h-10 border border-black/10 flex items-center justify-center flex-shrink-0
                                    group-hover:border-brand-red/30 group-hover:bg-brand-red/5 transition-all duration-500">
                      <Icon className="w-4 h-4 text-brand-red" />
                    </div>
                    <span className="text-black/55 font-outfit text-sm group-hover:text-black/75 transition-colors duration-500">{text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.a
                  href="tel:07880037742"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Call Us — 07880 037742
                </motion.a>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
