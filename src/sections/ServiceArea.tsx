import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';

const areas = [
  'Poplar', 'Canary Wharf', 'Tower Hamlets', 'Stratford',
  'Hackney', 'Bow', 'Bethnal Green', 'Mile End',
  'Whitechapel', 'Greenwich', 'Deptford', 'Walthamstow',
  'Barking', 'Ilford', 'Lewisham', 'Bermondsey',
  'Stepney', 'Islington',
];

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/Levofix+LTD+75+Wallwood+Street+London+E14+7GS';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServiceArea = () => {
  return (
    <section
      id="area"
      className="relative py-24 lg:py-36 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

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
                  <span className="text-brand-redLight text-xs font-outfit font-semibold tracking-[0.3em] uppercase">
                    Service Area
                  </span>
                </div>
                <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-wide mb-8">
                  SERVING{' '}
                  <span className="text-gradient-red">POPLAR</span>,<br />
                  EAST LONDON<br />
                  & GREATER LONDON
                </h2>
                <p className="text-white/35 text-base leading-relaxed mb-10 font-outfit font-light max-w-lg">
                  Levofix LTD is based in Poplar, East London (E14) and covers a wide area
                  across Greater London. Our team travels to your location — whether that's a
                  residential street, workplace car park or roadside.
                </p>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
                className="space-y-3 mb-10"
              >
                {[
                  { icon: MapPin, title: 'Based In', desc: 'Poplar, East London — E14 7GS' },
                  { icon: Navigation, title: 'Coverage', desc: 'East London, Greater London & surrounding areas', blue: true },
                  { icon: Phone, title: 'Not sure if we cover your area?', desc: 'call', href: 'tel:07880037742', linkText: 'Call Us — 07880 037742' },
                ].map(({ icon: Icon, title, desc, href, linkText, blue }: any) => (
                  <motion.div
                    key={title}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 6 }}
                    className={`flex items-center gap-4 p-4 border bg-white/[0.02] group transition-colors duration-500 cursor-default ${blue ? 'border-brand-blueElectric/10 hover:border-brand-blueElectric/25' : 'border-white/5 hover:border-brand-red/15'}`}
                  >
                    <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-colors ${blue ? 'border-brand-blueElectric/20 group-hover:border-brand-blueElectric/40' : 'border-white/10 group-hover:border-brand-red/30'}`}>
                      <Icon className={`w-4 h-4 ${blue ? 'text-brand-blueElectric' : 'text-brand-redLight'}`} />
                    </div>
                    <div>
                      <p className="text-white/70 font-outfit font-medium text-sm">{title}</p>
                      {href ? (
                        <a href={href} className="text-brand-redLight text-sm font-outfit font-semibold hover:text-white transition-colors">
                          {linkText}
                        </a>
                      ) : (
                        <p className="text-white/30 text-sm font-outfit font-light">{desc}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-3"
              >
                <motion.a
                  href="tel:07880037742"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </motion.a>
                <motion.a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Find Us on Maps
                </motion.a>
              </motion.div>
            </div>

            {/* Areas Grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border border-white/5 p-6 lg:p-8">
                <h3 className="font-bebas text-2xl text-white tracking-wider mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-brand-red" />
                  AREAS WE COVER
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.03, delayChildren: 0.3 }}
                  className="grid grid-cols-2 gap-[1px] bg-white/5"
                >
                  {areas.map((area) => (
                    <motion.div
                      key={area}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ x: 4 }}
                      className="bg-[#050505] flex items-center gap-3 px-4 py-3
                                 hover:bg-white/[0.02] transition-colors duration-300 group cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0
                                       group-hover:shadow-[0_0_8px_rgba(183,28,28,0.6)] transition-shadow duration-300" />
                      <span className="text-white/40 text-sm font-outfit group-hover:text-white/70 transition-colors duration-300">
                        {area}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="mt-6 pt-6 border-t border-white/5 text-center">
                  <p className="text-white/20 text-xs font-outfit tracking-wider">
                    + all surrounding areas within Greater London
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
