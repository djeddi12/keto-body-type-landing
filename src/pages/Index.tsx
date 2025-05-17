
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookFeatures from '@/components/BookFeatures';
import TargetAudience from '@/components/TargetAudience';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Helmet } from 'react-helmet';

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
                  <div className="flex justify-center">
                    <style>{`.pp-RERXNLQPQMTRA{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}`}</style>
                    <form action="https://www.paypal.com/ncp/payment/RERXNLQPQMTRA" method="post" target="_blank" style={{display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem'}}>
                      <input className="pp-RERXNLQPQMTRA" type="submit" value="Get Your Copy For Just $27" />
                      <img src="https://www.paypalobjects.com/images/Debit_Credit.svg" alt="Payment methods" width="120" height="24" />
                      <section style={{fontSize: '0.75rem'}}> Optimisé par <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{height: '0.875rem', verticalAlign: 'middle'}}/></section>
                    </form>
                  </div>
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
