
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Brain, Zap, Code, Database, Network } from "lucide-react";

const ModularTechSection = () => {
  const technologies = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI Intelligence",
      description: "Advanced machine learning algorithms that adapt to your business needs and learn from user interactions."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Cybersecurity",
      description: "Enterprise-grade security protocols protecting your data with multi-layered defense systems."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Data Intelligence",
      description: "Smart data processing and analytics that turn raw information into actionable business insights."
    },
    {
      icon: <Network className="w-8 h-8 text-purple-600" />,
      title: "IoT/RFID Integration",
      description: "Seamless connectivity between physical devices and digital systems for comprehensive automation."
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your industry requirements and workflows."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Rapid Deployment",
      description: "Fast implementation with minimal disruption to your existing operations and quick ROI."
    }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-white via-purple-50/40 to-violet-50/50 overflow-hidden" id="solutions">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[15%] right-[12%] w-40 h-40 bg-gradient-to-r from-purple-400/35 to-pink-400/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[20%] left-[8%] w-48 h-48 bg-gradient-to-r from-violet-500/30 to-purple-500/35 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[60%] right-[25%] w-32 h-32 bg-gradient-to-r from-indigo-400/40 to-blue-400/25 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[35%] left-[15%] w-24 h-24 bg-gradient-to-r from-purple-300/45 to-pink-300/35 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[40%] right-[40%] w-28 h-28 bg-gradient-to-r from-indigo-300/40 to-violet-300/45 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        
        {/* Small particle dots */}
        <div className="absolute top-[25%] left-[30%] w-3 h-3 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[35%] w-2.5 h-2.5 bg-pink-500/55 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[45%] left-[75%] w-4 h-4 bg-indigo-500/50 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/70 backdrop-blur-sm border border-purple-200/50 rounded-full shadow-sm">
            <span className="text-purple-600 font-semibold text-sm">What We Build</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Modular AI-Powered Platforms
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            We build custom digital platforms that seamlessly integrate AI intelligence, cybersecurity, data analytics, and IoT systems—designed specifically for your industry and workflows.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-purple-200/40 hover:border-purple-300/60 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Custom Platform?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our modular approach can transform your business operations with AI-powered solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularTechSection;
