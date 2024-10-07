// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPzGTMy77GR-VXRGbU6KPpca-LzbF2Plg',
  authDomain: 'react-auth-99970.firebaseapp.com',
  projectId: 'react-auth-99970',
  storageBucket: 'react-auth-99970.appspot.com',
  messagingSenderId: '136075379859',
  appId: '1:136075379859:web:1c1b6e5de0c35d68043966',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getFirestore(app)
