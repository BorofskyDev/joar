import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { adminAuth } from '@/lib/server/firebaseAdmin'
import { AdminPage } from '@/components/pages'

export default async function Admin() {
  const token = (await cookies()).get('token')?.value

  if (!token) redirect('/login')

  try {
    await adminAuth.verifyIdToken(token)
    return <AdminPage />
  } catch {
    redirect('/login')
  }
}
