
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
      {/* Enhanced background floating orbs - many more orbs with reduced splotch visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large prominent orbs - reduced opacity */}
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '3s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 left-8 w-88 h-88 bg-violet-300/25 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '7s', animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/35 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '1s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-400/25 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '9s', animationDuration: '22s' }}></div>

        {/* Many additional floating orbs */}
        <div className="absolute top-10 left-1/4 w-56 h-56 bg-purple-600/40 rounded-full blur-xl animate-float opacity-85" style={{ animationDelay: '5s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-10 right-1/5 w-48 h-48 bg-violet-400/45 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '11s', animationDuration: '24s' }}></div>
        <div className="absolute top-1/3 left-1/5 w-52 h-52 bg-purple-300/50 rounded-full blur-xl animate-float opacity-90" style={{ animationDelay: '4s', animationDuration: '19s' }}></div>
        <div className="absolute top-2/3 right-2/3 w-40 h-40 bg-indigo-300/55 rounded-full blur-xl animate-float opacity-95" style={{ animationDelay: '13s', animationDuration: '17s' }}></div>
        <div className="absolute bottom-2/3 left-2/3 w-36 h-36 bg-violet-200/60 rounded-full blur-lg animate-float opacity-90" style={{ animationDelay: '8s', animationDuration: '21s' }}></div>

        {/* Medium size orbs */}
        <div className="absolute top-1/6 right-1/6 w-44 h-44 bg-blue-400/50 rounded-full blur-xl animate-float opacity-85" style={{ animationDelay: '15s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-1/6 left-1/6 w-42 h-42 bg-purple-500/45 rounded-full blur-lg animate-float opacity-80" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        <div className="absolute top-5/6 right-1/7 w-38 h-38 bg-indigo-500/60 rounded-full blur-md animate-float opacity-90" style={{ animationDelay: '17s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-5/6 left-1/7 w-34 h-34 bg-violet-600/55 rounded-full blur-lg animate-float opacity-85" style={{ animationDelay: '6s', animationDuration: '16s' }}></div>

        {/* Small accent orbs */}
        <div className="absolute top-24 left-3/4 w-28 h-28 bg-purple-700/65 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '10s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-24 right-3/4 w-32 h-32 bg-blue-600/50 rounded-full blur-md animate-float opacity-85" style={{ animationDelay: '19s', animationDuration: '13s' }}></div>
        <div className="absolute top-40 left-1/8 w-24 h-24 bg-indigo-700/70 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '14s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-40 right-1/8 w-26 h-26 bg-violet-500/65 rounded-full blur-md animate-float opacity-85" style={{ animationDelay: '3s', animationDuration: '15s' }}></div>

        {/* Extra small orbs for detail */}
        <div className="absolute top-16 left-5/6 w-18 h-18 bg-purple-800/75 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '12s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-16 right-5/6 w-20 h-20 bg-blue-700/70 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '21s', animationDuration: '9s' }}></div>
        <div className="absolute top-56 left-1/12 w-16 h-16 bg-indigo-800/80 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '16s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-56 right-1/12 w-22 h-22 bg-violet-700/60 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '18s', animationDuration: '12s' }}></div>
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
