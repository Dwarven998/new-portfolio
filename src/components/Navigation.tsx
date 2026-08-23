import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Philippine Time (GMT+8)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        setTimeString(now.toLocaleTimeString('en-US', options) + ' PHT');
      } catch (e) {
        setTimeString('UTC+8');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F5F3]/90 backdrop-blur-md border-b border-black/10 py-3.5 shadow-sm'
            : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('hero');
            }}
            className="group flex items-center gap-3 focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-[#121212] transition-colors duration-200 group-hover:opacity-70">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-black/40 uppercase -mt-0.5">
                Software + Design
              </span>
            </div>

            {/* Availability Indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/5 border border-black/10 text-[10px] font-mono text-black/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available 2024</span>
            </div>
          </a>

          {/* Desktop Live Location / Time Status */}
          <div className="hidden xl:flex items-center gap-4 text-[11px] font-mono text-black/50 border-x border-black/10 px-4 py-1">
            <div className="flex items-center gap-1.5 text-black/60">
              <MapPin className="w-3 h-3 text-black/40" />
              <span>Philippines</span>
            </div>
            <div className="flex items-center gap-1.5 text-black/60">
              <Clock className="w-3 h-3 text-black/40" />
              <span>{timeString || 'GMT+8'}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" id="desktop-nav-links">
            {navItems.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  id={`nav-link-${sectionKey}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(sectionKey);
                  }}
                  className={`relative py-1 text-[11px] uppercase tracking-[0.2em] transition-opacity duration-150 ${
                    isActive
                      ? 'text-black font-bold opacity-100'
                      : 'text-black/60 hover:opacity-100 font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Quick CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              id="nav-cta-contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-black text-white hover:bg-zinc-800 font-mono text-xs font-medium tracking-wide transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-black hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#F5F5F3] border-b border-black/10 px-6 py-5 shadow-xl space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-mono text-black/50 border-b border-black/10 pb-3">
              <span>MANILA: {timeString}</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available 2024
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const sectionKey = item.href.replace('#', '');
                const isActive = activeSection === sectionKey;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(sectionKey);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded text-[11px] uppercase tracking-wider font-mono ${
                      isActive ? 'bg-black text-white font-bold' : 'text-black/70 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-black text-white font-mono text-xs font-semibold tracking-wide"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
