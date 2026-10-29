import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Radio, Sun, Zap, Code2, Terminal, FileSearch } from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Robotics & Automation': Cpu,
  'IoT & Atmospheric Sensing': Radio,
  'Power Electronics': Zap,
  'Renewable Energy & IoT': Sun,
  'Final Year Capstone (EEE400)': Cpu,
  'Software · AI Research Tool': Code2,
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const CatIcon = categoryIcons[project.category] || Cpu;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="flex flex-col rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 shadow-2xl overflow-hidden group transition-colors duration-300"
    >
      <div className="relative aspect-square bg-slate-950 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full circuit-grid bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/60 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <FileSearch size={38} />
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-wide">{project.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] font-mono uppercase tracking-wider">
            <CatIcon size={12} className="text-cyan-400" />
            {project.category}
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-950/80 text-slate-400 font-mono text-[10px] border border-slate-800">
            SYS_0{project.id}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <ul className="space-y-2 mb-5 list-disc pl-4 marker:text-cyan-500">
          {project.points.map((p) => (
            <li key={p} className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 bg-slate-950/80 rounded text-[11px] font-mono text-cyan-300 border border-cyan-500/20"
              >
                {t}
              </span>
            ))}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors"
                >
                  {l.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-950 dark:bg-dark-950 circuit-grid relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Terminal size={13} /> // 04. ENGINEERING BLUEPRINTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-light">
            Hardware systems, IoT prototypes, a power supply design and one software tool, from concept to working build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
