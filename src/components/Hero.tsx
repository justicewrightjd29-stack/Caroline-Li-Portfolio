import { motion } from "motion/react";
import carolinePortrait from "../assets/images/Caroline_6578.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 lg:px-12 pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[14vw] md:text-[min(180px,12vw)] leading-[0.8] tracking-tighter uppercase italic -skew-x-6 relative inline-block w-full"
          >
            Caroline 
             <br />
            <span className="opacity-10 text-outline">Li</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 mt-12 md:mt-16">
            <div className="md:w-3/5 border-l-2 border-brand-paper pl-6">
              <span className="tracking-editorial mb-4 block opacity-60">Design & Interaction</span>
              <p className="text-serif text-xl md:text-2xl leading-snug">
                Master’s Scholar at UW–Madison. Crafting meaningful user experiences through the intersection of UX design, 3D storytelling, and social innovation.
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col justify-end">
              <span className="text-[10px] uppercase font-bold opacity-30 mb-2">Current Pursuit</span>
              <p className="text-xs uppercase tracking-widest font-bold">Design + Innovation @ UW-Madison</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[3/4] bg-neutral-100 border border-brand-paper/10 relative group overflow-hidden shadow-2xl"
          >
            <img 
              src={carolinePortrait} 
              alt="Caroline Li Portrait" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[15px] border-white/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
