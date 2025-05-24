'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// 애니메이션 효과
export const fadeIn = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay }
});

export const slideUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
});

// 슬라이드 베이스 컴포넌트
export const BasicSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  slideNumber: number;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  slideNumber,
  children,
  title,
  subtitle,
  companyLogo,
  companyName = '회사명'
}) => (
  <div className="slide bg-white w-full h-full relative overflow-hidden">
    {/* 배경 요소 */}
    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-50 to-white"></div>
    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-r from-blue-50 to-white"></div>
    
    {/* 헤더 */}
    <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-8 z-10">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
          {companyLogo ? (
            <img 
              src={companyLogo} 
              alt="Logo" 
              className="w-6 h-6"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-xs font-bold">GQ</span>';
                }
              }}
            />
          ) : (
            <span className="text-xs font-bold">GQ</span>
          )}
        </div>
        <span className="ml-3 font-medium text-gray-700">{companyName}</span>
      </div>
      
      {title && (
        <div className="text-lg font-medium text-gray-600">{title}</div>
      )}
      
      <div className="text-sm text-gray-500">
        {slideNumber} / {totalSlides}
      </div>
    </div>
    
    {/* 타이틀 섹션 (있는 경우) */}
    {(title || subtitle) && (
      <div className="absolute top-16 left-8 right-8 pt-4">
        {title && !subtitle && (
          <motion.h1 
            className="text-2xl font-bold text-gray-800 mb-2"
            {...slideUp(0.1)}
          >
            {title}
          </motion.h1>
        )}
        
        {subtitle && (
          <motion.h2 
            className="text-lg text-gray-600"
            {...slideUp(0.2)}
          >
            {subtitle}
          </motion.h2>
        )}
        
        <motion.div 
          className="h-0.5 w-16 bg-blue-600 mt-2"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
    )}
    
    {/* 메인 콘텐츠 */}
    <div className={`absolute left-0 right-0 px-8 ${(title || subtitle) ? 'top-32' : 'top-20'} bottom-16`}>
      {children}
    </div>
    
    {/* 푸터 */}
    <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-gray-500 text-sm">
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <FaHome className="mr-1" />
          <span>{companyName}</span>
        </div>
        <span>© {new Date().getFullYear()} All Rights Reserved</span>
      </div>
      
      <div className="flex items-center">
        <div className="flex space-x-2 items-center mr-4">
          <FaChevronLeft />
          <FaChevronRight />
          <span>화살표 키로 이동</span>
        </div>
      </div>
    </div>
  </div>
);