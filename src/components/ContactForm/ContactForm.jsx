import React, { useState } from 'react';
import css from './ContactForm.module.css';
import arrow from '../../images/icons/arrowRight.svg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных формы
    console.log(formData);
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor="name"></label>
        <input
          placeholder="Your Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="subject"></label>
        <input
          placeholder="Subject"
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="email"></label>
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="message"></label>
        <textarea
          placeholder="Your Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className={css.sendButton} type="submit">
        Send Message <img className={css.buttonImg} src={arrow} alt="arrow" />
      </button>
    </form>
  );
};

export default ContactForm;
