import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Rocket, Layers, Link } from "lucide-react";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    websiteUrl: "",
    partnershipType: "",
    proposal: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, partnershipType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership form submitted:", formData);
  };

  const benefits = [
    {
      icon: Users,
      title: "Co-Development",
      description: "Joint product development with shared expertise and resources"
    },
    {
      icon: Rocket,
      title: "Go-to-Market Access",
      description: "Leverage our network and distribution channels for faster market entry"
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Flexible, scalable solutions that integrate seamlessly with your tech stack"
    },
    {
      icon: Link,
      title: "API-First Integrations",
      description: "Deep technical integration capabilities for enhanced product offerings"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 py-16 md:py-24" id="partner-with-us">
      {/* Section-specific splotches for form area - dramatically enhanced visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Form section large splotches - significantly more prominent */}
        <div className="absolute top-[12%] left-[15%] w-[480px] h-[480px] bg-gradient-to-br from-purple-300/65 to-violet-400/60 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '4s', animationDuration: '27s' }}></div>
        <div className="absolute top-[25%] right-[10%] w-[440px] h-[440px] bg-gradient-to-bl from-indigo-300/70 to-purple-300/65 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '10s', animationDuration: '32s' }}></div>
        <div className="absolute top-[45%] left-[5%] w-[420px] h-[420px] bg-gradient-to-tr from-violet-200/75 to-blue-300/70 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '16s', animationDuration: '29s' }}></div>
        <div className="absolute top-[65%] right-[25%] w-[460px] h-[460px] bg-gradient-to-tl from-purple-400/65 to-indigo-200/70 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '22s', animationDuration: '34s' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-[380px] h-[380px] bg-gradient-to-br from-blue-200/70 to-violet-300/65 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '7s', animationDuration: '25s' }}></div>
        
        {/* Medium accent splotches - dramatically increased size and opacity */}
        <div className="absolute top-[35%] left-[45%] w-[340px] h-[340px] bg-gradient-to-tl from-purple-200/65 to-indigo-300/70 rounded-full blur-xl animate-float opacity-80" style={{ animationDelay: '13s', animationDuration: '36s' }}></div>
        <div className="absolute top-[75%] left-[20%] w-[320px] h-[320px] bg-gradient-to-bl from-violet-300/70 to-blue-200/65 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '19s', animationDuration: '31s' }}></div>
        <div className="absolute top-[85%] right-[40%] w-[360px] h-[360px] bg-gradient-to-tr from-indigo-200/75 to-purple-300/65 rounded-full blur-xl animate-float opacity-85" style={{ animationDelay: '25s', animationDuration: '28s' }}></div>
        
        {/* Small texture splotches - significantly more visible */}
        <div className="absolute top-[20%] left-[70%] w-[260px] h-[260px] bg-gradient-to-br from-purple-300/60 to-violet-200/70 rounded-full blur-lg animate-float opacity-65" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute top-[55%] right-[5%] w-[280px] h-[280px] bg-gradient-to-tl from-blue-300/65 to-indigo-200/70 rounded-full blur-lg animate-float opacity-70" style={{ animationDelay: '14s', animationDuration: '26s' }}></div>
        <div className="absolute top-[90%] left-[60%] w-[240px] h-[240px] bg-gradient-to-bl from-violet-200/65 to-purple-300/60 rounded-full blur-lg animate-float opacity-75" style={{ animationDelay: '20s', animationDuration: '23s' }}></div>

        {/* Additional coverage splotches - enhanced visibility */}
        <div className="absolute top-[30%] right-[60%] w-[400px] h-[400px] bg-gradient-to-br from-violet-400/60 to-purple-200/65 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '11s', animationDuration: '33s' }}></div>
        <div className="absolute top-[60%] left-[60%] w-[380px] h-[380px] bg-gradient-to-tl from-indigo-400/65 to-blue-300/60 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '17s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-[420px] h-[420px] bg-gradient-to-bl from-purple-300/70 to-violet-400/65 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '23s', animationDuration: '35s' }}></div>

        {/* Extra scattered splotches for maximum coverage */}
        <div className="absolute top-[40%] left-[80%] w-[220px] h-[220px] bg-gradient-to-tr from-purple-500/65 to-violet-300/70 rounded-full blur-lg animate-float opacity-65" style={{ animationDelay: '6s', animationDuration: '25s' }}></div>
        <div className="absolute top-[70%] right-[80%] w-[200px] h-[200px] bg-gradient-to-bl from-indigo-500/70 to-blue-400/65 rounded-full blur-lg animate-float opacity-70" style={{ animationDelay: '12s', animationDuration: '27s' }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-[240px] h-[240px] bg-gradient-to-br from-violet-400/75 to-purple-500/70 rounded-full blur-lg animate-float opacity-75" style={{ animationDelay: '18s', animationDuration: '29s' }}></div>
      </div>

      {/* Section-specific orbs distributed throughout form area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Form section orbs - spread across entire content area with higher opacity */}
        <div className="absolute top-[10%] left-[18%] w-1 h-1 bg-purple-400/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
        <div className="absolute top-[15%] left-[42%] w-2 h-2 bg-violet-500/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '5s', animationDuration: '26s' }}></div>
        <div className="absolute top-[20%] left-[68%] w-1 h-1 bg-indigo-400/50 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute top-[25%] left-[85%] w-1 h-1 bg-purple-600/55 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '11s', animationDuration: '24s' }}></div>
        
        <div className="absolute top-[35%] left-[25%] w-2 h-2 bg-blue-500/40 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '14s', animationDuration: '28s' }}></div>
        <div className="absolute top-[40%] left-[50%] w-1 h-1 bg-violet-300/50 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '17s', animationDuration: '21s' }}></div>
        <div className="absolute top-[45%] left-[75%] w-2 h-2 bg-purple-500/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '20s', animationDuration: '27s' }}></div>
        <div className="absolute top-[50%] left-[10%] w-1 h-1 bg-indigo-600/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '23s', animationDuration: '23s' }}></div>
        
        <div className="absolute top-[60%] left-[35%] w-1 h-1 bg-violet-600/50 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '26s', animationDuration: '25s' }}></div>
        <div className="absolute top-[65%] left-[60%] w-2 h-2 bg-purple-400/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '29s', animationDuration: '29s' }}></div>
        <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-blue-700/60 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '32s', animationDuration: '19s' }}></div>
        <div className="absolute top-[75%] left-[80%] w-1 h-1 bg-indigo-500/50 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '35s', animationDuration: '22s' }}></div>
        
        <div className="absolute top-[85%] left-[30%] w-1 h-1 bg-purple-700/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '38s', animationDuration: '26s' }}></div>
        <div className="absolute top-[90%] left-[55%] w-2 h-2 bg-violet-500/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '41s', animationDuration: '20s' }}></div>
        
        {/* Additional micro orbs scattered throughout form section */}
        <div className="absolute top-[12%] left-[30%] w-1 h-1 bg-purple-800/70 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '44s', animationDuration: '17s' }}></div>
        <div className="absolute top-[30%] left-[65%] w-1 h-1 bg-violet-700/65 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '47s', animationDuration: '18s' }}></div>
        <div className="absolute top-[55%] left-[22%] w-1 h-1 bg-blue-600/55 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '50s', animationDuration: '16s' }}></div>
        <div className="absolute top-[80%] left-[70%] w-1 h-1 bg-purple-600/75 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '53s', animationDuration: '15s' }}></div>
        <div className="absolute top-[95%] left-[40%] w-1 h-1 bg-indigo-400/60 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '56s', animationDuration: '21s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
              Why Partner with Aicrays?
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

          {/* Right Column - Partnership Form */}
          <div className="glass-card p-8 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Let's Explore a Strategic Partnership
              </h3>
              <p className="text-gray-600">
                Tell us about your vision and how we can collaborate.
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
                <Label htmlFor="websiteUrl" className="text-gray-800">Website URL (Optional)</Label>
                <Input
                  id="websiteUrl"
                  name="websiteUrl"
                  type="url"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90"
                  placeholder="https://"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="partnershipType" className="text-gray-800">Type of Partnership</Label>
                <Select value={formData.partnershipType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="border-purple-200 focus:border-purple-500 bg-white/90">
                    <SelectValue placeholder="Select partnership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="co-development">Co-Development</SelectItem>
                    <SelectItem value="technology-integration">Technology Integration</SelectItem>
                    <SelectItem value="white-label">White-Label Solutions</SelectItem>
                    <SelectItem value="research">Research & Innovation</SelectItem>
                    <SelectItem value="distribution">Distribution Partnership</SelectItem>
                    <SelectItem value="strategic">Strategic Alliance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="proposal" className="text-gray-800">Describe Your Proposal</Label>
                <Textarea
                  id="proposal"
                  name="proposal"
                  value={formData.proposal}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90 min-h-[120px]"
                  placeholder="Tell us about your partnership vision, goals, and how we can collaborate..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start the Partnership Conversation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
