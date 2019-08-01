import React, { Component } from "react";
import MemberRegister from "./Member_register";
import MemberLogin from "./Member_login";
import Axios from "axios";

export class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      nama_lengkap: "",
      no_telp: "",
      alamat: "",
      password: ""
    };
  }

  registerData = data_member => {
    Axios.request({
      method: "post",
      url: "http://localhost:3000/api/member",
      data: data_member
    })
      .then(response => {
        //this.props.history.goBack();
        console.log("Sukses Daftar");
      })
      .catch(err => console.log(err));
  };

  backtoHomepage = () => {
    this.props.history.push("/");
  };

  //handle change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { nama_lengkap, no_telp, alamat, password } = this.state;
    const values = { nama_lengkap, no_telp, alamat, password };

    if (window.location.pathname === "/register") {
      return (
        <MemberRegister
          handleChange={this.handleChange}
          registerData={this.registerData}
          values={values}
          backtoHomepage={this.backtoHomepage}
        />
      );
    } else if (window.location.pathname === "/login") {
      return <MemberLogin handleChange={this.handleChange} values={values} />;
    } else {
      return (
        <div>
          <h1>ERROR</h1>
        </div>
      );
    }
  }
}

export default Member;
