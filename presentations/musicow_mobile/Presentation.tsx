'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaCoins, FaChartLine, FaLock, FaUsers, FaGlobe, FaRocket, FaStar, FaCrown, FaShieldAlt } from 'react-icons/fa';
import styles from './Presentation.module.css';

interface MusicowPresentationProps {
  currentSlide: number;
}

const MusicowPresentation = ({ currentSlide }: MusicowPresentationProps) => {
  // 슬라이드 수 정의
  MusicowPresentation.totalSlides = 3;

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
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                <img src="/cover001.png" alt="뮤직카우 마케팅 이미지" className={styles.coverImage} />
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
            <div className={styles.serviceGrid}>
              {/* 첫 번째 서비스 카드 - 음악수익증권 */}
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.musicIcon}`}><FaMusic /></div>
                  <h3>음악수익증권</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>인기 음악의 저작권을 500원~5,000원으로 쪼개어 누구나 쉽게 투자할 수 있습니다.</p>
                  <ul>
                    <li>• K-POP, 발라드, 힙합 등 <b>다양한 장르의 저작권</b>에 투자</li>
                    <li>• <b>실시간 거래</b> 시스템으로 언제든 매매 가능</li>
                    <li>• <b>소액 투자</b>로 진입 장벽을 낮춰 누구나 쉽게 시작</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* 두 번째 서비스 카드 - 월간 수익 분배 */}
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.coinIcon}`}><FaCoins /></div>
                  <h3>월간 수익 분배</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>보유한 증권에 비례하여 매월 음악 저작권료를 정기적으로 받을 수 있습니다.</p>
                  <ul>
                    <li>• 매월 1회 <b>정기적인 저작권료 수익</b> 분배</li>
                    <li>• 투명한 <b>수익 공개 및 정산 내역</b> 제공</li>
                    <li>• 자동 정산 시스템으로 <b>안정적인 수익</b> 관리</li>
                  </ul>
                </div>
              </motion.div>

              {/* 세 번째 서비스 카드 - 안전한 투자 환경 (새롭게 추가)
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.shieldIcon}`}><FaShieldAlt /></div>
                  <h3>안전한 투자 환경</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>금융 등급의 보안 시스템과 투명한 거래 환경으로 투자자 자산을 보호합니다.</p>
                  <ul>
                    <li>• <b>금융 등급 보안 인증</b>을 통한 철저한 자산 보호</li>  
                    <li>• <b>실시간 거래 내역 공개</b>로 투명성 확보</li>
                    <li>• <b>전문 인력의 24/7 모니터링</b> 및 고객 지원</li>
                  </ul>
                </div>
              </motion.div>
              */}
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 2) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.serviceSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>뮤직카우 EVENT</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            <div className={styles.serviceGrid}>
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.eventImage}>
                  <a href="https://magazine.musicow.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/event.png" alt="이벤트 이미지" className={styles.eventImg} />
                  </a>
                </div>                
              </motion.div>
            </div>

            <div className={styles.actionButtons} style={{marginTop: '30px', justifyContent: 'center'}}>
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
          </div>
        </div>
      );
    }
    return null;
  };

  return renderSlide();
};

MusicowPresentation.totalSlides = 3;

export default MusicowPresentation;