import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, Award, Terminal, MapPin, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-900/40 dark:bg-dark-900/80 circuit-grid-dense border-t border-b border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div className="mb-14 sm:mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal size={13} /> // 03. EXPERIENCE & TRAINING
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Experience & Training
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-light">
            Hands-on industrial engineering immersion across semiconductor VLSI layout, high-voltage power generation, and technical club leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical timeline trace line */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-6 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-800" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="pl-12 sm:pl-16 relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute left-4 sm:left-6 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#00F0FF] transition-all duration-300 z-10" />

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded bg-slate-950 border border-cyan-500/30 text-cyan-300 font-semibold shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-xs sm:text-sm">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Award size={15} className="text-cyan-400 shrink-0" />
                    <span>{exp.company}</span>
                  </div>

                  {exp.location && (
                    <div className="text-slate-400 flex items-center gap-1.5 font-mono text-xs">
                      <MapPin size={13} className="text-slate-500 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      <CheckCircle2 size={15} className="text-cyan-400/80 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
