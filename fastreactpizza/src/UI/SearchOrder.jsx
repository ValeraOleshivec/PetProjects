import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const SearchOrder = () => {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/order/${query}`)
  }

  const [query, setQuery] = useState('')
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order..."
        className=" w-28 rounded-full px-4 py-2 text-sm placeholder:text-stone-400 "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchOrder
