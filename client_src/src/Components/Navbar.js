import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/image/logo.png"; // logo import

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Admin: []
    };
  }

  render() {
    return (
      <div>
        <nav className="grey darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img src={logo} alt="logo" />
            </a>
            <Link
              to="#"
              data-target="main-menu"
              className="sidenav-trigger button-collapse show-on-large"
            >
              <i className="fa fa-bars" />
            </Link>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/antrian">Ambil Antrian</Link>
              </li>
              <li>
                <Link to="/contact">Kontak kami</Link>
              </li>
              <li>
                <Link to="/about">Tentang Kami</Link>
              </li>
            </ul>
            <ul className="sidenav sidenav-close" id="main-menu">
              <li>
                <Link to="/admin/login">
                  <i className="fa fa-scissors" />
                  Administrator
                </Link>
              </li>
              <li>
                <Link to="/member/add">
                  <i className="fa fa-plus" />
                  Daftar Member
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  <i className="fa fa-table" />
                  Lihat Model Rambut
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <i className="fa fa-question-circle" />
                  Tanya Kami
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
