import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RESEARCH } from '../constants';
import { BookOpen, Terminal, ExternalLink, Clock, Award, X } from 'lucide-react';

const OWNER = 'Samiul';

const Research: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    conference: string;
    image: string;
    paperId?: string;
  } | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedCert]);

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
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
                    <BookOpen size={13} />
                    {item.type}
                  </span>
                  {item.paperId && (
                    <span className="px-2 py-0.5 rounded bg-blue-950/70 border border-blue-500/30 text-blue-300 font-mono text-[11px]">
                      ID: #{item.paperId}
                    </span>
                  )}
                </div>
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

              <div className="mt-auto pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div>
                  {item.doi ? (
                    <a
                      href={item.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 break-all transition-colors"
                    >
                      <ExternalLink size={13} className="shrink-0" />
                      DOI: {item.doi.replace('https://', '')}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-amber-300">
                      <Clock size={13} className="shrink-0" />
                      {item.status}
                    </span>
                  )}
                </div>

                {item.certificateImage && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCert({
                        title: item.certificateTitle || `Certificate of Presentation · ${item.venue}`,
                        conference: item.venue,
                        image: item.certificateImage!,
                        paperId: item.paperId,
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 text-xs font-mono font-medium transition-all shadow-[0_0_12px_rgba(0,240,255,0.1)] cursor-pointer group/btn"
                  >
                    <Award size={13} className="text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                    <span>View Certificate</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCert(null);
          }}
        >
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-3 bg-slate-950/80">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase tracking-wider">
                    <Award size={11} /> Certificate of Presentation
                  </span>
                  {selectedCert.paperId && (
                    <span className="font-mono text-[11px] text-slate-400">
                      Paper ID: #{selectedCert.paperId}
                    </span>
                  )}
                </div>
                <h4 className="text-sm sm:text-base font-heading font-semibold text-white truncate">
                  {selectedCert.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                  title="Open full size in new tab"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto p-3 sm:p-6 flex items-center justify-center bg-slate-950/60">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[76vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-slate-800 bg-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="truncate">{selectedCert.conference}</span>
              <span className="text-cyan-400 shrink-0 ml-2">Verified IEEE Presentation</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;
