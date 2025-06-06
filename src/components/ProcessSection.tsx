
import React, { useEffect, useRef, useState } from "react";
import { Search, Wrench, Code, Globe, Lightbulb, Layers, Rocket, LifeBuoy } from "lucide-react";

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discover",
      description: "Learn your goals, audit current systems, and identify opportunities for improvement.",
      stat: "90% faster onboarding"
    },
    {
      icon: Layers,
      title: "Design", 
      description: "Develop architecture and prototypes that align with your workflows and requirements.",
      stat: "3x faster iteration cycles"
    },
    {
      icon: Rocket,
      title: "Develop",
      description: "Build secure, scalable software using modular components tailored to your needs.",
      stat: "50% reduced development time"
    },
    {
      icon: LifeBuoy,
      title: "Deploy & Support",
      description: "Go live with comprehensive testing, then optimize and maintain for performance.",
      stat: "99.9% uptime guaranteed"
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-purple-50/20 to-purple-50/40" 
      id="process" 
      ref={sectionRef}
    >
      {/* Enhanced Dynamic Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/60 via-purple-100/40 to-purple-50/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-100/60 via-purple-50/30 to-transparent"></div>
        
        {/* Large floating orbs */}
        <div className="absolute top-[15%] right-[8%] w-80 h-80 bg-gradient-radial from-purple-200/30 to-transparent rounded-full blur-3xl animate-float-vertical opacity-70" style={{
          animationDelay: '2s',
          animationDuration: '28s'
        }}></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-gradient-radial from-purple-300/25 to-transparent rounded-full blur-3xl animate-float-vertical opacity-60" style={{
          animationDelay: '8s',
          animationDuration: '32s'
        }}></div>
        <div className="absolute top-[30%] left-[25%] w-72 h-72 bg-gradient-radial from-indigo-200/35 to-transparent rounded-full blur-3xl animate-float-vertical opacity-65" style={{
          animationDelay: '15s',
          animationDuration: '25s'
        }}></div>
        <div className="absolute bottom-[35%] right-[20%] w-64 h-64 bg-gradient-radial from-violet-200/40 to-transparent rounded-full blur-3xl animate-float-vertical opacity-75" style={{
          animationDelay: '22s',
          animationDuration: '30s'
        }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[45%] right-[35%] w-48 h-48 bg-purple-200/25 rounded-full blur-2xl animate-float-vertical opacity-55" style={{
          animationDelay: '5s',
          animationDuration: '20s'
        }}></div>
        <div className="absolute bottom-[50%] left-[30%] w-56 h-56 bg-indigo-300/20 rounded-full blur-2xl animate-float-vertical opacity-50" style={{
          animationDelay: '12s',
          animationDuration: '24s'
        }}></div>
        <div className="absolute top-[60%] right-[60%] w-40 h-40 bg-violet-300/30 rounded-full blur-2xl animate-float-vertical opacity-60" style={{
          animationDelay: '18s',
          animationDuration: '18s'
        }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[25%] left-[70%] w-32 h-32 bg-purple-400/25 rounded-full blur-xl animate-float-vertical opacity-45" style={{
          animationDelay: '7s',
          animationDuration: '15s'
        }}></div>
        <div className="absolute bottom-[15%] right-[45%] w-36 h-36 bg-indigo-200/30 rounded-full blur-xl animate-float-vertical opacity-50" style={{
          animationDelay: '25s',
          animationDuration: '22s'
        }}></div>
        
        {/* Extra small floating elements for depth */}
        <div className="absolute top-[70%] left-[15%] w-24 h-24 bg-violet-300/20 rounded-full blur-lg animate-float-vertical opacity-40" style={{
          animationDelay: '10s',
          animationDuration: '12s'
        }}></div>
        <div className="absolute top-[85%] right-[25%] w-20 h-20 bg-purple-300/25 rounded-full blur-lg animate-float-vertical opacity-35" style={{
          animationDelay: '20s',
          animationDuration: '16s'
        }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto py-12">
        {/* Header Section - Matching Hero Style */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-2"></span>
            <span>Our Process</span>
          </div>
          
          <div className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="font-bold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
                How We Build
              </span>
            </h2>
          </div>
          
          <p className={`text-lg md:text-xl leading-relaxed text-gray-700 mx-auto max-w-3xl font-normal transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Enhanced Timeline */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 transform -translate-y-1/2 rounded-full opacity-60"></div>
            
            {/* Animated Progress Trail */}
            {hoveredStep !== null && (
              <div 
                className="absolute top-1/2 h-1.5 bg-gradient-to-r from-purple-500 to-purple-700 transform -translate-y-1/2 transition-all duration-500 rounded-full shadow-lg"
                style={{
                  left: `${8 + (hoveredStep * 21)}%`,
                  width: `${21}%`,
                  boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
                }}
              ></div>
            )}

            {/* Process Cards - Ensuring equal sizing */}
            <div className="grid grid-cols-4 gap-8">
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
                    {/* Floating Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-white via-purple-50 to-purple-100 border-2 border-purple-200/60 flex items-center justify-center transition-all duration-500 shadow-lg ${
                        hoveredStep === index 
                          ? 'scale-110 shadow-2xl shadow-purple-500/30 border-purple-400/80 bg-gradient-to-br from-purple-50 to-purple-100' 
                          : 'hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20'
                      }`}>
                        <step.icon className="w-8 h-8 text-purple-700" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Process Card - Fixed height to ensure equal sizing */}
                    <div className={`bg-white/95 backdrop-blur-xl border border-purple-100/60 rounded-2xl p-6 shadow-xl transition-all duration-500 h-64 flex flex-col ${
                      hoveredStep === index 
                        ? 'shadow-2xl transform -translate-y-2 border-purple-200/80 bg-white' 
                        : 'hover:shadow-2xl hover:-translate-y-1'
                    }`}>
                      <div className="text-center flex-1 flex flex-col">
                        <div className="flex items-center justify-center mb-4">
                          <span className="text-sm font-bold text-purple-700 bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 rounded-full border border-purple-200/60">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 font-normal flex-1">
                          {step.description}
                        </p>
                        
                        {/* Enhanced Hover Tooltip */}
                        {hoveredStep === index && (
                          <div className="text-sm text-purple-700 font-semibold bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 rounded-xl border border-purple-200/60 transition-all duration-300 transform scale-105">
                            ✨ {step.stat}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
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
                  <div className="text-center">
                    {/* Mobile Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white via-purple-50 to-purple-100 border-2 border-purple-200/60 flex items-center justify-center shadow-lg">
                        <step.icon className="w-7 h-7 text-purple-700" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Mobile Card - Fixed min-height for consistency */}
                    <div className="bg-white/95 backdrop-blur-xl border border-purple-100/60 rounded-2xl p-6 shadow-xl min-h-[280px] flex flex-col">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-sm font-bold text-purple-700 bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 rounded-full border border-purple-200/60">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 font-normal flex-1">
                        {step.description}
                      </p>
                      <div className="text-sm text-purple-700 font-semibold bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 rounded-lg border border-purple-200/60 inline-block mt-auto">
                        ✨ {step.stat}
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
