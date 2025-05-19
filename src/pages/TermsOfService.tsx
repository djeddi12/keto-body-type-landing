
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | ketodiet.it.com</title>
        <meta name="description" content="Terms of Service for ketodiet.it.com - Read our terms and conditions before making a purchase." />
      </Helmet>
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="keto-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Last Updated: May 19, 2025
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                These Terms of Service ("Terms") govern your use of the ketodiet.it.com website and the purchase of any products from us. By accessing our website or purchasing our products, you agree to be bound by these Terms.
              </p>
              
              <h2>Use of Our Website</h2>
              <p>
                You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul>
                <li>Use the website in any way that violates applicable laws or regulations.</li>
                <li>Use the website to transmit any material that contains viruses, trojan horses, or other harmful code.</li>
                <li>Attempt to gain unauthorized access to any portion of the website.</li>
                <li>Use the website to collect personal information about users.</li>
              </ul>
              
              <h2>Products and Purchases</h2>
              <p>
                All purchases are processed through Digistore24, a third-party payment processor. Your purchase is subject to Digistore24's terms and conditions in addition to these Terms.
              </p>
              <p>
                We provide digital products that are downloaded or accessed electronically. By purchasing our products, you acknowledge that:
              </p>
              <ul>
                <li>Digital products are non-returnable and non-refundable once downloaded or accessed, except as required by law or as specified in our refund policy.</li>
                <li>We reserve the right to modify, update, or discontinue any product without notice.</li>
                <li>Products are for personal use only and may not be resold, distributed, or shared without our written permission.</li>
              </ul>
              
              <h2>Intellectual Property</h2>
              <p>
                The content on our website, including text, graphics, logos, images, as well as the compilation thereof, and any software used on the website, is our property or the property of our suppliers and protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:
              </p>
              <ul>
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                <li>You may store files that are automatically cached by your web browser for display enhancement purposes.</li>
                <li>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use.</li>
              </ul>
              
              <h2>Disclaimer of Warranties</h2>
              <p>
                OUR PRODUCTS AND WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              
              <h2>Health Disclaimer</h2>
              <p>
                Our products provide information related to nutrition, fitness, and health topics. This information is not medical advice and is not intended to replace the advice or attention of health-care professionals. Consult with your physician before beginning any diet, exercise, or other health program. Your use of our products does not create a doctor-patient relationship.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL WE BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, OR USE OF, THE WEBSITE OR PRODUCTS.
              </p>
              
              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless ketodiet.it.com, its employees, contractors, and affiliates from any claims, damages, liabilities, costs, or expenses arising from your use of the website or products.
              </p>
              
              <h2>Changes to Terms</h2>
              <p>
                We may revise these Terms at any time without notice. By using this website, you are agreeing to be bound by the current version of these Terms.
              </p>
              
              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without giving effect to any principles of conflicts of law.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:terms@ketodiet.it.com">terms@ketodiet.it.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
