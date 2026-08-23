import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EDUCATION_INFO, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-black/10 bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 mb-8 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-black font-bold">05 // ACADEMICS & CREDENTIALS</span>
            <span className="text-black/30">—</span>
            <span>FORMAL EDUCATION & CONTINUOUS LEARNING</span>
          </div>
          <span className="font-mono text-black/60 font-bold">VERIFIED FOUNDATIONS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education (BS Information Technology) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>FORMAL HIGHER EDUCATION</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-[#121212]">
                {EDUCATION_INFO.degree}
              </h2>
              <div className="font-mono text-xs sm:text-sm text-black/60 font-bold mt-2 flex flex-wrap items-center gap-2">
                <span>{EDUCATION_INFO.institution}</span>
                <span>•</span>
                <span>{EDUCATION_INFO.yearPeriod}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white border border-black/10 shadow-sm space-y-6">
              <p className="text-black/80 text-sm leading-relaxed font-normal">
                {EDUCATION_INFO.description}
              </p>

              {/* Core Academic Coursework */}
              <div className="space-y-3 pt-4 border-t border-black/10">
                <div className="font-mono text-xs text-black/60 uppercase tracking-wider font-bold flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-black" />
                  Core Areas of Academic Study
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {EDUCATION_INFO.coreCourses.map((course, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-black/80 p-2.5 bg-[#F9F9F8] border border-black/10">
                      <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0" />
                      <span className="font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-black/10">
                <div className="font-mono text-xs text-black/60 uppercase tracking-wider font-bold flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-black" />
                  Academic Standing & Milestones
                </div>
                <div className="space-y-2">
                  {EDUCATION_INFO.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-black/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Continuous Learning */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CERTIFICATIONS & CONTINUOUS LEARNING</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-[#121212]">
                Industry Certifications & Specialized Training
              </h2>
              <p className="text-black/70 text-xs sm:text-sm mt-2 font-normal">
                Verified coursework covering AI engineering fundamentals, type-safe full-stack systems, and backend architecture.
              </p>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white border border-black/10 hover:border-black/30 transition-all shadow-sm space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-black/50 pb-2 border-b border-black/10">
                    <span className="text-black font-bold">{cert.organization}</span>
                    <span>{cert.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-black text-[#121212] leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-black/60">
                    <span className="text-black/40 font-bold">CREDENTIAL:</span>
                    <span className="px-2 py-0.5 bg-black/5 border border-black/10 text-black font-semibold text-[11px]">
                      {cert.credentialId}
                    </span>
                  </div>

                  {/* Skills Covered */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono text-black/50 font-bold uppercase tracking-wider mb-1.5">SKILLS VERIFIED:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-[10px] font-mono bg-black/5 text-black border border-black/10 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
