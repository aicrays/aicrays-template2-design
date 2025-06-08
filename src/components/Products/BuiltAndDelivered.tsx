import React from "react";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Shield, Fingerprint, Eye, Heart, Truck, Zap, Settings } from "lucide-react";

const BuiltAndDelivered = () => {
  const products = [
    {
      name: "Enterprise Resource Planning",
      description: "Unified dashboard for multi-location manufacturing operations with real-time analytics and predictive maintenance.",
      components: ["AI/ML", "UI/UX", "Data Intelligence"],
      industry: "Manufacturing",
      deliveryType: "Built by Aicrays",
      status: "Live",
      icon: BarChart3,
      iconGradient: "from-purple-500 to-purple-600"
    },
    {
      name: "Smart Retail Analytics",
      description: "AI-powered inventory management and customer behavior analysis platform for retail chains.",
      components: ["AI", "Data Intelligence"],
      industry: "Retail",
      deliveryType: "Built by Aicrays",
      status: "Live",
      icon: Eye,
      iconGradient: "from-purple-600 to-violet-600"
    },
    {
      name: "Fleet Management System",
      description: "IoT-enabled logistics platform with route optimization and real-time vehicle tracking capabilities.",
      components: ["IoT", "AI"],
      industry: "Logistics",
      deliveryType: "Built by Aicrays",
      status: "MVP",
      icon: Truck,
      iconGradient: "from-violet-500 to-purple-600"
    },
    {
      name: "Patient Care Coordination",
      description: "HIPAA-compliant platform connecting care teams with automated workflow management and reporting.",
      components: ["AI", "Cybersecurity"],
      industry: "Healthcare",
      deliveryType: "Built by Aicrays",
      status: "Live",
      icon: Heart,
      iconGradient: "from-purple-600 to-violet-700"
    },
    {
      name: "Production Line Intelligence",
      description: "Real-time monitoring and quality control system with machine learning-based anomaly detection.",
      components: ["AI/ML", "IoT"],
      industry: "Manufacturing",
      deliveryType: "Built by Aicrays",
      status: "In Progress",
      icon: Settings,
      iconGradient: "from-violet-600 to-purple-700"
    },
    {
      name: "Energy Management Portal",
      description: "Smart grid integration platform with consumption analytics and automated cost optimization.",
      components: ["AI", "Data Intelligence"],
      industry: "Energy",
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
      case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "MVP": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Archived": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-purple-100 text-purple-700 border-purple-200";
    }
  };

  return (
    <section className="relative py-16 overflow-hidden" id="built-and-delivered">
      
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

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
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

export default BuiltAndDelivered;
