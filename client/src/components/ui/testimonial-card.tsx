import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ quote, name, role, image }: TestimonialCardProps) => {
  // Animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      variants={item}
    >
      <div className="text-[#b59410] mb-6">
        {/* Stars */}
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-current" />
          ))}
        </div>
      </div>
      
      <p className="italic text-primary mb-6">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={`${name} portrait`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-semibold text-primary">{name}</h4>
          <p className="text-[#94a3b8] text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
