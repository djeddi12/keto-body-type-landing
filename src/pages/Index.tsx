
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookFeatures from '@/components/BookFeatures';
import BodyTypeSection from '@/components/BodyTypeSection';
import Testimonials from '@/components/Testimonials';
import AboutAuthor from '@/components/AboutAuthor';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import TargetAudience from '@/components/TargetAudience';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Helmet } from 'react-helmet-async';

// Privacy Policy Section
const PrivacyPolicy = () => (
  <section id="privacy" className="keto-section bg-white">
    <div className="keto-container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="keto-highlight mb-3 inline-block">PRIVACY POLICY</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Privacy Policy</h2>
      </div>
      <div className="prose prose-lg mx-auto">
        <p>Last updated: May 19, 2025</p>
        <p>At ketodiet.it.com, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our site.</p>
        
        <h3>Information We Collect</h3>
        <p>When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
        
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect to fulfill any orders placed through our site and to communicate with you. We may also use this information to improve our products and services.</p>
        
        <h3>Sharing Your Information</h3>
        <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you.</p>
        
        <h3>Contact Us</h3>
        <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@ketodiet.it.com.</p>
      </div>
    </div>
  </section>
);

// Terms of Service Section
const TermsOfService = () => (
  <section id="terms" className="keto-section bg-keto-cream">
    <div className="keto-container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="keto-highlight mb-3 inline-block">TERMS OF SERVICE</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h2>
      </div>
      <div className="prose prose-lg mx-auto">
        <p>Last updated: May 19, 2025</p>
        <p>Please read these Terms of Service carefully before using our website.</p>
        
        <h3>Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials on ketodiet.it.com for personal, non-commercial transitory viewing only.</p>
        
        <h3>Disclaimer</h3>
        <p>The materials on ketodiet.it.com are provided on an 'as is' basis. ketodiet.it.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        
        <h3>Limitations</h3>
        <p>In no event shall ketodiet.it.com or its suppliers be liable for any damages arising out of the use or inability to use the materials on ketodiet.it.com, even if ketodiet.it.com or a ketodiet.it.com authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        
        <h3>Governing Law</h3>
        <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
      </div>
    </div>
  </section>
);

// Contact Section
const Contact = () => (
  <section id="contact" className="keto-section bg-white">
    <div className="keto-container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="keto-highlight mb-3 inline-block">CONTACT US</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl mb-8">Have questions about our keto guide or need support with your purchase? We're here to help!</p>
        
        <div className="bg-keto-cream rounded-xl p-8 shadow-sm">
          <h3 className="font-bold text-xl mb-4">Contact Information</h3>
          <p className="mb-6">Email: <a href="mailto:support@ketodiet.it.com" className="text-keto-teal hover:underline">support@ketodiet.it.com</a></p>
          
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-700 mb-4">For fastest response, please include:</p>
            <ul className="text-left list-disc pl-6 mb-4">
              <li>Your full name</li>
              <li>Order number (if applicable)</li>
              <li>Detailed description of your question or issue</li>
            </ul>
            <p className="text-sm text-gray-500">We aim to respond to all inquiries within 24-48 hours during business days.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
        <TargetAudience />
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
        <Contact />
        <PrivacyPolicy />
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
