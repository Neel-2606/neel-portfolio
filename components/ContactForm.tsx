'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/styles/Sections.module.css'; // Update the path if needed

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      data.append('_captcha', 'false');
      // Optional: redirect after submit
      // data.append('_next', 'https://yourdomain.com/thank-you');

      const response = await fetch('https://formsubmit.co/factandfearshow@gmail.com', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
      } else {
        console.error('Failed to send message');
      }
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
        <p style={{ color: 'lightgreen', marginTop: '10px' }}>
          ✅ Message Sent Successfully!
        </p>
      )}
    </form>
  );
};

export default ContactForm;
