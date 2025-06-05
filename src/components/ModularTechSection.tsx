
import React from "react";
import { Brain, Shield, Wifi, Database, Cloud } from "lucide-react";

const ModularTechSection = () => {
  const techModules = [
    {
      icon: Brain,
      title: "AI / Machine Learning",
      description: "Intelligent automation and predictive analytics tailored to your business logic"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat detection and secure access control built into every layer"
    },
    {
      icon: Wifi,
      title: "IoT / RFID",
      description: "Connected device management and real-time tracking solutions"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Advanced analytics and reporting systems for actionable insights"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      description: "Scalable infrastructure and continuous deployment pipelines"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="solutions">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6">
            <span>Modular Technology</span>
          </div>
          <h2 className="section-title mb-6">
            Built from Proven Components
          </h2>
          <p className="section-subtitle mx-auto">
            Every platform we create combines these foundational technologies, customized for your specific needs and integrated seamlessly with your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techModules.map((module, index) => (
            <div 
              key={module.title}
              className="feature-card bg-white border border-gray-200 hover:border-pulse-200 hover:shadow-lg group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pulse-100 rounded-lg flex items-center justify-center group-hover:bg-pulse-200 transition-colors">
                  <module.icon className="w-6 h-6 text-pulse-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {module.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModularTechSection;
