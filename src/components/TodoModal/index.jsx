import { useRef } from "react";

import './index.css'

const AddTodoModal = ({addTodo, setOpenModal}) => {

  const closeModal = () => {
    setOpenModal(false);
  };

  const text = useRef(null)

  const addTodoHandler = (e) => {
    e.preventDefault();
    const todo = {
      text: text.current.value,
      completed: false,
    };
    addTodo(todo);
    text.current.value = '';
    closeModal();
  };

  return (
    <form onSubmit={addTodoHandler} className="modal__body">
      <legend>
        Add a new todo
      </legend>
      <textarea placeholder="Go to the market" ref={text} name="todo" id="" cols="30" rows="10" required></textarea>
      <div className="modal__buttons">
        <button type="button" className="cancel" onClick={closeModal}>
          Cancel
        </button>
        <button type="submit">
          Add todo
        </button>
      </div>
    </form>
  )
}

export { AddTodoModal }