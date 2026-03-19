import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Zap, BatteryCharging, Wind, CircleDot, Hammer } from 'lucide-react';

const featured = [
  {
    title: 'Car Diagnostics',
    img: '/service-diagnostics.jpg',
    description:
      'Warning lights, engine issues or unclear faults? We provide fast on-site diagnostics to identify the problem clearly and help you decide on the right next step.',
    cta: 'Book Diagnostics',
    num: '01',
  },
  {
    title: 'Roadside Repairs',
    img: '/service-brakes.jpg',
    description:
      'For many common issues, repairs can be carried out at your location, helping you get back on the road without the usual garage hassle.',
    cta: 'Get Help Now',
    num: '02',
  },
  {
    title: 'Battery & Starting Issues',
    img: '/service-fault.jpg',
    description:
      'If your vehicle will not start or is showing signs of battery trouble, we can inspect the issue quickly and provide practical support where possible.',
    cta: 'Fix Starting Issue',
    num: '03',
  },
  {
    title: 'Brake Repairs & Maintenance',
    img: '/service-brakes.jpg',
    description:
      'From worn components to braking concerns, we offer reliable brake checks and repairs to help keep your vehicle safe and roadworthy.',
    cta: 'Ask About Brakes',
    num: '04',
  },
  {
    title: 'Engine Fault Finding',
    img: '/service-fault.jpg',
    description:
      'Strange noises, warning lights or performance problems can often point to deeper engine issues. We help diagnose faults properly before unnecessary repairs are made.',
    cta: 'Check Engine Fault',
    num: '05',
  },
  {
    title: 'Workshop Repairs',
    img: '/service-transmission.jpg',
    description:
      'If your vehicle needs more involved mechanical work, it can be taken to our fully equipped workshop for further inspection and repair.',
    cta: 'Workshop Support',
    num: '06',
  },
];

const more = [
  { icon: Wrench, title: 'Full & Interim Servicing' },
  { icon: Zap, title: 'Engine Diagnostics' },
  { icon: BatteryCharging, title: 'Battery Replacement' },
  { icon: Wind, title: 'AC Repair' },
  { icon: CircleDot, title: 'Wheel Alignment' },
  { icon: Hammer, title: 'General Repairs' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="relative py-24 lg:py-36 bg-white overflow-hidden"
    >
      {/* Section Header */}
      <div className="w-full section-padding mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="rule-accent" />
              <span className="text-brand-red text-xs font-outfit font-semibold tracking-[0.3em] uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-black/85 leading-[0.95] tracking-wide mb-6">
              DIAGNOSTICS, REPAIRS<br />
              AND <span className="text-brand-red">WORKSHOP SUPPORT</span>
            </h2>
            <p className="text-black/40 font-outfit font-light text-base max-w-xl">
              From fast on-site fault finding to more involved workshop repairs,
              Levofix LTD offers practical vehicle support across East London.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-black/[0.06] mb-16"
          >
            {featured.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                  {/* Number overlay */}
                  <span className="absolute top-4 right-4 font-bebas text-4xl text-black/[0.04] group-hover:text-brand-red/15 transition-colors duration-500">
                    {service.num}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bebas text-2xl text-black/80 tracking-wider mb-3 group-hover:text-brand-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-black/35 text-sm leading-relaxed font-outfit font-light mb-5">
                    {service.description}
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-brand-red text-xs font-outfit font-semibold
                               uppercase tracking-wider hover:gap-4 transition-all duration-300"
                  >
                    {service.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-red to-brand-redLight scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>

          {/* More Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border border-black/[0.06] bg-[#f7f7f5] p-8">
              <p className="text-black/25 text-xs font-outfit font-semibold uppercase tracking-[0.3em] mb-6 text-center">
                Also Available
              </p>
              <div className="w-8 h-[2px] bg-gradient-to-r from-brand-blueElectric to-brand-blueElectric/30 mx-auto mb-6" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {more.map(({ icon: Icon, title }) => (
                  <motion.button
                    key={title}
                    onClick={scrollToContact}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="flex flex-col items-center gap-3 p-4 border border-black/[0.06] bg-white
                               hover:border-brand-red/20 hover:shadow-sm transition-all duration-500 group text-center"
                  >
                    <Icon className="w-5 h-5 text-black/20 group-hover:text-brand-red transition-colors duration-500" />
                    <span className="text-black/45 text-xs font-outfit leading-tight group-hover:text-black/65 transition-colors duration-500">
                      {title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
