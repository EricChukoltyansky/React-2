import React, { Component } from "react";
import SelectInputComponent from "./InputSelect";
import InputText from "./InputText";
import TextArea from "./TextArea";
import "./Form.css";
import FormReview from "./FormReview";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameValue: "",
      lastNameValue: "",
      selectValue: "",
      textAreaValue: "",
      isSubmitted: false,
    };
  }

  handleChange = (id, value) => {
    this.setState({
      // firstNameValue: event.target.value,
      // lastNameValue: event.target.value,
      // selectValue: event.target.value,
      // textAreaValue: event.target.value,

      // equals to:

      [id]: value,
    });
    console.log("handleChange");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
    console.log(this.state);
  };

  ages = [
    { age: "0-15", id: 0 },
    { age: "16-40", id: 1 },
    { age: "41-60", id: 2 },
    { age: "61-75", id: 3 },
  ];

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          onChange={(e) => {
            this.handleChange(e.target.id, e.target.value);
          }}
        >
          <InputText
            // getInputValue={this.handleChange}
            type="text"
            labelName="First Name"
            id="firstNameValue"
          />
          <InputText
            // getInputValue={this.handleChange}
            type="text"
            labelName="Last Name"
            id="lastNameValue"
          />
          <SelectInputComponent
            // getSelectValue={this.handleChange}
            ages={this.ages}
            id="selectValue"
          />
          <TextArea
            // getTextAreaValue={this.handleChange}
            labelName="Free Text"
            id="textAreaValue"
          />
          <input type="submit" value="submit" />
        </form>

        {this.state.isSubmitted && (
          <FormReview
            information={this.state}
            handleChange={this.handleChange}
          />
        )}
      </>
    );
  }
}
