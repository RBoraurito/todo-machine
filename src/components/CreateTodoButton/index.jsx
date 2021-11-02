import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import './index.css'

const CreateTodoButton = () => {
  const { setOpenModal, isOpenModal } = useContext(TodoContext)

  const handleClick = () => {
    setOpenModal(!isOpenModal)
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
