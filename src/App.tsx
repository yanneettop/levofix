import { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import ServiceArea from './sections/ServiceArea';
import Reviews from './sections/Reviews';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] grain">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
