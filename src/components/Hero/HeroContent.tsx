
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full max-w-5xl space-y-10 lg:space-y-12">
      {/* Enhanced Context Header */}
      <div 
        className="pulse-chip opacity-0 animate-fade-in" 
        style={{ animationDelay: "0.1s" }}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-600 text-white mr-3 text-xs font-bold">01</span>
        <span className="font-semibold">Modular AI-Powered Platforms</span>
      </div>
      
      {/* Enhanced Headline with Better Typography and Spacing */}
      <div className="space-y-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          <div 
            className="opacity-0 animate-fade-in mb-6" 
            style={{ animationDelay: "0.3s" }}
          >
            <span className="block text-gray-900">Empowering Enterprises</span>
          </div>
          <div 
            className="opacity-0 animate-fade-in mb-6" 
            style={{ animationDelay: "0.5s" }}
          >
            <span className="block">
              Through{" "}
              <span className="text-pulse-500 relative inline-block">
                Innovation
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow transform origin-left rounded-full"></div>
              </span>
            </span>
          </div>
          <div 
            className="opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <span className="block">
              and{" "}
              <span className="text-pulse-500 relative inline-block">
                Personalization
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow transform origin-left rounded-full" style={{ animationDelay: '1s' }}></div>
              </span>
            </span>
          </div>
        </h1>
      </div>
      
      {/* Enhanced Subtitle with Better Proportions */}
      <p 
        style={{ animationDelay: "0.9s" }} 
        className="text-xl lg:text-2xl xl:text-2xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-4xl font-light"
      >
        We build modular digital platforms tailored to your systems — intelligent, adaptable, and built to help your business evolve with precision and scale.
      </p>
      
      {/* Enhanced CTAs with Refined Styling */}
      <div 
        className="flex flex-col sm:flex-row gap-6 lg:gap-8 opacity-0 animate-fade-in pt-4" 
        style={{ animationDelay: "1.1s" }}
      >
        <a 
          href="#contact" 
          className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[260px] hover:from-pulse-600 hover:to-pulse-700"
        >
          <span className="relative z-10">Book a Consultation</span>
          <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
        
        <a 
          href="#solutions" 
          className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-pulse-600 bg-white/90 backdrop-blur-sm border-2 border-pulse-200 rounded-full hover:border-pulse-400 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[260px]"
        >
          <span className="relative z-10">Explore What We Build</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pulse-50 to-pulse-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
        </a>
      </div>
      
      {/* Minimalist Scroll Indicator */}
      <div 
        className="opacity-0 animate-fade-in pt-12 flex justify-center" 
        style={{ animationDelay: "1.3s" }}
      >
        <a 
          href="#solutions" 
          className="group flex flex-col items-center transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full border-2 border-pulse-400 flex items-center justify-center group-hover:border-pulse-600 transition-all duration-300 group-hover:scale-110">
            <ChevronDown className="w-5 h-5 text-pulse-500 animate-bounce group-hover:text-pulse-600" />
          </div>
          <div className="w-2 h-2 bg-pulse-400 rounded-full mt-2 animate-pulse group-hover:bg-pulse-600 transition-colors"></div>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
