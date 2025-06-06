
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
      {/* Background with floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs with enhanced animation */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-400/25 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-600/30 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '15s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-indigo-400/25 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '8s', animationDuration: '22s' }}></div>
        <div className="absolute top-10 right-1/3 w-32 h-32 bg-purple-300/40 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-violet-500/20 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '3s', animationDuration: '28s' }}></div>
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
