import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface Params {
  id: string
}

// GET - 특정 프레젠테이션 조회
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { data, error } = await supabase
      .from('presentations')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

// PUT - 프레젠테이션 업데이트
export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const body = await request.json()
    const updateData = { ...body, updated_at: new Date().toISOString() }

    const { data, error } = await supabase
      .from('presentations')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}

// DELETE - 프레젠테이션 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { error } = await supabase
      .from('presentations')
      .delete()
      .eq('id', params.id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
