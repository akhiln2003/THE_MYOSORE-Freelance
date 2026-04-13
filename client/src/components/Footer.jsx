import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bg-slate pt-16 pb-8 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-semibold text-primary">
                THE MYOSORE FITNESS
              </span>
            </Link>
            <p className="text-text-muted mb-6">
              Fitness for a Better Tomorrow. Join us to transform your life with personalized fitness routines and expert coaching.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/themyosore" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-main hover:bg-primary hover:text-bg-dark transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-text-main">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/tools" className="text-text-muted hover:text-primary transition-colors text-primary font-medium">Tools</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-text-muted hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-text-main">Services</h4>
            <ul className="space-y-3">
              <li className="text-text-muted">Personal Training</li>
              <li className="text-text-muted">Senior Citizen Fitness</li>
              <li className="text-text-muted">Sports Coaching</li>
              <li className="text-text-muted">Rehabilitation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-text-main">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-text-muted">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+91 96255 16326</span>
              </li>
              <li className="flex items-center space-x-3 text-text-muted">
                <Mail size={20} className="text-primary shrink-0" />
                <span>themyosore@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-text-muted">
                <MapPin size={32} className="text-primary shrink-0 mt-1" />
                <span>House no.H-32 kp-1 Jaypee greens wish Town sector -133 noida uttarpradesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} THE MYOSORE FITNESS. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            Designed & Developed by <a href="https://www.linkedin.com/in/n-akhil/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Akhil N</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
