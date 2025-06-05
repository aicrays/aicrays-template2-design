
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, Factory, Shield } from "lucide-react";

const CaseStudiesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const caseStudies = [
    {
      title: "Quote Management System",
      industry: "Manufacturing",
      outcome: "40% faster quoting process",
      description: "Digitized approval workflows and automated quote generation for a leading manufacturing company, reducing processing time and improving accuracy.",
      features: ["Automated workflow routing", "Digital approval system", "Real-time quote tracking", "Integration with existing ERP"],
      icon: Factory,
      gradient: "from-blue-500 to-blue-600",
      slideDirection: "left"
    },
    {
      title: "Biometric IAM System",
      industry: "Secure Access / Smart Cities",
      outcome: "300+ secured users with iris scanning",
      description: "Multi-factor authentication system with biometric iris scanning for critical infrastructure access control.",
      features: ["Iris scan authentication", "Multi-factor security layers", "Access audit trails", "Integration with existing ID systems"],
      icon: Shield,
      gradient: "from-purple-500 to-purple-600",
      slideDirection: "right"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.case-study-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pulse-300 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pulse-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="section-container relative z-10" ref={sectionRef}>
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer">
            <span>Proven Results</span>
          </div>
          <h2 className="section-title mb-6">
            Real Solutions, Real Impact
          </h2>
          <p className="section-subtitle mx-auto">
            See how we've transformed operations for enterprise clients with custom-built platforms that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className={`case-study-card glass-card p-6 lg:p-8 hover:shadow-2xl transition-all duration-700 group relative overflow-hidden ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${study.slideDirection === 'left' ? '-translate-x-8' : 'translate-x-8'}`
              }`}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-pulse-50/20 group-hover:to-pulse-100/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium text-white bg-gradient-to-r ${study.gradient} px-3 py-1 rounded-full shadow-md`}>
                    {study.industry}
                  </span>
                  <div className={`w-10 h-10 bg-gradient-to-br ${study.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <study.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-pulse-700 transition-colors">
                  {study.title}
                </h3>
                
                <div className="text-lg font-semibold text-pulse-600 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-pulse-500 rounded-full mr-2 animate-pulse"></div>
                  {study.outcome}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {study.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center group-hover:translate-x-1 transition-transform"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center text-pulse-600 hover:text-pulse-700 font-medium group-hover:translate-x-2 transition-all duration-300 bg-pulse-50 hover:bg-pulse-100 px-4 py-2 rounded-lg">
                  View Full Solution
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pulse-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white border border-pulse-200 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
            <span className="text-gray-700 mr-2">Want to see your results here?</span>
            <ArrowRight className="w-4 h-4 text-pulse-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
