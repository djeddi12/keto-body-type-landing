
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm" role="banner">
      <div className="keto-container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" aria-label="ketodiet.it.com homepage">
            <h1 className="text-xl font-bold text-keto-navy">ketodiet.it.com</h1>
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-6 items-center" aria-label="Main Navigation">
          <a href="#features" className="text-gray-600 hover:text-keto-teal-dark transition-colors" aria-label="Learn about our features">Features</a>
          <a href="#body-types" className="text-gray-600 hover:text-keto-teal-dark transition-colors" aria-label="Learn about body types">Body Types</a>
          <a href="#testimonials" className="text-gray-600 hover:text-keto-teal-dark transition-colors" aria-label="Read customer testimonials">Results</a>
          <a href="#about" className="text-gray-600 hover:text-keto-teal-dark transition-colors" aria-label="About the author">About</a>
          <a href="#pricing" className="text-gray-600 hover:text-keto-teal-dark transition-colors" aria-label="View our pricing">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-keto-teal-dark transition-colors" aria-label="Read frequently asked questions">FAQ</a>
        </nav>
        
        <div>
          <a href="https://www.digistore24.com/product/XXXXX" target="_blank" rel="noopener noreferrer" className="keto-button-primary hidden md:inline-block py-2 px-4 text-sm">
            Get Your Copy
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
