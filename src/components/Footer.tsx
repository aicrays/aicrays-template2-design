
import React from "react";
import { ArrowUp, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white py-12 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated floating orbs */}
        <div className="absolute top-[20%] right-[15%] w-24 h-24 bg-purple-400/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-32 h-32 bg-violet-400/8 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-20 h-20 bg-indigo-400/12 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '3s', animationDuration: '12s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-purple-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[70%] right-[25%] w-1.5 h-1.5 bg-violet-300/50 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[45%] left-[70%] w-2.5 h-2.5 bg-indigo-300/30 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Brand */}
          <div className="space-y-4">
            <div>
              <div className="text-2xl font-bold text-white mb-3">Aicrays</div>
              <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
                Building custom AI-powered digital platforms that integrate cybersecurity, data intelligence, and IoT/RFID systems for enterprise clients.
              </p>
              <div className="inline-block">
                <span className="text-base font-semibold text-purple-200 tracking-wide">
                  Modular. Intelligent. Secure.
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="group p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Linkedin className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="group p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Github className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Navigation Groups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-100">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#solutions" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">What We Build</a></li>
                <li><a href="#process" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">How We Build</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">Case Studies</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-100">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">About Us</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">Our Team</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">Careers</a></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4 text-purple-100">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">Get in Touch</a></li>
                <li><a href="mailto:hello@aicrays.com" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">hello@aicrays.com</a></li>
                <li><a href="#partnership" className="text-gray-300 hover:text-purple-200 transition-colors duration-200 text-sm">Partnership</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-6"></div>
        
        {/* Bottom Copyright */}
        <div className="text-center space-y-1">
          <p className="text-gray-300">
            © 2025 Aicrays. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Crafted with precision. Powered by partnership.
          </p>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-purple-500/80 backdrop-blur-sm hover:bg-purple-500 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
