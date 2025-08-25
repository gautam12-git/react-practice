import React from 'react'


   function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Name/Brand */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Gautam Pandey</span>. All rights reserved.
        </p>
        
        {/* Right - Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/gautam12-git" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/gautam-pandey07" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            LinkedIn
          </a>
          <a href="mailto:gautamofficial1201@gmail.com" className="hover:text-indigo-400 transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}



export default SiteFooter
