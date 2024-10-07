import { useEffect, useState } from 'react'
import getAllHeroes from 'services/getAllHeroes'
import { useDispatch, useSelector } from 'react-redux'
import { setHeroes, updateHeroes } from 'features/Heroes'

export const useCharacters = ({ search }) => {
  const dispatch = useDispatch()
  const { heroes } = useSelector((state) => state)
  const [pages, setPages] = useState(0)

  // const [heroes, setHeroes] = useState({
  //   heroes: [],
  //   loading: true,
  // })

  useEffect(() => {
    getAllHeroes({ search, pages }).then((heroes) => {
      dispatch(
        setHeroes({
          heroes,
          loading: false,
        })
      )
    })
  }, [search, dispatch])

  useEffect(() => {
    if (pages !== 0) {
      getAllHeroes({ search, pages }).then((heroes) => {
        dispatch(
          updateHeroes({
            heroes,
          })
        )
      })
    }
  }, [search, pages, setHeroes])

  return { heroes, setPages }
}
