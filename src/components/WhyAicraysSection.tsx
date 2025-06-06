
import React, { useEffect, useRef, useState } from "react";
import { Cpu, Lock, Radio, TrendingUp } from "lucide-react";

const WhyAicraysSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Cpu,
      title: "Custom-built for your systems",
      description: "No templates or one-size-fits-all solutions. Every platform is architected specifically for your workflows and requirements.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Lock,
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
    <section className="h-screen flex items-center justify-center relative overflow-hidden" id="why-aicrays">
      {/* Background with Floating Orbs - slightly darker than hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient background - slightly darker than hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/70 via-purple-200/60 to-purple-300/80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-300/60 via-purple-200/50 to-transparent"></div>
        
        {/* Edge gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/40 via-transparent to-violet-400/45"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-300/40 via-transparent to-purple-400/45"></div>
        
        {/* Large floating orbs - matching hero animation with different positions */}
        <div className="absolute top-[15%] right-[12%] w-56 h-56 bg-purple-500/40 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[30%] left-[10%] w-64 h-64 bg-violet-500/35 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '10s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-[25%] right-[20%] w-48 h-48 bg-indigo-600/45 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '7s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[15%] left-[18%] w-44 h-44 bg-purple-700/40 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '16s', animationDuration: '20s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[55%] right-[35%] w-36 h-36 bg-indigo-500/50 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '6s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[45%] left-[30%] w-32 h-32 bg-purple-500/45 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '11s', animationDuration: '21s' }}></div>
        <div className="absolute top-[75%] left-[45%] w-28 h-28 bg-violet-600/48 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '9s', animationDuration: '19s' }}></div>
        
        {/* Small orbs for depth */}
        <div className="absolute top-[40%] right-[70%] w-24 h-24 bg-purple-400/35 rounded-full blur-md animate-float-vertical opacity-60" style={{ animationDelay: '20s', animationDuration: '9s' }}></div>
        <div className="absolute top-[85%] left-[60%] w-20 h-20 bg-blue-400/38 rounded-full blur-md animate-float-vertical opacity-65" style={{ animationDelay: '22s', animationDuration: '8s' }}></div>
        <div className="absolute top-[25%] right-[85%] w-16 h-16 bg-violet-600/45 rounded-full blur-md animate-float-vertical opacity-70" style={{ animationDelay: '28s', animationDuration: '11s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto py-8" ref={sectionRef}>
        {/* Section Header - matching hero style */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-3"></span>
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              Not Templates. Not Theoretical.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
              Just Built for You.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            We don't sell off-the-shelf products. Every solution is personalized to the workflows, systems, and goals of the client.
          </p>
        </div>

        {/* Features Grid - 2x2 layout matching the image */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
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
                  {/* Card with glassmorphism - matching hero visual */}
                  <div className="relative backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                          <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA - matching hero style */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
          <p className="text-gray-600 mb-6 text-lg font-light">Still stuck with generic software?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[280px] hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800"
          >
            <span className="relative z-10">Let's Talk</span>
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
