import React, { useState } from 'react'
import { Favorites } from 'components/Favorites'
import { Link, useLocation } from 'react-router-dom'

export const Heroe = ({
  name,
  id,
  url,
  description,
  resourceURI,
  isFavorite,
}) => {
  const { pathname } = useLocation()
  const hero = { name, id, url, description, resourceURI }
  return (
    <div className='Heroe'>
      <Link to={`/heroe/${id}`}>
        <img loading='lazy' src={url} alt={name} />
        <div className='name'>{name}</div>
        <div className='caption'>
          <h3>Marvel Commics</h3>
        </div>
      </Link>
      {pathname !== '/favorites' && (
        <Favorites isFavorite={isFavorite} hero={hero} />
      )}
    </div>
  )
}
