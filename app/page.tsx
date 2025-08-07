'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import MainContent from '@/components/MainContent/MainContent';
import Menu from '@/components/Menu/Menu';

interface PersonalInfo {
  name: string;
  titles: string[];
  residence: string;
  city: string;
  age: string;
  githubLink: string;
  twitterLink: string;
  linkedinLink: string;
  email: string;
  image: string;
}

interface Language {
  name: string;
  percentage: number;
  label?: string;
}

interface Skill {
  name: string;
  percentage: number;
}

interface Stat {
  number: string;
  label: string;
}

interface MenuItem {
  name: string;
  href: string;
}

interface ExpertiseItem {
  title: string;
  description: string;
}

const Page = () => {
  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age.toString();
  };

  const personalInfo: PersonalInfo = {
    name: "AL-Hassan Sarrar",
    titles: ["Computer Scientist", "Data Scientist", "Cyber Security Expert", "Full Stack Developer", "Software Engineer"],
    residence: "Palestine",
    city: "Bethlehem",
    age: calculateAge(new Date(2004, 6, 14)),
    githubLink: "https://github.com/s4rrar",
    twitterLink: "https://twitter.com/s4rrar",
    linkedinLink: "https://www.linkedin.com/in/s4rrar",
    email: "s4rrar@protonmail.com",
    image: "https://i.ibb.co/4wT9k03z/photo-2025-07-24-01-58-35.jpg",
  };

  const languages: Language[] = [
    { name: "Arabic", percentage: 100, label: "Native" },
    { name: "English", percentage: 90 },
    { name: "Hebrew", percentage: 60 },
  ];

  const skills: Skill[] = [
    { name: "Cyber Security", percentage: 95 },
    { name: "Full Stack Development", percentage: 95 },
    { name: "Software Engineering", percentage: 90 },
    { name: "Data Science", percentage: 90 },
    { name: "Mobile Development", percentage: 80 }
  ];

  const stats: Stat[] = [
    { number: "15+", label: "Completed Projects" },
    { number: "12+", label: "Freelance Clients" },
    { number: "8+", label: "Honors & Awards" },
    { number: "7+", label: "Open-source Projects" }
  ];

  const menuItems: MenuItem[] = [
    { name: "Home", href: "/" },
    { name: "Channel", href: "https://t.me/nanvalue" },
    { name: "Projects", href: "https://github.com/s4rrar" },
    { name: "Contact", href: "https://t.me/s4rrar" },
  ];

  const expertise: ExpertiseItem[] = [
    {
      title: "Cyber Security",
      description: "With a strong background in cyber security, I specialize in securing applications, networks, and systems against vulnerabilities..."
    },
    {
      title: "Full Stack Development",
      description: "I build robust and responsive web applications using technologies like React, Next.js, Node.js, and modern databases..."
    },
    {
      title: "Software Engineering",
      description: "I apply software engineering principles to build maintainable, testable, and scalable systems..."
    },
    {
      title: "Data Science",
      description: "I leverage data to drive insights and decisions, using tools such as Python..."
    },
    {
      title: "Mobile Development",
      description: "I design and develop mobile applications with a focus on performance and user experience..."
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = personalInfo.titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting && currentText === currentTitle) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      } else if (isDeleting && currentText === '') {
        // Move to next title after deleting
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        setTypingSpeed(150);
        return;
      }

      const newText = isDeleting
        ? currentTitle.substring(0, currentText.length - 1)
        : currentTitle.substring(0, currentText.length + 1);

      setCurrentText(newText);
      const speed = isDeleting ? 75 : 150;
      setTypingSpeed(speed);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, personalInfo.titles, typingSpeed]);

  return (
    <div className="font-mono min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white cursor-default">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar personalInfo={personalInfo} languages={languages} skills={skills} />
        
        <MainContent 
          personalInfo={personalInfo} 
          currentText={currentText} 
          stats={stats} 
          expertise={expertise} 
        />
      </div>

      <Menu isMenuOpen={isMenuOpen} items={menuItems} />
    </div>
  );
};

export default Page;