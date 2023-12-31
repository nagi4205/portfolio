import { NextResponse } from 'next/server';

// next.js route segment config
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('>>> Called /test-api ');
    return NextResponse.json({ data: Math.random() });
  } catch (error) {
    // エラーが発生した場合は500エラーを返す
    return NextResponse.error();
  }
}
