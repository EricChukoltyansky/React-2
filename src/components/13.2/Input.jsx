import React from "react";
import './Input.css'

class Input extends React.Component {
  
 
  render() {
    return <input type="text" value={this.props.value} onChange={this.props.onChangeFunction} placeholder="Search for a name"/>;
  }
}

export default Input;
