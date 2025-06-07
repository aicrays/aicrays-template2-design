
import React, { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Cpu, Eye, Cloud, Layers } from "lucide-react";

const ProductsHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      icon: Zap,
      name: "AI Analytics Platform",
      description: "Real-time business intelligence with predictive modeling",
      status: "In Production",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      icon: Shield,
      name: "Security Framework",
      description: "Enterprise-grade threat detection and response system",
      status: "In Development",
      statusColor: "bg-purple-100 text-purple-800"
    },
    {
      icon: Cpu,
      name: "IoT Management Hub",
      description: "Connected device monitoring and automation platform",
      status: "In Production",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      icon: Eye,
      name: "Data Visualization Suite",
      description: "Interactive dashboards and reporting tools",
      status: "Beta Testing",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: Cloud,
      name: "Cloud Infrastructure",
      description: "Scalable deployment and orchestration platform",
      status: "In Production",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      icon: Layers,
      name: "UX Design System",
      description: "Modular component library and design tokens",
      status: "In Development",
      statusColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section className="overflow-hidden relative h-screen flex items-center justify-center" id="products-hero">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
            
            {/* Left Side - Text Content */}
            <div className={`flex-1 lg:max-w-[45%] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
                    Built to Scale.<br />
                    Designed for Impact.
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  Explore our growing suite of AI-powered, cybersecurity-enhanced platforms built by engineers from top Fortune 500 companies. Every product is designed to scale securely and integrate modularly with your operations.
                </p>

                <p className="text-sm text-gray-600 font-medium">
                  Trusted by teams from AWS, IBM, JP Morgan, Raytheon, and more.
                </p>
              </div>
            </div>

            {/* Right Side - Product Grid */}
            <div className={`flex-1 lg:max-w-[55%] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '200ms' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`glass-morphism-card hover-lift relative p-6 transition-all duration-300 hover:shadow-xl stagger-${index + 1}`}
                    >
                      <Badge 
                        className={`absolute top-4 right-4 text-xs font-semibold ${product.statusColor}`}
                        variant="outline"
                      >
                        {product.status}
                      </Badge>
                      
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          <div className="flex-1 pt-1">
                            <h3 className="font-bold text-gray-900 mb-2 pr-20">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {/* View All Solutions Link */}
              <div className="flex justify-end">
                <a 
                  href="#built-and-delivered" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200"
                >
                  View All Solutions →
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
