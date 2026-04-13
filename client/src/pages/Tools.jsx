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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {[
            {
              title: "Calorie Calculator",
              desc: "Determine your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). Find out exactly how many calories you need.",
              link: "https://www.calculator.net/calorie-calculator.html"
            },
            {
              title: "Body Fat Calculator",
              desc: "Estimate your body fat percentage. Keep track of your body composition and align it with your fitness goals effectively.",
              link: "https://www.calculator.net/body-fat-calculator.html"
            },
            {
              title: "BMI Calculator",
              desc: "Calculate your Body Mass Index (BMI) to check if your weight is in a healthy range for your height. A simple and effective tool.",
              link: "https://www.calculator.net/bmi-calculator.html"
            }
          ].map((tool, idx) => (
            <motion.a
              key={idx}
              href={tool.link} 
              target="_blank" 
              rel="noreferrer"
              className="group relative glass-panel p-8 rounded-2xl border border-white/5 overflow-hidden w-full hover:border-primary/50 transition-all duration-300 block flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
            >
              {/* Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl -z-10"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary inline-flex border border-primary/20">
                  <Calculator size={32} />
                </div>
                <div className="p-2 bg-white/5 rounded-full text-text-muted group-hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                {tool.desc}
              </p>

              <span className="inline-flex items-center text-primary font-semibold group-hover:underline mt-auto">
                Launch Tool
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Tools
