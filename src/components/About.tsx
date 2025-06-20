import { skills, experiences } from '../data/portfolio';
import React, { useRef, useEffect, useState } from 'react';

const SkillBar: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
}

// Counter component
const Counter: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2500 }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export const About: React.FC = () => {
  const skillCategories = {
    languages: skills.filter(s => s.category === 'languages'),
    frameworks: skills.filter(s => s.category === 'frameworks'),
    databases: skills.filter(s => s.category === 'databases'),
    cloud: skills.filter(s => s.category === 'cloud'),
    tools: skills.filter(s => s.category === 'tools')
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer building robust, scalable systems that power modern applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Expertise
            </h3>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in designing and implementing high-performance backend systems and RESTful APIs, microservices architectures, 
                and cloud-native solutions. My focus is on writing clean, maintainable code that scales efficiently under load.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not architecting systems, you'll find me optimizing code, using tools like SonarQube, exploring new technologies, 
                or mentoring fellow mates in system design and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-500">100M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">API Requests Handled</div>
              </div> */}
               <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  <Counter end={15000} />+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Lines of code</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  <Counter end={5} />+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">           
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  <Counter end={100} />%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Happy clients</div>
              </div>
              {/* <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div> */}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Programming Languages</h4>
                {skillCategories.languages.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Frameworks & Tools</h4>
                {skillCategories.frameworks.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Databases</h4>
            {skillCategories.databases.map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Cloud & DevOps</h4>
            {skillCategories.cloud.map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tools & Technologies</h4>
            {skillCategories.tools.map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};