import React from 'react'

export default function User({user}) {
  return (
        <div>
        {user?(
            <>
            <h1>Welcome {user.username}</h1>
            <button>Exit</button>
            </>
        ):(
            <button>SignIn</button>
        )}
        </div>   

  )
}
