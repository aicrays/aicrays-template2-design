
import React, { useEffect, useRef, useState } from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const ModularTechSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const components = [
    {
      icon: Brain,
      title: "AI/ML Intelligence",
      description: "Machine learning models and intelligent automation tailored to your business logic",
      gradient: "from-purple-500 to-purple-600",
      iconBg: "from-purple-400 via-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security protocols with multi-layered access control",
      gradient: "from-purple-600 to-purple-700",
      iconBg: "from-purple-500 via-purple-600 to-purple-700"
    },
    {
      icon: Wifi,
      title: "IoT/RFID Systems",
      description: "Connected device networks for real-time operational visibility",
      gradient: "from-blue-500 to-purple-500",
      iconBg: "from-blue-400 via-purple-400 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Analytics and reporting tailored to your enterprise operations",
      gradient: "from-purple-500 to-blue-500",
      iconBg: "from-purple-400 via-purple-500 to-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      description: "Scalable infrastructure and seamless deployment pipelines",
      gradient: "from-purple-600 to-blue-600",
      iconBg: "from-purple-500 via-purple-600 to-blue-600"
    },
    {
      icon: Layout,
      title: "Human-Centered UX",
      description: "Intuitive interfaces designed to enhance productivity and user experience",
      gradient: "from-blue-400 to-purple-500",
      iconBg: "from-blue-400 via-purple-400 to-purple-500"
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
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40 relative overflow-hidden" id="solutions">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-400/8 to-blue-400/12 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/8 via-transparent to-violet-500/6 animate-gradient-shift" style={{ animationDelay: '3s', animationDuration: '12s' }}></div>
        
        {/* Floating Glow Orbs */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-purple-200/15 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
        <div className="absolute top-[60%] right-[15%] w-24 h-24 bg-violet-300/12 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[30%] left-[30%] w-40 h-40 bg-blue-200/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        
        {/* Micro Particles */}
        <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-[40%] right-[40%] w-1 h-1 bg-violet-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-35" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto py-8" ref={sectionRef}>
        {/* Compact Section Header */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/60 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-4 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-3"></span>
            <span>Proven Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Built from Proven Components
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-4xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Every platform we build combines these core technologies, tailored to your specific enterprise needs.
          </p>
        </div>

        {/* Enhanced Component Grid */}
        <div className="relative">
          {/* Desktop Layout - 3 columns, more compact */}
          <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {components.map((component, index) => {
              return (
                <div
                  key={component.title}
                  className={`component-card group cursor-pointer transition-all duration-700 ${
                    visibleCards.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced 3D Card with Gradient Shadow */}
                  <div className="relative backdrop-blur-xl bg-white/90 border border-white/40 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden group-hover:shadow-purple-200/30">
                    {/* Enhanced Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Soft Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Enhanced 3D Icon with Gradient Background */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${component.iconBg} rounded-2xl flex items-center justify-center shadow-2xl mb-5 group-hover:scale-110 group-hover:shadow-purple-300/40 transition-all duration-300 relative overflow-hidden`}>
                        {/* Inner glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl"></div>
                        {/* Soft highlight on top */}
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl"></div>
                        <component.icon className="w-7 h-7 text-white relative z-10 drop-shadow-sm" strokeWidth={2.5} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                        {component.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {component.description}
                      </p>
                    </div>

                    {/* Enhanced Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/40 via-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet Layout - 2 Columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-4xl mx-auto">
            {components.map((component, index) => (
              <div
                key={component.title}
                className={`component-card group cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/90 border border-white/40 rounded-2xl p-5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-3 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${component.iconBg} rounded-xl flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl"></div>
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl"></div>
                      <component.icon className="w-6 h-6 text-white relative z-10 drop-shadow-sm" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {component.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Single Column */}
          <div className="md:hidden grid grid-cols-1 gap-4 max-w-md mx-auto">
            {components.map((component, index) => (
              <div
                key={component.title}
                className={`component-card group cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/90 border border-white/40 rounded-xl p-4 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${component.iconBg} rounded-lg flex items-center justify-center shadow-xl mb-3 mx-auto group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg"></div>
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg"></div>
                      <component.icon className="w-5 h-5 text-white relative z-10 drop-shadow-sm" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {component.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 hover:shadow-purple-300/30"
          >
            Schedule Discovery Session
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModularTechSection;
