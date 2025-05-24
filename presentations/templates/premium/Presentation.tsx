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

// 슬라이드 타입 정의 (template-generator와 호환)
interface BaseSlide {
  type: 'title' | 'content' | 'two-column' | 'bullet' | 'thank-you';
  title: string;
}

interface TitleSlide {
  type: 'title';
  title: string;
  subtitle?: string;
  presenter?: string;
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

interface ThankYouSlide {
  type: 'thank-you';
  title: string;
  subtitle?: string;
}

type Slide = TitleSlide | ContentSlide | TwoColumnSlide | BulletSlide | ThankYouSlide;

interface PremiumPresentationProps {
  currentSlide: number;
  slideContents: Slide[];
  companyName?: string;
}

const PremiumPresentation: React.FC<PremiumPresentationProps> = ({ 
  currentSlide = 0, 
  slideContents = [],
  companyName = "Your Company"
}) => {
  // 현재 슬라이드 유효성 검사
  const validSlideIndex = Math.max(0, Math.min(currentSlide, slideContents.length - 1));
  const currentSlideData = slideContents[validSlideIndex];
  
  if (!currentSlideData) {
    return (
      <div className={styles.container}>
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">슬라이드가 없습니다</h2>
            <p className="text-gray-600">프레젠테이션 데이터를 확인해주세요.</p>
          </div>
        </div>
      </div>
    );
  }

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
              {slide.subtitle && (
                <motion.div 
                  className={styles.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.subtitle}
                </motion.div>
              )}
              {slide.presenter && (
                <motion.div 
                  className={styles.presenter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.presenter}
                </motion.div>
              )}
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
                  className={styles.contentText}
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

    if (slide.type === 'thank-you') {
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
              {slide.subtitle && (
                <motion.div 
                  className={styles.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.subtitle}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className={styles.container}>
      {renderSlide(currentSlideData, validSlideIndex)}
    </div>
  );
};

export default PremiumPresentation;