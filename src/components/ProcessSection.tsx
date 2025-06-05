
import React, { useEffect, useRef, useState } from "react";
import { Search, Wrench, Code, Globe } from "lucide-react";

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
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
            processSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="py-16 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden" 
      id="process" 
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-purple-400/5 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-purple-300/8 to-purple-500/3 rounded-full blur-3xl opacity-30"></div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6">
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            How We Build
          </h2>
          <p className="section-subtitle mx-auto text-gray-600 max-w-2xl">
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk and maximize customization.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block mb-12">
          {/* Horizontal Timeline */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 transform -translate-y-1/2"></div>
            
            {/* Hover Trail Effect */}
            {hoveredStep !== null && (
              <div 
                className="absolute top-1/2 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform -translate-y-1/2 transition-all duration-300 rounded-full"
                style={{
                  left: `${8 + (hoveredStep * 21)}%`,
                  width: `${21}%`,
                }}
              ></div>
            )}

            {/* Process Cards */}
            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const isVisible = visibleSteps.includes(index);
                return (
                  <div
                    key={step.title}
                    className={`relative transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Floating Icon */}
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-200 flex items-center justify-center transition-all duration-300 ${
                        hoveredStep === index ? 'scale-110 shadow-lg shadow-purple-500/20' : 'hover:scale-105'
                      }`}>
                        <step.icon className="w-7 h-7 text-purple-600" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Process Card */}
                    <div className={`bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-6 shadow-lg transition-all duration-300 ${
                      hoveredStep === index ? 'shadow-xl transform -translate-y-1' : 'hover:shadow-xl'
                    }`}>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-3">
                          <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.description}</p>
                        
                        {/* Hover Tooltip */}
                        {hoveredStep === index && (
                          <div className="text-xs text-purple-600 font-medium bg-purple-50 px-3 py-2 rounded-lg transition-all duration-200">
                            {step.stat}
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

        {/* Mobile Process Flow */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={step.title}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Mobile Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-purple-200"></div>
                  )}

                  <div className="flex items-start gap-6">
                    {/* Mobile Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-200 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-purple-600" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Mobile Card */}
                    <div className="flex-1">
                      <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{step.description}</p>
                        <div className="text-xs text-purple-600 font-medium bg-purple-50 px-3 py-2 rounded-lg inline-block">
                          {step.stat}
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
