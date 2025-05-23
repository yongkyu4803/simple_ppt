// 비교 및 마무리 슬라이드
import React from 'react';
import { motion } from 'framer-motion';
import { BasicSlide } from './BasicSlide';

// 비교 슬라이드 컴포넌트
export const ComparisonSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  leftTitle: string;
  rightTitle: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  slideNumber,
  title,
  subtitle,
  leftTitle,
  rightTitle,
  leftContent,
  rightContent,
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
        className="w-[45%] pr-4 rounded-lg bg-blue-50 p-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-xl font-bold text-blue-700 mb-4">{leftTitle}</div>
        <div>{leftContent}</div>
      </motion.div>
      
      <div className="w-[10%] flex items-center justify-center">
        <motion.div 
          className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          VS
        </motion.div>
      </div>
      
      <motion.div 
        className="w-[45%] pl-4 rounded-lg bg-purple-50 p-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-xl font-bold text-purple-700 mb-4">{rightTitle}</div>
        <div>{rightContent}</div>
      </motion.div>
    </div>
  </BasicSlide>
);

// 마지막 감사 슬라이드
export const ThankYouSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  title?: string;
  subtitle?: string;
  contactInfo?: string;
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  title = '감사합니다',
  subtitle,
  contactInfo,
  companyLogo,
  companyName
}) => (
  <BasicSlide
    currentSlide={currentSlide}
    totalSlides={totalSlides}
    slideNumber={totalSlides}
    companyLogo={companyLogo}
    companyName={companyName}
  >
    <div className="flex flex-col items-center justify-center h-full text-center">
      <motion.div 
        className="text-lg text-blue-600 font-medium mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {subtitle || 'THANK YOU'}
      </motion.div>
      
      <motion.h1 
        className="text-5xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h1>
      
      <motion.div 
        className="h-1 w-32 bg-blue-600 mx-auto mb-10"
        initial={{ width: 0 }}
        animate={{ width: 128 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
      
      {contactInfo && (
        <motion.div 
          className="text-xl text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {contactInfo}
        </motion.div>
      )}
    </div>
  </BasicSlide>
);