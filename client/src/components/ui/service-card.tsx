import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  // Animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
      variants={item}
    >
      <div className="text-primary mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-[#94a3b8] mb-4 flex-grow">{description}</p>
      
      <ul className="mb-6 space-y-3 text-primary">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 mr-2 text-[#b59410] flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={() => scrollToElement("contact")}
        variant="ghost" 
        className="text-[#0d9488] font-['Montserrat'] font-medium flex items-center hover:text-primary transition-colors p-0 h-auto"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
