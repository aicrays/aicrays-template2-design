
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full max-w-5xl text-center space-y-8 lg:space-y-12">
      {/* Enhanced Context Header */}
      <div 
        className="pulse-chip opacity-0 animate-fade-in mx-auto" 
        style={{ animationDelay: "0.1s" }}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-600 text-white mr-3 text-xs font-bold">01</span>
        <span className="font-semibold">Modular AI-Powered Platforms</span>
      </div>
      
      {/* Enhanced Headline with Better Typography */}
      <div className="space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          <div 
            className="opacity-0 animate-fade-in mb-4" 
            style={{ animationDelay: "0.3s" }}
          >
            <span className="block text-gray-900">Empowering Enterprises</span>
          </div>
          <div 
            className="opacity-0 animate-fade-in mb-4" 
            style={{ animationDelay: "0.5s" }}
          >
            <span className="block">
              Through{" "}
              <span className="text-pulse-500 relative inline-block">
                Innovation
                <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow transform origin-left"></div>
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
                <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow transform origin-left" style={{ animationDelay: '1s' }}></div>
              </span>
            </span>
          </div>
        </h1>
      </div>
      
      {/* Enhanced Subtitle with Better Spacing and Typography */}
      <p 
        style={{ animationDelay: "0.9s" }} 
        className="text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-4xl mx-auto font-light"
      >
        We build modular digital platforms tailored to your systems — intelligent, adaptable, and built to help your business evolve with precision and scale.
      </p>
      
      {/* Enhanced CTAs with Better Spacing */}
      <div 
        className="flex flex-col sm:flex-row gap-6 lg:gap-8 opacity-0 animate-fade-in justify-center items-center pt-4" 
        style={{ animationDelay: "1.1s" }}
      >
        <a 
          href="#contact" 
          className="group relative inline-flex items-center justify-center px-10 py-5 text-lg lg:text-xl font-semibold text-white bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[280px]"
        >
          <span className="relative z-10">Book a Consultation</span>
          <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
        
        <a 
          href="#solutions" 
          className="group relative inline-flex items-center justify-center px-10 py-5 text-lg lg:text-xl font-semibold text-pulse-600 bg-white/80 backdrop-blur-sm border-2 border-pulse-200 rounded-full hover:border-pulse-400 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[280px]"
        >
          <span className="relative z-10">Explore What We Build</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pulse-50 to-pulse-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
        </a>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div 
        className="opacity-0 animate-fade-in pt-8" 
        style={{ animationDelay: "1.3s" }}
      >
        <a 
          href="#solutions" 
          className="inline-flex flex-col items-center text-pulse-500 hover:text-pulse-600 transition-colors group"
        >
          <span className="text-base font-medium mb-3">Explore Solutions</span>
          <div className="w-8 h-8 rounded-full border-2 border-pulse-400 flex items-center justify-center group-hover:border-pulse-600 transition-colors">
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
