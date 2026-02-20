import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50 dark:bg-dark-900 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm font-bold tracking-widest text-gold-500 mb-2">GET IN TOUCH</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
            Let's innovate together.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
            Open for opportunities in VLSI, Embedded Systems, and Automation Engineering.
            <br />
            Based in Mirpur-1, Dhaka, Bangladesh.
          </p>

          <a
            href="mailto:mobinpc00@gmail.com"
            className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold tracking-wide hover:bg-gold-500 dark:hover:bg-gold-400 transition-colors duration-300 mb-16"
          >
            SEND AN EMAIL
          </a>

          <div className="flex justify-center gap-8">
            {[
              { icon: Github, href: "https://github.com/mobinpc0" },
              { icon: Linkedin, href: "https://linkedin.com/in/mobinpc0" },
              { icon: Mail, href: "mailto:mobinpc00@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors transform hover:scale-110"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="absolute bottom-4 left-0 right-0 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Md. Samiul Islam Mobin. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
