import { motion } from 'framer-motion';
import { Dumbbell, HeartPulse, Trophy, Activity, Users, Home as HomeIcon, Smile, Scale } from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: 'Personal Training at Home',
    description: 'Customized workout plans tailored to your specific goals and schedule in the comfort of your home. Get 1-on-1 attention to maximize results.',
    icon: <HomeIcon className="w-10 h-10 text-primary" />,
    image: '/services/personalFitnessTrainingAtHome.jpeg'
  },
  {
    id: 2,
    title: 'Strength & Endurance ',
    description: 'Comprehensive functional training programs to build strength, endurance, flexibility, and overall physical performance.',
    icon: <Dumbbell className="w-10 h-10 text-primary" />,
    image: '/services/strengthAndEndurance.jpeg'
  },
  {
    id: 3,
    title: 'Recreation for Children',
    description: 'Fun and engaging physical activities designed specifically to keep kids active, healthy, and happy.',
    icon: <Smile className="w-10 h-10 text-primary" />,
    image: '/services/recreationForChildren.jpeg'
  },
  {
    id: 4,
    title: 'Yoga & Flexibility Training',
    description: 'Mindful stretching and flexibility sessions that improve mobility, reduce injury risk, and support recovery.',
    icon: <Activity className="w-10 h-10 text-primary" />,
    image: '/services/yogaAndFlexibility.jpeg'
  },
  {
    id: 5,
    title: 'Weight Gain & Weight Loss',
    description: 'Structured nutrition and exercise plans designed for sustainable weight management and overall health improvement.',
    icon: <Scale className="w-10 h-10 text-primary" />,
    image: '/services/weightGainAndWeightLoss.jpeg'
  },
  {
    id: 6,
    title: 'Exercise Program for Senior Citizens',
    description: 'Specially designed exercise programs focused on strength, balance, and mobility to ensure healthy aging and vitality.',
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    image: '/services/exerciseProgramForSeniorCitizens.jpeg'
  },
  {
    id: 7,
    title: 'Sports Coaching for Kids & Adults',
    description: 'Advanced training techniques to improve athletic performance, agility, and sport-specific skills across all ages.',
    icon: <Trophy className="w-10 h-10 text-primary" />,
    image: '/services/sportsCoachingForKidsAndAdults.jpeg'
  },
  {
    id: 8,
    title: 'Cooperative Session',
    description: 'Group training and partner workouts that foster teamwork, accountability, and shared fitness goals.',
    icon: <Users className="w-10 h-10 text-primary" />,
    image: '/services/coperativeSession.jpeg'
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
