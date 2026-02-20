import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { useTheme } from './ThemeContext';

const skillColors = [
  { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.4)', text: '#EAB308' },
  { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.4)', text: '#3B82F6' },
  { bg: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.4)', text: '#A855F7' },
  { bg: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.4)', text: '#22C55E' },
  { bg: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.4)', text: '#EC4899' },
  { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.4)', text: '#F97316' },
];

const floatClasses = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
  },
};

const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #EAB308, transparent)' }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10 sm:mb-16 text-center">
          <h3 className="text-sm font-bold tracking-widest text-gold-500 mb-2">EXPERTISE</h3>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white">Technical Arsenal</h2>
        </div>

        {/* Floating Skill Tags */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          {SKILLS.map((skill, index) => {
            const color = skillColors[index % skillColors.length];
            const floatClass = floatClasses[index % floatClasses.length];
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`${floatClass} px-4 sm:px-5 py-2 sm:py-3 rounded-full backdrop-blur-sm cursor-default transition-shadow duration-300`}
                style={{
                  background: color.bg,
                  border: `1px solid ${color.border}`,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <span
                  className="text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap"
                  style={{ color: color.text }}
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill Bars */}
        <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
          {SKILLS.map((skill, index) => {
            const color = skillColors[index % skillColors.length];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color.text}, ${color.border})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;