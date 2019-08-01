import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/image/logo.svg"; // logo import
//import Dataadmin from "./DataAdmin";
import Dashboard from "./Dashboard";
//import Login from "../Login/Login";

class Navbar_admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Admin: this.props.data
    };
  }
  render() {
    console.log(this.props);
    const { data } = this.props.location;
    //const { Admin } = this.state.Admin;
    return (
      <div>
        <nav className="grey darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              &nbsp;
            </a>
            <NavLink
              to="#"
              data-target="main-menu"
              className="sidenav-trigger button-collapse show-on-large"
            >
              <i className="fa fa-bars" />
            </NavLink>
            <ul className="right hide-on-small-only">
              <li>
                <NavLink
                  to="/admin/login"
                  onClick={() => window.location.refresh()}
                >
                  <i className="fa fa-user" />
                  &nbsp; LOGOUT {data.username}
                </NavLink>
              </li>
            </ul>
            <ul
              className="sidenav sidenav-fixed blue-grey lighten-5"
              id="main-menu"
            >
              <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
              </NavLink>
              <li>
                <NavLink to="/admin">
                  <i className="fa fa-tachometer" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/administrator">
                  <i className="fa fa-user" />
                  Data Admin
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/barbershop">
                  <i className="fa fa-building" />
                  Data Barbershop
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/member">
                  <i className="fa fa-users" />
                  Data Member
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/stylist">
                  <i className="fa fa-user-circle" />
                  Data Stylist
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/category">
                  <i className="fa fa-table" />
                  Kategori Model Rambut
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/hairstyle">
                  <i className="fa fa-scissors" />
                  Data Model Rambut
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/feedback">
                  <i className="fa fa-comments" />
                  Data Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/broadcast">
                  <i className="fa fa-bullhorn" />
                  Broadcast Pesan
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/pengumuman">
                  <i className="fa fa-pencil-square-o" />
                  Data Pengumuman
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/about">
                  <i className="fa fa-question-circle" />
                  Tentang Kami
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Dashboard />
      </div>
    );
  }
}

export default Navbar_admin;
