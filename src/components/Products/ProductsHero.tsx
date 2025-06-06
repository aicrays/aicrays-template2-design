
import React, { useRef, useState, useEffect } from "react";

const ProductsHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="overflow-hidden relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40" id="products-hero">
      {/* Section-specific splotches for hero content area - dramatically more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hero-specific large splotches - significantly enhanced visibility */}
        <div className="absolute top-[15%] left-[20%] w-[420px] h-[420px] bg-gradient-to-br from-purple-300/65 to-violet-400/60 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
        <div className="absolute top-[25%] right-[15%] w-[380px] h-[380px] bg-gradient-to-bl from-indigo-300/70 to-purple-300/65 rounded-full blur-2xl animate-float opacity-85" style={{ animationDelay: '8s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-[20%] left-[25%] w-[400px] h-[400px] bg-gradient-to-tr from-violet-200/75 to-blue-300/70 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '14s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[30%] right-[20%] w-[360px] h-[360px] bg-gradient-to-tl from-purple-400/65 to-indigo-200/70 rounded-full blur-2xl animate-float opacity-90" style={{ animationDelay: '20s', animationDuration: '28s' }}></div>
        
        {/* Medium accent splotches - dramatically increased size and opacity */}
        <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-gradient-to-br from-blue-200/70 to-violet-300/65 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '5s', animationDuration: '20s' }}></div>
        <div className="absolute top-[60%] right-[25%] w-[320px] h-[320px] bg-gradient-to-tl from-purple-200/65 to-indigo-300/70 rounded-full blur-xl animate-float opacity-80" style={{ animationDelay: '11s', animationDuration: '30s' }}></div>
        <div className="absolute top-[70%] left-[15%] w-[280px] h-[280px] bg-gradient-to-bl from-violet-300/70 to-blue-200/65 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '17s', animationDuration: '25s' }}></div>

        {/* Additional mid-size splotches for better coverage */}
        <div className="absolute top-[35%] right-[40%] w-[340px] h-[340px] bg-gradient-to-br from-purple-400/60 to-violet-200/65 rounded-full blur-xl animate-float opacity-65" style={{ animationDelay: '9s', animationDuration: '27s' }}></div>
        <div className="absolute top-[55%] left-[45%] w-[300px] h-[300px] bg-gradient-to-tl from-indigo-300/65 to-purple-300/60 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '15s', animationDuration: '29s' }}></div>
        <div className="absolute bottom-[15%] right-[45%] w-[320px] h-[320px] bg-gradient-to-bl from-blue-300/70 to-violet-400/65 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '21s', animationDuration: '31s' }}></div>

        {/* Extra coverage for maximum dynamics */}
        <div className="absolute top-[10%] left-[60%] w-[260px] h-[260px] bg-gradient-to-tr from-violet-500/60 to-purple-400/65 rounded-full blur-lg animate-float opacity-65" style={{ animationDelay: '4s', animationDuration: '23s' }}></div>
        <div className="absolute top-[80%] right-[10%] w-[280px] h-[280px] bg-gradient-to-bl from-indigo-400/65 to-blue-300/60 rounded-full blur-lg animate-float opacity-70" style={{ animationDelay: '12s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-[10%] left-[50%] w-[240px] h-[240px] bg-gradient-to-br from-purple-500/65 to-violet-300/70 rounded-full blur-lg animate-float opacity-75" style={{ animationDelay: '18s', animationDuration: '24s' }}></div>
      </div>

      {/* Section-specific orbs distributed throughout the hero content area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hero content area orbs - distributed across full width with higher opacity */}
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-purple-400/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute top-[25%] left-[40%] w-2 h-2 bg-violet-500/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute top-[30%] left-[65%] w-1 h-1 bg-indigo-400/45 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '8s', animationDuration: '18s' }}></div>
        <div className="absolute top-[35%] left-[85%] w-1 h-1 bg-purple-600/60 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '11s', animationDuration: '22s' }}></div>
        
        <div className="absolute top-[45%] left-[25%] w-2 h-2 bg-blue-500/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '14s', animationDuration: '26s' }}></div>
        <div className="absolute top-[50%] left-[55%] w-1 h-1 bg-violet-300/55 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '17s', animationDuration: '19s' }}></div>
        <div className="absolute top-[55%] left-[75%] w-2 h-2 bg-purple-500/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '20s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1 h-1 bg-indigo-600/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '23s', animationDuration: '21s' }}></div>
        
        <div className="absolute top-[70%] left-[35%] w-1 h-1 bg-violet-600/45 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '26s', animationDuration: '23s' }}></div>
        <div className="absolute top-[75%] left-[60%] w-2 h-2 bg-purple-400/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '29s', animationDuration: '27s' }}></div>
        <div className="absolute top-[80%] left-[20%] w-1 h-1 bg-blue-700/55 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '32s', animationDuration: '17s' }}></div>
        <div className="absolute top-[85%] left-[80%] w-1 h-1 bg-indigo-500/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '35s', animationDuration: '20s' }}></div>
        
        {/* Additional micro orbs scattered throughout hero area */}
        <div className="absolute top-[15%] left-[50%] w-1 h-1 bg-purple-800/65 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '38s', animationDuration: '15s' }}></div>
        <div className="absolute top-[40%] left-[45%] w-1 h-1 bg-violet-700/60 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '41s', animationDuration: '16s' }}></div>
        <div className="absolute top-[65%] left-[45%] w-1 h-1 bg-blue-600/50 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '44s', animationDuration: '18s' }}></div>
        <div className="absolute top-[90%] left-[45%] w-1 h-1 bg-purple-600/70 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '47s', animationDuration: '14s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
                Our Products
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our flagship platforms and solutions—custom-built with precision and performance. 
              Each solution is engineered using our modular components, designed for industry-specific outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#built-and-delivered" 
                className="button-primary inline-flex items-center justify-center"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
