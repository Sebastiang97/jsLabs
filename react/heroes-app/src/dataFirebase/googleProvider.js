import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './config'

const provider = new GoogleAuthProvider()

export const signInGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    //const credential = GoogleAuthProvider.credentialFromResult(result)

    const { displayName, email, photoURL, uid } = result.user

    return {
      status: 200,
      user: { displayName, email, photoURL, uid },
    }
  } catch (error) {
    console.log({ error })

    return {
      error,
      status: 400,
      user: {},
    }
  }
}
