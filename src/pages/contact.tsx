// pages/contact.tsx

import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>聯絡我們</h2>
        <hr className={styles.separator} />
        <br />
        <p className={styles.intro}>
          歡迎您填寫下列表單，告知我們您的需求或任何疑慮，我們將在收到訊息後盡速回覆您。
          <br />
          若無及時回覆也請您見諒，謝謝！
        </p>
        <p className={styles.contactInfo}>
          也可透過以下方式聯絡我們：土半夏甜點官方IG / 官方LINE @lesfonds
        </p>
      </header>
      <br />
      <div className={styles.contactLayout}>
        {/* 左側的聯絡資訊 */}
        <div className={styles.contactInfoSection}>
          <p>歡迎聯繫我們！</p>
          <p>LINE：@lesfonds</p>
          <p>信箱：lesfondsdepatisserie@gmail.com</p>
          <p>週一～週五：10:00 ～ 17:00</p>
        </div>

        {/* 右側的表單 */}
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.nameFields}>
              <div className={styles.formGroup}>
                <label htmlFor='firstName'>名字 *</label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='lastName'>姓氏 *</label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='email'>Email *</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='message'>問題 *</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type='submit' className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
