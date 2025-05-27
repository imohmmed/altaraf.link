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
    </div>
  );
}
