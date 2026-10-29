import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Award,
  Zap,
  BookOpen,
  Activity,
  CheckCircle2,
  Trophy,
  GraduationCap,
  ZoomIn,
  FileText,
  X,
  ExternalLink,
} from 'lucide-react';
import { PROFILE, EDUCATION } from '../constants';

interface EducationDoc {
  title: string;
  type: 'Certificate' | 'Transcript';
  image: string;
  previewLabel: string;
}

const bscDocs: EducationDoc[] = [
  {
    title: 'B.Sc. in Electrical & Electronic Engineering – Provisional Certificate',
    type: 'Certificate',
    image: '/img/education/bsc-certificate.jpg',
    previewLabel: 'Certificate',
  },
  {
    title: 'Academic Transcript (Page 1) – B.Sc. in Electrical & Electronic Engineering',
    type: 'Transcript',
    image: '/img/education/bsc-transcript-p1.jpg',
    previewLabel: 'Transcript (P1)',
  },
  {
    title: 'Academic Transcript (Page 2) – B.Sc. in Electrical & Electronic Engineering (CGPA 3.96)',
    type: 'Transcript',
    image: '/img/education/bsc-transcript-p2.jpg',
    previewLabel: 'Transcript (P2)',
  },
];

const hscDocs: EducationDoc[] = [
  {
    title: 'Higher Secondary Certificate (HSC) – Rajshahi Board Certificate',
    type: 'Certificate',
    image: '/img/education/hsc-certificate.jpg',
    previewLabel: 'Certificate',
  },
  {
    title: 'Higher Secondary Certificate (HSC) – Academic Transcript (GPA 5.00)',
    type: 'Transcript',
    image: '/img/education/hsc-transcript.jpg',
    previewLabel: 'Transcript',
  },
];

const stats = [
  {
    icon: Award,
    value: '3.96 / 4.00',
    label: 'Academic CGPA',
    detail: 'B.Sc. in EEE, Daffodil International University',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
  },
  {
    icon: Trophy,
    value: '1st of 283',
    label: 'Department Rank',
    detail: 'EEE 37th Batch (Batch 221), undergraduate',
    color: 'text-sky-400',
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
  },
  {
    icon: Zap,
    value: '2 Trainings',
    label: 'Industrial Experience',
    detail: 'VLSI & IC design at ULKASEMI, power plant engineering at Ghorashal (BPDB)',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
  },
  {
    icon: BookOpen,
    value: '4 Papers',
    label: 'Conference Publications',
    detail: '2 on IEEE Xplore, 2 presented with publication forthcoming',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
  },
];

const checklist = [
  'Analog & Digital Circuit Design, Custom Layout (Cadence)',
  'LoRa, ESP32 & Embedded IoT Systems',
  'Power Plant Operation, HMI & SCADA',
  'MATLAB / Simulink Modeling',
];

