
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

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-purple-50/20 to-violet-50/30 relative overflow-hidden" id="contact">
      {/* Enhanced Background with Floating Orbs - matching hero style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - matching hero opacity and colors */}
        <div className="absolute top-[10%] right-[15%] w-40 h-40 bg-purple-400/40 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-violet-300/35 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-purple-500/45 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[10%] right-[20%] w-36 h-36 bg-violet-200/40 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '12s', animationDuration: '28s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[35%] left-[15%] w-28 h-28 bg-indigo-400/40 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[45%] right-[12%] w-24 h-24 bg-violet-400/35 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[25%] right-[45%] w-20 h-20 bg-purple-300/42 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '10s', animationDuration: '14s' }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[70%] left-[25%] w-16 h-16 bg-violet-500/38 rounded-full blur-xl animate-float-vertical opacity-60" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute top-[45%] right-[35%] w-18 h-18 bg-purple-400/40 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
        
        {/* Particle dots for depth */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-purple-600/60 rounded-full animate-float-vertical" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-[75%] right-[20%] w-1.5 h-1.5 bg-violet-600/55 rounded-full animate-float-vertical" style={{ animationDelay: '5s', animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-purple-500/50 rounded-full animate-float-vertical" style={{ animationDelay: '8s', animationDuration: '12s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Updated Section Header - matching hero font styling */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-bold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="block text-gray-900">Let's Build</span>
            <span className="block">
              <span className="text-purple-700 relative inline-block">
                What's Next
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/80 via-purple-600/90 to-blue-500/80 rounded-full animate-pulse-slow shadow-lg shadow-purple-500/30"></div>
              </span>
              {" — "}
              <span className="text-purple-700 relative inline-block">
                Together
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600/80 via-pink-500/90 to-purple-600/80 rounded-full animate-pulse-slow shadow-lg shadow-purple-500/30" style={{animationDelay: '1s'}}></div>
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto font-normal">
            Tell us about your goals, and we'll show you how our modular AI-powered platforms can make it real.
          </p>
        </div>

        {/* Enhanced Glassmorphism Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-white/20 to-violet-50/30 opacity-70"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Enhanced Value Proposition */}
              <div className="p-8 md:p-10 lg:p-12 bg-white/40 backdrop-blur-lg relative overflow-hidden border-r border-white/30">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-violet-100/30"></div>
                <div className="absolute top-8 right-8 w-16 h-16 border-2 border-purple-200/40 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-10 h-10 border-2 border-purple-300/30 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Why Choose Our<br />Modular Approach?
                  </h3>
                  
                  {/* Enhanced feature list with unique icons */}
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: Target, text: "AI-powered, modular, secure" },
                      { icon: Lightbulb, text: "Tailored for your workflows" }, 
                      { icon: Users, text: "Built to scale with your business" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                          <feature.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced trust badge */}
                  <div className="bg-white/60 backdrop-blur-sm border border-purple-200/60 rounded-2xl p-4">
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      ✨ Trusted by forward-thinking companies to deliver custom platforms that transform operations
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Form */}
              <div className="p-8 md:p-10 lg:p-12 bg-white/70 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
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
                          className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm text-sm"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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
                          className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm text-sm"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
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
                        className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm text-sm"
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-3 top-3.5 w-4 h-4 transition-all duration-200 ${
                        focusedField === 'message' ? 'text-purple-500 scale-110' : 'text-gray-400'
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 resize-vertical transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm text-sm"
                        placeholder="Tell us about your project goals, timeline, and specific needs..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Enhanced CTA Button - matching hero style */}
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
                  
                  {/* Enhanced footer contact */}
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
