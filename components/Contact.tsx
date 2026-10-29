import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Terminal, Send, MapPin, ArrowUpRight, Cpu } from 'lucide-react';
import { PROFILE } from '../constants';

const cards = [
  {
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    label: 'Email',
    value: PROFILE.email,
    cta: 'Send Message',
    color: 'cyan',
    external: false,
  },
  {
    href: PROFILE.phoneHref,
    icon: Phone,
    label: 'Phone',
    value: PROFILE.phone,
    cta: 'Call',
    color: 'sky',
    external: false,
  },
  {
    href: PROFILE.linkedin,
    icon: Linkedin,
    label: 'LinkedIn',
    value: PROFILE.linkedinLabel,
    cta: 'Connect on LinkedIn',
    color: 'blue',
    external: true,
  },
  {
    href: PROFILE.github,
    icon: Github,
    label: 'GitHub',
    value: PROFILE.githubLabel,
    cta: 'Browse Repositories',
    color: 'emerald',
    external: true,
  },
] as const;

const colorMap: Record<string, { text: string; chip: string; hover: string }> = {
  cyan: { text: 'text-cyan-400', chip: 'bg-cyan-500/10 border-cyan-500/30', hover: 'hover:border-cyan-400/50' },
  sky: { text: 'text-sky-400', chip: 'bg-sky-500/10 border-sky-500/30', hover: 'hover:border-sky-400/50' },
  blue: { text: 'text-blue-400', chip: 'bg-blue-500/10 border-blue-500/30', hover: 'hover:border-blue-400/50' },
  emerald: { text: 'text-emerald-400', chip: 'bg-emerald-500/10 border-emerald-500/30', hover: 'hover:border-emerald-400/50' },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-950 dark:bg-dark-950 circuit-grid relative overflow-hidden border-t border-slate-800/80">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal size={13} /> // 07. CONTACT
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
            Let&rsquo;s Talk.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed mb-6">
            Open to opportunities in VLSI, embedded systems and automation, and to research collaborations.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
            <MapPin size={14} className="text-cyan-400" />
            <span>{PROFILE.location}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {cards.map((c) => {
            const col = colorMap[c.color];
            return (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`p-6 rounded-2xl bg-slate-900/80 border border-slate-800 ${col.hover} hover:bg-slate-900 transition-all duration-300 text-left group flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${col.chip} ${col.text}`}>
                    <c.icon size={20} />
                  </div>
                  <div className={`text-xs font-mono uppercase tracking-wider mb-1 ${col.text}`}>{c.label}</div>
                  <div className="text-sm font-semibold text-white break-all">{c.value}</div>
                </div>
                <div className="mt-4 flex items-center text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span>{c.cta}</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mb-16">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-heading font-bold tracking-wider hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-300"
          >
            <Send size={18} />
            <span>EMAIL ME</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-cyan-400" />
            <span>{PROFILE.name.toUpperCase()}</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
