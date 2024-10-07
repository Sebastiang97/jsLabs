import React from 'react'
import { isFavorite } from 'helpers/isFavorite'
import { Heroe } from 'components/Heroe'
import { Loading } from 'components/Loading'
import { useSelector } from 'react-redux'

export const ListHeroes = () => {
  const { heroes, loading, heroesFav } = useSelector((state) => state.heroes)

  if (loading) return <Loading />
  return (
    <section className='Heores-content'>
      {heroes.length !== 0 &&
        heroes.map(({ name, id, url, description, resourceURI }) => (
          <Heroe
            description={description}
            id={id}
            key={id}
            name={name}
            resourceURI={resourceURI}
            url={url}
            isFavorite={isFavorite({ heroesFav, id })}
          />
        ))}
    </section>
  )
}
