import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/10 bg-[#EFEFED] py-16 text-xs font-mono text-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Tier: Brand Wordmark & Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-black/10">
          
          <div className="space-y-3">
            <div className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#121212]">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-black/70 space-y-1 font-mono text-xs font-medium">
              <p>SOFTWARE & WEB DEVELOPER / UI/UX DESIGNER</p>
              <p className="text-black/50">BS INFORMATION TECHNOLOGY — PHILIPPINES</p>
            </div>
          </div>

          {/* Editorial Stamp */}
          <div className="space-y-2 text-left md:text-right font-mono text-xs">
            <div className="text-black font-bold uppercase tracking-wider">
              {PERSONAL_INFO.status}
            </div>
            <div className="text-black/60 flex items-center md:justify-end gap-2 font-medium">
              <MapPin className="w-3.5 h-3.5 text-black/50" />
              <span>{PERSONAL_INFO.coordinates}</span>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-black/60 font-medium">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} ALGIAN. ALL RIGHTS RESERVED.</span>
            <span className="text-black/30">•</span>
            <span>CRAFTED WITH REACT & TYPESCRIPT</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-black hover:text-black/60 font-bold transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
