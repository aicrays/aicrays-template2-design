
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
      {/* Enhanced Background Elements with More Apparent Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - more visible */}
        <div className="absolute top-[15%] right-[10%] w-48 h-48 bg-purple-300/25 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[25%] left-[8%] w-56 h-56 bg-violet-400/20 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[55%] right-[25%] w-40 h-40 bg-purple-400/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[35%] left-[15%] w-32 h-32 bg-indigo-300/25 rounded-full blur-2xl animate-float opacity-65" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[45%] right-[12%] w-36 h-36 bg-violet-300/22 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[25%] right-[45%] w-28 h-28 bg-purple-200/28 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '10s', animationDuration: '14s' }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[70%] left-[25%] w-20 h-20 bg-violet-400/25 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute top-[45%] right-[35%] w-24 h-24 bg-purple-300/23 rounded-full blur-xl animate-float opacity-65" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
        <div className="absolute bottom-[15%] left-[35%] w-18 h-18 bg-indigo-400/20 rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '19s' }}></div>
        <div className="absolute top-[80%] right-[55%] w-22 h-22 bg-violet-200/26 rounded-full blur-xl animate-float opacity-55" style={{ animationDelay: '9s', animationDuration: '15s' }}></div>
        
        {/* Extra small floating orbs for depth */}
        <div className="absolute top-[20%] left-[60%] w-14 h-14 bg-purple-400/20 rounded-full blur-lg animate-float opacity-45" style={{ animationDelay: '11s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[60%] right-[20%] w-16 h-16 bg-violet-300/18 rounded-full blur-lg animate-float opacity-50" style={{ animationDelay: '1s', animationDuration: '21s' }}></div>
        
        {/* Enhanced particle dots - more visible */}
        <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[75%] right-[20%] w-2.5 h-2.5 bg-violet-500/55 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-4 h-4 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
        <div className="absolute bottom-[35%] left-[55%] w-2 h-2 bg-indigo-500/45 rounded-full animate-pulse" style={{ animationDelay: '12s' }}></div>
        <div className="absolute top-[65%] right-[40%] w-3.5 h-3.5 bg-violet-400/50 rounded-full animate-pulse" style={{ animationDelay: '15s' }}></div>
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
