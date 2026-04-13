import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Rachit Ahuja",
    time: "8 minutes ago",
    text: "I have been training with THE MYOSORE FITNESS for some time now, and my experience has been absolutely fantastic! My personal trainer, Shiju, is truly exceptional. He not only customizes my workouts based on my fitness level and goals but also ensures that my overall health and well-being are a priority.\n\nWhat I appreciate most is Shiju's dedication and motivation—he goes the extra mile to keep me on track, ensuring I stay consistent and achieve real results.",
    rating: 5,
  },
  {
    name: "Krish Jindal",
    time: "4 hours ago",
    text: "Training at THE MYOSORE FITNESS has been a game changer for me. One of the trainers, Mr. Shiju provided me with fully personalised fitness sessions and paid close attention to technique, progress, and recovery. He pushes you to do better without risking injury, which I really appreciated. If you want real results and a trainer who genuinely cares about your growth, this is the place.",
    rating: 5,
  },
  {
    name: "Anju Gupta",
    time: "10 minutes ago",
    text: "I am having my fitness training under my Personal Trainer Shiju and I am much much better and happy with his efforts. I am 68 years old and I find myself more fit than ever before. He is keeping watch on my calorie intake, Carbs and protein too.\n\nThanks Shiju for your support... Now I am really blessed 😇 Best part about him is that after my session he stretches my whole body to make my muscle relaxed so that I don't feel any pain.",
    rating: 5,
  },
  {
    name: "tushar jindal",
    time: "10 months ago",
    text: "For the past eight years, I had only been thinking about getting fit, but my food habits were terrible. I was out of shape for almost ten years. Then... I met Shiju. To be honest, at first, I thought it was impossible—but now, I have abs! 🥺 Everyone is shocked.\n\nCoach Shiju made my transformation journey simple. I can't explain my happiness in words, thanks to THE MYOSORE FITNESS and Mr. Shiju for this amazing Journey.",
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

const Testimonials = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-4 py-8">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 relative z-10">
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.15, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="break-inside-avoid relative p-8 rounded-3xl bg-bg-slate/80 backdrop-blur-xl border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(57,255,20,0.15)] group overflow-hidden"
          >
            {/* Subtle inner top glow */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Decorative Quote Mark Watermark */}
            <div className="absolute -top-4 -right-2 text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 rotate-12">
              <Quote size={120} />
            </div>
            
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark p-[2px] shadow-[0_0_15px_rgba(57,255,20,0.2)] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-shadow duration-500">
                <div className="w-full h-full bg-bg-dark rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
              </div>
              <div>
                <h4 className="font-heading font-bold text-[17px] text-white group-hover:text-primary transition-colors duration-300">{review.name}</h4>
                <div className="text-[13px] text-text-muted mt-1 uppercase tracking-wider font-medium flex items-center gap-2">
                  <span>{review.time}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="text-primary/80">Google</span>
                </div>
              </div>
            </div>

            <p className="text-text-main/90 text-[16px] font-light leading-relaxed mb-8 whitespace-pre-wrap relative z-10">
              "{review.text}"
            </p>

            <div className="flex space-x-1 mt-auto relative z-10">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="text-accent fill-accent w-[18px] h-[18px] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
