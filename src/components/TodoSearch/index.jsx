import React from 'react'

import './index.css'

const TodoSearch = ({handleSearch}) => {


  return (
    <input
      className="todo__search"
      type="search"
      name="search"
      id="search"
      placeholder="Search your items"
      onInput={handleSearch}
    />
  )
}

export { TodoSearch }
