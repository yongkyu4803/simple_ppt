'use client';

// 템플릿 렌더러 (기본 템플릿 함수)
import React from 'react';
import { TitleSlide, ContentSlide } from './SlideComponents';
import { TwoColumnSlide, BulletPointSlide } from './LayoutComponents';
import { ImageSlide } from './ImageSlide';
import { ComparisonSlide, ThankYouSlide } from './MoreSlides';

// 슬라이드 콘텐츠 타입 정의
export interface SlideContent {
  type: 'title' | 'content' | 'two-column' | 'image' | 'comparison' | 'bullet' | 'thank-you';
  title?: string;
  subtitle?: string;
  content?: string | string[];
  leftContent?: string | string[];
  rightContent?: string | string[];
  leftTitle?: string;
  rightTitle?: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  presenter?: string;
  contactInfo?: string;
}

// 기본 템플릿 렌더링 함수
const renderBasicTemplate = (
  slideContents: SlideContent[],
  currentSlide: number,
  companyName: string = '회사명',
  companyLogo?: string
) => {
  const totalSlides = slideContents.length;
  const slideContent = slideContents[currentSlide];
  
  if (!slideContent) return null;
  
  if (slideContent.type === 'title') {
    return (
      <TitleSlide
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        title={slideContent.title || '프레젠테이션 제목'}
        subtitle={slideContent.subtitle}
        presenter={slideContent.presenter}
        companyLogo={companyLogo}
        companyName={companyName}
      />
    );
  } else if (slideContent.type === 'content') {
    return (
      <ContentSlide
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slideNumber={currentSlide + 1}
        title={slideContent.title || ''}
        subtitle={slideContent.subtitle}
        companyLogo={companyLogo}
        companyName={companyName}
        content={
          <div className="text-lg text-gray-700 space-y-4">
            {typeof slideContent.content === 'string' ? 
              <p>{slideContent.content}</p> : 
              Array.isArray(slideContent.content) && 
              slideContent.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            }
          </div>
        }
      />
    );
  } else if (slideContent.type === 'two-column') {
    return (
      <TwoColumnSlide
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slideNumber={currentSlide + 1}
        title={slideContent.title || ''}
        subtitle={slideContent.subtitle}
        companyLogo={companyLogo}
        companyName={companyName}
        leftContent={
          <div className="text-lg text-gray-700 space-y-4">
            {typeof slideContent.leftContent === 'string' ? 
              <p>{slideContent.leftContent}</p> : 
              Array.isArray(slideContent.leftContent) && 
              slideContent.leftContent.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            }
          </div>
        }
        rightContent={
          <div className="text-lg text-gray-700 space-y-4">
            {typeof slideContent.rightContent === 'string' ? 
              <p>{slideContent.rightContent}</p> : 
              Array.isArray(slideContent.rightContent) && 
              slideContent.rightContent.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            }
          </div>
        }
      />
    );
  } else if (slideContent.type === 'image') {
    return (
      <ImageSlide
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slideNumber={currentSlide + 1}
        title={slideContent.title || ''}
        subtitle={slideContent.subtitle}
        companyLogo={companyLogo}
        companyName={companyName}
        imageUrl={slideContent.imageUrl || '/placeholder-image.jpg'}
        imagePosition={slideContent.imagePosition || 'right'}
        content={
          <div className="text-lg text-gray-700 space-y-4">
            {typeof slideContent.content === 'string' ? 
              <p>{slideContent.content}</p> : 
              Array.isArray(slideContent.content) && 
              slideContent.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            }
          </div>
        }
      />
    );
  } else if (slideContent.type === 'comparison') {
    return (
      <ComparisonSlide
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slideNumber={currentSlide + 1}
        title={slideContent.title || ''}
        subtitle={slideContent.subtitle}
        companyLogo={companyLogo}
        companyName={companyName}
        leftTitle={slideContent.leftTitle || '왼쪽'}
        rightTitle={slideContent.rightTitle || '오른쪽'}
        leftContent={
          <div className="text-lg space-y-4">
            {typeof slideContent.leftContent === 'string' ? 
              <p>{slideContent.leftContent}</p> : 
              Array.isArray(slideContent.leftContent) && 
              slideContent.leftContent.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            }
          </div>
        }
        rightContent={
          <div className="text-lg space-y-4">
            {typeof slideContent.rightContent === 'string' ? 
              <p>{slideContent.rightContent}</p> : 
              Array.isArray(slideContent.rightContent) && 
              slideContent.rightContent.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            }
          </div>
        }
      />
    );
  } else if (slideContent.type === 'bullet') {
    return (
      <BulletPointSlide
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slideNumber={currentSlide + 1}
        title={slideContent.title || ''}
        subtitle={slideContent.subtitle}
        companyLogo={companyLogo}
        companyName={companyName}
        points={Array.isArray(slideContent.content) ? slideContent.content : []}
      />
    );
  } else if (slideContent.type === 'thank-you') {
    return (
      <ThankYouSlide
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        title={slideContent.title || '감사합니다'}
        subtitle={slideContent.subtitle}
        contactInfo={slideContent.contactInfo}
        companyLogo={companyLogo}
        companyName={companyName}
      />
    );
  } else {
    return null;
  }
};

export default renderBasicTemplate;