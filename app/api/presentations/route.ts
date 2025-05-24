import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - 모든 프레젠테이션 조회
export async function GET(request: NextRequest) {
  try {
    // Supabase 연결 확인
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      return NextResponse.json({ 
        error: 'Database not configured',
        message: 'Supabase environment variables are not set'
      }, { status: 503 })
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')
    const isPublic = searchParams.get('public') === 'true'

    let query = supabase
      .from('presentations')
      .select('*')
      .order('created_at', { ascending: false })

    if (userId) {
      query = query.eq('user_id', userId)
    } else if (isPublic) {
      query = query.eq('is_public', true)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
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

    const { data, error } = await supabase
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
