
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModularTechSection from "@/components/ModularTechSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40">
      {/* Global Background Elements with More Apparent Floating Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large floating orbs - more visible with vertical movement */}
        <div className="absolute top-[15%] right-[10%] w-48 h-48 bg-purple-300/25 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[25%] left-[8%] w-56 h-56 bg-violet-400/20 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[55%] right-[25%] w-40 h-40 bg-purple-400/30 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        
        {/* Medium floating orbs with vertical movement */}
        <div className="absolute top-[35%] left-[15%] w-32 h-32 bg-indigo-300/25 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[45%] right-[12%] w-36 h-36 bg-violet-300/22 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[25%] right-[45%] w-28 h-28 bg-purple-200/28 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '10s', animationDuration: '14s' }}></div>
        
        {/* Small floating orbs with vertical movement */}
        <div className="absolute top-[70%] left-[25%] w-20 h-20 bg-violet-400/25 rounded-full blur-xl animate-float-vertical opacity-60" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute top-[45%] right-[35%] w-24 h-24 bg-purple-300/23 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
        <div className="absolute bottom-[15%] left-[35%] w-18 h-18 bg-indigo-400/20 rounded-full blur-xl animate-float-vertical opacity-50" style={{ animationDelay: '5s', animationDuration: '19s' }}></div>
        <div className="absolute top-[80%] right-[55%] w-22 h-22 bg-violet-200/26 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '9s', animationDuration: '15s' }}></div>
        
        {/* Extra small floating orbs for depth with vertical movement */}
        <div className="absolute top-[20%] left-[60%] w-14 h-14 bg-purple-400/20 rounded-full blur-lg animate-float-vertical opacity-45" style={{ animationDelay: '11s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[60%] right-[20%] w-16 h-16 bg-violet-300/18 rounded-full blur-lg animate-float-vertical opacity-50" style={{ animationDelay: '1s', animationDuration: '21s' }}></div>
        
        {/* Additional orbs with varying sizes and shades */}
        <div className="absolute top-[40%] left-[5%] w-64 h-64 bg-purple-200/15 rounded-full blur-3xl animate-float-vertical opacity-40" style={{ animationDelay: '12s', animationDuration: '28s' }}></div>
        <div className="absolute top-[10%] left-[40%] w-44 h-44 bg-indigo-300/20 rounded-full blur-3xl animate-float-vertical opacity-55" style={{ animationDelay: '15s', animationDuration: '25s' }}></div>
        <div className="absolute bottom-[10%] right-[5%] w-52 h-52 bg-violet-300/18 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '18s', animationDuration: '23s' }}></div>
        
        {/* Medium additional orbs */}
        <div className="absolute top-[60%] left-[50%] w-30 h-30 bg-purple-400/25 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '20s', animationDuration: '18s' }}></div>
        <div className="absolute top-[15%] right-[60%] w-26 h-26 bg-indigo-400/22 rounded-full blur-2xl animate-float-vertical opacity-50" style={{ animationDelay: '14s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[35%] left-[70%] w-34 h-34 bg-violet-400/20 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '16s', animationDuration: '22s' }}></div>
        
        {/* Small additional orbs */}
        <div className="absolute top-[85%] left-[15%] w-12 h-12 bg-purple-300/30 rounded-full blur-lg animate-float-vertical opacity-45" style={{ animationDelay: '22s', animationDuration: '14s' }}></div>
        <div className="absolute top-[30%] left-[85%] w-10 h-10 bg-indigo-300/28 rounded-full blur-lg animate-float-vertical opacity-55" style={{ animationDelay: '24s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[50%] right-[8%] w-15 h-15 bg-violet-300/25 rounded-full blur-lg animate-float-vertical opacity-60" style={{ animationDelay: '26s', animationDuration: '18s' }}></div>
        <div className="absolute top-[75%] right-[75%] w-8 h-8 bg-purple-400/35 rounded-full blur-md animate-float-vertical opacity-40" style={{ animationDelay: '28s', animationDuration: '12s' }}></div>
        
        {/* Tiny orbs for extra detail */}
        <div className="absolute top-[50%] left-[90%] w-6 h-6 bg-indigo-400/30 rounded-full blur-md animate-float-vertical opacity-50" style={{ animationDelay: '30s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[20%] left-[60%] w-7 h-7 bg-violet-400/28 rounded-full blur-md animate-float-vertical opacity-45" style={{ animationDelay: '32s', animationDuration: '11s' }}></div>
        <div className="absolute top-[65%] right-[90%] w-5 h-5 bg-purple-300/32 rounded-full blur-sm animate-float-vertical opacity-55" style={{ animationDelay: '34s', animationDuration: '9s' }}></div>
        
        {/* Extra floating orbs throughout the page */}
        <div className="absolute top-[5%] left-[25%] w-38 h-38 bg-purple-300/22 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '36s', animationDuration: '26s' }}></div>
        <div className="absolute top-[90%] right-[30%] w-42 h-42 bg-violet-400/18 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '38s', animationDuration: '30s' }}></div>
        <div className="absolute top-[65%] left-[3%] w-28 h-28 bg-indigo-300/24 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '40s', animationDuration: '20s' }}></div>
        <div className="absolute top-[35%] right-[3%] w-32 h-32 bg-purple-200/26 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '42s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[5%] left-[50%] w-36 h-36 bg-violet-300/20 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '44s', animationDuration: '28s' }}></div>
        
        {/* More medium orbs */}
        <div className="absolute top-[18%] left-[75%] w-22 h-22 bg-purple-400/28 rounded-full blur-xl animate-float-vertical opacity-60" style={{ animationDelay: '46s', animationDuration: '16s' }}></div>
        <div className="absolute top-[78%] left-[80%] w-24 h-24 bg-indigo-400/25 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '48s', animationDuration: '18s' }}></div>
        <div className="absolute top-[42%] right-[85%] w-20 h-20 bg-violet-400/30 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '50s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[80%] right-[65%] w-26 h-26 bg-purple-300/24 rounded-full blur-xl animate-float-vertical opacity-50" style={{ animationDelay: '52s', animationDuration: '22s' }}></div>
        
        {/* Scattered small orbs */}
        <div className="absolute top-[28%] left-[45%] w-16 h-16 bg-indigo-300/26 rounded-full blur-lg animate-float-vertical opacity-45" style={{ animationDelay: '54s', animationDuration: '12s' }}></div>
        <div className="absolute top-[72%] right-[40%] w-18 h-18 bg-violet-300/28 rounded-full blur-lg animate-float-vertical opacity-60" style={{ animationDelay: '56s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[28%] left-[85%] w-14 h-14 bg-purple-400/24 rounded-full blur-lg animate-float-vertical opacity-55" style={{ animationDelay: '58s', animationDuration: '11s' }}></div>
        
        {/* Enhanced particle dots with vertical movement */}
        <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-purple-500/60 rounded-full animate-float-vertical" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-[75%] right-[20%] w-2.5 h-2.5 bg-violet-500/55 rounded-full animate-float-vertical" style={{ animationDelay: '5s', animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-4 h-4 bg-purple-400/50 rounded-full animate-float-vertical" style={{ animationDelay: '8s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[35%] left-[55%] w-2 h-2 bg-indigo-500/45 rounded-full animate-float-vertical" style={{ animationDelay: '12s', animationDuration: '6s' }}></div>
        <div className="absolute top-[65%] right-[40%] w-3.5 h-3.5 bg-violet-400/50 rounded-full animate-float-vertical" style={{ animationDelay: '15s', animationDuration: '14s' }}></div>
        
        {/* Additional particle dots */}
        <div className="absolute top-[20%] left-[30%] w-2.5 h-2.5 bg-purple-400/45 rounded-full animate-float-vertical" style={{ animationDelay: '18s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-[25%] right-[35%] w-3 h-3 bg-indigo-400/50 rounded-full animate-float-vertical" style={{ animationDelay: '21s', animationDuration: '9s' }}></div>
        <div className="absolute top-[55%] left-[10%] w-1.5 h-1.5 bg-violet-500/40 rounded-full animate-float-vertical" style={{ animationDelay: '24s', animationDuration: '5s' }}></div>
        <div className="absolute top-[12%] right-[15%] w-2.5 h-2.5 bg-purple-500/50 rounded-full animate-float-vertical" style={{ animationDelay: '60s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[40%] left-[20%] w-3 h-3 bg-indigo-500/45 rounded-full animate-float-vertical" style={{ animationDelay: '62s', animationDuration: '10s' }}></div>
        <div className="absolute top-[88%] right-[18%] w-2 h-2 bg-violet-400/55 rounded-full animate-float-vertical" style={{ animationDelay: '64s', animationDuration: '6s' }}></div>
        <div className="absolute top-[38%] left-[92%] w-4 h-4 bg-purple-400/40 rounded-full animate-float-vertical" style={{ animationDelay: '66s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[65%] right-[88%] w-2.5 h-2.5 bg-indigo-400/48 rounded-full animate-float-vertical" style={{ animationDelay: '68s', animationDuration: '9s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ModularTechSection />
          <CaseStudiesSection />
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
