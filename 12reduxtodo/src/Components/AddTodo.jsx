import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (trimmed === "") return
    dispatch(addTodo(trimmed))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
