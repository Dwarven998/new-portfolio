import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Server, Database, Wrench, Sparkles, Search, Code } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'programming': return Code;
      case 'web': return Globe;
      case 'backend': return Server;
      case 'databases': return Database;
      case 'tools': return Wrench;
      case 'ai': return Sparkles;
      default: return Terminal;
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Core':
      case 'Advanced':
        return 'bg-black text-white border-black font-bold';
      case 'Proficient':
        return 'bg-black/10 text-black border-black/20 font-bold';
      default:
        return 'bg-black/5 text-black/70 border-black/10 font-medium';
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter(cat => {
    if (selectedCategory !== 'all' && cat.categoryKey !== selectedCategory) {
      return false;
    }
    return true;
  }).map(cat => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(query) || 
      s.description.toLowerCase().includes(query)
    );
    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-black/10 bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-black/50 mb-8 pb-3 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-black font-bold">04 // SKILLS</span>
            <span className="text-black/30">—</span>
            <span>TECHNOLOGY STACK & CAPABILITIES</span>
          </div>
          <span className="font-mono text-black/60 font-bold">PRACTICAL DOMAINS</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#121212] leading-tight">
              Grounded in fundamentals, adaptive to modern toolchains.
            </h2>
            <p className="text-black/70 text-sm sm:text-base leading-relaxed">
              Curated toolsets and languages actively utilized across production web applications, backend enterprise APIs, and native mobile interfaces.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-black/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by technology..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-black/15 text-xs font-mono text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-black/10 mb-10 shadow-sm">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-black text-white font-bold shadow-sm'
                : 'text-black/60 hover:text-black hover:bg-black/5 font-medium'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.categoryKey}
              onClick={() => setSelectedCategory(cat.categoryKey)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                selectedCategory === cat.categoryKey
                  ? 'bg-black text-white font-bold shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-black/5 font-medium'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => {
            const Icon = getCategoryIcon(catGroup.categoryKey);
            return (
              <motion.div
                key={catGroup.categoryKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col justify-between bg-white border border-black/10 hover:border-black/30 transition-all p-6 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-black/10 mb-4">
                    <div className="p-2 bg-black text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-black text-[#121212]">
                        {catGroup.title}
                      </h3>
                      <p className="text-[11px] font-mono text-black/50 font-bold">
                        {catGroup.skills.length} TECHNOLOGIES
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {catGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 bg-[#F9F9F8] border border-black/10 hover:border-black/30 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-display text-sm font-bold text-[#121212]">
                            {skill.name}
                          </span>
                          <span className={`px-2 py-0.5 text-[9px] font-mono border ${getLevelBadgeColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-black/70 text-xs leading-relaxed font-normal">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Category Footnote */}
                <div className="mt-4 pt-3 border-t border-black/10 text-[11px] font-mono text-black/50 font-medium">
                  {catGroup.description}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
