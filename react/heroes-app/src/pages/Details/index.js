import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import getDetailsHero from 'services/getDetailsHero'

export const Details = () => {
  const { heroes } = useSelector((state) => state.heroes)
  const { id } = useParams()
  const [heroe, setHeroe] = useState({})

  useEffect(() => {
    if (heroes.length !== 0) {
      heroes.map((heroe) => heroe.id === parseInt(id) && setHeroe(heroe))
    } else {
      getDetailsHero({ id }).then((heroe) => setHeroe(heroe))
    }
  }, [id, heroes])

  return (
    <article key={heroe?.id} className='Details-Content'>
      <div className='Section'>
        <img src={heroe?.url} alt='' />
      </div>
      <div className='Section'>
        <div className='contents'>
          <h2 className='title'>{heroe?.name}</h2>
        </div>
        <div className='contents'>
          <div className='description'>{heroe?.description}</div>
        </div>
        <div className='contents'>
          <Link to={'/'}>Return Home</Link>
        </div>
      </div>
    </article>
  )
}
