import React, { useState } from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

import { useLocalStorage } from './hooks/useLocalStorage'

import './App.css'

const todosInitial = [
  { text: 'Lavar los platos arstarstarst arstarst arstarst arstarstars tarstar starst arstars tarst ars', completed: true, id: 1 },
  { text: 'Cocinar', completed: false, id: 2 },
  { text: 'Leer 30 minutos', completed: false, id: 3 },
  { text: 'Hacer ejercicio', completed: true, id: 4 },
]

function App() {
  const [todos, saveTodos] = useLocalStorage('todos', [])

  const [search, setSearch] = useState('')
  
  const uncompletedTodos = todos.filter(todo => todo.completed).length
  
  const toggleTodo = (todoId) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    saveTodos(newTodos)
  }

  const removeTodo = (todoId) => {
    const newTodos = todos.filter(todo => todo.id !== todoId)
    saveTodos(newTodos)
  }

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  }

  const searchedTodos = []

  if (search.length === 0) {
    searchedTodos.push(...todos)
  } else {
    searchedTodos.push(...todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase())))
  }

  return (
    <main className="todo">
      <TodoCounter allTodos={todos.length} uncompletedTodos={uncompletedTodos} />
      <TodoSearch onSearchChange={handleSearch} />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggle={toggleTodo} remove={removeTodo} className="checked" />
        ))}
        {searchedTodos.length === 0 && (
          <p className="todo__message">No hay tareas</p>
        )}
      </TodoList>
      <CreateTodoButton />
    </main>
  )
}

export default App
