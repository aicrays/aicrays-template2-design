import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Rocket, Layers, Cog } from "lucide-react";

const ProductInquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    serviceType: "",
    productNeeds: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product inquiry form submitted:", formData);
  };

  const benefits = [
    {
      icon: Cog,
      title: "Rapid Prototyping",
      description: "Iterative development cycles with quick turnaround times"
    },
    {
      icon: Rocket,
      title: "Technical Assessment",
      description: "Feasibility analysis and architecture planning for your product"
    },
    {
      icon: Users,
      title: "Embedded Teams",
      description: "Integration with your product roadmap and development process"
    },
    {
      icon: Layers,
      title: "End-to-End Delivery",
      description: "From MVP concept to market-ready product launch"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 py-16 md:py-24" id="contact">
      {/* Background elements matching Partners page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        <div className="absolute top-[12%] left-[15%] w-[480px] h-[480px] bg-gradient-to-br from-purple-300/65 to-violet-400/60 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '4s', animationDuration: '27s' }}></div>
        <div className="absolute top-[25%] right-[10%] w-[440px] h-[440px] bg-gradient-to-bl from-indigo-300/70 to-purple-300/65 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '10s', animationDuration: '32s' }}></div>
        <div className="absolute top-[45%] left-[5%] w-[420px] h-[420px] bg-gradient-to-tr from-violet-200/75 to-blue-300/70 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '16s', animationDuration: '29s' }}></div>
        <div className="absolute top-[65%] right-[25%] w-[460px] h-[460px] bg-gradient-to-tl from-purple-400/65 to-indigo-200/70 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '22s', animationDuration: '34s' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-[380px] h-[380px] bg-gradient-to-br from-blue-200/70 to-violet-300/65 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '7s', animationDuration: '25s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - How We Work with Product Clients */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
              How We Work with Product Clients
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Product Inquiry Form */}
          <div className="glass-card p-8 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Tell Us What You're Building
              </h3>
              <p className="text-gray-600">
                Share your product vision and we'll explore how to bring it to life together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-800">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="border-purple-200 focus:border-purple-500 bg-white/90"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessEmail" className="text-gray-800">Business Email</Label>
                  <Input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    className="border-purple-200 focus:border-purple-500 bg-white/90"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-gray-800">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-gray-800">What are you looking for?</Label>
                <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="border-purple-200 focus:border-purple-500 bg-white/90">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customizing">Customizing a product</SelectItem>
                    <SelectItem value="building">Building something new</SelectItem>
                    <SelectItem value="api">API/Integration</SelectItem>
                    <SelectItem value="codevelopment">Co-development</SelectItem>
                    <SelectItem value="whitelabeling">White-labeling</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productNeeds" className="text-gray-800">Your Product Needs or Vision</Label>
                <Textarea
                  id="productNeeds"
                  name="productNeeds"
                  value={formData.productNeeds}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90 min-h-[120px]"
                  placeholder="Describe your product concept, technical challenges, timeline, or specific requirements..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Build It Together
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInquiry;
