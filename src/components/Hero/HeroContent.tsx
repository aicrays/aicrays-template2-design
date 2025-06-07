
import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full space-y-6 lg:space-y-8 max-w-none">
      {/* Main Header with Standard SaaS Spacing */}
      <div className="space-y-4">
        <h1 className="font-bold leading-tight tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <div className="opacity-0 animate-fade-in mb-3 lg:mb-4" style={{
            animationDelay: "0.2s",
            animationDuration: "0.8s"
          }}>
            <span className="block text-gray-900">Empowering Enterprises</span>
          </div>
          <div className="opacity-0 animate-fade-in" style={{
            animationDelay: "0.4s",
            animationDuration: "0.8s"
          }}>
            <span className="block">
              Through{" "}
              <span className="text-purple-700 relative inline-block">
                Innovation
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/80 via-purple-600/90 to-blue-500/80 rounded-full animate-pulse-slow shadow-lg shadow-purple-500/30"></div>
              </span>
            </span>
            <span className="block mt-2">
              and{" "}
              <span className="text-purple-700 relative inline-block">
                Personalization
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600/80 via-pink-500/90 to-purple-600/80 rounded-full animate-pulse-slow shadow-lg shadow-purple-500/30" style={{
                  animationDelay: '1s'
                }}></div>
              </span>
            </span>
          </div>
        </h1>
      </div>
      
      {/* Subtitle with Standard SaaS Spacing */}
      <div className="pt-2">
        <p style={{
          animationDelay: "0.6s",
          animationDuration: "0.8s"
        }} className="text-lg md:text-xl leading-relaxed text-gray-700 opacity-0 animate-fade-in font-normal">
          We build modular digital platforms tailored to your systems — intelligent, adaptable, and built to help your business evolve with precision and scale.
        </p>
      </div>
      
      {/* CTAs with Standard SaaS Spacing */}
      <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in pt-4 lg:pt-6" style={{
        animationDelay: "0.8s",
        animationDuration: "0.8s"
      }}>
        <a href="#contact" className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800">
          <span className="relative z-10">Book a Consultation</span>
          <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
        
        <a href="#solutions" className="group relative inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold text-purple-700 bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-full hover:border-purple-500 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:shadow-blue-500/20">
          <span className="relative z-10">Explore What We Build</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
