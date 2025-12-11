import React from 'react';

function ComingSoon() {
  return (
    <div className="coming-soon-section">
      <h2>What's Coming Soon</h2>
      <div className="coming-items">
        <div className="coming-item">
          <span className="item-icon">📚</span>
          <h3>Portfolio Projects</h3>
          <p>Showcase of my data science and AI projects</p>
        </div>
        <div className="coming-item">
          <span className="item-icon">📝</span>
          <h3>Blog & Insights</h3>
          <p>Articles on machine learning and data science</p>
        </div>
        <div className="coming-item">
          <span className="item-icon">🎓</span>
          <h3>Certifications</h3>
          <p>My professional certifications and achievements</p>
        </div>
        <div className="coming-item">
          <span className="item-icon">💼</span>
          <h3>Case Studies</h3>
          <p>Detailed case studies of my best work</p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
