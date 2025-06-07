
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
      className="overflow-hidden relative min-h-screen flex items-center justify-center py-12 lg:py-16" 
      id="hero"
    >
      <HeroBackground />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 xl:col-span-5">
              <HeroContent />
            </div>
            <div className="lg:col-span-6 xl:col-span-7">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
