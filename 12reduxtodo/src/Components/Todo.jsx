import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/Todo/todoSlice'

function Todo() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  if (!Array.isArray(todos) || todos.length === 0) {
    return (
      <p className="text-gray-500 italic text-center">
        No todos yet... Add your first task! 🚀
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-50 border rounded-lg px-3 py-2 shadow-sm"
        >
          <span className="text-gray-800">{todo.text}</span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
          >
            Clear
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Todo
