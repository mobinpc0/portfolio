import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Terminal,
  Send,
  MapPin,
  ArrowUpRight,
  Cpu,
  User,
  Users,
  Calendar,
  Heart,
  Compass,
  ChevronDown,
  Copy,
  Check,
  Home,
  Globe,
} from 'lucide-react';
import { PROFILE, PERSONAL_INFO } from '../constants';

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
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyFullAddress = () => {
    const text = `Permanent Address:\nLand mark: ${PERSONAL_INFO.permanentAddress.landmark}\nVillage: ${PERSONAL_INFO.permanentAddress.village}, Post: ${PERSONAL_INFO.permanentAddress.postOffice}, P.S: ${PERSONAL_INFO.permanentAddress.policeStation}, Dist.: ${PERSONAL_INFO.permanentAddress.district}`;
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

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

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
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

        {/* Clickable Personal Informations Section */}
        <div id="personal-informations" className="mb-14">
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <button
              type="button"
              onClick={() => setIsPersonalOpen((prev) => !prev)}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-slate-800/40 transition-colors group cursor-pointer focus:outline-none focus:ring-1 focus:ring-cyan-400"
              aria-expanded={isPersonalOpen}
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-300 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <User size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                      // DIRECTORY
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      CLICK TO {isPersonalOpen ? 'COLLAPSE' : 'EXPAND'}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Personal Informations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans mt-0.5">
                    Family details, permanent address, and official personal profile
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="hidden md:inline-block text-xs font-mono tracking-wider text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {isPersonalOpen ? '[ HIDE DETAILS ]' : '[ VIEW DETAILS ]'}
                </span>
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-400/50 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all">
                  <motion.div
                    animate={{ rotate: isPersonalOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isPersonalOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden border-t border-slate-800/80 bg-slate-950/70"
                >
                  <div className="p-5 sm:p-7 space-y-6">
                    {/* Basic Personal Data Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {/* Full Name */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                          <User size={13} />
                          <span>Full Name</span>
                        </div>
                        <div className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</div>
                      </div>

                      {/* Father's Name */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                          <Users size={13} />
                          <span>Father’s Name</span>
                        </div>
                        <div className="text-sm font-semibold text-white">{PERSONAL_INFO.fathersName}</div>
                      </div>

                      {/* Mother's Name */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                          <Users size={13} />
                          <span>Mother’s Name</span>
                        </div>
                        <div className="text-sm font-semibold text-white">{PERSONAL_INFO.mothersName}</div>
                      </div>

                      {/* Birth Date */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                          <Calendar size={13} />
                          <span>Birth Date</span>
                        </div>
                        <div className="text-sm font-semibold text-white font-mono">{PERSONAL_INFO.birthDate}</div>
                      </div>

                      {/* Nationality */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                          <Globe size={13} />
                          <span>Nationality</span>
                        </div>
                        <div className="text-sm font-semibold text-white">{PERSONAL_INFO.nationality}</div>
                      </div>

                      {/* Religion & Marital Status */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors grid grid-cols-2 gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                            <Compass size={13} />
                            <span>Religion</span>
                          </div>
                          <div className="text-sm font-semibold text-white">{PERSONAL_INFO.religion}</div>
                        </div>
                        <div className="border-l border-slate-800 pl-3">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                            <Heart size={13} />
                            <span>Status</span>
                          </div>
                          <div className="text-sm font-semibold text-white">{PERSONAL_INFO.maritalStatus}</div>
                        </div>
                      </div>
                    </div>

                    {/* Permanent Address Detailed Card */}
                    <div className="p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                          <Home size={15} />
                          <span>Permanent Address</span>
                        </div>

                        <button
                          type="button"
                          onClick={copyFullAddress}
                          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-colors cursor-pointer"
                        >
                          {copiedAddress ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                          <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <div className="text-xs font-mono text-slate-400 uppercase">Land Mark:</div>
                          <div className="text-slate-200 font-medium leading-relaxed">
                            {PERSONAL_INFO.permanentAddress.landmark}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="text-xs font-mono text-slate-400 uppercase">Address Line:</div>
                          <div className="text-slate-200 font-medium leading-relaxed">
                            Village: <span className="text-white">{PERSONAL_INFO.permanentAddress.village}</span>, Post:{' '}
                            <span className="text-white">{PERSONAL_INFO.permanentAddress.postOffice}</span>, P.S:{' '}
                            <span className="text-white">{PERSONAL_INFO.permanentAddress.policeStation}</span>, Dist.:{' '}
                            <span className="text-white">{PERSONAL_INFO.permanentAddress.district}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
