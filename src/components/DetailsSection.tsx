
import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };

  return (
    <section id="details" className="h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30 py-0 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-46 h-46 bg-gradient-to-br from-purple-400/35 to-blue-400/30 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '1s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[25%] left-[10%] w-50 h-50 bg-gradient-to-br from-blue-500/30 to-purple-500/35 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '7s', animationDuration: '26s' }}></div>
        <div className="absolute top-[60%] right-[40%] w-38 h-38 bg-gradient-to-br from-purple-500/40 to-blue-400/30 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[35%] left-[20%] w-30 h-30 bg-gradient-to-br from-blue-400/40 to-purple-300/35 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '9s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[50%] right-[25%] w-34 h-34 bg-gradient-to-br from-purple-400/35 to-blue-500/30 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '3s', animationDuration: '24s' }}></div>
        
        {/* Small orbs */}
        <div className="absolute top-[75%] left-[40%] w-22 h-22 bg-gradient-to-br from-blue-300/35 to-purple-400/40 rounded-full blur-xl animate-float opacity-45" style={{ animationDelay: '6s', animationDuration: '16s' }}></div>
        <div className="absolute top-[25%] right-[70%] w-26 h-26 bg-gradient-to-br from-purple-500/35 to-blue-400/40 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '11s', animationDuration: '19s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-[30%] left-[30%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[35%] w-2.5 h-2.5 bg-blue-500/55 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-[50%] left-[75%] w-4 h-4 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '12s' }}></div>
        <div className="absolute bottom-[40%] right-[60%] w-2 h-2 bg-blue-400/65 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl relative z-10">
        <div 
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 bg-clip-text text-transparent">
            Technical Specifications & Demo Access
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Explore the technical details and request hands-on experience with Atlas.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl backdrop-blur-xl bg-white/90 border border-white/50 hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-32 sm:h-40 p-4 sm:p-6 flex items-end" style={{
              backgroundImage: "url('/background-section3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-purple-900/30"></div>
              <h3 className="text-xl sm:text-2xl font-display text-white font-bold relative z-10">
                The details
              </h3>
            </div>
            
            <div className="bg-white/95 p-4 sm:p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h4 className="text-base sm:text-lg font-display mb-4 sm:mb-6 relative z-10">
                Precision engineering meets adaptive intelligence
              </h4>

              <div className="space-y-3 sm:space-y-4 relative z-10">
                {[
                  { label: "Height:", value: "5'8\"" },
                  { label: "Capacity:", value: "55lbs" },
                  { label: "Weight:", value: "140lbs" },
                  { label: "Uptime:", value: "6hr" },
                  { label: "Movement:", value: "1.5M/S" }
                ].map((spec, index) => (
                  <div key={spec.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-full"></div>
                      <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-2.5 rounded-lg bg-gradient-to-br from-gray-50/90 via-purple-50/30 to-blue-50/20 backdrop-blur-sm border border-gray-100/50 hover:border-purple-200/30 transition-colors">
                        <span className="font-semibold text-sm">{spec.label}</span> {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl backdrop-blur-xl bg-white/90 border border-white/50 hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-32 sm:h-40 p-4 sm:p-6 flex flex-col items-start" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-purple-900/30"></div>
              <div className="inline-block px-3 sm:px-4 py-1.5 border border-white/80 text-white rounded-full text-xs mb-3 backdrop-blur-sm bg-white/10 relative z-10">
                Request a demo
              </div>
              <h3 className="text-xl sm:text-2xl font-display text-white font-bold mt-auto relative z-10">
                See it for yourself
              </h3>
            </div>
            
            <div className="bg-white/95 p-4 sm:p-6 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-10">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Full name" 
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm backdrop-blur-sm bg-white/90 hover:bg-white transition-colors" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm backdrop-blur-sm bg-white/90 hover:bg-white transition-colors" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Company (optional)" 
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm backdrop-blur-sm bg-white/90 hover:bg-white transition-colors" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Request access
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
