import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoImage from "@assets/IMG_6310.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 300);

    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'hsl(200, 100%, 40%)' }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <motion.img
            src={logoImage}
            alt="شركة التَرف"
            animate={{ 
              y: [-10, 10, -10],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 object-contain mx-auto"
          />
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 165, 0, 0.3)",
                "0 0 30px rgba(255, 165, 0, 0.6)",
                "0 0 20px rgba(255, 165, 0, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl font-cairo font-bold text-white mb-4"
        >
          شركة التَرف
        </motion.h1>

        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              className="w-3 h-3 bg-accent rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
