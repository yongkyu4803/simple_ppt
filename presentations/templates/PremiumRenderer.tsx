'use client';

import React from 'react';
import PremiumPresentation from './premium/Presentation';

// 슬라이드 타입 정의 (기존 타입과 호환)
export interface SlideContent {
  type: 'title' | 'content' | 'two-column' | 'bullet' | 'thank-you';
  title?: string;
  subtitle?: string;
  content?: string | string[];
  leftContent?: string | string[];
  rightContent?: string | string[];
  leftTitle?: string;
  rightTitle?: string;
  presenter?: string;
}

// 프리미엄 템플릿 렌더링 함수
export const renderPremiumTemplate = (
  slideContents: SlideContent[],
  currentSlide: number,
  companyName: string = 'Your Company'
) => {
  return (
    <PremiumPresentation
      currentSlide={currentSlide}
      slideContents={slideContents}
      companyName={companyName}
    />
  );
};

export default renderPremiumTemplate;