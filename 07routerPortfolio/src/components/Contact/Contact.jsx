import React from 'react'
import WhatsAppLink from '../WhatsAppLink/WhatsAppLink'

function Contact() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Contact</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s build something useful.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">I&apos;m open to internships, entry-level software development roles, and conversations about full stack projects.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <p className="portfolio-card p-5"><span className="block text-sm text-slate-400">Phone</span><span className="mt-2 block font-semibold">+91 7999931469</span></p>
          <a href="mailto:gautamofficial1201@gmail.com" className="portfolio-card p-5 transition hover:border-cyan-400 focus-visible:outline-2 focus-visible:outline-cyan-300"><span className="block text-sm text-slate-400">Email</span><span className="mt-2 block font-semibold text-cyan-300">gautamofficial1201@gmail.com</span></a>
          <a href="https://github.com/gautam12-git" target="_blank" rel="noopener noreferrer" className="portfolio-card p-5 transition hover:border-cyan-400 focus-visible:outline-2 focus-visible:outline-cyan-300"><span className="block text-sm text-slate-400">GitHub</span><span className="mt-2 block font-semibold text-cyan-300">github.com/gautam12-git</span></a>
          <a href="https://www.linkedin.com/in/gautam-pandey07" target="_blank" rel="noopener noreferrer" className="portfolio-card p-5 transition hover:border-cyan-400 focus-visible:outline-2 focus-visible:outline-cyan-300"><span className="block text-sm text-slate-400">LinkedIn</span><span className="mt-2 block font-semibold text-cyan-300">linkedin.com/in/gautam-pandey07</span></a>
          <WhatsAppLink />
        </div>
      </div>
    </main>
  )
}

export default Contact