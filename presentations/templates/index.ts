'use client';

// 모든 템플릿 컴포넌트를 한 곳에서 내보내는 인덱스 파일
export * from './BasicSlide';
export * from './SlideComponents';
export * from './LayoutComponents';
export * from './ImageSlide';
export * from './MoreSlides';
export { default as renderBasicTemplate } from './TemplateRenderer';
export { default as renderPremiumTemplate } from './PremiumRenderer';