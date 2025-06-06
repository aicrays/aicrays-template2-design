
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/Products/ProductsHero";
import BuiltAndDelivered from "@/components/Products/BuiltAndDelivered";
import CurrentlyInDevelopment from "@/components/Products/CurrentlyInDevelopment";
import ProductInquiry from "@/components/Products/ProductInquiry";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20">
      <Navbar />
      <ProductsHero />
      <BuiltAndDelivered />
      <CurrentlyInDevelopment />
      <ProductInquiry />
      <Footer />
    </div>
  );
};

export default Products;
