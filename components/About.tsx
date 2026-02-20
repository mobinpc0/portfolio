import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-sm font-bold tracking-widest text-gold-500 mb-2">ABOUT ME</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Engineering solutions<br />for a smarter future.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base sm:text-lg">
              I am a motivated Electrical and Electronic Engineer with high academic excellence (CGPA 3.96/4.0) from Daffodil International University.
              My expertise lies in VLSI, semiconductor design, and embedded systems, with a strong ability to bridge theoretical knowledge with practical engineering solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-base sm:text-lg">
              From designing custom IC layouts at ULKASEMI to analyzing power generation systems at Ghorarshal Power Station, I have diverse industrial experience.
              I am passionate about IoT, robotics, and power electronics, constantly seeking innovation in automation and circuit design.
            </p>
          </motion.div>

          {/* Abstract Graphic / Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[500px]">
              <div className="absolute inset-0 border border-gray-200 dark:border-gray-700 rounded-full transform translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-gray-200 dark:bg-dark-800 rounded-full overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/400/600?grayscale" alt="Md. Samiul Islam Mobin" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
