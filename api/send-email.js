const fetch = global.fetch || require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email } = req.body || {};
  if (!email) {
    res.status(400).json({ error: 'Missing email in request body' });
    return;
  }

  // basic email format validation
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    res.status(400).json({ error: 'Invalid email format' });
    return;
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const TO_EMAIL = process.env.TO_EMAIL;

  if (!SENDGRID_API_KEY || !TO_EMAIL) {
    res.status(500).json({ error: 'Email not configured. Set SENDGRID_API_KEY and TO_EMAIL environment variables.' });
    return;
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: TO_EMAIL }],
        subject: 'New contact from landing page'
      }
    ],
    from: { email: process.env.FROM_EMAIL || `no-reply@${process.env.NOREPLY_DOMAIN || 'example.com'}` },
    content: [
      {
        type: 'text/plain',
        value: `You have a new contact request from: ${email}`
      }
    ]
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text().catch(() => null);
      let details = null;
      try {
        details = text ? JSON.parse(text) : null;
      } catch (e) {
        details = text;
      }
      console.error('SendGrid error', response.status, details || text);
      // forward SendGrid message (safe) to help debugging in dev; in production you may want to hide details
      res.status(response.status).json({ error: 'Failed to send email', details: details || text });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send exception', err);
    res.status(500).json({ error: 'Server error sending email' });
  }
};
