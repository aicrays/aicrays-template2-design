
import React, { useRef, useState, useEffect } from "react";
import HeroBackground from "./Hero/HeroBackground";
import HeroContent from "./Hero/HeroContent";
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
      className="overflow-hidden relative h-screen flex items-center justify-center" 
      id="hero"
    >
      <HeroBackground />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="flex justify-center items-center h-full">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
