import React, { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ListHeroes } from 'components/ListHeroes'
import { useCharacters } from 'hooks/useCharacters'
import { useNearRef } from 'hooks/useNearRef'
import debounce from 'just-debounce-it'

export const Search = () => {
  const { search = '' } = useParams()
  const { heroes, setPages } = useCharacters({ search })

  const externalRef = useRef()
  const { isNearScreen } = useNearRef({
    externalRef: heroes.loading ? null : externalRef,
    once: false,
  })

  const infinityScroll = useCallback(
    debounce(() => setPages((prev) => prev + 1), 500),
    [heroes]
  )

  useEffect(() => {
    isNearScreen && infinityScroll()
  }, [infinityScroll, isNearScreen])

  return (
    <>
      {search && (
        <h3 className='SearchLast'>
          Ultima Búsqueda: {decodeURI(search ?? '')}
        </h3>
      )}
      <ListHeroes />
      <div ref={externalRef}></div>
    </>
  )
}
