import React from 'react';

function Features() {
  const features = [
    {
      id: 1,
      icon: '🤖',
      title: 'Machine Learning',
      description: 'Building intelligent models and predictive solutions'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Data Science',
      description: 'Analyzing complex data to drive insights and decisions'
    },
    {
      id: 3,
      icon: '🧠',
      title: 'AI Innovation',
      description: 'Creating cutting-edge artificial intelligence solutions'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Data Visualization',
      description: 'Transforming raw data into meaningful visual insights'
    }
  ];

  return (
    <div className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-box">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
