import React, { Component } from "react";
import MemberRegister from "./Member_register";
import MemberLogin from "./Member_login";
import Axios from "axios";
import qs from "qs";

export class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      nama_lengkap: "",
      no_telp: "",
      alamat: "",
      password: "",
      isLogin: "",
      userLogin: []
    };
    this.registerData = this.registerData.bind(this);
    //this.LoginData = this.LoginData.bind(this);
  }

  registerData = data_member => {
    Axios.post(
      "https://api.bnwbarbershop.com/api/member/insert_member",
      qs.stringify(data_member)
    )
      .then(response => {
        //this.props.history.goBack();
        this.backtoHomepage();
        console.log("Sukses Daftar");
      })
      .catch(err => {
        console.log(err);
        console.log(this.response);
      });
  };

  backtoHomepage = () => {
    this.props.history.push("/");
  };

  //handle change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      nama_lengkap,
      no_telp,
      alamat,
      password,
      isLogin,
      userLogin
    } = this.state;
    const values = {
      nama_lengkap,
      no_telp,
      alamat,
      password,
      isLogin,
      userLogin
    };

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
