import React from 'react';
import { motion } from 'framer-motion';
import CircularProgress from '../CircularProgress/CircularProgress';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface SidebarProps {
  personalInfo: {
    name: string;
    residence: string;
    city: string;
    age: string;
    githubLink: string;
    twitterLink: string;
    linkedinLink: string;
    email: string;
    image: string;
  };
  languages: Array<{
    name: string;
    percentage: number;
    label?: string;
  }>;
  skills: Array<{
    name: string;
    percentage: number;
  }>;
}

const Sidebar: React.FC<SidebarProps> = ({ personalInfo, languages, skills }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:w-80 bg-black/50 backdrop-blur-sm border-r border-gray-700 p-6 lg:p-8"
    >
      {/* Profile */}
      <div className="text-center mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-3xl lg:text-4xl font-bold overflow-hidden"
        >
          {personalInfo.image ? (
            <img
              src={personalInfo.image}
              alt={`${personalInfo.name} profile picture`}
              className="w-full h-full object-cover border-4 border-red-500 rounded-full"
            />
          ) : (
            <>{personalInfo.name.charAt(0)}</>
          )}
        </motion.div>
        <h2 className="text-xl lg:text-2xl font-bold mb-2">{personalInfo.name}</h2>
      </div>

      {/* Personal Info */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between">
          <span className="text-gray-400">Residence</span>
          <span className="text-white">{personalInfo.residence}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">City</span>
          <span className="text-white">{personalInfo.city}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Age</span>
          <span className="text-white">{personalInfo.age}</span>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-6">Languages</h3>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CircularProgress percentage={lang.percentage} size={100} />
              <p className="mt-2 font-medium">{lang.name}</p>
              {lang.label && <p className="text-xs text-gray-400">{lang.label}</p>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-6">Skills and Competencies</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-red-400">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center lg:justify-start space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.a
          whileHover={{ y: -3 }}
          href={personalInfo.githubLink}
          className="p-2 rounded-lg bg-gray-700/50 hover:bg-red-500/20 transition-colors"
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ y: -3 }}
          href={personalInfo.twitterLink}
          className="p-2 rounded-lg bg-gray-700/50 hover:bg-red-500/20 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ y: -3 }}
          href={personalInfo.linkedinLink}
          className="p-2 rounded-lg bg-gray-700/50 hover:bg-red-500/20 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ y: -3 }}
          href={`mailto:${personalInfo.email}`}
          className="p-2 rounded-lg bg-gray-700/50 hover:bg-red-500/20 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;