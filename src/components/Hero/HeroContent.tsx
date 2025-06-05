
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full lg:w-1/2 text-left space-y-10">
      {/* Context Badge */}
      <div 
        className="pulse-chip opacity-0 animate-fade-in" 
        style={{ animationDelay: "0.1s" }}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-600 text-white mr-3 text-xs font-bold">01</span>
        <span className="font-semibold">Modular AI-Powered Platforms</span>
      </div>
      
      {/* Main Headline with improved spacing */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
          <div 
            className="opacity-0 animate-fade-in mb-4" 
            style={{ animationDelay: "0.3s" }}
          >
            <span className="block text-gray-900">Modular Platforms.</span>
          </div>
          <div 
            className="opacity-0 animate-fade-in mb-4" 
            style={{ animationDelay: "0.5s" }}
          >
            <span className="block">
              <span className="text-pulse-500 relative inline-block">
                Tailored
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow transform origin-left"></div>
              </span>
              {" "}Intelligence.
            </span>
          </div>
        </h1>
      </div>
      
      {/* Subheadline with better spacing */}
      <p 
        style={{ animationDelay: "0.7s" }} 
        className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-2xl font-light mt-8"
      >
        We build modular digital platforms tailored to your systems — intelligent, adaptive, and built to help your business evolve with precision and scale.
      </p>
      
      {/* CTA Buttons with increased top margin */}
      <div 
        className="flex flex-col sm:flex-row gap-4 lg:gap-6 opacity-0 animate-fade-in pt-6" 
        style={{ animationDelay: "0.9s" }}
      >
        <a 
          href="#contact" 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10">Book a Consultation</span>
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </a>
        
        <a 
          href="#solutions" 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pulse-600 bg-transparent border-2 border-pulse-300 rounded-full hover:border-pulse-500 hover:bg-pulse-50 transition-all duration-300 transform hover:scale-105"
        >
          <span className="relative z-10">Explore What We Build</span>
        </a>
      </div>
      
      {/* Scroll Indicator with more space */}
      <div 
        className="opacity-0 animate-fade-in pt-8" 
        style={{ animationDelay: "1.1s" }}
      >
        <a 
          href="#solutions" 
          className="inline-flex flex-col items-center text-pulse-500 hover:text-pulse-600 transition-colors group"
        >
          <span className="text-sm font-medium mb-2">Explore Solutions</span>
          <div className="w-6 h-6 rounded-full border-2 border-pulse-400 flex items-center justify-center group-hover:border-pulse-600 transition-colors">
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
