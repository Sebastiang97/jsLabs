import React from 'react'
import { addFavorites } from 'features/Heroes/addFavorites'
import { deleteHeroe } from 'features/Heroes/deleteHeroe'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const Favorites = ({ hero, isFavorite }) => {
  const dispath = useDispatch()
  const { logged } = useSelector((state) => state.auth)
  const handleAdd = (hero) => {
    logged !== false && dispath(addFavorites(hero))
    logged === false && Swal.fire('Para añadir a favoritos debes logearte ')
  }

  const handleDelete = (uiDoc, id) => {
    dispath(deleteHeroe(uiDoc, id))
  }

  return (
    <>
      {isFavorite !== undefined ? (
        <div
          onClick={() => handleDelete(isFavorite, hero.id)}
          className='btn-fav'
        >
          <div className='fav'>❌</div>
        </div>
      ) : (
        <div onClick={() => handleAdd(hero)} className='btn-fav'>
          <div className='fav'>💗</div>
        </div>
      )}
    </>
  )
}
