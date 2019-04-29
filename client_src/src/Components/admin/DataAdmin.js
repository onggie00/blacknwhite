import React, { Component } from "react";
import Axios from "axios";
//import Adminitem from "./Adminitem";

class DataAdmin extends Component {
  constructor() {
    super();
    this.state = {
      Admin: []
    };
  }

  componentWillMount() {
    this.getAdmin();
  }

  getAdmin() {
    Axios.get("http://localhost:3000/api/admin")
      .then(response => {
        this.setState(
          {
            Admin: response.data
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    const AdminItems = this.state.Admin.map((Admin, i) => {
      //return <Adminitem key={Admin.id} item={Admin} />;
      return (
        <li className="collection-items" key={Admin.id}>
          {" "}
          {Admin.nama_lengkap}{" "}
        </li>
      );
    });
    return (
      <div className="main">
        <h1>Data Admin</h1>
        <ul className="collection">{AdminItems}</ul>
      </div>
    );
  }
}

export default DataAdmin;
