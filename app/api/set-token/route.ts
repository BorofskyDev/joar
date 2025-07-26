// app/api/set-token/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { token } = await req.json()


  const cookieStore = await cookies()

  cookieStore.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 5, // 5 days
  })

  return NextResponse.json({ status: 'success' })
}