'use client';

import React from 'react';
import styles from './Presentation.module.css';

interface BasicExampleProps {
  currentSlide: number;
}

const BasicExample: React.FC<BasicExampleProps> = ({ currentSlide }) => {
  // 회사 정보 설정
  const companyName = "테크 솔루션";
  
  // 슬라이드 내용 정의
  const slideContents = [
    // 슬라이드 1: 타이틀 슬라이드
    {
      type: 'title',
      title: '2025년 비즈니스 전략',
      subtitle: '연간 계획 및 목표',
      presenter: '홍길동 / 전략기획팀'
    },
    
    // 슬라이드 2: 내용 슬라이드
    {
      type: 'content',
      title: '개요',
      subtitle: '현재 상황 및 목표',
      content: [
        '2024년은 디지털 트랜스포메이션의 가속화와 함께 많은 변화가 있었습니다. 다양한 시장 환경 변화에 따라 우리 기업도 새로운 전략적 방향을 모색할 필요가 있습니다.',
        '본 프레젠테이션에서는 2025년 전략적 목표와 핵심 추진 계획을 공유하고, 각 부서별 역할과 협업 방안에 대해 논의하고자 합니다.',
        '모든 구성원의 적극적인 참여와 협력을 통해 내년 목표를 달성할 수 있도록 함께 노력해 나가겠습니다.'
      ]
    },
    
    // 슬라이드 3: 불릿 포인트 슬라이드
    {
      type: 'bullet',
      title: '2025년 핵심 목표',
      subtitle: '측정 가능한 구체적 목표',
      content: [
        '매출 성장: 전년 대비 30% 이상 매출 증대',
        '신규 시장 진출: 동남아시아 시장 공략 및 점유율 15% 달성',
        '제품 혁신: 인공지능 기반 신제품 라인업 3종 출시',
        '고객 만족도: NPS 점수 75점 이상 달성',
        '팀 역량 강화: 전 직원 대상 디지털 역량 강화 교육 실시'
      ]
    },
    
    // 슬라이드 4: 두 컬럼 슬라이드
    {
      type: 'two-column',
      title: '시장 분석',
      subtitle: '현재 상황과 기회 요소',
      leftTitle: '시장 현황',
      rightTitle: '기회 요소',
      leftContent: [
        '글로벌 시장 규모: 2,500억 달러 (YoY 12% 증가)',
        '주요 경쟁사: BigTech, InnoSystems, TechGiant',
        '소비자 트렌드: 맞춤형 서비스, 지속가능성 중시',
        '규제 환경: 데이터 보안 및 개인정보 보호 강화'
      ],
      rightContent: [
        '원격/하이브리드 근무 지속으로 인한 디지털 솔루션 수요 증가',
        'AI/ML 기술 도입 가속화',
        '신흥 시장의 디지털 전환 수요 증가',
        'ESG 중심 비즈니스 모델의 경쟁력 강화'
      ]
    },
    
    // 슬라이드 5: 이미지 슬라이드
    {
      type: 'image',
      title: '제품 로드맵',
      subtitle: '2025년 핵심 출시 일정',
      imageUrl: '/api/placeholder/500/300',
      imagePosition: 'right',
      content: [
        '2025년 Q1: 클라우드 기반 통합 플랫폼 출시',
        '2025년 Q2: 모바일 앱 리뉴얼 및 신규 기능 추가',
        '2025년 Q3: AI 기반 데이터 분석 도구 출시',
        '2025년 Q4: 엔터프라이즈 솔루션 업그레이드'
      ]
    },
    
    // 슬라이드 6: 비교 슬라이드
    {
      type: 'comparison',
      title: '전략적 전환',
      subtitle: '기존 전략에서 신규 전략으로',
      leftTitle: '기존 전략',
      rightTitle: '신규 전략',
      leftContent: [
        '국내 시장 중심',
        '단일 제품 라인업',
        '직접 판매 채널 위주',
        '전통적 마케팅 방식',
        '수동적 고객 대응'
      ],
      rightContent: [
        '글로벌 시장 확장',
        '다양한 제품 포트폴리오',
        '파트너십 및 얼라이언스 강화',
        '디지털 마케팅 중심',
        '선제적 고객 경험 관리'
      ]
    },
    
    // 슬라이드 7: 마무리 슬라이드
    {
      type: 'thank-you',
      title: 'Thank You',
      subtitle: 'QUESTIONS?',
      contactInfo: 'contact@techsolutions.com | 02-123-4567'
    }
  ];
  
  const totalSlides = slideContents.length;
  const slideContent = slideContents[currentSlide];
  
  if (!slideContent) return null;
  
  // 공통 헤더 컴포넌트
  const renderHeader = (titleText?: string) => (
    <div className={styles.slideHeader}>
      <div className={styles.companyInfo}>
        <div className={styles.companyLogo}>
          <img src="/api/placeholder/24/24" alt="Logo" />
        </div>
        {companyName}
      </div>
      <div className={styles.slideNavInfo}>
        {titleText && `${titleText} | `}{currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
  
  // 공통 푸터 컴포넌트
  const renderFooter = () => (
    <div className={styles.slideFooter}>
      <div className={styles.footerCompanyInfo}>
        <img src="/api/placeholder/16/16" alt="Logo" />
        {companyName}© 2025 All Rights Reserved
      </div>
      <div className={styles.navigationHint}>
        <span>◀</span>
        <span>▶</span>
        화살표 키로 이동
      </div>
    </div>
  );
  
  // 타이틀 슬라이드 렌더링
  if (slideContent.type === 'title') {
    return (
      <div className={styles.basicExampleContainer}>
        <div className={`${styles.slideWrapper} ${styles.titleSlideContent}`}>
          {renderHeader()}
          <div className={styles.slideContent}>
            <div className={styles.mainSubtitle}>{slideContent.subtitle}</div>
            <h1 className={styles.mainTitle}>{slideContent.title}</h1>
            <div className={styles.presenterInfo}>발표자: {slideContent.presenter}</div>
            <div className={styles.dateInfo}>{new Date().toLocaleDateString()}</div>
          </div>
          {renderFooter()}
        </div>
      </div>
    );
  }
  
  // 일반 콘텐츠 슬라이드
  if (slideContent.type === 'content') {
    return (
      <div className={styles.basicExampleContainer}>
        <div className={styles.slideWrapper}>
          {renderHeader(slideContent.title)}
          <div className={styles.slideContent}>
            <h2 className={styles.contentTitle}>{slideContent.title}</h2>
            <div className={styles.contentSubtitle}>{slideContent.subtitle}</div>
            {Array.isArray(slideContent.content) ? (
              slideContent.content.map((paragraph, index) => (
                <p key={index} className={styles.contentText}>{paragraph}</p>
              ))
            ) : (
              <p className={styles.contentText}>{slideContent.content}</p>
            )}
          </div>
          {renderFooter()}
        </div>
      </div>
    );
  }
  
  // 불릿 포인트 슬라이드
  if (slideContent.type === 'bullet') {
    return (
      <div className={styles.basicExampleContainer}>
        <div className={styles.slideWrapper}>
          {renderHeader(slideContent.title)}
          <div className={styles.slideContent}>
            <h2 className={styles.contentTitle}>{slideContent.title}</h2>
            <div className={styles.contentSubtitle}>{slideContent.subtitle}</div>
            <ul className={styles.bulletList}>
              {Array.isArray(slideContent.content) && slideContent.content.map((item, index) => (
                <li key={index} className={styles.bulletItem}>{item}</li>
              ))}
            </ul>
          </div>
          {renderFooter()}
        </div>
      </div>
    );
  }
  
  // 두 컬럼 슬라이드
  if (slideContent.type === 'two-column') {
    return (
      <div className={styles.basicExampleContainer}>
        <div className={styles.slideWrapper}>
          {renderHeader(slideContent.title)}
          <div className={styles.slideContent}>
            <h2 className={styles.contentTitle}>{slideContent.title}</h2>
            <div className={styles.contentSubtitle}>{slideContent.subtitle}</div>
            <div className={styles.twoColumnGrid}>
              <div className={styles.columnCard}>
                <h3 className={styles.columnTitle}>{slideContent.leftTitle}</h3>
                <ul className={styles.columnList}>
                  {Array.isArray(slideContent.leftContent) && slideContent.leftContent.map((item, index) => (
                    <li key={index} className={styles.columnListItem}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.columnCard}>
                <h3 className={styles.columnTitle}>{slideContent.rightTitle}</h3>
                <ul className={styles.columnList}>
                  {Array.isArray(slideContent.rightContent) && slideContent.rightContent.map((item, index) => (
                    <li key={index} className={styles.columnListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {renderFooter()}
        </div>
      </div>
    );
  }
  
  // 이미지 슬라이드
  if (slideContent.type === 'image') {
    return (
      <div className={styles.basicExampleContainer}>
        <div className={styles.slideWrapper}>
          {renderHeader(slideContent.title)}
          <div className={styles.slideContent}>
            <h2 className={styles.contentTitle}>{slideContent.title}</h2>
            <div className={styles.contentSubtitle}>{slideContent.subtitle}</div>
            <div className={styles.imageContentGrid}>
              <div className={styles.imageTextContent}>
                <ul className={styles.imageTextList}>
                  {Array.isArray(slideContent.content) && slideContent.content.map((item, index) => (
                    <li key={index} className={styles.imageTextItem}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.imageContainer}>
                <img 
                  src={slideContent.imageUrl} 
                  alt={slideContent.title}
                  className={styles.slideImage}
                />
              </div>
            </div>
          </div>
          {renderFooter()}
        </div>
      </div>
    );
  }
  
  // 비교 슬라이드
  if (slideContent.type === 'comparison') {
    return (
      <div className={styles.basicExampleContainer}>
        <div className={styles.slideWrapper}>
          {renderHeader(slideContent.title)}
          <div className={styles.slideContent}>
            <h2 className={styles.contentTitle}>{slideContent.title}</h2>
            <div className={styles.contentSubtitle}>{slideContent.subtitle}</div>
            <div className={styles.comparisonGrid}>
              <div className={styles.comparisonCard}>
                <h3 className={styles.comparisonTitle}>{slideContent.leftTitle}</h3>
                <ul className={styles.comparisonList}>
                  {Array.isArray(slideContent.leftContent) && slideContent.leftContent.map((item, index) => (
                    <li key={index} className={styles.comparisonListItem}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.comparisonCard}>
                <h3 className={styles.comparisonTitle}>{slideContent.rightTitle}</h3>
                <ul className={styles.comparisonList}>
                  {Array.isArray(slideContent.rightContent) && slideContent.rightContent.map((item, index) => (
                    <li key={index} className={styles.comparisonListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {renderFooter()}
        </div>
      </div>
    );
  }
  
  // Thank You 슬라이드
  if (slideContent.type === 'thank-you') {
    return (
      <div className={styles.basicExampleContainer}>
        <div className={`${styles.slideWrapper} ${styles.thankYouSlide}`}>
          {renderHeader()}
          <div className={styles.slideContent}>
            <div className={styles.thankYouMainContent}>
              <div className={styles.thankYouSubtitle}>{slideContent.subtitle}</div>
              <h1 className={styles.thankYouTitle}>{slideContent.title}</h1>
            </div>
            <div className={styles.contactInfo}>{slideContent.contactInfo}</div>
          </div>
          {renderFooter()}
        </div>
      </div>
    );
  }
  
  return null;
};

export default BasicExample;
