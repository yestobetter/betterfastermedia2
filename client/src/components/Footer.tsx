import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import { scrollToElement } from "@/lib/utils";
import { Link } from "wouter";

const Footer = () => {
  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-bold font-['Playfair_Display'] text-white">
                TwoBirdsPress
              </span>
            </a>
            <p className="text-gray-300 mb-6">Premium digital marketing solutions for brands that demand excellence.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  onClick={() => handleNavClick("services")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Google Analytics Management
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick("services")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Google Tag Manager
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick("services")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  SEO Services
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick("services")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Paid Media & PPC
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick("services")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Social Media Management
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick("services")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Web Development & Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  onClick={() => handleNavClick("about")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick("contact")} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gray-300 mt-0.5" />
                <span>
                  95 S State St<br />Salt Lake City, Utah
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-300" />
                <span>+1 (323) 688-3445</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-300" />
                <span>contact@twobirdspress.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} TwoBirdsPress. All rights reserved.</p>
          <div className="flex space-x-6">
            <a 
              href={window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
                ? '/privacy-policy' 
                : '/betterfastermedia2/privacy-policy.html'} 
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href={window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
                ? '/terms-of-service' 
                : '/betterfastermedia2/terms-of-service.html'}
              className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
