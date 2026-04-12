import { motion } from 'framer-motion';
import { ExternalLink, Calculator } from 'lucide-react';

const Tools = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-bg-slate"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Fitness <span className="text-primary">Tools</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Access our specialized tools to assist you on your health and fitness journey.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.a
            href="YOUR_EXTERNAL_LINK_HERE" 
            target="_blank" 
            rel="noreferrer"
            className="group relative glass-panel p-8 rounded-2xl border border-white/5 overflow-hidden w-full max-w-md hover:border-primary/50 transition-all duration-300 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl -z-10"></div>
            
            <div className="flex items-start justify-between">
              <div className="p-3 bg-primary/10 rounded-xl text-primary inline-flex mb-6 border border-primary/20">
                <Calculator size={32} />
              </div>
              <div className="p-2 bg-white/5 rounded-full text-text-muted group-hover:text-primary transition-colors">
                <ExternalLink size={20} />
              </div>
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-primary transition-colors">
              Calorie Calculator
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              Determine your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). Find out exactly how many calories you need to consume to meet your fitness goals.
            </p>

            <span className="inline-flex items-center text-primary font-semibold group-hover:underline">
              Launch Tool
            </span>
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
};

export default Tools
