
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
      gradient: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: Users,
      title: "Government",
      description: "Secure access in critical infrastructure environments",
      useCase: "Multi-level security clearance and audit trail systems",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems for patient data and care coordination",
      useCase: "Integrated patient records with real-time collaboration",
      gradient: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Real-time tracking and supply chain optimization solutions",
      useCase: "End-to-end shipment visibility and route optimization",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(124,58,237,0.02)_49%,rgba(124,58,237,0.02)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer">
            <span>Industries</span>
          </div>
          <h2 className="section-title mb-6">
            Trusted Across Sectors
          </h2>
          <p className="section-subtitle mx-auto">
            Our modular approach adapts to the unique requirements and regulations of different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div 
              key={industry.title}
              className={`industry-card text-center feature-card bg-white border border-gray-200 hover:border-pulse-200 hover:shadow-2xl group relative overflow-hidden transition-all duration-500 cursor-pointer ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                  <industry.icon className="w-8 h-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-pulse-700 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Use Case Reveal */}
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-pulse-50 rounded-lg p-3 border-l-3 border-pulse-400">
                    <p className="text-sm text-pulse-700 font-medium">
                      💼 {industry.useCase}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-pulse-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-pulse-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
              
              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pulse-200 rounded-2xl transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white border border-pulse-200 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <span className="text-gray-700">Don't see your industry?</span>
            <span className="text-pulse-600 font-medium group-hover:translate-x-1 transition-transform">Let's talk →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
