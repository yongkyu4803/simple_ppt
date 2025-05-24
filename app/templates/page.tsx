import React from 'react';
import Link from 'next/link';

const TemplatesPage = () => {
  const templates = [
    {
      id: 'demo',
      title: '데모 프레젠테이션',
      description: '새롭게 디자인된 프레젠테이션 템플릿',
      category: '비즈니스'
    },
    {
      id: 'digital-transformation',
      title: '디지털 트랜스포메이션',
      description: '디지털 혁신 전략 프레젠테이션',
      category: '기술'
    },
    {
      id: 'modern',
      title: '모던 프레젠테이션',
      description: '현대적인 디자인의 프레젠테이션',
      category: '디자인'
    },
    {
      id: 'project-proposal',
      title: '프로젝트 제안서',
      description: '프로젝트 제안 템플릿',
      category: '비즈니스'
    },
    {
      id: 'template-generator',
      title: '커스텀 생성기',
      description: 'AI로 프레젠테이션을 생성해보세요',
      category: 'AI'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">프레젠테이션 템플릿</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 목적에 맞는 프레젠테이션 템플릿을 선택하여 사용해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {template.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{template.title}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <Link
                  href={`/view/${template.id}`}
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  미리보기
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">나만의 프레젠테이션 만들기</h2>
          <p className="text-gray-600 mb-6">
            AI를 활용하여 맞춤형 프레젠테이션을 생성하거나 JSON 형식으로 직접 만들어보세요.
          </p>
          <Link
            href="/presentation/template-generator/0"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow-md hover:bg-green-700 transition-colors"
          >
            프레젠테이션 생성하기
          </Link>
        </div>

        <div className="mt-12 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">사용 방법</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>원하는 템플릿을 선택하여 미리보기를 확인하세요</li>
            <li>템플릿이 마음에 들면 해당 형식을 참고하여 커스텀 프레젠테이션을 제작할 수 있습니다</li>
            <li>AI 생성기를 사용하여 주제에 맞는 프레젠테이션을 자동으로 만들어보세요</li>
            <li>필요에 따라 내용을 수정하고 PDF로 내보낼 수 있습니다</li>
          </ol>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 GQ Presentations | 모든 권리 보유
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;