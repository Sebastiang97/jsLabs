import { signInGoogle } from 'dataFirebase/googleProvider'
import { logout, signIn } from '.'
// login funciona como un action
export const signInWithGoogle = () => {
  return async (dispatch) => {
    const result = await signInGoogle()
    if (result.status === 400) return dispatch(logout(result.errorMessage))

    dispatch(signIn(result))
  }
}
