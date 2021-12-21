import React, { Component } from "react";
import Button from "../TodoButton/Button";
import TodoInput from "../TodoInput/TodoInput";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends Component {
  state = {};

  addTodo() {

  }

  render() {
    return (
      <div>
          hello
        <TodoInput />
        <Button addTodo={this.addTodo}/>
        <TodoItem />
      </div>
    );
  }
}
