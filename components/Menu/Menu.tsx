import React from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  href: string;
}

interface MenuProps {
  isMenuOpen: boolean;
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, items }) => {
  if (!isMenuOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-8">
          {items.map((item, index) => (
            <motion.a
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              href={item.href}
              className="block text-2xl hover:text-red-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;