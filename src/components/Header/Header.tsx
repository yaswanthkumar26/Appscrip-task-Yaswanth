// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Hamburger Menu Icon (Mobile Only) */}
        <button className={styles.hamburger}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* LOGO */}
        <div className={styles.logo}>
          <Link href="/">LOGO</Link>
        </div>
        
        {/* Main Navigation (Desktop Only) */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>SHOP</Link>
          <Link href="/" className={styles.navLink}>SKILLS</Link>
          <Link href="/" className={styles.navLink}>STORIES</Link>
          <Link href="/" className={styles.navLink}>ABOUT</Link>
          <Link href="/" className={styles.navLink}>CONTACT US</Link>
        </nav>
        
        {/* Action Icons (Search, User, Heart, Cart) */}
        <div className={styles.actions}>
          {/* We'll use simple text for icons for now */}
          <span>🔍</span>
          <span>👤</span>
          <span>♡</span>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Header;