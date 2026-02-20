import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[350px] sm:h-[400px] md:h-[450px] w-full rounded-2xl bg-white dark:bg-dark-800 shadow-xl overflow-hidden cursor-pointer group"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>

      <div
        style={{ transform: "translateZ(75px)" }}
        className="absolute bottom-0 left-0 p-8 w-full text-white"
      >
        <div className="flex justify-between items-end">
          <div>
            <p className="text-gold-400 text-sm font-bold tracking-wider mb-2 uppercase">{project.category}</p>
            <h3 className="text-3xl font-serif font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2 mb-4">{project.description}</p>
            <div className="flex gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs border border-white/20">{t}</span>
              ))}
            </div>
          </div>
          <div className="p-3 bg-white rounded-full text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16">
          <h3 className="text-sm font-bold tracking-widest text-gold-500 mb-2">PORTFOLIO</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">Selected Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;