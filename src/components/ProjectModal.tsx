import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onWixClick: (url: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onWixClick }) => {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-brand-bg/90 backdrop-blur-md cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-12 z-[70] bg-white border border-brand-paper/10 shadow-2xl flex flex-col overflow-hidden rounded-lg"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-brand-paper/5 bg-brand-bg/50 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{project.category}</span>
                <h3 className="text-xl font-serif italic">{project.title}</h3>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => onWixClick(project.link)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-100 opacity-60 transition-opacity"
                >
                  <ExternalLink className="h-3 w-3" />
                  Scale View
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-brand-paper/5 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full relative bg-neutral-50 h-full">
              {project.link ? (
                <iframe 
                  src={project.link} 
                  className="w-full h-full border-none"
                  title={project.title}
                  loading="lazy"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-editorial/40 font-serif italic text-2xl">
                  Details coming soon.
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
