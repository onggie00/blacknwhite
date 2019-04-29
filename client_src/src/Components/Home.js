import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Admin: []
    };
  }

  render() {
    //console.log(this.state.inputuser);
    return (
      <div>
        <p>Homepage</p>
      </div>
    );
  }
}

export default Home;
