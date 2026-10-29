import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Zap } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4"
      >
        <div className="backdrop-blur-xl bg-dark-900/85 border border-cyan-400/20 rounded-full px-5 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-w-5xl w-full">
          {/* Logo / Home Link */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <Cpu size={18} className="animate-pulse" />
            </div>
            <div className="flex items-baseline">
              <span className="text-sm sm:text-base font-heading font-bold tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors">
                HOME PAGE
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              ACTIVE
            </div>

            <button
              className="md:hidden p-2 text-slate-200 hover:text-cyan-400"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-7 md:hidden circuit-grid"
          >
            <div className="flex items-center gap-2 mb-4 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <Zap size={14} /> Systems Navigation
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-heading font-semibold text-slate-200 hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
