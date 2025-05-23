import React from 'react';

// 파일 상단 주석이었던 "릭하여 내용을 수정할 수 있습니다"는
// 아래 첫 번째 목록 항목의 내용이었을 것으로 추정됩니다.

const TemplatesPage = () => {
  return (
    <div>
      {/* 
        원래 파일 내용에서 여러 개의 닫는 div 태그들이 있었습니다.
        이를 바탕으로 적절한 div 계층 구조를 추정하여 구성했습니다.
        실제 의도한 구조와 다를 경우 이 부분을 수정해주세요.
      */}
      <div>
        <div>
          <ol>
            <li>
              {/* 원래 "릭하여 내용을 수정할 수 있습니다" 였던 내용으로 추정됩니다. */}
              {/* 필요에 따라 실제 내용을 입력해주세요. */}
              첫 번째 목록 항목입니다. (여기를 클릭하여 내용을 수정하세요)
            </li>
            <li>
              <span className="font-medium">확장 및 수정:</span> 필요에 따라 템플릿을 확장하거나 수정할 수 있습니다
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Next.js 프레젠테이션 | 모든 권리 보유
        </p>
      </div>
    </div>
  );
};

export default TemplatesPage;