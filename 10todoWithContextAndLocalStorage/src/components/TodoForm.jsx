import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoForm() {

    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()
      if (!todo) return
      addTodo({todo, completed: false})
      setTodo('')
    }

  return (
    <form onSubmit={add}
    className="flex items-center gap-3 w-full max-w-lg mx-auto p-4">
      <input 
      type="text"
      placeholder='Write Todo...'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      className='flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md 
                   border border-white/20 text-white placeholder-gray-300 
                   shadow-md focus:ring-2 focus:ring-pink-400 
                   focus:border-pink-400 outline-none transition-all duration-300' />
      {''}
      <button type="submit"
      className='px-6 py-3 rounded-xl font-semibold text-white 
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                   shadow-lg hover:shadow-pink-400/50 hover:scale-105 
                   active:scale-95 transition-all duration-300'
      >
         ➕ Add</button>
    </form>
  )
}

export default TodoForm
