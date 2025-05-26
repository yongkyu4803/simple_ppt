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
            
            <div className={styles.titleContent}>
              <div className={styles.leftContent}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <div className={styles.logoAndTitle}>
                    <div>
                      <h1>뮤직카우 <span>MUSICOW</span></h1>
                      <p className={styles.subtitle}>
                        세계 최초 음악저작권 투자 플랫폼<br />
                        음악이 매력적인 자산이 되는 새로운 경험을 제공합니다
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.actionButtons}>
                    <button className={styles.primaryButton}>투자 시작하기</button>
                    <button className={styles.secondaryButton}>더 알아보기</button>
                  </div>
                </motion.div>
              </div>
              
              <div className={styles.rightContent}>
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                  <img src="/cover001.png" alt="뮤직카우 마케팅 이미지" className={styles.coverImage} />
                </motion.div>
              </div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className={styles.current}>01</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
          
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>MUSICOW</div>
              <div className={styles.sidebarSubtitle}>음악저작권 플랫폼</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.musicIcon}><FaMusic /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.coinIcon}><FaCoins /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.chartIcon}><FaChartLine /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.lockIcon}><FaLock /></div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>혁신 • 투명 • 수익</div>
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
          
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>MUSICOW</div>
              <div className={styles.sidebarSubtitle}>음악저작권 플랫폼</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.musicIcon}><FaMusic /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.coinIcon}><FaCoins /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.chartIcon}><FaChartLine /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.lockIcon}><FaLock /></div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>혁신 • 투명 • 수익</div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 2) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.featureSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>뮤직카우의 특징</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>혁신금융서비스로 지정된 뮤직카우만의 차별화된 특징과 장점을 확인해보세요.</p>
            </div>
            
            <div className={styles.featureGrid}>
              <motion.div className={styles.featureCard} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon} ${styles.rocketIcon}`}><FaRocket /></div>
                  <div className={styles.featureCardBody}>
                    <h3>세계 최초</h3>
                    <ul>
                      <li>• 음악저작권 투자 플랫폼의 선구자</li>
                      <li>• 2022년 9월 혁신금융서비스 지정</li>
                      <li>• 글로벌 표준 만들기</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className={styles.featureCard} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon} ${styles.usersIcon}`}><FaUsers /></div>
                  <div className={styles.featureCardBody}>
                    <h3>접근성</h3>
                    <ul>
                      <li>• 누구나 쉽게 시작할 수 있는 소액 투자</li>
                      <li>• 직관적이고 편리한 사용자 인터페이스</li>
                      <li>• 실시간 거래 및 투명한 정보 제공</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className={styles.featureCard} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon} ${styles.lockIcon}`}><FaLock /></div>
                  <div className={styles.featureCardBody}>
                    <h3>안전성</h3>
                    <ul>
                      <li>• 금융위원회 혁신금융서비스 지정</li>
                      <li>• 강화된 보안 시스템 및 모니터링</li>
                      <li>• 투자자 보호 제도 완비</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className={styles.featureCard} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.featureCardContent}>
                  <div className={`${styles.featureIcon} ${styles.globeIcon}`}><FaGlobe /></div>
                  <div className={styles.featureCardBody}>
                    <h3>생태계 기여</h3>
                    <ul>
                      <li>• 플랫폼 수익의 일부가 음악 생태계 지원</li>
                      <li>• 아티스트와 투자자 모두에게 도움</li>
                      <li>• 지속 가능한 음악 산업 발전</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className={styles.current}>03</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우</div>
              </motion.div>
            </div>
          </div>
          
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>MUSICOW</div>
              <div className={styles.sidebarSubtitle}>음악저작권 플랫폼</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.musicIcon}><FaMusic /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.coinIcon}><FaCoins /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.chartIcon}><FaChartLine /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.lockIcon}><FaLock /></div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>혁신 • 투명 • 수익</div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 3) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.newsSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>최신 소식 & 글로벌 진출</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <div className={styles.description}>
              <p>뮤직카우의 최신 소식과 미국 진출 현황을 확인해보세요.</p>
            </div>
            
            <div className={styles.newsGrid}>
              <motion.div className={styles.newsCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.newsCardHeader}>
                  <div className={`${styles.newsIcon} ${styles.globeIcon}`}><FaGlobe /></div>
                  <h3>제이지와 미국 진출</h3>
                  <div className={styles.newsDate}>2025.05.23</div>
                </div>
                <div className={styles.newsCardBody}>
                  <p>힙합 거장 제이지(Jay-Z)가 이끄는 글로벌 엔터테인먼트 기업 '락네이션(Roc Nation)'과 전략적 파트너십을 체결하여 미국 시장 진출에 박차를 가하고 있습니다.</p>
                  <ul>
                    <li>• 락네이션과의 파트너십으로 양질의 IP 확보</li>
                    <li>• 현지 아티스트들과 계약 체결 진행</li>
                    <li>• 글로벌 음악 IP 스케일업 시동</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div className={styles.newsCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.newsCardHeader}>
                  <div className={`${styles.newsIcon} ${styles.eventIcon}`}><FaStar /></div>
                  <h3>신규 가입 특별 이벤트</h3>
                  <div className={styles.newsDate}>2025.02.20 ~ 06.30</div>
                </div>
                <div className={styles.newsCardBody}>
                  <p>신규 회원을 위한 특별 혜택! 첫 음악증권 구매 시 저작권료를 2배로 지급하는 파격적인 이벤트를 진행하고 있습니다.</p>
                  <ul>
                    <li>• 가입 즉시 뮤카 포인트 5,000P 지급</li>
                    <li>• 첫 구매 시 저작권료 2배 지급</li>
                    <li>• 미션 성공 시 최대 3,000P 추가 증정</li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div className={styles.newsCard} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.newsCardHeader}>
                  <div className={`${styles.newsIcon} ${styles.starIcon}`}><FaRocket /></div>
                  <h3>그래미 수상 프로듀서</h3>
                  <div className={styles.newsDate}>2025.03.11</div>
                </div>
                <div className={styles.newsCardBody}>
                  <p>그래미 수상 프로듀서 '블랙 턱시도(Blaq Tuxedo)'와 협업하여 미국 플랫폼 상장을 계획하고 있습니다.</p>
                  <ul>
                    <li>• 그래미 수상 프로듀서와의 협업</li>
                    <li>• 뮤직카우 US 상장 계획 공개</li>
                    <li>• 현지 아티스트와 다수 계약 진행</li>
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
          
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>MUSICOW</div>
              <div className={styles.sidebarSubtitle}>음악저작권 플랫폼</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.musicIcon}><FaMusic /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.coinIcon}><FaCoins /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.chartIcon}><FaChartLine /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.lockIcon}><FaLock /></div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>혁신 • 투명 • 수익</div>
            </div>
          </div>
        </div>
      );
    } else if (currentSlide === 4) {
      return (
        <div className={styles.slide}>
          <div className={`${styles.mainContent} ${styles.finalSlide}`}>
            <motion.div className={styles.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>뮤직카우와 함께하세요</h2>
              <div className={styles.headerLine}></div>
            </motion.div>
            
            <motion.div className={styles.finalContent} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <p>뮤직카우와 함께 음악저작권 투자의 새로운 경험을 시작해보세요.<br />
              세계 최초 음악저작권 투자 플랫폼으로 혁신적인 문화금융 서비스를 제공합니다.</p>
              
              <div className={styles.finalStats}>
                <motion.div className={styles.finalStatItem} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                  <div className={styles.finalStatIcon}><FaCrown /></div>
                  <div className={styles.finalStatText}>
                    <div className={styles.finalStatNumber}>세계 최초</div>
                    <div className={styles.finalStatLabel}>음악저작권 투자 플랫폼</div>
                  </div>
                </motion.div>
                
                <motion.div className={styles.finalStatItem} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                  <div className={styles.finalStatIcon}><FaShieldAlt /></div>
                  <div className={styles.finalStatText}>
                    <div className={styles.finalStatNumber}>혁신금융</div>
                    <div className={styles.finalStatLabel}>서비스 지정 (2022.09)</div>
                  </div>
                </motion.div>
                
                <motion.div className={styles.finalStatItem} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
                  <div className={styles.finalStatIcon}><FaCoins /></div>
                  <div className={styles.finalStatText}>
                    <div className={styles.finalStatNumber}>500원부터</div>
                    <div className={styles.finalStatLabel}>소액 투자 가능</div>
                  </div>
                </motion.div>
              </div>
              
              <div className={styles.ctaSection}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                  <h3>뮤직카우와 함께 시작하세요</h3>
                  <p>음악 산업의 미래를 만들어가는 혁신에 참여하세요</p>
                </motion.div>
                
                <motion.div className={styles.actionRow} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
                  <button className={styles.primaryButton}>
                    <FaRocket className={styles.buttonIcon} />
                    지금 시작하기
                  </button>
                  <button className={styles.secondaryButton}>
                    <FaGlobe className={styles.buttonIcon} />
                    www.musicow.com
                  </button>
                </motion.div>
              </div>
            </motion.div>
            
            <div className={styles.slideNumber}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                <div className={styles.current}>05</div>
                <div className={styles.total}>/ {totalSlides}</div>
                <div className={styles.copyright}>© 2025 뮤직카우 | contact@musicow.com</div>
              </motion.div>
            </div>
          </div>
          
          <div className={styles.sidebar}>
            <div className="text-center mb-16">
              <div className={styles.sidebarTitle}>MUSICOW</div>
              <div className={styles.sidebarSubtitle}>새로운 시대</div>
            </div>
            
            <div className={styles.iconGrid}>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={styles.musicIcon}><FaMusic /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className={styles.coinIcon}><FaCoins /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className={styles.chartIcon}><FaChartLine /></div>
              </motion.div>
              <motion.div className={styles.iconWrapper} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className={styles.lockIcon}><FaLock /></div>
              </motion.div>
            </div>
            
            <div className={styles.sidebarFooter}>
              <div className={styles.tagline}>혁신 • 투명 • 수익</div>
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className={styles.container}>
      {renderSlide()}
    </div>
  );
};

export default MusicowPresentation;