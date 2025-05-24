import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'

// Client-side 용 (읽기 전용)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side 용 (모든 권한)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// 타입 정의
export interface Presentation {
  id: string
  user_id: string
  title: string
  description?: string
  company_name?: string
  slides_data: any[]
  slide_count: number
  template_type: string
  is_public: boolean
  share_token?: string
  created_at: string
  updated_at: string
}

export interface PresentationTemplate {
  id: string
  name: string
  description?: string
  category: string
  sample_data: any[]
  preview_image?: string
  is_active: boolean
  created_at: string
  updated_at: string
}
