
import React from "react";
import { Wrench, Users, Heart, Globe } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Wrench,
      title: "Manufacturing",
      description: "Streamline production workflows and quality control processes"
    },
    {
      icon: Users,
      title: "Government",
      description: "Secure access in critical infrastructure environments"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems for patient data and care coordination"
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Real-time tracking and supply chain optimization solutions"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6">
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
              className="text-center feature-card bg-gray-50 border border-gray-200 hover:border-pulse-200 hover:shadow-lg group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-pulse-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pulse-200 transition-colors">
                <industry.icon className="w-8 h-8 text-pulse-600" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {industry.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
