
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const BodyTypeSection: React.FC = () => {
  const bodyTypes = [
    {
      name: "Endomorph",
      description: "Naturally higher body fat, slower metabolism. Requires specific macronutrient ratios to optimize fat loss while maintaining energy.",
      icon: "🍐",
      features: [
        "Higher fat storage in lower body",
        "Struggles with traditional diets",
        "Needs precise carb timing"
      ]
    },
    {
      name: "Mesomorph",
      description: "Athletic build with moderate metabolism. Benefits from cyclical keto approach with strategic carb refeeds.",
      icon: "⌛",
      features: [
        "Even fat distribution",
        "Responds well to exercise",
        "Faster adaptation to ketosis"
      ]
    },
    {
      name: "Ectomorph",
      description: "Naturally lean with faster metabolism. Requires higher protein and specific fats to maintain muscle while losing stubborn fat.",
      icon: "🍎",
      features: [
        "Struggles to gain muscle",
        "Often has stubborn belly fat",
        "Needs higher caloric keto diet"
      ]
    },
    {
      name: "Rectangle",
      description: "Balanced body type but may have 'skinny fat' composition. Benefits from targeted keto strategies to improve body composition.",
      icon: "▭",
      features: [
        "Even fat distribution",
        "May appear thin but have high body fat",
        "Benefits from strength training with keto"
      ]
    }
  ];

  return (
    <section id="body-types" className="keto-section bg-keto-cream">
      <div className="keto-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="keto-highlight mb-3 inline-block">WHY BY BODY TYPE?</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            One-Size-Fits-All <span className="text-keto-orange">Doesn't Work</span> For Keto
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your body is unique, and your keto approach should be too. Different body types store fat differently, 
            process carbs differently, and respond to ketosis differently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bodyTypes.map((type, index) => (
            <Card key={index} className="keto-card overflow-visible">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{type.icon}</div>
                  <h3 className="text-xl font-bold text-keto-navy">{type.name} Body Type</h3>
                </div>
                <p className="text-gray-700 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-keto-teal mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-bold mb-6">Our guide customizes your keto approach to match YOUR specific body type</p>
          <a href="#pricing" className="keto-button-primary inline-block">
            Find Your Body Type Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default BodyTypeSection;
