
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
    <section className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[20%] w-40 h-40 bg-purple-400/15 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '5s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[30%] left-[15%] w-56 h-56 bg-violet-500/12 rounded-full blur-3xl animate-float-vertical opacity-45" style={{ animationDelay: '12s', animationDuration: '28s' }}></div>
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
