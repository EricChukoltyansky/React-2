import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ num: this.state.num + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({ num: this.state.num - 1 });
          }}
        >
          Decrement
        </button>
        <div>Number: {this.state.num}</div>
      </>
    );
  }
}

export default Increment;
