import React from 'react'

const clockTime = () => {

  let time = new Date();
  let username = 'shyam'
  
  return (

    <> 
        <p>This is the {username} Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </>
  )
}

export default clockTime