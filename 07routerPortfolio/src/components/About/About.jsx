import React from 'react'

function About() {
  return (
    
    <section className="min-h-screen bg-gray-300 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        
        <div className="flex justify-center">
          <img
            src="/me.png" 
            alt="Gautam Pandey"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover"
          />
        </div>

        
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I’m <span className="font-semibold">Gautam Pandey</span>, 
            a 20-year-old engineering student, I enjoy building modern and responsive web applications and 
            I’m currently learning <span className="text-blue-600 font-medium">React.js </span> 
             to expand my skills as a developer. <span className="text-blue-600 font-medium"> Aspiring Full Stack Developer </span> 
            who loves building modern, responsive, and scalable web applications.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Education
          </h3>
          <p className="text-gray-700 mb-6">
            B.Tech in Cyber Security (3rd Year), [Sagar Institute Of Research And Technology]
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Skills
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Frontend: HTML, CSS, JavaScript, React.js</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Interests
          </h3>
          <p className="text-gray-700">
            Fitness, problem-solving, exploring tech trends, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}

  


export default About
