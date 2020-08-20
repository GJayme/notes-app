import React from 'react'

import './Todo.css'

export default (props) => {
  return (
    <div className="list-item">
      {props.content}
      <button class="delete is-pulled-right">Remove</button>
    </div>
  )
}