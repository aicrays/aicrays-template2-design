
import React from "react";
import { Building2, Shield, Truck, Heart, Cog, Zap } from "lucide-react";

const BuiltAndDelivered = () => {
  const products = [
    {
      icon: Building2,
      title: "Quote Management System",
      category: "Manufacturing",
      status: "Live",
      statusColor: "text-green-600 bg-green-50",
      description: "A dynamic quote management platform engineered for a global industrial coil manufacturer. Seamlessly integrates pricing intelligence, automation, and data insights to streamline enterprise-level quotation workflows.",
      tags: ["AI/ML", "UI/UX", "Data Intelligence", "Built by Aicrays"]
    },
    {
      icon: Shield,
      title: "IAM + IRIS Authentication",
      category: "Healthcare",
      status: "Built",
      statusColor: "text-green-600 bg-green-50",
      description: "Biometric identity solution leveraging advanced IRIS scanning technology. Built for healthcare giants requiring frictionless, secure, and HIPAA-compliant access control at scale.",
      tags: ["AI", "Cybersecurity", "Built with InfiSign"]
    },
    {
      icon: Truck,
      title: "Fleet Management System",
      category: "Logistics",
      status: "In Production",
      statusColor: "text-blue-600 bg-blue-50",
      description: "An intelligent fleet orchestration platform for a Middle Eastern conglomerate, combining AI routing, real-time tracking, and predictive maintenance using IoT telemetry.",
      tags: ["AI/ML", "IoT/RFID", "Data Intelligence", "Built by Aicrays"]
    },
    {
      icon: Heart,
      title: "IAM + Fingerprint Authentication",
      category: "Healthcare",
      status: "Built",
      statusColor: "text-green-600 bg-green-50",
      description: "Fingerprint-based authentication engine offering real-time verification with military-grade encryption. Designed for medical and critical infrastructure use cases.",
      tags: ["AI", "Cybersecurity", "Built with InfiSign"]
    },
    {
      icon: Cog,
      title: "Inventory Management System",
      category: "Manufacturing",
      status: "In Production",
      statusColor: "text-blue-600 bg-blue-50",
      description: "Smart inventory platform built for high-volume operations, using machine learning and IoT sensors to optimize stock levels, predict demand, and reduce wastage.",
      tags: ["AI/ML", "IoT/RFID", "Data Intelligence", "Built by Aicrays"]
    },
    {
      icon: Zap,
      title: "IAM + Facial Recognition",
      category: "Enterprise",
      status: "Built",
      statusColor: "text-green-600 bg-green-50",
      description: "Next-gen facial recognition system designed for enterprise identity access management, blending computer vision and deep learning for precision and speed.",
      tags: ["AI", "Cybersecurity", "Built with InfiSign"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-violet-100 relative overflow-hidden" id="built-and-delivered">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-float-vertical" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[15%] right-[10%] w-40 h-40 bg-violet-400/25 rounded-full blur-2xl animate-float-vertical" style={{ animationDelay: '5s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] left-[80%] w-24 h-24 bg-indigo-300/30 rounded-full blur-xl animate-float-vertical" style={{ animationDelay: '10s', animationDuration: '18s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built and <span className="text-purple-700">Running</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the platforms we've already deployed—custom-built, scalable, and evolving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-purple-100/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${product.statusColor}`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors mb-3">
                  {product.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-4 text-sm">
                  {product.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-medium group-hover:bg-purple-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Let's build your custom platform next.
          </p>
          <a
            href="#product-inquiry"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
          >
            <span className="relative z-10 mr-2">Talk to Us</span>
            <div className="relative z-10 transform group-hover:translate-x-1 transition-transform">
              →
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BuiltAndDelivered;
