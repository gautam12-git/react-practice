import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen flex flex-col items-center justify-start 
                      bg-gradient-to-br from-gray-900 via-purple-900 to-black 
                      text-white px-6 py-12">

        <h1 className="text-4xl font-extrabold mb-8 text-transparent 
                       bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 drop-shadow-lg">
          ✨ My Todo List
        </h1>

        <div className="w-full max-w-2xl">
          <TodoForm />
        </div>

        <div className="mt-6 w-full max-w-2xl space-y-4">
          {todos.length === 0 ? (
            <p className="text-gray-400 text-center italic">
              No todos yet... Add your first task! 🚀
            </p>
          ) : (
            todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))
          )}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
