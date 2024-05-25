import { loginFormSchema } from '@/app/lib/validations/LoginValidation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    return new NextResponse('It works');
  } catch (err: any) {
    return new NextResponse(err.message, { status: 400 });
  }
}
