import React from 'react'
import { useSelector } from 'react-redux'
import { Heroe } from 'components/Heroe'
import { NotFound } from 'pages/NotFound'

export const Favorites = () => {
  const { logged } = useSelector((state) => state.auth)
  const { heroesFav } = useSelector((state) => state.heroes)
  return (
    <>
      {logged ? (
        <>
          <h3 className='SearchLast'>Tus Favoritos</h3>
          <section className='Heores-content'>
            {heroesFav.length !== 0 &&
              heroesFav.map(({ heroe }, i) => (
                <Heroe
                  description={heroe.description}
                  id={heroe.id}
                  key={i}
                  name={heroe.name}
                  resourceURI={heroe.resourceURI}
                  url={heroe.url}
                />
              ))}
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}
