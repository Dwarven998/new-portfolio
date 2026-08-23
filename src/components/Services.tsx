import React from 'react';
import { motion } from 'motion/react';
import { Globe, Code2, Layout, Sparkles, Monitor, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onInquireClick: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onInquireClick }) => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return Globe;
      case 1: return Code2;
      case 2: return Layout;
      case 3: return Sparkles;
      default: return Monitor;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-black/10 bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 mb-8 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-black font-bold">06 // SERVICES</span>
            <span className="text-black/30">—</span>
            <span>FREELANCE & COLLABORATIVE OFFERINGS</span>
          </div>
          <span className="font-mono text-black/60 font-bold">INDIVIDUAL PRACTICE</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#121212] leading-tight">
              End-to-end digital craft for visionary creators & businesses.
            </h2>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              Available for select freelance engagements, contract engineering, and bespoke design systems tailored to ambitious products.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-black/70 font-bold bg-white px-3 py-1.5 border border-black/10 shadow-sm">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
            <span>2024 SPRINT BOOKING OPEN</span>
          </div>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(index);
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col justify-between bg-white border border-black/10 hover:border-black/30 transition-all p-6 sm:p-8 space-y-6 group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="font-display text-2xl font-black text-black/20 group-hover:text-black transition-colors">
                      /{service.number}
                    </span>
                    <div className="p-2 bg-black text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display text-xl font-black text-[#121212]">
                      {service.title}
                    </h3>
                    <p className="font-mono text-xs text-black/60 font-bold mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-black/75 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-3 border-t border-black/10">
                    <div className="font-mono text-[10px] text-black/50 uppercase tracking-wider font-bold">
                      Core Deliverables
                    </div>
                    <div className="space-y-1.5">
                      {service.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-black/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-black/40 mt-0.5 shrink-0" />
                          <span className="font-medium">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {service.techStack.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] font-mono text-black/70 bg-black/5 border border-black/10 px-1.5 py-0.5 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onInquireClick(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-black hover:text-black/60 transition-colors cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
