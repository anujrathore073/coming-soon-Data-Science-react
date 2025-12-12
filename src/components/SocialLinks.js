import React from 'react';

function SocialLinks() {
  const socialLinks = [
    {
      id: 1,
      name: 'GitHub',
      href: 'https://github.com/anujrathore073',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      id: 2,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anuj-rathore-754919287/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      id: 4,
      name: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=yugrathore457@gmail.com&su=Let\'s Connect',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="M2 4l8 6 8-6"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a key={link.id} href={link.href} aria-label={link.name}>
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
