// Next.js 클라이언트 컴포넌트 지시어
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaCoins, FaChartLine, FaLock, FaUsers, FaGlobe, FaRocket, FaStar, FaCrown, FaShieldAlt } from 'react-icons/fa';
import styles from './Presentation.module.css';

interface MusicowPresentationProps {
  currentSlide: number;
}

const MusicowPresentation: React.FC<MusicowPresentationProps> = ({ currentSlide }) => {
  const totalSlides = 5;
  
  const renderSlide = () => {
    if (currentSlide === 0) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.titleSlide}`}>
            <div className={styles.logoAndTitle}>
              <img src="https://opening-attachments.greetinghr.com/20230801/99b3431a-e707-4c95-803d-d52618156527/.png" alt="뮤직카우 로고" className={styles.logo} />
              <div className={styles.description}>음악이 매력적인 자산이 된다</div>
            </div>
            
            <div className={styles.content}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.logoAndTitle}>
                  <h1>뮤직카우 <span>MUSICOW</span></h1>
                  <p className={styles.subtitle}>
                    세계 최초 음악저작권 투자 플랫폼<br />
                    음악이 매력적인 자산이 되는 새로운 경험을 제공합니다
                  </p>
                </div>
                
                <div className={styles.actionButtons}>
                  <button 
                    className={styles.primaryButton} 
                    onClick={() => window.open('https://musicow.com', '_blank')}
                  >
                    투자 시작하기
                  </button>
                  <button 
                    className={styles.secondaryButton} 
                    onClick={() => window.open('https://musicow.com/about', '_blank')}
                  >
                    더 알아보기
                  </button>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                <img src="/cover001.png" alt="뮤직카우 마케팅 이미지" className={styles.coverImage} />
              </motion.div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className={styles.current}>01</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 1) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.serviceSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>뮤직카우 서비스</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>뮤직카우는 음악저작권을 기초자산으로 하는 음악수익증권을 발행하고 유통하는 세계 최초의 혁신적인 투자 플랫폼입니다.</p>
            </div>
            
            <div className={styles.serviceGrid}>
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.musicIcon}`}><FaMusic /></div>
                  <h3>음악수익증권</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>인기 음악의 저작권을 500원~5,000원으로 쪼개어 누구나 쉽게 투자할 수 있습니다.</p>
                  <ul>
                    <li>• K-POP, 발라드, 힙합 등 다양한 장르</li>
                    <li>• 실시간 거래 가능</li>
                    <li>• 소액 투자로 시작 가능</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.current}>02</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }
    // Add other slides similarly
    return null;
  };

  return renderSlide();
};

export default MusicowPresentation;
