
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/Partners/PartnersHero";
import OurPartners from "@/components/Partners/OurPartners";
import PartnerWithUs from "@/components/Partners/PartnerWithUs";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 relative overflow-hidden">
      {/* Global background orbs for entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-400/40 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '0s', animationDuration: '25s' }}></div>
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-violet-500/35 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-400/45 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/40 rounded-full blur-2xl animate-float opacity-65" style={{ animationDelay: '5s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-20 right-10 w-88 h-88 bg-violet-400/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '12s', animationDuration: '35s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-purple-300/50 rounded-full blur-xl animate-float opacity-85" style={{ animationDelay: '3s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-68 h-68 bg-indigo-500/35 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '18s', animationDuration: '26s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <PartnersHero />
        <OurPartners />
        <PartnerWithUs />
        <Footer />
      </div>
    </div>
  );
};

export default Partners;
