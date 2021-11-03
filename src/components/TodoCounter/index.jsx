import { useContext } from 'react'
import './index.css'

const TodoCounter = ({searchedTodos, uncompletedTodos}) => {

  return (
    <header className="todo-header">
      <h1>TODO App</h1>
      <h2>
        Has realizado { uncompletedTodos } de { searchedTodos.length } TODOs
      </h2>
    </header>
  )
}

export { TodoCounter }
