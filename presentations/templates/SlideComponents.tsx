'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BasicSlide, fadeIn, slideUp } from './BasicSlide';

// 타이틀 슬라이드 컴포넌트
export const TitleSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  title: string;
  subtitle?: string;
  presenter?: string;
  date?: string;
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  title,
  subtitle,
  presenter,
  date = new Date().toLocaleDateString(),
  companyLogo,
  companyName
}) => (
  <BasicSlide
    currentSlide={currentSlide}
    totalSlides={totalSlides}
    slideNumber={1}
    companyLogo={companyLogo}
    companyName={companyName}
  >
    <div className="flex h-full">
      <div className="w-full flex flex-col items-center justify-center text-center">
        <motion.div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-md mb-6" {...fadeIn(0.1)}>
          {subtitle || 'PRESENTATION'}
        </motion.div>
        
        <motion.h1 
          className="text-5xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.div 
          className="h-1 w-24 bg-blue-600 mx-auto mb-10"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />
        
        {presenter && (
          <motion.div
            className="text-xl text-gray-600 mb-2"
            {...fadeIn(0.6)}
          >
            발표자: {presenter}
          </motion.div>
        )}
        
        <motion.div
          className="text-gray-500"
          {...fadeIn(0.7)}
        >
          {date}
        </motion.div>
      </div>
    </div>
  </BasicSlide>
);

// 콘텐츠 슬라이드 컴포넌트
export const ContentSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  content: ReactNode;
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  slideNumber,
  title,
  subtitle,
  content,
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
    <motion.div
      className="h-full pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {content}
    </motion.div>
  </BasicSlide>
);