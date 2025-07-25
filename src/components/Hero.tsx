
import React, { useRef, useState, useEffect } from "react";
import HeroBackground from "./Hero/HeroBackground";
import HeroContent from "./Hero/HeroContent";
import HeroVisual from "./Hero/HeroVisual";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { useScrollEffects } from "@/hooks/useScrollEffects";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const [isVisible, setIsVisible] = useState(false);
  
  useScrollEffects(isMobile);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative min-h-screen flex items-center justify-center pt-24 pb-16" 
      id="hero"
    >
      <HeroBackground />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
            
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 text-left space-y-6 lg:space-y-8">
              <HeroContent />
            </div>

            {/* Right Section - Credibility Grid */}
            <div className="w-full lg:w-1/2 relative">
              <HeroVisual />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
