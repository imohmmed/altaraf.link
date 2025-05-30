import { motion } from "framer-motion";
import { useState } from "react";

interface LinkCardProps {
  icon: string;
  title: string;
  description: string;
  url?: string;
  delay?: number;
}

export default function LinkCard({
  icon,
  title,
  description,
  url = "#",
  delay = 0,
}: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Create ripple effect
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.8s linear;
      pointer-events: none;
      z-index: 1;
    `;
    
    card.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, y: -8, rotateX: 2 }}
      whileTap={{ scale: 0.98 }}
      className="link-card backdrop-blur-lg rounded-[2rem] px-8 py-6 border block relative overflow-hidden cursor-pointer shadow-2xl"
      style={{ 
        backgroundColor: 'hsl(220, 13%, 18%)',
        borderColor: 'hsl(220, 13%, 35%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-6 -ml-4">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="icon-container w-16 h-16 flex items-center justify-center rounded-2xl border"
            style={{ 
              background: 'linear-gradient(135deg, hsl(220, 13%, 22%) 0%, hsl(220, 13%, 16%) 100%)',
              borderColor: 'hsl(220, 13%, 35%)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            <i className={`${icon} text-2xl text-accent`} />
          </motion.div>
          <div>
            <h3 className="text-2xl font-cairo font-bold text-white mb-2 tracking-wide">
              {title}
            </h3>
            <p className="font-tajawal text-white/90 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        
        <motion.div
          animate={{
            x: isHovered ? 8 : 0,
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-accent"
        >
          <i className="fas fa-arrow-left text-2xl" style={{ 
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 8px rgba(255, 165, 0, 0.4))',
            textShadow: '0 0 12px rgba(255, 165, 0, 0.6)'
          }} />
        </motion.div>
      </div>
      
      {/* Hover gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl"
      />
    </motion.a>
  );
}
