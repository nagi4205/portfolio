import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(
  request: NextRequest
  // { query }: { query: { id: string } }
) {
  console.log('呼ばれてたよ!!!！');

  const url = new URL(request.url);

  const pathSegments = url.pathname.split('/');

  const id = pathSegments[pathSegments.length - 1];

  if (typeof id !== 'string') {
    return new NextResponse('Invalid ID', { status: 400 });
  }

  const post = await prisma.post.delete({
    where: { id },
  });

  return NextResponse.json(post);
}
