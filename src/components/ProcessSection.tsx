
import React, { useEffect, useRef, useState } from "react";
import { Search, Wrench, Code, Globe } from "lucide-react";

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "Learn your goals, audit current systems, and identify opportunities for improvement.",
      stat: "90% faster onboarding",
      iconBg: "from-purple-600 via-purple-700 to-purple-800"
    },
    {
      icon: Wrench,
      title: "Design", 
      description: "Develop architecture and prototypes that align with your workflows and requirements.",
      stat: "3x faster iteration cycles",
      iconBg: "from-blue-400 via-blue-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Develop",
      description: "Build secure, scalable software using modular components tailored to your needs.",
      stat: "50% reduced development time",
      iconBg: "from-purple-700 via-purple-800 to-blue-600"
    },
    {
      icon: Globe,
      title: "Deploy & Support",
      description: "Go live with comprehensive testing, then optimize and maintain for performance.",
      stat: "99.9% uptime guaranteed",
      iconBg: "from-blue-300 via-purple-500 to-purple-700"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
            processSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
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
    <section 
      className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-purple-50/45 to-violet-50/35 relative overflow-hidden" 
      id="process" 
      ref={sectionRef}
    >
      {/* Enhanced Dynamic Floating Orbs Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/22 to-purple-400/12 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute top-20 right-16 w-80 h-80 bg-gradient-to-tl from-blue-300/18 to-blue-500/10 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '2s', animationDuration: '24s' }}></div>
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-purple-100/20 to-purple-300/15 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '1s', animationDuration: '18s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute bottom-24 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/15 to-purple-200/20 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '4s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-16 right-12 w-88 h-88 bg-gradient-to-l from-blue-500/12 to-blue-300/18 rounded-full blur-3xl animate-float opacity-48" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-40 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-300/28 to-purple-400/12 rounded-full blur-2xl animate-float opacity-58" style={{ animationDelay: '1.5s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-48 h-48 bg-gradient-to-tl from-blue-200/25 to-blue-500/8 rounded-full blur-2xl animate-float opacity-52" style={{ animationDelay: '2.5s', animationDuration: '19s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[25%] right-[30%] w-3 h-3 bg-purple-600/80 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[35%] left-[35%] w-2 h-2 bg-blue-300/90 rounded-full animate-pulse opacity-65" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[65%] right-[20%] w-2.5 h-2.5 bg-purple-400/70 rounded-full animate-pulse opacity-60" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="section-container relative z-10 py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="pulse-chip mx-auto mb-6">
            <span>Our Process</span>
          </div>
          <div className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent relative">
              How We Build
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 rounded-full transition-all duration-1000 delay-500 ${titleVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            </h2>
          </div>
          <p className={`text-lg text-gray-700 mx-auto max-w-2xl font-medium transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk.
          </p>
        </div>

        <div className="hidden lg:block">
          {/* Enhanced Gradient Timeline */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 transform -translate-y-1/2 rounded-full opacity-80 shadow-lg"></div>
            
            {/* Enhanced Animated Progress Trail */}
            {hoveredStep !== null && (
              <div 
                className="absolute top-1/2 h-2 bg-gradient-to-r from-purple-600 to-purple-800 transform -translate-y-1/2 transition-all duration-500 rounded-full shadow-xl"
                style={{
                  left: `${8 + (hoveredStep * 21)}%`,
                  width: `${21}%`,
                  boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)',
                }}
              ></div>
            )}

            {/* Enhanced Process Cards */}
            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const isVisible = visibleSteps.includes(index);
                return (
                  <div
                    key={step.title}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
                    }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Enhanced Floating Icon */}
                    <div className="flex justify-center mb-4">
                      <div className={`w-18 h-18 rounded-full bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 border-2 border-purple-300/60 flex items-center justify-center transition-all duration-500 shadow-2xl ${
                        hoveredStep === index 
                          ? 'scale-115 shadow-3xl shadow-purple-500/40 border-purple-500' 
                          : 'hover:scale-110 hover:shadow-2xl hover:shadow-purple-400/30'
                      } relative overflow-hidden`}>
                        {/* Enhanced inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full"></div>
                        <step.icon className="w-8 h-8 text-purple-800 relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Enhanced Process Card */}
                    <div className={`bg-white/90 backdrop-blur-xl border border-purple-100/70 rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
                      hoveredStep === index 
                        ? 'shadow-3xl transform -translate-y-3 border-purple-200/80 bg-white/95' 
                        : 'hover:shadow-2xl hover:-translate-y-1'
                    } relative overflow-hidden`}>
                      {/* Enhanced Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/60 to-blue-50/40 opacity-0 transition-opacity duration-500 rounded-3xl ${hoveredStep === index ? 'opacity-100' : ''}`}></div>
                      
                      <div className="text-center relative z-10">
                        <div className="flex items-center justify-center mb-3">
                          <span className="text-xs font-bold text-purple-800 bg-gradient-to-r from-purple-100/80 to-purple-200/60 px-3 py-1 rounded-full border border-purple-200/60 shadow-sm">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-800 to-purple-900 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3 font-medium">
                          {step.description}
                        </p>
                        
                        {/* Enhanced Hover Tooltip */}
                        {hoveredStep === index && (
                          <div className="text-xs text-purple-800 font-bold bg-gradient-to-r from-purple-50/80 to-purple-100/60 px-3 py-2 rounded-xl border border-purple-200/60 transition-all duration-300 transform scale-105 shadow-lg">
                            ✨ {step.stat}
                          </div>
                        )}
                      </div>
                      
                      {/* Enhanced Corner Accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/50 via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Process Flow */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {processSteps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={step.title}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Enhanced Mobile Connector */}
                  {index < processSteps.length - 1 && index % 2 === 0 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 w-8 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform translate-x-full -translate-y-1/2 opacity-70 shadow-lg"></div>
                  )}

                  <div className="text-center">
                    {/* Enhanced Mobile Icon */}
                    <div className="flex justify-center mb-3">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.iconBg} border-2 border-purple-300/60 flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-full"></div>
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-full"></div>
                        <step.icon className="w-7 h-7 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Enhanced Mobile Card */}
                    <div className="bg-white/90 backdrop-blur-xl border border-purple-100/70 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-blue-50/40 opacity-40 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-xs font-bold text-purple-800 bg-gradient-to-r from-purple-100/80 to-purple-200/60 px-3 py-1 rounded-full border border-purple-200/60 shadow-sm">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-800 to-purple-900 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3 font-medium">
                          {step.description}
                        </p>
                        <div className="text-xs text-purple-800 font-bold bg-gradient-to-r from-purple-50/80 to-purple-100/60 px-3 py-2 rounded-lg border border-purple-200/60 inline-block shadow-sm">
                          ✨ {step.stat}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
