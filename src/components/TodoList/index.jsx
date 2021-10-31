import React from 'react'
import './index.css'

const TodoList = ({children}) => {
  return (
    <section className="todo__list">
      <ul>
        {children}
      </ul>
    </section>
  )
}

export { TodoList }
