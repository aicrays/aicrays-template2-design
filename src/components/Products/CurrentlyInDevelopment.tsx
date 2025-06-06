
import React from "react";
import { Badge } from "@/components/ui/badge";

const CurrentlyInDevelopment = () => {
  const products = [
    {
      name: "AI Logistics Optimizer",
      description: "Intelligent supply chain management platform with predictive analytics and route optimization.",
      components: ["AI/ML", "IoT", "Data Analytics"],
      industry: "Logistics",
      stage: "Beta",
      expectedRelease: "Available Q2 2025"
    },
    {
      name: "CyberGuard Enterprise",
      description: "Next-generation cybersecurity suite with zero-trust architecture and automated threat response.",
      components: ["Cybersecurity", "AI/ML", "UX Systems"],
      industry: "Enterprise",
      stage: "Alpha",
      expectedRelease: "Available Q3 2025"
    },
    {
      name: "EduTech Platform",
      description: "Personalized learning management system with adaptive AI tutoring and progress tracking.",
      components: ["AI/ML", "UX Systems", "Data Intelligence"],
      industry: "Education",
      stage: "Testing",
      expectedRelease: "Available Q4 2025"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Alpha": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Beta": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Testing": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-purple-100 text-purple-700 border-purple-200";
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50/30 via-white to-blue-50/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-48 h-48 bg-blue-400/12 rounded-full blur-3xl animate-float-vertical opacity-40" style={{ animationDelay: '3s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-vertical opacity-35" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
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
          {products.map((product, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift group border-dashed border-2 border-purple-200/50"
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
                  <Badge className={`text-xs ${getStageColor(product.stage)}`}>
                    {product.stage}
                  </Badge>
                </div>
                
                {product.expectedRelease && (
                  <div>
                    <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                      {product.expectedRelease}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyInDevelopment;
