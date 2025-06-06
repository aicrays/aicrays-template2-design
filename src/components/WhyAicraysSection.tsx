
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Zap, Shield, Award } from "lucide-react";

const WhyAicraysSection = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Tailored Solutions",
      description: "Every platform is custom-built for your specific industry, workflows, and business objectives."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Rapid Implementation",
      description: "Our modular approach enables faster deployment without sacrificing quality or functionality."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Enterprise Security",
      description: "Built-in cybersecurity protocols ensure your data and operations remain protected at all times."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Expert Partnership",
      description: "Our team works as an extension of yours, providing ongoing support and continuous optimization."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Proven Results",
      description: "Track record of delivering measurable improvements in efficiency, security, and ROI."
    }
  ];

  const stats = [
    { number: "95%", label: "Client Satisfaction" },
    { number: "40%", label: "Average Efficiency Gain" },
    { number: "99.9%", label: "Platform Uptime" },
    { number: "24/7", label: "Support Coverage" }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-white via-purple-50/40 to-violet-50/50 overflow-hidden" id="about">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[20%] right-[10%] w-48 h-48 bg-gradient-to-r from-purple-400/35 to-violet-400/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '1s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[25%] left-[12%] w-44 h-44 bg-gradient-to-r from-indigo-500/30 to-purple-500/35 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '7s', animationDuration: '18s' }}></div>
        <div className="absolute top-[55%] left-[70%] w-40 h-40 bg-gradient-to-r from-violet-400/40 to-pink-400/25 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '4s', animationDuration: '20s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[15%] left-[25%] w-32 h-32 bg-gradient-to-r from-purple-300/45 to-indigo-300/35 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '9s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[35%] right-[35%] w-36 h-36 bg-gradient-to-r from-violet-300/40 to-purple-300/45 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        
        {/* Small particle dots */}
        <div className="absolute top-[35%] left-[15%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[75%] right-[25%] w-2.5 h-2.5 bg-violet-500/55 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-[45%] right-[60%] w-4 h-4 bg-indigo-500/50 rounded-full animate-pulse" style={{ animationDelay: '10s' }}></div>
      </div>

      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/70 backdrop-blur-sm border border-purple-200/50 rounded-full shadow-sm">
            <span className="text-purple-600 font-semibold text-sm">Why Choose Aicrays</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Your Success is Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            We don't just build platforms—we build partnerships that drive lasting transformation and measurable results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white/60 backdrop-blur-sm border border-purple-200/40 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-purple-200/40 hover:border-purple-300/60 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-purple-100 mb-6 text-lg">
                From healthcare to manufacturing, our platforms power critical operations across diverse industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-200 mr-2" />
                  <span className="text-purple-100">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-200 mr-2" />
                  <span className="text-purple-100">HIPAA Ready</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-200 mr-2" />
                  <span className="text-purple-100">ISO 27001</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-5xl lg:text-6xl font-bold mb-2">50+</div>
              <div className="text-purple-200 text-lg">Successful Deployments</div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 mt-6">3+</div>
              <div className="text-purple-200 text-lg">Years of Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
