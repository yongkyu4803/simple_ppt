import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { topic, style = 'business', slideCount = 5 } = await request.json()

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      )
    }

    // OpenAI API 호출 (API 키가 설정되면 활성화)
    const apiKey = process.env.OPENAI_API_KEY
    
    if (!apiKey) {
      // API 키가 없으면 샘플 데이터 반환
      const sampleSlides = generateSampleSlides(topic, slideCount)
      return NextResponse.json({ slides: sampleSlides })
    }

    // OpenAI API 호출 로직
    const prompt = createPrompt(topic, style, slideCount)
    
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
            content: 'You are a presentation expert. Generate JSON format slides only.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
      })
    })

    if (!response.ok) {
      throw new Error('OpenAI API request failed')
    }

    const aiResponse = await response.json()
    const slidesContent = aiResponse.choices[0].message.content

    // JSON 파싱 시도
    let slides
    try {
      slides = JSON.parse(slidesContent)
    } catch (parseError) {
      // JSON 파싱 실패 시 샘플 데이터 반환
      slides = generateSampleSlides(topic, slideCount)
    }

    return NextResponse.json({ slides })
  } catch (error: any) {
    console.error('AI API Error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
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

// 샘플 슬라이드 생성 함수
function generateSampleSlides(topic: string, slideCount: number) {
  return [
    {
      type: 'title',
      title: `${topic}에 대한 프레젠테이션`,
      subtitle: 'AI가 생성한 프레젠테이션',
      presenter: '발표자명'
    },
    {
      type: 'content',
      title: `${topic} 개요`,
      content: [
        `${topic}에 대한 기본적인 설명입니다.`,
        '주요 특징과 중요성을 다룹니다.'
      ]
    },
    {
      type: 'bullet',
      title: '핵심 포인트',
      content: [
        `• ${topic}의 첫 번째 특징`,
        `• ${topic}의 두 번째 특징`,
        `• ${topic}의 세 번째 특징`
      ]
    },
    {
      type: 'thank-you',
      title: '감사합니다',
      subtitle: '질문이 있으시면 언제든지 문의해주세요'
    }
  ].slice(0, slideCount)
}
