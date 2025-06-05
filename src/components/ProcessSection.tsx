
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
      stat: "90% faster onboarding"
    },
    {
      icon: Wrench,
      title: "Design", 
      description: "Develop architecture and prototypes that align with your workflows and requirements.",
      stat: "3x faster iteration cycles"
    },
    {
      icon: Code,
      title: "Develop",
      description: "Build secure, scalable software using modular components tailored to your needs.",
      stat: "50% reduced development time"
    },
    {
      icon: Globe,
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
      className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden" 
      id="process" 
      ref={sectionRef}
    >
      {/* Dynamic Floating Orbs Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orb - top left */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-purple-400/15 rounded-full blur-3xl animate-float opacity-40"></div>
        
        {/* Medium floating orb - top right */}
        <div className="absolute top-20 right-16 w-64 h-64 bg-gradient-to-tl from-purple-300/18 to-purple-500/12 rounded-full blur-3xl animate-float opacity-35" style={{ animationDelay: '2s' }}></div>
        
        {/* Large floating orb - center */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-100/15 to-purple-300/20 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        
        {/* Small floating orb - bottom left */}
        <div className="absolute bottom-24 left-20 w-48 h-48 bg-gradient-to-br from-purple-400/12 to-purple-200/18 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '4s' }}></div>
        
        {/* Medium floating orb - bottom right */}
        <div className="absolute bottom-16 right-12 w-72 h-72 bg-gradient-to-l from-purple-500/15 to-purple-300/20 rounded-full blur-3xl animate-float opacity-38" style={{ animationDelay: '3s' }}></div>
        
        {/* Extra small accent orbs */}
        <div className="absolute top-40 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-300/25 to-purple-400/15 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-gradient-to-tl from-purple-200/20 to-purple-500/10 rounded-full blur-2xl animate-float opacity-42" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6">
            <span>Our Process</span>
          </div>
          <div className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-purple-900 bg-clip-text text-transparent relative">
              How We Build
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-full transition-all duration-1000 delay-500 ${titleVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            </h2>
          </div>
          <p className={`section-subtitle mx-auto text-gray-600 max-w-2xl font-medium transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk and maximize customization.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block mb-12">
          {/* Enhanced Gradient Timeline */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600 transform -translate-y-1/2 rounded-full opacity-80"></div>
            
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

            {/* Process Cards */}
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
                    {/* Enhanced Floating Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 border-2 border-purple-300/50 flex items-center justify-center transition-all duration-500 shadow-lg ${
                        hoveredStep === index 
                          ? 'scale-110 shadow-xl shadow-purple-500/30 border-purple-400' 
                          : 'hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20'
                      }`}>
                        <step.icon className="w-8 h-8 text-purple-700" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Enhanced Process Card */}
                    <div className={`bg-white/95 backdrop-blur-md border border-purple-100/60 rounded-2xl p-6 shadow-xl transition-all duration-500 ${
                      hoveredStep === index 
                        ? 'shadow-2xl transform -translate-y-2 border-purple-200' 
                        : 'hover:shadow-2xl hover:-translate-y-1'
                    }`}>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                          <span className="text-xs font-bold text-purple-700 bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-full border border-purple-200">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium">
                          {step.description}
                        </p>
                        
                        {/* Enhanced Hover Tooltip */}
                        {hoveredStep === index && (
                          <div className="text-xs text-purple-700 font-bold bg-gradient-to-r from-purple-50 to-purple-100 px-4 py-2 rounded-xl border border-purple-200 transition-all duration-300 transform scale-105">
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

        {/* Enhanced Mobile Process Flow */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                  {/* Mobile Connector for 2-column layout */}
                  {index < processSteps.length - 1 && index % 2 === 0 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-purple-500 transform translate-x-full -translate-y-1/2 opacity-60"></div>
                  )}

                  <div className="text-center">
                    {/* Mobile Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 border-2 border-purple-300/50 flex items-center justify-center shadow-lg">
                        <step.icon className="w-7 h-7 text-purple-700" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Mobile Card */}
                    <div className="bg-white/95 backdrop-blur-md border border-purple-100/60 rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-xs font-bold text-purple-700 bg-gradient-to-r from-purple-100 to-purple-200 px-3 py-1 rounded-full border border-purple-200">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3 font-medium">
                        {step.description}
                      </p>
                      <div className="text-xs text-purple-700 font-bold bg-gradient-to-r from-purple-50 to-purple-100 px-3 py-2 rounded-lg border border-purple-200 inline-block">
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
