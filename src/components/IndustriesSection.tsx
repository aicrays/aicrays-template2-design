
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Heart, Factory, ShoppingCart, GraduationCap, Banknote } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Healthcare",
      description: "Patient management systems, IoT monitoring, and HIPAA-compliant data analytics platforms.",
      features: ["Patient data security", "IoT device integration", "Predictive analytics"]
    },
    {
      icon: <Factory className="w-8 h-8 text-purple-600" />,
      title: "Manufacturing",
      description: "Supply chain optimization, predictive maintenance, and automated quality control systems.",
      features: ["Supply chain visibility", "Predictive maintenance", "Quality automation"]
    },
    {
      icon: <Banknote className="w-8 h-8 text-purple-600" />,
      title: "Financial Services",
      description: "Secure transaction processing, fraud detection, and regulatory compliance platforms.",
      features: ["Fraud detection", "Compliance automation", "Risk management"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
      title: "Retail & E-commerce",
      description: "Inventory management, customer analytics, and personalized shopping experiences.",
      features: ["Inventory optimization", "Customer insights", "Personalization"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Education",
      description: "Learning management systems, student analytics, and campus security platforms.",
      features: ["Learning analytics", "Campus security", "Student management"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Government",
      description: "Citizen services, data management, and secure communication platforms.",
      features: ["Citizen services", "Data security", "Compliance tools"]
    }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-white via-purple-50/40 to-violet-50/50 overflow-hidden">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[18%] right-[8%] w-56 h-56 bg-gradient-to-r from-purple-400/35 to-violet-400/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '2s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-[22%] left-[10%] w-48 h-48 bg-gradient-to-r from-indigo-500/30 to-purple-500/35 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute top-[65%] right-[30%] w-44 h-44 bg-gradient-to-r from-violet-400/40 to-pink-400/25 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '5s', animationDuration: '22s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[12%] left-[30%] w-36 h-36 bg-gradient-to-r from-purple-300/45 to-indigo-300/35 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '11s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[38%] right-[45%] w-32 h-32 bg-gradient-to-r from-violet-300/40 to-purple-300/45 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '6s', animationDuration: '24s' }}></div>
        <div className="absolute top-[45%] left-[8%] w-40 h-40 bg-gradient-to-r from-indigo-400/35 to-violet-400/40 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '14s', animationDuration: '16s' }}></div>
        
        {/* Small particle dots */}
        <div className="absolute top-[28%] left-[60%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[82%] right-[20%] w-2.5 h-2.5 bg-violet-500/55 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-[58%] left-[75%] w-4 h-4 bg-indigo-500/50 rounded-full animate-pulse" style={{ animationDelay: '12s' }}></div>
      </div>

      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/70 backdrop-blur-sm border border-purple-200/50 rounded-full shadow-sm">
            <span className="text-purple-600 font-semibold text-sm">Industries We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Transforming Every Sector
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Our AI-powered platforms are designed to meet the unique challenges and requirements of diverse industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-purple-200/40 hover:border-purple-300/60 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {industry.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-purple-100 mb-6 text-lg max-w-2xl mx-auto">
              Our modular approach allows us to adapt to any industry's specific needs. Let's discuss how we can build a solution for your sector.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Discuss Your Industry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
