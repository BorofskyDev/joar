// lib/upload/uploadImageToStorage.ts
import { storage } from '@/lib/server/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export async function uploadImageToStorage(file: File): Promise<string> {
  const timestamp = Date.now()
  const uniqueName = `${timestamp}-${file.name}`
  const storageRef = ref(storage, `blog-images/${uniqueName}`)

  await uploadBytes(storageRef, file)
  const downloadUrl = await getDownloadURL(storageRef)

  return downloadUrl
}
