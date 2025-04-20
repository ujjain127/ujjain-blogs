import React from 'react';

// Import avatar images
import oliviaRhyeAvatar from '../images/avatars/olivia-rhye.jpg';
import phoenixBakerAvatar from '../images/avatars/phoenix-baker.jpg';
import lanaSteinerAvatar from '../images/avatars/lana-steiner.jpg';
import defaultAvatar from '../images/avatars/default-avatar.jpg';
import placeholderImg from '../images/placeholder.jpg';

const BlogCard = ({ title, date, description, image, tags, author, isCompact = false }) => {
  // Default placeholder image if none provided
  const defaultImage = placeholderImg;
  
  // Avatar mapping
  const avatarMap = {
    'Olivia Rhye': oliviaRhyeAvatar,
    'Phoenix Baker': phoenixBakerAvatar,
    'Lana Steiner': lanaSteinerAvatar
  };

  // Function to get tag icon based on tag name
  const getTagIcon = (tag) => {
    const icons = {
      'Design': '🎨',
      'Research': '🔍',
      'Presentation': '📊',
      'Interface': '💻',
      'Development': '⚡',
      'API': '🔌'
    };
    return icons[tag] || '📄';
  };

  // Get avatar source with fallback
  const getAvatarSrc = () => {
    if (!author) return defaultAvatar;
    return avatarMap[author] || defaultAvatar;
  };

  return (
    <article className={`blog-card ${isCompact ? 'blog-card-compact' : ''}`}>
      <div className="blog-card-content">
        <div className="blog-meta">
          {author && (
            <>
              <div className="author-info">
                <img 
                  src={getAvatarSrc()}
                  alt={author}
                  className="author-avatar"
                  onError={(e) => {
                    e.target.src = defaultAvatar;
                  }}
                />
                <span className="author">{author}</span>
              </div>
              <span className="dot-separator">•</span>
            </>
          )}
          {date && (
            <span className="date">
              <svg className="icon-calendar" viewBox="0 0 24 24" width="16" height="16">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </span>
          )}
        </div>
        
        <h2 className="blog-title">
          <a href="#">{title}</a>
        </h2>
        
        <p className="description">{description}</p>
        
        <div className="tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className={`tag tag-${tag.toLowerCase()}`}>
              <span className="tag-icon">{getTagIcon(tag)}</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {image && !isCompact && (
        <div className="blog-image">
          <img 
            src={image} 
            alt={title}
            onError={(e) => {
              e.target.src = defaultImage;
            }}
          />
          <div className="image-overlay">
            <svg className="icon-expand" viewBox="0 0 24 24" width="24" height="24">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
        </div>
      )}
      
      {isCompact && (
        <div className="arrow-link">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </article>
  );
};

export default BlogCard; 