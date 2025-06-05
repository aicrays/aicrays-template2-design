
import React, { useEffect, useRef, useState } from "react";
import { Wrench, Users, Heart, Globe, ArrowRight } from "lucide-react";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Wrench,
      title: "Manufacturing",
      description: "Streamline production workflows and quality control processes with real-time monitoring",
      useCase: "Real-time equipment monitoring and predictive maintenance",
      position: "top-left"
    },
    {
      icon: Users,
      title: "Government",
      description: "Secure access in critical infrastructure environments with multi-level clearance",
      useCase: "Multi-level security clearance and audit trail systems",
      position: "top-right"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems for patient data and seamless care coordination",
      useCase: "Integrated patient records with real-time collaboration",
      position: "bottom-left"
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Real-time tracking and supply chain optimization for global operations",
      useCase: "End-to-end shipment visibility and route optimization",
      position: "bottom-right"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, cardIndex]);
            }, cardIndex * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.industry-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getCardPosition = (position: string) => {
    const positions = {
      "top-left": "lg:absolute lg:top-0 lg:left-0",
      "top-right": "lg:absolute lg:top-0 lg:right-0",
      "bottom-left": "lg:absolute lg:bottom-0 lg:left-0",
      "bottom-right": "lg:absolute lg:bottom-0 lg:right-0"
    };
    return positions[position as keyof typeof positions] || "";
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center" ref={sectionRef}>
      {/* Enhanced Flowing Background */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/60 via-white to-pulse-100/40"></div>
        
        {/* Flowing mesh background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
            <defs>
              <pattern id="flowing-mesh" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30h60M30 0v60" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#flowing-mesh)" />
          </svg>
        </div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-pulse-200/15 to-pulse-300/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-pulse-300/12 to-pulse-400/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pulse-100/20 to-pulse-200/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="section-container relative z-10 w-full">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="pulse-chip mx-auto mb-8 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md bg-pulse-100/80 border-pulse-300/30">
            <span className="text-pulse-700 font-semibold">Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-pulse-700 to-gray-900 bg-clip-text text-transparent">
              Trusted Across Sectors
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our modular approach adapts to the unique requirements and regulations of different industries, 
            delivering intelligent solutions that scale with your needs.
          </p>
        </div>

        {/* Orbital Card Layout */}
        <div className="max-w-7xl mx-auto relative">
          {/* Desktop Orbital Layout */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Central CTA Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="glass-morphism-card group relative overflow-hidden transition-all duration-700 hover:scale-105 w-96 h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-pulse-100/70 to-pulse-200/50 backdrop-blur-xl border border-pulse-300/40 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pulse-400/0 to-pulse-600/0 group-hover:from-pulse-400/20 group-hover:to-pulse-600/10 rounded-2xl transition-all duration-700"></div>
                
                <div className="relative z-10 text-center p-8 max-w-xs">
                  <div className="w-20 h-20 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-pulse-500/40 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <span className="text-3xl">🔍</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
                    Don't See Your Industry?
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    Our platform adapts to unique sector requirements. Let's discuss your specific needs.
                  </p>
                  
                  <button className="button-primary group/btn w-full flex items-center justify-center gap-2 group-hover:scale-105 transition-all duration-300 py-3 px-6 text-sm font-medium">
                    Let's Talk 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Orbital Industry Cards */}
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                data-index={index}
                className={`industry-card ${getCardPosition(industry.position)} w-72 transition-all duration-700 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-morphism-card group relative overflow-hidden transition-all duration-700 hover:translate-y-[-8px] h-64">
                  {/* Enhanced glassmorphism background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-white/60 backdrop-blur-xl border border-white/40 rounded-2xl"></div>
                  
                  {/* Dynamic hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-pulse-400/0 to-pulse-600/0 rounded-2xl transition-all duration-700 ${
                    hoveredCard === index ? 'from-pulse-400/15 to-pulse-600/8' : ''
                  }`}></div>
                  
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                          hoveredCard === index ? 'shadow-pulse-500/30 shadow-2xl scale-110' : ''
                        }`}>
                          <industry.icon className="w-6 h-6 text-white" />
                        </div>
                        {/* Animated ring on hover */}
                        <div className={`absolute inset-0 rounded-xl border-2 border-pulse-400/0 transition-all duration-500 ${
                          hoveredCard === index ? 'border-pulse-400/60 scale-125' : ''
                        }`}></div>
                      </div>
                      <h3 className="text-xl font-bold ml-4 text-gray-900 group-hover:text-pulse-700 transition-colors">
                        {industry.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
                      {industry.description}
                    </p>

                    {/* Use Case Reveal */}
                    <div className={`transform transition-all duration-500 ${
                      hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="bg-gradient-to-r from-pulse-50 to-pulse-100/50 rounded-lg p-3 border border-pulse-200/50 backdrop-blur-sm">
                        <p className="text-xs text-pulse-700 font-medium">
                          💼 {industry.useCase}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute top-3 right-3 w-1.5 h-1.5 bg-pulse-400/40 rounded-full transition-opacity duration-300 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Stacked Layout */}
          <div className="lg:hidden space-y-8">
            {industries.map((industry, index) => (
              <div 
                key={industry.title}
                data-index={index}
                className={`industry-card transition-all duration-700 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="glass-morphism-card group relative overflow-hidden transition-all duration-500 hover:translate-y-[-4px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/85 to-white/60 backdrop-blur-xl border border-white/40 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pulse-400/0 to-pulse-600/0 group-hover:from-pulse-400/10 group-hover:to-pulse-600/5 rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative z-10 p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-pulse-500/25 group-hover:shadow-2xl transition-all duration-500">
                          <industry.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-pulse-700 transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {industry.description}
                        </p>
                        
                        <div className="bg-gradient-to-r from-pulse-50 to-pulse-100/50 rounded-xl p-4 border border-pulse-200/50 backdrop-blur-sm">
                          <p className="text-sm text-pulse-700 font-medium">
                            💼 {industry.useCase}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile CTA Card */}
            <div className="mt-12">
              <div className="glass-morphism-card group relative overflow-hidden transition-all duration-500 hover:translate-y-[-4px]">
                <div className="absolute inset-0 bg-gradient-to-br from-pulse-100/70 to-pulse-200/50 backdrop-blur-xl border border-pulse-300/40 rounded-2xl"></div>
                
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-pulse-500/30 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <span className="text-2xl">🔍</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
                    Don't See Your Industry?
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our platform adapts to unique sector requirements. Let's discuss your specific needs.
                  </p>
                  
                  <button className="button-primary group/btn w-full flex items-center justify-center gap-2 group-hover:scale-105 transition-all duration-300">
                    Let's Talk 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
