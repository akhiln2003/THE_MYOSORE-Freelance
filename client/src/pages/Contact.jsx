import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/themyosore@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Request from ${formData.name}`,
          _template: 'table'
        }),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen relative"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent z-0 pointer-events-none" />
      
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Ready to start your fitness journey? Drop us a message or visit our center. We're here to help you transform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <a href="https://instagram.com/themyosore" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full text-primary shrink-0 inline-flex items-center justify-center">
                    <FaInstagram size={24} />
                  </a>
                  <div>
                    <h4 className="text-lg font-bold">Instagram</h4>
                    <p className="text-text-muted mt-1">
                      <a href="https://instagram.com/themyosore" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        @themyosore
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-full text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Phone</h4>
                    <p className="text-text-muted mt-1">+91 96255 16326</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-full text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Email</h4>
                    <p className="text-text-muted mt-1">themyosore@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Google Maps Integration */}
            <div className="glass-panel rounded-2xl overflow-hidden h-[300px]">
              <iframe 
                src="https://maps.google.com/maps?q=House%20no.H-32%20kp-1%20Jaypee%20greens%20wish%20Town%20sector%20133%20noida%20uttarpradesh%20201304&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl h-full">
              <h3 className="text-2xl font-heading font-bold mb-6">Send us a message</h3>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/20 border border-primary text-primary p-6 rounded-xl flex flex-col items-center justify-center h-64 text-center"
                >
                  <CheckCircle size={48} className="mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-muted mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  {status === 'error' && (
                     <p className="text-red-500 text-sm">There was an error sending your message. Please try again.</p>
                  )}
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-primary hover:bg-primary-dark text-bg-dark font-bold text-lg px-6 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919625516326" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </motion.div>
  );
};

export default Contact;
