
import React, { useEffect, useRef, useState } from "react";
import { MessageSquare, Search, Wrench, Rocket, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Discovery Session",
      description: "We dive deep into your operations, challenges, and goals to understand exactly what you need.",
      timeline: "Week 1",
      gradient: "from-purple-500 via-purple-600 to-blue-600"
    },
    {
      icon: Search,
      number: "02", 
      title: "Solution Architecture",
      description: "Our team designs a custom platform blueprint tailored to your specific requirements and workflows.",
      timeline: "Week 2",
      gradient: "from-purple-600 via-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      number: "03",
      title: "Rapid Development",
      description: "Using our modular components, we build and test your platform with regular feedback loops.",
      timeline: "Weeks 3-6",
      gradient: "from-blue-500 via-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch & Support",
      description: "We deploy your platform, train your team, and provide ongoing support as you scale.",
      timeline: "Week 7+",
      gradient: "from-purple-600 via-blue-600 to-purple-700"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
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
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30" id="process">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-[12%] right-[18%] w-50 h-50 bg-gradient-to-br from-purple-400/40 to-blue-400/35 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '1s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[18%] left-[12%] w-56 h-56 bg-gradient-to-br from-blue-500/35 to-purple-400/40 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '7s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[40%] w-42 h-42 bg-gradient-to-br from-purple-500/40 to-blue-500/35 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs with enhanced blue tones */}
        <div className="absolute top-[30%] left-[25%] w-34 h-34 bg-gradient-to-br from-blue-400/45 to-purple-300/40 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '9s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[45%] right-[25%] w-38 h-38 bg-gradient-to-br from-purple-400/40 to-blue-500/35 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
        <div className="absolute top-[75%] left-[45%] w-30 h-30 bg-gradient-to-br from-blue-300/40 to-purple-400/45 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '11s', animationDuration: '19s' }}></div>
        
        {/* Small detailed orbs */}
        <div className="absolute top-[40%] right-[55%] w-22 h-22 bg-gradient-to-br from-purple-500/40 to-blue-400/45 rounded-full blur-xl animate-float opacity-65" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[30%] left-[65%] w-26 h-26 bg-gradient-to-br from-blue-400/45 to-purple-300/40 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '8s', animationDuration: '17s' }}></div>
        <div className="absolute top-[85%] right-[70%] w-20 h-20 bg-gradient-to-br from-purple-400/35 to-blue-500/40 rounded-full blur-lg animate-float opacity-55" style={{ animationDelay: '5s', animationDuration: '21s' }}></div>
        
        {/* Enhanced particle effects */}
        <div className="absolute top-[25%] left-[35%] w-3.5 h-3.5 bg-purple-600/70 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[70%] right-[30%] w-3 h-3 bg-blue-500/65 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-[50%] left-[80%] w-4 h-4 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '10s' }}></div>
        <div className="absolute bottom-[35%] right-[65%] w-2.5 h-2.5 bg-blue-400/70 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[15%] left-[60%] w-2 h-2 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '12s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></span>
            <span>Our Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            From Concept to Launch in Weeks
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-medium mb-6" style={{ animationDelay: "0.5s" }}>
            Our proven methodology gets you from idea to production-ready platform faster than traditional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative backdrop-blur-xl bg-white/85 border border-white/50 rounded-2xl p-5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-3 overflow-hidden h-full flex flex-col group-hover:scale-[1.02]">
                {/* Enhanced background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-blue-50/40 to-purple-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Inner shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-purple-400/8 to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    {/* Enhanced 3D icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl"></div>
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl"></div>
                      <step.icon className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                    
                    <div className="text-2xl font-bold text-purple-300/60 group-hover:text-purple-400/80 transition-colors">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="inline-block px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium mb-2 group-hover:bg-purple-100 transition-colors">
                      {step.timeline}
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                        <ArrowRight className="w-3 h-3 text-purple-400" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Enhanced corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/40 via-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.0s" }}>
          <p className="text-gray-600 mb-4 text-base">Ready to start your project?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 font-medium text-sm"
          >
            Start Discovery Session
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
