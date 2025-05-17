
import React from 'react';
import { Check } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section id="who-its-for" className="keto-section bg-keto-navy text-white">
      <div className="keto-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-white/20 text-white rounded-lg px-3 py-1 font-medium inline-block mb-3">WHO THIS IS FOR</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perfect For People Who Are <span className="text-keto-orange">Serious</span> About Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-keto-teal rounded-full p-1 flex-shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-keto-teal">Women & Men aged 30-65</h3>
                <p className="text-gray-300">
                  Specifically designed for adults in this age range when metabolism and hormones start changing and traditional diets become less effective.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-keto-teal rounded-full p-1 flex-shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-keto-teal">Stuck on a weight loss plateau</h3>
                <p className="text-gray-300">
                  If you've tried keto or other diets before and initially lost weight but then stalled, this approach specifically addresses breaking through plateaus.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-keto-teal rounded-full p-1 flex-shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-keto-teal">Suffering from hormonal belly fat</h3>
                <p className="text-gray-300">
                  Specifically addresses how to target stubborn hormonal fat that accumulates around the midsection through tailored nutritional strategies.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-keto-teal rounded-full p-1 flex-shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-keto-teal">Tried keto before without results</h3>
                <p className="text-gray-300">
                  If standard keto didn't work for you, it's likely because it wasn't matched to your specific body type. Our approach fixes this common mistake.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-keto-teal/20 to-keto-teal/10 p-6 rounded-2xl h-48 transform translate-y-8 flex items-center justify-center">
                  <span className="text-6xl">🍐</span>
                </div>
                <div className="bg-gradient-to-br from-keto-orange/20 to-keto-orange/10 p-6 rounded-2xl h-48 flex items-center justify-center">
                  <span className="text-6xl">⌛</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-keto-orange/20 to-keto-orange/10 p-6 rounded-2xl h-48 flex items-center justify-center">
                  <span className="text-6xl">🍎</span>
                </div>
                <div className="bg-gradient-to-br from-keto-teal/20 to-keto-teal/10 p-6 rounded-2xl h-48 transform translate-y-8 flex items-center justify-center">
                  <span className="text-6xl">▭</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full text-center w-32 h-32 flex items-center justify-center border-2 border-white/30">
                <div>
                  <div className="text-sm font-semibold">Find</div>
                  <div className="text-xl font-bold text-keto-orange">YOUR</div>
                  <div className="text-sm font-semibold">Type</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
