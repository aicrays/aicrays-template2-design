import React from "react";
import { ArrowUp, Linkedin, Github } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="relative w-full bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white py-8 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-purple-300/15 rounded-full blur-3xl animate-float-vertical opacity-60" style={{
        animationDelay: '2s',
        animationDuration: '20s'
      }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-36 h-36 bg-blue-300/12 rounded-full blur-3xl animate-float-vertical opacity-50" style={{
        animationDelay: '8s',
        animationDuration: '24s'
      }}></div>
        <div className="absolute top-[60%] right-[35%] w-24 h-24 bg-purple-400/18 rounded-full blur-3xl animate-float-vertical opacity-40" style={{
        animationDelay: '5s',
        animationDuration: '18s'
      }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[45%] left-[20%] w-20 h-20 bg-blue-300/20 rounded-full blur-2xl animate-float-vertical opacity-45" style={{
        animationDelay: '3s',
        animationDuration: '16s'
      }}></div>
        <div className="absolute bottom-[50%] right-[20%] w-28 h-28 bg-purple-300/15 rounded-full blur-2xl animate-float-vertical opacity-50" style={{
        animationDelay: '7s',
        animationDuration: '19s'
      }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[80%] left-[30%] w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-float-vertical opacity-35" style={{
        animationDelay: '4s',
        animationDuration: '14s'
      }}></div>
        <div className="absolute top-[35%] right-[10%] w-18 h-18 bg-blue-300/18 rounded-full blur-xl animate-float-vertical opacity-40" style={{
        animationDelay: '9s',
        animationDuration: '13s'
      }}></div>
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
      
      {/* Back to Top Button */}
      
    </footer>;
};
export default Footer;