import { useContext } from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

import { TodoContext } from './context/TodoContext'

import './App.css'

function App() {
  const { searchedTodos, loading, error, toggleTodo, removeTodo } = useContext(TodoContext)

  return (
    <main className="todo">
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggle={toggleTodo} remove={removeTodo} className="checked" />
          ))}
          {(searchedTodos.length === 0 && !loading) && (
            <p className="todo__message">No hay tareas</p>
          )}
          {loading && <p className="todo__message">Cargando...</p>}
          {error && <p className="todo__message">Error al cargar las tareas</p>}
        </TodoList>
      <CreateTodoButton />
    </main>
  )
}

export default App
