
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
      className="overflow-hidden relative bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40 min-h-screen flex items-center" 
      id="hero"
    >
      <HeroBackground />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="flex justify-center items-center min-h-[85vh] py-16 lg:py-24">
          <HeroContent />
        </div>
      </div>
      
      {/* Ambient Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-violet-200/15 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
