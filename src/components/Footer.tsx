
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-pulse-500 mb-4">Aicrays</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building custom AI-powered digital platforms that integrate cybersecurity, data intelligence, and IoT/RFID systems for enterprise clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pulse-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-pulse-500 transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#solutions" className="hover:text-pulse-500 transition-colors">What We Build</a></li>
              <li><a href="#process" className="hover:text-pulse-500 transition-colors">How We Build</a></li>
              <li><a href="#about" className="hover:text-pulse-500 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#contact" className="hover:text-pulse-500 transition-colors">Get in Touch</a></li>
              <li><a href="mailto:hello@aicrays.com" className="hover:text-pulse-500 transition-colors">hello@aicrays.com</a></li>
              <li><a href="#contact" className="hover:text-pulse-500 transition-colors">Partnership</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2025 Aicrays. Built for precision. Powered by partnership.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
