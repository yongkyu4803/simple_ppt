// 모든 템플릿에서 공통으로 사용하는 슬라이드 타입 정의

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

// Premium 템플릿에서 지원하는 슬라이드 타입 (image, comparison 제외)
export type PremiumSlideContent = Omit<SlideContent, 'type'> & {
  type: 'title' | 'content' | 'two-column' | 'bullet' | 'thank-you';
};