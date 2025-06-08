
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Building2, ShoppingCart, Truck, Heart, Cog, Zap } from "lucide-react";

const CaseStudiesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [{
    icon: Building2,
    title: "Enterprise Resource Planning",
    description: "Unified dashboard for multi-location manufacturing operations with real-time analytics and predictive maintenance.",
    industry: "Manufacturing",
    status: "Live",
    gradient: "from-purple-500 to-purple-600"
  }, {
    icon: ShoppingCart,
    title: "Smart Retail Analytics",
    description: "AI-powered inventory management and customer behavior analysis platform for retail chains.",
    industry: "Retail",
    status: "Live",
    gradient: "from-purple-600 to-indigo-600"
  }, {
    icon: Truck,
    title: "Fleet Management System",
    description: "IoT-enabled logistics platform with route optimization and real-time vehicle tracking capabilities.",
    industry: "Logistics",
    status: "MVP",
    gradient: "from-indigo-500 to-purple-500"
  }, {
    icon: Heart,
    title: "Patient Care Coordination",
    description: "HIPAA-compliant platform connecting care teams with automated workflow management and reporting.",
    industry: "Healthcare",
    status: "Live",
    gradient: "from-purple-500 to-pink-500"
  }, {
    icon: Cog,
    title: "Production Line Intelligence",
    description: "Real-time monitoring and quality control system with machine learning-based anomaly detection.",
    industry: "Manufacturing",
    status: "In Progress",
    gradient: "from-indigo-600 to-purple-700"
  }, {
    icon: Zap,
    title: "Energy Management Portal",
    description: "Smart grid integration platform with consumption analytics and automated cost optimization.",
    industry: "Energy",
    status: "MVP",
    gradient: "from-purple-400 to-indigo-500"
  }];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
      case "MVP":
        return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
      case "In Progress":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100";
    }
  };

  const getIndustryColor = (industry: string) => {
    return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          solutions.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
        }
      });
    }, {
      threshold: 0.2
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world solutions that transform industries and drive measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-purple-100 hover:border-purple-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge 
                      variant="outline" 
                      className={`${getIndustryColor(solution.industry)} transition-colors duration-200`}
                    >
                      {solution.industry}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(solution.status)} transition-colors duration-200`}
                    >
                      {solution.status}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
