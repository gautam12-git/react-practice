import React from "react"
function Card () {
  return (
<div className="max-w-sm mx-auto overflow-hidden shadow-lg 
                bg-white dark:bg-gray-800 transition-colors duration-500 hover:shadow-xl">
  <div className="relative">
    <img
      src="https://w0.peakpx.com/wallpaper/875/694/HD-wallpaper-spider-man-into-the-spider-verse-spider-man-miles-morales-movies-city-falling-vertical.jpg"
      alt="spidy"
      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
    />
  </div>

  <div className="p-4">
    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
      Spider-Man
    </h2>
    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
      With great power comes great responsibility — the motto Spider-Man lives by.
    </p>
  </div>
</div>
 )}

export default Card
