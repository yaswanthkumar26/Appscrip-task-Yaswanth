// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1: Newsletter */}
        <div className={styles.column}>
          <h3 className={styles.title}>Be the first to know</h3>
          <p className={styles.text}>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your e-mail..." className={styles.input} />
            <button className={styles.button}>Subscribe</button>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div className={styles.column}>
          <h3 className={styles.title}>Contact Us</h3>
          <p className={styles.text}>+1 234 567 890</p>
          <p className={styles.text}>customercare@mettamuse.com</p>
          <h3 className={styles.title} style={{ marginTop: '30px' }}>Currency</h3>
          <p className={styles.text}>USD</p>
        </div>

        {/* Column 3: Links (this column has two sub-sections) */}
        <div className={styles.column}>
          <h3 className={styles.title}>mettā muse</h3>
          <a href="#" className={styles.link}>About Us</a>
          <a href="#" className={styles.link}>Stories</a>
          <a href="#" className={styles.link}>Contact Us</a>
          
          <h3 className={styles.title} style={{ marginTop: '30px' }}>Quick Links</h3>
          <a href="#" className={styles.link}>Shipping & Returns</a>
          <a href="#" className={styles.link}>Payment & Policy</a>
          <a href="#" className={styles.link}>Terms of Use</a>
        </div>
        
        {/* Column 4: Follow Us */}
        <div className={styles.column}>
          <h3 className={styles.title}>Follow Us</h3>
          <div className={styles.socialIcons}>
            {/* You would add social icons (e.g., SVGs) here */}
            <span className={styles.link}>Instagram</span>
            <span className={styles.link}>Facebook</span>
          </div>
        </div>

      </div>
      <div className={styles.copyright}>
        Copyright © 2025 mettā muse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;