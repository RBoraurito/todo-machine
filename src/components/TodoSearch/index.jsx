import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

import './index.css'

const TodoSearch = () => {

  const {handleSearch} = useContext(TodoContext)

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
