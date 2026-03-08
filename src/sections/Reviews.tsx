import { useEffect, useRef } from 'react';
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
    text: 'Denis came the same evening I called. Identified the issue straight away and explained everything clearly before touching anything. Really appreciate the honesty — no unnecessary work.',
    car: 'VW Golf',
  },
  {
    name: 'Michael C.',
    location: 'Stratford',
    rating: 5,
    text: 'Had a gearbox issue Denis sorted efficiently at my home. Careful, thorough work — he took his time and did it right. Fair pricing and no surprises on the bill.',
    car: 'Mercedes C-Class',
  },
  {
    name: 'Emma W.',
    location: 'Bow',
    rating: 5,
    text: 'Booked a pre-purchase inspection before buying a used car. Denis was punctual, went through everything in detail and gave me a clear picture of the car\'s condition. Saved me from a bad purchase.',
    car: 'Audi A3',
  },
  {
    name: 'David P.',
    location: 'Greenwich',
    rating: 5,
    text: 'Clutch was slipping badly. Denis diagnosed it quickly and got the repair done at my home. Reasonable price, clean work, and he was friendly and easy to deal with from start to finish.',
    car: 'Ford Focus',
  },
];

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/Levofix+LTD+75+Wallwood+Street+London+E14+7GS';

const Reviews = () => {
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
      id="reviews"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-brand-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="reveal opacity-0">
              <span className="text-brand-red text-sm font-semibold uppercase tracking-widest">
                Customer Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
                What Customers{' '}
                <span className="text-gradient-red">Say About Denis</span>
              </h2>

              {/* Google Rating Banner */}
              <div className="inline-flex flex-wrap items-center justify-center gap-3 mt-4 px-6 py-3
                              bg-brand-darker border border-white/10 rounded-2xl">
                {/* Google G */}
                <span className="font-bold text-lg tracking-tight">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-lg">4.9</span>
                <span className="text-white/50 text-sm">from 61 reviews</span>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-brand-red text-sm font-semibold
                             hover:text-brand-redLight transition-colors duration-200"
                >
                  View on Google
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="reveal opacity-0 group flex flex-col p-6 rounded-2xl
                           bg-brand-darker border border-white/10
                           hover:border-brand-red/55 hover:shadow-glowRed transition-all duration-300"
                style={{ animationDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Quote icon */}
                <Quote className="w-6 h-6 text-brand-red/40 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-white/65 text-sm leading-relaxed flex-1 mb-5">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">
                    {review.location} · {review.car}
                  </p>
                </div>
              </div>
            ))}

            {/* View All Card */}
            <div className="reveal opacity-0 flex flex-col items-center justify-center p-6 rounded-2xl
                            bg-brand-darker border border-brand-red/20 hover:border-brand-red/50
                            transition-all duration-300 text-center min-h-[200px]"
                 style={{ animationDelay: '500ms' }}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white font-bold text-2xl mb-1">4.9 / 5</p>
              <p className="text-white/50 text-sm mb-5">Based on 61 Google reviews</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary text-sm px-5 py-3"
              >
                View All Reviews
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;
