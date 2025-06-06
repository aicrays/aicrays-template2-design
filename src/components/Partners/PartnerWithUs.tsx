
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    role: "",
    website: "",
    partnershipType: "",
    description: "",
    stage: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership form submitted:", formData);
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 py-16 md:py-24" id="partner-with-us">
      {/* Subtle floating orbs - much smaller and delicate */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small scattered orbs */}
        <div className="absolute top-1/3 left-1/4 w-15 h-15 bg-violet-400/25 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '5s', animationDuration: '25s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-purple-500/30 rounded-full blur-sm animate-float opacity-55" style={{ animationDelay: '12s', animationDuration: '18s' }}></div>
        <div className="absolute top-1/4 right-1/5 w-9 h-9 bg-indigo-400/20 rounded-full blur-sm animate-float opacity-50" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-18 h-18 bg-purple-300/15 rounded-full blur-md animate-float opacity-45" style={{ animationDelay: '8s', animationDuration: '28s' }}></div>

        {/* Medium tiny orbs */}
        <div className="absolute top-10 right-1/4 w-8 h-8 bg-violet-500/35 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '6s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-10 h-10 bg-purple-400/40 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '14s', animationDuration: '22s' }}></div>
        <div className="absolute top-2/3 left-1/6 w-6 h-6 bg-indigo-300/45 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-7 h-7 bg-purple-200/55 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '10s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-11 h-11 bg-violet-300/50 rounded-full blur-sm animate-float opacity-80" style={{ animationDelay: '16s', animationDuration: '26s' }}></div>
        <div className="absolute top-1/6 right-2/3 w-5 h-5 bg-purple-600/45 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>

        {/* Small accent orbs */}
        <div className="absolute top-1/5 left-1/7 w-9 h-9 bg-blue-400/55 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '18s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-1/5 right-1/7 w-6 h-6 bg-indigo-500/50 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '3s', animationDuration: '17s' }}></div>
        <div className="absolute top-4/5 left-2/3 w-4 h-4 bg-violet-600/60 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '20s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-4/5 right-2/3 w-8 h-8 bg-purple-700/40 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '1s', animationDuration: '21s' }}></div>

        {/* Tiny detail orbs */}
        <div className="absolute top-32 left-3/5 w-3 h-3 bg-blue-600/65 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '11s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-32 right-3/5 w-5 h-5 bg-purple-800/55 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '22s', animationDuration: '11s' }}></div>
        <div className="absolute top-48 left-1/9 w-4 h-4 bg-indigo-700/70 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '13s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-48 right-1/9 w-6 h-6 bg-violet-500/45 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '19s', animationDuration: '14s' }}></div>

        {/* Micro orbs for extra subtlety */}
        <div className="absolute top-20 left-4/5 w-2 h-2 bg-purple-900/75 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '9s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-4/5 w-3 h-3 bg-blue-800/65 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '23s', animationDuration: '9s' }}></div>
        <div className="absolute top-64 left-1/11 w-4 h-4 bg-indigo-800/80 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '15s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-64 right-1/11 w-5 h-5 bg-violet-700/60 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '17s', animationDuration: '11s' }}></div>
        <div className="absolute top-1/7 left-6/7 w-2 h-2 bg-purple-600/85 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '21s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/7 right-6/7 w-7 h-7 bg-blue-500/50 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '24s', animationDuration: '13s' }}></div>

        {/* Additional scattered micro orbs */}
        <div className="absolute top-80 left-1/10 w-3 h-3 bg-indigo-600/70 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '25s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-80 right-1/10 w-4 h-4 bg-purple-500/60 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '27s', animationDuration: '8s' }}></div>
        <div className="absolute top-96 left-2/10 w-2 h-2 bg-violet-800/85 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '29s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-96 right-2/10 w-6 h-6 bg-blue-400/55 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '31s', animationDuration: '10s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
              Interested in Partnering?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether you're an enterprise seeking custom solutions or a builder with a vision, we'd love to connect. Share your idea and let's explore how we can build together.
            </p>
            
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-base">Co-development opportunities with shared expertise</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-base">Technology integration and white-label solutions</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-base">Research & innovation partnerships</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-base">Distribution and channel partnerships</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="glass-card p-8 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg">
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800">Work Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-purple-200 focus:border-purple-500 bg-white/90"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-800">Role / Title</Label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="border-purple-200 focus:border-purple-500 bg-white/90"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-gray-800">Website or LinkedIn (Optional)</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90"
                  placeholder="https://"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partnershipType" className="text-gray-800">Type of Partnership</Label>
                  <Select onValueChange={(value) => handleSelectChange('partnershipType', value)} required>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500 bg-white/90">
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="co-development">Co-Development</SelectItem>
                      <SelectItem value="technology-integration">Technology Integration</SelectItem>
                      <SelectItem value="white-label">White-Label Resale</SelectItem>
                      <SelectItem value="research">Research & Innovation</SelectItem>
                      <SelectItem value="distribution">Distribution / Channel</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stage" className="text-gray-800">What stage are you in?</Label>
                  <Select onValueChange={(value) => handleSelectChange('stage', value)} required>
                    <SelectTrigger className="border-purple-200 focus:border-purple-500 bg-white/90">
                      <SelectValue placeholder="Select your stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Idea stage</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                      <SelectItem value="beta">Beta</SelectItem>
                      <SelectItem value="scaling">Actively scaling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-800">What are you looking to build or contribute?</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90 min-h-[120px]"
                  placeholder="Tell us about your vision, what you're building, or how you'd like to collaborate..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start the Conversation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
