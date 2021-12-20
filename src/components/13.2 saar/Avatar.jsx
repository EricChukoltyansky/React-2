import React from "react";

class Avatar extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.user.picture.large} alt="person pic" />
        </div>
        <div className="content">
          <div className="header">
            {this.props.user.name.first} {this.props.user.name.last}
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
