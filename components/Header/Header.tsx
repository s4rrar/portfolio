import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  name: string;
  currentText: string;
  githubLink: string;
}

const Header: React.FC<HeaderProps> = ({ name, currentText, githubLink }) => {
  return (
    <div className="relative z-10 mb-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-8 lg:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-4xl font-bold mb-6"
          >
            {name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl lg:text-2xl mb-8"
          >
            <span className="text-red-400">&gt; </span>
            <span className="text-white">I am a {currentText}</span>
            <span className="text-red-400">|</span>
          </motion.div>
          <a href={githubLink} target='_blank' rel="noopener noreferrer">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;