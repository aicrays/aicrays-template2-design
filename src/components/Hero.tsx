
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);
  
  useEffect(() => {
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

  const moduleTypes = [
    { 
      id: "access", 
      title: "Intelligent Access", 
      subtitle: "Identity & Security",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      id: "quote", 
      title: "Quote AI Engine", 
      subtitle: "Smart Automation",
      color: "from-purple-400 to-pink-500"
    },
    { 
      id: "fleet", 
      title: "Fleet Manager", 
      subtitle: "Coming Soon",
      color: "from-green-400 to-emerald-500"
    }
  ];
  
  return (
    <section 
      className="overflow-hidden relative bg-gradient-to-br from-pulse-50 via-white to-pulse-100 min-h-[90vh] lg:min-h-screen flex items-center" 
      id="hero"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing Background Shapes */}
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-gradient-to-br from-pulse-200/40 to-pulse-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-blue-200/30 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Circuit Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-pulse-300 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-pulse-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-20 h-20 border border-pulse-300 rounded-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        {/* Enhanced Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-pulse-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pulse-500 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pulse-600 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
        
        {/* Curved Flow Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <path 
            d="M0,400 Q300,200 600,400 T1200,400" 
            stroke="url(#gradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse-slow"
          />
          <path 
            d="M0,600 Q400,300 800,500 T1200,400" 
            stroke="url(#gradient2)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center min-h-[80vh]">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            {/* Enhanced Context Header */}
            <div 
              className="pulse-chip opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-pulse-500 to-pulse-600 text-white mr-3 text-xs font-bold">01</span>
              <span className="font-semibold">Modular AI-Powered Platforms</span>
            </div>
            
            {/* Enhanced Split Headline with Typewriter Effect */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <div 
                  className="opacity-0 animate-fade-in" 
                  style={{ animationDelay: "0.3s" }}
                >
                  <span className="block text-gray-900">Empowering Enterprises</span>
                </div>
                <div 
                  className="opacity-0 animate-fade-in" 
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="block">
                    Through{" "}
                    <span className="text-pulse-500 relative inline-block">
                      Innovation
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow transform origin-left"></div>
                    </span>
                  </span>
                </div>
                <div 
                  className="opacity-0 animate-fade-in" 
                  style={{ animationDelay: "0.7s" }}
                >
                  <span className="block">
                    and{" "}
                    <span className="text-pulse-500 relative inline-block">
                      Personalization
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pulse-400 to-pulse-600 animate-pulse-slow transform origin-left" style={{ animationDelay: '1s' }}></div>
                    </span>
                  </span>
                </div>
              </h1>
            </div>
            
            {/* Enhanced Subtitle */}
            <p 
              style={{ animationDelay: "0.9s" }} 
              className="text-xl lg:text-2xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-2xl"
            >
              We build modular digital platforms tailored to your systems — intelligent, adaptable, and built to help your business evolve with precision and scale.
            </p>
            
            {/* Enhanced CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "1.1s" }}
            >
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              
              <a 
                href="#solutions" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-pulse-600 bg-white/80 backdrop-blur-sm border-2 border-pulse-200 rounded-full hover:border-pulse-400 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Explore What We Build</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-50 to-pulse-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
              </a>
            </div>
            
            {/* Scroll Indicator */}
            <div 
              className="pt-8 opacity-0 animate-fade-in" 
              style={{ animationDelay: "1.3s" }}
            >
              <a 
                href="#solutions" 
                className="inline-flex flex-col items-center text-pulse-500 hover:text-pulse-600 transition-colors group"
              >
                <span className="text-sm font-medium mb-2">Explore Solutions</span>
                <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Enhanced Right Side Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div 
              className="relative z-10 opacity-0 animate-fade-in" 
              style={{ animationDelay: "1.5s" }}
              onMouseEnter={() => !isMobile && setHoveredModule("main")}
              onMouseLeave={() => !isMobile && setHoveredModule(null)}
            >
              {/* Main Platform Visual */}
              <div className="relative transition-all duration-700 ease-out overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-pulse-500 to-pulse-700 p-8 lg:p-12 hover:shadow-3xl hover:scale-[1.02] transform">
                {/* Animated Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-pulse-400/20 to-pulse-600/20 rounded-3xl blur-xl animate-pulse-slow"></div>
                
                {/* Modular Components Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4 lg:gap-6 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-5 h-5 bg-white rounded-sm animate-pulse"></div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">AI/ML</div>
                        <div className="text-sm opacity-90">Intelligence</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-5 h-5 border-2 border-white rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">Security</div>
                        <div className="text-sm opacity-90">Protection</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-5 h-5 border border-white rounded-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">IoT</div>
                        <div className="text-sm opacity-90">Connectivity</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="space-y-1">
                          <div className="w-4 h-0.5 bg-white animate-pulse"></div>
                          <div className="w-3 h-0.5 bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-0.5 bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">Data</div>
                        <div className="text-sm opacity-90">Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Central Connection Point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-pulse shadow-lg"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-float"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Platform Types Overlay */}
              {hoveredModule && (
                <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-fade-in z-20">
                  <div className="space-y-2">
                    {moduleTypes.map((module, index) => (
                      <div 
                        key={module.id} 
                        className={cn(
                          "flex items-center justify-between p-2 rounded-lg transition-all duration-300",
                          `bg-gradient-to-r ${module.color} bg-opacity-10 hover:bg-opacity-20`
                        )}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div>
                          <div className="font-semibold text-gray-900">{module.title}</div>
                          <div className="text-sm text-gray-600">{module.subtitle}</div>
                        </div>
                        <div className={cn("w-3 h-3 rounded-full bg-gradient-to-r", module.color)}></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pulse-200/20 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
      <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl -z-10 parallax" data-speed="0.03"></div>
    </section>
  );
};

export default Hero;
