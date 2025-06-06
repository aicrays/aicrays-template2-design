
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full max-w-4xl text-center space-y-6 px-4 mt-8">
      {/* Fixed Headline with Proper Spacing */}
      <div className="space-y-1">
        <h1 className="font-bold leading-[1.1] tracking-tight text-4xl lg:text-5xl xl:text-6xl">
          <div 
            className="opacity-0 animate-fade-in mb-2" 
            style={{ animationDelay: "0.2s", animationDuration: "0.8s" }}
          >
            <span className="block text-gray-900">Empowering Enterprises</span>
          </div>
          <div 
            className="opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.4s", animationDuration: "0.8s" }}
          >
            <span className="block">
              Through{" "}
              <span className="text-purple-700 relative inline-block">
                Innovation
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-700 animate-pulse-slow transform origin-left"></div>
              </span>
              {" "}and{" "}
              <span className="text-purple-700 relative inline-block">
                Personalization
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-700 to-blue-600 animate-pulse-slow transform origin-left" style={{ animationDelay: '1s' }}></div>
              </span>
            </span>
          </div>
        </h1>
      </div>
      
      {/* Properly Sized Subtitle */}
      <div className="pt-4">
        <p 
          style={{ animationDelay: "0.6s", animationDuration: "0.8s" }} 
          className="text-lg lg:text-xl leading-[1.4] text-gray-700 opacity-0 animate-fade-in max-w-3xl mx-auto font-normal"
        >
          We build modular digital platforms tailored to your systems — intelligent, adaptable, and built to help your business evolve with precision and scale.
        </p>
      </div>
      
      {/* Fixed CTAs with Proper Sizing */}
      <div 
        className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in justify-center items-center pt-8" 
        style={{ animationDelay: "0.8s", animationDuration: "0.8s" }}
      >
        <a 
          href="#contact" 
          className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[200px] hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800"
        >
          <span className="relative z-10">Book a Consultation</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
        
        <a 
          href="#solutions" 
          className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-purple-700 bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-full hover:border-purple-500 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg min-w-[200px] hover:shadow-blue-500/20"
        >
          <span className="relative z-10">Explore What We Build</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
        </a>
      </div>
      
      {/* Fixed Scroll Indicator */}
      <div 
        className="opacity-0 animate-fade-in pt-8" 
        style={{ animationDelay: "1.0s", animationDuration: "0.8s" }}
      >
        <a 
          href="#solutions" 
          className="inline-flex flex-col items-center text-purple-600 hover:text-purple-700 transition-colors group"
        >
          <span className="text-sm font-medium mb-1">Explore Solutions</span>
          <div className="w-3 h-3 rounded-full border-2 border-purple-500 flex items-center justify-center group-hover:border-purple-600 transition-colors relative animate-pulse">
            <ChevronDown className="w-2 h-2 animate-bounce group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
