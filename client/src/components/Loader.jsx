import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-bg-dark z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div 
        className="relative flex items-center justify-center w-40 h-40"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Mocking the Logo structure with an SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Green Base Line */}
          <motion.path 
            d="M 12 90 L 88 90" 
            stroke="#39FF14" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />

          {/* House Roof */}
          <motion.path 
            d="M 10 50 L 50 20 L 90 50" 
            stroke="#FFFFFF" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Chimney */}
          <motion.path
            d="M 76 37 V 20"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="square"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />

          {/* House Walls */}
          <motion.path 
            d="M 25 45 L 25 85 M 75 45 L 75 85" 
            stroke="#FFFFFF" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Solid Torso */}
          <motion.path
            d="M 50 45 L 50 68"
            stroke="#FFFFFF"
            strokeWidth="15"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
          />

          {/* Upper Thighs connecting to torso */}
          <motion.path
            d="M 50 66 L 36 78 M 50 66 L 64 78"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          />

          {/* Lower legs */}
          <motion.path
            d="M 36 78 L 47 84 M 64 78 L 53 84"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Arms */}
          <motion.path
            d="M 45 46 C 36 46 34 50 34 50 L 34 38 M 55 46 C 64 46 66 50 66 50 L 66 38"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Background Slit for Torso (Creates the split chest effect) */}
          <motion.path
            d="M 50 48 L 50 70"
            stroke="#0A0A0A"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeInOut" }}
          />

          {/* Figure Head */}
          <motion.circle 
            cx="50" cy="34" r="4.5" 
            fill="#FFFFFF" 
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 1.8, type: "spring" }}
          />

          {/* Dumbbells */}
          <motion.g 
            stroke="#39FF14" 
            strokeLinecap="round" 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 2, type: "spring" }}
          >
            {/* Left Dumbbell */}
            <path d="M 31 38 L 37 38" strokeWidth="2.5" />
            <path d="M 30 33 L 30 43 M 38 33 L 38 43" strokeWidth="3.5" />
            
            {/* Right Dumbbell */}
            <path d="M 63 38 L 69 38" strokeWidth="2.5" />
            <path d="M 62 33 L 62 43 M 70 33 L 70 43" strokeWidth="3.5" />
          </motion.g>
        </svg>
      </motion.div>
      <motion.div
        className="overflow-hidden mt-6"
      >
        <motion.h1 
          className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent tracking-wider uppercase"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          THE MYOSORE FITNESS
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
