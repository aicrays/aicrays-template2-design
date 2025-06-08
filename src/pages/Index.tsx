import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModularTechSection from "@/components/ModularTechSection";
import WhyAicraysSection from "@/components/WhyAicraysSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-violet-50/30">
      {/* Enhanced Global Background Elements with More Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Enhanced Background with Darker Tones - matching hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-purple-100/50 to-purple-200/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-300/40 via-purple-200/30 to-transparent"></div>
        
        {/* Darker Edge Gradients for More Depth - matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-transparent to-violet-400/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-300/20 via-transparent to-purple-400/25"></div>
        
        {/* Soft Violet Fog Behind Content Area - matching hero */}
        <div className="absolute top-[20%] left-[10%] right-[10%] bottom-[30%] bg-gradient-radial from-violet-400/15 via-purple-300/10 to-transparent blur-3xl"></div>
        
        {/* Extra Large Global Orbs */}
        <div className="absolute top-[3%] right-[2%] w-120 h-120 bg-purple-400/30 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '2s', animationDuration: '45s' }}></div>
        <div className="absolute bottom-[5%] left-[1%] w-96 h-96 bg-violet-500/32 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '12s', animationDuration: '38s' }}></div>
        <div className="absolute top-[50%] left-[85%] w-88 h-88 bg-indigo-400/35 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '25s', animationDuration: '42s' }}></div>
        
        {/* Large Corner Orbs - Enhanced - matching hero style */}
        <div className="absolute top-[8%] left-[3%] w-64 h-64 bg-purple-500/40 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute top-[12%] right-[5%] w-72 h-72 bg-violet-500/35 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '6s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[15%] left-[6%] w-56 h-56 bg-indigo-600/45 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[8%] right-[8%] w-52 h-52 bg-purple-700/40 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
        
        {/* Additional Large Orbs for More Coverage - matching hero */}
        <div className="absolute top-[35%] left-[2%] w-48 h-48 bg-violet-600/35 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
        <div className="absolute top-[50%] right-[3%] w-44 h-44 bg-purple-600/38 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '9s', animationDuration: '19s' }}></div>
        <div className="absolute bottom-[40%] left-[85%] w-40 h-40 bg-indigo-500/42 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '21s', animationDuration: '17s' }}></div>
        <div className="absolute top-[70%] right-[20%] w-60 h-60 bg-purple-400/36 rounded-full blur-3xl animate-float-vertical opacity-78" style={{ animationDelay: '28s', animationDuration: '31s' }}></div>
        <div className="absolute bottom-[30%] left-[20%] w-68 h-68 bg-violet-500/33 rounded-full blur-3xl animate-float-vertical opacity-82" style={{ animationDelay: '35s', animationDuration: '27s' }}></div>
        
        {/* Medium Orbs - More Distributed - matching hero */}
        <div className="absolute top-[18%] left-[15%] w-40 h-40 bg-indigo-500/50 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[25%] right-[18%] w-36 h-36 bg-purple-500/45 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
        <div className="absolute top-[65%] right-[25%] w-32 h-32 bg-violet-600/48 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '5s', animationDuration: '15s' }}></div>
        <div className="absolute top-[5%] right-[40%] w-28 h-28 bg-indigo-600/43 rounded-full blur-2xl animate-float-vertical opacity-90" style={{ animationDelay: '8s', animationDuration: '21s' }}></div>
        <div className="absolute top-[45%] left-[20%] w-34 h-34 bg-purple-600/40 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '11s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[35%] right-[35%] w-30 h-30 bg-violet-500/45 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '13s', animationDuration: '18s' }}></div>
        <div className="absolute top-[75%] left-[45%] w-26 h-26 bg-indigo-500/48 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '17s', animationDuration: '20s' }}></div>
        <div className="absolute top-[25%] left-[60%] w-38 h-38 bg-purple-500/42 rounded-full blur-2xl animate-float-vertical opacity-78" style={{ animationDelay: '20s', animationDuration: '25s' }}></div>
        <div className="absolute bottom-[55%] left-[40%] w-42 h-42 bg-violet-600/44 rounded-full blur-2xl animate-float-vertical opacity-82" style={{ animationDelay: '23s', animationDuration: '19s' }}></div>
        <div className="absolute top-[85%] right-[45%] w-35 h-35 bg-indigo-500/46 rounded-full blur-2xl animate-float-vertical opacity-77" style={{ animationDelay: '27s', animationDuration: '23s' }}></div>
        <div className="absolute bottom-[65%] right-[60%] w-39 h-39 bg-purple-400/41 rounded-full blur-2xl animate-float-vertical opacity-73" style={{ animationDelay: '30s', animationDuration: '26s' }}></div>
        <div className="absolute top-[55%] left-[70%] w-33 h-33 bg-violet-500/47 rounded-full blur-2xl animate-float-vertical opacity-79" style={{ animationDelay: '33s', animationDuration: '22s' }}></div>
        
        {/* Small Corner Orbs - Enhanced Coverage - matching hero */}
        <div className="absolute top-[5%] left-[8%] w-24 h-24 bg-purple-500/48 rounded-full blur-xl animate-float-vertical opacity-70" style={{ animationDelay: '1s', animationDuration: '11s' }}></div>
        <div className="absolute top-[75%] right-[12%] w-26 h-26 bg-blue-400/52 rounded-full blur-xl animate-float-vertical opacity-85" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[12%] left-[18%] w-22 h-22 bg-violet-600/45 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '10s', animationDuration: '9s' }}></div>
        <div className="absolute top-[80%] left-[20%] w-18 h-18 bg-indigo-500/50 rounded-full blur-lg animate-float-vertical opacity-75" style={{ animationDelay: '14s', animationDuration: '8s' }}></div>
        <div className="absolute top-[25%] right-[8%] w-20 h-20 bg-purple-600/45 rounded-full blur-xl animate-float-vertical opacity-80" style={{ animationDelay: '19s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[50%] left-[12%] w-16 h-16 bg-violet-500/50 rounded-full blur-lg animate-float-vertical opacity-70" style={{ animationDelay: '22s', animationDuration: '10s' }}></div>
        <div className="absolute top-[30%] left-[75%] w-25 h-25 bg-purple-400/47 rounded-full blur-xl animate-float-vertical opacity-72" style={{ animationDelay: '26s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[70%] right-[50%] w-23 h-23 bg-indigo-400/49 rounded-full blur-xl animate-float-vertical opacity-68" style={{ animationDelay: '29s', animationDuration: '11s' }}></div>
        <div className="absolute top-[90%] left-[65%] w-19 h-19 bg-violet-600/51 rounded-full blur-lg animate-float-vertical opacity-74" style={{ animationDelay: '31s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[80%] right-[70%] w-21 h-21 bg-purple-500/43 rounded-full blur-xl animate-float-vertical opacity-66" style={{ animationDelay: '33s', animationDuration: '12s' }}></div>
        <div className="absolute top-[40%] right-[75%] w-27 h-27 bg-indigo-600/46 rounded-full blur-xl animate-float-vertical opacity-71" style={{ animationDelay: '36s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[20%] left-[80%] w-24 h-24 bg-violet-400/44 rounded-full blur-xl animate-float-vertical opacity-69" style={{ animationDelay: '38s', animationDuration: '13s' }}></div>
        
        {/* Enhanced particle dots with much better visibility - matching hero */}
        <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-purple-600/90 rounded-full animate-float-vertical" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-[75%] right-[20%] w-2.5 h-2.5 bg-violet-600/85 rounded-full animate-float-vertical" style={{ animationDelay: '5s', animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-4 h-4 bg-purple-500/80 rounded-full animate-float-vertical" style={{ animationDelay: '8s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[35%] left-[55%] w-2 h-2 bg-indigo-600/75 rounded-full animate-float-vertical" style={{ animationDelay: '12s', animationDuration: '6s' }}></div>
        <div className="absolute top-[65%] right-[40%] w-3.5 h-3.5 bg-violet-500/80 rounded-full animate-float-vertical" style={{ animationDelay: '15s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[60%] left-[30%] w-5 h-5 bg-purple-600/88 rounded-full animate-float-vertical" style={{ animationDelay: '18s', animationDuration: '11s' }}></div>
        <div className="absolute top-[20%] right-[65%] w-2.5 h-2.5 bg-indigo-500/82 rounded-full animate-float-vertical" style={{ animationDelay: '21s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-[45%] right-[15%] w-4.5 h-4.5 bg-violet-600/86 rounded-full animate-float-vertical" style={{ animationDelay: '24s', animationDuration: '13s' }}></div>
        <div className="absolute top-[85%] left-[50%] w-3.5 h-3.5 bg-purple-500/84 rounded-full animate-float-vertical" style={{ animationDelay: '27s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-[85%] right-[80%] w-2 h-2 bg-indigo-400/78 rounded-full animate-float-vertical" style={{ animationDelay: '30s', animationDuration: '15s' }}></div>
        
        {/* Enhanced Curved Flow Lines - matching hero */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <path 
            d="M0,400 Q300,200 600,400 T1200,400" 
            stroke="url(#gradient1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse-slow"
          />
          <path 
            d="M0,600 Q400,300 800,500 T1200,400" 
            stroke="url(#gradient2)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse-slow"
            style={{ animationDelay: '3s' }}
          />
          <path 
            d="M0,200 Q500,600 1000,300 T1200,500" 
            stroke="url(#gradient3)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse-slow"
            style={{ animationDelay: '6s' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ModularTechSection />
          <WhyAicraysSection />
          <ProcessSection />
          <IndustriesSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
