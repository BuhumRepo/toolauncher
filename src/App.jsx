import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import TemplatesSection from './components/TemplatesSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <TemplatesSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
