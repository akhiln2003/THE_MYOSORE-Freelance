import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-bg-dark z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div 
        className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Locking the exact logo file */}
        <motion.img 
          src="/logo.png" 
          alt="The Myosore Fitness Logo"
          className="w-full h-full object-contain filter drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>
      <motion.div
        className="overflow-hidden "
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
