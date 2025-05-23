'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { AnimatedList } from "@/components/ui/animated-list";
import { BorderBeam } from "@/components/ui/border-beam";
import { WarpBackground } from "@/components/ui/warp-background";
import { NumberTicker } from "@/components/ui/number-ticker";
import styles from './Presentation.module.css';

interface ProjectProposalProps {
  currentSlide: number;
}

// 슬라이드 타입 정의
interface BaseSlide {
  type: 'title' | 'content' | 'two-column' | 'bullet';
  title: string;
}

interface TitleSlide {
  type: 'title';
  title: string;
  subtitle: string;
  presenter: string;
}

interface ContentSlide {
  type: 'content';
  title: string;
  content: string[];
}

interface TwoColumnSlide {
  type: 'two-column';
  title: string;
  leftTitle: string;
  rightTitle: string;
  leftContent: string[];
  rightContent: string[];
}

interface BulletSlide {
  type: 'bullet';
  title: string;
  content: string[];
}

type Slide = TitleSlide | ContentSlide | TwoColumnSlide | BulletSlide;

// 기존 슬라이드 콘텐츠 배열은 그대로 유지
const slideContents: Slide[] = [
  {
    type: 'title',
    title: '모바일 앱 리디자인 프로젝트',
    subtitle: '프로젝트 제안서',
    presenter: '김디자인 / UX 디자인 팀'
  },
  {
    type: 'content',
    title: '프로젝트 배경',
    content: [
      '📊 앱 사용 현황: 출시 후 3년간 다운로드 50만+, 활성 사용자 15만 명, 하지만 최근 6개월간 사용자 이탈률 28% 증가',
      '🔍 사용자 조사 결과: 응답자의 67%가 "디자인 노후화", 58%가 "사용성 문제" 지적, NPS 점수 22점으로 업계 평균 대비 15점 낮음',
      '📱 시장 트렌드: 경쟁사 5개 중 3개가 최근 1년 내 리디자인 완료, 모바일 앱 디자인 트렌드는 미니멀리즘과 직관적 UX로 진화 중',
      '🚀 개선 기회: 사용자 중심 재설계를 통해 이탈률 40% 감소, 사용자 만족도 35% 향상, 전환율 25% 증가 목표'
    ]
  },
  {
    type: 'two-column',
    title: '현재 앱 분석',
    leftTitle: '문제점',
    rightTitle: '사용자 피드백',
    leftContent: [
      '복잡한 내비게이션 구조',
      '일관성 없는 디자인 요소',
      '느린 로딩 시간과 성능 이슈',
      '접근성 표준 미준수',
      '최신 디바이스 지원 부족'
    ],
    rightContent: [
      '"메뉴 찾기가 어렵습니다"',
      '"중요 기능을 찾는 데 너무 많은 탭이 필요해요"',
      '"디자인이 구식으로 느껴집니다"',
      '"다크 모드가 지원되면 좋겠어요"',
      '"큰 화면에서 레이아웃이 이상하게 표시됩니다"'
    ]
  },
  {
    type: 'bullet',
    title: '프로젝트 목표',
    content: [
      '🎯 사용자 경험 개선: 직관적인 내비게이션과 정보 구조 재설계',
      '🎨 시각적 아이덴티티 강화: 브랜드 가이드라인에 맞는 일관된 디자인 시스템 구축',
      '⚡ 성능 최적화: 로딩 시간 30% 단축 및 배터리 효율성 개선',
      '♿ 접근성 향상: WCAG 2.1 AA 표준 준수로 모든 사용자를 위한 포용적 디자인 구현',
      '🚀 최신 기술 적용: 다크 모드, 제스처 내비게이션 등 최신 UX 트렌드 반영'
    ]
  },
  {
    type: 'title',
    title: '감사합니다.',
    subtitle: '',
    presenter: ''
  }
];

const ProjectProposal: React.FC<ProjectProposalProps> = ({ currentSlide = 0 }) => {  // 기본값 0 설정
  const companyName = "디지털 크리에이티브";

  const renderSlide = (slide: Slide, idx: number) => {
    if (slide.type === 'title') {
      return (
        <motion.div 
          className={styles.titleSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <WarpBackground className="absolute inset-0 opacity-30" />
          <div className="relative z-10 flex flex-col h-full">
            <div className={styles.titleHeader}>
              <ShimmerButton className="text-white font-bold">{companyName}</ShimmerButton>
              <NumberTicker className="text-white/80" value={idx + 1} />
            </div>
            <div className={styles.titleContent}>
              <TextReveal className={styles.titleText}>{slide.title}</TextReveal>
              <motion.div 
                className={styles.subtitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slide.subtitle}
              </motion.div>
              <motion.div 
                className={styles.presenter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slide.presenter}
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (slide.type === 'content') {
      return (
        <motion.div 
          className={styles.contentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className={styles.contentHeader}>
            <div className={styles.companyName}>{companyName}</div>
            <div className={styles.slideNumber}>{idx + 1} / {slideContents.length}</div>
          </div>
          <div className={styles.contentBody}>
            <BorderBeam>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
            </BorderBeam>
            <div style={{ marginTop: '2rem' }}>
              <AnimatedList className="space-y-4">
                {slide.content.map((text: string, i: number) => (
                  <motion.p 
                    key={i}
                    className={styles.contentText} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </AnimatedList>
            </div>
          </div>
        </motion.div>
      );
    }

    if (slide.type === 'two-column') {
      return (
        <motion.div 
          className={styles.contentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className={styles.contentHeader}>
            <div className={styles.companyName}>{companyName}</div>
            <div className={styles.slideNumber}>{idx + 1} / {slideContents.length}</div>
          </div>
          <div className={styles.contentBody}>
            <BorderBeam>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
            </BorderBeam>
            <div className={styles.columnGrid}>
              <motion.div 
                className={styles.column}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className={styles.columnTitle}>{slide.leftTitle}</h3>
                <AnimatedList>
                  {slide.leftContent.map((text: string, i: number) => (
                    <motion.div 
                      key={i}
                      className={styles.columnItem}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {text}
                    </motion.div>
                  ))}
                </AnimatedList>
              </motion.div>
              <motion.div 
                className={styles.column}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className={styles.columnTitle}>{slide.rightTitle}</h3>
                <AnimatedList>
                  {slide.rightContent.map((text: string, i: number) => (
                    <motion.div 
                      key={i}
                      className={styles.columnItem}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {text}
                    </motion.div>
                  ))}
                </AnimatedList>
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (slide.type === 'bullet') {
      return (
        <motion.div 
          className={styles.contentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className={styles.contentHeader}>
            <div className={styles.companyName}>{companyName}</div>
            <div className={styles.slideNumber}>{idx + 1} / {slideContents.length}</div>
          </div>
          <div className={styles.contentBody}>
            <BorderBeam>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
            </BorderBeam>
            <AnimatedList className={styles.bulletList}>
              {slide.content.map((text: string, i: number) => (
                <motion.p 
                  key={i}
                  className={styles.contentText}  // CSS 모듈 스타일로 변경
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </AnimatedList>
          </div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      {renderSlide(slideContents[Math.max(0, Math.min(currentSlide, slideContents.length - 1))], 
                  Math.max(0, Math.min(currentSlide, slideContents.length - 1)))}
    </div>
  );
};

export default ProjectProposal;