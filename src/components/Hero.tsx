
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
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-[15%] right-[10%] w-40 h-40 bg-purple-200/15 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[20%] left-[5%] w-48 h-48 bg-violet-300/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '7s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '3s', animationDuration: '15s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[75%] right-[20%] w-1.5 h-1.5 bg-violet-400/40 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-purple-300/35 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
      </div>
      
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
