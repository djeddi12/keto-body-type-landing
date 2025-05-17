
import React from 'react';

const SchemaMarkup: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Keto Diet by Body Type",
    "description": "Personalized Keto Diet Plans for Your Unique Body Type. Burn fat 2X faster with custom keto strategies tailored to your specific body shape.",
    "image": "https://ketodiet.it.com/lovable-uploads/a0291785-bb20-4c66-bedc-2bcde502f31f.png",
    "brand": {
      "@type": "Brand",
      "name": "ketodiet.it.com"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://ketodiet.it.com/#pricing",
      "priceCurrency": "USD",
      "price": "27.00",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Melissa"
      },
      "reviewBody": "I lost 18 lbs in 6 weeks – finally something that works for MY body! I've tried standard keto before but the weight always came back. With this body type approach, I'm seeing lasting changes."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "faq": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is this different from regular keto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional keto uses the same macronutrient ratios for everyone. Keto by Body Type customizes your fat, protein, and carb ratios based on your specific body shape."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly will I see results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most readers report noticeable changes within 2-3 weeks when following their body-type specific plan, with more significant results after 4-6 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "What if it doesn't work for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We stand behind our approach with a 60-day money-back guarantee. If you don't see results after following the program, simply email us for a full refund."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SchemaMarkup;
