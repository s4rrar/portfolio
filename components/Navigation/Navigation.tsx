import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-50 p-6"
    >
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer p-3 rounded-lg bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-colors"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </motion.nav>
  );
};

export default Navigation;