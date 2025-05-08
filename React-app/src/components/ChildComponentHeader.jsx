import React from 'react'

const ChildComponentHeader = ({handleIncrement,handleDecrement}) => {


  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
     
    </div>
  )
}

export default ChildComponentHeader
