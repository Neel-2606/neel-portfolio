'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './YourStyles.module.css'; // Replace with your actual style file

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await fetch('https://formsubmit.co/ndp260106@gmail.com', {method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _captcha: false,
        }),
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className={styles.btn}>Send Message</button>
      {isSubmitted && (
        <p style={{ color: 'lightgreen', marginTop: '10px' }}>✅ Message Sent Successfully!</p>
      )}
    </form>
  );
};

export default ContactForm;
