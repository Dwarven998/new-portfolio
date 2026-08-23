import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<string>(EXPERIENCES[0].id);

  const categories = ['All', 'Freelance Projects', 'Academic Projects', 'Personal Projects', 'Leadership / Organizations'];

  const filteredExperiences = selectedCategory === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.category === selectedCategory);

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-black/10 bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 mb-8 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-black font-bold">03 // EXPERIENCE</span>
            <span className="text-black/30">—</span>
            <span>INTERACTIVE CAREER JOURNEY</span>
          </div>
          <span className="font-mono text-black/60 font-bold">CHRONOLOGICAL ARCHIVE</span>
        </div>

        {/* Headline and Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#121212] leading-tight">
              An evolving journey across software engineering & product design.
            </h2>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              Demonstrating transparent technical leadership across freelance engagements, university capstones, open-source utilities, and peer mentorship.
            </p>
          </div>

          {/* Track Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-black/10 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white font-bold shadow-sm'
                    : 'text-black/60 hover:text-black hover:bg-black/5 font-medium'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Progress Spine */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[2px] bg-black/10" />

          {/* Experience Timeline Cards */}
          <div className="space-y-10 md:pl-16">
            {filteredExperiences.map((exp, index) => {
              const isSelected = activeItem === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveItem(exp.id)}
                  className={`group relative border transition-all duration-300 p-6 sm:p-8 bg-white shadow-sm ${
                    isSelected 
                      ? 'border-black shadow-lg' 
                      : 'border-black/10 hover:border-black/30'
                  }`}
                >
                  {/* Timeline Indicator Node */}
                  <div className="hidden md:flex absolute -left-[73px] top-8 w-5 h-5 bg-[#F5F5F3] border-2 border-black items-center justify-center">
                    <div className={`w-2 h-2 ${isSelected ? 'bg-black' : 'bg-black/40'}`} />
                  </div>

                  {/* Top Bar: Date & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 pb-4 border-b border-black/10">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg font-black text-[#121212] tracking-tight">
                        {exp.period}
                      </span>
                      <span className="text-black/20">•</span>
                      <span className="px-2.5 py-0.5 bg-black/5 text-black border border-black/10 font-mono text-[11px] font-bold">
                        {exp.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-black/60 font-mono text-xs font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-black/50" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Main Role & Org */}
                  <div className="pt-5 space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#121212]">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-xs sm:text-sm text-black/60 font-bold">
                      {exp.organization}
                    </div>

                    <p className="text-black/75 text-sm sm:text-base leading-relaxed pt-1 font-normal">
                      {exp.description}
                    </p>
                  </div>

                  {/* Responsibilities & Achievements Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 mt-6 border-t border-black/10">
                    
                    {/* Responsibilities */}
                    <div className="lg:col-span-7 space-y-2.5">
                      <div className="font-mono text-xs text-black/50 uppercase tracking-wider font-bold">
                        Key Responsibilities & System Execution
                      </div>
                      <div className="space-y-2">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/80">
                            <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0" />
                            <span className="leading-relaxed font-normal">{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes / Achievements */}
                    <div className="lg:col-span-5 space-y-2.5">
                      <div className="font-mono text-xs text-emerald-800 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                        <Award className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Key Outcomes & Impact</span>
                      </div>
                      <div className="space-y-2 bg-[#F9F9F8] p-4 border border-black/10">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-black/80 font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Technologies Footer */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-5 mt-5 border-t border-black/10">
                    <span className="text-[11px] font-mono text-black/50 font-bold mr-2">TECH:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[11px] font-mono bg-black/5 text-black border border-black/10 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
