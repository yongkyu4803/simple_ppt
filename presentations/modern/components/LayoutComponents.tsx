'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Presentation.module.css';

interface HeaderProps {
  dark?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ dark = false }) => {
  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${styles.logo} ${dark ? styles.logoDark : ''}`}>
        <div className={styles.logoIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
        </div>
        <span>Modern Slides</span>
      </div>
      <div className={dark ? styles.logoDark : ''}>May 2025</div>
    </motion.header>
  );
};

interface FooterProps {
  currentSlide: number;
  totalSlides: number;
  dark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ 
  currentSlide, 
  totalSlides,
  dark = false
}) => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={`${styles.pageNumber} ${dark ? styles.pageNumberDark : ''}`}>
        <div className={styles.currentPage}>{currentSlide + 1}</div>
        <div className={styles.totalPages}>/ {totalSlides}</div>
      </div>
      <div className={`${styles.companyInfo} ${dark ? styles.pageNumberDark : ''}`}>
        © 2025 Modern Presentation
      </div>
    </motion.footer>
  );
};
