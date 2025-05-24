'use client';

import Link from 'next/link';
import { FaRegFileAlt, FaRocket, FaPen, FaLayerGroup, FaProjectDiagram, FaBook, FaClone, FaCode, FaFolder } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-10">프레젠테이션 구성 방법</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            GQ Presentations는 다양한 방식으로 프레젠테이션을 구성할 수 있습니다.<br />아래에서 각 방법의 특징과 사용 예시를 확인해보세요.
          </p>
        </div>
        <div className="mb-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">프레젠테이션 구성 방법</h2>
          <p className="text-gray-600 mb-8 text-center">
            Simple PPT는 다양한 방식으로 프레젠테이션을 구성할 수 있습니다. 아래 4가지 방법 중 프로젝트에 적합한 방식을 선택하세요.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 방법 1: JSON 형식으로 콘텐츠 정의 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <FaCode className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">1. JSON 형식으로 콘텐츠 정의</h3>
                  <p className="text-gray-600 mt-2">
                    프레젠테이션 콘텐츠를 JSON 형식으로 정의하고, 템플릿 렌더러를 통해 시각화합니다.<br />콘텐츠와 표현 로직이 명확히 분리되어 있어 데이터 기반 접근이 용이합니다.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-md p-4 overflow-auto max-h-60">
                <pre className="text-gray-100 text-sm">
{`// JSON 데이터 예시
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
  }
]);

// 템플릿 렌더러 호출
renderBasicTemplate(JSON.parse(jsonInput), currentSlide);`}
                </pre>
              </div>
            </div>
            {/* 방법 2: 본문에 하드코딩 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                  <FaRegFileAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">2. 본문에 하드코딩</h3>
                  <p className="text-gray-600 mt-2">
                    모든 슬라이드 콘텐츠를 단일 컴포넌트 내에 직접 하드코딩합니다.<br />직관적인 구현 방식으로 빠른 개발이 가능하며, 각 슬라이드를 완전히 커스터마이징할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-md p-4 overflow-auto max-h-60">
                <pre className="text-gray-100 text-sm">
{`// 슬라이드별 렌더링
const renderSlide = () => {
  switch (currentSlide) {
    case 0:
      return (
        <>
          <Header />
          <div className={styles.titleSlide}>
            <motion.div className={styles.titleText}>
              <h1>디지털 혁신으로<br />미래를 선도하다</h1>
              <div className={styles.subtitle}>
                기업의 성장과 경쟁력 강화를 위한 전략
              </div>
            </motion.div>
          </div>
          <Footer />
        </>
      );
    // 다른 슬라이드 케이스들...
  }
};`}
                </pre>
              </div>
            </div>
            {/* 방법 3: 모든 페이지를 하나의 파일에서 작업 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                  <FaLayerGroup className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">3. 단일 파일 구성</h3>
                  <p className="text-gray-600 mt-2">
                    하나의 파일에서 모든 슬라이드를 관리하고 조건부 렌더링으로 제어합니다.<br />구조가 단순해 관리가 쉽고, 작은 프로젝트에 적합합니다.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-md p-4 overflow-auto max-h-60">
                <pre className="text-gray-100 text-sm">
{`function renderSlide(index) {
  switch(index) {
    case 0: return <TitleSlide />;
    case 1: return <ContentSlide />;
  }
}`}
                </pre>
              </div>
            </div>
            {/* 방법 4: 페이지 분리 방식 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mr-4">
                  <FaFolder className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">4. 페이지 분리 방식</h3>
                  <p className="text-gray-600 mt-2">
                    각 슬라이드를 개별 컴포넌트로 분리하여 모듈화된 구조로 관리합니다.<br />대규모 프레젠테이션이나 협업에 적합합니다.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-md p-4 overflow-auto max-h-60">
                <pre className="text-gray-100 text-sm">
{`// pages/TitleSlide.tsx
export default function TitleSlide() {
  return <Slide>...</Slide>;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/generator" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors">
            템플릿 생성기로 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
}