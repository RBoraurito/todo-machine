import React from 'react'
import './index.css'

const TodoList = ({
  error,
  onError,
  loading,
  onLoading,
  searchedTodos,
  onEmpty,
  onTodos,
}) => {
  return (
    <section className="todo__list">
      {error && onError(error)}
      {loading && onLoading()}
      {(!loading && searchedTodos.length === 0) && onEmpty()}

      <ul>
        {searchedTodos.map(onTodos)}
      </ul>
    </section>
  )
}

export { TodoList }
