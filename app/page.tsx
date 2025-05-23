'use client';

import Link from 'next/link';
import { FaRegFileAlt, FaRocket, FaPen, FaLayerGroup, FaProjectDiagram, FaBook, FaClone, FaCode } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface PresentationMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// 아이콘 매핑
const iconComponents = {
  FaRegFileAlt,
  FaRocket,
  FaPen,
  FaLayerGroup,
  FaProjectDiagram,
  FaBook,
  FaClone,
  FaCode
};

export default function Home() {
  const [presentations, setPresentations] = useState<Array<PresentationMeta & { icon: any }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPresentations = async () => {
      try {
        const response = await fetch('/api/presentations');
        const data = await response.json();
        
        // 아이콘 컴포넌트와 함께 프레젠테이션 목록 구성
        const presentationsWithIcons = data.map((meta: PresentationMeta) => ({
          ...meta,
          icon: iconComponents[meta.icon as keyof typeof iconComponents] || FaRegFileAlt
        }));
        
        setPresentations(presentationsWithIcons);
      } catch (error) {
        console.error('Error fetching presentations:', error);
        // 기본 프레젠테이션 목록으로 폴백
        setPresentations([
          { id: 'demo', title: '데모 프레젠테이션', description: '새롭게 디자인된 프레젠테이션 템플릿', icon: 'FaRocket' },
          { id: 'digital-transformation', title: '디지털 혁신 전략', description: '디지털 트랜스포메이션 프레젠테이션', icon: 'FaLayerGroup' },
          { id: 'modern', title: '모던 프레젠테이션', description: '현대적인 디자인의 프레젠테이션', icon: 'FaRegFileAlt' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPresentations();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-10 mt-10">GQ Presentations</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-2">
            웹 기술을 활용한 현대적이고 세련된 디자인의 프레젠테이션을 경험해보세요.
          </p>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            코드 기반으로 작성되어 쉽게 커스터마이징하고 확장할 수 있습니다.
          </p>
          
          <Link href="/templates" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors">
            템플릿 둘러보기
          </Link>
        </div>
        
        {/* 기존 프레젠테이션 섹션 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">프레젠테이션 목록</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // 로딩 상태 표시
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))
            ) : (
              // 프레젠테이션 목록 표시
              presentations.map((presentation) => {
                const IconComponent = presentation.icon;
                return (
                  <Link href={`/view/${presentation.id}`} key={presentation.id}>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                        <IconComponent className="text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{presentation.title}</h3>
                      <p className="text-gray-600">{presentation.description}</p>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
        
        {/* 커스텀 템플릿 생성기 */}
        <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">새로운 기능</div>
              <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">나만의 템플릿 생성하기</h2>
              <p className="text-gray-600 mb-6">
                JSON 형식으로 콘텐츠를 정의하고 템플릿 렌더러를 통해 즉시 프레젠테이션을 생성해보세요.
                데이터 기반 접근 방식으로 콘텐츠와 디자인을 분리하여 효율적으로 관리할 수 있습니다.
              </p>
              <Link href="/presentation/template-generator/0" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700 transition-colors">
                템플릿 생성기 사용하기
              </Link>
            </div>
            <div className="md:w-1/2 bg-indigo-50 p-8 flex items-center justify-center">
              <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="w-full h-4 bg-gray-200 rounded mb-4"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded mb-6"></div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-indigo-200 rounded-full mr-3"></div>
                    <div className="w-full h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-indigo-300 rounded-full mr-3"></div>
                    <div className="w-full h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full mr-3"></div>
                    <div className="w-full h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 주요 기능 섹션 */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">주요 기능</h2>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              자세히 보기
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <FaCode className="text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">코드 기반 구현</h3>
              <p className="text-gray-600">React와 TypeScript를 활용한 코드 기반 프레젠테이션으로 높은 확장성과 유연성을 제공합니다.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <FaLayerGroup className="text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">다양한 템플릿</h3>
              <p className="text-gray-600">목적에 맞는 다양한 디자인의 템플릿을 선택하여 프레젠테이션을 빠르게 구성할 수 있습니다.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <FaRocket className="text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">애니메이션 효과</h3>
              <p className="text-gray-600">Framer Motion을 활용한 부드러운 전환 효과와 애니메이션으로 역동적인 프레젠테이션을 만들 수 있습니다.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                <FaClone className="text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">재사용 가능한 컴포넌트</h3>
              <p className="text-gray-600">모듈화된 컴포넌트 구조로 슬라이드 요소를 쉽게 재사용하고 조합할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}