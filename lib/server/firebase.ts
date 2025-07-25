// lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { getAuth, connectAuthEmulator, type Auth } from 'firebase/auth'
import {
  getStorage,
  connectStorageEmulator,
  type FirebaseStorage,
} from 'firebase/storage'

// Must match the names in your .env file
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
}

function createFirebase(): {
  app: FirebaseApp
  auth: Auth
  storage: FirebaseStorage
} {
  // Singleton pattern (similar to Prisma)
  const app: FirebaseApp =
    getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)

  const auth = getAuth(app)
  const storage = getStorage(app)

  // Optional: connect emulators in local dev
  if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099')
    connectStorageEmulator(storage, '127.0.0.1', 9199)
  }

  return { app, auth, storage }
}

export const firebase = createFirebase()
export const auth = firebase.auth
export const storage = firebase.storage
