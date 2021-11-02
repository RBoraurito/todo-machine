import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

import './index.css'

const AddTodoModal = () => {

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const closeModal = () => {
    setOpenModal(false);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    // const todo = {
    //   text: e.target.name.value,
    //   completed: false,
    // };
    // addTodo(todo);
    // closeModal();
    e.target
  };

  return (
    <form onSubmit={addTodoHandler} className="modal__body">
      <legend>
        Add a new todo
      </legend>
      <textarea placeholder="Go to the market" name="todo" id="" cols="30" rows="10" required></textarea>
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