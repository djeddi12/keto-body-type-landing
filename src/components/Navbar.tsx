
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
            <style>{`.pp-RERXNLQPQMTRA{text-align:center;border:none;border-radius:0.25rem;min-width:7.5rem;padding:0 1rem;height:2.3rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:0.9rem;line-height:1.25rem;cursor:pointer;}`}</style>
            <form action="https://www.paypal.com/ncp/payment/RERXNLQPQMTRA" method="post" target="_blank" style={{display: 'inline-grid', justifyItems: 'center', alignContent: 'start'}}>
              <input className="pp-RERXNLQPQMTRA hidden md:inline-block" type="submit" value="Get Your Copy" />
            </form>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
