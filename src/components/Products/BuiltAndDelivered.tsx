
import React from "react";
import { Badge } from "@/components/ui/badge";

const BuiltAndDelivered = () => {
  const products = [
    {
      name: "Quote Management System",
      description: "A dynamic quote management platform engineered for a global industrial coil manufacturer. Seamlessly integrates pricing intelligence, automation, and data insights to streamline enterprise-level quotation workflows.",
      components: ["AI/ML", "UI/UX", "Data Intelligence"],
      industry: "Manufacturing",
      deliveryType: "Built by Aicrays",
      status: "Live"
    },
    {
      name: "IAM + IRIS Authentication",
      description: "Biometric identity solution leveraging advanced IRIS scanning technology. Built for healthcare giants requiring frictionless, secure, and HIPAA-compliant access control at scale.",
      components: ["AI", "Cybersecurity"],
      industry: "Healthcare",
      deliveryType: "Built with InfiSign",
      status: "Built"
    },
    {
      name: "Fleet Management System",
      description: "An intelligent fleet orchestration platform for a Middle Eastern conglomerate, combining AI routing, real-time tracking, and predictive maintenance using IoT telemetry.",
      components: ["AI/ML", "IoT/RFID", "Data Intelligence"],
      industry: "Logistics",
      deliveryType: "Built by Aicrays",
      status: "In Production"
    },
    {
      name: "IAM + Fingerprint Authentication",
      description: "Fingerprint-based authentication engine offering real-time verification with military-grade encryption. Designed for medical and critical infrastructure use cases.",
      components: ["AI", "Cybersecurity"],
      industry: "Healthcare",
      deliveryType: "Built with InfiSign",
      status: "Built"
    },
    {
      name: "Inventory Management System",
      description: "Smart inventory platform built for high-volume operations, using machine learning and IoT sensors to optimize stock levels, predict demand, and reduce wastage.",
      components: ["AI/ML", "IoT/RFID", "Data Intelligence"],
      industry: "Manufacturing",
      deliveryType: "Built by Aicrays",
      status: "In Production"
    },
    {
      name: "Property Companion",
      description: "A powerful tenant and property management tool for both private and public sectors. Offers real-time leasing data, rent automation, and unified digital records in one intuitive interface.",
      components: ["UI/UX", "Data Intelligence", "AI/ML"],
      industry: "Real Estate",
      deliveryType: "Built by Aicrays",
      status: "MVP"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-700 border-green-200";
      case "Built": return "bg-green-100 text-green-700 border-green-200";
      case "In Production": return "bg-blue-100 text-blue-700 border-blue-200";
      case "MVP": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Archived": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-purple-100 text-purple-700 border-purple-200";
    }
  };

  return (
    <section className="relative py-16 overflow-hidden" id="built-and-delivered">
      {/* Section-specific enhanced background splotches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large splotches with increased visibility */}
        <div className="absolute top-[10%] left-[15%] w-[550px] h-[550px] bg-gradient-to-br from-purple-300/85 to-violet-400/80 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '3s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-indigo-300/90 to-blue-300/85 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-[10%] left-[40%] w-[480px] h-[480px] bg-gradient-to-bl from-violet-400/80 to-purple-300/85 rounded-full blur-3xl animate-float opacity-95" style={{ animationDelay: '15s', animationDuration: '28s' }}></div>
        
        {/* Medium splotches for texture */}
        <div className="absolute top-[30%] right-[25%] w-[400px] h-[400px] bg-gradient-to-tr from-blue-200/85 to-indigo-400/80 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[45%] left-[5%] w-[420px] h-[420px] bg-gradient-to-bl from-purple-200/90 to-violet-300/85 rounded-full blur-2xl animate-float opacity-85" style={{ animationDelay: '12s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-[25%] right-[60%] w-[380px] h-[380px] bg-gradient-to-tr from-indigo-200/85 to-purple-400/80 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '18s', animationDuration: '24s' }}></div>
        
        {/* Small accent splotches */}
        <div className="absolute top-[20%] left-[70%] w-[300px] h-[300px] bg-gradient-to-br from-violet-300/70 to-blue-300/75 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '20s' }}></div>
        <div className="absolute top-[75%] left-[80%] w-[320px] h-[320px] bg-gradient-to-tl from-purple-300/75 to-indigo-300/70 rounded-full blur-xl animate-float opacity-80" style={{ animationDelay: '10s', animationDuration: '32s' }}></div>
      </div>

      {/* Section-specific orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Scattered orbs throughout the section with enhanced variety */}
        <div className="absolute top-[15%] left-[20%] w-4 h-4 bg-purple-500/70 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        <div className="absolute top-[25%] left-[60%] w-9 h-9 bg-violet-600/60 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '7s', animationDuration: '22s' }}></div>
        <div className="absolute top-[35%] left-[85%] w-5 h-5 bg-indigo-500/65 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '12s', animationDuration: '20s' }}></div>
        <div className="absolute top-[50%] left-[10%] w-8 h-8 bg-blue-600/55 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '16s', animationDuration: '25s' }}></div>
        <div className="absolute top-[65%] left-[45%] w-6 h-6 bg-purple-700/75 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '20s', animationDuration: '17s' }}></div>
        <div className="absolute top-[80%] left-[75%] w-10 h-10 bg-violet-500/60 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '25s', animationDuration: '19s' }}></div>
        
        {/* Additional variety orbs */}
        <div className="absolute top-[40%] left-[35%] w-3 h-3 bg-indigo-700/80 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '5s', animationDuration: '21s' }}></div>
        <div className="absolute top-[70%] left-[15%] w-7 h-7 bg-purple-800/70 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '14s', animationDuration: '24s' }}></div>
        <div className="absolute top-[85%] left-[30%] w-11 h-11 bg-blue-700/65 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '22s', animationDuration: '16s' }}></div>
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
