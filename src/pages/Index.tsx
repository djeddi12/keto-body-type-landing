
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookFeatures from '@/components/BookFeatures';
import TargetAudience from '@/components/TargetAudience';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BookFeatures />
        <TargetAudience />
        <Testimonials />
        <div className="bg-white py-16 text-center">
          <div className="keto-container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-keto-navy text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-keto-teal to-keto-orange opacity-30"></div>
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Get Instant Access Now</h2>
                  <p className="text-lg mb-6">Start your body-type specific keto journey today and see the difference!</p>
                  <a href="#pricing">
                    <Button className="keto-button-primary">
                      Get Your Copy For Just $27
                    </Button>
                  </a>
                  <p className="mt-4 text-sm opacity-80">60-Day Satisfaction Guarantee • Instant Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
