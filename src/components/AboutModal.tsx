import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Book, Palette, Heart, Gamepad2, Users, Lightbulb } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWixClick: () => void;
}

export function AboutModal({ isOpen, onClose, onWixClick }: AboutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-bg/90 backdrop-blur-md z-[100] cursor-zoom-out"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-brand-bg border border-brand-paper/20 z-[101] overflow-y-auto scroll-smooth shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 px-8 py-6 bg-brand-bg/80 backdrop-blur-sm border-b border-brand-paper/10 flex justify-between items-center">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40">Caroline Li — Portfolio</span>
                  <h2 className="text-2xl font-serif mt-1 italic">Personal Vibe Map</h2>
                </div>
                <div className="h-4 w-px bg-brand-paper/20 hidden md:block" />
                <button 
                  onClick={onWixClick}
                  className="px-4 py-2 border border-brand-paper/20 hover:bg-brand-paper hover:text-brand-bg transition-all text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 group/wix"
                >
                  Visit Wix Profile
                  <span className="group-hover/wix:translate-x-1 transition-transform">→</span>
                </button>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-brand-paper hover:text-brand-bg rounded-full transition-colors group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Content - Aesthetic Vibe Map Layout */}
            <div className="p-8 lg:p-16 max-w-7xl mx-auto w-full relative">
              
              {/* Vibe Map Connections - Interactive SVG Layer */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                  {/* Connection from Center to Strengths */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    d="M 600,300 C 700,300 750,200 800,200" 
                    stroke="currentColor" strokeWidth="1" fill="none" className="text-brand-paper"
                  />
                  {/* Connection from Center to Intellectual */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.7 }}
                    d="M 400,600 C 300,600 250,700 200,800" 
                    stroke="currentColor" strokeWidth="1" fill="none" className="text-brand-paper"
                  />
                   {/* Decorative circles at connection points */}
                  <circle cx="600" cy="300" r="3" fill="currentColor" className="text-brand-paper" />
                  <circle cx="400" cy="600" r="3" fill="currentColor" className="text-brand-paper" />
                </svg>
              </div>

              {/* Background decorative elements */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full border border-brand-paper" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full border border-brand-paper rotate-45" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                
                {/* 01. CENTER IDENTITY */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-12 lg:col-span-8 p-12 bg-white/[0.02] border border-brand-paper/5 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                    <Sparkles className="w-48 h-48 -rotate-12" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-[9px] uppercase font-bold tracking-[0.5em] opacity-40 mb-8 block">01 / The Core Identity</span>
                    <h3 className="text-5xl md:text-8xl font-serif mb-6 leading-[0.85] tracking-tighter italic">
                      Caroline <br />
                      <span className="text-outline text-brand-paper opacity-20">Li</span>
                    </h3>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest opacity-60 mb-12 border-l-2 border-brand-paper/20 pl-8 mt-12 bg-brand-bg/50 backdrop-blur-sm p-4 w-fit">
                      <span className="hover:text-brand-paper transition-colors cursor-default">Creative Thinker</span>
                      <span className="hover:text-brand-paper transition-colors cursor-default">Media Designer</span>
                      <span className="hover:text-brand-paper transition-colors cursor-default">Community Builder</span>
                    </div>
                    <p className="text-xl md:text-2xl font-light opacity-50 max-w-2xl leading-relaxed italic border-r-2 border-brand-paper/5 pr-12">
                      "Bridging design, wellness, and social connection—bringing ideas to life while building meaningful relationships."
                    </p>
                  </div>
                </motion.div>

                {/* 02. STRENGTHS */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="md:col-span-12 lg:col-span-4 p-10 bg-brand-paper text-brand-bg relative overflow-hidden group/strengths shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover/strengths:scale-110 transition-transform duration-700">
                    <Lightbulb className="w-32 h-32 rotate-12" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-[0.5em] opacity-50 mb-12 block">02 / Key Strengths</span>
                  <div className="flex flex-col gap-8">
                    {[
                      'Creative Problem-solving',
                      'Strong Communication',
                      'Adaptability',
                      'Team Collaboration',
                      'Cross-disciplinary Thinking'
                    ].map((s, i) => (
                      <div key={s} className="group/item">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">0{i+1}</span>
                          <div className="h-px flex-1 mx-4 bg-brand-bg/20" />
                        </div>
                        <span className="text-lg font-serif italic block group-hover/item:translate-x-2 transition-transform duration-500">{s}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* 03. INTELLECTUAL */}
                <motion.div 
                  className="md:col-span-6 p-10 border border-brand-paper/5 bg-brand-paper/[0.01] hover:bg-brand-paper/[0.03] transition-colors group relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <Book className="w-32 h-32 rotate-12" />
                  </div>
                  <div className="flex justify-between items-center mb-16 relative z-10">
                    <Book className="w-6 h-6 opacity-40 group-hover:scale-110 transition-transform" />
                    <div className="flex gap-4">
                       {['curious', 'thoughtful', 'expressive'].map(v => (
                         <span key={v} className="text-[8px] font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">#{v}</span>
                       ))}
                    </div>
                  </div>
                  <h4 className="text-2xl font-serif mb-8 italic relative z-10">Intellectual & Creative</h4>
                  <ul className="space-y-6 relative z-10">
                    {[
                      'Passionate about reading & storytelling',
                      'Strong interest in visual communication',
                      'Skilled in media design & creative tools',
                      'Exploring new design aesthetics'
                    ].map(item => (
                      <li key={item} className="flex gap-6 items-start">
                        <div className="relative mt-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-paper/20 block z-10 relative" />
                          <span className="absolute inset-0 bg-brand-paper animate-ping rounded-full opacity-20" />
                        </div>
                        <span className="text-sm font-light opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* 04. DESIGN */}
                <motion.div 
                  className="md:col-span-6 p-10 border border-brand-paper/5 bg-brand-paper/[0.01] hover:bg-brand-paper/[0.03] transition-colors group relative overflow-hidden"
                >
                  <div className="absolute -left-4 -top-4 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <Palette className="w-32 h-32 -rotate-12" />
                  </div>
                  <div className="flex justify-between items-center mb-16 relative z-10">
                    <Palette className="w-6 h-6 opacity-40 group-hover:rotate-12 transition-transform" />
                    <div className="flex gap-4">
                       {['creative', 'detailed', 'innovative'].map(v => (
                         <span key={v} className="text-[8px] font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">#{v}</span>
                       ))}
                    </div>
                  </div>
                  <h4 className="text-2xl font-serif mb-8 italic relative z-10">Design & Creation</h4>
                  <ul className="space-y-6 relative z-10">
                    {[
                      'Combine creativity + functionality',
                      'Interested in digital media & branding',
                      'Enjoy working on various design projects',
                      'Visual identity & cinematic storytelling'
                    ].map(item => (
                      <li key={item} className="flex gap-6 items-start">
                         <div className="relative mt-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-paper/20 block z-10 relative" />
                          <span className="absolute inset-0 bg-brand-paper animate-ping rounded-full opacity-10" />
                        </div>
                        <span className="text-sm font-light opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* 05. WELLNESS & HOBBIES */}
                <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-8">
                  <div className="p-8 bg-brand-paper/[0.03] border border-brand-paper/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-2 bg-red-500/10 rounded-full">
                          <Heart className="w-4 h-4 text-red-500/60" />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em]">Wellness</h4>
                      </div>
                      <p className="text-sm font-light opacity-60 leading-relaxed mb-6">
                        Member of Yoga & Rock Climbing Clubs. Finding balance in body, mind, and life.
                      </p>
                    </div>
                    <div className="flex gap-4 border-t border-brand-paper/5 pt-6">
                      {['calm', 'active', 'disciplined'].map(v => (
                        <span key={v} className="text-[9px] font-mono opacity-30 italic">#{v}</span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-brand-paper/[0.03] border border-brand-paper/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-2 bg-blue-500/10 rounded-full">
                           <Gamepad2 className="w-4 h-4 text-blue-500/60" />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em]">Hobbies</h4>
                      </div>
                      <p className="text-sm font-light opacity-60 leading-relaxed mb-6">
                        Enjoy story-driven games and trying new experiences. Appreciating both social interaction and solo focus.
                      </p>
                    </div>
                    <div className="flex gap-4 border-t border-brand-paper/5 pt-6">
                      {['playful', 'curious', 'open-minded'].map(v => (
                        <span key={v} className="text-[9px] font-mono opacity-30 italic">#{v}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 06. SOCIAL */}
                <motion.div 
                  className="md:col-span-12 lg:col-span-7 p-12 border border-brand-paper/10 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000">
                    <Users className="w-64 h-64" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-16 h-16 bg-brand-paper/5 flex items-center justify-center border border-brand-paper/10 rotate-45 group-hover:rotate-0 transition-transform duration-700">
                        <Users className="w-6 h-6 opacity-40 -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
                      </div>
                      <h4 className="text-3xl font-serif italic">Social & Collaboration</h4>
                    </div>
                    <p className="text-lg font-light opacity-70 leading-relaxed mb-12 max-w-xl">
                      Passionate about connecting with people. Strong teamwork skills refined through collaborative design projects and group environments.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {['friendly', 'communicative', 'supportive', 'collaborative'].map(v => (
                        <span key={v} className="px-6 py-3 border border-brand-paper/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-brand-paper hover:text-brand-bg transition-all cursor-default">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Bottom Footer Quote */}
              <div className="border-t border-brand-paper/10 py-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold">University of Wisconsin–Madison — 2026</p>
                <p className="text-[10px] italic font-serif">"Exploring. Creating. Connecting. Designing a life I love."</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
