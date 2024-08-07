import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,FaNodeJs,FaGitAlt  } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiCplusplus, SiTypescript,SiExpress, SiMongodb } from 'react-icons/si';
import { DiMysql } from "react-icons/di";

const skills = [
 { name: 'C++', icon: SiCplusplus },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React JS', icon: FaReact },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'SQL', icon: DiMysql },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: FaGitAlt }
//   { name: 'JavaScript', icon: SiJavascript }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 text-white relative z-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <skill.icon className="text-6xl mb-4 text-blue-500 hover:text-blue-700 transition duration-300" />
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
