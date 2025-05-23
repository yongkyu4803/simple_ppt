'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaChartLine, FaLightbulb, FaRegCheckCircle } from 'react-icons/fa';
import styles from '../Presentation.module.css';

const CoverPage: React.FC = () => {
  return (
    <div className={styles.titleSlide}>
      {/* 배경 요소 */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(219, 234, 254, 0.6) 0%, rgba(219, 234, 254, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(224, 242, 254, 0.6) 0%, rgba(224, 242, 254, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      
      {/* 헤더 */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <FaRocket size={16} />
          </div>
          <span>Modern Slides</span>
        </div>
        <div>May 2025</div>
      </motion.div>
      
      {/* 콘텐츠 영역 - 세로 중앙 정렬 */}
      <div className={styles.contentArea}>
        {/* 상단 타이틀 섹션 */}
        <div className={styles.titleSection}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Next.js 프레젠테이션
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            현대적인 웹 기술로 구현된 프레젠테이션
          </motion.p>
          
          <motion.div 
            className={styles.accentBar}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        
        {/* 아이콘 그리드 섹션 */}
        <motion.div 
          className={styles.iconGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: '2rem' }}
        >
          <motion.div 
            className={styles.iconItem}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={styles.iconCircle} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <FaRocket />
            </div>
            <span>최신 웹 기술</span>
          </motion.div>
          
          <motion.div 
            className={styles.iconItem}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={styles.iconCircle} style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
              <FaCode />
            </div>
            <span>코드 기반 구성</span>
          </motion.div>
          
          <motion.div 
            className={styles.iconItem}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={styles.iconCircle} style={{ background: 'rgba(20, 184, 166, 0.1)', color: '#14b8a6' }}>
              <FaChartLine />
            </div>
            <span>확장성</span>
          </motion.div>
        </motion.div>
        
        {/* 버튼 섹션 */}
        <motion.div 
          className={styles.buttonSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button 
            className={`${styles.button} ${styles.primaryButton}`}
            whileHover={{ y: -2, boxShadow: '0 8px 16px rgba(59, 130, 246, 0.25)' }}
            whileTap={{ y: 0 }}
          >
            <FaRocket style={{ marginRight: '0.5rem' }} />
            시작하기
          </motion.button>
          <motion.button 
            className={`${styles.button} ${styles.secondaryButton}`}
            whileHover={{ y: -2, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)' }}
            whileTap={{ y: 0 }}
          >
            더 알아보기
          </motion.button>
        </motion.div>
        
        {/* 카드 섹션 - 사용자 화면에 맞게 높이 조정 */}
        <motion.div
          className={styles.featureCard}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h3 className={styles.featureCardTitle}>
            <FaLightbulb style={{ color: '#3b82f6', marginRight: '0.5rem', verticalAlign: 'middle' }} />
            스마트 프레젠테이션의 주요 장점
          </h3>
          
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <FaRegCheckCircle className={styles.checkIcon} />
              <span className={styles.featureText}>손쉬운 업데이트 및 배포</span>
            </div>
            <div className={styles.featureItem}>
              <FaRegCheckCircle className={styles.checkIcon} />
              <span className={styles.featureText}>협업 기능 내장</span>
            </div>
            <div className={styles.featureItem}>
              <FaRegCheckCircle className={styles.checkIcon} />
              <span className={styles.featureText}>다양한 디바이스 지원</span>
            </div>
            <div className={styles.featureItem}>
              <FaRegCheckCircle className={styles.checkIcon} />
              <span className={styles.featureText}>실시간 데이터 연동</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* 푸터 */}
      <motion.div 
        className={styles.footer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.pageNumber}>
          <span className={styles.currentPage}>1</span>
          <span className={styles.totalPages}>/ 3</span>
        </div>
        <div>© 2025 Modern Presentation</div>
      </motion.div>
    </div>
  );
};

export default CoverPage;