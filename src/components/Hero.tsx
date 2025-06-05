
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const techBoxes = [
    { title: "AI/ML", subtitle: "Machine Learning", delay: 0.1 },
    { title: "IoT", subtitle: "RFID Systems", delay: 0.2 },
    { title: "Security", subtitle: "Cybersecurity", delay: 0.3 },
    { title: "Data", subtitle: "Intelligence", delay: 0.4 }
  ];
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-pulse-50 via-white to-pulse-100" 
      id="hero" 
      style={{
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pulse-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pulse-500 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pulse-600 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse-slow"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Modular AI-Powered Digital Platforms</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              Empowering Enterprises<br className="hidden sm:inline" />
              Through <span className="text-pulse-500 relative">
                Innovation
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow"></div>
              </span> and<br className="hidden sm:inline" />
              <span className="text-pulse-500 relative">
                Personalization
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              We build modular digital platforms tailored to your systems — intelligent, adaptable, and built to help your business evolve.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#contact" 
                className="flex items-center justify-center group w-full sm:w-auto text-center button-primary relative overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              <a 
                href="#solutions" 
                className="button-secondary w-full sm:w-auto text-center group relative overflow-hidden"
              >
                <span className="relative z-10">Explore What We Build</span>
                <div className="absolute inset-0 bg-pulse-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-pulse-500 to-pulse-600 p-8 hover:shadow-3xl hover:scale-[1.02] transform">
                <div className="grid grid-cols-2 gap-4 text-white">
                  {techBoxes.map((box, index) => (
                    <div 
                      key={box.title}
                      className={cn(
                        "bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ 
                        transitionDelay: `${box.delay}s`
                      }}
                    >
                      <div className="text-2xl font-bold group-hover:scale-110 transition-transform">
                        {box.title}
                      </div>
                      <div className="text-sm opacity-90">{box.subtitle}</div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
                
                {/* Floating Elements Inside Panel */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-200/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
