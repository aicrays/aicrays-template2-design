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
      {/* Section-specific orbs distributed across center areas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small orbs in center regions */}
        <div className="absolute top-[20%] left-[35%] w-4 h-4 bg-purple-400/25 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[25%] right-[40%] w-5 h-5 bg-purple-500/18 rounded-full blur-md animate-float opacity-50" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] left-[55%] w-4 h-4 bg-violet-400/22 rounded-full blur-sm animate-float opacity-55" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
        <div className="absolute top-[35%] right-[30%] w-3 h-3 bg-purple-600/28 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '15s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[35%] left-[25%] w-6 h-6 bg-indigo-400/20 rounded-full blur-md animate-float opacity-65" style={{ animationDelay: '8s', animationDuration: '22s' }}></div>
        <div className="absolute top-[15%] right-[65%] w-3 h-3 bg-purple-300/32 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[15%] left-[70%] w-7 h-7 bg-violet-500/15 rounded-full blur-md animate-float opacity-60" style={{ animationDelay: '3s', animationDuration: '28s' }}></div>

        {/* Tiny accent orbs in center viewport */}
        <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-blue-400/35 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[55%] right-[50%] w-3 h-3 bg-indigo-300/32 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '20s', animationDuration: '24s' }}></div>
        <div className="absolute top-[70%] left-[60%] w-4 h-4 bg-violet-300/28 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '14s', animationDuration: '19s' }}></div>
        <div className="absolute top-[25%] right-[55%] w-2 h-2 bg-purple-700/40 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '9s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[40%] left-[80%] w-2 h-2 bg-blue-500/25 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '17s', animationDuration: '21s' }}></div>

        {/* Very small detail orbs */}
        <div className="absolute top-[80%] right-[75%] w-2 h-2 bg-indigo-600/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[80%] left-[15%] w-1 h-1 bg-purple-400/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '18s', animationDuration: '11s' }}></div>
        <div className="absolute top-[30%] left-[85%] w-2 h-2 bg-violet-600/55 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '7s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[65%] right-[15%] w-3 h-3 bg-blue-300/38 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '21s', animationDuration: '13s' }}></div>
        <div className="absolute top-[85%] left-[45%] w-1 h-1 bg-purple-500/60 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '2s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-[10%] right-[85%] w-4 h-4 bg-indigo-400/35 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '16s', animationDuration: '14s' }}></div>

        {/* Micro orbs for subtle detail in center areas */}
        <div className="absolute top-[50%] left-[30%] w-1 h-1 bg-blue-700/65 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '11s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[50%] right-[70%] w-1 h-1 bg-purple-800/55 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '23s', animationDuration: '7s' }}></div>
        <div className="absolute top-[75%] left-[25%] w-2 h-2 bg-violet-700/70 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '19s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-[20%] right-[25%] w-2 h-2 bg-indigo-800/45 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>

        {/* Additional center-focused orbs */}
        <div className="absolute top-[40%] left-[65%] w-1 h-1 bg-purple-600/68 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '13s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-[30%] right-[35%] w-2 h-2 bg-blue-400/48 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '22s', animationDuration: '9s' }}></div>
        <div className="absolute top-[55%] left-[40%] w-1 h-1 bg-indigo-700/75 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '24s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-[75%] right-[60%] w-2 h-2 bg-violet-500/58 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '26s', animationDuration: '10s' }}></div>
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
