
import React from "react";

const OurPartners = () => {
  const partners = [
    {
      name: "TechFlow Industries",
      description: "Co-developed an AI-powered manufacturing optimization platform with real-time IoT integration.",
      products: ["SmartFactory Pro", "Quality Control AI"],
      status: "Ongoing",
      tags: ["AI/ML", "IoT", "Manufacturing"]
    },
    {
      name: "SecureData Corp",
      description: "Built a comprehensive cybersecurity dashboard for enterprise threat detection and response.",
      products: ["ThreatWatch Enterprise"],
      status: "Completed",
      tags: ["Cybersecurity", "Enterprise", "Data Intelligence"]
    },
    {
      name: "HealthTech Innovations",
      description: "Collaborated on a patient monitoring system with RFID tracking and predictive analytics.",
      products: ["PatientCare360"],
      status: "Pilot",
      tags: ["Healthcare", "RFID", "Predictive Analytics"]
    },
    {
      name: "RetailNext Solutions",
      description: "Developing an omnichannel customer experience platform with AI-driven personalization.",
      products: ["RetailAI Suite"],
      status: "Ongoing",
      tags: ["Retail", "AI/ML", "Customer Experience"]
    },
    {
      name: "GreenEnergy Systems",
      description: "Creating smart grid management tools with renewable energy optimization algorithms.",
      products: ["GridOptimizer Pro"],
      status: "Exploratory",
      tags: ["Energy", "IoT", "Sustainability"]
    },
    {
      name: "FinanceFlow Partners",
      description: "Built secure financial transaction processing with advanced fraud detection capabilities.",
      products: ["SecureTransact"],
      status: "Completed",
      tags: ["Finance", "Security", "Transaction Processing"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-green-100 text-green-700 border-green-200";
      case "Completed": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Pilot": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Exploratory": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '3s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 left-8 w-48 h-48 bg-blue-300/8 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '7s', animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent mb-4">
            Our Trusted Partners
          </h2>
          <p className="section-subtitle">
            From multinational enterprises to mission-driven startups, our partners help shape the platforms we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card hover-lift p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {partner.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(partner.status)}`}>
                  {partner.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {partner.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-800 mb-2">Products Built:</p>
                <div className="flex flex-wrap gap-1">
                  {partner.products.map((product, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-medium">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {partner.tags.map((tag, idx) => (
                  <span key={idx} className="pulse-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
