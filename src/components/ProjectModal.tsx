import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, AlertCircle, Sparkles, Layers, Calendar, UserCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white border border-black/15 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto text-[#121212]"
        >
          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-black/10 bg-[#F7F7F5] flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono text-black/60">
                <span className="px-2.5 py-0.5 bg-black text-white font-bold text-[10px] tracking-wider uppercase">
                  PROJECT {project.number}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-black/50" />
                  {project.year}
                </span>
                <span>•</span>
                <span className="text-black font-semibold">{project.category}</span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-4xl font-black text-[#121212] tracking-tight">
                {project.name}
              </h2>
              <p className="text-sm sm:text-base text-black/70 font-semibold">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              id="close-project-modal-btn"
              className="p-2 text-black/60 hover:text-black hover:bg-black/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm sm:text-base">
            
            {/* Role & Tech Overview Banner */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-[#F5F5F3] border border-black/10 font-mono text-xs">
              <div className="md:col-span-4 space-y-1">
                <div className="text-black/50 uppercase tracking-wider font-bold">Algian's Role</div>
                <div className="text-[#121212] font-bold">{project.role}</div>
              </div>
              <div className="md:col-span-8 space-y-1">
                <div className="text-black/50 uppercase tracking-wider font-bold">Technology Stack</div>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white text-black border border-black/15 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Overview Narrative */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-black/60 flex items-center gap-2 font-bold">
                <Layers className="w-3.5 h-3.5 text-black" />
                Case Study Overview
              </h3>
              <p className="text-black/80 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Contrast Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Problem Box */}
              <div className="p-5 bg-rose-50 border border-rose-200 space-y-2.5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-rose-800 uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  The Problem & Challenge
                </div>
                <p className="text-black/80 text-xs sm:text-sm leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>

              {/* Solution Box */}
              <div className="p-5 bg-emerald-50 border border-emerald-200 space-y-2.5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  The Engineered Solution
                </div>
                <p className="text-black/80 text-xs sm:text-sm leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Key Features Section */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-black/60 flex items-center gap-2 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                Key Architectural & Functional Features
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 p-3.5 bg-[#F9F9F8] border border-black/10">
                    <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                    <span className="text-black/85 text-xs sm:text-sm leading-relaxed font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Contribution Section */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-black/60 flex items-center gap-2 font-bold">
                <UserCheck className="w-3.5 h-3.5 text-black" />
                Algian's Direct Engineering Contribution
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.myContribution.map((contrib, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3 p-3.5 bg-white border border-black/15 shadow-sm">
                    <span className="font-mono text-xs text-black/50 font-bold shrink-0 mt-0.5">0{cIdx + 1}.</span>
                    <span className="text-black font-semibold text-xs sm:text-sm leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Highlights Pills */}
            {project.systemHighlights && (
              <div className="space-y-2 pt-2 border-t border-black/10">
                <div className="font-mono text-[11px] text-black/50 uppercase tracking-wider font-bold">System Architecture Highlights</div>
                <div className="flex flex-wrap gap-2">
                  {project.systemHighlights.map((h, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-mono bg-black/5 text-black border border-black/15 font-semibold">
                      ⚡ {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-black/10 bg-[#F7F7F5] flex items-center justify-between">
            <div className="text-xs font-mono text-black/50 font-semibold">
              ALGIAN // CASE STUDY ARCHIVE
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-black hover:bg-zinc-800 text-white font-mono text-xs font-bold tracking-wider transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
