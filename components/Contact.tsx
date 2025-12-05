import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS, EMAILJS_CONFIG } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;

    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_name: 'Prem Polai',
    };

    const data = {
      service_id: EMAILJS_CONFIG.SERVICE_ID,
      template_id: EMAILJS_CONFIG.TEMPLATE_ID,
      user_id: EMAILJS_CONFIG.PUBLIC_KEY,
      template_params: templateParams,
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
        formElement.reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface/30 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-white/5 hover:border-accent hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-surface rounded-lg text-gray-400 group-hover:text-accent group-hover:bg-black transition-colors shrink-0">
                    <link.icon size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-gray-500 text-sm">{link.name}</div>
                    <div className="text-white font-medium group-hover:text-accent transition-colors truncate">
                      {link.display || 'Connect'}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {formState === 'success' ? (
               <div className="h-[300px] flex flex-col items-center justify-center text-center animate-fade-in">
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-400 mt-2">I'll get back to you as soon as possible.</p>
               </div>
            ) : formState === 'error' ? (
                <div className="h-[300px] flex flex-col items-center justify-center text-center animate-fade-in">
                   <AlertCircle size={64} className="text-red-500 mb-4" />
                   <h4 className="text-xl font-bold text-white">Something went wrong</h4>
                   <p className="text-gray-400 mt-2">Please try again later or contact me via social media.</p>
                   <button 
                     onClick={() => setFormState('idle')}
                     className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
                   >
                     Try Again
                   </button>
                </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400" htmlFor="name">Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400" htmlFor="email">Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="subject">Subject</label>
                  <input 
                    id="subject"
                    name="subject"
                    type="text" 
                    required
                    className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;