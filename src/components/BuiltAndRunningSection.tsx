
import React from "react";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Shield, Fingerprint, Eye, Truck, Zap } from "lucide-react";

const BuiltAndRunningSection = () => {
  const products = [
    {
      name: "Quote Management System",
      description: "A dynamic quote management platform engineered for a global industrial coil manufacturer. Seamlessly integrates pricing intelligence, automation, and data insights to streamline enterprise-level quotation workflows.",
      components: ["AI/ML", "UI/UX", "Data Intelligence"],
      industry: "Manufacturing",
      deliveryType: "Built by Aicrays",
      status: "Live",
      icon: BarChart3,
      iconGradient: "from-purple-500 to-purple-600"
    },
    {
      name: "IAM + IRIS Authentication",
      description: "Biometric identity solution leveraging advanced IRIS scanning technology. Built for healthcare giants requiring frictionless, secure, and HIPAA-compliant access control at scale.",
      components: ["AI", "Cybersecurity"],
      industry: "Healthcare",
      deliveryType: "Built with InfiSign",
      status: "Built",
      icon: Eye,
      iconGradient: "from-purple-600 to-violet-600"
    },
    {
      name: "IAM + Fingerprint Authentication",
      description: "Fingerprint-based authentication engine offering real-time verification with military-grade encryption. Designed for medical and critical infrastructure use cases.",
      components: ["AI", "Cybersecurity"],
      industry: "Healthcare",
      deliveryType: "Built with InfiSign",
      status: "Built",
      icon: Fingerprint,
      iconGradient: "from-violet-500 to-purple-600"
    },
    {
      name: "IAM + Facial Recognition",
      description: "Next-gen facial recognition system designed for enterprise identity access management, blending computer vision and deep learning for precision and speed.",
      components: ["AI", "Cybersecurity"],
      industry: "Enterprise",
      deliveryType: "Built with InfiSign",
      status: "Built",
      icon: Shield,
      iconGradient: "from-purple-600 to-violet-700"
    },
    {
      name: "Fleet Management System",
      description: "An intelligent fleet orchestration platform for a Middle Eastern conglomerate, combining AI routing, real-time tracking, and predictive maintenance using IoT telemetry.",
      components: ["AI/ML", "IoT/RFID", "Data Intelligence"],
      industry: "Logistics",
      deliveryType: "Built by Aicrays",
      status: "In Production",
      icon: Truck,
      iconGradient: "from-violet-600 to-purple-700"
    },
    {
      name: "AI-Powered Detection",
      description: "Autonomous threat detection platform using GNNs, NLP, and time-series analytics to catch evolving anomalies in real time — before they become threats.",
      components: ["AI", "Cybersecurity"],
      industry: "Security",
      deliveryType: "Built by Aicrays",
      status: "MVP",
      icon: Zap,
      iconGradient: "from-purple-500 to-violet-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-700 border-green-200";
      case "Built": return "bg-green-100 text-green-700 border-green-200";
      case "In Production": return "bg-green-100 text-green-700 border-green-200";
      case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "MVP": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Archived": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-purple-100 text-purple-700 border-purple-200";
    }
  };

  return (
    <section className="relative py-16 overflow-hidden" id="built-and-running">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background effects similar to other sections */}
        <div className="absolute top-[10%] left-[15%] w-[550px] h-[550px] bg-gradient-to-br from-purple-300/85 to-violet-400/80 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '3s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-indigo-300/90 to-blue-300/85 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-[10%] left-[40%] w-[480px] h-[480px] bg-gradient-to-bl from-violet-400/80 to-purple-300/85 rounded-full blur-3xl animate-float opacity-95" style={{ animationDelay: '15s', animationDuration: '28s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title bg-gradient-to-r from-gray-800 via-purple-700 to-purple-900 bg-clip-text text-transparent mb-4">
            Built and Running
          </h2>
          <p className="section-subtitle mx-auto">
            Explore the platforms we've already deployed—custom-built, scalable, and evolving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover-lift group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${product.iconGradient} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuiltAndRunningSection;
