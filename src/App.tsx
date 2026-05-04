import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { Footer } from "./components/Footer";

import carolinePortrait from "./assets/images/regenerated_image_1777911686070.png";

export default function App() {
  return (
    <main className="relative bg-brand-bg scroll-smooth">
      <Navbar />
      <Hero />
      <WorkSection />
      
      {/* About & Manifesto Section */}
      <section className="px-6 lg:px-12 py-32 border-t border-brand-paper/10" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-12">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] mb-12 block opacity-30">Manifesto 01 / Identity & Philosophy</span>
          </div>
          
          {/* Portrait and Intro */}
          <div className="md:col-span-8 flex flex-col gap-12">
            <div className="aspect-[21/9] bg-neutral-100 border border-brand-paper/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group relative">
              <img 
                src={carolinePortrait} 
                alt="Caroline Li"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <span className="text-[10px] uppercase tracking-widest font-bold">Primary Portrait [Wider]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <span className="font-serif italic text-2xl">Caroline Li</span>
                <div className="h-px flex-1 bg-brand-paper/10" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 text-nowrap">Innovation Specialist</span>
              </div>
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 border-l-4 border-brand-paper pl-8">
                I am a Master’s student in Design and Innovation at the University of Wisconsin–Madison. 
                With a background in Digital Media from Emily Carr University, I specialize in combining 
                interaction design, storytelling, and social impact.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-12">
            <h2 className="text-serif text-6xl md:text-8xl leading-[0.9] tracking-tighter">
              Meaningful <br />
              User <br />
              <span className="opacity-30">Experiences.</span> 
            </h2>
            
            <div className="flex flex-col gap-8 pt-12 border-t border-brand-paper/10">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-30">Activities & Interests</span>
                <div className="flex flex-wrap gap-3">
                  {['Yoga', 'Climbing', 'Hiking', 'Gaming', 'Reading', 'Visual Research'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-brand-bg border border-brand-paper/10 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-paper hover:text-brand-bg transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-serif text-2xl italic leading-tight text-editorial/80">
                Active, Adventurous, Mindful, Curious. Always growing.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

