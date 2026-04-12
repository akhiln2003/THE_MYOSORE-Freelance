import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-bg-slate"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Mission Section */}
        <section className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Fitness for a <span className="text-primary">Better Tomorrow</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              At THE MYOSORE FITNESS, we believe that true transformation goes beyond physical appearance. 
              Our holistic approach integrates personalized training methods, nutritional guidance, and mental well-being 
              to forge a community of individuals committed to bettering themselves every day.
            </p>
          </motion.div>
        </section>

        {/* Trainers Section - Hidden for now */}
        {false && (
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Meet Our <span className="text-primary">Elite Trainers</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Trainer 1: Shiju */}
            <motion.div 
              className="glass-panel rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-6 gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Coach Shiju" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2 text-primary">Coach Shiju</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider mb-4">Head Personal Trainer</p>
                <p className="text-text-main leading-relaxed">
                  With over 8 years of experience, Shiju specializes in extreme transformations and rehabilitation. 
                  He is known for his dedication, often going the extra mile to customize workouts based on your unique goals and fitness level.
                </p>
              </div>
            </motion.div>

            {/* Trainer 2: Arya */}
            <motion.div 
              className="glass-panel rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-6 gap-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 border-4 border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" 
                  alt="Coach Arya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2 text-primary">Coach Arya</h3>
                <p className="text-sm text-text-muted uppercase tracking-wider mb-4">Senior Fitness Expert & Wellness Coach</p>
                <p className="text-text-main leading-relaxed">
                  Arya brings a deep, personalized approach to fitness. She focuses on overall wellness, helping clients 
                  achieve their goals sustainably. Her sessions are not just effective but highly enjoyable, making fitness a lifestyle.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        )}
        {/* Testimonials Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Client <span className="text-primary">Success Stories</span></h2>
            <p className="text-text-muted mt-4 text-lg">Hear what our community has to say about their transformation journeys.</p>
          </div>
          <Testimonials />
        </section>

      </div>
    </motion.div>
  );
};

export default About;
