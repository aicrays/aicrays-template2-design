
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    roleTitle: "",
    websiteOrLinkedIn: "",
    partnershipType: "",
    projectDescription: "",
    projectStage: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section id="partner-with-us" className="section-container relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-violet-400/15 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s', animationDuration: '25s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '8s', animationDuration: '18s' }}></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-blue-400/25 rounded-full blur-xl animate-float opacity-35" style={{ animationDelay: '12s', animationDuration: '22s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
                  Interested in Partnering?
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're an enterprise seeking custom solutions or a builder with a vision, we'd love to connect. Share your idea and let's explore how we can build together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Co-develop innovative platforms using our modular AI, IoT, and cybersecurity components</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Integrate your expertise with our technology stack for industry-specific solutions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Explore white-label and distribution opportunities for scalable growth</p>
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
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workEmail">Work Email</Label>
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="roleTitle">Role / Title</Label>
                  <Input
                    id="roleTitle"
                    name="roleTitle"
                    value={formData.roleTitle}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="websiteOrLinkedIn">Website or LinkedIn (Optional)</Label>
                <Input
                  id="websiteOrLinkedIn"
                  name="websiteOrLinkedIn"
                  value={formData.websiteOrLinkedIn}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="partnershipType">Type of Partnership</Label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select partnership type</option>
                  <option value="co-development">Co-Development</option>
                  <option value="technology-integration">Technology Integration</option>
                  <option value="white-label-resale">White-Label Resale</option>
                  <option value="research-innovation">Research & Innovation</option>
                  <option value="distribution-channel">Distribution / Channel</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription">What are you looking to build or contribute?</Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectStage">What stage are you in?</Label>
                <select
                  id="projectStage"
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select current stage</option>
                  <option value="idea-stage">Idea stage</option>
                  <option value="mvp">MVP</option>
                  <option value="beta">Beta</option>
                  <option value="actively-scaling">Actively scaling</option>
                </select>
              </div>

              <Button type="submit" className="w-full button-primary">
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
