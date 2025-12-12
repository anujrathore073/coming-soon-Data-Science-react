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

    const send = async () => {
      try {
        setMessage('Sending...');
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        if (res.ok) {
          setMessage("✓ Thanks! I'll get back to you soon.");
          setEmail('');
        } else {
          const data = await res.json().catch(() => ({}));
          setMessage(data.error || 'Error sending. Please try again later.');
        }
      } catch (err) {
        console.error('Send error', err);
        setMessage('Network error. Please try again later.');
      }

      setTimeout(() => {
        setMessage('');
      }, 5000);
    };

    send();
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
