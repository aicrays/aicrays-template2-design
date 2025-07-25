
import React, { useEffect, useRef, useState } from "react";
import { Server, Palette, Radio, TrendingUp } from "lucide-react";

const WhyAicraysSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Server,
      title: "Custom-built for your systems",
      description: "No templates or one-size-fits-all solutions. Every platform is architected specifically for your workflows and requirements.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "Modular, rapid development",
      description: "Proven components accelerate delivery while maintaining the flexibility to adapt and scale as your needs evolve.",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      icon: Radio,
      title: "Designed for long-term impact",
      description: "Our platforms evolve with your business to avoid costly rebuilds and ensure future growth.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Personalized to enterprise workflows",
      description: "Tailored to your exact roles, processes, and goals — we enhance without disrupting what works.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-4 lg:py-6 relative overflow-hidden h-screen flex flex-col justify-center" id="why-aicrays">
      {/* Enhanced Dynamic Background with More Orbs and Color Splashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers with more vibrant purple tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/80 via-purple-150/70 to-purple-200/90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-300/80 via-purple-200/60 to-transparent"></div>
        
        {/* Enhanced overlays with more color variation */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-purple-50/40 to-violet-200/50"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-100/50 via-transparent to-purple-150/45"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/30 via-transparent to-purple-100/40"></div>
        
        {/* Large color splashes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-indigo-300/45 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-radial from-violet-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-88 h-88 bg-gradient-radial from-pink-200/35 to-transparent rounded-full blur-3xl"></div>
        
        {/* Extra Large moving orbs */}
        <div className="absolute top-[5%] right-[1%] w-100 h-100 bg-purple-300/32 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '0s', animationDuration: '35s' }}></div>
        <div className="absolute bottom-[3%] left-[2%] w-92 h-92 bg-violet-400/28 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '10s', animationDuration: '40s' }}></div>
        <div className="absolute top-[45%] right-[85%] w-84 h-84 bg-indigo-300/30 rounded-full blur-3xl animate-float-vertical opacity-72" style={{ animationDelay: '20s', animationDuration: '33s' }}></div>
        
        {/* Large moving orbs - more of them */}
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-purple-300/35 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '1s', animationDuration: '25s' }}></div>
        <div className="absolute top-[25%] left-[3%] w-80 h-80 bg-violet-300/30 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '7s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-[20%] right-[15%] w-64 h-64 bg-indigo-400/40 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '4s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[10%] left-[10%] w-68 h-68 bg-purple-400/35 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '12s', animationDuration: '20s' }}></div>
        <div className="absolute top-[35%] right-[25%] w-76 h-76 bg-pink-300/30 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '18s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-[35%] left-[20%] w-84 h-84 bg-indigo-300/25 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '15s', animationDuration: '30s' }}></div>
        <div className="absolute top-[60%] left-[70%] w-56 h-56 bg-violet-400/38 rounded-full blur-3xl animate-float-vertical opacity-77" style={{ animationDelay: '22s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[55%] right-[8%] w-60 h-60 bg-purple-350/33 rounded-full blur-3xl animate-float-vertical opacity-73" style={{ animationDelay: '25s', animationDuration: '29s' }}></div>
        
        {/* Medium orbs for more layering */}
        <div className="absolute top-[45%] right-[30%] w-48 h-48 bg-indigo-200/45 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[40%] left-[35%] w-44 h-44 bg-purple-300/40 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '8s', animationDuration: '21s' }}></div>
        <div className="absolute top-[60%] left-[40%] w-40 h-40 bg-violet-400/43 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '6s', animationDuration: '19s' }}></div>
        <div className="absolute top-[30%] left-[70%] w-52 h-52 bg-purple-200/30 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '11s', animationDuration: '23s' }}></div>
        <div className="absolute bottom-[55%] right-[40%] w-36 h-36 bg-pink-300/38 rounded-full blur-2xl animate-float-vertical opacity-58" style={{ animationDelay: '16s', animationDuration: '17s' }}></div>
        <div className="absolute top-[75%] right-[60%] w-42 h-42 bg-indigo-300/35 rounded-full blur-2xl animate-float-vertical opacity-63" style={{ animationDelay: '21s', animationDuration: '24s' }}></div>
        <div className="absolute top-[15%] left-[50%] w-46 h-46 bg-violet-350/37 rounded-full blur-2xl animate-float-vertical opacity-67" style={{ animationDelay: '26s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[70%] left-[60%] w-38 h-38 bg-purple-300/41 rounded-full blur-2xl animate-float-vertical opacity-61" style={{ animationDelay: '29s', animationDuration: '25s' }}></div>
        <div className="absolute top-[80%] right-[20%] w-34 h-34 bg-indigo-400/39 rounded-full blur-2xl animate-float-vertical opacity-59" style={{ animationDelay: '32s', animationDuration: '22s' }}></div>
        
        {/* Small accent orbs - many more */}
        <div className="absolute top-[55%] right-[70%] w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-float-vertical opacity-50" style={{ animationDelay: '14s', animationDuration: '12s' }}></div>
        <div className="absolute top-[85%] left-[55%] w-28 h-28 bg-blue-200/33 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '19s', animationDuration: '14s' }}></div>
        <div className="absolute top-[15%] right-[85%] w-24 h-24 bg-violet-300/40 rounded-full blur-xl animate-float-vertical opacity-60" style={{ animationDelay: '23s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[70%] right-[50%] w-20 h-20 bg-indigo-200/35 rounded-full blur-md animate-float-vertical opacity-45" style={{ animationDelay: '27s', animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] left-[15%] w-26 h-26 bg-pink-200/32 rounded-full blur-xl animate-float-vertical opacity-48" style={{ animationDelay: '5s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[25%] right-[75%] w-30 h-30 bg-purple-300/28 rounded-full blur-xl animate-float-vertical opacity-52" style={{ animationDelay: '9s', animationDuration: '15s' }}></div>
        <div className="absolute top-[65%] left-[25%] w-34 h-34 bg-violet-200/36 rounded-full blur-xl animate-float-vertical opacity-57" style={{ animationDelay: '13s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-[45%] right-[20%] w-22 h-22 bg-indigo-300/31 rounded-full blur-md animate-float-vertical opacity-44" style={{ animationDelay: '17s', animationDuration: '9s' }}></div>
        <div className="absolute top-[50%] left-[80%] w-25 h-25 bg-purple-400/34 rounded-full blur-xl animate-float-vertical opacity-53" style={{ animationDelay: '24s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[80%] right-[65%] w-29 h-29 bg-violet-300/32 rounded-full blur-xl animate-float-vertical opacity-49" style={{ animationDelay: '28s', animationDuration: '14s' }}></div>
        
        {/* Micro orbs for fine detail */}
        <div className="absolute top-[20%] left-[30%] w-18 h-18 bg-purple-300/25 rounded-full blur-md animate-float-vertical opacity-40" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[60%] right-[35%] w-16 h-16 bg-indigo-400/28 rounded-full blur-md animate-float-vertical opacity-43" style={{ animationDelay: '12s', animationDuration: '10s' }}></div>
        <div className="absolute top-[70%] left-[65%] w-14 h-14 bg-violet-350/30 rounded-full blur-sm animate-float-vertical opacity-38" style={{ animationDelay: '18s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-[30%] right-[55%] w-20 h-20 bg-purple-250/26 rounded-full blur-md animate-float-vertical opacity-45" style={{ animationDelay: '23s', animationDuration: '12s' }}></div>
        <div className="absolute top-[35%] left-[85%] w-12 h-12 bg-indigo-300/32 rounded-full blur-sm animate-float-vertical opacity-41" style={{ animationDelay: '27s', animationDuration: '6s' }}></div>
        
        {/* Additional scattered color splashes */}
        <div className="absolute top-[5%] left-[45%] w-68 h-68 bg-purple-350/25 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '10s', animationDuration: '27s' }}></div>
        <div className="absolute bottom-[5%] right-[35%] w-56 h-56 bg-indigo-350/30 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '2s', animationDuration: '24s' }}></div>
        <div className="absolute top-[50%] left-[5%] w-60 h-60 bg-pink-250/28 rounded-full blur-3xl animate-float-vertical opacity-62" style={{ animationDelay: '20s', animationDuration: '29s' }}></div>
        <div className="absolute bottom-[60%] left-[80%] w-52 h-52 bg-violet-350/33 rounded-full blur-3xl animate-float-vertical opacity-68" style={{ animationDelay: '24s', animationDuration: '31s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section Header - Updated title size to match other sections */}
        <div className="text-center mb-4 lg:mb-6">
          <div className="inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-2 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-2"></span>
            <span>Why Choose Us</span>
          </div>
          
          {/* Updated title size to match other sections like "Built and Running" */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight mb-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">Custom. Real. Yours.</span>
            <br />
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Every platform we build combines these core technologies, tailored to your specific enterprise needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/90 border border-white/50 rounded-2xl p-4 lg:p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-2 overflow-hidden h-full flex flex-col min-h-[180px]">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-3 lg:mb-4">
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg xl:text-xl font-bold mb-2 lg:mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight font-display">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-xs lg:text-sm xl:text-base group-hover:text-gray-700 transition-colors font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA - Smaller button */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
          <p className="text-gray-600 mb-2 text-sm lg:text-base font-light">Still stuck with generic software?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-2 py-1.5 lg:px-3 lg:py-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800 group">
            <span className="relative z-10">Schedule Discovery Session</span>
            <svg className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
