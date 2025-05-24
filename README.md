# Simple Presentation

AI 기능이 포함된 웹 기반 프레젠테이션 도구입니다.

## 🚀 주요 기능

- **AI 프레젠테이션 생성**: 주제만 입력하면 자동으로 슬라이드 생성
- **JSON 기반 템플릿**: 데이터와 디자인 분리로 효율적인 관리
- **다양한 슬라이드 타입**: title, content, bullet, two-column, comparison 등
- **실시간 편집**: 즉시 미리보기와 편집 기능
- **Supabase 연동**: 클라우드 데이터베이스 저장

## 🛠️ 로컬 개발 환경 설정

### 1. 저장소 클론 및 의존성 설치
```bash
git clone https://github.com/yongkyu4803/simple_ppt.git
cd simple_ppt
npm install
```

### 2. 환경 변수 설정
```bash
# .env.example을 .env.local로 복사
cp .env.example .env.local

# .env.local 파일을 편집하여 실제 값 입력
```

### 3. 개발 서버 실행
```bash
npm run dev
```

## 🌐 Vercel 배포 설정

### 환경 변수 설정 (Vercel 대시보드에서)

**필수 환경 변수:**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**선택적 환경 변수:**
```bash
OPENAI_API_KEY=your_openai_key  # AI 기능 활성화용
```

### 설정 방법:
1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Environment Variables
3. 위의 환경 변수들을 하나씩 추가
4. Production, Preview, Development 모두 선택

## 📝 사용 방법

1. **AI로 생성**: `/presentation/template-generator/0`에서 주제 입력 후 "AI 생성" 클릭
2. **수동 편집**: JSON 형식으로 직접 편집 가능
3. **저장**: 생성된 프레젠테이션을 데이터베이스에 저장
4. **네비게이션**: 화살표 키 또는 버튼으로 슬라이드 이동

## 🎨 슬라이드 타입

- `title`: 제목 슬라이드
- `content`: 일반 내용 슬라이드
- `bullet`: 불릿 포인트 슬라이드
- `two-column`: 2컬럼 레이아웃
- `comparison`: 비교 슬라이드
- `image`: 이미지 포함 슬라이드
- `thank-you`: 마무리 슬라이드

## 🔧 기술 스택

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Animation**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI GPT-4 (선택적)
- **Deployment**: Vercel

## 📄 라이센스

MIT License
