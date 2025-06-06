
import React from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const HeroVisual = () => {
  const products = [
    {
      icon: Brain,
      title: "AI Analytics Platform",
      status: "In Production",
      description: "Real-time business intelligence with predictive modeling",
      gradient: "from-purple-500 to-purple-600",
      statusColor: "text-green-600 bg-green-50"
    },
    {
      icon: Shield,
      title: "Security Framework",
      status: "In Development",
      description: "Enterprise-grade threat detection and response system",
      gradient: "from-purple-600 to-indigo-600",
      statusColor: "text-blue-600 bg-blue-50"
    },
    {
      icon: Wifi,
      title: "IoT Management Hub",
      status: "In Production",
      description: "Connected device monitoring and automation platform",
      gradient: "from-indigo-500 to-purple-500",
      statusColor: "text-green-600 bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Data Visualization Suite",
      status: "Beta Testing",
      description: "Interactive dashboards and reporting tools",
      gradient: "from-purple-500 to-pink-500",
      statusColor: "text-purple-600 bg-purple-50"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      status: "In Production",
      description: "Scalable deployment and orchestration platform",
      gradient: "from-indigo-600 to-purple-700",
      statusColor: "text-green-600 bg-green-50"
    },
    {
      icon: Layout,
      title: "UX Design System",
      status: "In Development",
      description: "Modular component library and design tokens",
      gradient: "from-purple-400 to-indigo-500",
      statusColor: "text-blue-600 bg-blue-50"
    }
  ];

  return (
    <div className="w-full lg:w-1/2 relative">
      <div 
        className="relative z-10 opacity-0 animate-fade-in" 
        style={{ animationDelay: "1.2s" }}
      >
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            Current Products
          </h3>
          <p className="text-sm text-gray-600">
            What we're building and shipping right now
          </p>
        </div>

        {/* Products Grid - 2x3 layout */}
        <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-2xl">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group bg-white/90 backdrop-blur-sm p-4 lg:p-5 rounded-xl lg:rounded-2xl border border-purple-100/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden opacity-0 animate-fade-in`}
              style={{ animationDelay: `${1.4 + index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl lg:rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${product.gradient} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300`}>
                    <product.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>
                
                {/* Title */}
                <h4 className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors leading-tight mb-2">
                  {product.title}
                </h4>
                
                {/* Description */}
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {product.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl lg:rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-6 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          <a
            href="#solutions"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors group text-sm"
          >
            <span className="font-medium mr-2">View All Solutions</span>
            <div className="w-4 h-4 rounded-full border-2 border-purple-400 flex items-center justify-center group-hover:border-purple-600 transition-colors">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-purple-600 transition-colors"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
