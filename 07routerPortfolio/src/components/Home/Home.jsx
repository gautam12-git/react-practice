import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-500">Gautam Pandey</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-6">
          Aspiring Full Stack Developer | Building modern web apps with React.js
        </p>
        <div className="flex space-x-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg shadow hover:bg-gray-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span className="px-4 py-2 bg-gray-700 rounded-lg shadow hover:bg-indigo-500 hover:text-white transition">React.js</span>
            <span className="px-4 py-2 bg-gray-700 rounded-lg shadow hover:bg-indigo-500 hover:text-white transition">JavaScript</span>
            <span className="px-4 py-2 bg-gray-700 rounded-lg shadow hover:bg-indigo-500 hover:text-white transition">HTML</span>
            <span className="px-4 py-2 bg-gray-700 rounded-lg shadow hover:bg-indigo-500 hover:text-white transition">CSS</span>
            <span className="px-4 py-2 bg-gray-700 rounded-lg shadow hover:bg-indigo-500 hover:text-white transition">Tailwind</span>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home