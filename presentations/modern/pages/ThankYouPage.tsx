'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import styles from '../Presentation.module.css';

const ThankYouPage: React.FC = () => {
  return (
    <div className={styles.thankYouSlide}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <FaRocket size={16} />
          </div>
          <span>Modern Slides</span>
        </div>
        <div>May 2025</div>
      </div>
      
      {/* 콘텐츠 */}
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        감사합니다
      </motion.h1>
      
      <motion.div 
        className={styles.accentBar}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 96, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
      
      <motion.div 
        className={styles.thankYouCard}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex items-center mb-6">
          <div className={styles.cardIcon}>
            <FaCode />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-gray-800">Next.js 프레젠테이션</h3>
            <p className="text-gray-500">현대적인 웹 기술로 구현된 프레젠테이션</p>
          </div>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          이 프레젠테이션은 Next.js, React, CSS Modules 및 Framer Motion으로 제작되었습니다. 
          코드 기반으로 작성되어 쉽게 커스터마이징하고 확장할 수 있습니다.
        </p>
        
        <div className={styles.infoBox}>
          <FaLightbulb className="text-yellow-500 text-xl flex-shrink-0" />
          <p className="text-blue-800">
            각 폴더별로 스타일링 하여 독립적인 디자인을 적용할 수 있습니다!
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className={`${styles.button} ${styles.primaryButton}`}>
          다운로드
        </button>
        <button className={`${styles.button} ${styles.secondaryButton}`}>
          프로젝트 보기
        </button>
      </motion.div>
      
      {/* 푸터 */}
      <div className={styles.footer}>
        <div className={styles.pageNumber}>
          <span className={styles.currentPage}>3</span>
          <span className={styles.totalPages}>/ 3</span>
        </div>
        <div>© 2025 Modern Presentation</div>
      </div>
    </div>
  );
};

export default ThankYouPage;