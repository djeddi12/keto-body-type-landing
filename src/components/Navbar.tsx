
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="keto-container flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-keto-navy">Keto by Body Type</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-gray-600 hover:text-keto-teal-dark transition-colors">Features</a>
          <a href="#who-its-for" className="text-gray-600 hover:text-keto-teal-dark transition-colors">Who It's For</a>
          <a href="#testimonials" className="text-gray-600 hover:text-keto-teal-dark transition-colors">Results</a>
          <a href="#pricing" className="text-gray-600 hover:text-keto-teal-dark transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-keto-teal-dark transition-colors">FAQ</a>
        </nav>
        
        <div>
          <a href="#pricing">
            <Button className="keto-button-secondary hidden md:inline-block">
              Get Your Copy
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
