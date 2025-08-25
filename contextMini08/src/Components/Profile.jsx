import React, { useContext } from 'react'
import UserContext from '../Context/userContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) {
        return(
            <h2>No user logged in</h2>
        )
    }
  return (
    <div className="bg-white/10 px-6 py-3 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold">
        Profile:{user.userName}
      </h3>
    </div>
  )
}

export default Profile
