'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaCode, FaRocket, FaPuzzlePiece, FaChartLine, FaLayerGroup } from 'react-icons/fa';
import styles from './Presentation.module.css';

interface DemoPresentationProps {
  currentSlide: number;
}

const DemoPresentation: React.FC<DemoPresentationProps> = ({ currentSlide }) => {
  // 총 슬라이드 수
  const totalSlides = 3;
  
  // 애니메이션 효과
  const fadeIn = (delay: number = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, delay }
  });
  
  const slideUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
  });
  
  const slideRight = (delay: number = 0) => ({
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
  });
  
  // 슬라이드별 렌더링
  const renderSlide = () => {
    if (currentSlide === 0) {
      // 타이틀 슬라이드
      return (
        <div className={styles.slide}>
          {/* 메인 콘텐츠 영역 (왼쪽 80%) */}
          <div className={`${styles.mainContent} ${styles.titleSlide}`}>
            {/* 헤더 */}
            <motion.div 
              className={styles.presentationTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              PRESENTATION
            </motion.div>
            
            {/* 타이틀 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1>
                데모 <span>프레젠테이션</span>
              </h1>
              <p className={styles.subtitle}>
                웹 기술을 활용한 현대적이고 세련된 디자인의 프레젠테이션을 경험해보세요
              </p>
            </motion.div>
            
            {/* 액션 버튼 */}
            <motion.div 
              className={styles.actionButtons}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className={styles.primaryButton}>
                시작하기
              </button>
              <button className={styles.secondaryButton}>
                더 알아보기
              </button>
            </motion.div>
            
            {/* 슬라이드 번호 */}
            <div className={styles.slideNumber}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.current}>01</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 Next.js 프레젠테이션</div>
              </motion.div>
            </div>
          </div>
          
          {/* 사이드바 (오른쪽 20%) */}
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>Next.js 프레젠테이션</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className={styles.blueIcon}>
                  <FaRocket />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.purpleIcon}>
                  <FaLightbulb />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.tealIcon}>
                  <FaCode />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.grayIcon}>
                  <FaLayerGroup />
                </div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>간단 • 확장 • 현대적</div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 1) {
      // 특징 슬라이드
      return (
        <div className={styles.slide}>
          {/* 메인 콘텐츠 영역 (왼쪽 80%) */}
          <div className={`${styles.mainContent} ${styles.featureSlide}`}>
            {/* 타이틀 */}
            <motion.div 
              className={styles.header}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>프레젠테이션 특징</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>
                Next.js와 React를 기반으로 한 이 프레젠테이션 도구는 다양한 특징과 장점을 제공합니다.
              </p>
            </div>
            
            {/* 특징 그리드 */}
            <div className={styles.featureGrid}>
              <motion.div 
                className={styles.featureCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon} ${styles.blueIcon}`}>
                    <FaRocket />
                  </div>
                  <div className={styles.featureCardBody}>
                    <h3>간단한 구성</h3>
                    <ul>
                      <li>• Next.js 기반 현대적 아키텍처</li>
                      <li>• 프레임워크의 장점을 최대한 활용</li>
                      <li>• Vercel을 통한 간편한 배포</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.featureCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon} ${styles.purpleIcon}`}>
                    <FaLightbulb />
                  </div>
                  <div className={styles.featureCardBody}>
                    <h3>다양한 기능</h3>
                    <ul>
                      <li>• 키보드 단축키 네비게이션</li>
                      <li>• 부드러운 애니메이션 효과</li>
                      <li>• 원클릭 PDF 내보내기</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.featureCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon} ${styles.tealIcon}`}>
                    <FaPuzzlePiece />
                  </div>
                  <div className={styles.featureCardBody}>
                    <h3>폴더 저장</h3>
                    <ul>
                      <li>• 개별 폴더로 프레젠테이션 관리</li>
                      <li>• 코드 기반의 구조화된 작성</li>
                      <li>• Git을 통한 버전 관리 용이</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.featureCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon}`} style={{ backgroundColor: '#FEF3C7' }}>
                    <FaChartLine style={{ color: '#D97706' }} />
                  </div>
                  <div className={styles.featureCardBody}>
                    <h3>확장성</h3>
                    <ul>
                      <li>• 다양한 슬라이드 템플릿</li>
                      <li>• 재사용 가능한 컴포넌트</li>
                      <li>• 커스텀 테마 및 스타일링</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* 슬라이드 번호 */}
            <div className={styles.slideNumber}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className={styles.current}>02</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 Next.js 프레젠테이션</div>
              </motion.div>
            </div>
          </div>
          
          {/* 사이드바 (오른쪽 20%) */}
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>Next.js 프레젠테이션</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className={styles.blueIcon}>
                  <FaRocket />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.purpleIcon}>
                  <FaLightbulb />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.tealIcon}>
                  <FaCode />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.grayIcon}>
                  <FaLayerGroup />
                </div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>간단 • 확장 • 현대적</div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 2) {
      // 감사합니다 슬라이드
      return (
        <div className={styles.slide}>
          {/* 메인 콘텐츠 영역 (왼쪽 80%) */}
          <div className={`${styles.mainContent} ${styles.thankYouSlide}`}>
            {/* 타이틀 */}
            <motion.div 
              className={styles.header}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.topText}>THANK YOU</div>
              <h2>감사합니다</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <motion.div 
              className={styles.thankYouContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                이 프레젠테이션은 Next.js, React, Tailwind CSS 및 Framer Motion으로 제작되었습니다. 
                코드 기반으로 작성되어 쉽게 커스터마이징하고 확장할 수 있습니다.
              </p>
              
              <div className={styles.tipBox}>
                <div className={styles.tipContent}>
                  <FaLightbulb />
                  <span>PDF로 내보내거나 폴더에 저장하여 효율적으로 관리하세요!</span>
                </div>
              </div>
              
              <div className={styles.actionRow}>
                <button className={styles.primaryButton}>
                  다운로드
                </button>
                <button className={styles.secondaryButton}>
                  문의하기
                </button>
              </div>
            </motion.div>
            
            {/* 슬라이드 번호 */}
            <div className={styles.slideNumber}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.current}>03</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 Next.js 프레젠테이션</div>
              </motion.div>
            </div>
          </div>
          
          {/* 사이드바 (오른쪽 20%) */}
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>Next.js 프레젠테이션</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className={styles.blueIcon}>
                  <FaRocket />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.purpleIcon}>
                  <FaLightbulb />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.tealIcon}>
                  <FaCode />
                </div>
              </motion.div>
              
              <motion.div 
                className={styles.iconWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={styles.grayIcon}>
                  <FaLayerGroup />
                </div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>간단 • 확장 • 현대적</div>
            </div>
          </div>
        </div>
      );
    } else {
      // 기본값
      return null;
    }
  };
  
  return (
    <div className={styles.container}>
      {renderSlide()}
    </div>
  );
};

export default DemoPresentation;