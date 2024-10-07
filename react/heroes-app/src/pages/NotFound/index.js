import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='NotFound-Content'>
      <div className='contents'>
        <h2 className='title'>404 - looks Like yor're lost.</h2>
      </div>
      <div className='contents'>
        <p>maybe this page used to exist or you just spelled wrong </p>
      </div>
      <div className='contents'>
        <Link to={'/'}>Return Home</Link>
      </div>
    </div>
  )
}
