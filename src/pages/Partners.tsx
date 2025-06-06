
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/Partners/PartnersHero";
import OurPartners from "@/components/Partners/OurPartners";
import PartnerWithUs from "@/components/Partners/PartnerWithUs";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 relative overflow-hidden">
      {/* Global background orbs for entire page - significantly more orbs with varied colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '25s' }}></div>
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-400/30 rounded-full blur-2xl animate-float opacity-65" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/25 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '5s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-20 right-10 w-88 h-88 bg-violet-400/20 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '12s', animationDuration: '35s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-purple-300/35 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '3s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-68 h-68 bg-indigo-500/25 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '18s', animationDuration: '26s' }}></div>

        {/* Additional large orbs */}
        <div className="absolute top-16 right-1/4 w-84 h-84 bg-blue-400/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '22s', animationDuration: '32s' }}></div>
        <div className="absolute bottom-16 left-1/3 w-92 h-92 bg-purple-500/25 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '7s', animationDuration: '28s' }}></div>
        <div className="absolute top-2/3 right-1/5 w-76 h-76 bg-violet-600/20 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '14s', animationDuration: '24s' }}></div>

        {/* Medium orbs */}
        <div className="absolute top-32 left-1/5 w-52 h-52 bg-indigo-300/40 rounded-full blur-xl animate-float opacity-80" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-48 h-48 bg-purple-400/35 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '11s', animationDuration: '21s' }}></div>
        <div className="absolute top-1/5 right-2/3 w-44 h-44 bg-blue-500/30 rounded-full blur-lg animate-float opacity-70" style={{ animationDelay: '9s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-1/5 left-2/3 w-56 h-56 bg-violet-300/40 rounded-full blur-xl animate-float opacity-85" style={{ animationDelay: '17s', animationDuration: '23s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-40 h-40 bg-purple-600/45 rounded-full blur-lg animate-float opacity-80" style={{ animationDelay: '6s', animationDuration: '19s' }}></div>
        <div className="absolute bottom-3/4 right-1/6 w-60 h-60 bg-indigo-400/35 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '13s', animationDuration: '27s' }}></div>

        {/* Small orbs */}
        <div className="absolute top-24 left-2/3 w-32 h-32 bg-blue-300/50 rounded-full blur-md animate-float opacity-90" style={{ animationDelay: '1s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-24 right-2/3 w-36 h-36 bg-purple-200/55 rounded-full blur-lg animate-float opacity-85" style={{ animationDelay: '19s', animationDuration: '17s' }}></div>
        <div className="absolute top-1/6 left-3/4 w-28 h-28 bg-violet-400/60 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '10s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/6 right-3/4 w-40 h-40 bg-indigo-200/45 rounded-full blur-md animate-float opacity-80" style={{ animationDelay: '21s', animationDuration: '15s' }}></div>
        <div className="absolute top-5/6 left-1/8 w-24 h-24 bg-purple-500/65 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '16s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-5/6 right-1/8 w-32 h-32 bg-blue-400/50 rounded-full blur-md animate-float opacity-85" style={{ animationDelay: '2s', animationDuration: '13s' }}></div>

        {/* Extra small accent orbs */}
        <div className="absolute top-40 left-1/7 w-20 h-20 bg-violet-600/70 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '8s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-40 right-1/7 w-24 h-24 bg-purple-300/60 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '20s', animationDuration: '9s' }}></div>
        <div className="absolute top-1/8 left-5/6 w-16 h-16 bg-indigo-500/75 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '5s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/8 right-5/6 w-28 h-28 bg-blue-600/55 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '23s', animationDuration: '12s' }}></div>
        <div className="absolute top-7/8 left-3/5 w-20 h-20 bg-purple-700/50 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '15s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-7/8 right-3/5 w-32 h-32 bg-violet-500/45 rounded-full blur-md animate-float opacity-75" style={{ animationDelay: '3s', animationDuration: '14s' }}></div>

        {/* Micro orbs for extra detail */}
        <div className="absolute top-12 left-4/5 w-12 h-12 bg-blue-800/80 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '12s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-12 right-4/5 w-16 h-16 bg-purple-800/70 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '24s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/9 left-1/9 w-14 h-14 bg-indigo-700/85 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '18s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/9 right-1/9 w-18 h-18 bg-violet-700/60 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '6s', animationDuration: '9s' }}></div>
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
