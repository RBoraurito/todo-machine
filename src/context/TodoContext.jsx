import { createContext, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext()

function TodoProvider(props) {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('todos', [])
  
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
    <TodoContext.Provider value={{
      searchedTodos,
      uncompletedTodos,
      loading,
      error,
      toggleTodo,
      removeTodo,
      search,
      handleSearch
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }