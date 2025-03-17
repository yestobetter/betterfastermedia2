import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const CaseStudyCard = ({ image, title, description, tags }: CaseStudyCardProps) => {
  // Animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
      variants={item}
    >
      <div className="h-60 bg-gray-200 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-['Playfair_Display'] font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-[#94a3b8] mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          className="text-[#0d9488] font-['Montserrat'] font-medium flex items-center hover:text-primary transition-colors p-0 h-auto"
        >
          View Case Study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Button>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
