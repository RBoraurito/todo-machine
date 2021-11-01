import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import './index.css'

const TodoCounter = () => {

  const { searchedTodos, uncompletedTodos } = useContext(TodoContext)

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
