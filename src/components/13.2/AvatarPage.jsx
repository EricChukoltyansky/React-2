import React, { Component } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import Input from "./Input";
import "./AvatarPage.css";
import axios from "axios";

export default class AvatarPage extends Component {
  state = { inputValue: "", info: [] };

  fetchData = async () => {
    let response = await axios.get("https://randomuser.me/api/", {
      params: { results: 20 },
    });

    this.setState({
      info: response.data.results,
    });
  };

  componentDidMount = async () => {
    this.fetchData();
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  dynamicSearch = () => {
    return this.state.info.name.first.filter((person) => {
      const fullName = person.name.first + " " + person.name.last;
      return fullName.toLowerCase().includes(this.state.inputValue.toLocaleLowerCase());
    });
  };

  cardRender = () => {
    return;
  };
  render() {
    return (
      <>
        <div className="control">
          <Input
            value={this.state.inputValue}
            onChangeFunction={this.handleChange}
          />
          <Button text="click" />
        </div>
        <div className="avatar-wrapper">
          {this.state.info.map((person) => {
            return (
              <div className="avatar-container">
                <Avatar
                  first={person.name.first}
                  last={person.name.last}
                  src={person.picture.large}
                  key={person.email}
                />
              </div>
            );
          })}
        </div>
        ;
      </>
    );
  }
}
