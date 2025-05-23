// 슬라이드 레이아웃 컴포넌트 계속
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BasicSlide, fadeIn, slideUp } from './BasicSlide';

// 2단 분할 슬라이드 컴포넌트
export const TwoColumnSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
  leftWidth?: string;
  rightWidth?: string;
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  slideNumber,
  title,
  subtitle,
  leftContent,
  rightContent,
  leftWidth = 'w-1/2',
  rightWidth = 'w-1/2',
  companyLogo,
  companyName
}) => (
  <BasicSlide
    currentSlide={currentSlide}
    totalSlides={totalSlides}
    slideNumber={slideNumber}
    title={title}
    subtitle={subtitle}
    companyLogo={companyLogo}
    companyName={companyName}
  >
    <div className="flex h-full">
      <motion.div 
        className={`${leftWidth} pr-6`}
        {...slideUp(0.3)}
      >
        {leftContent}
      </motion.div>
      
      <motion.div 
        className={`${rightWidth} pl-6`}
        {...slideUp(0.4)}
      >
        {rightContent}
      </motion.div>
    </div>
  </BasicSlide>
);

// 불릿 포인트 슬라이드 컴포넌트
export const BulletPointSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  points: string[];
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  slideNumber,
  title,
  subtitle,
  points,
  companyLogo,
  companyName
}) => (
  <BasicSlide
    currentSlide={currentSlide}
    totalSlides={totalSlides}
    slideNumber={slideNumber}
    title={title}
    subtitle={subtitle}
    companyLogo={companyLogo}
    companyName={companyName}
  >
    <div className="h-full flex items-start pt-4">
      <ul className="space-y-6 w-full">
        {points.map((point, index) => (
          <motion.li 
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="rounded-full bg-blue-100 p-2 mr-4 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            </div>
            <div className="text-xl text-gray-700">{point}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  </BasicSlide>
);