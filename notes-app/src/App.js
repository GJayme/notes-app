import React, { Component } from 'react'

import Header from './components/Header'

import './App.css'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    task: ['task 1', 'task 2', 'task 3  ']
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.task.length} />
          <TodoList tasks={this.state.task} />
        </div>
      </div>
    )
  }
}

export default App;
