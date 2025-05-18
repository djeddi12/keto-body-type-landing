
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-keto-cream py-16 md:py-24 relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="keto-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <span className="keto-highlight">NEW APPROACH TO KETO</span>
              <h2 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="keto-gradient-text">Discover the Fat-Burning Plan</span> 
                <br />For <span className="underline decoration-keto-orange decoration-4">YOUR</span> Body Type
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Burn Fat <span className="font-bold text-keto-orange-dark">2X Faster</span> With a Custom Keto Strategy Designed For Your Unique Body
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://www.digistore24.com/product/XXXXX" target="_blank" rel="noopener noreferrer" className="keto-button-primary flex items-center justify-center w-full sm:w-auto">
                <span>Get Started Today</span>
                <ArrowDownCircle className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" aria-label="Learn more about our keto diet plans">
                <button className="keto-button-secondary w-full sm:w-auto">
                  Learn More
                </button>
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-keto-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>60-Day Money Back Guarantee</span>
              <span aria-hidden="true">•</span>
              <svg className="w-5 h-5 text-keto-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
              </svg>
              <span>Secure Checkout via Digistore24</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-keto-teal/20 to-transparent rounded-full blur-3xl opacity-60"></div>
            <div className="relative animate-float">
              <div className="bg-white rounded-3xl p-4 shadow-2xl transform rotate-3 relative">
                <img 
                  src="/lovable-uploads/a0291785-bb20-4c66-bedc-2bcde502f31f.png"
                  alt="Keto by Body Type Book Cover - Personalized diet plan guide" 
                  className="w-full h-auto rounded-2xl"
                  width="500"
                  height="700"
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 bg-keto-orange-dark text-white font-bold py-2 px-4 rounded-full shadow-lg transform rotate-12">
                  Only $27!
                </div>
              </div>
              <div className="absolute top-4 left-2 transform -rotate-6 bg-keto-cream p-3 rounded-lg shadow-md">
                <span className="flex items-center text-keto-navy font-semibold">
                  <span className="emoji-icon" role="img" aria-label="Fire">🔥</span> Burn Fat Smarter!
                </span>
              </div>
              <div className="absolute bottom-12 -right-6 transform rotate-6 bg-white p-3 rounded-lg shadow-md">
                <span className="flex items-center text-keto-navy font-semibold">
                  <span className="emoji-icon" role="img" aria-label="Sparkles">✨</span> Custom Plan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
