
import React, { useEffect, useRef, useState } from "react";
import { Server, Palette, Radio, TrendingUp } from "lucide-react";

const WhyAicraysSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Server,
      title: "Custom-built for your systems",
      description: "No templates or one-size-fits-all solutions. Every platform is architected specifically for your workflows and requirements.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "Modular, rapid development",
      description: "Proven components accelerate delivery while maintaining the flexibility to adapt and scale as your needs evolve.",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      icon: Radio,
      title: "Designed for long-term impact",
      description: "Our platforms evolve with your business to avoid costly rebuilds and ensure future growth.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Personalized to enterprise workflows",
      description: "Tailored to your exact roles, processes, and goals — we enhance without disrupting what works.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="h-screen relative overflow-hidden flex flex-col justify-center" id="why-aicrays">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-white to-purple-100/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50/60 via-transparent to-purple-50/70"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-float-vertical opacity-60" style={{
          animationDelay: '1s',
          animationDuration: '20s'
        }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-violet-200/25 rounded-full blur-3xl animate-float-vertical opacity-50" style={{
          animationDelay: '5s',
          animationDuration: '25s'
        }}></div>
        <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-indigo-200/35 rounded-full blur-2xl animate-float-vertical opacity-55" style={{
          animationDelay: '8s',
          animationDuration: '18s'
        }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-4 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-2"></span>
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">Custom. Real. Yours.</span>
            <br />
            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              Just Built for You.
            </span>
          </h2>
          
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-2xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Every platform we build combines these core technologies, tailored to your specific enterprise needs.
          </p>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="relative flex items-center justify-center">
          {/* Central Hub */}
          <div className="absolute z-20 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-white font-bold text-lg lg:text-xl font-display mb-1">AICRAYS</div>
                <div className="text-purple-100 text-sm lg:text-base font-light">Platform</div>
              </div>
            </div>
          </div>

          {/* Hexagonal positioned feature cards */}
          <div className="relative">
            {features.map((feature, index) => {
              // Calculate hexagonal positions
              const positions = [
                { x: 0, y: -200 }, // Top
                { x: 180, y: -100 }, // Top Right
                { x: 180, y: 100 }, // Bottom Right
                { x: 0, y: 200 }, // Bottom
              ];
              
              const position = positions[index];
              
              return (
                <div
                  key={feature.title}
                  className={`absolute transition-all duration-700 ${
                    visibleCards.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    animationDelay: `${1.2 + index * 0.2}s`
                  }}
                >
                  <div className="group cursor-pointer w-64">
                    <div className="backdrop-blur-xl bg-white/90 border border-white/50 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-2 overflow-hidden">
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                            <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight font-display">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors font-light">
                          {feature.description}
                        </p>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          <p className="text-gray-600 mb-4 text-base lg:text-lg font-light">Still stuck with generic software?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800 group">
            <span className="relative z-10">Schedule Discovery Session</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
