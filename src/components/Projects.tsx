import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Web App', 'System Architecture', 'Mobile & AI', 'UI/UX & Web'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-black/10 bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 mb-8 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-black font-bold">02 // PROJECTS</span>
            <span className="text-black/30">—</span>
            <span>MINI CASE STUDIES & ARCHITECTURES</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-black/60 font-mono font-bold">06 ARCHIVED WORKS</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#121212] leading-tight">
              Engineered for resilience, crafted with editorial precision.
            </h2>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              Explore mini case studies spanning full-stack web platforms, native Android applications, query management systems, and offline-first finance engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-black/10 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-black text-white font-bold shadow-sm'
                    : 'text-black/60 hover:text-black hover:bg-black/5 font-medium'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies List (Editorial Vertical Breakdown) */}
        <div className="space-y-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white border border-black/10 hover:border-black/30 transition-all duration-300 shadow-md hover:shadow-xl p-6 sm:p-8 md:p-10"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 pb-4 border-b border-black/10">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-black text-black/30">
                    /{project.number}
                  </span>
                  <span className="text-black/20">•</span>
                  <span className="px-2 py-0.5 bg-black/5 text-black font-bold border border-black/10 text-[11px]">
                    {project.category}
                  </span>
                  <span className="text-black/20">•</span>
                  <span className="font-medium text-black/60">{project.year}</span>
                </div>
                <div className="text-black/60 font-semibold">
                  {project.role}
                </div>
              </div>

              {/* Core Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
                
                {/* Left Side: Large Project Title & Narrative */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h3 className="font-display text-2xl sm:text-4xl font-black text-[#121212] group-hover:opacity-80 transition-opacity tracking-tight">
                      {project.name}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-black/60 font-semibold mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-black/75 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Solution Mini Contrast */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-[#F9F9F8] border border-black/10">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-rose-700 font-bold block mb-1">
                        Core Challenge
                      </span>
                      <p className="text-black/70 text-xs leading-relaxed line-clamp-3">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 bg-[#F9F9F8] border border-black/10">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                        Applied Solution
                      </span>
                      <p className="text-black/70 text-xs leading-relaxed line-clamp-3">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono bg-black/5 text-black border border-black/10 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Key Highlights & Case Study Inspection Trigger */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 bg-[#F6F6F4] p-6 border border-black/10">
                  <div className="space-y-3">
                    <div className="font-mono text-xs text-black/60 uppercase tracking-wider flex items-center justify-between border-b border-black/10 pb-2 font-bold">
                      <span>Key Features & Architecture</span>
                      <span className="text-black/40">0{project.keyFeatures.length} ITEMS</span>
                    </div>

                    <div className="space-y-2">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-black/80">
                          <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0" />
                          <span className="leading-relaxed font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-black/5">
                      <div className="font-mono text-[10px] text-black/50 uppercase tracking-wider mb-1 font-bold">
                        Algian's Direct Contribution:
                      </div>
                      <p className="text-xs text-black/70 italic">
                        "{project.myContribution[0]}"
                      </p>
                    </div>
                  </div>

                  {/* Trigger Full Case Study Drawer */}
                  <button
                    id={`open-case-study-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-black hover:bg-zinc-800 text-white font-mono text-xs font-bold tracking-wide transition-all shadow-sm cursor-pointer"
                  >
                    <span>Inspect Full Case Study & Architecture</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Projects Placeholder Card */}
        <div className="mt-12 p-8 bg-white border border-dashed border-black/20 text-center space-y-3 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 text-black font-mono text-xs font-bold border border-black/10">
            <span>UPCOMING EXPERIMENTS</span>
          </div>
          <h3 className="font-display text-xl font-black text-[#121212]">
            More Software Engineering & AI Architectures in Progress
          </h3>
          <p className="text-black/60 text-xs sm:text-sm font-mono max-w-lg mx-auto">
            Continuously designing distributed services, native mobile integrations, and creative interactive artifacts.
          </p>
        </div>

      </div>
    </section>
  );
};
