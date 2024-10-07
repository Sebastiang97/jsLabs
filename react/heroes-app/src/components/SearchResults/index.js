import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchResults = () => {
  const [input, setOnChange] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${input}`, { replace: true })
  }

  const handleChange = (event) => setOnChange(event.target.value)

  return (
    <div className='Search-content'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          placeholder='Search a Hero'
          onChange={handleChange}
          autoComplete='off'
        />
      </form>
    </div>
  )
}
