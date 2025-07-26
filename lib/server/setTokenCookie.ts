export async function setTokenCookie(user: { getIdToken: () => Promise<string> }) {
  const token = await user.getIdToken()
  await fetch('/api/set-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  })
}
