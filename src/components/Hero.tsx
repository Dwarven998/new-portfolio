import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Terminal, Layers, Code, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DFold } from './Hero3DFold';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-dot-pattern"
    >
      {/* Editorial Top Metadata Ribbon */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-black/50 border-b border-black/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-black font-bold uppercase tracking-wider">ALGIAN</span>
            <span className="text-black/30">/</span>
            <span className="text-black/70">SOFTWARE + DESIGN</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-black/50">
            <span>INDEX // 2024 — 2025</span>
            <span className="text-black/20">•</span>
            <span className="text-emerald-700 font-semibold">AVAILABLE FOR SELECTED PROJECTS 2024</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Statement */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Giant Monolithic Headline & Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-2"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-mono font-medium">
                00 — Portfolio Index
              </div>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tighter text-[#121212] leading-[0.9]">
                ALGIAN.
              </h1>
            </motion.div>

            {/* Philosophy quote with vertical line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="flex items-start gap-4 sm:gap-6"
            >
              <div className="w-[2px] h-20 bg-black/30 mt-1 shrink-0"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-[#121212] font-medium leading-snug max-w-xl">
                Freelance Software & Web Developer / Designer. Building digital experiences where code meets design. Student of Information Technology.
              </p>
            </motion.div>

            {/* Micro Quick Capabilities in Bold Typography layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <div className="p-4 bg-white border border-black/10 shadow-sm rounded-none sm:rounded">
                <div className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-2 font-mono">01 — Core Expertise</div>
                <ul className="space-y-1 text-xs sm:text-sm font-bold text-[#121212]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-black"></span>
                    Software Engineering (Spring Boot, Django)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-black"></span>
                    Web Development (React, TypeScript, Tailwind)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-black"></span>
                    UI/UX & Editorial System Design
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white border border-black/10 shadow-sm rounded-none sm:rounded flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-black/40 mb-2 font-mono">02 — Current Focus</div>
                  <p className="text-xs sm:text-sm font-semibold text-[#121212] leading-relaxed">
                    Exploring creative problem solving through scalable API architectures, native Android apps, and intelligent system design.
                  </p>
                </div>
                <div className="pt-3 flex items-center justify-between border-t border-black/5 mt-2 text-[10px] font-mono text-black/50">
                  <span>PHILIPPINES</span>
                  <span className="font-bold text-black">OPEN FOR CLIENTS</span>
                </div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                id="hero-view-case-studies"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black text-white font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-zinc-800 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>VIEW CASE STUDIES (06)</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-trigger"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-black/20 text-[#121212] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-black/5 transition-all active:scale-95 cursor-pointer shadow-sm"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Centerpiece in Bold Typography Theme */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Hero3DFold interactive={true} />
          </div>

        </div>
      </div>

      {/* Hero Bottom Footer Bar with Signature Motif */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 pt-4 border-t border-black/10">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-black/50">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-black"></span>
              <span className="w-1.5 h-1.5 bg-black/40"></span>
              <span className="w-1.5 h-1.5 bg-black/10"></span>
            </div>
            <span className="text-black font-semibold">BS INFORMATION TECHNOLOGY</span>
            <span className="text-black/20">/</span>
            <span>ASPIRING SOFTWARE ENGINEER</span>
          </div>
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 text-black font-semibold hover:opacity-70 transition-opacity group cursor-pointer tracking-wider"
          >
            <span>SCROLL TO EXPLORE PORTFOLIO</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
