import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, FileCode2, Palette, Cpu, CheckSquare2, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Compass, FileCode2, Palette, Cpu, CheckSquare2, Rocket];

  return (
    <section id="process" className="py-24 sm:py-32 border-t border-black/10 bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 mb-8 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-black font-bold">07 // PROCESS</span>
            <span className="text-black/30">—</span>
            <span>HOW I APPROACH ENGINEERING & DESIGN</span>
          </div>
          <span className="font-mono text-black/60 font-bold">06 DISCIPLINED PHASES</span>
        </div>

        {/* Headline */}
        <div className="space-y-3 max-w-2xl mb-16">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#121212] leading-tight">
            A structured, repeatable methodology from concept to deployment.
          </h2>
          <p className="text-black/70 text-sm sm:text-base leading-relaxed font-normal">
            Eliminating guesswork through thorough discovery, architectural planning, type-safe development, and rigorous edge-case testing.
          </p>
        </div>

        {/* 6-Step Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            const isCurrent = activeStep === index;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white ${
                  isCurrent 
                    ? 'border-black shadow-lg' 
                    : 'border-black/10 hover:border-black/30 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-4">
                    <span className="font-display text-2xl font-black text-[#121212] tracking-tight">
                      /{step.number}
                    </span>
                    <div className="p-2 bg-black text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-black text-[#121212] mb-1">
                    {step.title}
                  </h3>
                  <div className="font-mono text-xs text-black/60 font-bold mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-black/75 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Details Breakdown */}
                <div className="pt-4 border-t border-black/10 space-y-1.5">
                  <div className="font-mono text-[10px] text-black/50 uppercase tracking-wider font-bold mb-2">
                    Key Milestones:
                  </div>
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-black/80 font-mono">
                      <span className="w-1 h-1 bg-black" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
