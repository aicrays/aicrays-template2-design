import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, Mail, Building, MessageSquare, Rocket, CheckCircle, Target, Lightbulb, Users } from "lucide-react";

const PartnerContactForm = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      icon: Target,
      title: "Shared Expertise",
      description: "Joint collaboration in AI and innovative technology solutions"
    },
    {
      icon: Lightbulb,
      title: "Collaborative Approach",
      description: "Working together to solve complex challenges and drive innovation"
    },
    {
      icon: Users,
      title: "Mutual Growth",
      description: "Strategic partnerships that benefit both organizations"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 py-16 md:py-24" id="contact">
      {/* Background elements matching Partners page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced Background with More Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced Background with Darker Tones - matching hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-purple-100/50 to-purple-200/60"></div>
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-300/40 via-purple-200/30 to-transparent"></div>
          
          {/* Darker Edge Gradients for More Depth - matching hero */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-transparent to-violet-400/25"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-indigo-300/20 via-transparent to-purple-400/25"></div>
          
          {/* Soft Violet Fog Behind Text Area - matching hero */}
          <div className="absolute top-[20%] left-[10%] right-[10%] bottom-[30%] bg-gradient-radial from-violet-400/15 via-purple-300/10 to-transparent blur-3xl"></div>
          
          {/* Extra Large floating orbs with varying densities */}
          <div className="absolute top-[5%] left-[1%] w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '2s', animationDuration: '35s' }}></div>
          <div className="absolute bottom-[2%] right-[3%] w-88 h-88 bg-violet-500/28 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '12s', animationDuration: '40s' }}></div>
          <div className="absolute top-[50%] right-[85%] w-76 h-76 bg-indigo-400/32 rounded-full blur-3xl animate-float-vertical opacity-78" style={{ animationDelay: '22s', animationDuration: '37s' }}></div>
        </div>
        <div className="absolute top-[12%] left-[15%] w-[480px] h-[480px] bg-gradient-to-br from-purple-300/65 to-violet-400/60 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '4s', animationDuration: '27s' }}></div>
        <div className="absolute top-[25%] right-[10%] w-[440px] h-[440px] bg-gradient-to-bl from-indigo-300/70 to-purple-300/65 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '10s', animationDuration: '32s' }}></div>
        <div className="absolute top-[45%] left-[5%] w-[420px] h-[420px] bg-gradient-to-tr from-violet-200/75 to-blue-300/70 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '16s', animationDuration: '29s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Let's explore how we can collaborate to create innovative solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Partnership Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Partner with Aicrays?
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card p-8 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600">
                Get in touch with us to discuss partnership opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-800">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-purple-200 focus:border-purple-500 bg-white/90"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800">Email</Label>
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
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-800">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-800">Partnership Interest</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-purple-200 focus:border-purple-500 bg-white/90 min-h-[120px]"
                  placeholder="Tell us about your partnership goals, areas of collaboration, or mutual opportunities..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {formState === 'idle' && 'Let\'s Partner Together'}
                {formState === 'submitting' && 'Sending Message...'}
                {formState === 'success' && 'Message Sent Successfully!'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerContactForm;
