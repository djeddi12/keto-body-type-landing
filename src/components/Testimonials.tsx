
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Melissa",
      age: 42,
      text: "I lost 18 lbs in 6 weeks – finally something that works for MY body! I've tried standard keto before but the weight always came back. With this body type approach, I'm seeing lasting changes.",
      stars: 5,
      image: "https://placehold.co/100/2DD4BF/FFFFFF/png?text=M&font=montserrat"
    },
    {
      name: "Jenna",
      age: 37,
      text: "My belly fat was hormonal. This guide helped me fix it with food. I was skeptical at first, but within 3 weeks I noticed my clothes fitting better especially around my midsection.",
      stars: 5,
      image: "https://placehold.co/100/FF9E4F/FFFFFF/png?text=J&font=montserrat"
    },
    {
      name: "Robert",
      age: 51,
      text: "As a rectangle body type, I was always told I was 'skinny fat'. This program helped me lose the visceral fat I couldn't see but was damaging my health. Now my energy is through the roof!",
      stars: 5,
      image: "https://placehold.co/100/2DD4BF/FFFFFF/png?text=R&font=montserrat"
    }
  ];

  return (
    <section id="testimonials" className="keto-section bg-gradient-to-b from-white to-keto-cream">
      <div className="keto-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="keto-highlight mb-3 inline-block">REAL RESULTS FROM REAL PEOPLE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See How People Like <span className="keto-gradient-text">You</span> Are Transforming Their Bodies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="keto-card overflow-visible">
              <CardContent className="p-6 relative">
                <div className="absolute -top-6 left-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}'s profile`} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-keto-orange text-keto-orange" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">Age {testimonial.age}</p>
                    </div>
                    <div className="text-keto-orange font-bold">
                      ✓ Verified Purchase
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block max-w-4xl py-2 px-4 border-l-4 border-keto-orange bg-white rounded shadow-sm">
            <p className="text-xl font-semibold italic text-gray-700">
              "Individual results may vary, but our approach is grounded in nutritional science and customized for each body type."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
