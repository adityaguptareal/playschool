import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyChooseUs from '../components/WhyChooseUs';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import GalleryPreview from '../components/GalleryPreview';
import FAQ from '../components/FAQ';
import BlogPreview from '../components/BlogPreview';

const HomePage = () => {
  return (
    <main className="pt-20">
      <Hero />
      <Features />
      <WhyChooseUs />
      <Programs />
      <Testimonials />
      <GalleryPreview />
      <FAQ />
      <BlogPreview />
    </main>
  );
};

export default HomePage;
