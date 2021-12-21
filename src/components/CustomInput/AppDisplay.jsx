import React from "react";
import CostumInput from "./costumInput";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render = () => {
    return (
      <form className="App">
        <fieldset>
          <legend>My Costum Form</legend>
          <CostumInput
            onInputChangeCallBack={this.handleInputChange}
            label="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
          />
          <br />
          <CostumInput
            name="lastName"
            label="Last Name"
            type="text"
            value={this.state.lastName}
            onInputChangeCallBack={this.handleInputChange}
          />
          <br />
          <CostumInput
            onInputChangeCallBack={this.handleInputChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
          />
          <br />
          <CostumInput
            onInputChangeCallBack={this.handleInputChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
          />
          <br />
          My Name Is : {this.state.firstName} {this.state.lastName}
          <br />
          My eMail is : {this.state.email}
          <br />
          My password is : {this.state.password}
        </fieldset>
      </form>
    );
  };
}
