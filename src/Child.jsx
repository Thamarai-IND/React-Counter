import React from 'react'

const Child = ({handleClick}) => {

  return (
    <div>
      <h2> Child Component</h2>
      <button onClick={event => handleClick(1)}>Click</button>
    </div>
  )
}

export default Child;