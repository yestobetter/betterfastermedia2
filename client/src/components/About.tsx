import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Lock, Shield } from "lucide-react";
import TeamMemberCard from "./ui/team-member-card";

// Team members data
const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "Sarah Johnson",
    role: "Director of Analytics",
    bio: "15+ years experience in analytics and data strategy for Fortune 500 companies."
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "David Chen",
    role: "SEO Strategist",
    bio: "Expert in technical SEO and content strategy with proven success across industries."
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "Emma Roberts",
    role: "PPC Director",
    bio: "Specialized in performance marketing and paid media optimization for luxury brands."
  },
  {
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "James Martinez",
    role: "Technical Director",
    bio: "Expert in web development, GTM implementation, and technical integrations."
  }
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 });

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-primary mb-6">About BetterFaster Media</h2>
            <p className="text-lg text-[#94a3b8] mb-6">At BetterFaster Media, we combine strategic insight with technical expertise to deliver exceptional digital marketing solutions for premium brands.</p>
            <p className="text-lg text-[#94a3b8] mb-6">Our team brings over 15 years of experience in analytics, digital marketing, and technology implementation to drive meaningful results for our clients.</p>
            <p className="text-lg text-[#94a3b8] mb-10">We believe in transparency, continuous innovation, and forming long-term partnerships that elevate your brand's digital presence and performance.</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="text-[#b59410] mr-4">
                  <Lock className="h-12 w-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Trusted by Industry Leaders</h3>
                  <p className="text-[#94a3b8]">85+ premium clients worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-[#b59410] mr-4">
                  <Shield className="h-12 w-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Certified Expertise</h3>
                  <p className="text-[#94a3b8]">Google & industry certifications</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#b59410] opacity-10 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="BetterFaster Media team collaboration" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0d9488] opacity-10 rounded-lg"></div>
          </motion.div>
        </div>
        
        <div className="mt-24" ref={teamRef}>
          <motion.h3 
            className="text-2xl font-['Playfair_Display'] font-semibold text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Our Team of Experts
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate={isTeamInView ? "show" : "hidden"}
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
