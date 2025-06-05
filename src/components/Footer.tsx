
import React from "react";
import { ArrowUp, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40 text-gray-800 py-16 overflow-hidden">
      {/* Floating Background Elements - consistent with rest of website */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[20%] right-[15%] w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-48 h-48 bg-violet-400/18 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-32 h-32 bg-indigo-400/22 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        <div className="absolute top-[10%] left-[25%] w-56 h-56 bg-purple-200/15 rounded-full blur-3xl animate-float-vertical opacity-45" style={{ animationDelay: '12s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-[10%] right-[25%] w-44 h-44 bg-violet-300/16 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '18s', animationDuration: '22s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[45%] left-[20%] w-28 h-28 bg-indigo-300/25 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[50%] right-[20%] w-36 h-36 bg-violet-300/20 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>
        <div className="absolute top-[25%] right-[50%] w-24 h-24 bg-purple-200/28 rounded-full blur-2xl animate-float-vertical opacity-45" style={{ animationDelay: '11s', animationDuration: '15s' }}></div>
        <div className="absolute top-[70%] left-[60%] w-30 h-30 bg-purple-400/22 rounded-full blur-2xl animate-float-vertical opacity-50" style={{ animationDelay: '15s', animationDuration: '17s' }}></div>
        <div className="absolute bottom-[25%] left-[80%] w-26 h-26 bg-indigo-400/20 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '20s', animationDuration: '21s' }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[80%] left-[30%] w-20 h-20 bg-violet-400/25 rounded-full blur-xl animate-float-vertical opacity-50" style={{ animationDelay: '4s', animationDuration: '14s' }}></div>
        <div className="absolute top-[35%] right-[10%] w-22 h-22 bg-purple-300/23 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '9s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[60%] left-[40%] w-18 h-18 bg-indigo-400/18 rounded-full blur-xl animate-float-vertical opacity-40" style={{ animationDelay: '6s', animationDuration: '16s' }}></div>
        <div className="absolute top-[15%] right-[70%] w-16 h-16 bg-violet-200/26 rounded-full blur-lg animate-float-vertical opacity-45" style={{ animationDelay: '13s', animationDuration: '12s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[30%] left-[15%] w-3 h-3 bg-purple-500/40 rounded-full animate-float-vertical" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute top-[75%] right-[40%] w-2.5 h-2.5 bg-violet-500/35 rounded-full animate-float-vertical" style={{ animationDelay: '10s', animationDuration: '10s' }}></div>
        <div className="absolute top-[50%] left-[85%] w-4 h-4 bg-purple-400/30 rounded-full animate-float-vertical" style={{ animationDelay: '16s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-[35%] left-[70%] w-2 h-2 bg-indigo-500/25 rounded-full animate-float-vertical" style={{ animationDelay: '22s', animationDuration: '9s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gray-900 mb-3">Aicrays</div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Building custom AI-powered digital platforms that integrate cybersecurity, data intelligence, and IoT/RFID systems.
            </p>
            <div className="inline-block">
              <span className="text-sm font-medium text-pulse-600 tracking-wide">
                Modular. Intelligent. Secure.
              </span>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 text-sm">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#solutions" className="text-gray-600 hover:text-pulse-600 transition-colors duration-200 text-sm">What We Build</a></li>
                <li><a href="#process" className="text-gray-600 hover:text-pulse-600 transition-colors duration-200 text-sm">How We Build</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-pulse-600 transition-colors duration-200 text-sm">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 text-sm">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-600 hover:text-pulse-600 transition-colors duration-200 text-sm">Get in Touch</a></li>
                <li><a href="mailto:hello@aicrays.com" className="text-gray-600 hover:text-pulse-600 transition-colors duration-200 text-sm">hello@aicrays.com</a></li>
                <li><a href="#partnership" className="text-gray-600 hover:text-pulse-600 transition-colors duration-200 text-sm">Partnership</a></li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Social & Copyright */}
          <div className="space-y-4">
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="group p-3 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 border border-gray-200/50 hover:border-pulse-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-pulse-600 transition-colors" />
              </a>
              <a 
                href="#" 
                className="group p-3 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 border border-gray-200/50 hover:border-pulse-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Github className="w-4 h-4 text-gray-600 group-hover:text-pulse-600 transition-colors" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-sm space-y-1">
              <p className="text-gray-600">© 2025 Aicrays. All rights reserved.</p>
              <p className="text-gray-500">Crafted with precision. Powered by partnership.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-pulse-500/90 backdrop-blur-sm hover:bg-pulse-500 text-white rounded-full shadow-lg hover:shadow-pulse-500/25 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
