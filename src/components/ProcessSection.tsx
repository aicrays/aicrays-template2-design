
import React from "react";
import { Search, Wrench, Code, Globe } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "Learn your goals, audit current systems, and identify opportunities for improvement and integration."
    },
    {
      icon: Wrench,
      title: "Design",
      description: "Develop architecture and prototypes that align with your workflows and technical requirements."
    },
    {
      icon: Code,
      title: "Develop",
      description: "Build secure, scalable software using modular components tailored to your specifications."
    },
    {
      icon: Globe,
      title: "Deploy & Support",
      description: "Go live with comprehensive testing, then optimize and maintain for continued performance."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50" id="process">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6">
            <span>Our Process</span>
          </div>
          <h2 className="section-title mb-6">
            How We Build
          </h2>
          <p className="section-subtitle mx-auto">
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk and maximize customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white border-2 border-pulse-200 rounded-full flex items-center justify-center mx-auto group-hover:border-pulse-500 transition-colors">
                  <step.icon className="w-8 h-8 text-pulse-600" />
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pulse-200 to-transparent -translate-x-8"></div>
                )}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pulse-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="button-primary">
            Schedule a Discovery Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
