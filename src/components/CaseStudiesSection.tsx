
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Quote Management System",
      industry: "Manufacturing",
      outcome: "40% faster quoting process",
      description: "Digitized approval workflows and automated quote generation for a leading manufacturing company, reducing processing time and improving accuracy.",
      features: ["Automated workflow routing", "Digital approval system", "Real-time quote tracking", "Integration with existing ERP"]
    },
    {
      title: "Biometric IAM System",
      industry: "Secure Access / Smart Cities",
      outcome: "300+ secured users with iris scanning",
      description: "Multi-factor authentication system with biometric iris scanning for critical infrastructure access control.",
      features: ["Iris scan authentication", "Multi-factor security layers", "Access audit trails", "Integration with existing ID systems"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6">
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
              className="glass-card p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <span className="text-sm font-medium text-pulse-600 bg-pulse-100 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {study.title}
              </h3>
              
              <div className="text-lg font-semibold text-pulse-600 mb-4">
                {study.outcome}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {study.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {study.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="flex items-center text-pulse-600 hover:text-pulse-700 font-medium group">
                View Full Solution
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
