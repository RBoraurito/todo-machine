import React from 'react'

import './index.css'

const CreateTodoButton = ({setOpenModal}) => {

  const handleClick = () => {
    setOpenModal(prev => !prev)
  }

  return (
    <button
      type="button"
      className="todo__create-button"
      onClick={handleClick}
    >
      Añadir TODO
    </button>
  )
}

export { CreateTodoButton }
