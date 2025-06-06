
import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Thank you for subscribing! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-purple-50/40 via-blue-50/30 to-purple-50/50" id="contact" ref={sectionRef}>
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-[20%] right-[15%] w-48 h-48 bg-gradient-to-br from-purple-400/35 to-blue-400/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[25%] left-[10%] w-52 h-52 bg-gradient-to-br from-blue-500/30 to-purple-500/35 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '8s', animationDuration: '26s' }}></div>
        <div className="absolute top-[60%] right-[40%] w-40 h-40 bg-gradient-to-br from-purple-500/40 to-blue-400/30 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[40%] left-[20%] w-32 h-32 bg-gradient-to-br from-blue-400/40 to-purple-300/35 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '10s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[50%] right-[25%] w-36 h-36 bg-gradient-to-br from-purple-400/35 to-blue-500/30 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '3s', animationDuration: '24s' }}></div>
        
        {/* Small orbs */}
        <div className="absolute top-[75%] left-[40%] w-24 h-24 bg-gradient-to-br from-blue-300/35 to-purple-400/40 rounded-full blur-xl animate-float opacity-45" style={{ animationDelay: '7s', animationDuration: '16s' }}></div>
        <div className="absolute top-[30%] right-[70%] w-28 h-28 bg-gradient-to-br from-purple-500/35 to-blue-400/40 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '12s', animationDuration: '19s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-[35%] left-[30%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[70%] right-[35%] w-2.5 h-2.5 bg-blue-500/55 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
        <div className="absolute top-[55%] left-[75%] w-4 h-4 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '11s' }}></div>
        <div className="absolute bottom-[40%] right-[60%] w-2 h-2 bg-blue-400/65 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl relative z-10">
        <div 
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 hover:scale-105 transition-transform cursor-pointer">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></span>
            <span>Get Started</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight tracking-tight">
            Ready to Transform Your Operations?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
            Schedule a discovery session to explore how we can build your custom AI-powered platform.
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm bg-white/90"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Schedule Discovery
              </button>
            </form>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl"></div>
                <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Discovery Call</h3>
              <p className="text-sm text-gray-600">30-minute consultation</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl"></div>
                <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Custom Proposal</h3>
              <p className="text-sm text-gray-600">Tailored solution design</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl"></div>
                <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Rapid Launch</h3>
              <p className="text-sm text-gray-600">Production in weeks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
