import { createContext, useState } from "react";
import { useLocalStorage } from './useLocalStorage'

function useTodos(props) {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('todos', [])
  
  const [search, setSearch] = useState('')
  const [isOpenModal, setOpenModal] = useState(false)
  
  const uncompletedTodos = todos.filter(todo => todo.completed).length
  
  const toggleTodo = (todoText) => {
    const newTodos = todos.map(todo => {
      if (todo.text === todoText) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    saveTodos(newTodos)
  }

  const addTodo = (newTodo) => {
    console.log([...todos, newTodo]);
    saveTodos([...todos, newTodo])
  }

  const removeTodo = (todoText) => {
    const newTodos = todos.filter(todo => todo.text !== todoText)
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

  return {
      searchedTodos,
      uncompletedTodos,
      loading,
      error,
      toggleTodo,
      removeTodo,
      search,
      handleSearch,
      isOpenModal,
      setOpenModal,
      addTodo
    }
}

export { useTodos }