
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, Home, Shield, ShieldCheck, Database, Monitor, Zap } from "lucide-react";

const CurrentlyInDevelopment = () => {
  const products = [
    {
      name: "Fleet Management System",
      description: "An intelligent fleet orchestration platform for a Middle Eastern conglomerate, combining AI routing, real-time tracking, and predictive maintenance using IoT telemetry.",
      components: ["AI/ML", "IoT/RFID", "Data Intelligence"],
      industry: "Logistics",
      stage: "In Production",
      deliveryType: "Built by Aicrays",
      icon: Truck,
      iconGradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "Inventory Management System",
      description: "Smart inventory platform built for high-volume operations, using machine learning and IoT sensors to optimize stock levels, predict demand, and reduce wastage.",
      components: ["AI/ML", "IoT/RFID", "Data Intelligence"],
      industry: "Manufacturing",
      stage: "In Production",
      deliveryType: "Built by Aicrays",
      icon: Package,
      iconGradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Property Companion",
      description: "A powerful tenant and property management tool for both private and public sectors. Offers real-time leasing data, rent automation, and unified digital records in one intuitive interface.",
      components: ["UI/UX", "Data Intelligence", "AI/ML"],
      industry: "Real Estate",
      stage: "MVP",
      deliveryType: "Built by Aicrays",
      icon: Home,
      iconGradient: "from-green-500 to-emerald-600"
    },
    {
      name: "AI-Powered Detection",
      description: "Autonomous threat detection platform using GNNs, NLP, and time-series analytics to catch evolving anomalies in real time — before they become threats.",
      components: ["AI", "Cybersecurity"],
      industry: "Cybersecurity",
      stage: "MVP",
      deliveryType: "Built by Aicrays",
      icon: Shield,
      iconGradient: "from-red-500 to-orange-600"
    },
    {
      name: "AI-Powered Prevention",
      description: "Proactive defense system powered by AI that blocks advanced persistent threats and phishing using adversarial learning, behavior modeling, and dynamic IPS rules.",
      components: ["AI", "Cybersecurity"],
      industry: "Cybersecurity",
      stage: "MVP",
      deliveryType: "Built by Aicrays",
      icon: ShieldCheck,
      iconGradient: "from-orange-500 to-red-600"
    },
    {
      name: "AI-Powered Threat Intelligence",
      description: "Aggregates real-time global threat data, refines it using AI-enhanced analysis, and powers automatic preventive actions — with privacy-preserving federated learning.",
      components: ["AI", "Cybersecurity"],
      industry: "Cybersecurity",
      stage: "MVP",
      deliveryType: "Built by Aicrays",
      icon: Database,
      iconGradient: "from-violet-500 to-purple-600"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "MVP": return "bg-purple-100 text-purple-700 border-purple-200";
      case "In Production": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Alpha": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Beta": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Testing": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-purple-100 text-purple-700 border-purple-200";
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50/40 via-white to-blue-50/30">
      {/* Section-specific enhanced background splotches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large prominent splotches */}
        <div className="absolute top-[5%] right-[20%] w-[580px] h-[580px] bg-gradient-to-br from-violet-300/85 to-purple-400/80 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '1s', animationDuration: '27s' }}></div>
        <div className="absolute top-[50%] left-[10%] w-[520px] h-[520px] bg-gradient-to-tl from-blue-300/90 to-indigo-400/85 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '9s', animationDuration: '32s' }}></div>
        <div className="absolute bottom-[5%] right-[5%] w-[560px] h-[560px] bg-gradient-to-bl from-purple-200/95 to-violet-300/90 rounded-full blur-3xl animate-float opacity-95" style={{ animationDelay: '17s', animationDuration: '29s' }}></div>
        
        {/* Medium coverage splotches */}
        <div className="absolute top-[25%] left-[60%] w-[440px] h-[440px] bg-gradient-to-tr from-indigo-200/85 to-blue-400/80 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute top-[70%] left-[70%] w-[460px] h-[460px] bg-gradient-to-bl from-violet-200/90 to-purple-300/85 rounded-full blur-2xl animate-float opacity-85" style={{ animationDelay: '13s', animationDuration: '28s' }}></div>
        <div className="absolute top-[40%] left-[5%] w-[420px] h-[420px] bg-gradient-to-br from-blue-200/85 to-violet-400/80 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '21s', animationDuration: '26s' }}></div>
        
        {/* Texture and accent splotches */}
        <div className="absolute top-[15%] left-[35%] w-[340px] h-[340px] bg-gradient-to-tl from-purple-400/75 to-indigo-300/80 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '3s', animationDuration: '21s' }}></div>
        <div className="absolute top-[85%] left-[25%] w-[360px] h-[360px] bg-gradient-to-br from-violet-300/80 to-blue-300/75 rounded-full blur-xl animate-float opacity-80" style={{ animationDelay: '11s', animationDuration: '30s' }}></div>
        <div className="absolute top-[55%] right-[30%] w-[380px] h-[380px] bg-gradient-to-bl from-indigo-300/75 to-purple-200/85 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '19s', animationDuration: '23s' }}></div>
      </div>

      {/* Section-specific orbs with enhanced visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Development-themed orbs distributed throughout */}
        <div className="absolute top-[10%] left-[25%] w-8 h-8 bg-blue-500/65 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '1s', animationDuration: '19s' }}></div>
        <div className="absolute top-[20%] left-[75%] w-5 h-5 bg-violet-600/75 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '6s', animationDuration: '23s' }}></div>
        <div className="absolute top-[35%] left-[15%] w-9 h-9 bg-purple-700/60 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '11s', animationDuration: '21s' }}></div>
        <div className="absolute top-[45%] left-[85%] w-4 h-4 bg-indigo-600/70 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '16s', animationDuration: '18s' }}></div>
        <div className="absolute top-[60%] left-[40%] w-10 h-10 bg-blue-700/55 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '21s', animationDuration: '25s' }}></div>
        <div className="absolute top-[75%] left-[65%] w-6 h-6 bg-violet-800/80 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '26s', animationDuration: '16s' }}></div>
        <div className="absolute top-[90%] left-[50%] w-11 h-11 bg-purple-600/65 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '31s', animationDuration: '20s' }}></div>
        
        {/* Additional variety orbs */}
        <div className="absolute top-[30%] left-[50%] w-3 h-3 bg-indigo-800/85 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '8s', animationDuration: '22s' }}></div>
        <div className="absolute top-[55%] left-[20%] w-7 h-7 bg-blue-800/70 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '18s', animationDuration: '24s' }}></div>
        <div className="absolute top-[80%] left-[80%] w-12 h-12 bg-violet-700/75 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '28s', animationDuration: '17s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title bg-gradient-to-r from-gray-800 via-purple-700 to-purple-900 bg-clip-text text-transparent mb-4">
            Currently in Development
          </h2>
          <p className="section-subtitle mx-auto">
            Here's a preview of the platforms we're engineering now—available for early access or collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover-lift group border-dashed border-2 border-purple-200/50"
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
                    <Badge className={`text-xs ${getStageColor(product.stage)}`}>
                      {product.stage}
                    </Badge>
                  </div>
                  
                  <div>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-700">
                      {product.deliveryType}
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

export default CurrentlyInDevelopment;
