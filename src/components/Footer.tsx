import React from 'react';
import { Instagram, Youtube, Pointer as Pinterest, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f8f3f6] py-16">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="font-medium mb-6 text-lg">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Eyes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Hair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Lips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Face</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Skincare</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-6 text-lg">Customer Care</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
            </ul>
          </div>

          <div className="flex justify-end">
            <div className="text-6xl font-serif">G</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">© 2025 GLOW All Rights Reserved</p>
          <div className="flex items-center gap-8">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Pinterest className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;