// app/login/page.tsx
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LoginPage } from '@/components/pages'
import { adminAuth } from '@/lib/server/firebaseAdmin' // ✅ import safely

export default async function Page() {
  const token = (await cookies()).get('token')?.value

  if (token) {
    try {
      await adminAuth.verifyIdToken(token)
      return redirect('/admin')
    } catch (err) {
      // invalid token — fall through
    }
  }

  return <LoginPage />
}
