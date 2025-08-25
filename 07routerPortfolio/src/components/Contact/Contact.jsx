import React from 'react'


function Contact() {
 
  return (
     <section className="min-h-screen bg-gray-300 px-6 py-16 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        
       
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-gray-700 text-lg mb-6">
            Let’s connect! I’m open to discussing new projects, internships, or opportunities.
          </p>

          <div className="space-y-4 text-gray-800">
            <p><span className="font-semibold">Phone:</span> +91 7999931469</p>
            <p><span className="font-semibold">Email:</span> gautamofficial1201@gmail.com</p>
            <p>
              <span className="font-semibold">GitHub:</span> 
              <a href="https://www.github.com/gautam12-git" className="text-blue-600 ml-2 hover:underline">github.com/gautam12-git</a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span> 
              <a href="https://www.linkedin.com/in/gautam-pandey07" className="text-blue-600 ml-2 hover:underline">linkedin.com/in/gautam-pandey07</a>
            </p>
          </div>
        </div>

      
       

      </div>
    </section>
  )
}
 export default Contact


