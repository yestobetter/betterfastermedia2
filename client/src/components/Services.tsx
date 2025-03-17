import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import ServiceCard from "./ui/service-card";
import { 
  BarChart3, 
  Tag, 
  Search, 
  DollarSign, 
  MessageSquare, 
  Code 
} from "lucide-react";

// Service data
const services = [
  {
    icon: <BarChart3 className="h-12 w-12 stroke-primary" />,
    title: "Google Analytics Management",
    description: "With over 15 years of expertise, our team provides comprehensive analytics solutions to track, analyze, and optimize your digital performance with precision.",
    features: [
      "GA4 Implementation & Migration",
      "Custom Reporting & Dashboards",
      "Data Analysis & Strategic Insights"
    ]
  },
  {
    icon: <Tag className="h-12 w-12 stroke-primary" />,
    title: "Google Tag Manager Services",
    description: "Our GTM experts implement sophisticated tracking solutions to capture every meaningful interaction across your digital platforms.",
    features: [
      "Advanced Tag Implementation",
      "Custom Variable & Trigger Configuration",
      "Server-Side Tagging Solutions"
    ]
  },
  {
    icon: <Search className="h-12 w-12 stroke-primary" />,
    title: "Premium SEO Services",
    description: "We deliver industry-leading SEO strategies that elevate your visibility in search results and drive qualified organic traffic to your digital platforms.",
    features: [
      "Technical SEO Optimization",
      "Content Strategy & Development",
      "Authority Building & Link Acquisition"
    ]
  },
  {
    icon: <DollarSign className="h-12 w-12 stroke-primary" />,
    title: "Paid Media & PPC",
    description: "Strategic paid advertising campaigns across multiple platforms to maximize ROI and drive qualified traffic to your business.",
    features: [
      "Google Ads & Microsoft Advertising",
      "Social Media Advertising",
      "Display & Programmatic Advertising"
    ]
  },
  {
    icon: <MessageSquare className="h-12 w-12 stroke-primary" />,
    title: "Social Media Management",
    description: "Comprehensive social media strategies that enhance brand presence, engagement, and conversions across all relevant platforms.",
    features: [
      "Content Creation & Curation",
      "Community Management",
      "Performance Analysis & Strategy"
    ]
  },
  {
    icon: <Code className="h-12 w-12 stroke-primary" />,
    title: "Web Development & Design",
    description: "Custom, performance-optimized websites and applications that deliver exceptional user experiences and support your business objectives.",
    features: [
      "Responsive Website Development",
      "UI/UX Design & Optimization",
      "E-commerce & Custom Applications"
    ]
  }
];

const Services = () => {
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
    <section id="services" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Our Premium Services
          </motion.h2>
          <motion.p 
            className="text-lg text-[#94a3b8]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We deliver exceptional digital marketing solutions with unparalleled expertise and precision.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
