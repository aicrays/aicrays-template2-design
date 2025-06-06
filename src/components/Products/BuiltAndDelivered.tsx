
import React from "react";
import { Badge } from "@/components/ui/badge";

const BuiltAndDelivered = () => {
  const products = [
    {
      name: "SecureFlow Analytics",
      description: "Real-time cybersecurity monitoring platform with advanced threat detection and automated response systems.",
      components: ["AI/ML", "Cybersecurity", "Data Analytics"],
      industry: "Finance",
      deliveryType: "Built by Aicrays",
      status: "Live"
    },
    {
      name: "SmartFactory Hub",
      description: "IoT-enabled manufacturing optimization platform with predictive maintenance and quality control.",
      components: ["IoT", "RFID", "UX Systems"],
      industry: "Manufacturing",
      deliveryType: "Co-Built with TechCorp",
      status: "In Production"
    },
    {
      name: "HealthTrack Pro",
      description: "Patient data management system with AI-powered diagnostics and secure data handling.",
      components: ["AI/ML", "Data Intelligence", "Cybersecurity"],
      industry: "Healthcare",
      deliveryType: "Built by Aicrays",
      status: "Live"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-700 border-green-200";
      case "In Production": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Archived": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-purple-100 text-purple-700 border-purple-200";
    }
  };

  return (
    <section className="relative py-16 overflow-hidden" id="built-and-delivered">
      {/* Section-specific enhanced background splotches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large splotches with increased visibility */}
        <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] bg-gradient-to-br from-purple-300/75 to-violet-400/70 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '3s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tl from-indigo-300/80 to-blue-300/75 rounded-full blur-3xl animate-float opacity-75" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-[10%] left-[40%] w-[380px] h-[380px] bg-gradient-to-bl from-violet-400/70 to-purple-300/75 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '15s', animationDuration: '28s' }}></div>
        
        {/* Medium splotches for texture */}
        <div className="absolute top-[30%] right-[25%] w-[300px] h-[300px] bg-gradient-to-tr from-blue-200/75 to-indigo-400/70 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[45%] left-[5%] w-[320px] h-[320px] bg-gradient-to-bl from-purple-200/80 to-violet-300/75 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '12s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-[25%] right-[60%] w-[280px] h-[280px] bg-gradient-to-tr from-indigo-200/75 to-purple-400/70 rounded-full blur-2xl animate-float opacity-65" style={{ animationDelay: '18s', animationDuration: '24s' }}></div>
        
        {/* Small accent splotches */}
        <div className="absolute top-[20%] left-[70%] w-[200px] h-[200px] bg-gradient-to-br from-violet-300/60 to-blue-300/65 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '4s', animationDuration: '20s' }}></div>
        <div className="absolute top-[75%] left-[80%] w-[220px] h-[220px] bg-gradient-to-tl from-purple-300/65 to-indigo-300/60 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '10s', animationDuration: '32s' }}></div>
      </div>

      {/* Section-specific orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Scattered orbs throughout the section */}
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-purple-500/60 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        <div className="absolute top-[25%] left-[60%] w-2 h-2 bg-violet-600/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '7s', animationDuration: '22s' }}></div>
        <div className="absolute top-[35%] left-[85%] w-1 h-1 bg-indigo-500/55 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '12s', animationDuration: '20s' }}></div>
        <div className="absolute top-[50%] left-[10%] w-2 h-2 bg-blue-600/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '16s', animationDuration: '25s' }}></div>
        <div className="absolute top-[65%] left-[45%] w-1 h-1 bg-purple-700/65 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '20s', animationDuration: '17s' }}></div>
        <div className="absolute top-[80%] left-[75%] w-2 h-2 bg-violet-500/50 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '25s', animationDuration: '19s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title bg-gradient-to-r from-gray-800 via-purple-700 to-purple-900 bg-clip-text text-transparent mb-4">
            Built and Delivered
          </h2>
          <p className="section-subtitle mx-auto">
            Explore our flagship platforms—custom-built with precision and performance. 
            Each solution is engineered using our modular components, designed for industry-specific outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift group"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {product.components.map((component, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {component}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                    {product.industry}
                  </Badge>
                  <Badge variant="outline" className="text-xs border-gray-200 text-gray-700">
                    {product.deliveryType}
                  </Badge>
                </div>
                
                <div>
                  <Badge className={`text-xs ${getStatusColor(product.status)}`}>
                    {product.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltAndDelivered;
