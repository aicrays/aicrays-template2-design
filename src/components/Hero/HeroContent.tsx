
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full max-w-5xl text-center space-y-6 px-4">
      {/* Enhanced Context Header */}
      <div 
        className="pulse-chip opacity-0 animate-fade-in mx-auto" 
        style={{ animationDelay: "0.1s" }}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white mr-3 text-xs font-bold">01</span>
        <span className="font-semibold">Modular AI-Powered Platforms</span>
      </div>
      
      {/* Enhanced Headline with Improved Typography and Tighter Spacing */}
      <div className="space-y-3">
        <h1 className="font-bold leading-[1.2] tracking-tight text-4xl lg:text-5xl xl:text-6xl">
          <div 
            className="opacity-0 animate-fade-in mb-3" 
            style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
          >
            <span className="block text-gray-900">Empowering Enterprises</span>
          </div>
          <div 
            className="opacity-0 animate-fade-in mb-3" 
            style={{ animationDelay: "0.5s", animationDuration: "0.8s" }}
          >
            <span className="block">
              Through{" "}
              <span className="text-purple-700 relative inline-block">
                Innovation
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700 animate-pulse-slow transform origin-left"></div>
              </span>
            </span>
          </div>
          <div 
            className="opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s", animationDuration: "0.8s" }}
          >
            <span className="block">
              and{" "}
              <span className="text-purple-700 relative inline-block">
                Personalization
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700 animate-pulse-slow transform origin-left" style={{ animationDelay: '1s' }}></div>
              </span>
            </span>
          </div>
        </h1>
      </div>
      
      {/* Enhanced Subtitle with Better Spacing and Typography */}
      <div className="pt-4">
        <p 
          style={{ animationDelay: "0.9s", animationDuration: "0.8s" }} 
          className="text-lg lg:text-xl leading-[1.6] text-gray-600 opacity-0 animate-fade-in max-w-4xl mx-auto font-normal"
        >
          We build modular digital platforms tailored to your systems — intelligent, adaptable, and built to help your business evolve with precision and scale.
        </p>
      </div>
      
      {/* Enhanced CTAs with Improved Hover Effects and Elevated Position */}
      <div 
        className="flex flex-col sm:flex-row gap-5 opacity-0 animate-fade-in justify-center items-center pt-6" 
        style={{ animationDelay: "1.1s", animationDuration: "0.8s" }}
      >
        <a 
          href="#contact" 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[250px] hover:shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800"
        >
          <span className="relative z-10">Book a Consultation</span>
          <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
        
        <a 
          href="#solutions" 
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-700 bg-white/90 backdrop-blur-sm border-2 border-purple-200 rounded-full hover:border-purple-400 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[250px] hover:shadow-purple-500/20"
        >
          <span className="relative z-10">Explore What We Build</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
          <div className="absolute inset-0 border-2 border-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        </a>
      </div>
      
      {/* Enhanced Scroll Indicator with Gentle Bounce Animation */}
      <div 
        className="opacity-0 animate-fade-in pt-8" 
        style={{ animationDelay: "1.3s", animationDuration: "0.8s" }}
      >
        <a 
          href="#solutions" 
          className="inline-flex flex-col items-center text-purple-600 hover:text-purple-700 transition-colors group"
        >
          <span className="text-base font-medium mb-3">Explore Solutions</span>
          <div className="w-8 h-8 rounded-full border-2 border-purple-400 flex items-center justify-center group-hover:border-purple-600 transition-colors relative">
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
