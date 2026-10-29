import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_DOMAINS } from '../constants';
import { Tool } from '../types';
import { Cpu, Zap, Activity, Radio, Users, Terminal, Layers, Wrench } from 'lucide-react';

const domainIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  circuit: Cpu,
  embedded: Radio,
  power: Zap,
  software: Activity,
  professional: Users,
};

// Flatten all unique tools for the animated scrolling marquee
const allToolsMap = new Map<string, Tool>();
SKILL_DOMAINS.forEach((domain) => {
  domain.tools.forEach((tool) => {
    if (!allToolsMap.has(tool.name)) {
      allToolsMap.set(tool.name, tool);
    }
  });
});
const allTools = Array.from(allToolsMap.values());

const ToolTile: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div className="flex flex-col items-center gap-2 w-28 sm:w-32 shrink-0 group">
    <div className="w-full h-16 sm:h-20 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-[0_0_18px_rgba(0,240,255,0.08)] border border-slate-700/40 group-hover:border-cyan-400/80 group-hover:scale-105 transition-all duration-300">
      {tool.logo ? (
        <img
          src={tool.logo}
          alt={tool.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain filter group-hover:brightness-105"
        />
      ) : (
        <span className="font-heading font-bold text-base text-slate-800">{tool.name}</span>
      )}
    </div>
    <span className="text-[11px] font-mono text-slate-300 text-center leading-tight group-hover:text-cyan-300 transition-colors">
      {tool.name}
    </span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-dark-950 relative overflow-hidden circuit-grid">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="mb-14 sm:mb-18 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal size={13} /> // 02. TECHNICAL MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Skills & Tools Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-light">
            Continuous engineering competencies across IC physical design, firmware architecture, power systems, and computation.
          </p>
        </div>

        {/* Animated Continuous Scrolling Tools Marquee */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Wrench size={14} />
              <span>EDA & SOFTWARE SUITE (AUTO-SCROLLING // HOVER TO PAUSE)</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              {allTools.length} VERIFIED TOOLS
            </span>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 backdrop-blur-md">
            {/* Left & Right Gradient Shadows for seamless fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-dark-950 via-dark-950/80 to-transparent z-10 pointer-events-none" />

            {/* Marquee Track (duplicated for seamless loop) */}
            <div className="animate-marquee gap-6 sm:gap-8 items-center">
              {[...allTools, ...allTools].map((tool, index) => (
                <ToolTile key={`${tool.name}-${index}`} tool={tool} />
              ))}
            </div>
          </div>
        </div>

        {/* All Skill Domains (Rendered with Scroll Animations - No Click Needed) */}
        <div className="space-y-8 sm:space-y-10">
          {SKILL_DOMAINS.map((domain, index) => {
            const IconComponent = domainIcons[domain.id] || Cpu;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-300 group"
              >
                {/* Domain Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-cyan-400">{domain.code}</div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-light">{domain.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Layers size={14} className="text-cyan-400" />
                    <span>{domain.skills.length} COMPETENCIES</span>
                  </div>
                </div>

                {/* Two-column layout: Left for Core Skills, Right for Associated Hardware & Software */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Left Column: Core Skills & Focus Areas */}
                  <div className="lg:col-span-7 xl:col-span-8">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                      Core Skills & Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {domain.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/25 text-slate-200 text-xs sm:text-sm hover:border-cyan-400/80 hover:text-cyan-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Extra if present (e.g. Languages) */}
                    {domain.extra && (
                      <div className="pt-4 mt-5 border-t border-slate-800/60 flex flex-wrap items-center gap-3 text-xs font-mono">
                        <span className="text-slate-400 uppercase tracking-wider">{domain.extra.label}:</span>
                        <div className="flex flex-wrap gap-2">
                          {domain.extra.items.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded bg-slate-950 border border-cyan-500/30 text-cyan-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Associated Hardware & Software */}
                  <div className="lg:col-span-5 xl:col-span-4 lg:border-l lg:border-slate-800/80 lg:pl-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800/60">
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Wrench size={13} className="text-cyan-400" />
                      Associated Hardware & Software:
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {domain.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/90 border border-slate-700/80 hover:border-cyan-400/60 text-slate-200 text-xs font-mono transition-all duration-200 shadow-sm group/tool"
                        >
                          {tool.logo ? (
                            <div className="w-5 h-5 rounded bg-white flex items-center justify-center p-0.5 shrink-0 shadow-sm">
                              <img src={tool.logo} alt="" className="max-h-full max-w-full object-contain" />
                            </div>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          )}
                          <span className="group-hover/tool:text-cyan-300 transition-colors font-medium">
                            {tool.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
