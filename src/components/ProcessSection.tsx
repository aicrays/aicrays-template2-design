
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, current systems, and specific challenges through detailed consultation sessions.",
      timeline: "Week 1-2",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Design & Architecture",
      description: "Our team creates detailed system architecture and user experience designs tailored to your workflows and requirements.",
      timeline: "Week 2-3",
      color: "from-purple-600 to-violet-600"
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Development & Integration",
      description: "We build your platform using modular components, integrating AI, cybersecurity, and IoT systems as needed.",
      timeline: "Week 4-8",
      color: "from-violet-600 to-indigo-600"
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Deployment & Support",
      description: "We deploy your platform with comprehensive testing, training, and ongoing support to ensure optimal performance.",
      timeline: "Week 8+",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const benefits = [
    "Collaborative approach with your team",
    "Regular progress updates and demos",
    "Agile development methodology",
    "Post-launch optimization and scaling"
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-purple-50/30 via-white to-violet-50/40 overflow-hidden" id="process">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[12%] left-[8%] w-52 h-52 bg-gradient-to-r from-violet-400/35 to-purple-400/30 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '3s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-gradient-to-r from-purple-500/30 to-pink-400/35 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '9s', animationDuration: '20s' }}></div>
        <div className="absolute top-[60%] left-[65%] w-40 h-40 bg-gradient-to-r from-indigo-400/40 to-violet-400/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '6s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[25%] right-[35%] w-32 h-32 bg-gradient-to-r from-purple-300/45 to-indigo-300/40 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[45%] left-[25%] w-36 h-36 bg-gradient-to-r from-violet-400/35 to-purple-300/45 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '4s', animationDuration: '22s' }}></div>
        
        {/* Small particle dots */}
        <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[85%] right-[40%] w-2.5 h-2.5 bg-violet-500/55 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-[50%] right-[20%] w-4 h-4 bg-indigo-500/50 rounded-full animate-pulse" style={{ animationDelay: '11s' }}></div>
      </div>

      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/70 backdrop-blur-sm border border-purple-200/50 rounded-full shadow-sm">
            <span className="text-purple-600 font-semibold text-sm">How We Build</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            From Concept to Launch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Our proven development process ensures your platform is built efficiently, securely, and tailored to your exact needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-purple-200/40 hover:border-purple-300/60 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="relative z-10 p-6">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${step.color} rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                    {step.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100/80 rounded-full">
                    {step.timeline}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Our Process Works
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Project Timeline Overview
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-purple-200/30">
                <span className="font-medium text-gray-700">Discovery Phase</span>
                <span className="text-purple-600 font-semibold">1-2 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-purple-200/30">
                <span className="font-medium text-gray-700">Design & Planning</span>
                <span className="text-purple-600 font-semibold">1-2 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-purple-200/30">
                <span className="font-medium text-gray-700">Development</span>
                <span className="text-purple-600 font-semibold">4-6 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-gray-700">Launch & Support</span>
                <span className="text-purple-600 font-semibold">Ongoing</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Average project completion:</strong> 6-10 weeks from start to deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
