import React from 'react';

// Import images
import portfolioImg from '../images/portfolio.jpg';
import taskManagerImg from '../images/task-manager.jpg';
import codeLibraryImg from '../images/code-library.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A showcase of my work and skills built with modern web technologies.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: portfolioImg,
      link: "#"
    },
    {
      title: "Task Manager App",
      description: "A full-stack application for managing personal and team tasks.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: taskManagerImg,
      link: "#"
    },
    {
      title: "Code Snippets Library",
      description: "A collection of reusable code snippets and components.",
      technologies: ["TypeScript", "React", "Storybook"],
      image: codeLibraryImg,
      link: "#"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="main-title">Projects</h1>
      <p className="section-description">
        Here are some of my favorite projects I've worked on. Each one represents a unique challenge and learning experience:
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="image-overlay">
                <svg className="icon-expand" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
            </a>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 