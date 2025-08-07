import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Expertise from '../Expertise/Expertise';

interface MainContentProps {
  personalInfo: {
    name: string;
    githubLink: string;
  };
  currentText: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
  expertise: Array<{
    title: string;
    description: string;
  }>;
}

const MainContent: React.FC<MainContentProps> = ({ 
  personalInfo, 
  currentText, 
  stats, 
  expertise 
}) => {
  return (
    <div className="flex-1 p-6 lg:p-12 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
      />

      <Header name={personalInfo.name} currentText={currentText} githubLink={personalInfo.githubLink} />
      <Stats stats={stats} />
      <Expertise expertise={expertise} />
    </div>
  );
};

export default MainContent;