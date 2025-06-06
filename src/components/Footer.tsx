
import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-50 via-purple-100/50 to-purple-200/60 text-gray-800 py-6 overflow-hidden border-t border-purple-100/30">
      {/* Enhanced Floating Background Elements with More Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Violet Fog Behind Text Area */}
        <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[20%] bg-gradient-radial from-violet-400/10 via-purple-300/8 to-transparent blur-3xl"></div>
        
        {/* Extra Large floating orbs */}
        <div className="absolute top-[5%] left-[1%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '3s', animationDuration: '35s' }}></div>
        <div className="absolute bottom-[2%] right-[3%] w-56 h-56 bg-violet-600/18 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '13s', animationDuration: '40s' }}></div>
        <div className="absolute top-[50%] right-[85%] w-48 h-48 bg-purple-400/22 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '23s', animationDuration: '37s' }}></div>
        
        {/* Large floating orbs */}
        <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-purple-500/25 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-36 h-36 bg-violet-600/20 rounded-full blur-3xl animate-float-vertical opacity-55" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-24 h-24 bg-indigo-500/28 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[10%] left-[70%] w-40 h-40 bg-purple-600/23 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '15s', animationDuration: '26s' }}></div>
        <div className="absolute top-[75%] right-[8%] w-28 h-28 bg-violet-500/26 rounded-full blur-3xl animate-float-vertical opacity-68" style={{ animationDelay: '20s', animationDuration: '22s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[45%] left-[20%] w-20 h-20 bg-purple-400/30 rounded-full blur-2xl animate-float-vertical opacity-45" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[50%] right-[20%] w-28 h-28 bg-violet-600/25 rounded-full blur-2xl animate-float-vertical opacity-50" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>
        <div className="absolute top-[30%] left-[60%] w-22 h-22 bg-indigo-500/27 rounded-full blur-2xl animate-float-vertical opacity-42" style={{ animationDelay: '11s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[70%] right-[50%] w-26 h-26 bg-purple-500/24 rounded-full blur-2xl animate-float-vertical opacity-47" style={{ animationDelay: '17s', animationDuration: '21s' }}></div>
        <div className="absolute top-[85%] left-[40%] w-24 h-24 bg-violet-400/29 rounded-full blur-2xl animate-float-vertical opacity-52" style={{ animationDelay: '25s', animationDuration: '17s' }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[80%] left-[30%] w-16 h-16 bg-purple-600/30 rounded-full blur-xl animate-float-vertical opacity-35" style={{ animationDelay: '4s', animationDuration: '14s' }}></div>
        <div className="absolute top-[35%] right-[10%] w-18 h-18 bg-violet-500/28 rounded-full blur-xl animate-float-vertical opacity-40" style={{ animationDelay: '9s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[40%] left-[80%] w-14 h-14 bg-indigo-400/32 rounded-full blur-xl animate-float-vertical opacity-38" style={{ animationDelay: '14s', animationDuration: '11s' }}></div>
        <div className="absolute top-[15%] right-[70%] w-20 h-20 bg-purple-400/26 rounded-full blur-xl animate-float-vertical opacity-43" style={{ animationDelay: '19s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[60%] left-[15%] w-12 h-12 bg-violet-600/34 rounded-full blur-lg animate-float-vertical opacity-36" style={{ animationDelay: '22s', animationDuration: '12s' }}></div>
        
        {/* Micro orbs for texture */}
        <div className="absolute top-[55%] right-[75%] w-10 h-10 bg-purple-500/25 rounded-full blur-md animate-float-vertical opacity-30" style={{ animationDelay: '6s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[25%] left-[50%] w-8 h-8 bg-violet-400/28 rounded-full blur-md animate-float-vertical opacity-33" style={{ animationDelay: '12s', animationDuration: '10s' }}></div>
        <div className="absolute top-[70%] right-[40%] w-12 h-12 bg-indigo-500/24 rounded-full blur-sm animate-float-vertical opacity-28" style={{ animationDelay: '18s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-[80%] left-[65%] w-6 h-6 bg-purple-600/30 rounded-full blur-sm animate-float-vertical opacity-31" style={{ animationDelay: '24s', animationDuration: '9s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-3">
          {/* Left Column - Brand */}
          <div className="space-y-2">
            <div className="text-2xl font-bold text-purple-600 mb-2">Aicrays</div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Building custom AI-powered digital platforms that integrate cybersecurity, data intelligence, and IoT/RFID systems.
            </p>
            <div className="inline-block">
              <span className="text-sm font-medium text-purple-500 tracking-wide">
                Modular. Intelligent. Secure.
              </span>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800 text-sm">Solutions</h4>
              <ul className="space-y-1">
                <li><a href="#solutions" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">What We Build</a></li>
                <li><a href="#process" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">How We Build</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-gray-800 text-sm">Connect</h4>
              <ul className="space-y-1">
                <li><a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">Get in Touch</a></li>
                <li><a href="mailto:hello@aicrays.com" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">hello@aicrays.com</a></li>
                <li><a href="#partnership" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm">Partnership</a></li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Social & Copyright */}
          <div className="space-y-3">
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="group p-2 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 border border-purple-200/40 hover:border-purple-300/60 transition-all duration-300 shadow-sm hover:shadow-md">
                <Linkedin className="w-4 h-4 text-purple-600 group-hover:text-purple-700 transition-colors" />
              </a>
              <a href="#" className="group p-2 bg-white/60 backdrop-blur-sm rounded-full hover:bg-white/80 border border-purple-200/40 hover:border-purple-300/60 transition-all duration-300 shadow-sm hover:shadow-md">
                <Github className="w-4 h-4 text-purple-600 group-hover:text-purple-700 transition-colors" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-sm space-y-1">
              <p className="text-gray-600">© 2025 Aicrays. All rights reserved.</p>
              <p className="text-purple-500">Crafted with precision. Powered by partnership.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
