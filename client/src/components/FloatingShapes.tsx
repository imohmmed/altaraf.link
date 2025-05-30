import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="floating-shapes">
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="floating-shape w-32 h-32 bg-white rounded-full"
        style={{ top: "20%", left: "10%" }}
      />
      
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="floating-shape w-24 h-24 bg-accent rounded-full"
        style={{ top: "60%", right: "10%" }}
      />
      
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="floating-shape w-40 h-40 bg-white rounded-full"
        style={{ top: "80%", left: "20%" }}
      />
      
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="floating-shape w-28 h-28 bg-accent rounded-full"
        style={{ top: "15%", right: "25%" }}
      />
      
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="floating-shape w-20 h-20 bg-white rounded-full"
        style={{ top: "40%", left: "5%" }}
      />
      
      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="floating-shape w-36 h-36 bg-accent rounded-full"
        style={{ top: "70%", right: "30%" }}
      />
      
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="floating-shape w-16 h-16 bg-white rounded-full"
        style={{ top: "25%", left: "40%" }}
      />
    </div>
  );
}
