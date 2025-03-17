import { motion } from "framer-motion";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMemberCard = ({ image, name, role, bio }: TeamMemberCardProps) => {
  // Animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      className="bg-[#f8fafc] p-6 rounded-lg text-center"
      variants={item}
    >
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h4 className="text-xl font-semibold text-primary mb-2">{name}</h4>
      <p className="text-[#0d9488] mb-4">{role}</p>
      <p className="text-[#94a3b8] text-sm">{bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
