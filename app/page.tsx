'use client';

import { HeroSection } from '@/components/hero-section';
import { MissionSection } from '@/components/mission-section';
import { ServicesSection } from '@/components/services-section';
import { ProductsSection } from '@/components/products-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
}