import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo from "../../Assets/image/logo.svg"; // logo import
//import Dataadmin from "./DataAdmin";
//import Dashboard from "./Dashboard";

class Logout_admin extends Component {
  reset() {
    //this.setState(Admin);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to="/logout" onClick={this.reset}>
          Logout Admin
        </Link>
      </div>
    );
  }
}

export default Logout_admin;
