import React from "react";
import axios from "axios";
import Avatar from "./Avatar";

class Main extends React.Component {
  state = { usersData: [], searchValue: "" };

  getUsersData = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=100");
    this.setState({ usersData: data.results });
  };

  generateUsersCards = () => {
    if (this.state.usersData.length > 0) {
      return (
        <div className="ui link cards">
          {this.filterUsers(this.state.usersData, this.state.searchValue).map((user) => {
            return <Avatar key={user.login.uuid} user={user} />;
          })}
        </div>
      );
    }
  };

  filterUsers = (users, searchValue) => {
    return users.filter((user) => {
      const fullName = (user.name.first + " " + user.name.last).toLowerCase();
      return fullName.indexOf(searchValue.toLowerCase()) !== -1;
    });
  };

  onChangeHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  componentDidMount = () => {
    this.getUsersData();
  };

  render() {
    return (
      <div className="container">
        <h1>Search</h1>
        <div className="ui search">
          <input
            onChange={(e) => this.onChangeHandler(e)}
            value={this.state.searchValue}
            className="prompt"
            type="text"
            placeholder="Search..."
          />
        </div>

        {this.generateUsersCards()}
      </div>
    );
  }
}
export default Main;
