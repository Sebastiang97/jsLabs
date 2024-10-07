import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Search } from 'pages/Search'
import { Details } from 'pages/Details'
import { Navbar } from 'components/Navbar'
import { SearchResults } from 'components/SearchResults'
import { onAuthStateChanged } from 'firebase/auth'
import { auth as authFirebase } from 'dataFirebase/config'
import { logout, signIn } from 'features/auth'
import { useDispatch } from 'react-redux'
import { getHeroesFav } from 'features/Heroes/getHeroesFav'
import { NotFound } from 'pages/NotFound'
import { Favorites } from 'pages/Favorites'

export const AppRouter = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(authFirebase, async (res) => {
      const { uid, email, photoURL, displayName } = res
      if (!res) {
        return dispatch(logout())
      }
      const user = { uid, email, photoURL, displayName }
      dispatch(signIn({ user }))
      dispatch(getHeroesFav())
    })
  }, [])

  return (
    <>
      <Navbar />
      <SearchResults />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='/heroe/:id' element={<Details />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
