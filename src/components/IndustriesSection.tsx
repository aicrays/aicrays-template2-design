
import React, { useEffect, useRef, useState } from "react";
import { Wrench, Users, Heart, Globe } from "lucide-react";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Wrench,
      title: "Manufacturing",
      description: "Streamline production workflows and quality control processes",
      useCase: "Real-time equipment monitoring and predictive maintenance",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Government",
      description: "Secure access in critical infrastructure environments",
      useCase: "Multi-level security clearance and audit trail systems",
      delay: "0.1s"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems for patient data and care coordination",
      useCase: "Integrated patient records with real-time collaboration",
      delay: "0.2s"
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Real-time tracking and supply chain optimization solutions",
      useCase: "End-to-end shipment visibility and route optimization",
      delay: "0.3s"
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
            }, cardIndex * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.industry-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/50 via-white to-pulse-100/30"></div>
        
        {/* Floating animated orbs */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-pulse-200/20 to-pulse-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-br from-pulse-300/15 to-pulse-400/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-pulse-100/25 to-pulse-200/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle mesh pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="mesh" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="0.5" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh)" />
          </svg>
        </div>
      </div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer backdrop-blur-sm">
            <span>Industries</span>
          </div>
          <h2 className="section-title mb-6 bg-gradient-to-r from-gray-900 via-pulse-700 to-gray-900 bg-clip-text text-transparent">
            Trusted Across Sectors
          </h2>
          <p className="section-subtitle mx-auto">
            Our modular approach adapts to the unique requirements and regulations of different industries.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* First Column - Two cards */}
          <div className="space-y-8">
            {industries.slice(0, 2).map((industry, index) => (
              <div 
                key={industry.title}
                data-index={index}
                className={`industry-card glass-morphism-card group relative overflow-hidden transition-all duration-700 hover:translate-y-[-12px] ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: industry.delay,
                  height: index === 0 ? '320px' : '280px' 
                }}
              >
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/30 rounded-2xl"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pulse-400/0 to-pulse-600/0 group-hover:from-pulse-400/10 group-hover:to-pulse-600/5 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon with glow */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-pulse-500/25 group-hover:shadow-2xl transition-all duration-500">
                        <industry.icon className="w-7 h-7 text-white" />
                      </div>
                      {/* Animated ring on hover */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-pulse-400/0 group-hover:border-pulse-400/50 group-hover:scale-110 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-gray-900 group-hover:text-pulse-700 transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>

                  {/* Use Case Reveal */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-gradient-to-r from-pulse-50 to-pulse-100/50 rounded-xl p-4 border border-pulse-200/50 backdrop-blur-sm">
                      <p className="text-sm text-pulse-700 font-medium">
                        💼 {industry.useCase}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-pulse-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pulse-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
              </div>
            ))}
          </div>

          {/* Second Column - CTA Card */}
          <div className="flex items-center justify-center">
            <div className="glass-morphism-card group relative overflow-hidden transition-all duration-700 hover:translate-y-[-8px] w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-100/60 to-pulse-200/40 backdrop-blur-xl border border-pulse-300/40 rounded-2xl"></div>
              
              <div className="relative z-10 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-pulse-500/30 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <span className="text-2xl">🔍</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Don't See Your Industry?
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our platform adapts to unique sector requirements. Let's discuss your specific needs.
                </p>
                
                <button className="button-primary w-full group-hover:scale-105 transition-transform">
                  Let's Talk →
                </button>
              </div>
            </div>
          </div>

          {/* Third Column - Remaining cards */}
          <div className="space-y-8">
            {industries.slice(2, 4).map((industry, index) => {
              const actualIndex = index + 2;
              return (
                <div 
                  key={industry.title}
                  data-index={actualIndex}
                  className={`industry-card glass-morphism-card group relative overflow-hidden transition-all duration-700 hover:translate-y-[-12px] ${
                    visibleCards.includes(actualIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    animationDelay: industry.delay,
                    height: index === 0 ? '280px' : '320px' 
                  }}
                >
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/30 rounded-2xl"></div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pulse-400/0 to-pulse-600/0 group-hover:from-pulse-400/10 group-hover:to-pulse-600/5 rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon with glow */}
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-pulse-500/25 group-hover:shadow-2xl transition-all duration-500">
                          <industry.icon className="w-7 h-7 text-white" />
                        </div>
                        {/* Animated ring on hover */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-pulse-400/0 group-hover:border-pulse-400/50 group-hover:scale-110 transition-all duration-500"></div>
                      </div>
                      <h3 className="text-2xl font-bold ml-4 text-gray-900 group-hover:text-pulse-700 transition-colors">
                        {industry.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {industry.description}
                    </p>

                    {/* Use Case Reveal */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-gradient-to-r from-pulse-50 to-pulse-100/50 rounded-xl p-4 border border-pulse-200/50 backdrop-blur-sm">
                        <p className="text-sm text-pulse-700 font-medium">
                          💼 {industry.useCase}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-pulse-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pulse-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
