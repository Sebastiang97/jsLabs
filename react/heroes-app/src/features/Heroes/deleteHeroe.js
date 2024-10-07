import { database } from 'dataFirebase/config'
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { deleteFavHeroes } from '.'

export const deleteHeroe = (uid, id) => {
  return async (dispatch, getState) => {
    // dispatch(signIn(result))

    const { user } = getState().auth

    const ref = doc(database, `${user.uid}/HeroesApi/Heroes/${uid}`)
    await deleteDoc(ref)
    dispatch(deleteFavHeroes(id))
  }
}
