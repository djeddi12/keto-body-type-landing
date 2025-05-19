
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Support | ketodiet.it.com</title>
        <meta name="description" content="Contact our support team for any questions about your keto diet plan or purchase." />
      </Helmet>
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="keto-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Support Team</h1>
              <p className="text-lg text-gray-600">
                We're here to help you on your keto journey. Get in touch with any questions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-keto-cream rounded-full mb-4">
                  <Mail className="h-6 w-6 text-keto-teal" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-500 mb-4">For general inquiries and support</p>
                <a href="mailto:support@ketodiet.it.com" className="text-keto-teal-dark font-medium hover:underline">
                  support@ketodiet.it.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-keto-cream rounded-full mb-4">
                  <Phone className="h-6 w-6 text-keto-teal" />
                </div>
                <h3 className="font-semibold mb-2">Customer Service</h3>
                <p className="text-gray-500 mb-4">Monday-Friday: 9am-5pm EST</p>
                <span className="text-keto-teal-dark font-medium">
                  +1 (800) 555-KETO
                </span>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-keto-cream rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-keto-teal" />
                </div>
                <h3 className="font-semibold mb-2">Order Support</h3>
                <p className="text-gray-500 mb-4">For questions about your purchase</p>
                <a href="https://www.digistore24.com/support" target="_blank" rel="noopener noreferrer" className="text-keto-teal-dark font-medium hover:underline">
                  Digistore24 Support
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-keto-teal focus:border-keto-teal" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-keto-teal focus:border-keto-teal" 
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-keto-teal focus:border-keto-teal" 
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-keto-teal focus:border-keto-teal" 
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <Button className="keto-button-primary">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-600 mb-6">
                For faster service regarding your order, please contact Digistore24 directly with your order number.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://www.digistore24.com/support" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="keto-button-secondary"
                >
                  Digistore24 Support Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
