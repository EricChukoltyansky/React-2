import React, { Component } from "react";
import axios from "axios";
import Button from "./Button";
import Search from "./Search";

export default class Joke extends Component {
  state = { jokes: "", categories: [], searchCate: "" };

  onButtonSubmit = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(response.data);
    this.setState({
      jokes: response.data.value,
    });
  };

  onButtonCategoriesSubmit = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );

    this.setState({
      categories: response.data,
    });
  };

  getJokeFromCategories = async (value) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${value}`
    );

    this.setState({
      jokes: response.data.value,
    });
  };

    onSearchInput = async (term) => {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/categories",
        {
          params: { query: term },
        }
      );

      this.setState({
        searchCate: response.data,
      });
    };

  render() {
    return (
      <>
        <Button onClickFunction={this.onButtonSubmit} text="Random" />
        <Button
          onClickFunction={this.onButtonCategoriesSubmit}
          text=" Send Categories To State"
        />
        <Button text="Present Categoires" />
        <div>Random Joke:{this.state.jokes}</div>

        <div>
          {this.state.categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={(e) =>
                  this.getJokeFromCategories(e.target.textContent)
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
        <Button onClickFunction={this.onButtonSubmit} />
        <Search
          onClickFunction={this.onButtonCategoriesSubmit}
          value={this.onButtonCategoriesSubmit}
        />
      </>
    );
  }
}
