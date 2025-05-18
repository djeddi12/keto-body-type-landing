
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import Footer from '@/components/Footer';
import { CheckCircle, Download, Mail, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <Helmet>
        <title>Thank You For Your Purchase | ketodiet.it.com</title>
        <meta name="description" content="Thank you for purchasing our Keto by Body Type guide. Access your download and get started on your keto journey today." />
        <link rel="canonical" href="https://ketodiet.it.com/thank-you" />
      </Helmet>

      <header className="py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="keto-container">
          <Link to="/" className="text-xl font-bold text-keto-navy">ketodiet.it.com</Link>
        </div>
      </header>

      <main className="flex-grow">
        <div className="keto-container py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-keto-navy mb-4">
              Thank You For Your Purchase!
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Your order has been successfully processed and your download is ready.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto mb-12 overflow-hidden">
            <div className="p-6 md:p-10 space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <OptimizedImage
                    src="/lovable-uploads/a0291785-bb20-4c66-bedc-2bcde502f31f.png"
                    alt="Keto by Body Type Book Cover"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={300}
                    height={400}
                  />
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <h2 className="text-2xl font-bold text-keto-navy">Keto by Body Type</h2>
                  <p className="text-gray-700">
                    Your complete guide to implementing a personalized keto diet based on your unique body shape for maximum fat loss results.
                  </p>
                  
                  <Button className="w-full sm:w-auto bg-keto-teal hover:bg-keto-teal-dark gap-2">
                    <Download className="h-4 w-4" />
                    Download Your Guide (PDF)
                  </Button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-keto-navy mb-4">Next Steps:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="h-8 w-8 text-keto-teal mb-2" />
                    <h4 className="font-semibold mb-2">Read Your Guide</h4>
                    <p className="text-sm text-gray-600">Start by reviewing your personalized keto diet guide.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <Mail className="h-8 w-8 text-keto-teal mb-2" />
                    <h4 className="font-semibold mb-2">Check Your Email</h4>
                    <p className="text-sm text-gray-600">We've sent your receipt and additional resources to your email.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-keto-teal mb-2" />
                    <h4 className="font-semibold mb-2">Start Your Plan</h4>
                    <p className="text-sm text-gray-600">Choose your body type and begin your customized keto journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-keto-navy mb-4">Need assistance?</h3>
            <p className="mb-6">
              If you have any questions or need help, please contact our support team at{' '}
              <a href="mailto:support@ketodiet.it.com" className="text-keto-teal-dark hover:underline">
                support@ketodiet.it.com
              </a>
            </p>
            
            <Link to="/">
              <Button variant="outline" className="gap-2">
                Return to Homepage <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
