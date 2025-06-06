
import React, { useEffect, useRef, useState } from "react";
import { Cpu, Lock, Radio, TrendingUp, Server, Palette } from "lucide-react";

const ModularTechSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const components = [
    {
      icon: Cpu,
      title: "AI/ML Intelligence",
      description: "Machine learning models and intelligent automation tailored to your business logic",
      iconBg: "from-purple-500 to-purple-600"
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Enterprise-grade security protocols with multi-layered access control",
      iconBg: "from-purple-600 to-indigo-600"
    },
    {
      icon: Radio,
      title: "IoT/RFID Systems",
      description: "Connected device networks for real-time operational visibility",
      iconBg: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Data Intelligence",
      description: "Analytics and reporting tailored to your enterprise operations",
      iconBg: "from-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: "Cloud DevOps",
      description: "Scalable infrastructure and seamless deployment pipelines",
      iconBg: "from-indigo-600 to-purple-700"
    },
    {
      icon: Palette,
      title: "Human-Centered UX",
      description: "Intuitive interfaces designed to enhance productivity and user experience",
      iconBg: "from-purple-400 to-indigo-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            components.forEach((_, index) => {
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
    <section className="h-screen flex items-center justify-center relative overflow-hidden" id="solutions">
      {/* Background with Floating Orbs - matching hero style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-purple-100/50 to-purple-200/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-300/40 via-purple-200/30 to-transparent"></div>
        
        {/* Edge gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-transparent to-violet-400/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-300/20 via-transparent to-purple-400/25"></div>
        
        {/* Large floating orbs - matching hero animation */}
        <div className="absolute top-[10%] left-[5%] w-56 h-56 bg-purple-500/40 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute top-[20%] right-[8%] w-64 h-64 bg-violet-500/35 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[25%] left-[12%] w-48 h-48 bg-indigo-600/45 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[15%] right-[15%] w-44 h-44 bg-purple-700/40 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '14s', animationDuration: '16s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[45%] left-[20%] w-36 h-36 bg-indigo-500/50 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '4s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[35%] right-[25%] w-32 h-32 bg-purple-500/45 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '9s', animationDuration: '17s' }}></div>
        <div className="absolute top-[65%] right-[35%] w-28 h-28 bg-violet-600/48 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '7s', animationDuration: '15s' }}></div>
        
        {/* Small orbs for depth */}
        <div className="absolute top-[30%] left-[60%] w-24 h-24 bg-purple-400/35 rounded-full blur-md animate-float-vertical opacity-55" style={{ animationDelay: '18s', animationDuration: '7s' }}></div>
        <div className="absolute top-[75%] right-[50%] w-20 h-20 bg-blue-400/38 rounded-full blur-md animate-float-vertical opacity-60" style={{ animationDelay: '20s', animationDuration: '6s' }}></div>
        <div className="absolute top-[25%] left-[75%] w-16 h-16 bg-violet-600/45 rounded-full blur-md animate-float-vertical opacity-65" style={{ animationDelay: '26s', animationDuration: '9s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto py-8" ref={sectionRef}>
        {/* Section Header - matching hero style */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-3"></span>
            <span>Proven Capabilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              Built from Proven Components
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Every platform we build combines these core technologies, tailored to your specific enterprise needs.
          </p>
        </div>

        {/* Component Grid - matching hero visual style */}
        <div className="relative">
          {/* Desktop Layout - 3 columns */}
          <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {components.map((component, index) => {
              return (
                <div
                  key={component.title}
                  className={`component-card group cursor-pointer transition-all duration-700 ${
                    visibleCards.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {/* Card with glassmorphism - matching hero visual */}
                  <div className="relative backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      {/* Icon - matching hero visual style */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${component.iconBg} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <component.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                        {component.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed transition-colors text-sm group-hover:text-gray-700">
                        {component.description}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Responsive Layout */}
          <div className="lg:hidden space-y-6">
            {components.map((component, index) => (
              <div
                key={component.title}
                className={`component-card group cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl p-5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${component.iconBg} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <component.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {component.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed transition-colors text-sm group-hover:text-gray-700">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - matching hero style */}
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[280px] hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800"
          >
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

export default ModularTechSection;
