import React from 'react'
import { Link } from 'react-router-dom'
import { projects, skillGroups } from '../../data/portfolioData'
import WhatsAppLink from '../WhatsAppLink/WhatsAppLink'

const technologies = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs']

function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="text-white">
      <section className="relative isolate overflow-hidden border-b border-slate-800/70 px-6 py-16 sm:py-20 lg:min-h-[calc(100svh-73px)] lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_24%,_rgba(14,165,233,0.16),_transparent_28%),radial-gradient(circle_at_18%_80%,_rgba(20,184,166,0.10),_transparent_25%)]" />
        <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" aria-hidden="true" />
              Open to Full Stack / MERN Opportunities
            </div>
            <p className="text-base font-medium text-slate-400">Hi, I&apos;m Gautam Pandey</p>
            <h1 className="mt-3 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">Building useful products as a <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Full Stack Developer.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">I build responsive web applications, integrate APIs, and work across frontend and backend systems using modern JavaScript technologies.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="inline-flex min-h-11 items-center rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 shadow-[0_8px_24px_rgba(34,211,238,0.16)] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Explore Projects</Link>
              <Link to="/contact" className="inline-flex min-h-11 items-center rounded-lg border border-slate-600 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Contact Me</Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span className="text-slate-500">Find me on</span>
              <a href="https://github.com/gautam12-git" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-300 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300">GitHub</a>
              <a href="https://www.linkedin.com/in/gautam-pandey07" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-300 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300">LinkedIn</a>
              <WhatsAppLink compact />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle,_rgba(34,211,238,0.13),_transparent_65%)] blur-2xl" />
            <div className="absolute -left-3 top-8 hidden rounded-lg border border-cyan-400/25 bg-slate-900/90 px-3 py-2 text-xs font-medium text-cyan-300 shadow-xl sm:block">React</div>
            <div className="absolute -right-3 top-20 hidden rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-300 shadow-xl sm:block">Node.js</div>
            <div className="absolute -bottom-4 left-8 hidden rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-300 shadow-xl sm:block">MongoDB</div>
            <div className="absolute -bottom-4 right-8 hidden rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs font-medium text-slate-300 shadow-xl sm:block">MySQL</div>
            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" aria-hidden="true" />
                <span className="ml-3 text-xs text-slate-500">portfolio.jsx</span>
              </div>
              <pre className="overflow-x-auto px-5 py-6 text-left text-xs leading-7 sm:px-7 sm:py-8 sm:text-sm"><code><span className="text-slate-500">01</span>{'  '}<span className="text-pink-300">const</span> <span className="text-cyan-300">developer</span> = {'{'}<br /><span className="text-slate-500">02</span>{'  '}<span className="text-cyan-300">name</span>: <span className="text-emerald-300">&quot;Gautam Pandey&quot;</span>,<br /><span className="text-slate-500">03</span>{'  '}<span className="text-cyan-300">role</span>: <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,<br /><span className="text-slate-500">04</span>{'  '}<span className="text-cyan-300">focus</span>: [<span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Node.js&quot;</span>],<br /><span className="text-slate-500">05</span>{'  '}<span className="text-cyan-300">build</span>: <span className="text-pink-300">() =&gt;</span> <span className="text-emerald-300">&quot;ship useful software&quot;</span><br /><span className="text-slate-500">06</span>{'}'}<br /><br /><span className="text-pink-300">export default</span> developer</code></pre>
            </div>
            <div className="mt-4 flex items-center justify-between px-1 text-xs text-slate-500"><span>Frontend + Backend</span><span className="text-cyan-400/80">● available</span></div>
          </div>
        </div>
      </section>

      <section aria-label="Technology highlights" className="portfolio-surface border-y border-slate-800/60 px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400 sm:justify-between">
          <span className="font-medium text-slate-500">Working with</span>
          {technologies.map((technology) => <span key={technology} className="font-medium text-slate-300">{technology}</span>)}
        </div>
      </section>

      <section id="featured-projects" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Selected work</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Projects worth exploring</h2></div><Link to="/projects" className="font-semibold text-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-cyan-300">View all projects -&gt;</Link></div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => <article key={project.name} className="portfolio-card flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">{project.category}</p><h3 className="mt-3 text-2xl font-semibold">{project.name}</h3><p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">{technology}</span>)}</div><a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300">View on GitHub</a></article>)}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 px-6 py-20"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Capabilities</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Skills &amp; technologies</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => <div key={group.title} className="portfolio-card p-5"><h3 className="text-lg font-semibold text-white">{group.title}</h3><ul className="mt-4 space-y-3 text-slate-300">{group.skills.map((skill) => <li key={skill} className="border-b border-slate-800/80 pb-2 text-sm last:border-0">{skill}</li>)}</ul></div>)}</div></div></section>

      <section id="experience" className="portfolio-surface scroll-mt-24 border-y border-slate-800/50 px-6 py-20"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Experience</p><div className="mt-5 max-w-3xl border-l-2 border-cyan-400/70 pl-6"><h2 className="text-2xl font-bold sm:text-3xl">Full Stack Development Intern</h2><p className="mt-2 font-semibold text-cyan-300">IIFETECH Private Limited <span className="font-normal text-slate-400">| March 2026 - September 2026</span></p><ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-300"><li>Contributed to responsive frontend interfaces and reusable React components.</li><li>Supported backend functionality, REST API integration, and application workflows.</li><li>Worked with database-connected features and collaborated with the development team to deliver improvements.</li></ul></div></div></section>

      <section id="about" className="scroll-mt-24 px-6 py-20"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[auto_1fr] md:items-center"><img src="/me.png" alt="Gautam Pandey" width="288" height="288" className="h-64 w-64 rounded-2xl object-cover shadow-xl sm:h-72 sm:w-72" /><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">About me</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Focused on building useful software</h2><p className="mt-5 max-w-2xl leading-8 text-slate-300">I&apos;m a B.Tech engineering student who enjoys turning ideas into clear, reliable web experiences. My current focus is full stack development with a practical interest in APIs, data, and product quality.</p><p className="mt-4 text-slate-400">B.Tech in Cyber Security, 3rd Year - Sagar Institute Of Research And Technology</p></div></div></section>

      <section id="contact" className="portfolio-surface scroll-mt-24 border-t border-slate-800/50 px-6 py-20"><div className="mx-auto max-w-6xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Let&apos;s connect</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Open to the next opportunity</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">I&apos;m open to internships, entry-level software development roles, and conversations about building thoughtful web products.</p><Link to="/contact" className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Contact me</Link></div></section>
    </main>
  )
}

export default Home