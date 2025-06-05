
import React, { useState } from "react";
import { User, Mail, Building, MessageSquare, Send, CheckCircle } from "lucide-react";

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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-pulse-50/30 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pulse-400 to-transparent"></div>
      <div className="absolute -top-20 right-0 w-64 h-64 bg-pulse-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-pulse-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Mission Panel */}
          <div className="lg:pr-8">
            <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">
                  Let's Build What's Next — Together
                </h2>
                <p className="text-lg mb-8 text-purple-100">
                  Looking to partner, evolve your infrastructure, or explore what's possible with modular digital innovation? We'd love to connect.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                    <span className="text-purple-100">Custom solutions, not templates</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span className="text-purple-100">Built around your business processes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <span className="text-purple-100">Enterprise-grade security & scalability</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="text-center mb-8">
              <h2 className="section-title mb-6">
                Start Your Project
              </h2>
              <p className="section-subtitle">
                Tell us about your goals and we'll show you what's possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      focusedField === 'name' ? 'text-pulse-500' : 'text-gray-400'
                    }`} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      focusedField === 'email' ? 'text-pulse-500' : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <div className="relative">
                  <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === 'company' ? 'text-pulse-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300"
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-4 w-5 h-5 transition-colors ${
                    focusedField === 'message' ? 'text-pulse-500' : 'text-gray-400'
                  }`} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent resize-vertical transition-all duration-300"
                    placeholder="Tell us about your project or partnership opportunity..."
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className={`button-primary relative overflow-hidden transition-all duration-300 ${
                    formState === 'submitting' ? 'scale-95' : 'hover:scale-105'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                  {formState === 'submitting' && (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  )}
                  {formState === 'success' && (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
