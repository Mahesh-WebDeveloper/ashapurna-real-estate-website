import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-8">
        {/* Company Info Section - 40% width */}
        <div className="w-full md:w-[40%] space-y-6">
          <img 
            src="images/ashapuranalogo.jpg" 
            alt="Ashapurna Logo" 
            className="h-16 w-auto"
          />
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-gray-300" />
              <div>
                <p className="font-semibold">9314041747</p>
                <p>0291-2514747, 9610383747</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-300" />
              <p>marketing@ashapurna.com</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-gray-300" />
              <p className="leading-relaxed">
                4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011
              </p>
            </div>
          </div>
        </div>

        {/* Useful and Important Links Section - 60% width */}
        <div className="w-full md:w-[60%] space-y-12">
          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg border-b border-gray-700 pb-2">
              Useful Links
            </h3>
            <div className="grid grid-cols-4 gap-3">
              <a href="#" className="hover:text-white transition-colors duration-200">Residential Projects</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Commercial Projects</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Investors Club</a>
              <a href="#" className="hover:text-white transition-colors duration-200">NRI Corner</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Career</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Become A Partner</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Our Testimonials</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg border-b border-gray-700 pb-2">
              Important Links
            </h3>
            <div className="grid grid-cols-4 gap-3">
              <a href="#" className="hover:text-white transition-colors duration-200">Social Responsibility</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Corporate Profile</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Why Invest in Jodhpur?</a>
              <a href="#" className="hover:text-white transition-colors duration-200">RERA Disclaimer</a>
              <a href="#" className="hover:text-white transition-colors duration-200">EMI Calculator</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Referral Scheme</a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-12 text-center">
        <h4 className="text-white font-semibold mb-6  border-t border-gray-700 pt-6">Follow Us On</h4>
        <div className="flex justify-center items-center space-x-6">
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

