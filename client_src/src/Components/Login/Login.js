import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Admin: [],
      inputuser: "",
      inputpass: ""
    };
  }

  fetchlogin(adminlogin) {
    Axios.get("http://localhost:3000/api/admin/findOne", {
      params: {
        "filter[where][username]": adminlogin.username,
        "filter[where][password]": adminlogin.password
      }
    })
      .then(response => {
        this.setState(
          {
            Admin: response.data
          },
          () => {
            console.log("Login Success");
            this.props.history.push("/admin");
          }
        );
      })
      .catch(err => {
        //handle error
        if (err.response.status === 404) {
          //console.log("Wrong Username or Password");
          console.log(this.state);
          alert("Wrong Username or Password");
          this.resetInput();
        }
      });
  }

  onSubmit(e) {
    const adminlogin = {
      password: this.refs.password.value,
      username: this.refs.username.value
    };
    this.fetchlogin(adminlogin);
    e.preventDefault();
  }

  //For Input cleaner
  handleChangeuser = event => {
    this.setState({
      inputuser: event.target.value
    });
  };
  handleChangepass = event => {
    this.setState({
      inputpass: event.target.value
    });
  };
  resetInput = () => {
    this.setState({ inputuser: "", inputpass: "" });
  };

  render() {
    //console.log(this.state);
    return (
      <div className="loginlayout">
        <div className="container loginpage">
          <div className="row justify-content-md-center login-main-content">
            <div>
              <h1>LOGIN PAGE</h1>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="input-field">
                <input
                  type="text"
                  name="username"
                  ref="username"
                  value={this.state.inputuser}
                  onChange={this.handleChangeuser}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  ref="password"
                  value={this.state.inputpass}
                  onChange={this.handleChangepass}
                />
                <label htmlFor="password">Password</label>
              </div>
              <input type="submit" value="LOGIN" className="btn" />
              {/*
          Force Reload Link dashboard
        */}
              <Link
                className="btn grey right"
                to="/"
                onClick={() => window.location.refresh()}
              >
                Back
              </Link>
            </form>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Login;
