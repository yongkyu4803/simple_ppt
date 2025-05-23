# Simple Presentation Viewer

Next.js로 만든 간단한 프레젠테이션 뷰어입니다. 프레젠테이션을 폴더 구조로 관리하고 PDF로 내보낼 수 있습니다.

## 특징

- **Next.js 기반 프레젠테이션**: 웹 기술을 활용한 프레젠테이션 구현
- **폴더 기반 관리**: 각 프레젠테이션은 개별 폴더에서 관리
- **PDF 내보내기**: 프레젠테이션을 PDF로 저장 가능
- **애니메이션 효과**: Framer Motion을 활용한 부드러운 전환 효과
- **반응형 디자인**: 다양한 디바이스에서 잘 작동

## 구조

```
simple_ppt/
├── app/                  # Next.js 앱 디렉토리
│   ├── view/[id]/        # 프레젠테이션 뷰 페이지
│   ├── globals.css       # 전역 스타일
│   └── layout.tsx        # 루트 레이아웃
├── components/           # UI 컴포넌트 (필요한 경우)
├── presentations/        # 프레젠테이션 폴더
│   ├── demo/             # 데모 프레젠테이션
│   └── digital-transformation/ # 디지털 혁신 프레젠테이션
└── public/               # 정적 파일 (이미지 등)
```

## 프레젠테이션 구성 방법

프레젠테이션을 추가하려면 다음 단계를 따르세요:

1. `presentations` 폴더 안에 새 폴더 생성 (예: `my-presentation`)
2. 그 안에 `Presentation.tsx` 파일 생성 및 내용 작성
3. 홈페이지 `app/page.tsx`에 프레젠테이션 정보 추가

```tsx
// 프레젠테이션 컴포넌트 기본 구조
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MyPresentationProps {
  currentSlide: number;
}

const MyPresentation: React.FC<MyPresentationProps> = ({ currentSlide }) => {
  // 슬라이드별 렌더링
  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <div className="slide-content">
            <h1 className="slide-title">제목</h1>
            <h2 className="slide-subtitle">부제목</h2>
          </div>
        );
      case 1:
        return (
          <div className="slide-content">
            <h2>두 번째 슬라이드</h2>
            <ul>
              <li>항목 1</li>
              <li>항목 2</li>
            </ul>
          </div>
        );
      // 추가 슬라이드...
      default:
        return null;
    }
  };
  
  return (
    <div className="slide">
      {renderSlide()}
    </div>
  );
};

export default MyPresentation;
```

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드된 앱 실행
npm run start
```

## PDF 내보내기

프레젠테이션 뷰 페이지에서 하단 컨트롤 영역의 PDF 아이콘을 클릭하면 현재 프레젠테이션이 PDF로 저장됩니다.

## 기술 스택

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (애니메이션)
- React-to-PDF (PDF 내보내기)
- React Icons

## 커스터마이징

- `presentations` 폴더에 새 프레젠테이션 추가
- `app/view/[id]/page.tsx` 파일의 `presentationMap`에 새 프레젠테이션 매핑 추가
- `app/globals.css`에서 스타일 커스터마이징
