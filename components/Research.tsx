import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH, EXPERIENCES } from '../constants';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-16 sm:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Research Column */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-gold-500 mb-8">RESEARCH & PUBLICATIONS</h3>
            <div className="space-y-12">
              {RESEARCH.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 hover:border-gold-500 transition-colors"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-serif italic">{item.journal}, {item.year}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.abstract}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-sm font-bold tracking-widest text-gold-500 mb-8">EXPERIENCE</h3>
            <div className="space-y-12">
              {EXPERIENCES.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                    <span className="text-sm font-mono text-gold-600 dark:text-gold-400">{exp.period}</span>
                  </div>
                  <h5 className="text-md text-gray-700 dark:text-gray-300 mb-2 font-medium">{exp.company}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
