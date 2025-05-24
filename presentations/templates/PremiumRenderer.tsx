'use client';

import React from 'react';
import PremiumPresentation from './premium/Presentation';
import { SlideContent } from './types';

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