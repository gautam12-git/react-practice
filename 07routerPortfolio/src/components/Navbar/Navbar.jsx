import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800/70 bg-slate-950/80 text-white shadow-md backdrop-blur">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <NavLink to="/" className="text-xl font-bold tracking-wide focus-visible:outline-2 focus-visible:outline-cyan-300">
          G<span className="text-cyan-400">autam</span>
        </NavLink>

        <nav aria-label="Primary navigation" className="w-full sm:w-auto">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm sm:gap-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                  isActive ? "font-semibold text-cyan-400" : "text-slate-300"
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
                  `transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                  isActive ? "font-semibold text-cyan-400" : "text-slate-300"
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
                  `transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                  isActive ? "font-semibold text-cyan-400" : "text-slate-300"
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
                  `transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                  isActive ? "font-semibold text-cyan-400" : "text-slate-300"
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
                  `transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                  isActive ? "font-semibold text-cyan-400" : "text-slate-300"
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
