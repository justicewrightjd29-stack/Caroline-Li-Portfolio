import { motion } from "motion/react";

interface HeroProps {
  onAboutClick: () => void;
  onWixClick: (url: string) => void;
}

export function Hero({ onAboutClick, onWixClick }: HeroProps) {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 lg:px-12 pt-32 pb-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[14vw] md:text-[min(180px,12vw)] leading-[0.8] tracking-tighter uppercase italic -skew-x-6 relative inline-block"
            >
              Caroline 
               <br />
              <span className="opacity-10 text-outline text-brand-paper">Li</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pb-4 flex flex-col gap-4"
            >
              <button 
                onClick={() => onWixClick("https://liyushan7ms.wixsite.com/caroline#about")}
                className="group relative flex items-center justify-between gap-8 px-10 py-5 bg-brand-paper text-brand-bg rounded-none font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:bg-opacity-90 shadow-xl cursor-pointer min-w-[280px]"
              >
                <span className="relative z-10">Wix About Me</span>
                <span className="group-hover:translate-x-1 transition-transform font-serif italic text-xl relative z-10">↗</span>
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button 
                onClick={onAboutClick}
                className="group relative flex items-center justify-between gap-8 px-10 py-5 border border-brand-paper/30 text-brand-paper rounded-none font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:bg-brand-paper hover:text-brand-bg cursor-pointer min-w-[280px]"
              >
                <span className="relative z-10">Personal Vibe Map</span>
                <span className="group-hover:translate-x-1 transition-transform font-serif italic text-xl relative z-10">→</span>
              </button>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-between border-t border-brand-paper/10 pt-12">
            <div className="md:w-1/2 border-l-2 border-brand-paper pl-6">
              <span className="tracking-editorial mb-4 block opacity-60">Design & Interaction</span>
              <p className="text-serif text-xl md:text-3xl leading-snug">
                Master’s Scholar at UW–Madison. Crafting meaningful user experiences through the intersection of UX design, 3D storytelling, and social innovation.
              </p>
            </div>
            <div className="flex flex-col justify-end text-right">
              <span className="text-[10px] uppercase font-bold opacity-30 mb-2">Current Pursuit</span>
              <p className="text-xs uppercase tracking-widest font-bold">Design + Innovation @ UW-Madison</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
