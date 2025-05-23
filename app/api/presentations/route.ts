import { NextResponse } from 'next/server';
import { getPresentationMetadata } from '../../../utils/presentationUtils';

export async function GET() {
  try {
    const presentations = getPresentationMetadata();
    return NextResponse.json(presentations);
  } catch (error) {
    console.error('Error fetching presentations:', error);
    return NextResponse.json({ error: 'Failed to fetch presentations' }, { status: 500 });
  }
}
