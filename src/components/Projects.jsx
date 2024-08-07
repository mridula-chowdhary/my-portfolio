import React from 'react';
import foodApp from '../assets/food-app.png';
import resume from '../assets/Resume.png'

const projects = [
  {
    title: 'Food-Corner',
    description: 'Food Corner is a web application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS. It provides users with a personalized experience to browse, order, and review food items. Key features include secure login, personalized accounts, cart functionality, and a responsive design for compatibility across devices.',
    link: 'https://github.com/mridula-chowdhary/food-corner',
    image: foodApp,
  },
  {
    title: 'Resume-maker',
    description: 'Resume Builder is a web app developed with React and CSS. It allows users to create professional resumes with different sections and color options. Key features include secure login, template selection, customization options, real-time preview, and the ability to download resumes as PDFs.',
    link: 'https://github.com/mridula-chowdhary/resume-maker',
    image: resume, 
  },

];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-14">My Projects</h2>
        <div className="flex flex-wrap -mx-6 justify-center lg:justify-center">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-6 mb-12">
              <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={project.image} alt={project.title} className="w-full h-52 object-contain rounded-md"/>
                <div className="p-6">
                  <h3 className="text-2xl text-white font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-left">{project.description}</p>
                  <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
