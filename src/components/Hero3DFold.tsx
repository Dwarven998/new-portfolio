import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Hero3DFoldProps {
  interactive?: boolean;
}

export const Hero3DFold: React.FC<Hero3DFoldProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollY } = useScroll();
  
  // Scroll transformations
  const scrollRotateX = useTransform(scrollY, [0, 800], [8, 35]);
  const scrollRotateY = useTransform(scrollY, [0, 800], [-12, 45]);
  const scrollRotateZ = useTransform(scrollY, [0, 800], [0, -15]);
  const scrollScale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const scrollYOffset = useTransform(scrollY, [0, 800], [0, 80]);

  // Spring physics
  const smoothRotateX = useSpring(scrollRotateX, { stiffness: 60, damping: 20 });
  const smoothRotateY = useSpring(scrollRotateY, { stiffness: 60, damping: 20 });
  const smoothRotateZ = useSpring(scrollRotateZ, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      id="hero-3d-fold-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] sm:h-[460px] md:h-[520px] flex items-center justify-center perspective-2000 select-none cursor-grab active:cursor-grabbing"
    >
      {/* Vertical Side Motif Label */}
      <div 
        className="hidden sm:block absolute -right-6 top-8 text-[9px] uppercase tracking-[0.25em] text-black/40 py-2 border-r border-black/10 h-64 pointer-events-none select-none"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Software Engineering & Interface Design // 2024 — 2025
      </div>

      {/* 3D Root Container */}
      <motion.div
        style={{
          rotateX: isHovered ? mousePos.y : smoothRotateX,
          rotateY: isHovered ? mousePos.x : smoothRotateY,
          rotateZ: smoothRotateZ,
          scale: scrollScale,
          y: scrollYOffset,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="relative w-72 h-96 sm:w-80 sm:h-[430px] md:w-88 md:h-[460px] transform-style-3d transition-transform duration-300"
      >
        {/* Shadow Plane */}
        <div 
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/20 blur-xl rounded-full transform -rotate-x-90 translate-z-[-60px] pointer-events-none" 
        />

        {/* Central Core Panel: Crisp White Editorial Card */}
        <motion.div 
          className="absolute inset-0 bg-white border border-black/10 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-7 flex flex-col justify-between transform-style-3d text-[#121212]"
          style={{
            transform: 'translateZ(20px)',
          }}
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
          
          {/* Panel Header */}
          <div className="relative z-10 flex items-start justify-between border-b border-black/5 pb-4">
            <span className="font-display text-[44px] font-black leading-none text-black/10">01</span>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest bg-black text-white px-2.5 py-1">
              Featured Case Study
            </div>
          </div>

          {/* Panel Center Typography */}
          <div className="relative z-10 my-auto py-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 mb-1">
              Academic & Web Ecosystem
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#121212] leading-none mb-2">
              COGNITA
            </h3>
            <p className="text-xs leading-relaxed text-black/70 mb-4">
              Cross-platform education ecosystem powered by React, TypeScript, Spring Boot, and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[9px] font-mono font-medium border border-black/15 px-2 py-0.5 rounded-full bg-black/5 text-black/80">REACT</span>
              <span className="text-[9px] font-mono font-medium border border-black/15 px-2 py-0.5 rounded-full bg-black/5 text-black/80">SPRING BOOT</span>
              <span className="text-[9px] font-mono font-medium border border-black/15 px-2 py-0.5 rounded-full bg-black/5 text-black/80">TYPESCRIPT</span>
            </div>
          </div>

          {/* Panel Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-black/10 pt-4">
            <span className="text-[10px] font-mono font-bold tracking-wider text-black uppercase">
              EXPLORE CASE STUDY
            </span>
            <div className="w-7 h-7 rounded-full border border-black/30 flex items-center justify-center text-xs text-black group-hover:bg-black group-hover:text-white transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>

        {/* Left Wing / Folded Flap */}
        <motion.div
          className="absolute top-0 -left-[120px] sm:-left-[140px] w-[120px] sm:w-[140px] h-full bg-[#EFEFED] border border-black/10 rounded-l-xl p-4 flex flex-col justify-between origin-right shadow-xl transform-style-3d text-[#121212]"
          style={{
            transform: 'rotateY(35deg) translateZ(0px)',
          }}
          animate={{
            rotateY: isHovered ? 45 : 32,
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <div className="font-mono text-[9px] font-bold text-black/40 tracking-wider">01 // CODE</div>
          <div className="space-y-1 font-mono text-[11px] text-black/80">
            <div className="text-black font-bold">ENGINEERING</div>
            <p className="text-[9px] leading-relaxed text-black/60">Full-stack web architectures, type safety, and resilient APIs.</p>
          </div>
          <div className="font-mono text-[8px] font-bold text-black/50 tracking-wider">SPRING / DJANGO</div>
        </motion.div>

        {/* Right Wing / Folded Flap */}
        <motion.div
          className="absolute top-0 -right-[120px] sm:-right-[140px] w-[120px] sm:w-[140px] h-full bg-[#EAEAE8] border border-black/10 rounded-r-xl p-4 flex flex-col justify-between origin-left shadow-xl transform-style-3d text-[#121212]"
          style={{
            transform: 'rotateY(-35deg) translateZ(0px)',
          }}
          animate={{
            rotateY: isHovered ? -45 : -32,
          }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <div className="font-mono text-[9px] font-bold text-black/40 tracking-wider">02 // DESIGN</div>
          <div className="space-y-1 font-mono text-[11px] text-black/80">
            <div className="text-black font-bold">EDITORIAL UI</div>
            <p className="text-[9px] leading-relaxed text-black/60">Typographic restraint, balanced negative space, and kinetic depth.</p>
          </div>
          <div className="font-mono text-[8px] font-bold text-black/50 tracking-wider">SWISS / BOLD</div>
        </motion.div>

        {/* Top Folded Origami Cap */}
        <motion.div
          className="absolute -top-10 left-6 right-6 h-12 bg-[#F0F0EE] border border-black/10 rounded-t-lg p-2 flex items-center justify-between origin-bottom shadow-sm transform-style-3d"
          style={{
            transform: 'rotateX(-45deg) translateZ(10px)',
          }}
        >
          <span className="font-mono text-[9px] font-bold text-black/60 pl-2">ACTIVE SPRINT</span>
          <span className="font-mono text-[9px] font-bold text-emerald-800 pr-2 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">OPEN 2024</span>
        </motion.div>
      </motion.div>

      {/* Interactive Drag / Scroll Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-[10px] font-mono text-black/60 shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
        <span>SCROLL & HOVER TO ROTATE 3D CARD</span>
      </div>
    </div>
  );
};
