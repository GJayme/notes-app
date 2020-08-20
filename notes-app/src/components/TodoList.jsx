import React from 'react';

import Todo from './Todo'

import './TodoList.css'

export default (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} />
  })
  return (
    <div className="list-wrapper">
      {todos}
    </div>
  )
}