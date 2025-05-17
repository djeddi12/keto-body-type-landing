
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How is this different from regular keto?",
      answer: "Traditional keto uses the same macronutrient ratios for everyone. Keto by Body Type customizes your fat, protein, and carb ratios based on your specific body shape. For example, 'apple' shapes need different fat-to-protein ratios than 'pear' shapes due to hormonal differences that affect fat storage and metabolism."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most readers report noticeable changes within 2-3 weeks when following their body-type specific plan, with more significant results after 4-6 weeks. The guide includes specific milestones to track your progress beyond just weight on the scale."
    },
    {
      question: "Is this suitable for beginners to keto?",
      answer: "Absolutely! The guide includes comprehensive instructions for keto beginners. If you're new to keto, you'll find step-by-step instructions to get started, while experienced keto dieters will learn how to optimize their approach for their specific body type."
    },
    {
      question: "Do I have to calculate my macros manually?",
      answer: "No, we provide ready-to-use macro calculations for each body type, broken down by gender and activity level. The guide includes simple charts and formulas so you know exactly what to eat without complicated math."
    },
    {
      question: "How do I receive the guide after purchase?",
      answer: "Immediately after purchase, you'll receive an email with a download link to access your PDF guide. You can view it on any device including computers, tablets, and smartphones. You'll also have access to any future updates."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We stand behind our approach with a 60-day money-back guarantee. If you don't see results after following the program, simply email us at support@ketobodytype.com for a full refund, no questions asked."
    }
  ];

  return (
    <section id="faq" className="keto-section bg-keto-cream">
      <div className="keto-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="keto-highlight mb-3 inline-block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Got Questions? <span className="keto-gradient-text">We've Got Answers</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Have More Questions?</h3>
            <p className="text-gray-600 mb-4">
              Email us at support@ketobodytype.com – We're here to help!
            </p>
            <a href="mailto:support@ketobodytype.com">
              <button className="keto-button-secondary">
                Contact Support
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
