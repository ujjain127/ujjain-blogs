import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <h1 className="main-title">Newsletter</h1>
      <div className="newsletter-content">
        <section className="newsletter-description">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to my newsletter to receive updates about:
          </p>
          <ul className="newsletter-features">
            <li>New blog posts and tutorials</li>
            <li>Development tips and tricks</li>
            <li>Project updates and case studies</li>
            <li>Exclusive content and resources</li>
          </ul>
        </section>

        <section className="newsletter-form">
          {subscribed ? (
            <div className="success-message">
              <h3>Thank you for subscribing! 🎉</h3>
              <p>You'll receive my next newsletter in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          )}
        </section>

        <section className="newsletter-preview">
          <h3>What You'll Get</h3>
          <div className="preview-features">
            <div className="preview-item">
              <h4>Regular Updates</h4>
              <p>New content straight to your inbox</p>
            </div>
            <div className="preview-item">
              <h4>Exclusive Tips</h4>
              <p>Development tips and best practices</p>
            </div>
            <div className="preview-item">
              <h4>Early Access</h4>
              <p>Be the first to know about new projects</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsletter; 