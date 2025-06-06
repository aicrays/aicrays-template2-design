
import React, { useState } from "react";
import { User, Mail, Building, MessageSquare, Rocket, CheckCircle } from "lucide-react";

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
    <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-blue-50/40 via-purple-50/60 to-violet-50/45 relative overflow-hidden min-h-screen flex items-center" id="contact">
      {/* Enhanced Background with More Varied Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated floating orbs */}
        <div className="absolute top-[10%] right-[15%] w-80 h-80 bg-gradient-to-br from-purple-200/22 to-purple-400/12 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-gradient-to-tl from-blue-300/18 to-blue-500/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-64 h-64 bg-gradient-to-br from-purple-300/28 to-purple-500/8 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[10%] right-[20%] w-72 h-72 bg-gradient-to-l from-blue-200/20 to-blue-400/12 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[35%] left-[20%] w-48 h-48 bg-gradient-to-br from-purple-400/16 to-purple-200/20 rounded-full blur-3xl animate-float opacity-52" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[45%] right-[10%] w-56 h-56 bg-gradient-to-tl from-blue-500/14 to-blue-300/18 rounded-full blur-3xl animate-float opacity-48" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[75%] left-[40%] w-40 h-40 bg-gradient-to-br from-blue-400/25 to-purple-200/16 rounded-full blur-2xl animate-float opacity-58" style={{ animationDelay: '1s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[60%] left-[60%] w-32 h-32 bg-gradient-to-tl from-purple-600/20 to-blue-300/22 rounded-full blur-2xl animate-float opacity-47" style={{ animationDelay: '5s', animationDuration: '17s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[25%] left-[25%] w-3 h-3 bg-purple-600/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[75%] right-[25%] w-2 h-2 bg-blue-300/90 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[45%] left-[70%] w-2.5 h-2.5 bg-purple-400/70 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Enhanced Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-800 bg-clip-text text-transparent">
            Let's Build What's Next — Together
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Tell us about your goals, and we'll show you how our modular AI-powered platforms can make it real.
          </p>
        </div>

        {/* Enhanced Glassmorphism Container */}
        <div className="relative">
          <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-3xl shadow-3xl overflow-hidden relative">
            {/* Enhanced inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-white/15 to-blue-50/25 opacity-60"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Enhanced Left Side - Glassmorphism Value Proposition */}
              <div className="p-6 md:p-8 lg:p-10 bg-white/40 backdrop-blur-lg relative overflow-hidden border-r border-white/30">
                {/* Enhanced decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-blue-100/25"></div>
                <div className="absolute top-6 right-6 w-16 h-16 border-2 border-purple-200/40 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-blue-300/30 rounded-full"></div>
                <div className="absolute top-1/2 right-12 w-8 h-8 border-2 border-purple-300/25 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight text-gray-800">
                    Why Choose Our<br />Modular Approach?
                  </h3>
                  
                  {/* Enhanced feature list with better icons */}
                  <div className="space-y-3 mb-6">
                    {[
                      "AI-powered, modular, secure",
                      "Tailored for your workflows", 
                      "Built to scale with your business"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                          <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 font-medium text-base lg:text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced trust badge */}
                  <div className="bg-white/60 backdrop-blur-sm border border-purple-200/60 rounded-xl p-3 shadow-lg">
                    <p className="text-sm text-gray-600 font-medium">
                      ✨ Trusted by forward-thinking companies to deliver custom platforms that transform operations
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Right Side - Form */}
              <div className="p-6 md:p-8 lg:p-10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20"></div>
                
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  {/* Enhanced Name and Email grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                        Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                          focusedField === 'name' ? 'text-purple-700 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="w-full pl-10 pr-3 py-3 border-2 border-gray-200/90 rounded-xl focus:ring-2 focus:ring-purple-500/60 focus:border-purple-600 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-400 hover:shadow-sm text-sm shadow-sm"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                          focusedField === 'email' ? 'text-purple-700 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@company.com"
                          className="w-full pl-10 pr-3 py-3 border-2 border-gray-200/90 rounded-xl focus:ring-2 focus:ring-purple-500/60 focus:border-purple-600 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-400 hover:shadow-sm text-sm shadow-sm"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
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
                        className="w-full pl-10 pr-3 py-3 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm text-sm"
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
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
                        className="w-full pl-10 pr-3 py-3 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 resize-vertical transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm text-sm"
                        placeholder="Tell us about your project goals, timeline, and specific needs..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Enhanced CTA Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className={`w-full group relative overflow-hidden bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                        formState === 'submitting' ? 'scale-95 cursor-not-allowed' : ''
                      }`}
                    >
                      {/* Enhanced button content */}
                      <div className="relative z-10 flex items-center justify-center">
                        {formState === 'idle' && (
                          <>
                            <Rocket className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                            Let's Start Building
                          </>
                        )}
                        {formState === 'submitting' && (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending Message...
                          </>
                        )}
                        {formState === 'success' && (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Message Sent Successfully!
                          </>
                        )}
                      </div>
                      
                      {/* Enhanced hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/8 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    </button>
                  </div>
                  
                  {/* Enhanced footer contact */}
                  <div className="text-center pt-2 border-t border-gray-200/60">
                    <p className="text-sm text-gray-500">
                      Prefer email? Contact us at{' '}
                      <a 
                        href="mailto:hello@aicrays.com" 
                        className="text-purple-700 hover:text-purple-800 font-medium transition-all duration-200 hover:underline hover:underline-offset-2"
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
