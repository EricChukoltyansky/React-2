import React from 'react';
import Todo from '../Todo/Todo.component';
import TodoInput from '../TodoInput/TodoInput.component';

class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        mission: 'walk the dog',
      },
    ],
  };
  componentDidMount = () => {
    if(JSON.parse(window.localStorage.getItem('todos'))){
      this.setState({todos : JSON.parse(window.localStorage.getItem('todos'))})
    }
      
  }

  addTodo = (mission) => {
    this.setState(
      {
        todos: [
          ...this.state.todos,
          {
            id: new Date().valueOf(),
            mission,
          },
        ],
      },
      () => {
        window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
      }
    );
  };

  render = () => {
    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        {this.state.todos.map((element) => {
          return <Todo todo={element.mission} key={element.id} />;
        })}
      </div>
    );
  };
}

export default TodoList;
