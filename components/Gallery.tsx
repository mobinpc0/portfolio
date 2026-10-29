import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY } from '../constants';
import { Terminal, Camera, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-900/50 dark:bg-dark-900/80 circuit-grid-dense border-t border-b border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal size={13} /> // 05. FIELD ARCHIVES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Engineering Lab & Field Operations
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-light">
            Visual logs of circuit fabrication, cleanroom analysis, power station field training, and IEEE conference presentations.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-slate-800 hover:border-cyan-500/50 shadow-xl bg-slate-950 transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full object-cover filter contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover HUD Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
                  <span>LOG_FILE #0{item.id}</span>
                  <ZoomIn size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-300 block mb-1">RECORDED FIELDWORK</span>
                  <p className="text-white font-heading font-bold text-lg">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
