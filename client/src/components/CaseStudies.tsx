import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "./ui/case-study-card";

// Case studies data
const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "E-commerce Revenue Growth",
    description: "Increased online revenue by 136% through strategic analytics implementation and optimization.",
    tags: ["Analytics", "E-commerce"]
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "SEO Visibility Transformation",
    description: "Increased organic traffic by 215% and first-page rankings by 180% in a competitive market.",
    tags: ["SEO", "Content Strategy"]
  },
  {
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Integrated Marketing Success",
    description: "Comprehensive digital strategy resulting in 87% conversion rate increase and 42% cost reduction.",
    tags: ["PPC", "Analytics", "CRO"]
  }
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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

  return (
    <section id="case-studies" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Case Studies
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#94a3b8]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore how we've helped leading brands achieve extraordinary results through strategic digital solutions.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              image={study.image}
              title={study.title}
              description={study.description}
              tags={study.tags}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            variant="outline"
            className="inline-block px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white transition-all font-['Montserrat'] font-medium"
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
