
import React, { useState } from "react";
import { User, Mail, Building, MessageSquare, Rocket, CheckCircle, Target, Lightbulb, Users } from "lucide-react";

const Newsletter = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      text: "AI-powered, modular, secure"
    },
    {
      icon: Lightbulb,
      text: "Tailored for your workflows"
    },
    {
      icon: Users,
      text: "Built to scale with your business"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="contact">
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
        
        {/* Large floating orbs - matching hero opacity and colors with different positions */}
        <div className="absolute top-[10%] right-[15%] w-40 h-40 bg-purple-500/40 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-violet-600/35 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-indigo-600/45 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[10%] right-[20%] w-36 h-36 bg-purple-700/40 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '12s', animationDuration: '28s' }}></div>
        <div className="absolute top-[75%] left-[65%] w-44 h-44 bg-violet-500/37 rounded-full blur-3xl animate-float-vertical opacity-82" style={{ animationDelay: '18s', animationDuration: '25s' }}></div>
        <div className="absolute bottom-[55%] right-[70%] w-52 h-52 bg-purple-400/34 rounded-full blur-3xl animate-float-vertical opacity-77" style={{ animationDelay: '24s', animationDuration: '31s' }}></div>
        
        {/* Medium floating orbs - matching hero */}
        <div className="absolute top-[35%] left-[15%] w-28 h-28 bg-indigo-500/50 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[45%] right-[12%] w-24 h-24 bg-purple-500/45 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[25%] right-[45%] w-20 h-20 bg-violet-600/48 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '10s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[70%] left-[50%] w-30 h-30 bg-indigo-400/46 rounded-full blur-2xl animate-float-vertical opacity-78" style={{ animationDelay: '15s', animationDuration: '19s' }}></div>
        <div className="absolute top-[80%] right-[55%] w-26 h-26 bg-purple-600/43 rounded-full blur-2xl animate-float-vertical opacity-73" style={{ animationDelay: '20s', animationDuration: '17s' }}></div>
        <div className="absolute bottom-[30%] left-[75%] w-34 h-34 bg-violet-500/47 rounded-full blur-2xl animate-float-vertical opacity-81" style={{ animationDelay: '26s', animationDuration: '23s' }}></div>
        
        {/* Small floating orbs with varying shades */}
        <div className="absolute top-[70%] left-[25%] w-16 h-16 bg-purple-500/48 rounded-full blur-xl animate-float-vertical opacity-70" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute top-[45%] right-[35%] w-18 h-18 bg-blue-400/52 rounded-full blur-xl animate-float-vertical opacity-85" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
        <div className="absolute bottom-[60%] left-[35%] w-22 h-22 bg-violet-600/45 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '13s', animationDuration: '15s' }}></div>
        <div className="absolute top-[15%] left-[80%] w-20 h-20 bg-indigo-500/49 rounded-full blur-xl animate-float-vertical opacity-72" style={{ animationDelay: '17s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-[85%] right-[60%] w-24 h-24 bg-purple-400/46 rounded-full blur-xl animate-float-vertical opacity-68" style={{ animationDelay: '21s', animationDuration: '16s' }}></div>
        
        {/* Micro orbs for texture */}
        <div className="absolute top-[55%] left-[60%] w-14 h-14 bg-purple-350/35 rounded-full blur-md animate-float-vertical opacity-55" style={{ animationDelay: '5s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-[40%] right-[25%] w-12 h-12 bg-violet-400/38 rounded-full blur-md animate-float-vertical opacity-58" style={{ animationDelay: '11s', animationDuration: '7s' }}></div>
        <div className="absolute top-[40%] left-[40%] w-16 h-16 bg-indigo-350/40 rounded-full blur-sm animate-float-vertical opacity-52" style={{ animationDelay: '16s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[25%] right-[80%] w-10 h-10 bg-purple-400/42 rounded-full blur-sm animate-float-vertical opacity-56" style={{ animationDelay: '19s', animationDuration: '8s' }}></div>
        
        {/* Particle dots for depth - matching hero */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-purple-600/60 rounded-full animate-float-vertical" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-[75%] right-[20%] w-1.5 h-1.5 bg-violet-600/55 rounded-full animate-float-vertical" style={{ animationDelay: '5s', animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-purple-500/50 rounded-full animate-float-vertical" style={{ animationDelay: '8s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[50%] right-[40%] w-2.5 h-2.5 bg-indigo-600/65 rounded-full animate-float-vertical" style={{ animationDelay: '14s', animationDuration: '9s' }}></div>
        <div className="absolute top-[85%] left-[50%] w-4 h-4 bg-violet-500/70 rounded-full animate-float-vertical" style={{ animationDelay: '23s', animationDuration: '13s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - matching hero font styling */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-purple-950 bg-clip-text text-transparent mb-4">
            Let's Build What's Next — Together
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Tell us about your goals, and we'll show you how our modular AI-powered platforms can make it real.
          </p>
        </div>

        {/* Glassmorphism Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-white/20 to-violet-50/30 opacity-70"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Value Proposition */}
              <div className="p-8 bg-white/40 backdrop-blur-lg relative overflow-hidden border-r border-white/30">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-violet-100/30"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-purple-200/40 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-purple-300/30 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-900">
                    Why Choose Our<br />Modular Approach?
                  </h3>
                  
                  {/* Feature list with unique icons */}
                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                          <benefit.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust badge */}
                  <div className="bg-white/60 backdrop-blur-sm border border-purple-200/60 rounded-2xl p-4">
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      ✨ Trusted by forward-thinking companies to deliver custom platforms that transform operations
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 bg-white/70 backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-gray-600">
                    Get in touch with us to discuss your project goals.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                          focusedField === 'name' ? 'text-purple-500 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative group space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                          focusedField === 'email' ? 'text-purple-500 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@company.com"
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                      Company
                    </label>
                    <div className="relative">
                      <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                        focusedField === 'company' ? 'text-purple-500 scale-110' : 'text-gray-400'
                      }`} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Acme Corporation"
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>
                  
                  <div className="relative group space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Project Details
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-3 top-3 w-4 h-4 transition-all duration-200 ${
                        focusedField === 'message' ? 'text-purple-500 scale-110' : 'text-gray-400'
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 resize-vertical transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
                        placeholder="Tell us about your project goals, timeline, and specific needs..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* CTA Button - matching hero style */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className={`w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800 ${
                        formState === 'submitting' ? 'scale-95 cursor-not-allowed' : ''
                      }`}
                    >
                      {/* Button content */}
                      <div className="relative z-10 flex items-center justify-center">
                        {formState === 'idle' && (
                          <>
                            <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                            Let's Start Building
                          </>
                        )}
                        {formState === 'submitting' && (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending Message...
                          </>
                        )}
                        {formState === 'success' && (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent Successfully!
                          </>
                        )}
                      </div>
                      
                      {/* Hover effect overlay - matching hero style */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                  
                  {/* Footer contact */}
                  <div className="text-center pt-4 border-t border-gray-200/50">
                    <p className="text-sm text-gray-500">
                      Prefer email? Contact us at{' '}
                      <a 
                        href="mailto:hello@aicrays.com" 
                        className="text-purple-600 hover:text-purple-700 font-medium transition-all duration-200 hover:underline hover:underline-offset-2"
                      >
                        hello@aicrays.com
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
