import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold font-['Playfair_Display'] text-primary">
            TwoBirdsPress
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => handleNavClick("home")}
            className="text-primary hover:text-primary/80 transition-colors font-medium cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={() => handleNavClick("services")}
            className="text-primary hover:text-primary/80 transition-colors font-medium cursor-pointer"
          >
            Services
          </a>
          <a 
            onClick={() => handleNavClick("about")}
            className="text-primary hover:text-primary/80 transition-colors font-medium cursor-pointer"
          >
            About
          </a>
          <Button 
            onClick={() => handleNavClick("contact")}
            className="px-5 py-2 bg-primary text-white hover:bg-opacity-90 transition-all font-['Montserrat'] font-medium"
          >
            Contact Us
          </Button>
        </div>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden text-primary"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute w-full border-b border-gray-200`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            onClick={() => handleNavClick("home")}
            className="text-primary hover:text-primary/80 transition-colors font-medium py-2 cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={() => handleNavClick("services")}
            className="text-primary hover:text-primary/80 transition-colors font-medium py-2 cursor-pointer"
          >
            Services
          </a>
          <a 
            onClick={() => handleNavClick("about")}
            className="text-primary hover:text-primary/80 transition-colors font-medium py-2 cursor-pointer"
          >
            About
          </a>
          <Button 
            onClick={() => handleNavClick("contact")}
            className="w-full px-5 py-2 bg-primary text-white hover:bg-opacity-90 transition-all font-['Montserrat'] font-medium"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
