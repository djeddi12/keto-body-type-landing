
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Upsell = () => {
  const { toast } = useToast();
  
  const handlePurchase = () => {
    toast({
      title: "Item added to your order!",
      description: "You will receive access to our premium meal plans.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <Helmet>
        <title>Special Offer | Keto Diet Meal Plans | ketodiet.it.com</title>
        <meta name="description" content="Exclusive offer: Get our premium keto meal plans at a special discount. Limited time offer for our valued customers." />
        <link rel="canonical" href="https://ketodiet.it.com/upsell" />
      </Helmet>
      
      <header className="py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="keto-container">
          <Link to="/" className="text-xl font-bold text-keto-navy">ketodiet.it.com</Link>
        </div>
      </header>

      <main className="flex-grow">
        <div className="keto-container py-12 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Order Confirmed! One More Step...</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-keto-navy mb-4">
              Upgrade Your Keto Journey With Our Premium Meal Plans
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get 90 days of customized keto meal plans designed specifically for your body type. 
              <span className="font-bold text-keto-teal-dark"> Special one-time offer: 70% OFF today only!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto my-12">
            <div>
              <OptimizedImage
                src="/lovable-uploads/a0291785-bb20-4c66-bedc-2bcde502f31f.png"
                alt="Keto Meal Plans for Your Body Type"
                className="rounded-lg shadow-xl w-full h-auto"
                width={500}
                height={700}
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-keto-navy">What You'll Get:</h2>
              
              <div className="space-y-4">
                {[
                  "90 days of body-type specific keto meal plans",
                  "Shopping lists for each week",
                  "Easy-to-follow recipes with step-by-step instructions",
                  "Nutritional information for every meal",
                  "Access to our private support community"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-keto-teal">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-keto-navy/5 p-6 rounded-lg border border-keto-navy/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-gray-500 text-sm line-through">Regular: $97</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-keto-navy">$29</span>
                      <span className="bg-keto-orange text-white text-xs font-bold px-2 py-1 rounded">SAVE 70%</span>
                    </div>
                  </div>
                  
                  <div>
                    <style>{`.pp-RERXNLQPQMTRA{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}`}</style>
                    <form action="https://www.paypal.com/ncp/payment/RERXNLQPQMTRA" method="post" target="_blank" style={{display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem'}} onClick={handlePurchase}>
                      <input className="pp-RERXNLQPQMTRA" type="submit" value="Add To My Order" />
                      <img src="https://www.paypalobjects.com/images/Debit_Credit.svg" alt="Payment methods" width="120" height="24" />
                    </form>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                This is a one-time payment. No subscription. 60-day money-back guarantee.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/thank-you" className="inline-flex items-center text-keto-teal-dark hover:text-keto-teal font-medium">
              No thanks, take me to my purchase <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upsell;
