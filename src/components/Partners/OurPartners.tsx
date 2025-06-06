
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
      {/* Section-specific splotches for partner cards area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partners section large splotches */}
        <div className="absolute top-[10%] left-[18%] w-60 h-60 bg-gradient-to-br from-purple-300/25 to-violet-400/20 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '3s', animationDuration: '25s' }}></div>
        <div className="absolute top-[20%] right-[12%] w-52 h-52 bg-gradient-to-bl from-indigo-300/30 to-purple-300/25 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '9s', animationDuration: '29s' }}></div>
        <div className="absolute top-[40%] left-[8%] w-48 h-48 bg-gradient-to-tr from-violet-200/35 to-blue-300/30 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '15s', animationDuration: '27s' }}></div>
        <div className="absolute top-[60%] right-[20%] w-56 h-56 bg-gradient-to-tl from-purple-400/25 to-indigo-200/30 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '21s', animationDuration: '31s' }}></div>
        <div className="absolute bottom-[15%] left-[25%] w-44 h-44 bg-gradient-to-br from-blue-200/30 to-violet-300/25 rounded-full blur-2xl animate-float opacity-35" style={{ animationDelay: '6s', animationDuration: '23s' }}></div>
        
        {/* Medium accent splotches */}
        <div className="absolute top-[30%] left-[40%] w-36 h-36 bg-gradient-to-tl from-purple-200/25 to-indigo-300/30 rounded-full blur-xl animate-float opacity-45" style={{ animationDelay: '12s', animationDuration: '33s' }}></div>
        <div className="absolute top-[70%] left-[15%] w-32 h-32 bg-gradient-to-bl from-violet-300/30 to-blue-200/25 rounded-full blur-xl animate-float opacity-40" style={{ animationDelay: '18s', animationDuration: '28s' }}></div>
        <div className="absolute top-[80%] right-[35%] w-40 h-40 bg-gradient-to-tr from-indigo-200/35 to-purple-300/25 rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '24s', animationDuration: '26s' }}></div>
        
        {/* Small texture splotches */}
        <div className="absolute top-[50%] left-[70%] w-24 h-24 bg-gradient-to-br from-purple-300/20 to-violet-200/30 rounded-full blur-lg animate-float opacity-30" style={{ animationDelay: '7s', animationDuration: '22s' }}></div>
        <div className="absolute top-[85%] left-[60%] w-28 h-28 bg-gradient-to-tl from-blue-300/25 to-indigo-200/30 rounded-full blur-lg animate-float opacity-35" style={{ animationDelay: '13s', animationDuration: '24s' }}></div>
      </div>

      {/* Section-specific orbs distributed throughout partner cards area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partners section orbs - spread across content area */}
        <div className="absolute top-[15%] left-[12%] w-1 h-1 bg-purple-400/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '1s', animationDuration: '20s' }}></div>
        <div className="absolute top-[20%] left-[35%] w-2 h-2 bg-violet-500/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[25%] left-[60%] w-1 h-1 bg-indigo-400/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '7s', animationDuration: '18s' }}></div>
        <div className="absolute top-[30%] left-[85%] w-1 h-1 bg-purple-600/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '10s', animationDuration: '22s' }}></div>
        
        <div className="absolute top-[40%] left-[20%] w-2 h-2 bg-blue-500/30 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '13s', animationDuration: '26s' }}></div>
        <div className="absolute top-[45%] left-[45%] w-1 h-1 bg-violet-300/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '16s', animationDuration: '19s' }}></div>
        <div className="absolute top-[50%] left-[70%] w-2 h-2 bg-purple-500/25 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '19s', animationDuration: '25s' }}></div>
        <div className="absolute top-[55%] left-[8%] w-1 h-1 bg-indigo-600/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '22s', animationDuration: '21s' }}></div>
        
        <div className="absolute top-[65%] left-[30%] w-1 h-1 bg-violet-600/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '25s', animationDuration: '23s' }}></div>
        <div className="absolute top-[70%] left-[55%] w-2 h-2 bg-purple-400/35 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '28s', animationDuration: '27s' }}></div>
        <div className="absolute top-[75%] left-[80%] w-1 h-1 bg-blue-700/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '31s', animationDuration: '17s' }}></div>
        <div className="absolute top-[80%] left-[15%] w-1 h-1 bg-indigo-500/40 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '34s', animationDuration: '20s' }}></div>
        
        <div className="absolute top-[85%] left-[40%] w-1 h-1 bg-purple-700/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '37s', animationDuration: '24s' }}></div>
        <div className="absolute top-[90%] left-[65%] w-2 h-2 bg-violet-500/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '40s', animationDuration: '18s' }}></div>
        
        {/* Additional micro orbs scattered throughout partners area */}
        <div className="absolute top-[12%] left-[50%] w-1 h-1 bg-purple-800/60 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '43s', animationDuration: '15s' }}></div>
        <div className="absolute top-[35%] left-[25%] w-1 h-1 bg-violet-700/55 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '46s', animationDuration: '16s' }}></div>
        <div className="absolute top-[60%] left-[75%] w-1 h-1 bg-blue-600/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '49s', animationDuration: '18s' }}></div>
        <div className="absolute top-[88%] left-[25%] w-1 h-1 bg-purple-600/65 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '52s', animationDuration: '14s' }}></div>
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
