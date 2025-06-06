
import React, { useRef, useState, useEffect } from "react";

const PartnersHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="overflow-hidden relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40" id="partners-hero">
      {/* Section-specific orbs distributed throughout the hero content area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hero content area orbs - distributed across full width */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-purple-400/40 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute top-[25%] left-[40%] w-3 h-3 bg-violet-500/30 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute top-[30%] left-[65%] w-2 h-2 bg-indigo-400/35 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '8s', animationDuration: '18s' }}></div>
        <div className="absolute top-[35%] left-[85%] w-1 h-1 bg-purple-600/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '11s', animationDuration: '22s' }}></div>
        
        <div className="absolute top-[45%] left-[25%] w-3 h-3 bg-blue-500/35 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '14s', animationDuration: '26s' }}></div>
        <div className="absolute top-[50%] left-[55%] w-2 h-2 bg-violet-300/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '17s', animationDuration: '19s' }}></div>
        <div className="absolute top-[55%] left-[75%] w-4 h-4 bg-purple-500/25 rounded-full blur-sm animate-float opacity-65" style={{ animationDelay: '20s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-2 h-2 bg-indigo-600/40 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '23s', animationDuration: '21s' }}></div>
        
        <div className="absolute top-[70%] left-[35%] w-2 h-2 bg-violet-600/35 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '26s', animationDuration: '23s' }}></div>
        <div className="absolute top-[75%] left-[60%] w-3 h-3 bg-purple-400/30 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '29s', animationDuration: '27s' }}></div>
        <div className="absolute top-[80%] left-[20%] w-1 h-1 bg-blue-700/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '32s', animationDuration: '17s' }}></div>
        <div className="absolute top-[85%] left-[80%] w-2 h-2 bg-indigo-500/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '35s', animationDuration: '20s' }}></div>
        
        {/* Additional micro orbs scattered throughout hero area */}
        <div className="absolute top-[15%] left-[50%] w-1 h-1 bg-purple-800/55 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '38s', animationDuration: '15s' }}></div>
        <div className="absolute top-[40%] left-[45%] w-1 h-1 bg-violet-700/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '41s', animationDuration: '16s' }}></div>
        <div className="absolute top-[65%] left-[45%] w-2 h-2 bg-blue-600/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '44s', animationDuration: '18s' }}></div>
        <div className="absolute top-[90%] left-[45%] w-1 h-1 bg-purple-600/60 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '47s', animationDuration: '14s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
                We Build Better Together
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              At Aicrays, collaboration is at the heart of innovation. We believe in co-creating powerful, secure, and scalable platforms with trusted partners—from enterprises to specialized innovators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#partner-with-us" 
                className="button-primary inline-flex items-center justify-center"
              >
                Let's Discuss a Partnership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
