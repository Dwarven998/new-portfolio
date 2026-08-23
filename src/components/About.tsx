import React from 'react';
import { motion } from 'motion/react';
import { Compass, Terminal, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpiderProfileTransformation } from './SpiderProfileTransformation';

export const About: React.FC = () => {
  const editorialMetrics = [
    { label: 'ROLE', value: 'Freelance Developer & UI/UX Designer' },
    { label: 'STATUS', value: 'BS IT Student / Aspiring Software Engineer' },
    { label: 'LOCATION', value: 'Philippines [14.59°N, 120.98°E]' },
    { label: 'FOCUS', value: 'Full-Stack Architecture & Reactive UI' },
    { label: 'AVAILABILITY', value: 'Open for Freelance & Collaborative Projects 2024' },
    { label: 'CONTINUOUS LEARNING', value: 'Distributed Systems & AI Orchestration' },
  ];

  const focusAreas = [
    {
      title: 'Software Engineering',
      desc: 'Architecting robust, maintainable systems with clean object-oriented patterns, scalable data schemas, and resilient error-handling pipelines.',
      icon: Terminal,
      tags: ['Spring Boot', 'Django', 'Java', 'Python', 'PostgreSQL']
    },
    {
      title: 'Web & Interface Design',
      desc: 'Crafting editorial web experiences with meticulous typography, intentional whitespace, responsive fluid grids, and subtle 3D kinetic interaction.',
      icon: Layers,
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Motion']
    },
    {
      title: 'Applied AI & Smart Workflows',
      desc: 'Integrating language models, structured JSON prompt pipelines, and conversational interfaces to solve tangible workflow bottlenecks.',
      icon: Sparkles,
      tags: ['Gemini API', 'Prompt Design', 'Autonomous Triage', 'Context Grounding']
    },
    {
      title: 'Creative Problem Solving',
      desc: 'Transforming convoluted operational problems—from canteen queues to student query ticketing—into intuitive, self-service digital platforms.',
      icon: Compass,
      tags: ['System Analysis', 'User Research', 'Product Thinking', 'Rapid Prototyping']
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-black/10 bg-[#F5F5F3] relative">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-8 pb-3 border-b border-black/10">
          <span className="text-black font-bold">01 // ABOUT</span>
          <span className="text-black/30">—</span>
          <span>PHILOSOPHY & PROFILE</span>
          <span className="ml-auto text-black/50 font-mono">PHILIPPINES</span>
        </div>

        {/* Large Editorial Headline & Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Spider-Man Transformation Profile Card + Technical Specifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Spider-Man Transformation Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SpiderProfileTransformation />
            </motion.div>

            {/* Editorial Metadata Table */}
            <div className="border border-black/10 overflow-hidden bg-white shadow-sm">
              <div className="px-4 py-2.5 bg-black text-white text-[10px] font-mono font-bold tracking-[0.2em] uppercase flex justify-between items-center">
                <span>Profile Specifications</span>
                <span className="text-white/60">ALGIAN // VERIFIED</span>
              </div>
              <div className="divide-y divide-black/10">
                {editorialMetrics.map((metric, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 px-4 py-3 text-xs font-mono">
                    <div className="sm:col-span-4 text-black/50 uppercase tracking-wider font-semibold">
                      {metric.label}
                    </div>
                    <div className="sm:col-span-8 text-[#121212] font-bold mt-0.5 sm:mt-0">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Bio, Statement, & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#121212] leading-tight">
                Bridging engineering rigor with thoughtful visual craftsmanship.
              </h2>

              {/* Core Statement Quote */}
              <div className="p-6 bg-white border border-black/10 border-l-4 border-l-black shadow-sm">
                <p className="font-display text-lg sm:text-xl text-[#121212] font-semibold italic leading-relaxed">
                  "{PERSONAL_INFO.statement}"
                </p>
              </div>

              <div className="space-y-4 text-black/70 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  {PERSONAL_INFO.bioParagraphs[0]}
                </p>
                <p>
                  {PERSONAL_INFO.bioParagraphs[1]}
                </p>
              </div>
            </div>

            {/* Focus Areas & Domains */}
            <div className="space-y-4 pt-4 border-t border-black/10">
              <div className="flex items-center justify-between pb-2">
                <span className="font-mono text-xs text-black/60 uppercase tracking-wider font-bold">
                  Core Domains of Practice
                </span>
                <span className="font-mono text-xs text-black/40 font-bold">04 AREAS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="p-5 bg-white border border-black/10 hover:border-black/40 hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className="p-1.5 bg-black text-white group-hover:bg-zinc-800 transition-colors">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <h3 className="font-display text-base sm:text-lg font-bold text-[#121212]">
                            {area.title}
                          </h3>
                        </div>

                        <p className="text-black/70 text-xs leading-relaxed mb-4 font-normal">
                          {area.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-black/5">
                        {area.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[9px] font-mono bg-black/5 text-black/80 border border-black/10 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
