import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Achievement } from '../types';
import { Terminal, ZoomIn, X, Trophy } from 'lucide-react';

const kindStyle: Record<Achievement['kind'], string> = {
  Achievement: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
  Certification: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
  Training: 'text-sky-300 border-sky-500/30 bg-sky-500/10',
};

const Achievements: React.FC = () => {
  const [open, setOpen] = useState<Achievement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-slate-950 dark:bg-dark-950 circuit-grid relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal size={13} /> // 06. ACHIEVEMENTS & CERTIFICATES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Achievements & Certificates
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-light">
            Academic rank, competitions, research presentations and training certificates. Select a certificate to view it in full.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
              className="flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 shadow-xl overflow-hidden group transition-colors duration-300"
            >
              {item.image ? (
                <button
                  type="button"
                  onClick={() => setOpen(item)}
                  aria-label={`View certificate: ${item.title}`}
                  className="relative aspect-[7/5] bg-slate-950 overflow-hidden text-left cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} certificate`}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={16} />
                  </span>
                </button>
              ) : (
                <div className="relative aspect-[7/5] bg-gradient-to-br from-cyan-950/70 via-slate-950 to-slate-950 circuit-grid flex flex-col items-center justify-center">
                  <Trophy size={26} className="text-cyan-400 mb-2" />
                  <div className="font-heading font-extrabold text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                    {item.big}
                  </div>
                  <div className="font-mono text-sm text-slate-300 mt-1">{item.bigSub}</div>
                </div>
              )}

              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-mono uppercase tracking-wider ${kindStyle[item.kind]}`}>
                    {item.kind}
                  </span>
                  {item.date && <span className="text-[11px] font-mono text-slate-400">{item.date}</span>}
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm text-slate-300 mb-2">{item.issuer}</div>
                {item.note && <p className="text-xs text-slate-400 font-light leading-relaxed">{item.note}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {open && open.image && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400"
          >
            <X size={20} />
          </button>
          <img
            src={open.image}
            alt={`${open.title} certificate`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-full rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Achievements;
