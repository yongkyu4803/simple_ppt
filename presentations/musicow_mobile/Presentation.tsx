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
              {/* 첫 번째 서비스 카드 - 음악수익증권 */}
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
              
              {/* 두 번째 서비스 카드 - 월간 수익 분배 */}
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.coinIcon}`}><FaCoins /></div>
                  <h3>월간 수익 분배</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>보유한 증권에 비례하여 매월 음악 저작권료를 정기적으로 받을 수 있습니다.</p>
                  <ul>
                    <li>• 매월 정기 수익 분배</li>
                    <li>• 투명한 수익 공개</li>
                    <li>• 자동 정산 시스템</li>
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
    } else if (currentSlide === 2) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.serviceSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>투자 안전성</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>뮤직카우는 투자자의 자산을 안전하게 보호하는 철저한 보안 시스템을 제공합니다.</p>
            </div>
            
            <div className={styles.serviceGrid}>
              {/* 보안 시스템 */}
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.lockIcon}`}><FaLock /></div>
                  <h3>보안 시스템</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>금융 등급의 보안 시스템으로 투자자의 자산을 안전하게 보호합니다.</p>
                  <ul>
                    <li>• 금융 등급 보안 인증</li>
                    <li>24/7 모니터링 시스템</li>
                    <li>이중 인증 시스템</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* 투명한 거래 */}
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.chartIcon}`}><FaChartLine /></div>
                  <h3>투명한 거래</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>모든 거래 내역이 투명하게 공개되어 투자자가 안심하고 투자할 수 있습니다.</p>
                  <ul>
                    <li>• 실시간 거래 내역 확인</li>
                    <li>투명한 수익 공개</li>
                    <li>정기적인 보고서 제공</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.current}>03</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
        </div>
      );
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.serviceSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>투자 수익률</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>뮤직카우의 투자 수익률을 자세히 살펴보세요.</p>
            </div>
            
            <div className={styles.serviceGrid}>
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.chartIcon}`}><FaChartLine /></div>
                  <h3>평균 수익률</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>투자자들의 평균 수익률은 연 10% 이상입니다.</p>
                  <ul>
                    <li>• 안정적인 수익률</li>
                    <li>투명한 수익 공개</li>
                    <li>정기적인 수익 분배</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.current}>03</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 3) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.serviceSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>투자 절차</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>뮤직카우에서 투자하는 간단한 절차를 확인해보세요.</p>
            </div>
            
            <div className={styles.serviceGrid}>
              {/* 회원가입 */}
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.usersIcon}`}><FaUsers /></div>
                  <h3>회원가입</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>간단한 회원가입으로 뮤직카우 서비스를 시작하세요.</p>
                  <ul>
                    <li>• 실명 인증</li>
                    <li>전화번호 인증</li>
                    <li>이메일 인증</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* 투자금 입금 */}
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.coinIcon}`}><FaCoins /></div>
                  <h3>투자금 입금</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>안전한 결제 시스템으로 투자금을 입금하세요.</p>
                  <ul>
                    <li>• 실시간 입금 확인</li>
                    <li>다양한 결제 수단</li>
                    <li>24시간 입금 가능</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.current}>04</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 4) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.serviceSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>안전한 투자</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>뮤직카우의 안전한 투자 환경을 확인해보세요.</p>
            </div>
            
            <div className={styles.serviceGrid}>
              <motion.div className={styles.serviceCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.serviceCardHeader}>
                  <div className={`${styles.serviceIcon} ${styles.shieldIcon}`}><FaShieldAlt /></div>
                  <h3>안전한 투자 환경</h3>
                </div>
                <div className={styles.serviceCardBody}>
                  <p>투자자의 자산을 안전하게 보호하는 시스템을 제공합니다.</p>
                  <ul>
                    <li>• 안전한 결제 시스템</li>
                    <li>투명한 거래 기록</li>
                    <li>24/7 고객 지원</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.current}>05</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return renderSlide();
};

export default MusicowPresentation;
