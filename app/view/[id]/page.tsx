'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaArrowLeft, FaArrowRight, FaExpand, FaCompress, FaFilePdf } from 'react-icons/fa';
import DemoPresentation from '@/presentations/demo/Presentation';
import DigitalTransformation from '@/presentations/digital-transformation/Presentation';
import ModernPresentation from '@/presentations/modern/Presentation';
import ProjectProposal from '@/presentations/project-proposal/Presentation';
import BasicExample from '@/presentations/basic-example/Presentation';
import TemplateGenerator from '@/presentations/template-generator/Presentation';
import MusicowPresentation from '@/presentations/musicow/Presentation';
import MusicowMobilePresentation from '@/presentations/musicow_mobile/Presentation';

// PDF 내보내기 라이브러리 (수정된 import)
import { usePDF } from 'react-to-pdf';

export default function PresentationView() {
  const params = useParams();
  const router = useRouter();
  const presentationId = params?.id as string;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // PDF 생성 훅 사용
  const { toPDF, targetRef } = usePDF({
    filename: `presentation-${presentationId}.pdf`,
    page: { format: 'A4', orientation: 'landscape' }
  });
  
  // 프레젠테이션 컴포넌트 매핑 (수정됨)
  const presentationMap: { [key: string]: React.ComponentType<{ currentSlide: number }> } = {
    'demo': DemoPresentation,
    'digital-transformation': DigitalTransformation,
    'modern': ModernPresentation,
    'project-proposal': ProjectProposal,
    'basic-example': BasicExample,
    'template-generator': TemplateGenerator,
    'musicow': MusicowPresentation,
    'musicow_mobile': MusicowMobilePresentation
  };
  
  // 현재 프레젠테이션 컴포넌트 가져오기
  const PresentationComponent = presentationMap[presentationId];
  
  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'Enter':
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'Backspace':
          goToPrevSlide();
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  
  // 다음 슬라이드로 이동
  const goToNextSlide = () => {
    // 각 프레젠테이션의 슬라이드 수는 하드코딩하거나 props로 받을 수 있습니다
    const maxSlides = 5; // 기본값으로 5로 설정
    if (currentSlide < maxSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };
  
  // 이전 슬라이드로 이동
  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };
  
  // 전체화면 토글
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  
  // PDF로 내보내기 (수정됨)
  const exportToPdf = () => {
    toPDF();
  };
  
  if (!PresentationComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <h1 className="text-2xl font-bold mb-4">프레젠테이션을 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-6">요청하신 프레젠테이션 "{presentationId}"을(를) 찾을 수 없습니다.</p>
          <Link href="/" className="btn">
            <FaHome className="inline-block mr-2" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* 프레젠테이션 영역 */}
      <div ref={targetRef} className="flex-1 relative flex items-center justify-center">
        <PresentationComponent currentSlide={currentSlide} />
      </div>
      
      {/* 컨트롤 영역 */}
      <div className="bg-black bg-opacity-80 text-white py-3 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="p-2 mr-4 hover:bg-gray-800 rounded">
            <FaHome />
          </Link>
          <button
            onClick={goToPrevSlide}
            disabled={currentSlide === 0}
            className="p-2 mr-2 hover:bg-gray-800 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="이전 슬라이드"
          >
            <FaArrowLeft />
          </button>
          <span className="mx-3 text-sm">
            {currentSlide + 1} / 5
          </span>
          <button
            onClick={goToNextSlide}
            disabled={currentSlide === 4}
            className="p-2 ml-2 hover:bg-gray-800 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="다음 슬라이드"
          >
            <FaArrowRight />
          </button>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={toggleFullscreen}
            className="p-2 ml-2 hover:bg-gray-800 rounded"
            aria-label={isFullscreen ? '전체화면 종료' : '전체화면'}
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button
            onClick={exportToPdf}
            className="p-2 ml-4 hover:bg-gray-800 rounded"
            aria-label="PDF로 내보내기"
          >
            <FaFilePdf />
          </button>
        </div>
      </div>
    </div>
  );
}
