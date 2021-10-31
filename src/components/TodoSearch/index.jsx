import React from 'react'
import './index.css'

const TodoSearch = ({ onSearchChange }) => {
  return (
    <input
      className="todo__search"
      type="search"
      name="search"
      id="search"
      placeholder="Search your items"
      onInput={onSearchChange}
    />
  )
}

export { TodoSearch }
