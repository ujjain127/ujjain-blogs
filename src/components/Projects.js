import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A showcase of my work and skills built with modern web technologies.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/images/portfolio.jpg"
    },
    {
      title: "Task Manager App",
      description: "A full-stack application for managing personal and team tasks.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/images/task-manager.jpg"
    },
    {
      title: "Code Snippets Library",
      description: "A collection of reusable code snippets and components.",
      technologies: ["TypeScript", "React", "Storybook"],
      image: "/images/code-library.jpg"
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
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
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