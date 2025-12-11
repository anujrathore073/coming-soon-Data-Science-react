import React, { useState } from 'react';

function CallToAction() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    console.log('Email submitted:', email);
    setMessage('✓ Thanks! I\'ll get back to you soon.');
    setEmail('');

    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div className="cta-section">
      <p className="cta-text">Let's connect! Drop your message and I'll get back to you</p>
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button type="submit">Get In Touch</button>
      </form>
      <p className="form-message">{message}</p>
    </div>
  );
}

export default CallToAction;
