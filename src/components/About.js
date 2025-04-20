import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="main-title">About Me</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Hello, I'm Ujjain</h2>
          <p>
            I'm a passionate software developer and tech enthusiast who loves to explore and share knowledge
            about web development, programming, and technology. Through this blog, I share my experiences,
            insights, and learnings from my journey in the tech world.
          </p>
        </section>

        <section className="about-section">
          <h2>What I Write About</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <h3>Development</h3>
              <p>Tutorials, best practices, and lessons learned in software development</p>
            </div>
            <div className="topic-card">
              <h3>Tech Reviews</h3>
              <p>Honest reviews of development tools and technologies I use</p>
            </div>
            <div className="topic-card">
              <h3>Personal Projects</h3>
              <p>Showcasing my work and sharing the development process</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Let's Connect</h2>
          <p>
            I believe in the power of sharing knowledge and learning from each other. Whether you're a
            fellow developer, tech enthusiast, or just curious about technology, I'd love to connect
            with you. Feel free to reach out through the newsletter or social media!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;