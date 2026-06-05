import { motion } from 'framer-motion';
import { Star, ExternalLink, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'James M.',
    location: 'Canary Wharf',
    rating: 5,
    text: 'Extremely knowledgeable mechanic. Diagnosed a fault two other garages completely missed. Came to my workplace, sorted it within the hour. Honest and professional throughout.',
    car: 'BMW 3 Series',
  },
  {
    name: 'Sarah T.',
    location: 'Hackney',
    rating: 5,
    text: 'The Levofix team came the same evening I called. Identified the issue straight away and explained everything clearly before touching anything. Really appreciate the honesty — no unnecessary work.',
    car: 'VW Golf',
  },
  {
    name: 'Michael C.',
    location: 'Stratford',
    rating: 5,
    text: 'Had a gearbox issue the Levofix team sorted efficiently at my home. Careful, thorough work — they took their time and did it right. Fair pricing and no surprises on the bill.',
    car: 'Mercedes C-Class',
  },
  {
    name: 'Emma W.',
    location: 'Bow',
    rating: 5,
    text: "Booked a pre-purchase inspection before buying a used car. The mechanic was punctual, went through everything in detail and gave me a clear picture of the car's condition. Saved me from a bad purchase.",
    car: 'Audi A3',
  },
  {
    name: 'David P.',
    location: 'Greenwich',
    rating: 5,
    text: 'Clutch was slipping badly. Levofix diagnosed it quickly and got the repair done at my home. Reasonable price, clean work, and the team was friendly and easy to deal with from start to finish.',
    car: 'Ford Focus',
  },
];

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/Levofix+Ltd+Mobile+Mechanic+Poplar+Unit+13+Green+Shield+Industrial+Estate+Bradfield+Rd+London+E16+2AU';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="relative py-24 lg:py-36 bg-[#f7f7f5] overflow-hidden"
    >
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="rule-accent" />
                <span className="text-brand-red text-xs font-outfit font-semibold tracking-[0.3em] uppercase">
                  Customer Reviews
                </span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-black/85 leading-[0.95] tracking-wide">
                WHAT CUSTOMERS<br />
                <span className="text-brand-red">SAY ABOUT LEVOFIX</span>
              </h2>
            </div>

            {/* Google badge */}
            <div className="flex items-center gap-4 border border-black/[0.06] bg-white px-6 py-4 self-start lg:self-end shadow-sm">
              <div>
                <span className="font-outfit font-bold text-lg tracking-tight">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              </div>
              <div className="w-px h-8 bg-black/10" />
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bebas text-2xl text-black/80 leading-none">5.0</span>
                </div>
                <span className="text-black/35 text-[10px] font-outfit tracking-wider">from 131 reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Review Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-black/[0.06] mb-10"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group flex flex-col bg-white p-7 hover:bg-[#fcfcfa] transition-colors duration-500 relative"
              >
                {/* Quote */}
                <Quote className="w-8 h-8 text-brand-red/10 mb-5 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-black/45 text-sm leading-relaxed font-outfit font-light flex-1 mb-6">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="border-t border-black/5 pt-5">
                  <p className="text-black/70 font-outfit font-semibold text-sm">{review.name}</p>
                  <p className="text-black/30 text-xs font-outfit mt-1">
                    {review.location} · {review.car}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* View All Card */}
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center justify-center bg-white p-7 text-center group hover:bg-[#fcfcfa] transition-colors duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bebas text-6xl text-black/80 leading-none mb-1">5.0</span>
              <span className="text-black/35 text-xs font-outfit tracking-wider mb-6">Based on 131 Google reviews</span>
              <motion.a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs px-6 py-3"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View All Reviews
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
