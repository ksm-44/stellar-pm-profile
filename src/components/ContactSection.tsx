import { useState } from 'react';
import { Send, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-pm-darker">
      <div className="container mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new product opportunities, innovative ideas, or potential collaborations. Feel free to reach out through the form or connect with me directly via the contact information provided.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="text-pm-purple mr-4" size={24} />
                <div>
                  <p className="text-sm text-pm-gray">Email</p>
                  <a href="mailto:contact@pmportfolio.com" className="text-white hover:text-pm-purple transition-colors">
                    contact@pmportfolio.com
                  </a>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mb-4">Connect on Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-pm-charcoal flex items-center justify-center hover:bg-pm-purple/20 transition-all">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-pm-charcoal flex items-center justify-center hover:bg-pm-purple/20 transition-all">
                <Github size={20} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-pm-charcoal flex items-center justify-center hover:bg-pm-purple/20 transition-all">
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-pm-charcoal border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pm-purple"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-pm-charcoal border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pm-purple"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-pm-charcoal border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pm-purple"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-pm-charcoal border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pm-purple"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
