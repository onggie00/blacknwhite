import React, { Component } from "react";
import logo from "../Assets/image/logo/logo_black.png"; // logo import
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div className="header default">
        <nav className="default no-shadows">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img className="hidden" src={logo} alt="logo" />
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
