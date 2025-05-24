import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // 요청 본문 파싱
    let requestBody;
    try {
      requestBody = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const { topic, style = 'business', slideCount = 5 } = requestBody

    if (!topic || typeof topic !== 'string' || topic.trim().length === 0) {
      return NextResponse.json(
        { error: 'Topic is required and must be a non-empty string' },
        { status: 400 }
      )
    }

    // 슬라이드 개수 유효성 검사
    const validSlideCount = Math.min(Math.max(parseInt(slideCount) || 5, 3), 10)

    // OpenAI API 키 확인
    const apiKey = process.env.OPENAI_API_KEY
    
    if (!apiKey || apiKey.trim() === '' || apiKey === 'your_openai_api_key') {
      // API 키가 없거나 기본값이면 샘플 데이터 반환
      console.log('OpenAI API key not found, returning sample slides')
      const sampleSlides = generateSampleSlides(topic.trim(), validSlideCount)
      return NextResponse.json({ slides: sampleSlides })
    }

    // OpenAI API 호출 시도
    try {
      const prompt = createPrompt(topic.trim(), style, validSlideCount)
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a presentation expert. Generate JSON format slides only. Do not include any markdown formatting or code blocks.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      })

      if (!response.ok) {
        console.error(`OpenAI API error: ${response.status} ${response.statusText}`)
        throw new Error(`OpenAI API request failed: ${response.status}`)
      }

      const aiResponse = await response.json()
      
      if (!aiResponse.choices || !aiResponse.choices[0] || !aiResponse.choices[0].message) {
        throw new Error('Invalid response format from OpenAI API')
      }

      let slidesContent = aiResponse.choices[0].message.content

      // 마크다운 코드 블록 제거
      slidesContent = slidesContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()

      // JSON 파싱 시도
      let slides
      try {
        slides = JSON.parse(slidesContent)
        
        // 파싱된 데이터 유효성 검사
        if (!Array.isArray(slides) || slides.length === 0) {
          throw new Error('Generated slides is not a valid array')
        }

        // 각 슬라이드 유효성 검사
        slides = slides.map((slide, index) => {
          if (!slide.type || typeof slide.type !== 'string') {
            console.warn(`Slide ${index} missing valid type, using 'content'`)
            slide.type = 'content'
          }
          return slide
        })

        return NextResponse.json({ slides })
      } catch (parseError) {
        console.error('JSON parsing failed:', parseError)
        console.error('Raw content:', slidesContent)
        throw new Error('Failed to parse AI response as JSON')
      }
    } catch (aiError) {
      console.error('OpenAI API call failed:', aiError)
      // AI API 실패 시 샘플 데이터로 폴백
      const sampleSlides = generateSampleSlides(topic.trim(), validSlideCount)
      return NextResponse.json({ slides: sampleSlides })
    }

  } catch (error: any) {
    console.error('AI API Error:', error)
    
    // 최후의 수단으로 기본 샘플 데이터 반환
    try {
      const fallbackSlides = generateSampleSlides('프레젠테이션', 5)
      return NextResponse.json({ 
        slides: fallbackSlides,
        message: 'AI 생성에 실패하여 샘플 데이터를 반환합니다.'
      })
    } catch (fallbackError) {
      return NextResponse.json(
        { error: 'Internal server error occurred' },
        { status: 500 }
      )
    }
  }
}

// 프롬프트 생성 함수
function createPrompt(topic: string, style: string, slideCount: number): string {
  return `Create a ${slideCount}-slide presentation about "${topic}" in ${style} style.

Return ONLY a valid JSON array with this exact structure:
[
  {
    "type": "title",
    "title": "Main presentation title",
    "subtitle": "Subtitle here",
    "presenter": "Presenter name"
  },
  {
    "type": "content",
    "title": "Slide title",
    "content": ["Content paragraph 1", "Content paragraph 2"]
  },
  {
    "type": "bullet",
    "title": "Slide title",
    "content": ["• Point 1", "• Point 2", "• Point 3"]
  },
  {
    "type": "two-column",
    "title": "Comparison slide",
    "leftTitle": "Left side title",
    "rightTitle": "Right side title",
    "leftContent": ["Left content 1", "Left content 2"],
    "rightContent": ["Right content 1", "Right content 2"]
  },
  {
    "type": "thank-you",
    "title": "감사합니다",
    "subtitle": "Questions and discussion"
  }
]

Available slide types: title, content, bullet, two-column, comparison, image, thank-you
Make it professional and relevant to "${topic}".`
}

// 샘플 슬라이드 생성 함수 (더 안정적이고 다양한 템플릿)
function generateSampleSlides(topic: string, slideCount: number) {
  const cleanTopic = topic?.trim() || '프레젠테이션'
  const count = Math.min(Math.max(slideCount || 5, 3), 10)
  
  const allSlides = [
    {
      type: 'title',
      title: `${cleanTopic}`,
      subtitle: 'AI 기반 프레젠테이션 생성기로 제작',
      presenter: '발표자명'
    },
    {
      type: 'content',
      title: `${cleanTopic} 개요`,
      content: [
        `${cleanTopic}에 대한 포괄적인 소개와 핵심 개념을 다룹니다.`,
        '이 프레젠테이션을 통해 주요 특징과 중요성을 이해할 수 있습니다.'
      ]
    },
    {
      type: 'bullet',
      title: '핵심 포인트',
      content: [
        `• ${cleanTopic}의 주요 특징과 장점`,
        `• 실제 적용 사례와 성공 요인`,
        `• 향후 발전 방향과 전망`
      ]
    },
    {
      type: 'two-column',
      title: '장점과 고려사항',
      leftTitle: '주요 장점',
      rightTitle: '고려사항',
      leftContent: [
        '효율성 및 생산성 향상',
        '비용 절감 효과',
        '확장 가능성'
      ],
      rightContent: [
        '초기 도입 비용',
        '학습 및 적응 시간',
        '지속적인 관리 필요'
      ]
    },
    {
      type: 'content',
      title: '실제 적용 방안',
      content: [
        `${cleanTopic}을 효과적으로 활용하기 위한 구체적인 실행 계획을 수립합니다.`,
        '단계별 접근 방법과 예상되는 결과를 검토하여 성공적인 도입을 지원합니다.'
      ]
    },
    {
      type: 'bullet',
      title: '다음 단계',
      content: [
        '• 상세 계획 수립 및 일정 조정',
        '• 관련 팀원들과의 협의 진행',
        '• 시범 운영 및 피드백 수집'
      ]
    },
    {
      type: 'thank-you',
      title: '감사합니다',
      subtitle: '질문이나 의견이 있으시면 언제든지 말씀해 주세요'
    }
  ]

  // 요청된 슬라이드 수만큼 반환하되, 최소 3개, 최대 전체 슬라이드 수
  return allSlides.slice(0, Math.min(count, allSlides.length))
}
