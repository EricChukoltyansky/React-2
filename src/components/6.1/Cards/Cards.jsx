import React from "react";
import Card from "./Card";

class Cards extends React.Component {
  render() {
    return (
      <>
        <Card
          image="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Switzerland"
          desc="Wonderful Swtizerland"
        />
        <Card
          image="https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Spain"
          desc="Thrilling Spain"
        />
        <Card
          image="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Germany"
          desc="Chill Germany"
        />
      </>
    );
  }
}

export default Cards;
