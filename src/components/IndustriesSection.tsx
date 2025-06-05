
import React, { useEffect, useRef, useState } from "react";
import { Wrench, Users, Heart, Globe } from "lucide-react";
import { useIntersectionAnimation } from "@/hooks/useAnimations";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useIntersectionAnimation("animate-fade-in", 0.1);

  const industries = [
    {
      icon: Wrench,
      title: "Manufacturing",
      description: "Streamline production workflows and quality control processes",
      useCase: "Real-time equipment monitoring and predictive maintenance",
    },
    {
      icon: Users,
      title: "Government",
      description: "Secure access in critical infrastructure environments",
      useCase: "Multi-level security clearance and audit trail systems",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems for patient data and care coordination",
      useCase: "Integrated patient records with real-time collaboration",
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Real-time tracking and supply chain optimization solutions",
      useCase: "End-to-end shipment visibility and route optimization",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
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
    <section 
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-lavender-50/50" 
      ref={sectionRef}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="floating-orb absolute bottom-1/3 right-1/4 w-24 h-24 bg-violet-200/15 rounded-full blur-lg animate-float-delayed"></div>
        <div className="floating-orb absolute top-1/2 right-1/3 w-40 h-40 bg-purple-100/10 rounded-full blur-2xl animate-float-reverse"></div>
      </div>
      
      <div className="section-container relative z-10 opacity-0">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer">
            <span>Industries</span>
          </div>
          <h2 className="section-title mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-violet-900 bg-clip-text text-transparent">
            Trusted Across Sectors
          </h2>
          <p className="section-subtitle mx-auto">
            Our modular approach adapts to the unique requirements and regulations of different industries.
          </p>
        </div>

        {/* Staggered Masonry Layout */}
        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div 
              key={industry.title}
              className={`industry-card glass-industry-card group relative overflow-hidden transition-all duration-700 cursor-pointer ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index % 2 === 0 ? 'stagger-up' : 'stagger-down'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Ambient Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-violet-500/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Icon & Title Row */}
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="icon-container relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden">
                    <industry.icon className="w-7 h-7 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform rounded-xl glow-ring"></div>
                  </div>
                  {/* Hover Glow Ring */}
                  <div className="absolute inset-0 bg-purple-400/30 rounded-xl blur-md scale-0 group-hover:scale-125 transition-all duration-500"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors flex-1">
                  {industry.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-5 relative z-10">
                {industry.description}
              </p>

              {/* Use Case Reveal */}
              <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 relative z-10">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-200/50">
                  <p className="text-sm text-purple-700 font-medium">
                    💼 {industry.useCase}
                  </p>
                </div>
              </div>

              {/* Floating Accent Dots */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100 animate-pulse"></div>
              
              {/* Border Gradient */}
              <div className="absolute inset-0 border border-transparent group-hover:border-purple-200/50 rounded-2xl transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Integrated CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 glass-industry-card px-8 py-4 group cursor-pointer hover:scale-105 transition-all duration-300">
            <span className="text-gray-700">Don't see your industry?</span>
            <span className="text-purple-600 font-medium group-hover:translate-x-1 transition-transform flex items-center">
              Let's talk 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
