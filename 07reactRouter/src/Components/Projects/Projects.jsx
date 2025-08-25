import React from 'react'

function Projects() {
  return (
     <section className="min-h-screen bg-gray-300 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          My Projects
        </h2>

        {/* JavaScript Projects */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          JavaScript Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* JS Project Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expense Tracker</h4>
              <p className="text-gray-600 mb-4">
                A simple JavaScript project that adds or removes your product expense and calculates total.
              </p>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/gautam12-git/js-projects/tree/main/expenseTracker" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">GitHub</a>
              <a href="https://expencetracker-5vx6.onrender.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Live</a>
            </div>
          </div>

          {/* JS Project Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quiz App</h4>
              <p className="text-gray-600 mb-4">
                Interactive quiz app with multiple-choice questions and score tracking.
              </p>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/gautam12-git/js-projects/tree/main/quiz_App" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">GitHub</a>
              <a href="https://quizzapp-m40p.onrender.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Live</a>
            </div>
          </div>

          {/* JS Project Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Weather App</h4>
              <p className="text-gray-600 mb-4">
                Fetches real-time weather data using an API with location-based search.
              </p>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/gautam12-git/js-projects/tree/main/weather_Project" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">GitHub</a>
              <a href="https://weather-project-4dt2.onrender.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Live</a>
            </div>
          </div>

        </div>

        {/* React Projects */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          React Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* React Project Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">React Password Generator</h4>
              <p className="text-gray-600 mb-4">
                A modern version of password generator with range slider,checkbox for numbers and symbols and copy-to-clipboard.
              </p>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/gautam12-git/react-practice/tree/main/05password" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">GitHub</a>
              <a href="https://password-generator-9d5k.onrender.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Live</a>
            </div>
          </div>

          {/* React Project Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Currency Converter</h4>
              <p className="text-gray-600 mb-4">
                Convert over 100 currencies instantly with live rates, easy input
              </p>
            </div>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/gautam12-git/react-practice/tree/main/06currencyconverter" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">GitHub</a>
              <a href="https://currency-converterr.onrender.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Live</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
