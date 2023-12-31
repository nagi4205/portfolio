import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('>>> Called /test-api ');
    return NextResponse.json({ data: Math.random() });
  } catch (error) {
    // エラーが発生した場合は500エラーを返す
    return NextResponse.error();
  }
}
