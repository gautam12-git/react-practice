import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Todo With Redux
        </h1>
        <AddTodo />
        <Todo />
      </div>
    </div>
  )
}

export default App
