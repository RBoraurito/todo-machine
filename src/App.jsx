import { useContext } from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { AddTodoModal } from './components/TodoModal'
import { Modal } from './portals/modal'

import { TodoContext } from './context/TodoContext'

import './App.css'

function App() {
  const { searchedTodos, loading, error, toggleTodo, removeTodo, isOpenModal } = useContext(TodoContext)

  return (
    <main className="todo">
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem key={todo.text} todo={todo} toggle={toggleTodo} remove={removeTodo} className="checked" />
          ))}
          {(searchedTodos.length === 0 && !loading) && (
            <p className="todo__message">No hay tareas</p>
          )}
          {loading && <p className="todo__message">Cargando...</p>}
          {error && <p className="todo__message">Error al cargar las tareas</p>}
        </TodoList>
      <Modal>
        <div className="modal" style={{display: isOpenModal ? 'flex' : 'none'}}>
            <AddTodoModal />
        </div>
      </Modal>
      <CreateTodoButton />
    </main>
  )
}

export default App
