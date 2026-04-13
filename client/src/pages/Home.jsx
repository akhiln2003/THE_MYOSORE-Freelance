import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Dumbbell, HeartPulse, Trophy, Activity, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: "Rachit Ahuja",
    time: "8 minutes ago",
    text: "I have been training with The Mysore Fitness for some time now, and my experience has been absolutely fantastic! My personal trainer, Shiju, is truly exceptional. He not only customizes my workouts based on my fitness level and goals but also ensures that my overall health and well-being are a priority.\n\nWhat I appreciate most is Shiju's dedication and motivation—he goes the extra mile to keep me on track, ensuring I stay consistent and achieve real results.",
    rating: 5,
  },
  {
    name: "Krish Jindal",
    time: "4 hours ago",
    text: "Training at The Mysore Fitness has been a game changer for me. One of the trainers, Mr. Shiju provided me with fully personalised fitness sessions and paid close attention to technique, progress, and recovery. He pushes you to do better without risking injury, which I really appreciated. If you want real results and a trainer who genuinely cares about your growth, this is the place.",
    rating: 5,
  },
  {
    name: "Anju Gupta",
    time: "10 minutes ago",
    text: "I am having my fitness training under my Personal Trainer Shiju and I am much much better and happy with his efforts, I am 68 years old and I find myself more fit than ever before. He is keeping watch on my calorie intake, Carbs and protein too. Thanks Shiju for your support... Now I am really blessed 😇 Best part about him is that after my session he stretches my whole body to make my muscle relaxed so that I don't feel any pain.",
    rating: 5,
  },
  {
    name: "tushar jindal",
    time: "10 months ago",
    text: "For the past eight years, I had only been thinking about getting fit, but my food habits were terrible. I was out of shape for almost ten years. Then... I met Shiju. To be honest, at first, I thought it was impossible—but now, I have abs! 🥺 Everyone is shocked. Coach Shiju made my transformation journey simple. I can't explain my happiness in words, thanks to THE MYOSORE FITNESS and Mr. Shiju for this amazing Journey.",
    rating: 5,
  },
  {
    name: "Shruti Gupta",
    time: "11 months ago",
    text: "Very good fitness trainers. I have been training from Arya from over 10months now, and she takes care of all my fitness goals and overall wellness.\n\nWould recommend to everyone.",
    rating: 5,
  },
  {
    name: "Ayushi Jindal",
    time: "10 months ago",
    text: "Arya is an exceptional personal trainer. Her personalized approach and deep knowledge of fitness makes each session effective and enjoyable.\n\nHighly recommend for anyone looking to improve their health & fitness.",
    rating: 5,
  }
];

const servicesList = [
  { id: 1, title: 'Personal Training', description: 'Customized workout plans tailored to your specific goals and schedule.', icon: <Dumbbell className="w-8 h-8 text-primary" /> },
  { id: 2, title: 'Senior Citizen Fitness', description: 'Specially designed exercise programs focused on strength and mobility.', icon: <HeartPulse className="w-8 h-8 text-primary" /> },
  { id: 3, title: 'Sports Coaching', description: 'Advanced training techniques for kids and adults to improve performance.', icon: <Trophy className="w-8 h-8 text-primary" /> },
  { id: 4, title: 'Rehabilitation', description: 'Guided recovery exercises to heal injuries safely and strengthen affected areas.', icon: <Activity className="w-8 h-8 text-primary" /> }
];

const faqs = [
  {
    question: "Does sweating mean fat loss?",
    answer: "No, sweating does not directly mean fat loss. Sweat is your body's way of cooling down. You may lose temporary water weight, but actual fat loss happens when you burn more calories than you consume over time."
  },
  {
    question: "What is the most important factor for weight loss?",
    answer: "The most important factor is a calorie deficit — burning more calories than you eat. Along with that, strength training, proper nutrition (especially protein), sleep, and consistency play a key role."
  },
  {
    question: "Can I lose weight without going to the gym?",
    answer: "Yes, weight loss is possible without the gym through proper diet control and physical activity like walking, running, or home workouts. However, strength training helps maintain muscle and improves overall body composition."
  },
  {
    question: "Why am I not losing weight even after working out?",
    answer: "Common reasons include:\n• Eating more calories than you think\n• Lack of consistency\n• Poor sleep\n• High stress levels\n• Not tracking progress properly\n\nWeight loss requires a combination of training, nutrition, and lifestyle balance."
  },
  {
    question: "Is cardio enough for fat loss?",
    answer: "Cardio helps burn calories, but it is not enough alone. Combining strength training + cardio + proper diet gives the best and sustainable results."
  },
  {
    question: "How long does it take to see results?",
    answer: "You may start noticing changes in 2–4 weeks, but visible and sustainable results usually take 8–12 weeks, depending on consistency, diet, and training intensity."
  }
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center parallax-bg"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.35) contrast(1.1)"
          }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-4 uppercase tracking-tight">
              Stronger <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Fitter</span> <br className="hidden md:block" />
              Better
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the difference. Fitness for a better tomorrow. Join THE MYOSORE FITNESS and transform your life with elite trainers.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-bg-dark font-bold text-lg px-8 py-4 rounded-full transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]">
                Book Free Trial
              </button>
            </Link>
            <a href="#about" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-text-main font-semibold text-lg px-8 py-4 rounded-full transition-colors hidden sm:block">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Overview */}
      <section id="about" className="py-24 bg-bg-dark relative border-b border-white/5">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Fitness for a <br/><span className="text-primary">Better Tomorrow</span></h2>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                At THE MYOSORE FITNESS, we deliver more than just workouts. We provide a transformational experience tailored to your unique body, lifestyle, and goals. 
              </p>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Whether you need dedicated 1-on-1 personal training, sports specific coaching, rehabilitation or senior wellness programs, our elite trainers—including Coach Shiju and Coach Arya—are committed to guiding you every step of the way.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors group">
                Meet our trainers <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden glass-panel p-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Equipment" 
                className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-8 left-[-20px] bg-primary text-bg-dark font-bold px-6 py-3 rounded-r-xl shadow-lg transform -rotate-2">
                Premium Facility
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-bg-slate relative">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our <span className="text-primary">Services</span></h2>
              <p className="text-text-muted text-lg max-w-xl">Comprehensive fitness solutions designed to challenge and change you.</p>
            </motion.div>
            <Link to="/services" className="hidden md:flex items-center text-primary hover:text-white transition-colors group shrink-0 mb-2">
              View All <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-text-main">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation/Reviews Section */}
      <section className="py-24 bg-bg-dark relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Client <span className="text-primary">Stories</span></h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Real people, actual results. See what our community has achieved with dedicated effort and expert guidance.</p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                className="break-inside-avoid glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-500 relative group bg-white/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-8 right-8 text-white/[0.03] group-hover:text-primary/[0.08] transition-colors duration-500">
                  <Quote size={80} />
                </div>
                
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center text-primary font-bold text-xl border border-primary/30 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading text-base tracking-wide">{review.name}</h4>
                    <p className="text-xs text-text-muted mt-1 uppercase tracking-widest">{review.time} • Google</p>
                  </div>
                </div>

                <p className="text-text-main font-light leading-relaxed mb-8 whitespace-pre-wrap text-[16px] relative z-10">
                  "{review.text}"
                </p>

                <div className="flex relative z-10 mt-auto">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent w-5 h-5 mr-1 drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bg-slate relative">
        <div className="max-w-screen-md mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">Have questions? We are here to help you understand your fitness journey better.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-lg font-bold font-heading text-text-main group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-primary shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-white/5 pt-4 whitespace-pre-wrap">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
