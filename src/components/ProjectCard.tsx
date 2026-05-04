import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const content = (
    <div className="group relative flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 grayscale hover:grayscale-0 transition-all duration-700">
        <motion.img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 border border-brand-paper/10 pointer-events-none" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-brand-paper/10 pb-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
            {project.category}
          </span>
          <span className="text-[10px] font-mono opacity-20">0{index + 1}</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-3xl font-serif italic leading-tight group-hover:underline transition-all underline-offset-4">
            {project.title}
          </h3>
          {project.link && (
            <ExternalLink className="h-4 w-4 opacity-30 mt-2 flex-shrink-0" />
          )}
        </div>
        <p className="text-sm font-light leading-relaxed opacity-60 max-w-[90%] text-balance">
          {project.description}
        </p>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <motion.div
        onClick={() => onSelect?.(project)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="block cursor-pointer no-underline text-editorial"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
    >
      {content}
    </motion.div>
  );
};
