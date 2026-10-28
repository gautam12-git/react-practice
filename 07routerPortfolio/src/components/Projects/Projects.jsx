import React from 'react'
import { projects } from '../../data/portfolioData'

function Projects() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:py-20"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Selected work</p><h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Projects built with curiosity and care.</h1><p className="mt-5 max-w-2xl leading-7 text-slate-300">A mix of full stack, React, and JavaScript work. Every card links directly to its source repository.</p><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <article key={project.name} className="portfolio-card flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1"><div className="flex items-start justify-between gap-4"><h2 className="text-2xl font-semibold">{project.name}</h2><span className="shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">{project.category}</span></div><p className="mt-4 leading-7 text-slate-300">{project.description}</p><ul className="mt-5 flex-1 space-y-2 text-sm text-slate-400">{project.features.map((feature) => <li key={feature} className="before:mr-2 before:text-cyan-400 before:content-['•']">{feature}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">{technology}</span>)}</div><a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">View on GitHub</a></article>)}</div></div></main>
  )
}

export default Projects
