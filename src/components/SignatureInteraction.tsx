import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface SignatureInteractionProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ activeSection, onNavigate }) => {
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
      setShowBackToTop(latest > 0.15);
    });
  }, [scrollYProgress]);

  const quickNav = [
    { id: 'about', label: '01', name: 'About' },
    { id: 'projects', label: '02', name: 'Projects' },
    { id: 'experience', label: '03', name: 'Exp' },
    { id: 'skills', label: '04', name: 'Skills' },
    { id: 'education', label: '05', name: 'Edu' },
    { id: 'services', label: '06', name: 'Services' },
    { id: 'process', label: '07', name: 'Process' },
    { id: 'contact', label: '08', name: 'Contact' },
  ];

  return (
    <>
      {/* Floating Bottom HUD Dock (Editorial Precision Tracker) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white/95 border border-black/15 shadow-2xl backdrop-blur-md text-xs font-mono select-none">
        
        {/* Brand Marker */}
        <div className="flex items-center gap-1.5 px-2 border-r border-black/10 text-black">
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          <span className="font-black text-black tracking-wider">ALGIAN</span>
        </div>

        {/* Dynamic Section Indicator */}
        <div className="flex items-center gap-1 px-1">
          {quickNav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-2 py-1 text-[11px] font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white font-bold shadow-sm'
                    : 'text-black/60 hover:text-black hover:bg-black/5 font-medium'
                }`}
                title={item.name}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Scroll Progress Metric */}
        <div className="border-l border-black/10 pl-2 pr-1 text-[11px] text-black/60 font-mono font-bold flex items-center gap-1">
          <span>{scrollPercent}%</span>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-6 right-6 z-30 p-3 bg-black hover:bg-black/80 border border-black text-white shadow-xl transition-all cursor-pointer focus:outline-none"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </>
  );
};
