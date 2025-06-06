
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/Partners/PartnersHero";
import OurPartners from "@/components/Partners/OurPartners";
import PartnerWithUs from "@/components/Partners/PartnerWithUs";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20">
      <Navbar />
      <PartnersHero />
      <OurPartners />
      <PartnerWithUs />
      <Footer />
    </div>
  );
};

export default Partners;
