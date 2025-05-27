import { motion } from "framer-motion";
import { useState } from "react";

interface LinkCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function LinkCard({
  icon,
  title,
  description,
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
      href="https://t.me/mohmmed"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="link-card bg-white/15 backdrop-blur-md rounded-3xl px-8 py-5 border block relative overflow-hidden cursor-pointer"
      style={{ borderColor: 'hsl(220, 13%, 25%)' }}
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
              backgroundColor: 'hsl(220, 13%, 18%)',
              borderColor: 'hsl(220, 13%, 25%)'
            }}
          >
            <i className={`${icon} text-2xl text-accent`} />
          </motion.div>
          <div>
            <h3 className="text-2xl font-cairo font-bold text-white mb-2">
              {title}
            </h3>
            <p className="font-tajawal text-white/80">{description}</p>
          </div>
        </div>
        
        <motion.div
          animate={{
            x: isHovered ? 5 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 flex items-center justify-center rounded-xl border"
          style={{ borderColor: 'hsl(220, 13%, 25%)' }}
        >
          <i className="fas fa-arrow-left text-xl text-accent" />
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
