import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-8 bg-brand-bg/80 backdrop-blur-sm border-b border-editorial/10"
    >
      <div className="text-xs uppercase tracking-[0.4em] font-black">
        Caroline Li <span className="mx-2 opacity-30">/</span> Portfolio
      </div>
      
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
        <a href="#work" className="hover:italic transition-all">Projects</a>
        <a href="#about" className="hover:italic transition-all">Manifesto</a>
        <a href="#contact" className="hover:italic transition-all">Connect</a>
      </div>

      <div className="md:hidden flex items-center">
         <div className="h-px w-6 bg-brand-paper" />
      </div>
    </motion.nav>
  );
}
