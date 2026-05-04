import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 lg:px-12 py-32 bg-brand-bg border-t border-brand-paper overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
          <div className="flex flex-col gap-12">
            <h2 className="text-serif text-6xl md:text-[100px] leading-[0.85] tracking-tighter">
              Let's craft <br />
              the <span className="opacity-40 italic">unseen</span>.
            </h2>
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-30">Direct Correspondence</span>
              <a 
                href="mailto:liyushan7ms@163.com" 
                className="text-3xl font-serif italic hover:underline underline-offset-4 decoration-current transition-all"
              >
                liyushan7ms@163.com
              </a>
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-30 mt-4">Voice</span>
              <p className="text-xl font-serif">608-213-7220</p>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between gap-16">
            <div className="flex flex-col md:items-end gap-6 text-[10px] uppercase tracking-[0.3em] font-bold">
              <span className="opacity-30 mb-2">Social Directories</span>
              <a 
                href="https://www.linkedin.com/in/caroline--li/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:italic transition-all flex items-center gap-2"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="text-right flex flex-col items-end border-t border-brand-paper/10 pt-8 w-full">
              <p className="text-[10px] uppercase tracking-[0.2em] italic opacity-40">
                Designing with intention and exquisite detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 right-0 pointer-events-none select-none">
        <span className="text-[280px] font-serif italic opacity-[0.03] leading-none shrink-0">
          2026
        </span>
      </div>
    </footer>
  );
}
