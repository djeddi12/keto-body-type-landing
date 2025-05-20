
import React from 'react';
import { Download, Shield, Clock, AlertTriangle, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="keto-section bg-white">
      <div className="keto-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="keto-highlight mb-3 inline-block">GET YOUR DIGITAL COPY TODAY</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Start Your Body Type Keto Journey For Just <span className="keto-gradient-text">$27</span>
                </h2>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 flex items-center space-x-3">
                <Shield className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-amber-900">60-Day Money Back Guarantee</h3>
                  <p className="text-amber-800">
                    If you're not satisfied with the results after following the program, we'll refund your purchase. No questions asked.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-keto-teal/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Download className="h-6 w-6 text-keto-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Instant Digital Delivery</h3>
                    <p className="text-gray-600">
                      Get immediate access to the complete PDF guide the moment your purchase is complete. No waiting, start implementing today.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-keto-teal/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-keto-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Start Seeing Results Fast</h3>
                    <p className="text-gray-600">
                      Many readers report noticeable changes within the first 14 days when following their body-type specific plan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-keto-teal/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-6 w-6 text-keto-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Works on Any Device</h3>
                    <p className="text-gray-600">
                      Your digital PDF guide works on any smartphone, tablet, or computer. Read anywhere, even offline.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="mb-4 flex justify-center md:justify-start">
                  <a href="https://www.digistore24.com/product/613394" target="_blank" rel="noopener noreferrer" className="keto-button-primary w-full text-center">
                    Buy Now & Get Instant Digital Access
                  </a>
                </div>
                
                <div className="text-center mt-4 text-sm text-gray-600 space-y-2">
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>Secure Checkout</span>
                    </div>
                    <span>|</span>
                    <span>PDF Digital Format</span>
                    <span>|</span>
                    <span>Instant Access</span>
                  </div>
                  <div>
                    <p>Payment processed securely by <strong>Digistore24.com</strong></p>
                  </div>
                  <div>
                    <Link to="/legal-information" className="text-keto-teal hover:underline">Legal Information</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-keto-orange/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="absolute -top-6 -right-6 bg-keto-teal text-white font-bold py-2 px-4 rounded-full shadow-lg transform rotate-12">
                  FREE BONUS!
                </div>
                
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-keto-orange/10 rounded-full mb-4">
                    <span className="text-4xl">🎁</span>
                  </div>
                  <h3 className="text-xl font-bold">Body Type Cheat Sheet</h3>
                  <p className="text-gray-600">
                    Quick reference guide with the most important tips for each body type
                  </p>
                </div>
                
                <div className="bg-keto-cream rounded-xl p-4 mb-6">
                  <img 
                    src="https://placehold.co/800x400/FFFAF0/333333/png?text=Quick+Reference+Cheat+Sheet&font=montserrat" 
                    alt="Body Type Cheat Sheet Preview" 
                    className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                  />
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-keto-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>At-a-glance food lists for each body type</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-keto-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Quick macro adjustments when progress stalls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-keto-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Body type-specific supplements that help</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">Regular Value: $17</p>
                  <p className="font-bold text-keto-orange text-lg">Yours FREE with purchase today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
