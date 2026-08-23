import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(prefilledService || 'Web Application Development');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const topics = [
    'Web Application Development',
    'Custom Software Solution',
    'UI/UX & Design System',
    'AI-Powered Integration',
    'General Inquiry / Collaboration'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email.trim() || !formState.name.trim()) return;

    // Open mailto link as direct action
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${selectedTopic} - from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Algian,\n\nName: ${formState.name}\nEmail: ${formState.email}\nTopic: ${selectedTopic}\n\nMessage:\n${formState.message}\n\nBest regards,\n${formState.name}`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-black/10 bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 mb-12 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-black font-bold">08 // CONTACT & INITIATION</span>
            <span className="text-black/30">—</span>
            <span>GET IN TOUCH</span>
          </div>
          <span className="font-mono text-black font-bold flex items-center gap-1.5 bg-white px-2.5 py-1 border border-black/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            AVAILABLE FOR NEW WORK
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Editorial Headline & Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#121212] leading-[1.02]">
                Let's build something.
              </h2>
              <p className="text-black/75 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
                Have a software concept, web project, design challenge, or full-stack architectural requirement? Let's connect and discuss your vision.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 sm:p-7 bg-white border border-black/10 shadow-sm space-y-4">
              <div className="text-xs font-mono text-black/60 uppercase tracking-wider font-bold">
                Direct Email Communication
              </div>
              <div className="flex items-center justify-between gap-3 p-3.5 bg-[#F9F9F8] border border-black/10">
                <span className="font-mono text-sm sm:text-base text-black font-bold truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-black/80 text-white font-mono text-xs font-bold transition-colors shrink-0 cursor-pointer shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-[11px] font-mono text-black/50 font-medium">
                Average response turnaround within 24 hours.
              </div>
            </div>

            {/* Social & Professional Footprints */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-black/60 uppercase tracking-wider font-bold">
                External Profiles & Channels
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-black/10 hover:border-black text-black transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-black/60 group-hover:text-black" />
                    <span className="font-mono text-xs font-bold">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-black/10 hover:border-black text-black transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-black/60 group-hover:text-black" />
                    <span className="font-mono text-xs font-bold">LinkedIn Network</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-black/10 p-6 sm:p-8 md:p-10 shadow-md">
            <div className="space-y-2 mb-6 pb-4 border-b border-black/10">
              <h3 className="font-display text-2xl font-black text-[#121212]">
                Start a conversation
              </h3>
              <p className="text-xs font-mono text-black/60 font-medium">
                Submit project details or say hello directly.
              </p>
            </div>

            {sentSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-black text-[#121212]">
                  Message Prepared
                </h4>
                <p className="text-xs sm:text-sm font-mono text-black/70 max-w-sm mx-auto">
                  Your mail client has been opened with your inquiry formatted for Algian.
                </p>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="text-xs font-mono text-black underline font-bold hover:text-black/60 mt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-inquiry-form">
                
                {/* Project Topic Pills */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-black/70 uppercase tracking-wider font-bold">
                    Inquiry Category
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {topics.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-2.5 py-1.5 text-xs font-mono transition-colors text-left cursor-pointer ${
                          selectedTopic === topic
                            ? 'bg-black text-white font-bold shadow-sm'
                            : 'bg-[#F9F9F8] text-black/70 hover:text-black border border-black/10 font-medium'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-mono text-black/70 uppercase tracking-wider font-bold">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-4 py-3 bg-[#F9F9F8] border border-black/15 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black font-mono transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-mono text-black/70 uppercase tracking-wider font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full px-4 py-3 bg-[#F9F9F8] border border-black/15 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black font-mono transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono text-black/70 uppercase tracking-wider font-bold">
                    Project Overview or Note
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your goals, timelines, and technical requirements..."
                    className="w-full px-4 py-3 bg-[#F9F9F8] border border-black/15 text-sm text-black placeholder-black/40 focus:outline-none focus:border-black font-mono transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-black hover:bg-black/85 text-white font-mono text-xs sm:text-sm font-bold transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <span>Start a conversation →</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
