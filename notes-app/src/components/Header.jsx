import React from 'react'

import './Header.css'

export default (props) => {
  return (
    <div className='card-header'>
      <h1 className='card-header-title header'>
        You have {props.numTodos} Todos
      </h1>
    </div>
  )
}