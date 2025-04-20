import React from 'react';

const BlogCard = ({ title, date, description, image, tags, author, isCompact = false }) => {
  return (
    <article className={`blog-card ${isCompact ? 'blog-card-compact' : ''}`}>
      <div className="blog-card-content">
        <div className="blog-meta">
          {author && <span className="author">{author}</span>}
          {author && date && <span className="dot-separator">•</span>}
          {date && <span className="date">{date}</span>}
        </div>
        
        <h2 className="blog-title">
          <a href="#">{title}</a>
        </h2>
        
        <p className="description">{description}</p>
        
        <div className="tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className={`tag tag-${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {image && !isCompact && (
        <div className="blog-image">
          <img src={image} alt={title} />
        </div>
      )}
      
      {isCompact && (
        <div className="arrow-link">
          <span>→</span>
        </div>
      )}
    </article>
  );
};

export default BlogCard; 