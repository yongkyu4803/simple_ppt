'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaHome, FaArrowLeft, FaArrowRight, FaList, FaExpand, FaCompress } from 'react-icons/fa';

// 동적으로 프레젠테이션 컴포넌트 불러오기
const PresentationPage = ({ params }: { params: { id: string; slide: string } }) => {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [DynamicPresentation, setDynamicPresentation] = useState<React.ComponentType<any> | null>(null);
  
  const id = params.id;
  const slideIndex = parseInt(params.slide);
  
  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        // 다음 슬라이드로 이동
        router.push(`/presentation/${id}/${slideIndex + 1}`);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        // 이전 슬라이드로 이동 (0 이하로 내려가지 않도록 함)
        if (slideIndex > 0) {
          router.push(`/presentation/${id}/${slideIndex - 1}`);
        }
      } else if (e.key === 'f') {
        // 전체 화면 토글
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        // ESC 키로 전체 화면 해제
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [id, slideIndex, router]);
  
  // 전체 화면 토글
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  
  // 동적으로 프레젠테이션 컴포넌트 불러오기
  useEffect(() => {
    setIsLoading(true);
    
    const loadPresentation = async () => {
      try {
        // 동적 가져오기 (Nextjs에서는 import()를 사용하여 동적으로 모듈을 불러올 수 있음)
        let module;
        
        try {
          // 프레젠테이션 폴더에서 불러오기 시도
          module = await import(`../../../../presentations/${id}/Presentation`);
        } catch (err) {
          try {
            // 템플릿 폴더에서 불러오기 시도
            module = await import(`../../../../presentations/templates/${id}`);
          } catch (innerErr) {
            throw new Error(`프레젠테이션을 찾을 수 없습니다: ${id}`);
          }
        }
        
        setDynamicPresentation(() => module.default);
        setIsLoading(false);
      } catch (error) {
        console.error("프레젠테이션 로딩 오류:", error);
        setError(error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다");
        setIsLoading(false);
      }
    };
    
    loadPresentation();
  }, [id]);
  
  // 네비게이션 컨트롤
  const Navigation = () => (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg z-10 flex items-center space-x-6 ${isFullscreen ? 'opacity-30 hover:opacity-100 transition-opacity' : ''}`}>
      <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
        <FaHome size={18} />
      </Link>
      
      <button 
        onClick={() => slideIndex > 0 && router.push(`/presentation/${id}/${slideIndex - 1}`)}
        disabled={slideIndex <= 0}
        className={`text-gray-700 hover:text-blue-600 transition-colors ${slideIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <FaArrowLeft size={18} />
      </button>
      
      <span className="text-sm font-medium text-gray-700">
        {slideIndex + 1}
      </span>
      
      <button 
        onClick={() => router.push(`/presentation/${id}/${slideIndex + 1}`)}
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        <FaArrowRight size={18} />
      </button>
      
      <button 
        onClick={toggleFullscreen}
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        {isFullscreen ? <FaCompress size={18} /> : <FaExpand size={18} />}
      </button>
    </div>
  );
  
  // 로딩 상태 표시
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-gray-600">프레젠테이션을 불러오는 중...</p>
        </div>
      </div>
    );
  }
  
  // 오류 발생 시
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6">
            <span className="text-2xl font-bold">!</span>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">오류가 발생했습니다</h2>
          <p className="text-gray-600 mb-6 text-center">{error}</p>
          <div className="flex justify-center">
            <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // 프레젠테이션 렌더링
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* 프레젠테이션 컴포넌트 */}
      <div className="flex items-center justify-center min-h-screen px-2">
        <div className="w-[95%] aspect-[16/9] bg-white rounded-lg shadow-2xl overflow-hidden">
          {DynamicPresentation && (
            <DynamicPresentation currentSlide={slideIndex} />
          )}
        </div>
      </div>
      
      {/* 네비게이션 */}
      <Navigation />
    </div>
  );
};

export default PresentationPage;