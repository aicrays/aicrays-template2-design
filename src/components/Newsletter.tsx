
import React, { useState } from "react";
import { User, Mail, Building, MessageSquare, Rocket, CheckCircle, Target, Lightbulb, Users, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Newsletter = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  const benefits = [
    {
      icon: Cog,
      title: "AI-powered, modular, secure",
      description: "Iterative development cycles with quick turnaround times"
    },
    {
      icon: Rocket,
      title: "Tailored for your workflows",
      description: "Feasibility analysis and architecture planning for your product"
    },
    {
      icon: Users,
      title: "Built to scale with your business",
      description: "Integration with your product roadmap and development process"
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Why Choose Our Modular Approach */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent">
              Why Choose Our<br />Modular Approach?
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust badge */}
            <div className="bg-white/60 backdrop-blur-sm border border-purple-200/60 rounded-xl p-3">
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                ✨ Trusted by forward-thinking companies to deliver custom platforms that transform operations
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card p-6 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Let's Start a Conversation
              </h3>
              <p className="text-sm text-gray-600">
                Get in touch with us to discuss your project goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-sm text-gray-800">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="border-purple-200 focus:border-purple-500 bg-white/90 h-9" 
                    required 
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-sm text-gray-800">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="border-purple-200 focus:border-purple-500 bg-white/90 h-9" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="company" className="text-sm text-gray-800">Company</Label>
                <Input 
                  id="company" 
                  name="company" 
                  type="text" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  className="border-purple-200 focus:border-purple-500 bg-white/90 h-9" 
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="serviceType" className="text-sm text-gray-800">What are you looking for?</Label>
                <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="border-purple-200 focus:border-purple-500 bg-white/90 h-9">
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
              
              <div className="space-y-1">
                <Label htmlFor="message" className="text-sm text-gray-800">Project Details</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="border-purple-200 focus:border-purple-500 bg-white/90 min-h-[80px] resize-none" 
                  placeholder="Tell us about your project goals, timeline, and specific needs..." 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={formState === 'submitting'} 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl h-10"
              >
                {formState === 'idle' && 'Let\'s Start Building'}
                {formState === 'submitting' && 'Sending Message...'}
                {formState === 'success' && 'Message Sent Successfully!'}
              </Button>
              
              {/* Footer contact */}
              <div className="text-center pt-2 border-t border-gray-200/50">
                <p className="text-xs text-gray-500">
                  Prefer email? Contact us at{' '}
                  <a href="mailto:hello@aicrays.com" className="text-purple-600 hover:text-purple-700 font-medium transition-all duration-200 hover:underline hover:underline-offset-2">
                    hello@aicrays.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
