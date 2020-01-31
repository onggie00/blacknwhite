import React, { Component } from "react";
import logo from "../Assets/image/logo/logo_black.png"; // logo import
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import EditProfile from "./member/Edit_profile";
import FavouriteModel from "./member/Favourite_model";
import Percobaans from "./member/Percobaan";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      isLogin: this.props.isLogin,
      userLogin: this.props.userLogin,
      editmodal: false,
      toggleEdit: false,
      favouriteModal: false,
      toggleHairstyle: false,
      isFavorit: false
    };
  }

  toggleEdit = () => {
    this.setState({
      editmodal: !this.state.editmodal
    });
  };

  toggleHairstyle = () => {
    this.setState({
      favouriteModal: !this.state.favouriteModal
    });
  };
  handleFavouriteButton = () => {
    this.setState({
      isFavorit: !this.state.isFavorit
    });
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar
              color="elegant-color"
              fixed="top"
              dark
              expand="md"
              scrolling
              transparent
            >
              <MDBNavbarBrand href="/" className="nav_logo">
                <img width="80" height="70" src={logo} alt="logo bnw" />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse
                className="nav_text"
                isOpen={this.state.collapse}
                navbar
              >
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Beranda</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#about"
                      onClick={() => this.props.scrollAbout()}
                    >
                      Tentang Kami
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#antrian"
                      onClick={() => this.props.scrollAntrian()}
                    >
                      Ambil Antrian
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#stylist"
                      onClick={() => this.props.scrollStylist()}
                    >
                      Stylist Kami
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#hairstyle"
                      onClick={() => this.props.scrollHairstyle()}
                    >
                      Hairstyle
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#faq"
                      onClick={() => this.props.scrollFaq()}
                    >
                      Tanya Kami
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#percobaan"
                      onClick={() => this.props.scrollPercobaan()}
                    >
                      Percobaan
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    {this.props.isLogin === false && (
                      <MDBNavLink
                        to="#login_member"
                        onClick={this.props.togglelogin}
                        className="text-right"
                      >
                        Login Member
                      </MDBNavLink>
                    )}
                    {this.props.isLogin === true && (
                      <div>
                        <MDBDropdown className="text-right">
                          <MDBDropdownToggle nav caret>
                            <span className="mr-2">
                              {this.props.userLogin.nama_lengkap}
                            </span>
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem href="#" onClick={this.toggleEdit}>
                              Edit Profile
                            </MDBDropdownItem>
                            <MDBDropdownItem
                              href="#"
                              onClick={this.toggleHairstyle}
                            >
                              Hairstyle Favoritku
                            </MDBDropdownItem>
                            <MDBDropdownItem
                              href="#"
                              onClick={this.props.Logout}
                            >
                              Logout
                            </MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>

                        <MDBModal
                          isOpen={this.state.editmodal}
                          toggle={this.toggleEdit}
                          size="lg"
                        >
                          <MDBModalHeader toggle={this.toggleEdit}>
                            Edit Profile Member
                          </MDBModalHeader>
                          <EditProfile
                            toggleEdit={this.toggleEdit}
                            logout={this.props.logout}
                            userLogin={this.props.userLogin}
                            isLogin={this.props.isLogin}
                            notelp={this.props.userLogin.notelp}
                            nama_lengkap={this.props.userLogin.nama_lengkap}
                            alamat={this.props.userLogin.alamat}
                          />
                          <MDBModalFooter>
                            <i>
                              {" "}
                              Kosongkan kolom Password bila tidak ingin mengubah
                              password.{" "}
                            </i>
                          </MDBModalFooter>
                        </MDBModal>

                        <MDBModal
                          isOpen={this.state.favouriteModal}
                          toggle={this.toggleHairstyle}
                          size="fluid"
                        >
                          <MDBModalHeader
                            toggle={this.toggleHairstyle}
                          ></MDBModalHeader>
                          <FavouriteModel
                            toggleHairstyle={this.toggleHairstyle}
                            userLogin={this.props.userLogin}
                            isLogin={this.props.isLogin}
                            isFavorit={this.state.isFavorit}
                            handleFavouriteButton={this.handleFavouriteButton}
                          />
                          <MDBModalFooter>
                            <i> </i>
                          </MDBModalFooter>
                        </MDBModal>
                      </div>
                    )}
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default Navbar;
