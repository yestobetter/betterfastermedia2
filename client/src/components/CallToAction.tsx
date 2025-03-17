import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center" ref={sectionRef}>
        <motion.h2 
          className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Elevate Your Digital Strategy?
        </motion.h2>
        
        <motion.p 
          className="text-lg mb-10 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Partner with our team of experts to transform your digital presence and achieve exceptional results.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            onClick={() => scrollToElement("contact")}
            className="inline-block px-8 py-6 bg-white text-primary rounded font-['Montserrat'] font-medium h-auto hover:bg-white"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