const About: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<EducationDoc | null>(null);

  useEffect(() => {
    if (!selectedDoc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDoc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedDoc]);

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-900/60 dark:bg-dark-900/90 relative overflow-hidden circuit-grid-dense border-t border-b border-slate-800/80">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

              <div className="relative bg-slate-950/90 dark:bg-dark-950 border border-cyan-500/30 rounded-2xl p-4 sm:p-5 shadow-[0_0_35px_rgba(0,240,255,0.15)] overflow-hidden">
                <div className="flex items-center justify-between font-mono text-[11px] text-cyan-400/80 pb-3 mb-3 border-b border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    DIU // EEE 37TH BATCH
                  </span>
                  <span>ID: 221</span>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-800">
                  <img
                    src="/img/profile.jpg"
                    alt={PROFILE.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/20 text-xs font-mono">
                    <div className="text-white font-semibold">{PROFILE.name}</div>
                    <div className="text-cyan-400 text-[11px]">B.Sc. Electrical & Electronic Eng.</div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>LOC: MIRPUR-2, DHAKA</span>
                  <span className="text-emerald-400">CGPA: 3.96/4.00</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Activity size={12} className="animate-pulse" /> // 01. ENGINEERING PROFILE
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
              Electrical & Electronic Engineer, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                from Silicon to Power Systems.
              </span>
            </h2>

            <p className="text-slate-300 mb-5 leading-relaxed text-base sm:text-lg font-light">
              I am a motivated <strong className="text-white font-medium">Electrical and Electronic Engineer</strong> with high academic standing (CGPA 3.96/4.00, ranked 1st in my department) from Daffodil International University, with a strong foundation in VLSI and semiconductor design, analog and digital circuit design, and embedded systems.
            </p>

            <p className="text-slate-400 mb-8 leading-relaxed text-sm sm:text-base font-light">
              At <span className="text-cyan-300 font-medium">ULKASEMI</span> I trained in analog and digital design, design verification and custom layout with Cadence EDA tools. At <span className="text-sky-300 font-medium">Ghorashal Training Center (BPDB)</span> I trained in power generation processes, electrical system analysis, load management, HMI and SCADA. My work has been presented at <span className="text-emerald-300 font-medium">IEEE conferences</span>, covering IoT, digital twins and optical fiber design. I am seeking opportunities in VLSI, embedded systems or automation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 font-sans text-sm">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-5 rounded-xl bg-slate-950/80 dark:bg-dark-950 border ${stat.border} ${stat.bg} backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-2xl font-heading font-extrabold ${stat.color}`}>{stat.value}</span>
                <stat.icon className={stat.color} size={22} />
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-400 leading-relaxed font-light">{stat.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Academic Foundation & Education (B.Sc. in EEE & HSC Science) */}
        <div className="pt-10 sm:pt-12 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <GraduationCap size={16} />
              <span>Academic Foundation // Education</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              ACCREDITED DEGREES & CERTIFICATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Degree 1: B.Sc. in EEE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-cyan-400/50 backdrop-blur-sm transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                    2022 – 2026
                  </span>
                  <span className="text-sm font-mono font-bold text-cyan-400">
                    CGPA 3.96 / 4.00
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  Bachelor of Electrical & Electronic Engineering
                </h4>

                <div className="text-sm text-slate-300 mb-1 font-medium">
                  Daffodil International University, Dhaka
                </div>
                <div className="text-xs text-slate-400 mb-4 font-light">
                  Faculty of Engineering
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-cyan-500/20 text-xs font-mono text-emerald-400 flex items-center gap-2 mb-5">
                  <Trophy size={14} className="shrink-0 text-cyan-400" />
                  <span>1st in Department · EEE 37th Batch (221) · 283 students</span>
                </div>
              </div>

              {/* Action Buttons to View Certificate & Transcripts */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedDoc(bscDocs[0])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-mono text-xs transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] cursor-pointer group"
                >
                  <FileText size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>View Certificate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(bscDocs[1])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 font-mono text-xs transition-all duration-300 shadow-sm cursor-pointer group"
                >
                  <FileText size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>View Transcripts</span>
                </button>
              </div>
            </motion.div>

            {/* Degree 2: HSC Science */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-sky-400/50 backdrop-blur-sm transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold">
                    2020
                  </span>
                  <span className="text-sm font-mono font-bold text-sky-400">
                    GPA 5.00 / 5.00
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  Higher Secondary Certificate (HSC) – Science
                </h4>

                <div className="text-sm text-slate-300 mb-1 font-medium">
                  Rajshahi Govt. City College
                </div>
                <div className="text-xs text-slate-400 mb-4 font-light">
                  Rajshahi Education Board
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-sky-500/20 text-xs font-mono text-sky-300 flex items-center gap-2 mb-5">
                  <Award size={14} className="shrink-0 text-sky-400" />
                  <span>Golden GPA 5.00 · Higher Secondary Science Division</span>
                </div>
              </div>

              {/* Action Buttons to View Certificate & Transcript */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedDoc(hscDocs[0])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-950/40 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400 text-sky-300 font-mono text-xs transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] cursor-pointer group"
                >
                  <FileText size={14} className="text-sky-400 group-hover:scale-110 transition-transform" />
                  <span>View Certificate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(hscDocs[1])}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-sky-400 text-slate-200 hover:text-sky-300 font-mono text-xs transition-all duration-300 shadow-sm cursor-pointer group"
                >
                  <FileText size={14} className="text-sky-400 group-hover:scale-110 transition-transform" />
                  <span>View Transcript</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clickable Image Modal for Certificate & Transcript */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedDoc.title}
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/90 gap-3">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shrink-0">
                  {selectedDoc.type}
                </span>
                <span className="font-heading font-semibold text-white text-xs sm:text-sm truncate">
                  {selectedDoc.title}
                </span>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-2.5 shrink-0">
                {/* Document page switchers */}
                <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  {(selectedDoc.image.includes('bsc') ? bscDocs : hscDocs).map((doc) => (
                    <button
                      key={doc.image}
                      type="button"
                      onClick={() => setSelectedDoc(doc)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                        selectedDoc.image === doc.image
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {doc.previewLabel}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={selectedDoc.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                    title="Open full size in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedDoc(null)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Body / Image */}
            <div className="flex-1 overflow-auto p-3 sm:p-5 flex items-center justify-center bg-slate-950/60">
              <img
                src={selectedDoc.image}
                alt={selectedDoc.title}
                className="max-h-[78vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
