// 추가 템플릿 컴포넌트
import React from 'react';
import { motion } from 'framer-motion';
import { BasicSlide } from './BasicSlide';

// 이미지 슬라이드 컴포넌트
export const ImageSlide: React.FC<{
  currentSlide: number;
  totalSlides: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  imageUrl: string;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  imageSplit?: string;
  companyLogo?: string;
  companyName?: string;
}> = ({
  currentSlide,
  totalSlides,
  slideNumber,
  title,
  subtitle,
  content,
  imageUrl,
  imagePosition = 'right',
  imageSplit = 'w-1/2',
  companyLogo,
  companyName
}) => {
  const contentSplit = imageSplit === 'w-1/2' ? 'w-1/2' : 
                     imageSplit === 'w-1/3' ? 'w-2/3' :
                     imageSplit === 'w-2/3' ? 'w-1/3' :
                     imageSplit === 'w-1/4' ? 'w-3/4' : 'w-1/2';
  
  // 수평 레이아웃 (왼쪽 또는 오른쪽에 이미지)
  if (imagePosition === 'left' || imagePosition === 'right') {
    return (
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
          {imagePosition === 'left' && (
            <motion.div 
              className={`${imageSplit} pr-6 flex items-center justify-center`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}
          
          <motion.div 
            className={`${imagePosition === 'left' ? contentSplit : contentSplit} ${imagePosition === 'left' ? 'pl-6' : 'pr-6'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {content}
          </motion.div>
          
          {imagePosition === 'right' && (
            <motion.div 
              className={`${imageSplit} pl-6 flex items-center justify-center`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          )}
        </div>
      </BasicSlide>
    );
  }
  
  // 수직 레이아웃 (위쪽 또는 아래쪽에 이미지)
  return (
    <BasicSlide
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      slideNumber={slideNumber}
      title={title}
      subtitle={subtitle}
      companyLogo={companyLogo}
      companyName={companyName}
    >
      <div className="flex flex-col h-full">
        {imagePosition === 'top' && (
          <motion.div 
            className="h-2/5 mb-6 flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className={`${imagePosition === 'top' ? 'h-3/5' : 'h-3/5'} ${imagePosition === 'top' ? '' : 'mb-6'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {content}
        </motion.div>
        
        {imagePosition === 'bottom' && (
          <motion.div 
            className="h-2/5 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        )}
      </div>
    </BasicSlide>
  );
};