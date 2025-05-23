'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaRocket, 
  FaPuzzlePiece, 
  FaChartLine 
} from 'react-icons/fa';
import styles from '../Presentation.module.css';

const FeaturesPage: React.FC = () => {
  return (
    <div className={styles.featureSlide}>
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
      <motion.h2
        className={styles.featureTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        프레젠테이션 특징
      </motion.h2>
      
      <motion.div 
        className={styles.accentBar}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 96, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ margin: '0 0 3rem 0' }}
      />
      
      <div className={styles.cardGrid}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.cardIcon}>
            <FaRocket />
          </div>
          <h3 className={styles.cardTitle}>간단한 구성</h3>
          <div className={styles.bulletList}>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>Next.js 기반 현대적 아키텍처</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>프레임워크의 장점을 최대한 활용</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>Vercel을 통한 간편한 배포</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.cardIcon}>
            <FaLightbulb />
          </div>
          <h3 className={styles.cardTitle}>다양한 기능</h3>
          <div className={styles.bulletList}>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>키보드 단축키 네비게이션</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>부드러운 애니메이션 효과</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>원클릭 PDF 내보내기</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.cardGrid} style={{ marginTop: '2rem' }}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.cardIcon}>
            <FaPuzzlePiece />
          </div>
          <h3 className={styles.cardTitle}>폴더 저장</h3>
          <div className={styles.bulletList}>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>개별 폴더로 프레젠테이션 관리</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>코드 기반의 구조화된 작성</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>Git을 통한 버전 관리 용이</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.cardIcon}>
            <FaChartLine />
          </div>
          <h3 className={styles.cardTitle}>확장성</h3>
          <div className={styles.bulletList}>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>다양한 슬라이드 템플릿</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>재사용 가능한 컴포넌트</div>
            </div>
            <div className={styles.bulletItem}>
              <div className={styles.bullet}></div>
              <div>커스텀 테마 및 스타일링</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* 푸터 */}
      <div className={styles.footer}>
        <div className={styles.pageNumber}>
          <span className={styles.currentPage}>2</span>
          <span className={styles.totalPages}>/ 3</span>
        </div>
        <div>© 2025 Modern Presentation</div>
      </div>
    </div>
  );
};

export default FeaturesPage;