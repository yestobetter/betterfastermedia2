import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import TestimonialCard from "./ui/testimonial-card";

// Import images
import testimonial1 from "../assets/images/testimonial-1.jpg";
import bw2 from "../assets/images/bw2.jpg";
import bm3 from "../assets/images/bm3.png";

// Testimonials data
const testimonials = [
  {
    quote: "I was skeptical at first, but working with TwoBirdsPress completely changed our approach to analytics. Emily and her team took the time to understand our business needs, set up custom dashboards that actually make sense, and check in regularly. Our ROI has increased by 32% since partnering with them last year!",
    name: "Nathan Thompson",
    role: "Marketing Director, Luxury Retail Brand",
    image: testimonial1
  },
  {
    quote: "After wasting money on three other SEO agencies that promised the world but delivered nothing, TwoBirdsPress was like a breath of fresh air. They didn't make unrealistic promises - instead they showed us exactly what they were doing and why. Six months in and we're ranking on page 1 for terms we'd given up hope on. Their transparency is refreshing!",
    name: "Rebecca Wilson",
    role: "CEO, Boutique Hospitality Group",
    image: bw2
  },
  {
    quote: "My team struggled for months trying to make sense of our website data. TwoBirdsPress stepped in, fixed our broken Google Tag Manager setup, and created reports that our executives actually understand and use. Best of all, they taught our internal team how to maintain everything instead of keeping us dependent on them. Couldn't recommend them enough!",
    name: "Cal Rasmussen",
    role: "Digital Director, Financial Services",
    image: bm3
  }
];

const Testimonials = () => {
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
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#94a3b8]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear from the brands we've helped transform their digital presence and performance.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
