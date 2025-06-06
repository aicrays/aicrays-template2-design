
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/Partners/PartnersHero";
import OurPartners from "@/components/Partners/OurPartners";
import PartnerWithUs from "@/components/Partners/PartnerWithUs";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40">
      <Navbar />
      <PartnersHero />
      <OurPartners />
      <PartnerWithUs />
      <Footer />
    </div>
  );
};

export default Partners;
