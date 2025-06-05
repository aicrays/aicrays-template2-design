
import React from "react";
import { Button } from "@/components/ui/button";
import { useIntersectionAnimation } from "@/hooks/useAnimations";

const HeroContent = () => {
  const contentRef = useIntersectionAnimation("animate-fade-in", 0.1);

  return (
    <div ref={contentRef} className="opacity-0 space-y-8 max-w-2xl mx-auto lg:mx-0 lg:max-w-none relative z-10">
      {/* Pulse Chip */}
      <div className="flex justify-center lg:justify-start">
        <div className="pulse-chip animate-pulse-slow">
          <span>AI-Powered Platform</span>
        </div>
      </div>

      {/* Main Headlines */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight text-gray-900 leading-tight">
          Modular Tech
          <br />
          <span className="bg-gradient-to-r from-pulse-600 via-pulse-500 to-violet-600 bg-clip-text text-transparent">
            Built for You
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-sans max-w-2xl">
          Custom software solutions that adapt to your workflows, not the other way around. 
          Built with enterprise-grade security and modular architecture.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button className="button-primary text-base px-8 py-4 h-auto">
          Get Started Today
        </Button>
        <Button variant="outline" className="button-secondary text-base px-8 py-4 h-auto">
          View Case Studies
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="pt-8 space-y-3">
        <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
          Trusted by Enterprise Teams
        </p>
        <div className="flex flex-wrap items-center gap-6 opacity-60">
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-16 bg-gray-300 rounded"></div>
          <div className="h-8 w-28 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
