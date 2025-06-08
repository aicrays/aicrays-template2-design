
import React, { useRef, useState, useEffect } from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout, Factory, Heart, Truck, GraduationCap } from "lucide-react";

const ProductsHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      icon: BarChart3,
      title: "Quote Management System",
      status: "Live",
      description: "A dynamic quote management platform engineered for a global industrial coil manufacturer",
      gradient: "from-purple-500 to-purple-600",
      statusColor: "text-green-600 bg-green-50"
    },
    {
      icon: Factory,
      title: "Fleet Management System",
      status: "In Production",
      description: "An intelligent fleet orchestration platform combining AI routing, real-time tracking, and predictive maintenance",
      gradient: "from-purple-600 to-indigo-600",
      statusColor: "text-blue-600 bg-blue-50"
    },
    {
      icon: Shield,
      title: "IAM + IRIS Authentication",
      status: "Built",
      description: "Biometric identity solution leveraging advanced IRIS scanning technology for healthcare giants",
      gradient: "from-indigo-500 to-purple-500",
      statusColor: "text-green-600 bg-green-50"
    },
    {
      icon: Truck,
      title: "Inventory Management System",
      status: "In Production",
      description: "Smart inventory platform using machine learning and IoT sensors to optimize stock levels",
      gradient: "from-purple-500 to-pink-500",
      statusColor: "text-blue-600 bg-blue-50"
    },
    {
      icon: Shield,
      title: "AI-Powered Detection",
      status: "MVP",
      description: "Autonomous threat detection platform using GNNs, NLP, and time-series analytics",
      gradient: "from-indigo-600 to-purple-700",
      statusColor: "text-purple-600 bg-purple-50"
    },
    {
      icon: Heart,
      title: "Property Companion",
      status: "MVP",
      description: "A powerful tenant and property management tool for both private and public sectors",
      gradient: "from-purple-400 to-indigo-500",
      statusColor: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className="overflow-hidden relative min-h-screen flex items-center justify-center pt-24 pb-16" id="products-hero">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
            
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 text-left space-y-6 lg:space-y-8">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-4">
                  <h1 className="font-bold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl">
                    <div className="opacity-0 animate-fade-in mb-4" style={{ animationDelay: "0.2s", animationDuration: "0.8s" }}>
                      <span className="block text-gray-900">Purpose-Built Platforms</span>
                    </div>
                    <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationDuration: "0.8s" }}>
                      <span className="block">
                        for{" "}
                        <span className="text-purple-700 relative inline-block">
                          Industry
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/80 via-purple-600/90 to-blue-500/80 rounded-full animate-pulse-slow shadow-lg shadow-purple-500/30"></div>
                        </span>
                      </span>
                      <span className="block mt-2">
                        <span className="text-purple-700 relative inline-block">
                          Innovation
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600/80 via-pink-500/90 to-purple-600/80 rounded-full animate-pulse-slow shadow-lg shadow-purple-500/30" style={{ animationDelay: '1s' }}></div>
                        </span>
                      </span>
                    </div>
                  </h1>
                </div>
                
                <div className="pt-2">
                  <p style={{ animationDelay: "0.6s", animationDuration: "0.8s" }} className="text-lg md:text-xl leading-relaxed text-gray-700 opacity-0 animate-fade-in max-w-2xl font-normal">
                    From AI analytics to smart manufacturing and secure infrastructure, our modular products are designed to solve real-world problems with scale, speed, and precision.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in pt-6" style={{ animationDelay: "0.8s", animationDuration: "0.8s" }}>
                  <a href="#built-and-delivered" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[220px] hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800">
                    <span className="relative z-10">View Our Products</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                  
                  <a href="#product-inquiry" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-700 bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-full hover:border-purple-500 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg min-w-[220px] hover:shadow-blue-500/20">
                    <span className="relative z-10">Submit Product Inquiry</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Products Grid */}
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

                {/* Products Grid - 2x3 layout with homepage sizing */}
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
                    href="#built-and-delivered"
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
