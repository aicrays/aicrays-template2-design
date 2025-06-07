
import React from "react";
import { Building2, Shield, Database, Plane, Cpu, CreditCard } from "lucide-react";

const HeroVisual = () => {
  const companies = [
    {
      icon: Database,
      title: "AWS",
      status: "Legacy Experience",
      description: "Cloud-native architecture & enterprise scalability.",
      gradient: "from-orange-500 to-orange-600",
      statusColor: "text-blue-600 bg-blue-50"
    },
    {
      icon: Building2,
      title: "IBM",
      status: "Trusted Expertise",
      description: "Deep expertise in AI systems, security, and modular software.",
      gradient: "from-blue-600 to-indigo-600",
      statusColor: "text-purple-600 bg-purple-50"
    },
    {
      icon: Building2,
      title: "JP Morgan Chase",
      status: "Legacy Experience",
      description: "High-performance platforms built for fintech and data integrity.",
      gradient: "from-indigo-500 to-purple-500",
      statusColor: "text-blue-600 bg-blue-50"
    },
    {
      icon: Plane,
      title: "Raytheon (RTX)",
      status: "Trusted Expertise",
      description: "Mission-critical systems, aerospace-grade software engineering.",
      gradient: "from-purple-500 to-pink-500",
      statusColor: "text-purple-600 bg-purple-50"
    },
    {
      icon: Cpu,
      title: "Texas Instruments",
      status: "Legacy Experience",
      description: "Embedded systems and hardware-software integration at scale.",
      gradient: "from-indigo-600 to-purple-700",
      statusColor: "text-blue-600 bg-blue-50"
    },
    {
      icon: CreditCard,
      title: "Mastercard",
      status: "Trusted Expertise",
      description: "Secure digital platforms built for scale and reliability.",
      gradient: "from-purple-400 to-indigo-500",
      statusColor: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <div className="w-full relative">
      <div 
        className="relative z-10 opacity-0 animate-fade-in" 
        style={{ animationDelay: "1.2s" }}
      >
        {/* Header */}
        <div className="mb-4 lg:mb-6">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">
            Built and Trusted
          </h3>
          <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
            by Engineers from Fortune 500 Companies
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our platforms are designed by engineers who have led innovations at some of the world's most respected companies.
          </p>
        </div>

        {/* Companies Grid - 2x3 layout optimized for spacing */}
        <div className="grid grid-cols-2 gap-2 lg:gap-3 max-w-lg lg:max-w-xl">
          {companies.map((company, index) => (
            <div
              key={company.title}
              className={`group bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-lg lg:rounded-xl border border-purple-100/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden opacity-0 animate-fade-in`}
              style={{ animationDelay: `${1.4 + index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg lg:rounded-xl"></div>
              
              <div className="relative z-10">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${company.gradient} rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300`}>
                    <company.icon className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  </div>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${company.statusColor}`}>
                    {company.status}
                  </span>
                </div>
                
                {/* Title */}
                <h4 className="text-xs lg:text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors leading-tight mb-1">
                  {company.title}
                </h4>
                
                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors line-clamp-2">
                  {company.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-lg lg:rounded-b-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-4 lg:mt-6 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          <a
            href="#built-and-delivered"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors group text-sm"
          >
            <span className="font-medium mr-2">Learn About Our Team</span>
            <div className="w-4 h-4 rounded-full border-2 border-purple-400 flex items-center justify-center group-hover:border-purple-600 transition-colors">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-purple-600 transition-colors"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
