import React from 'react';
import { motion } from 'framer-motion';

interface ExpertiseItem {
  title: string;
  description: string;
}

interface ExpertiseProps {
  expertise: ExpertiseItem[];
}

const Expertise: React.FC<ExpertiseProps> = ({ expertise }) => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl lg:text-4xl font-bold mb-12"
      >
        My Expertise
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800/90 rounded-xl p-6 border border-gray-700/50 hover:border-red-500/30 hover:-translate-y-1 transition-all duration-200 ease-out will-change-transform"
          >
            <h3 className="text-xl font-semibold mb-4 text-red-400">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;