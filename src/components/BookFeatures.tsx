
import React from 'react';
import { FileText, Users, TrendingUp, ShoppingCart, Check, BarChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const BookFeatures: React.FC = () => {
  return (
    <section id="features" className="keto-section bg-white">
      <div className="keto-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="keto-highlight mb-3 inline-block">WHAT'S INSIDE THE GUIDE</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to <span className="keto-gradient-text">Unlock Your Body's</span> Fat-Burning Potential
          </h2>
          <p className="text-gray-600 text-lg">
            Tired of doing keto and not seeing results? The problem isn't you — it's the wrong plan for your body shape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="keto-card">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-keto-teal/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-keto-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Body-Type Quiz</h3>
              <p className="text-gray-600">
                A quick assessment to identify whether you're Apple, Pear, Hourglass, or Rectangle body type to find your optimal fat-burning formula.
              </p>
            </CardContent>
          </Card>
          
          <Card className="keto-card">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-keto-teal/10 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-keto-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Keto Macros</h3>
              <p className="text-gray-600">
                Personalized macronutrient targets based on your specific body shape for maximum fat loss efficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="keto-card">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-keto-teal/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-keto-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hormonal Fat Loss Tips</h3>
              <p className="text-gray-600">
                Specialized strategies especially for women 30-65 to balance hormones and optimize fat burning through diet adjustments.
              </p>
            </CardContent>
          </Card>
          
          <Card className="keto-card">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-keto-teal/10 flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-keto-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">7-Day Meal Plan</h3>
              <p className="text-gray-600">
                Complete 7-day sample meal plan with shopping list tailored for your body type to kickstart your fat loss journey.
              </p>
            </CardContent>
          </Card>
          
          <Card className="keto-card">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-keto-teal/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-keto-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Body Type Analysis</h3>
              <p className="text-gray-600">
                Detailed breakdown of how each body shape stores fat differently and why customized approaches matter.
              </p>
            </CardContent>
          </Card>
          
          <Card className="keto-card">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-keto-teal/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-keto-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plateau-Busting Tips</h3>
              <p className="text-gray-600">
                Proven strategies for overcoming weight loss plateaus when standard keto approaches stop working.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-keto-cream rounded-2xl p-6 md:p-8 inline-block max-w-4xl">
            <h3 className="text-xl font-bold mb-4">💡 Why This Works:</h3>
            <p className="text-lg text-gray-700">
              Traditional keto ignores body-type-specific fat storage and hormonal patterns.
              This guide uses nutritional science to match your body with the right plan — unlocking faster, sustainable fat loss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookFeatures;
