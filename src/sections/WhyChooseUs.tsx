import { motion } from 'framer-motion';
import { Car, Award, SearchCheck, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Car,
    title: 'Mobile Service',
    description:
      'We come to you anywhere in London. No need to take your vehicle to a garage — our team brings the fully-equipped mobile workshop right to your door.',
    num: '01',
  },
  {
    icon: Award,
    title: 'Fast Response',
    description:
      'Unexpected breakdown? We offer same-day service slots across East London. Call our team and get back on the road quickly with experienced mobile mechanics.',
    num: '02',
  },
  {
    icon: Wrench,
    title: 'Experienced',
    description:
      'Over 18 years experience with all engine makes and brands. Expert diagnosed and quality repairs you can trust every time.',
    num: '03',
  },
  {
    icon: SearchCheck,
    title: 'Pro Equipment',
    description:
      "Our technicians use dealer-grade diagnostic equipment to accurately identify your car's problems — fast, honest, no guesswork.",
    num: '04',
  },
];

const stats = [
  { value: '18+', label: 'Years Experience', blue: false },
  { value: '4.9★', label: 'Google Rating', blue: true },
  { value: '61', label: 'Verified Reviews', blue: true },
  { value: 'E14', label: 'Based in Poplar', blue: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="relative py-24 lg:py-36 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="rule-accent" />
              <span className="text-brand-redLight text-xs font-outfit font-semibold tracking-[0.3em] uppercase">
                Why Choose Us
              </span>
              <div className="rule-accent" />
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] tracking-wide mb-6">
              THE <span className="text-gradient-red">LEVOFIX</span> DIFFERENCE
            </h2>
            <p className="text-white/35 font-outfit font-light text-base max-w-lg mx-auto">
              A real mechanic with real experience — who comes to you,
              charges fairly and gets the job done properly.
            </p>
          </motion.div>

          {/* Reasons — 4 col grid with numbered cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 mb-20"
          >
            {reasons.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors duration-500"
              >
                {/* Number */}
                <span className="font-bebas text-6xl text-white/[0.03] block leading-none mb-6 group-hover:text-brand-red/10 transition-colors duration-500">
                  {item.num}
                </span>

                <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-5
                                group-hover:border-brand-red/30 transition-colors duration-500">
                  <item.icon className="w-5 h-5 text-brand-redLight" />
                </div>

                <h3 className="font-bebas text-2xl text-white tracking-wider mb-3">
                  {item.title}
                </h3>
                <p className="text-white/30 text-sm leading-relaxed font-outfit font-light">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/5"
          >
            {stats.map(({ value, label, blue }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#0a0a0a] text-center py-10 px-4 group hover:bg-white/[0.02] transition-colors duration-500 cursor-default"
              >
                <div className={`font-bebas text-5xl lg:text-6xl mb-2 group-hover:text-white transition-colors duration-500 ${blue ? 'text-brand-blueElectric' : 'text-brand-redLight'}`}>
                  {value}
                </div>
                <div className="text-white/25 text-xs font-outfit tracking-[0.2em] uppercase">{label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
