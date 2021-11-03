import React from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { AddTodoModal } from './components/TodoModal'
import { TodoHeader } from './components/TodoHeader'

import { useTodos } from './hooks/useTodos'
import { Modal } from './portals/modal'

import './App.css'

function App() {
  const {
    searchedTodos,
    uncompletedTodos,
    loading,
    error,
    toggleTodo,
    removeTodo,
    addTodo,
    isOpenModal,
    setOpenModal,
    handleSearch,
  } = useTodos()

  return (
    <main className="todo">
      <TodoHeader>
        <TodoCounter uncompletedTodos={uncompletedTodos} searchedTodos={searchedTodos}  />
        <TodoSearch handleSearch={handleSearch} />
      </TodoHeader>
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
            <AddTodoModal addTodo={addTodo} setOpenModal={setOpenModal} />
        </div>
      </Modal>
      <CreateTodoButton setOpenModal={setOpenModal} />
    </main>
  )
}

export default App
