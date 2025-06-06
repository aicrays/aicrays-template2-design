
import React from "react";
import { ArrowUp, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white py-8 overflow-hidden">
      {/* Enhanced Floating Background Elements with More Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Extra Large floating orbs */}
        <div className="absolute top-[5%] left-[1%] w-96 h-96 bg-purple-300/12 rounded-full blur-3xl animate-float-vertical opacity-55" style={{ animationDelay: '3s', animationDuration: '35s' }}></div>
        <div className="absolute bottom-[2%] right-[3%] w-88 h-88 bg-blue-300/10 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '13s', animationDuration: '40s' }}></div>
        <div className="absolute top-[50%] right-[85%] w-76 h-76 bg-purple-400/14 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '23s', animationDuration: '37s' }}></div>
        
        {/* Large floating orbs */}
        <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-purple-300/15 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-36 h-36 bg-blue-300/12 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-24 h-24 bg-purple-400/18 rounded-full blur-3xl animate-float-vertical opacity-40" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[10%] left-[70%] w-40 h-40 bg-blue-400/13 rounded-full blur-3xl animate-float-vertical opacity-55" style={{ animationDelay: '15s', animationDuration: '26s' }}></div>
        <div className="absolute top-[75%] right-[8%] w-28 h-28 bg-purple-300/16 rounded-full blur-3xl animate-float-vertical opacity-58" style={{ animationDelay: '20s', animationDuration: '22s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[45%] left-[20%] w-20 h-20 bg-blue-300/20 rounded-full blur-2xl animate-float-vertical opacity-45" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[50%] right-[20%] w-28 h-28 bg-purple-300/15 rounded-full blur-2xl animate-float-vertical opacity-50" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>
        <div className="absolute top-[30%] left-[60%] w-22 h-22 bg-blue-400/17 rounded-full blur-2xl animate-float-vertical opacity-42" style={{ animationDelay: '11s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[70%] right-[50%] w-26 h-26 bg-purple-400/14 rounded-full blur-2xl animate-float-vertical opacity-47" style={{ animationDelay: '17s', animationDuration: '21s' }}></div>
        <div className="absolute top-[85%] left-[40%] w-24 h-24 bg-blue-300/19 rounded-full blur-2xl animate-float-vertical opacity-52" style={{ animationDelay: '25s', animationDuration: '17s' }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[80%] left-[30%] w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-float-vertical opacity-35" style={{ animationDelay: '4s', animationDuration: '14s' }}></div>
        <div className="absolute top-[35%] right-[10%] w-18 h-18 bg-blue-300/18 rounded-full blur-xl animate-float-vertical opacity-40" style={{ animationDelay: '9s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[40%] left-[80%] w-14 h-14 bg-purple-300/22 rounded-full blur-xl animate-float-vertical opacity-38" style={{ animationDelay: '14s', animationDuration: '11s' }}></div>
        <div className="absolute top-[15%] right-[70%] w-20 h-20 bg-blue-400/16 rounded-full blur-xl animate-float-vertical opacity-43" style={{ animationDelay: '19s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[60%] left-[15%] w-12 h-12 bg-purple-400/24 rounded-full blur-lg animate-float-vertical opacity-36" style={{ animationDelay: '22s', animationDuration: '12s' }}></div>
        
        {/* Micro orbs for texture */}
        <div className="absolute top-[55%] right-[75%] w-10 h-10 bg-blue-300/15 rounded-full blur-md animate-float-vertical opacity-30" style={{ animationDelay: '6s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[25%] left-[50%] w-8 h-8 bg-purple-400/18 rounded-full blur-md animate-float-vertical opacity-33" style={{ animationDelay: '12s', animationDuration: '10s' }}></div>
        <div className="absolute top-[70%] right-[40%] w-12 h-12 bg-blue-400/14 rounded-full blur-sm animate-float-vertical opacity-28" style={{ animationDelay: '18s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-[80%] left-[65%] w-6 h-6 bg-purple-300/20 rounded-full blur-sm animate-float-vertical opacity-31" style={{ animationDelay: '24s', animationDuration: '9s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
          {/* Left Column - Brand */}
          <div className="space-y-2">
            <div className="text-2xl font-bold text-white mb-2">Aicrays</div>
            <p className="text-purple-100 text-sm leading-relaxed max-w-xs">
              Building custom AI-powered digital platforms that integrate cybersecurity, data intelligence, and IoT/RFID systems.
            </p>
            <div className="inline-block">
              <span className="text-sm font-medium text-purple-200 tracking-wide">
                Modular. Intelligent. Secure.
              </span>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-white text-sm">Solutions</h4>
              <ul className="space-y-1">
                <li><a href="#solutions" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">What We Build</a></li>
                <li><a href="#process" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">How We Build</a></li>
                <li><a href="#about" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-white text-sm">Connect</h4>
              <ul className="space-y-1">
                <li><a href="#contact" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">Get in Touch</a></li>
                <li><a href="mailto:hello@aicrays.com" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">hello@aicrays.com</a></li>
                <li><a href="#partnership" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">Partnership</a></li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Social & Copyright */}
          <div className="space-y-3">
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-purple-300/30 hover:border-purple-200/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <Linkedin className="w-4 h-4 text-purple-100 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-purple-300/30 hover:border-purple-200/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <Github className="w-4 h-4 text-purple-100 group-hover:text-white transition-colors" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-sm space-y-1">
              <p className="text-purple-100">© 2025 Aicrays. All rights reserved.</p>
              <p className="text-purple-200">Crafted with precision. Powered by partnership.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
