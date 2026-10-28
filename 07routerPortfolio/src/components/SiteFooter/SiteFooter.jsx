import React from 'react'


   function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/70 bg-transparent py-6 text-slate-400">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Gautam Pandey</span>. All rights reserved.
        </p>
        
        <div className="mt-4 flex gap-6 md:mt-0">
          <a href="https://github.com/gautam12-git" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/gautam-pandey07" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">
            LinkedIn
          </a>
          <a href="mailto:gautamofficial1201@gmail.com" className="transition hover:text-cyan-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}



export default SiteFooter
