'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { renderBasicTemplate } from '../templates';
import { renderPremiumTemplate } from '../templates/PremiumRenderer';
import { useRouter } from 'next/navigation';

interface TemplateGeneratorProps {
  currentSlide: number;
}

// 템플릿 생성기
const TemplateGenerator: React.FC<TemplateGeneratorProps> = ({ currentSlide }) => {
  const router = useRouter();
  
  // 상태: JSON 형식의 슬라이드 콘텐츠를 저장
  const [slideContents, setSlideContents] = useState<any[]>([]);
  const [companyName, setCompanyName] = useState('기본 회사명');
  const [jsonInput, setJsonInput] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  
  // 브라우저 환경에서만 실행
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 페이지 로드 시 저장된 데이터 복원
      try {
        const savedContents = sessionStorage.getItem('generatedSlides');
        const savedCompany = sessionStorage.getItem('companyName');
        const savedJson = sessionStorage.getItem('jsonInput');
        
        if (savedContents) {
          const parsedContents = JSON.parse(savedContents);
          if (Array.isArray(parsedContents) && parsedContents.length > 0) {
            setSlideContents(parsedContents);
            setIsEditing(false);
          }
        }
        
        if (savedCompany && savedCompany !== 'null') {
          setCompanyName(savedCompany);
        }
        
        if (savedJson && savedJson !== 'null') {
          setJsonInput(savedJson);
        }
      } catch (error) {
        console.error('Failed to restore saved data:', error);
        // 복원 실패 시 세션 스토리지 클리어
        sessionStorage.removeItem('generatedSlides');
        sessionStorage.removeItem('companyName');
        sessionStorage.removeItem('jsonInput');
      }
    }
  }, []);
  
  // 데이터 변경 시 세션 스토리지에 저장 (디바운싱 + 성능 최적화)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timeoutId = setTimeout(() => {
        // requestIdleCallback을 사용하여 브라우저가 유휴 상태일 때 실행
        const saveToStorage = () => {
          try {
            if (slideContents.length > 0) {
              sessionStorage.setItem('generatedSlides', JSON.stringify(slideContents));
            }
            if (companyName && companyName !== '기본 회사명') {
              sessionStorage.setItem('companyName', companyName);
            }
            if (jsonInput) {
              sessionStorage.setItem('jsonInput', jsonInput);
            }
          } catch (error) {
            console.warn('Failed to save to sessionStorage:', error);
          }
        };

        if ('requestIdleCallback' in window) {
          requestIdleCallback(saveToStorage);
        } else {
          setTimeout(saveToStorage, 0);
        }
      }, 1000); // 1초 디바운싱
      
      return () => clearTimeout(timeoutId);
    }
  }, [slideContents, companyName, jsonInput]);
  
  // 샘플 JSON 데이터
  const sampleJSON = JSON.stringify([
    {
      "type": "title",
      "title": "제목을 입력하세요",
      "subtitle": "부제목을 입력하세요",
      "presenter": "발표자 이름"
    },
    {
      "type": "content",
      "title": "내용 슬라이드",
      "content": [
        "첫 번째 단락: 여기에 주요 내용을 작성하세요.",
        "두 번째 단락: 추가적인 설명이나 세부사항을 포함할 수 있습니다."
      ]
    },
    {
      "type": "bullet",
      "title": "주요 포인트",
      "content": [
        "• 첫 번째 중요한 항목",
        "• 두 번째 핵심 사항",
        "• 세 번째 주목할 점"
      ]
    },
    {
      "type": "two-column",
      "title": "비교 분석",
      "leftTitle": "장점",
      "rightTitle": "고려사항",
      "leftContent": [
        "효율성 증대",
        "비용 절감 효과"
      ],
      "rightContent": [
        "초기 투자 필요",
        "학습 곡선 존재"
      ]
    },
    {
      "type": "thank-you",
      "title": "감사합니다",
      "subtitle": "질문이 있으시면 언제든지 문의해주세요"
    }
  ], null, 2);

  // AI로 슬라이드 생성 함수 (성능 최적화)
  const generateWithAI = async () => {
    if (!aiTopic.trim()) {
      alert('주제를 입력해주세요');
      return;
    }

    setIsGenerating(true);
    
    // UI 업데이트를 위한 짧은 지연
    await new Promise(resolve => setTimeout(resolve, 50));
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      
      const response = await fetch('/api/ai/generate-slides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: aiTopic,
          style: 'business',
          slideCount: 5
        }),
        signal: controller.signal,
        cache: 'no-store'
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.slides || !Array.isArray(data.slides)) {
        throw new Error('Invalid response format');
      }
      
      // UI 업데이트를 배치로 처리
      await new Promise(resolve => setTimeout(resolve, 10));
      
      setSlideContents(data.slides);
      setJsonInput(JSON.stringify(data.slides, null, 2));
      setIsEditing(false);
      
      // 성공 메시지를 비동기로 표시
      setTimeout(() => {
        alert('AI가 프레젠테이션을 성공적으로 생성했습니다! 🎉');
      }, 100);
      
    } catch (error) {
      console.error('AI generation error:', error);
      const errorMessage = error instanceof Error ? error.message : "AI 생성 중 오류가 발생했습니다";
      
      // 에러 메시지도 비동기로 표시
      setTimeout(() => {
        alert(`AI 생성 오류: ${errorMessage}`);
      }, 100);
    } finally {
      setIsGenerating(false);
    }
  };

  // JSON 데이터 적용 함수 (성능 최적화)
  const applyJSON = async () => {
    try {
      // UI 업데이트를 위한 짧은 지연
      await new Promise(resolve => setTimeout(resolve, 10));
      
      const parsedData = JSON.parse(jsonInput);
      if (!Array.isArray(parsedData)) {
        throw new Error('JSON 데이터는 배열 형태여야 합니다');
      }
      
      // 상태 업데이트를 배치로 처리
      setSlideContents(parsedData);
      setIsEditing(false);
      
      // 성공 메시지를 비동기로 표시
      setTimeout(() => {
        alert('프레젠테이션이 성공적으로 생성되었습니다! 🎉');
      }, 50);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "알 수 없는 에러";
      
      // 에러 메시지도 비동기로 표시
      setTimeout(() => {
        alert(`JSON 파싱 오류: ${errorMessage}`);
      }, 50);
    }
  };

  // 프레젠테이션 저장 및 리디렉션 함수
  const savePresentation = async () => {
    if (slideContents.length === 0) {
      alert('저장할 슬라이드가 없습니다');
      return;
    }

    setIsSaving(true);
    try {
      const presentationTitle = slideContents[0]?.title || '제목 없음';
      
      const response = await fetch('/api/presentations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: presentationTitle,
          description: `AI가 생성한 "${aiTopic}" 프레젠테이션`,
          company_name: companyName,
          slides_data: slideContents,
          template_type: 'ai-generated',
          is_public: true,
          user_id: 'ai-user'
        })
      });

      if (!response.ok) {
        throw new Error('저장 실패');
      }

      const savedPresentation = await response.json();
      
      // 세션 스토리지 클리어
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('generatedSlides');
        sessionStorage.removeItem('companyName');
        sessionStorage.removeItem('jsonInput');
      }
      
      alert(`프레젠테이션이 저장되었습니다! 뷰어 페이지로 이동합니다.`);
      
      // 저장 후 뷰어 페이지로 이동
      router.push(`/view/${savedPresentation.id}`);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "저장 중 오류가 발생했습니다";
      alert(`저장 오류: ${errorMessage}`);
    } finally {
      setIsSaving(false);
    }
  };

  // 편집 모드로 전환
  const editContents = () => {
    setIsEditing(true);
  };

  // 새로 시작하기
  const startOver = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('generatedSlides');
      sessionStorage.removeItem('companyName');
      sessionStorage.removeItem('jsonInput');
    }
    
    setSlideContents([]);
    setJsonInput('');
    setAiTopic('');
    setCompanyName('기본 회사명');
    setIsEditing(true);
  };

  // 디바운싱된 입력 핸들러
  const debouncedSetAiTopic = useCallback((value: string) => {
    const timeoutId = setTimeout(() => {
      setAiTopic(value);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const debouncedSetJsonInput = useCallback((value: string) => {
    const timeoutId = setTimeout(() => {
      setJsonInput(value);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  // 디버깅용 useEffect
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Template Generator State:', {
        aiTopic,
        companyName,
        jsonInput: jsonInput.length,
        isEditing,
        isGenerating,
        isSaving,
        slideContents: slideContents.length
      });
    }
  }, [aiTopic, companyName, jsonInput, isEditing, isGenerating, isSaving, slideContents]);

  // 편집 화면 렌더링
  if (isEditing) {
    return (
      <div className="p-8 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">프레젠테이션 템플릿 생성기</h1>
            {slideContents.length > 0 && (
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                프레젠테이션 보기
              </button>
            )}
          </div>
        
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <h2 className="text-xl font-semibold mb-4 text-green-800">🤖 AI로 프레젠테이션 생성</h2>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={aiTopic}
                onChange={(e) => setAiTopic(e.target.value)}
                placeholder="프레젠테이션 주제를 입력하세요 (예: 회사 소개, 신제품 마케팅 전략, 인공지능 기술 소개)"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={isGenerating}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isGenerating && aiTopic.trim()) {
                    e.preventDefault();
                    generateWithAI();
                  }
                }}
                autoComplete="off"
              />
              <button
                onClick={generateWithAI}
                disabled={isGenerating || !aiTopic.trim()}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium min-w-[120px]"
              >
                {isGenerating ? '생성 중...' : 'AI 생성'}
              </button>
            </div>
            <p className="text-sm text-green-700">
              💡 AI가 자동으로 프레젠테이션 구조와 내용을 생성합니다. 생성 후 수정도 가능해요!
            </p>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  회사명
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="회사명을 입력하세요"
                  autoComplete="off"
                />
              </div>
            
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    슬라이드 내용 (JSON 형식)
                  </label>
                  <button
                    onClick={() => setJsonInput(sampleJSON)}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    📝 샘플 데이터 채우기
                  </button>
                </div>
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  className="p-4 font-mono text-sm border border-gray-300 rounded-lg w-full h-96 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="JSON 형식으로 슬라이드 내용을 입력하세요..."
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    // 즉시 UI 피드백 제공
                    if (jsonInput.trim()) {
                      applyJSON();
                    }
                  }}
                  disabled={!jsonInput.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors duration-200"
                >
                  ✨ 적용하기
                </button>
                
                {slideContents.length > 0 && (
                  <button
                    onClick={startOver}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium"
                  >
                    🔄 새로 시작
                  </button>
                )}
              </div>
            </div>
            
            <div className="lg:pl-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-medium mb-4 text-gray-800">📋 사용 방법</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><strong>AI 생성:</strong> 주제를 입력하고 'AI 생성' 버튼을 클릭</li>
                  <li><strong>수동 입력:</strong> JSON 형식으로 슬라이드 내용을 직접 입력</li>
                  <li><strong>회사명 설정:</strong> 프레젠테이션에 사용할 회사명 입력</li>
                  <li><strong>적용:</strong> '적용하기' 버튼으로 프레젠테이션 생성</li>
                  <li><strong>저장:</strong> 완성된 프레젠테이션을 저장하고 공유</li>
                </ol>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">🎯 지원되는 슬라이드 유형</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div><code className="bg-blue-100 px-1 rounded">title</code> - 제목 슬라이드</div>
                    <div><code className="bg-blue-100 px-1 rounded">content</code> - 내용 슬라이드</div>
                    <div><code className="bg-blue-100 px-1 rounded">bullet</code> - 불릿 포인트</div>
                    <div><code className="bg-blue-100 px-1 rounded">two-column</code> - 2단 구성</div>
                    <div><code className="bg-blue-100 px-1 rounded">comparison</code> - 비교 분석</div>
                    <div><code className="bg-blue-100 px-1 rounded">thank-you</code> - 마무리 슬라이드</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 프레젠테이션 모드 렌더링
  return (
    <div className="relative">
      {/* 상단 버튼들 */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={editContents}
          className="px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 text-sm hover:bg-blue-50 shadow-md font-medium"
        >
          ✏️ 편집
        </button>
        
        <button
          onClick={savePresentation}
          disabled={isSaving}
          className="px-4 py-2 bg-white text-green-600 rounded-lg border border-green-200 text-sm hover:bg-green-50 shadow-md font-medium disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          {isSaving ? '저장 중...' : '💾 저장'}
        </button>
      </div>
      
      {/* 디버깅 정보 (개발 환경에서만) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 z-50 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
          <div>슬라이드: {currentSlide + 1}/{slideContents.length}</div>
          <div>데이터: {slideContents.length > 0 ? '있음' : '없음'}</div>
          <div>현재 타입: {slideContents[currentSlide]?.type || 'N/A'}</div>
        </div>
      )}
      
      {/* 프레젠테이션 렌더링 */}
      {slideContents.length > 0 && currentSlide < slideContents.length ? (
        <div className="w-full h-screen">
          {renderPremiumTemplate(slideContents, currentSlide, companyName)}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
            <div className="text-6xl mb-4">
              {currentSlide >= slideContents.length ? "🎯" : "📝"}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {currentSlide >= slideContents.length 
                ? "슬라이드 끝" 
                : "프레젠테이션 생성기"}
            </h2>
            <p className="text-gray-600 mb-6">
              {currentSlide >= slideContents.length 
                ? "모든 슬라이드를 확인했습니다. 편집하거나 저장해보세요!" 
                : "AI 또는 JSON으로 멋진 프레젠테이션을 만들어보세요!"}
            </p>
            <button
              onClick={editContents}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              {currentSlide >= slideContents.length 
                ? "📝 편집하기" 
                : "🚀 시작하기"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateGenerator;

// 디버깅용 로그
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).debugTemplateGenerator = {
    getState: () => ({
      // 상태를 확인할 수 있는 함수들을 여기에 추가할 수 있습니다
    })
  };
}