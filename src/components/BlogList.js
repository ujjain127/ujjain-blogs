import React from 'react';
import BlogCard from './BlogCard';

// Import images
import featuredDesignImg from '../images/featured-design.jpg';
import uxReviewImg from '../images/ux-review.jpg';
import linearImg from '../images/linear.jpg';
import apiStackImg from '../images/api-stack.jpg';
import gridSystemImg from '../images/grid-system.jpg';
import devToolsImg from '../images/dev-tools.jpg';
import reactLearningImg from '../images/react-learning.jpg';
import sideProjectsImg from '../images/side-projects.jpg';

const BlogList = () => {
  const featuredPost = {
    title: "Building the Future of Design",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    description: "Learn about the latest trends in UI/UX design and how we're shaping the future of digital experiences.",
    image: featuredDesignImg,
    tags: ["Design", "Research"]
  };

  const blogPosts = [
    {
      title: "UX review presentations",
      author: "Olivia Rhye",
      date: "1 Jan 2023",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: uxReviewImg,
      tags: ["Design", "Research", "Presentation"]
    },
    {
      title: "Migrating to Linear 101",
      author: "Phoenix Baker",
      date: "1 Jan 2023",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      image: linearImg,
      tags: ["Design", "Research"]
    },
    {
      title: "Building your API Stack",
      author: "Lana Steiner",
      date: "1 Jan 2023",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      image: apiStackImg,
      tags: ["Design", "Research"]
    },
    {
      title: "Grid system for better Design User Interface",
      author: "Olivia Rhye",
      date: "1 Jan 2023",
      description: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points.",
      image: gridSystemImg,
      tags: ["Design", "Interface"]
    },
    {
      title: "My Favorite Development Tools",
      date: "March 2024",
      description: "A curated list of tools and extensions that boost my productivity",
      image: devToolsImg,
      tags: ["Tools", "Productivity", "Development"]
    },
    {
      title: "Learning React: My Experience",
      date: "March 2024",
      description: "My journey learning React and tips for new developers",
      image: reactLearningImg,
      tags: ["React", "Learning", "Web Development"]
    },
    {
      title: "Building Side Projects",
      date: "February 2024",
      description: "How I manage and learn from my personal coding projects",
      image: sideProjectsImg,
      tags: ["Projects", "Learning", "Development"]
    }
  ];

  return (
    <div className="blog-container">
      <section className="featured-post">
        <BlogCard {...featuredPost} isCompact={false} />
      </section>

      <section className="recent-posts">
        <h2 className="section-title">Recent posts</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index} 
              {...post} 
              isCompact={true}
            />
          ))}
        </div>
      </section>

      <section className="blog-categories">
        <h2>Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Development</h3>
            <p>Coding tutorials and experiences</p>
          </div>
          <div className="category-card">
            <h3>Tech Reviews</h3>
            <p>Tools and software reviews</p>
          </div>
          <div className="category-card">
            <h3>Career</h3>
            <p>Professional growth insights</p>
          </div>
          <div className="category-card">
            <h3>Projects</h3>
            <p>Personal project showcases</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList; 