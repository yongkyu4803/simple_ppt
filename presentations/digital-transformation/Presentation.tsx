'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCog, 
  FaChartLine, 
  FaRocket, 
  FaCloud, 
  FaUsers, 
  FaBrain, 
  FaLightbulb, 
  FaHandshake, 
  FaChartBar, 
  FaNetworkWired, 
  FaDatabase, 
  FaProjectDiagram 
} from 'react-icons/fa';
import styles from './Presentation.module.css';

interface DigitalTransformationProps {
  currentSlide: number;
}

const DigitalTransformation: React.FC<DigitalTransformationProps> = ({ currentSlide }) => {
  const totalSlides = 3;  // 4에서 3으로 변경
  
  // 현재 슬라이드에 맞는 페이지 번호
  const getPageNumber = () => {
    return (
      <div className={styles.pageNumber}>
        <span>{currentSlide + 1}</span>
        <span>/ {totalSlides}</span>
      </div>
    );
  };
  
  // 헤더 컴포넌트
  const Header = () => (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <FaRocket />
        </div>
        <span>디지털 트랜스포메이션</span>
      </div>
      <div className={styles.slideInfo}>
        May 2025
      </div>
    </header>
  );
  
  // 푸터 컴포넌트
  const Footer = () => (
    <footer className={styles.footer}>
      {getPageNumber()}
      <div className={styles.companyInfo}>
        © 2025 디지털 혁신 연구소
      </div>
    </footer>
  );
  
  // 슬라이드별 렌더링
  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <>
            <Header />
            <div className={styles.titleSlide}>
              <motion.div
                className={styles.titleText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1>디지털 혁신으로<br />미래를 선도하다</h1>
                <div className={styles.subtitle}>
                  기업의 성장과 경쟁력 강화를 위한 디지털 트랜스포메이션 전략
              </div>
              </motion.div>
              
              <motion.div
                className={styles.iconGrid}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaCog />
                    </div>
                    <h3>프로세스 혁신</h3>
                  </div>
                  <p>비즈니스 프로세스 자동화 및 최적화를 통한 효율성 증대</p>
                </div>
                
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaUsers />
                    </div>
                    <h3>고객 경험 향상</h3>
                  </div>
                  <p>디지털 채널과 데이터 분석을 활용한 고객 중심 서비스 구현</p>
                </div>
                
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaBrain />
                    </div>
                    <h3>데이터 기반 의사결정</h3>
                  </div>
                  <p>고급 분석과 인사이트를 통한 전략적 의사결정 지원</p>
                </div>
              </motion.div>
            </div>
            <Footer />
          </>
        );

      case 1:
        return (
          <>
            <Header />
            <div className={styles.contentSlide}>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                디지털 혁신의 핵심 요소
              </motion.h2>
              
              <motion.div
                className={styles.cardGrid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaCloud />
                    </div>
                    <h3>클라우드 기술</h3>
                  </div>
                  <p>
                    확장성과 유연성을 제공하는 클라우드 인프라로 IT 리소스의 효율적 활용과 비용 절감
                  </p>
                </motion.div>
                
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaLightbulb />
                    </div>
                    <h3>인공지능/머신러닝</h3>
                  </div>
                  <p>
                    데이터 패턴 분석과 예측 모델을 통한 의사결정 고도화 및 자동화
                  </p>
                </motion.div>
                
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaDatabase />
                    </div>
                    <h3>빅데이터 분석</h3>
                  </div>
                  <p>
                    대량의 구조화/비구조화 데이터 분석으로 숨겨진 인사이트 발견
                  </p>
                </motion.div>
                
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaNetworkWired />
                    </div>
                    <h3>사물인터넷(IoT)</h3>
                  </div>
                  <p>
                    연결된 장치와 센서를 통한 실시간 데이터 수집 및 프로세스 자동화
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <Footer />
          </>
        );

      case 2:
        return (
          <>
            <Header />
            <div className={styles.contentSlide}>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                성공적인 디지털 혁신 단계
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.card}
                style={{ marginBottom: '3rem' }}
              >
                <p>
                  디지털 혁신은 단순한 기술 도입이 아닌 전사적 변화 관리 프로세스입니다.
                  성공적인 디지털 트랜스포메이션을 위해서는 명확한 비전과 단계별 접근이 필요합니다.
                </p>
              </motion.div>
              
              <motion.div
                className={styles.stages}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className={styles.stage}>
                  <div className={styles.stageNumber}>1</div>
                  <div className={styles.stageName}>현황 진단</div>
                  <div className={styles.stageDesc}>
                    디지털 성숙도 평가와 개선 기회 발굴
                  </div>
                </div>
                
                <div className={styles.stage}>
                  <div className={styles.stageNumber}>2</div>
                  <div className={styles.stageName}>전략 수립</div>
                  <div className={styles.stageDesc}>
                    비전 설정과 로드맵 구축
                  </div>
                </div>
                
                <div className={styles.stage}>
                  <div className={styles.stageNumber}>3</div>
                  <div className={styles.stageName}>실행 및 적용</div>
                  <div className={styles.stageDesc}>
                    기술 구현과 변화 관리
                  </div>
                </div>
                
                <div className={styles.stage}>
                  <div className={styles.stageNumber}>4</div>
                  <div className={styles.stageName}>성과 측정</div>
                  <div className={styles.stageDesc}>
                    지속적 개선과 최적화
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className={styles.cardGrid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                style={{ marginTop: '3rem' }}
              >
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaHandshake />
                    </div>
                    <h3>변화 관리</h3>
                  </div>
                  <p>
                    성공적인 디지털 혁신을 위한 핵심 요소는 조직 문화와 리더십의 변화입니다.
                  </p>
                </motion.div>
                
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaProjectDiagram />
                    </div>
                    <h3>지속적 혁신</h3>
                  </div>
                  <p>
                    디지털 혁신은 일회성 프로젝트가 아닌 지속적인 여정이며 조직 전체의 공동 노력이 필요합니다.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <Footer />
          </>
        );
      
      case 3:
        return (
          <>
            <Header />
            <div className={styles.contentSlide}>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                디지털 혁신 성과
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.card}
                style={{ marginBottom: '2rem' }}
              >
                <p>
                  성공적인 디지털 트랜스포메이션은 기업의 핵심 지표에 긍정적인 영향을 미칩니다.
                  다음 그래프는 디지털 혁신 도입 기업의 주요 성과 지표를 보여줍니다.
                </p>
              </motion.div>
              
              <motion.div
                className={styles.svgContainer}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* svg1.svg 파일의 내용을 여기에 삽입 */}
                <svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="800" height="400" fill="#1e293b" rx="10" ry="10" />
                  
                  {/* 그리드 라인 */}
                  <g stroke="#334155" strokeWidth="1" opacity="0.3">
                    <line x1="100" y1="50" x2="100" y2="350" />
                    <line x1="200" y1="50" x2="200" y2="350" />
                    <line x1="300" y1="50" x2="300" y2="350" />
                    <line x1="400" y1="50" x2="400" y2="350" />
                    <line x1="500" y1="50" x2="500" y2="350" />
                    <line x1="600" y1="50" x2="600" y2="350" />
                    <line x1="700" y1="50" x2="700" y2="350" />
                    
                    <line x1="100" y1="350" x2="700" y2="350" />
                    <line x1="100" y1="300" x2="700" y2="300" />
                    <line x1="100" y1="250" x2="700" y2="250" />
                    <line x1="100" y1="200" x2="700" y2="200" />
                    <line x1="100" y1="150" x2="700" y2="150" />
                    <line x1="100" y1="100" x2="700" y2="100" />
                    <line x1="100" y1="50" x2="700" y2="50" />
                  </g>
                  
                  {/* 차트 제목 */}
                  <text x="400" y="30" fontSize="18" fill="#ffffff" textAnchor="middle" fontWeight="bold">디지털 혁신 도입 후 성과 지표</text>
                  
                  {/* Y축 레이블 */}
                  <text x="50" y="350" fontSize="12" fill="#94a3b8" textAnchor="middle">0%</text>
                  <text x="50" y="300" fontSize="12" fill="#94a3b8" textAnchor="middle">10%</text>
                  <text x="50" y="250" fontSize="12" fill="#94a3b8" textAnchor="middle">20%</text>
                  <text x="50" y="200" fontSize="12" fill="#94a3b8" textAnchor="middle">30%</text>
                  <text x="50" y="150" fontSize="12" fill="#94a3b8" textAnchor="middle">40%</text>
                  <text x="50" y="100" fontSize="12" fill="#94a3b8" textAnchor="middle">50%</text>
                  <text x="50" y="50" fontSize="12" fill="#94a3b8" textAnchor="middle">60%</text>
                  
                  {/* X축 레이블 */}
                  <text x="150" y="380" fontSize="14" fill="#94a3b8" textAnchor="middle">매출 증가</text>
                  <text x="300" y="380" fontSize="14" fill="#94a3b8" textAnchor="middle">고객 만족도</text>
                  <text x="450" y="380" fontSize="14" fill="#94a3b8" textAnchor="middle">운영 효율성</text>
                  <text x="600" y="380" fontSize="14" fill="#94a3b8" textAnchor="middle">혁신 역량</text>
                  
                  {/* 바 차트 */}
                  <g>
                    {/* 매출 증가 */}
                    <motion.rect
                      initial={{ height: 0, y: 350 }}
                      animate={{ height: 120, y: 230 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      x="120" y="230" width="60" height="120" fill="url(#gradient1)" rx="5" ry="5" />
                    <text x="150" y="220" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">24%</text>
                    
                    {/* 고객 만족도 */}
                    <motion.rect
                      initial={{ height: 0, y: 350 }}
                      animate={{ height: 170, y: 180 }}
                      transition={{ duration: 1, delay: 1 }}
                      x="270" y="180" width="60" height="170" fill="url(#gradient2)" rx="5" ry="5" />
                    <text x="300" y="170" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">34%</text>
                    
                    {/* 운영 효율성 */}
                    <motion.rect
                      initial={{ height: 0, y: 350 }}
                      animate={{ height: 200, y: 150 }}
                      transition={{ duration: 1, delay: 1.2 }}
                      x="420" y="150" width="60" height="200" fill="url(#gradient3)" rx="5" ry="5" />
                    <text x="450" y="140" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">40%</text>
                    
                    {/* 혁신 역량 */}
                    <motion.rect
                      initial={{ height: 0, y: 350 }}
                      animate={{ height: 150, y: 200 }}
                      transition={{ duration: 1, delay: 1.4 }}
                      x="570" y="200" width="60" height="150" fill="url(#gradient4)" rx="5" ry="5" />
                    <text x="600" y="190" fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="bold">30%</text>
                  </g>
                  
                  {/* 그라데이션 정의 */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              <motion.div
                className={styles.cardGrid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                style={{ marginTop: '2rem' }}
              >
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaChartLine />
                    </div>
                    <h3>비즈니스 성과</h3>
                  </div>
                  <p>
                    디지털 혁신을 통해 기업은 평균 24%의 매출 증가와 40%의 운영 효율성 향상을 경험합니다.
                  </p>
                </motion.div>
                
                <motion.div 
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      <FaChartBar />
                    </div>
                    <h3>고객 경험</h3>
                  </div>
                  <p>
                    고객 만족도는 평균 34% 향상되며, 디지털 채널을 통한 고객 참여도는 2배 이상 증가합니다.
                  </p>
                </motion.div>
              </motion.div>
            </div>
            <Footer />
          </>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className={`${styles.container} ${styles.darkBg}`}>
      <div className={styles.slide}>
        {renderSlide()}
      </div>
    </div>
  );
};

export default DigitalTransformation;
