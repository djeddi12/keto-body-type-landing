
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LegalInformation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <Helmet>
        <title>Legal Information | ketodiet.it.com</title>
        <meta name="description" content="Legal information about Keto by Body Type digital products including company details and business information." />
        <link rel="canonical" href="https://ketodiet.it.com/legal-information" />
      </Helmet>

      <header className="py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="keto-container">
          <Link to="/" className="text-xl font-bold text-keto-navy">ketodiet.it.com</Link>
        </div>
      </header>

      <main className="flex-grow">
        <div className="keto-container py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Homepage
              </Button>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-keto-navy">Legal Information</h1>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-keto-navy">Company Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Business Owner:</h3>
                  <p>Aimad Djeddi</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700">Full Address:</h3>
                  <address className="not-italic">
                    Aimad Djeddi<br />
                    1234 Ferphos Street<br />
                    Tebessa City, AC 12000<br />
                    Algeria
                  </address>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700">Contact Information:</h3>
                  <p>Phone: <a href="tel:0665121272" className="text-keto-teal hover:underline">0665121272</a></p>
                  <p>Email: <a href="mailto:support@ketodiet.it.com" className="text-keto-teal hover:underline">support@ketodiet.it.com</a></p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-keto-navy">Payment Processing</h2>
              <p className="mb-4">All payments for Keto by Body Type digital products are processed by Digistore24. The debit is made by Digistore24, and the withdrawal from your account will be done by Digistore24.</p>
              <p>The charge will appear as "DIGISTORE24*KETODIET" on your bank statement.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-keto-navy">Product Information</h2>
              <p className="mb-4">Keto by Body Type is a digital product (PDF) that is delivered immediately after purchase. You will receive an email with download instructions, and you can also access your purchase on the thank you page after completing your order.</p>
              
              <p className="mb-4">Price: $27.00</p>
              
              <p className="font-semibold">All digital products come with a 60-day money-back guarantee. If you're not satisfied with your purchase, contact our support team for a full refund.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalInformation;
