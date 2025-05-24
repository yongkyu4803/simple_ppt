import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'
import fs from 'fs'
import path from 'path'

// GET - 모든 프레젠테이션 조회
export async function GET(request: NextRequest) {
  try {
    // 먼저 로컬 프레젠테이션 목록을 반환
    const presentationsDir = path.join(process.cwd(), 'presentations')
    
    // 로컬 프레젠테이션 메타데이터
    const localPresentations = [
      {
        id: 'demo',
        title: '데모 프레젠테이션',
        description: '새롭게 디자인된 프레젠테이션 템플릿',
        icon: 'FaRocket',
        user_id: 'local',
        is_public: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 'digital-transformation',
        title: '디지털 트랜스포메이션',
        description: '디지털 혁신 전략 프레젠테이션',
        icon: 'FaLayerGroup',
        user_id: 'local',
        is_public: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 'modern',
        title: '모던 프레젠테이션',
        description: '현대적인 디자인의 프레젠테이션',
        icon: 'FaRegFileAlt',
        user_id: 'local',
        is_public: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 'musicow',
        title: 'Musicow 프레젠테이션',
        description: '음악 관련 서비스 소개',
        icon: 'FaPen',
        user_id: 'local',
        is_public: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: 'project-proposal',
        title: '프로젝트 제안서',
        description: '프로젝트 제안 템플릿',
        icon: 'FaProjectDiagram',
        user_id: 'local',
        is_public: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ]

    // 실제 폴더가 존재하는지 확인하고 필터링
    let availablePresentations = []
    
    for (const presentation of localPresentations) {
      const presentationPath = path.join(presentationsDir, presentation.id)
      if (fs.existsSync(presentationPath)) {
        availablePresentations.push(presentation)
      }
    }

    // Supabase가 설정되어 있다면 데이터베이스에서도 가져오기
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && 
        process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' && 
        process.env.SUPABASE_SERVICE_ROLE_KEY) {
      
      try {
        const { searchParams } = new URL(request.url)
        const userId = searchParams.get('user_id')
        const isPublic = searchParams.get('public') === 'true'

        let query = supabaseAdmin
          .from('presentations')
          .select('*')
          .order('created_at', { ascending: false })

        if (userId) {
          query = query.eq('user_id', userId)
        } else if (isPublic) {
          query = query.eq('is_public', true)
        }

        const { data, error } = await query

        if (!error && data) {
          // 데이터베이스 결과와 로컬 프레젠테이션 병합
          availablePresentations = [...availablePresentations, ...data]
        }
      } catch (dbError) {
        console.error('Database error:', dbError)
        // 데이터베이스 오류가 있어도 로컬 프레젠테이션은 반환
      }
    }

    return NextResponse.json(availablePresentations)
  } catch (error: any) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

// POST - 새 프레젠테이션 생성
export async function POST(request: NextRequest) {
  try {
    // Supabase 연결 확인
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      return NextResponse.json({ 
        error: 'Database not configured',
        message: 'Supabase environment variables are not set'
      }, { status: 503 })
    }

    const body = await request.json()
    const {
      title,
      description,
      company_name,
      slides_data,
      template_type = 'basic',
      is_public = false,
      user_id
    } = body

    // 필수 필드 검증
    if (!title || !slides_data || !user_id) {
      return NextResponse.json(
        { error: 'Title, slides_data, and user_id are required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('presentations')
      .insert({
        title,
        description,
        company_name,
        slides_data,
        template_type,
        is_public,
        user_id
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
