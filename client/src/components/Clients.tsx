import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Clients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <motion.p 
          className="text-center text-[#94a3b8] mb-10 uppercase tracking-wider font-medium text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Trusted by leading brands worldwide
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Client logos would be actual client logos in production */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div 
              key={index}
              className="h-12 w-24 bg-gray-100 rounded flex items-center justify-center text-[#94a3b8]"
              variants={item}
            >
              Client {index}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
