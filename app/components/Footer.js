import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p> 2025 <span className="highlight"></span>. All rights reserved.</p>
        <div className="footer-links">
        {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a> */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;