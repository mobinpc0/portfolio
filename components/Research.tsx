import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH } from '../constants';
import { BookOpen, Terminal, ExternalLink, Clock } from 'lucide-react';

const OWNER = 'Samiul';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 sm:py-28 bg-slate-900/40 dark:bg-dark-900/80 circuit-grid-dense border-t border-b border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="mb-14 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal size={13} /> // 05. RESEARCH & PUBLICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Research & Publications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-light">
            Four conference papers across IoT, digital twins, optical fiber design and sensing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {RESEARCH.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.12 }}
              className="flex flex-col p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
                  <BookOpen size={13} />
                  {item.type}
                </span>
                <span className="text-xs font-mono text-slate-400">{item.year}</span>
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm italic text-slate-400 mb-4 leading-relaxed">{item.venue}</p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                <span className="font-mono text-cyan-400">Authors: </span>
                {item.authors.map((a, i) => (
                  <React.Fragment key={a}>
                    <span className={a.includes(OWNER) ? 'text-white font-semibold' : ''}>{a}</span>
                    {i < item.authors.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-800">
                {item.doi ? (
                  <a
                    href={item.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 break-all"
                  >
                    <ExternalLink size={14} className="shrink-0" />
                    DOI: {item.doi.replace('https://', '')}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-300">
                    <Clock size={14} className="shrink-0" />
                    {item.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
