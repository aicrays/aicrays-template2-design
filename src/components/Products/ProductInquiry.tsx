
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ProductInquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    needs: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Section-specific enhanced background splotches for inquiry section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large dramatic splotches */}
        <div className="absolute top-[8%] left-[5%] w-[620px] h-[620px] bg-gradient-to-br from-purple-400/85 to-violet-500/80 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '0s', animationDuration: '30s' }}></div>
        <div className="absolute top-[40%] right-[5%] w-[580px] h-[580px] bg-gradient-to-tl from-indigo-400/90 to-blue-400/85 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '8s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-[5%] left-[30%] w-[560px] h-[560px] bg-gradient-to-tr from-violet-300/95 to-purple-400/90 rounded-full blur-3xl animate-float opacity-95" style={{ animationDelay: '16s', animationDuration: '32s' }}></div>
        
        {/* Medium accent splotches */}
        <div className="absolute top-[25%] left-[70%] w-[480px] h-[480px] bg-gradient-to-bl from-blue-300/85 to-indigo-300/90 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '4s', animationDuration: '25s' }}></div>
        <div className="absolute top-[65%] left-[10%] w-[460px] h-[460px] bg-gradient-to-tr from-purple-300/90 to-violet-200/85 rounded-full blur-2xl animate-float opacity-85" style={{ animationDelay: '12s', animationDuration: '27s' }}></div>
        <div className="absolute top-[50%] right-[70%] w-[440px] h-[440px] bg-gradient-to-bl from-indigo-200/85 to-blue-400/80 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '20s', animationDuration: '24s' }}></div>
        
        {/* Texture splotches for depth */}
        <div className="absolute top-[15%] left-[45%] w-[380px] h-[380px] bg-gradient-to-br from-violet-400/75 to-purple-300/80 rounded-full blur-xl animate-float opacity-70" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[80%] right-[25%] w-[400px] h-[400px] bg-gradient-to-tl from-blue-400/80 to-indigo-200/75 rounded-full blur-xl animate-float opacity-80" style={{ animationDelay: '14s', animationDuration: '26s' }}></div>
        <div className="absolute top-[35%] left-[20%] w-[360px] h-[360px] bg-gradient-to-bl from-purple-500/70 to-violet-300/75 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '22s', animationDuration: '23s' }}></div>
      </div>

      {/* Section-specific orbs for inquiry section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Contact/inquiry themed orbs */}
        <div className="absolute top-[12%] left-[30%] w-9 h-9 bg-purple-600/65 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute top-[22%] left-[80%] w-5 h-5 bg-violet-700/75 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '7s', animationDuration: '24s' }}></div>
        <div className="absolute top-[38%] left-[15%] w-10 h-10 bg-indigo-600/60 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '12s', animationDuration: '18s' }}></div>
        <div className="absolute top-[48%] left-[85%] w-6 h-6 bg-blue-700/70 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '17s', animationDuration: '22s' }}></div>
        <div className="absolute top-[58%] left-[45%] w-11 h-11 bg-purple-800/55 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '22s', animationDuration: '26s' }}></div>
        <div className="absolute top-[72%] left-[70%] w-4 h-4 bg-violet-600/80 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '27s', animationDuration: '19s' }}></div>
        <div className="absolute top-[85%] left-[25%] w-8 h-8 bg-indigo-500/65 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '32s', animationDuration: '21s' }}></div>
        
        {/* Additional variety orbs */}
        <div className="absolute top-[28%] left-[55%] w-3 h-3 bg-blue-800/85 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '9s', animationDuration: '23s' }}></div>
        <div className="absolute top-[65%] left-[35%] w-7 h-7 bg-purple-900/70 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '19s', animationDuration: '25s' }}></div>
        <div className="absolute top-[90%] left-[60%] w-12 h-12 bg-violet-800/75 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '29s', animationDuration: '16s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="section-title bg-gradient-to-r from-gray-800 via-purple-700 to-purple-900 bg-clip-text text-transparent">
              Have a Use Case in Mind?
            </h2>
            <p className="section-subtitle">
              Looking for a similar solution—or something custom? Send us your details, and we'll get in touch.
            </p>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Custom AI-powered solutions tailored to your industry</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Modular architecture for scalable deployment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Partnership opportunities for co-development</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="border-purple-200 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="border-purple-200 focus:border-purple-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="needs">Your Needs or Use Case</Label>
                <Textarea
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 min-h-[120px]"
                  placeholder="Tell us about your project requirements, industry challenges, or collaboration ideas..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Collaborate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInquiry;
