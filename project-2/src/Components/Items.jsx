
import React from 'react'

const items = (props) => {
  return (
    <div>
        <li key ={props.foodItem}
       className="list-group-item">
        {props.foodItem}
      </li> 
    </div>
  )
}

export default items