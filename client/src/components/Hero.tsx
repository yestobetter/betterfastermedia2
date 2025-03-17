import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-[0.02] z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-['Playfair_Display'] font-semibold text-primary mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Elevate Your Digital Presence
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#94a3b8] mb-10 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Luxury digital marketing solutions crafted with precision and expertise. We help premium brands achieve exceptional digital performance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Button 
              onClick={() => scrollToElement("services")}
              className="px-8 py-6 bg-primary text-white rounded hover:bg-opacity-90 transition-all font-['Montserrat'] font-medium text-center h-auto"
            >
              Explore Our Services
            </Button>
            
            <Button 
              onClick={() => scrollToElement("contact")}
              variant="outline"
              className="px-8 py-6 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white transition-all font-['Montserrat'] font-medium text-center h-auto"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
