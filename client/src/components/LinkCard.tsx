import { motion } from "framer-motion";
import { useState } from "react";

interface LinkCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  delay?: number;
}

export default function LinkCard({
  icon,
  title,
  description,
  buttonText,
  buttonIcon,
  delay = 0,
}: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Create ripple effect
    const button = e.currentTarget.querySelector('.premium-button') as HTMLElement;
    if (!button) return;

    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="link-card bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="icon-container p-4 rounded-2xl"
          >
            <i className={`${icon} text-3xl text-accent`} />
          </motion.div>
          <div>
            <h3 className="text-2xl font-cairo font-bold text-white mb-2">
              {title}
            </h3>
            <p className="font-tajawal text-white/80">{description}</p>
          </div>
        </div>
        
        <motion.a
          href="https://t.me/mohmmed"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="premium-button px-8 py-4 rounded-2xl text-white font-cairo font-semibold text-lg relative overflow-hidden"
        >
          <i className={`${buttonIcon} ml-2`} />
          {buttonText}
        </motion.a>
      </div>
    </motion.div>
  );
}
