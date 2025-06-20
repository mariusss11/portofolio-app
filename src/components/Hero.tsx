import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const typingTexts = [
  "scalable, high-performance systems",
  "robust backend APIs",
  "cloud-native architectures",
];

export const Hero: React.FC = () => {

  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let typingSpeed = isDeleting ? 70 : 90;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1800; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500; // Pause before typing next
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 dark:bg-slate-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-green-100 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Marius Carchilan
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Fullstack Developer & Systems Architect passionate about building {' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {displayedText}
              <span className="border-r-2 border-blue-600 dark:border-blue-400 animate-pulse ml-1" />
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md">
              <span className="flex items-center gap-2">
                View My Work
                {/* <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" /> */}
              </span>

            </button>
            <button className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://drive.google.com/file/d/1-Mbc3yx__0sVLiI4iB2Tkrr5p4D5tPaT/view?usp=sharing', '_blank')}
              aria-label="Download CV"
            >
              <span className="flex items-center gap-2">
                {/* <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" /> */}
                Take a look at my CV
              </span>
            </button>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          style={{ bottom: '-40px', borderLeft: 'auto', margin: 'auto', position: 'absolute', left: '44.3%', transform: 'translateX(-50%)'
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-400"
          aria-label="Scroll to About Section"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors duration-400" />
        </button>
      </div>
    </section>
  );
};