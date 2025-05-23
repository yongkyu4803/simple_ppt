'use client';

import React, { useState } from 'react';
import { renderBasicTemplate } from '../templates';

interface TemplateGeneratorProps {
  currentSlide: number;
}

// 템플릿 생성기
const TemplateGenerator: React.FC<TemplateGeneratorProps> = ({ currentSlide }) => {
  // 상태: JSON 형식의 슬라이드 콘텐츠를 저장
  const [slideContents, setSlideContents] = useState([]);
  const [companyName, setCompanyName] = useState('기본 회사명');
  const [jsonInput, setJsonInput] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  
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
        "첫 번째 단락",
        "두 번째 단락"
      ]
    },
    {
      "type": "bullet",
      "title": "불릿 포인트",
      "content": [
        "첫 번째 항목",
        "두 번째 항목",
        "세 번째 항목"
      ]
    }
  ], null, 2);

  // JSON 데이터 적용 함수
  const applyJSON = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setSlideContents(parsedData);
      setIsEditing(false);
    } catch (error) {
      alert(`JSON 파싱 오류: ${error.message}`);
    }
  };

  // 편집 모드로 전환
  const editContents = () => {
    setIsEditing(true);
  };

  // 편집 화면 렌더링
  if (isEditing) {
    return (
      <div className="p-8 bg-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">프레젠테이션 템플릿 생성기</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            회사명
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-gray-700">
              슬라이드 내용 (JSON 형식)
            </label>
            <button
              onClick={() => setJsonInput(sampleJSON)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              샘플 데이터 채우기
            </button>
          </div>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="p-4 font-mono text-sm border border-gray-300 rounded w-full h-96 overflow-auto"
            placeholder="JSON 형식으로 슬라이드 내용을 입력하세요..."
          />
        </div>
        
        <button
          onClick={applyJSON}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          적용하기
        </button>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-2">사용 방법:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>회사명을 입력합니다</li>
            <li>JSON 형식으로 슬라이드 내용을 입력합니다</li>
            <li>각 슬라이드는 객체로 표현하며, "type" 속성으로 슬라이드 유형을 지정합니다</li>
            <li>지원되는 유형: title, content, bullet, two-column, image, comparison, thank-you</li>
            <li>"적용하기" 버튼을 클릭하여 프레젠테이션을 생성합니다</li>
          </ol>
        </div>
      </div>
    );
  }

  // 프레젠테이션 모드 렌더링
  return (
    <div className="relative">
      {/* 편집 버튼 */}
      <button
        onClick={editContents}
        className="absolute top-4 right-4 z-50 px-3 py-1 bg-white text-blue-600 rounded border border-blue-200 text-sm hover:bg-blue-50"
      >
        편집
      </button>
      
      {/* 프레젠테이션 렌더링 */}
      {slideContents.length > 0 && currentSlide < slideContents.length ? (
        renderBasicTemplate(slideContents, currentSlide, companyName)
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="text-center">
            <p className="text-xl text-gray-600">
              {currentSlide >= slideContents.length 
                ? "더 이상 슬라이드가 없습니다" 
                : "슬라이드 내용을 입력해주세요"}
            </p>
            <button
              onClick={editContents}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {currentSlide >= slideContents.length 
                ? "슬라이드 추가하기" 
                : "내용 편집하기"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateGenerator;