import React from "react";

class Color extends React.Component {
  state = { favouriteColor: "purple" };

  componentDidMount = () => {
    setTimeout(()=> {
      this.setState(()=>({ favouriteColor: "yellow" }));
    }, 1000);
  };

  render() {
    return (
      <>
        <h1>My favourite colour is purple</h1>
        <h1>The updated favorite color is {this.state.favouriteColor}</h1>
      </>
    );
  }
}

export default Color;
