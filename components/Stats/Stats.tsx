import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  number: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-2">
            {stat.number}
          </div>
          <div className="text-sm lg:text-base text-gray-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;