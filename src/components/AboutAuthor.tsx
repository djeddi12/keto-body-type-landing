
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";

const AboutAuthor: React.FC = () => {
  return (
    <section id="about" className="keto-section bg-white">
      <div className="keto-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="keto-highlight mb-3 inline-block">ABOUT THE AUTHOR</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet the <span className="keto-gradient-text">Expert</span> Behind the Book
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="rounded-full overflow-hidden border-4 border-keto-teal shadow-xl max-w-xs mx-auto">
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Aimad Djeddi - Keto Diet Expert" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-keto-navy">Aimad Djeddi - Nutrition & Body Type Specialist</h3>
            <p className="text-lg text-gray-700">
              With over 15 years of experience in nutritional science and metabolic research, Aimad Djeddi has helped thousands 
              of clients transform their bodies by understanding the critical connection between body types and 
              optimal nutritional approaches.
            </p>
            <p className="text-lg text-gray-700">
              After observing that one-size-fits-all diet plans consistently failed clients with different body types, 
              he developed this comprehensive guide to help people customize the ketogenic diet to their unique body structure 
              and metabolic patterns.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="bg-keto-cream rounded-full p-2 mr-2">
                  <svg className="w-6 h-6 text-keto-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="font-medium">Certified Nutritionist</span>
              </div>
              <div className="flex items-center">
                <div className="bg-keto-cream rounded-full p-2 mr-2">
                  <svg className="w-6 h-6 text-keto-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                </div>
                <span className="font-medium">Master's in Metabolic Science</span>
              </div>
              <div className="flex items-center">
                <div className="bg-keto-cream rounded-full p-2 mr-2">
                  <svg className="w-6 h-6 text-keto-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <span className="font-medium">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
