
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookFeatures from '@/components/BookFeatures';
import BodyTypeSection from '@/components/BodyTypeSection';
import Testimonials from '@/components/Testimonials';
import AboutAuthor from '@/components/AboutAuthor';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ketodiet.it.com - Your Smart Fat-Burning Guide | Personalized Keto Diet Plans</title>
        <meta name="description" content="Transform your body with our personalized keto diet plans tailored to your unique body type. Burn fat 2X faster with scientifically-backed strategies." />
        <link rel="canonical" href="https://ketodiet.it.com/" />
      </Helmet>
      <SchemaMarkup />
      <Navbar />
      <main>
        <Hero />
        <BookFeatures />
        <BodyTypeSection />
        <Testimonials />
        <AboutAuthor />
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
                  <div className="flex justify-center">
                    <a href="https://www.digistore24.com/product/613394" target="_blank" rel="noopener noreferrer" className="keto-button-primary">
                      Get Your Copy For Just $27
                    </a>
                  </div>
                  <p className="mt-4 text-sm opacity-80">60-Day Satisfaction Guarantee • Instant Download • Processed by Digistore24.com</p>
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
