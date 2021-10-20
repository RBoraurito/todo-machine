import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

import './App.css'

function App() {
  const todos = [
    { text: 'Lavar los platos', completed: true, id: 1 },
    { text: 'Cocinar', completed: false, id: 2 },
    { text: 'Leer 30 minutos', completed: false, id: 3 },
    { text: 'Hacer ejercicio', completed: true, id: 4 },
  ]

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
