
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
      {/* Subtle floating orbs - much smaller sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small orbs scattered throughout */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-purple-400/30 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-md animate-float opacity-50" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-violet-400/25 rounded-full blur-sm animate-float opacity-55" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>

        {/* Medium small orbs */}
        <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-purple-600/35 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '15s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-18 h-18 bg-indigo-400/30 rounded-full blur-md animate-float opacity-65" style={{ animationDelay: '8s', animationDuration: '22s' }}></div>
        <div className="absolute top-10 right-1/3 w-8 h-8 bg-purple-300/40 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-violet-500/25 rounded-full blur-md animate-float opacity-60" style={{ animationDelay: '3s', animationDuration: '28s' }}></div>

        {/* Tiny accent orbs */}
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-blue-400/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-8 h-8 bg-indigo-300/40 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '20s', animationDuration: '24s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-12 h-12 bg-violet-300/35 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '14s', animationDuration: '19s' }}></div>
        <div className="absolute top-1/6 right-2/3 w-5 h-5 bg-purple-700/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '9s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/6 left-2/3 w-7 h-7 bg-blue-500/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '17s', animationDuration: '21s' }}></div>

        {/* Very small detail orbs */}
        <div className="absolute top-5/6 right-1/6 w-4 h-4 bg-indigo-600/55 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-5/6 left-1/6 w-3 h-3 bg-purple-400/60 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '18s', animationDuration: '11s' }}></div>
        <div className="absolute top-1/8 left-1/8 w-6 h-6 bg-violet-600/65 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '7s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/8 right-1/8 w-9 h-9 bg-blue-300/50 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '21s', animationDuration: '13s' }}></div>
        <div className="absolute top-7/8 left-7/8 w-4 h-4 bg-purple-500/70 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '2s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-7/8 right-7/8 w-11 h-11 bg-indigo-400/45 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '16s', animationDuration: '14s' }}></div>

        {/* Micro orbs for extra subtlety */}
        <div className="absolute top-32 left-3/4 w-2 h-2 bg-blue-700/75 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '11s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-32 right-3/4 w-3 h-3 bg-purple-800/65 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '23s', animationDuration: '7s' }}></div>
        <div className="absolute top-48 left-1/12 w-5 h-5 bg-violet-700/80 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '19s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-48 right-1/12 w-7 h-7 bg-indigo-800/55 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>

        {/* Additional scattered micro orbs */}
        <div className="absolute top-64 left-5/6 w-3 h-3 bg-purple-600/80 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '13s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-64 right-5/6 w-4 h-4 bg-blue-400/60 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '22s', animationDuration: '9s' }}></div>
        <div className="absolute top-80 left-1/10 w-2 h-2 bg-indigo-700/90 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '24s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-80 right-1/10 w-6 h-6 bg-violet-500/70 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '26s', animationDuration: '10s' }}></div>
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
