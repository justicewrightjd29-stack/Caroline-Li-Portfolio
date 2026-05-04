import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { ProjectCard, type Project } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, RefreshCw } from "lucide-react";

const INITIAL_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Care as Currency",
    description: "A visionary civic credit system that reimagines community value, transforming everyday acts of care into a sustainable network of mutual residential support.",
    category: "Interaction Design",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop",
    link: "https://liyushan7ms.wixsite.com/caroline/portfolio-collections/portfolio/web-design-portfolio-1",
  },
  {
    id: "2",
    title: "New ZOO",
    description: "An immersive exploration into digital sanctuary design, bridging the gap between human curiosity and the preservation of wild wonder through interactive narratives.",
    category: "Experience Design",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=2070&auto=format&fit=crop",
    link: "https://liyushan7ms.wixsite.com/caroline/portfolio-collections/portfolio/illustration-gallery",
  },
  {
    id: "3",
    title: "Chatventure",
    description: "A sophisticated interactive conversation game that pushes the boundaries of storytelling, where every dialogue choice cascades into unique narrative pathways.",
    category: "Game Design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    link: "https://liyushan7ms.wixsite.com/caroline/portfolio-collections/portfolio/writing-and-content-creation",
  },
  {
    id: "4",
    title: "Family Interplay",
    description: "An interactive animation exploring Chinese family traditions and structures. A study of domestic space, physical ritual, and the emotional resonance of traditional architecture.",
    category: "Interaction Design",
    image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1954&auto=format&fit=crop",
    link: "https://liyushan7ms.wixsite.com/caroline/portfolio-collections/portfolio/graphic-design-case-studies",
  },
  {
    id: "5",
    title: "Career Planning Game",
    description: "A gamified vocational exploration platform designed to help young people navigate their professional futures through strategic choices and interactive guidance.",
    category: "Game Design",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    link: "https://liyushan7ms.wixsite.com/caroline/portfolio-collections/portfolio/project-management-highlights",
  },
  {
    id: "6",
    title: "Stolen Shadow",
    description: "A cinematic 3D animation film about a battle written in ink and fate. Features a jade 'bi' disk, a white tiger, and themes of destiny rooted in traditional aesthetics.",
    category: "3D Animation",
    image: "/images/Stolen_Shadow.jpg",
    link: "https://liyushan7ms.wixsite.com/caroline/portfolio-collections/portfolio/carolines-photography-showcase",
  }
];

export function WorkSection() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const enhanceDescriptions = async () => {
    if (isEnhancing) return;
    setIsEnhancing(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = "gemini-3-flash-preview";

      const prompt = `You are a high-end creative copywriter for luxury brands. 
      Rewrite the following project descriptions for a portfolio website. 
      Make them sound "exquisite", "comprehensive", and "sophisticated". 
      Keep each description to roughly 2-3 sentences.
      
      Projects:
      ${projects.map(p => `- ${p.title}: ${p.description}`).join('\n')}
      
      Return ONLY a JSON array of strings in the same order as the projects.`;

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const newDescriptions = JSON.parse(response.text);
      if (Array.isArray(newDescriptions)) {
        setProjects(prev => prev.map((p, i) => ({
          ...p,
          description: newDescriptions[i] || p.description
        })));
      }
    } catch (error) {
      console.error("AI Enhancement failed:", error);
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <section className="px-6 lg:px-12 py-24 bg-brand-bg relative overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline border-b border-brand-paper pb-4 mb-16">
          <div className="text-xs uppercase tracking-widest font-bold">Selected Practice / Archives</div>
          
          <button 
            onClick={enhanceDescriptions}
            disabled={isEnhancing}
            className="group flex items-center gap-2 transition-all hover:italic disabled:opacity-50"
          >
            {isEnhancing ? (
              <RefreshCw className="h-3 w-3 animate-spin" />
            ) : (
              <Sparkles className="h-3 w-3" />
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {isEnhancing ? "Polishing Content..." : "Enhance Prose"}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
