import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'


function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

const editTodo = () => {
  updateTodo(todo.id, {...todo, todo: todoMsg})
  setIsTodoEditable(false)
}

const toggleCompleted = () => {
    toggleComplete(todo.id)
}

  return (
    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl shadow-md w-full">
      <input type="checkbox"
      checked={todo.completed}
      onChange={toggleCompleted} 
      className='cursor-pointer w-5 h-5 accent-pink-500'
      />
      <input type="text"
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable} 
      className={`
          flex-1 px-3 py-2 rounded-md bg-transparent outline-none transition-all duration-300
          ${isTodoEditable ? "border border-pink-400 bg-white/10 focus:ring-2 focus:ring-pink-500" : ""}
          ${todo.completed ? "line-through text-gray-400 italic" : "text-white"}
        `}
      />
      <button onClick={() => {
        if (todo.completed) return
        if (isTodoEditable){
            editTodo()
        }else{
            setIsTodoEditable((prev) => !prev)
        }
      }}
      disabled={todo.completed}
       className={`px-3 py-2 rounded-lg font-medium transition-all duration-300
          ${todo.completed ? "text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105"}
        `}>
        {isTodoEditable ? "📂" : "✏️"}</button>
       
        <button
        onClick={() => deleteTodo(todo.id)}
         className="px-3 py-2 rounded-lg bg-red-500/80 text-white hover:bg-red-600 transition-all duration-300"
      >
        ❌</button>
    </div>
  )
}

export default TodoItem
