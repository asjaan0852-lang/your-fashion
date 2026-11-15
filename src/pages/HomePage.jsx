import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { MarqueeTicker } from '../components/home/MarqueeTicker';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { CraftsmanshipSection } from '../components/home/CraftsmanshipSection';
import { TestimonialSection } from '../components/home/TestimonialSection';

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <MarqueeTicker />
      <CategoryGrid />
      <FeaturedProducts />
      <CraftsmanshipSection />
      <TestimonialSection />
    </div>
  );
};

