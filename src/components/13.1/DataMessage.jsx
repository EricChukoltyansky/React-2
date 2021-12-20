import React, { Component } from "react";

const data = [
  {
    id: 1,
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    id: 2,
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    id: 3,
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    id: 4,
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    id: 5,
    name: "Johnny",
    birthday: "1-10-1992",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

export default class DataMessage extends Component {
  state = {
    names: [],
    birth: [],
    meats: [],
    fish: [],
  };

  personNames = (data) => {
    return data.map((element) => {
      return <h1>{element.name}</h1>;
    });
  };

  personNamesState = (data) => {
    data.map((element) => {
      this.setState((prevState) => ({
        names: prevState.names + element.names,
      }));
    });
  };

  getNames = (data) => {
    return data.map((element) => {
      return <h1>{element.name}</h1>;
    });
  };

  //   before1990 = (data) => {
  //     return data.map((person) => {
  //       let personBirthArray = person.birthday.split("-");
  //       if (personBirthArray[2] < "1990") {
  //         this.setState((prevState) => ({
  //           birth: prevState.birth + personBirthArray[2],
  //         }));
  //       }
  //       return <div key={person.id}>{personBirthArray[2]}</div>;
  //     });
  //   };

  //   favouriteMeats = (data) => {
  //     return data.map((person) => {
  //       this.setState((prevState) => ({
  //         meats: prevState.favouriteMeats + person.favoriteFoods.meats,
  //       }));
  //       return <div key={person.id}>{data.favoriteFoods.meats}</div>;
  //     });
  //   };

  //   favouriteFish = data.map((person) => {
  //     this.setState({
  //       meats: person.favoriteFoods.fish,
  //     });

  render() {
    return (
      <>
        <h1>{this.personNames(data)}</h1>
        <h1></h1>
      </>
    );
  }
}
