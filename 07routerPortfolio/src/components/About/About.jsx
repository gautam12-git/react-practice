import React from 'react'

const workAreas = [
  {
    icon: 'MF',
    title: 'Microfrontend Architecture',
    description: 'Worked with modular frontend applications and how independently developed applications fit together.',
  },
  {
    icon: 'WF',
    title: 'Webpack Module Federation',
    description: 'Explored how frontend modules and components can be exposed, shared, and integrated across applications.',
  },
  {
    icon: 'AI',
    title: 'AI Integrations',
    description: 'Contributed to integrating AI-powered capabilities into web application workflows.',
  },
  {
    icon: 'AUTO',
    title: 'Drip Campaigns & Automation',
    description: 'Worked with scheduled communication workflows, follow-up automation, and campaign functionality.',
  },
  {
    icon: 'DEV',
    title: 'Full Stack Development',
    description: 'Contributed to frontend and backend features using the technologies relevant to my internship work.',
  },
  {
    icon: 'API',
    title: 'API Integration',
    description: 'Connected frontend applications with backend APIs and handled application data.',
  },
  {
    icon: 'UI',
    title: 'Dashboards & Business Workflows',
    description: 'Contributed to dashboards, reusable UI components, and business application features.',
  },
]

const internshipTechnologies = ['React.js', 'Next.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Webpack Module Federation']

function About() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <img src="/me.png" alt="Gautam Pandey" width="288" height="288" className="h-64 w-64 rounded-2xl object-cover shadow-xl sm:h-72 sm:w-72" />
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">About me</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Full Stack Developer focused on practical product work.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">I build web applications and learn how frontend, backend, and distributed frontend systems work together.</p>
          </div>
        </div>

        <section className="mt-16 border-t border-slate-800/70 pt-12" aria-labelledby="worked-on-heading">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">IIFETECH Private Limited · March 2026 - September 2026</p>
            <h2 id="worked-on-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What I&apos;ve Worked On</h2>
            <p className="mt-4 leading-7 text-slate-400">As a Full Stack Developer Intern, I gained practical exposure to these areas as part of a collaborative development team.</p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workAreas.map((area) => (
              <li key={area.title} className="portfolio-card group p-5 transition duration-200 hover:-translate-y-0.5">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 px-2 text-[10px] font-bold tracking-wide text-cyan-300" aria-hidden="true">{area.icon}</span>
                  <div>
                    <h3 className="font-semibold leading-6 text-white group-hover:text-cyan-200">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-slate-800/70 pt-10" aria-labelledby="technologies-heading">
          <h2 id="technologies-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Technologies I&apos;ve worked with</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {internshipTechnologies.map((technology) => <span key={technology} className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-200">{technology}</span>)}
          </div>
        </section>

        <div className="mt-14 grid gap-6 border-t border-slate-800/70 pt-10 sm:grid-cols-2">
          <div><h2 className="text-lg font-semibold text-white">Education</h2><p className="mt-2 text-slate-400">B.Tech in Cyber Security, 3rd Year<br />Sagar Institute Of Research And Technology</p></div>
          <div><h2 className="text-lg font-semibold text-white">Interests</h2><p className="mt-2 text-slate-400">Fitness, problem-solving, exploring technology, and continuous learning.</p></div>
        </div>
      </div>
    </main>
  )
}

export default About