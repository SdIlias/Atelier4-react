import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <h1>
        Me voilà {this.props.nom}, {this.props.prenom}
      </h1>
    );
  }
}




export default Message;