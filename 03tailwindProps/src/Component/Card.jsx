import React from 'react'

function card({username = "Gautam"}) {
    // let userNAme = "Gautii"
    // let role = 'Student'
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">

      <h2 className="text-2xl font-bold text-center text-gray-800 py-4 bg-gradient-to-r from-red-500 to-purple-600 tracking-wide">My Card</h2>
      <div className='overflow-hidden'>
      
        <img src="https://w0.peakpx.com/wallpaper/858/948/HD-wallpaper-spiderman-cool-marvel-sony-spider-spider-man-far-from-home-spiderman-homecoming-spidy-venom.jpg" alt="spiderman" 
                  className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-500"
/>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-base leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, tenetur?</p>
      </div>
      <div className="px-4 py-3 border-t border-gray-200 text-right">
        <p className="text-sm font-semibold text-gray-700">{username}</p>
        <p className="text-xs text-gray-500">Second Year Engineering Student</p>
      </div>
    </div>
  )
}

export default card
