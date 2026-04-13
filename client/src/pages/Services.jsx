import { motion } from 'framer-motion';
import { Dumbbell, HeartPulse, Trophy, Activity, Apple, Users, Brain, Home as HomeIcon, Smile, Scale } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: 'Personal Training at Home',
    description: 'Customized workout plans tailored to your specific goals and schedule in the comfort of your home. Get 1-on-1 attention to maximize results.',
    icon: <HomeIcon className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Strength, Endurance, Flexibility & Coordination',
    description: 'Comprehensive functional training programs to build overall physical capability and performance.',
    icon: <Dumbbell className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Recreation for Children',
    description: 'Fun and engaging physical activities designed specifically to keep kids active, healthy, and happy.',
    icon: <Smile className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Rehabilitation Exercises',
    description: 'Guided recovery exercises to heal injuries safely, strengthen affected areas, and prevent future complications.',
    icon: <Activity className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Weight Gain & Weight Loss Programs',
    description: 'Structured nutrition and exercise plans designed for sustainable weight management and overall health improvement.',
    icon: <Scale className="w-10 h-10 text-primary" />,
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Exercise Program for Senior Citizens',
    description: 'Specially designed exercise programs focused on strength, balance, and mobility to ensure healthy aging and vitality.',
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    title: 'Sports Coaching for Kids & Adults',
    description: 'Advanced training techniques to improve athletic performance, agility, and sport-specific skills across all ages.',
    icon: <Trophy className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Nutritional Counseling',
    description: 'Expert dietary guidance to support your fitness journey, build healthy eating habits, and fuel your body for optimal performance.',
    icon: <Apple className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop'
  },
  {
    id: 9,
    title: 'Life Coach & NLP Therapist',
    description: 'Mental and emotional support techniques to help you overcome barriers, build healthy habits, and develop a winner\'s mindset.',
    icon: <Brain className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 10,
    title: 'Cooperative Session',
    description: 'Group training and partner workouts that foster teamwork, accountability, and shared fitness goals.',
    icon: <Users className="w-10 h-10 text-primary" />,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen bg-bg-dark"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Elite <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            className="text-text-muted text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a wide range of specialized programs designed by experts to help you achieve your unique fitness goals.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesList.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-panel rounded-2xl overflow-hidden relative"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30 transition-colors duration-300" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-bg-dark p-3 rounded-xl border border-white/10">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading mb-3 text-text-main group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
