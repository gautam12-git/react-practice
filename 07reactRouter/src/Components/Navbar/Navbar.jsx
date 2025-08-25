import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">
          G<span className="text-indigo-500">Front</span>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-300 ${
                    isActive ? "text-indigo-500 font-semibold border-b-2 border-indigo-500" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-300 ${
                    isActive ? "text-indigo-500 font-semibold border-b-2 border-indigo-500" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-300 ${
                    isActive ? "text-indigo-500 font-semibold border-b-2 border-indigo-500" : ""
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-300 ${
                    isActive ? "text-indigo-500 font-semibold border-b-2 border-indigo-500" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition-colors duration-300 ${
                    isActive ? "text-indigo-500 font-semibold border-b-2 border-indigo-500" : ""
                  }`
                }
              >
                GitHub
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
