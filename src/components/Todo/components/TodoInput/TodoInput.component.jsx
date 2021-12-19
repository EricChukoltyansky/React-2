import React from 'react';

class TodoInput extends React.Component{
  state={
    inputTerm : "",
  }



 
  render = () =>{
    return (
      <div>
        <input 
          type="text" 
          onChange={(e)=>this.setState({inputTerm:e.target.value })} 
          value={this.state.inputTerm}
        />
        <button 
          onClick={()=>this.props.addTodo(this.state.inputTerm)}
          >ADD ➕
          </button>
      </div>
    )
  }
}

export default TodoInput