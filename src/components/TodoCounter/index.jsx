import React from 'react'
import './index.css'

const TodoCounter = ({allTodos, uncompletedTodos}) => {

  return (
    <header className="todo-header">
      <h1>TODO App</h1>
      <h2>
        Has realizado { uncompletedTodos } de {allTodos} TODOs
      </h2>
    </header>
  )
}

export { TodoCounter }
