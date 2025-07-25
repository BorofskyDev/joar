import { auth } from './firebase'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

export async function loginWithEmail(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider()
  return await signInWithPopup(auth, provider)
}
