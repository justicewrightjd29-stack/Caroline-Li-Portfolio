import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { Footer } from "./components/Footer";
import { AboutModal } from "./components/AboutModal";
import { WixModal } from "./components/WixModal";

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [wixModal, setWixModal] = useState<{ isOpen: boolean; url: string }>({
    isOpen: false,
    url: "",
  });

  const openWix = (url: string) => {
    setWixModal({ isOpen: true, url });
  };

  return (
    <main className="relative bg-brand-bg scroll-smooth">
      <Navbar />
      <Hero 
        onAboutClick={() => setIsAboutOpen(true)} 
        onWixClick={openWix}
      />
      <WorkSection onProjectClick={openWix} />
      
      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
        onWixClick={() => openWix("https://liyushan7ms.wixsite.com/caroline#about")}
      />

      <WixModal 
        isOpen={wixModal.isOpen} 
        onClose={() => setWixModal({ ...wixModal, isOpen: false })} 
        url={wixModal.url} 
      />
      
      {/* Manifesto Section */}
      <section className="px-6 lg:px-12 py-32 border-t border-brand-paper/10" id="about">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="w-full">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] mb-12 block opacity-30">Manifesto 01 / Identity & Philosophy</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3 flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <div className="flex gap-4 items-center">
                  <span className="font-serif italic text-3xl">Caroline Li</span>
                  <div className="h-px flex-1 bg-brand-paper/10" />
                </div>
                <p className="text-2xl md:text-4xl font-light leading-tight opacity-90 border-l-4 border-brand-paper pl-8 md:pl-12">
                  "Designing experiences that bridge the gap between human curiosity and social impact."
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-70 pl-8 md:pl-12 max-w-2xl">
                  A Master’s scholar at UW–Madison specializing in the intersection of Interaction Design, 3D Storytelling, and Community Innovation. 
                  My work is rooted in the belief that design should not only be functional but transformative—creating connections that turn everyday acts of care into sustainable social currency.
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col gap-10">
              <div className="p-8 border border-brand-paper/5 bg-brand-paper/[0.02] flex flex-col gap-6">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-30">Academic Roots</span>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wider">UW–Madison</p>
                    <p className="text-xs opacity-50 italic">MS in Design + Innovation</p>
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wider">Emily Carr University</p>
                    <p className="text-xs opacity-50 italic">BFA in Digital Media</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => openWix("https://liyushan7ms.wixsite.com/caroline#about")}
                  className="w-full py-6 bg-brand-paper text-brand-bg hover:bg-opacity-90 transition-all text-[10px] font-bold uppercase tracking-[0.2em] flex justify-center items-center gap-4 group shadow-xl"
                >
                  View Wix About Me
                  <span className="group-hover:translate-x-1 transition-transform text-xl italic">↗</span>
                </button>
                <button 
                  onClick={() => setIsAboutOpen(true)}
                  className="w-full py-6 border border-brand-paper/20 hover:bg-brand-paper hover:text-brand-bg transition-all text-[10px] font-bold uppercase tracking-[0.2em] flex justify-center items-center gap-4 group"
                >
                  Explore Personal Vibe Map
                  <span className="group-hover:translate-x-1 transition-transform text-xl italic">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

