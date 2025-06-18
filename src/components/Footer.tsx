
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Ojha Printing Press
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for all printing solutions. Quality prints, timely delivery.
            </p>
            <p className="text-gray-300">
              📞 +91 7379340224<br/>
              📧 info@ojhaprintingpress.com
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Business Cards</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Letterheads</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Brochures</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Wedding Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Ojha Printing Press. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
