import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import FormInput from './component/FormInput';
import TodoItem from './component/TodoItem';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading a book"
      },
      {
        id: 2,
        title: "workout"
      }
    ]
  }

  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id != id)
    })
  }

  render(){
    const {todos} = this.state;
    return(
      <div className='app'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
          <h3>Task List</h3>
        </div>
        <div className='list'>
          {todos.map(item => 
            <TodoItem key={item.id} todo={item} del={this.deleteTask}/>
          )}
        </div>
        <div className='input-form'>
          <FormInput />
        </div>
      </div>
    )
  }
}

export default App;
