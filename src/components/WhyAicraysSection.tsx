
import React from "react";
import { Wrench, Gear, Users, Code } from "lucide-react";

const WhyAicraysSection = () => {
  const valuePillars = [
    {
      icon: Code,
      title: "Custom-built for your systems",
      description: "No templates or one-size-fits-all solutions. Every platform is architected specifically for your workflows and requirements."
    },
    {
      icon: Gear,
      title: "Modular, rapid development",
      description: "Proven components accelerate delivery while maintaining the flexibility to adapt and scale as your needs evolve."
    },
    {
      icon: Users,
      title: "Designed for long-term impact",
      description: "Built with future growth in mind, our platforms evolve with your business rather than requiring costly replacements."
    },
    {
      icon: Wrench,
      title: "Personalized to enterprise workflows",
      description: "We integrate with your existing systems and processes, enhancing rather than disrupting your current operations."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="about">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">
            Not Templates. Not Theoretical.<br />
            <span className="text-pulse-500">Just Built for You.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We don't sell off-the-shelf products. Every solution is personalized to the workflows, systems, and goals of the client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {valuePillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="flex items-start space-x-4 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-pulse-100 rounded-xl flex items-center justify-center group-hover:bg-pulse-200 transition-colors">
                  <pillar.icon className="w-7 h-7 text-pulse-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-8 lg:p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Let's Build What Your Current Platform Can't
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to transform your operations with a platform designed around your business? Let's discuss what's possible.
            </p>
            <a href="#contact" className="button-primary">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
