import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Login from "./Components/Login/Login";
//import Main from "./Components/Main";
//import AdminLogin from "./Components/admin/Admin_login";
//import Dashboard from "./Components/Dashboard";
//import AdminLogin from "./Components/admin/AdminLogin";
//import Dataadmin from "./Components/admin/DataAdmin";
import Navbaradmin from "./Components/admin/Navbar_admin";
import Navbar from "./Components/Navbar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Admin: []
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route
            exact
            path="/admin/login"
            name="adminlogin"
            component={Login}
          />

          <Route
            exact
            path="/admin"
            name="admindashboard"
            render={props => (
              <Navbaradmin {...props} username={this.state.Admin} />
            )}
          />

          <Route>
            <Navbar />
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
