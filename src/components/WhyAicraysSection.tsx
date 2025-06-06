
import React, { useEffect, useRef, useState } from "react";
import { Server, Palette, Lock, TrendingUp, Radio } from "lucide-react";

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
    <section className="py-8 lg:py-12 relative overflow-hidden min-h-screen flex flex-col justify-center" id="why-aicrays">
      {/* Enhanced Dynamic Background with Moving Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers with light purple tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/70 via-purple-150/60 to-purple-200/80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-250/70 via-purple-150/50 to-transparent"></div>
        
        {/* Light tone overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-purple-50/30 to-violet-100/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50/40 via-transparent to-purple-100/35"></div>
        
        {/* Radial gradients for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-150/25 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-violet-150/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Large moving orbs */}
        <div className="absolute top-[15%] right-[10%] w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '2s', animationDuration: '26s' }}></div>
        <div className="absolute top-[30%] left-[8%] w-72 h-72 bg-violet-200/25 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-[25%] right-[18%] w-56 h-56 bg-indigo-300/35 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[15%] left-[15%] w-52 h-52 bg-purple-300/30 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '14s', animationDuration: '22s' }}></div>
        
        {/* Medium orbs for layering */}
        <div className="absolute top-[50%] right-[35%] w-40 h-40 bg-indigo-200/40 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '4s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[45%] left-[30%] w-36 h-36 bg-purple-200/35 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '9s', animationDuration: '19s' }}></div>
        <div className="absolute top-[70%] left-[45%] w-32 h-32 bg-violet-300/38 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-44 h-44 bg-purple-100/25 rounded-full blur-2xl animate-float-vertical opacity-50" style={{ animationDelay: '12s', animationDuration: '21s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[65%] right-[65%] w-28 h-28 bg-purple-150/25 rounded-full blur-xl animate-float-vertical opacity-45" style={{ animationDelay: '18s', animationDuration: '10s' }}></div>
        <div className="absolute top-[80%] left-[60%] w-24 h-24 bg-blue-100/28 rounded-full blur-xl animate-float-vertical opacity-50" style={{ animationDelay: '20s', animationDuration: '12s' }}></div>
        <div className="absolute top-[25%] right-[80%] w-20 h-20 bg-violet-200/35 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '25s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[65%] right-[55%] w-16 h-16 bg-indigo-100/30 rounded-full blur-md animate-float-vertical opacity-40" style={{ animationDelay: '30s', animationDuration: '8s' }}></div>
        
        {/* Additional scattered orbs for richness */}
        <div className="absolute top-[10%] left-[50%] w-60 h-60 bg-purple-250/20 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '15s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-[10%] right-[40%] w-48 h-48 bg-indigo-250/25 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '3s', animationDuration: '25s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div 
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-4 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-2"></span>
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight tracking-tight mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              Not Templates. Not Theoretical.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              Just Built for You.
            </span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Every platform we build combines these core technologies, tailored to your specific enterprise needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/90 border border-white/50 rounded-2xl p-6 lg:p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-2 overflow-hidden h-full flex flex-col min-h-[220px]">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4 lg:mb-5">
                      <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-3 lg:mb-4 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight font-display">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base xl:text-lg group-hover:text-gray-700 transition-colors font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
          <p className="text-gray-600 mb-4 text-base lg:text-lg font-light">Still stuck with generic software?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800 group"
          >
            <span className="relative z-10">Schedule Discovery Session</span>
            <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
