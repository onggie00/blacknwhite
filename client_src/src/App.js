import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

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
import Logout from "./Components/admin/Logout_admin";
import Admintable from "./Components/admin/Admin_datatable";
import Member from "./Components/member/Member";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Admin: [],
      is_login: false
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
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
              render={props => <Navbaradmin {...props} />}
              data={this.state.Admin}
            />
            <Route exact path="/logout" name="adminlogout" component={Logout} />
            <Route
              exact
              path="/admin/datatable"
              name="admintable"
              component={Admintable}
            />
            <Route exact path="/register" component={Member} />

            <Route name="not found">
              <Navbar />
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
