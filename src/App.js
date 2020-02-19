import React from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy milk',
        completed: false
      },
      {
        id: 2,
        title: 'Buy cheese',
        completed: false
      },
      {
        id: 3,
        title: 'Buy juice',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  render () {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
} 

export default App;
