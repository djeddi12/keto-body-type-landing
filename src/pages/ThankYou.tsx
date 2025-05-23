
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import Footer from '@/components/Footer';
import { CheckCircle, Download, Mail, BookOpen, ArrowRight, Shield, AlertTriangle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
              Your order has been successfully processed and your digital product is ready for immediate download.
            </p>
          </div>

          <Alert className="bg-blue-50 border-blue-200 mb-8 max-w-4xl mx-auto">
            <Info className="h-5 w-5 text-blue-500" />
            <AlertDescription>
              <p className="font-medium text-blue-800">Transaction Information</p>
              <p className="text-sm text-blue-700">The debit is made by Digistore24. The withdrawal from your account will be done by Digistore24.</p>
              <p className="text-sm text-blue-700 mt-1">The charge will appear as "DIGISTORE24*KETODIET" on your bank statement.</p>
            </AlertDescription>
          </Alert>

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
                  
                  <Alert className="bg-yellow-50 border-yellow-200 mb-4">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <AlertDescription>
                      <p className="text-sm text-yellow-700">Please check your email inbox for a confirmation email with your download link. If you don't see it, please check your spam/junk folder.</p>
                    </AlertDescription>
                  </Alert>
                  
                  <div className="bg-green-50 p-4 rounded-md border border-green-200">
                    <p className="font-medium text-green-800 mb-2">Your Digital Product - Instant Access</p>
                    <a href="https://docs.google.com/document/d/1mwCgCLGMb7og_EYoxQOJDpi-Q-IrZhz8/edit?usp=drive_link&ouid=118374563375362136325&rtpof=true&sd=true" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-keto-teal hover:bg-keto-teal-dark text-white h-10 px-4 py-2 w-full sm:w-auto gap-2">
                      <Download className="h-4 w-4" />
                      Download Your Guide (PDF)
                    </a>
                  </div>
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

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-center gap-4">
                <Shield className="h-10 w-10 text-keto-teal flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">60-Day Money Back Guarantee</h4>
                  <p className="text-gray-600">If you're not completely satisfied with your purchase, contact us within 60 days for a full refund. No questions asked.</p>
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
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="gap-2">
                  Return to Homepage <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/legal-information">
                <Button variant="outline" className="gap-2">
                  Legal Information <Info className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;

