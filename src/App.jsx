import React from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { AddTodoModal } from './components/TodoModal'
import { TodoHeader } from './components/TodoHeader'
import { TodoError } from './components/TodoItem/Error'
import { TodoLoading } from './components/TodoItem/Loading'
import { TodoEmpty } from './components/TodoItem/Empty'

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
      <TodoList
        error={error}
        onError={(errorText) => <TodoError error={errorText} />}
        loading={loading}
        onLoading={() => <TodoLoading/>}
        searchedTodos={searchedTodos}
        onEmpty={() => <TodoEmpty/>}
        onTodos={(todo) => 
          <TodoItem key={todo.text} todo={todo} toggle={toggleTodo} remove={removeTodo} className="checked" />
        }
      />
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
