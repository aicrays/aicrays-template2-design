
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Shield, TrendingUp } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Healthcare Platform",
      industry: "Healthcare Technology",
      description: "Integrated AI-powered patient management system with IoT monitoring and advanced cybersecurity protocols.",
      results: ["40% efficiency increase", "99.9% uptime", "HIPAA compliant"],
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Security Operations Center",
      industry: "Cybersecurity",
      description: "Real-time threat detection and response platform with AI-driven analytics and automated incident management.",
      results: ["60% faster response", "Advanced threat detection", "24/7 monitoring"],
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Supply Chain Intelligence",
      industry: "Manufacturing",
      description: "End-to-end supply chain visibility with IoT tracking, predictive analytics, and automated decision-making.",
      results: ["25% cost reduction", "Real-time tracking", "Predictive maintenance"],
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
    }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-purple-50/30 via-white to-violet-50/40 overflow-hidden">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[10%] left-[10%] w-44 h-44 bg-gradient-to-r from-violet-400/35 to-purple-400/30 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[15%] right-[15%] w-52 h-52 bg-gradient-to-r from-purple-500/30 to-pink-400/35 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute top-[50%] right-[8%] w-36 h-36 bg-gradient-to-r from-indigo-400/40 to-violet-400/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[30%] right-[45%] w-28 h-28 bg-gradient-to-r from-purple-300/45 to-indigo-300/40 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '10s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[40%] left-[30%] w-32 h-32 bg-gradient-to-r from-violet-400/35 to-purple-300/45 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        
        {/* Small particle dots */}
        <div className="absolute top-[20%] left-[60%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[80%] right-[30%] w-2.5 h-2.5 bg-violet-500/55 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[60%] left-[15%] w-4 h-4 bg-indigo-500/50 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
      </div>

      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/70 backdrop-blur-sm border border-purple-200/50 rounded-full shadow-sm">
            <span className="text-purple-600 font-semibold text-sm">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Real Results from Real Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            See how our custom AI-powered platforms have transformed operations across different industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm border border-purple-200/40 hover:border-purple-300/60 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                  {study.icon}
                </div>
              </div>

              <CardContent className="relative z-10 p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100/80 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {study.description}
                </p>
                
                {/* Results */}
                <div className="space-y-2 mb-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                <button className="group/btn flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can build a custom platform that delivers measurable results for your business.
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

export default CaseStudiesSection;
