
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
    <section className="relative bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 py-16 md:py-24">
      {/* Background floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '3s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 left-8 w-80 h-80 bg-violet-300/15 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '7s', animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-purple-500/25 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '1s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl animate-float opacity-35" style={{ animationDelay: '9s', animationDuration: '22s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            From multinational enterprises to mission-driven startups, our partners help shape the platforms we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card hover-lift p-8 group bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:bg-white/90"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {partner.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(partner.status)}`}>
                  {partner.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {partner.description}
              </p>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-800 mb-3">Products Built:</p>
                <div className="flex flex-wrap gap-2">
                  {partner.products.map((product, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-100">
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
