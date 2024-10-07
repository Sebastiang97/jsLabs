import { database } from 'dataFirebase/config'
import { collection, doc, setDoc } from 'firebase/firestore'
import { updateFavHeroes } from '.'

export const addFavorites = (hero) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth

    const newDoc = doc(collection(database, `${user.uid}/HeroesApi/Heroes`))
    await setDoc(newDoc, hero)
    dispatch(updateFavHeroes({ uidDoc: newDoc.id, heroe: hero }))
  }
}
