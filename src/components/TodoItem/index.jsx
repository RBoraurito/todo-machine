import React from "react"
import './index.css'

const TodoItem = ({todo, toggle, remove}) => {

  const handleClick = () => {
    toggle(todo.text)
  }

  const handleRemove = () => {
    remove(todo.text)
  }

  return (
    <li className={`todo__item ${todo.completed && 'checked'}`}>
      <button type="button" className="todo__item__check" onClick={handleClick}></button>
      <p onClick={handleClick}>{todo.text}</p>
      <button className="close-button" onClick={handleRemove}>x</button>
    </li>
  )
}

export { TodoItem }
