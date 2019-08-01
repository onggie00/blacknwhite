import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import MemberLogin from "./member/Member_login";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBNavLink
} from "mdbreact";
import Axios from "axios";
//import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Admin: [],
      modal1: false,
      loginmember: false,
      AboutData: []
    };
  }
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  togglelogin = () => {
    this.setState({
      loginmember: !this.state.loginmember
    });
  };
  toRegister = () => {
    this.props.history.push("/");
  };

  //call function
  componentWillMount() {
    this.getAboutData();
  }

  //get about us
  getAboutData() {
    Axios.get("http://localhost:3000/api/barbershop")
      .then(response => {
        this.setState(
          {
            AboutData: response.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    //console.log(this.state.inputuser);
    const settings = {
      dots: true,
      arrow: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      fade: true
    };

    const settings_multiple = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <MDBContainer fluid>
        <Navbar togglelogin={this.togglelogin} />
        <div className="slick-slider1">
          <Slider {...settings}>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider1.jpg")}
                alt="Slider1"
              />
              <h2 className="white-caption title"> Now Open </h2>
              <p className="white-caption paragraph">
                Best Haircut and Styling Partner
              </p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider2.jpg")}
                alt="Slider2"
              />
              <h2 className="white-caption title_right"> Now Open </h2>
              <p className="white-caption paragraph_right">
                Best Haircut and Styling Partner
              </p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider3.jpg")}
                alt="Slider3"
              />
              <h2 className="white-caption title_right"> Now Open </h2>
              <p className="white-caption paragraph_right">
                Best Haircut and Styling Partner
              </p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider4.jpg")}
                alt="Slider4"
              />
              <h2 className="white-caption title"> Now Open </h2>
              <p className="white-caption paragraph">
                Best Haircut and Styling Partner
              </p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider5.jpg")}
                alt="Slider5"
              />
              <h2 className="white-caption title"> Now Open </h2>
              <p className="white-caption paragraph">
                Best Haircut and Styling Partner
              </p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider6.jpg")}
                alt="Slider6"
              />
              <h2 className="white-caption title"> Now Open </h2>
              <p className="white-caption paragraph">
                Best Haircut and Styling Partner
              </p>
            </div>
          </Slider>
        </div>
        <MDBRow>
          <MDBCol size="12" sm="6" md="12" lg="12">
            <div className="about" id="about">
              {this.state.AboutData.map(AboutItem => (
                <h1 key={"nama" + AboutItem.id}>{AboutItem.nama}</h1>
              ))}
              <h6>Tentang Kami</h6>
              <img
                src={require("./../Assets/image/homepage/about.png")}
                alt="about-us"
              />
              <MDBContainer>
                <MDBRow>
                  <MDBCol size="12" sm="12" md="8" className="offset-sm-2">
                    <p className="subtitle">
                      Selamat Datang di <br /> Black &amp; White Barbershop.
                      Kami siap melayani anda dengan performa terbaik dan
                      kualitas terjamin yang dapat meningkatkan percaya diri
                      anda.
                    </p>
                    <hr />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="12" sm="12" md="8" className="offset-sm-2">
                    {this.state.AboutData.map(AboutItem => (
                      <div key={"about" + AboutItem.id}>
                        <p>
                          Buka Setiap Hari <i> (Senin - Minggu) </i>
                        </p>
                        <p>
                          <MDBIcon icon="door-open" />
                          Jam Buka / Tutup :{" "}
                          {AboutItem.jam_buka + " - " + AboutItem.jam_tutup}
                        </p>
                        <p>
                          <MDBIcon icon="building" /> Lokasi :{" "}
                          {AboutItem.alamat}
                        </p>
                        <p>
                          <MDBIcon icon="phone" /> Telepon : {AboutItem.notelp}
                        </p>
                        <p>
                          <i className="">
                            {AboutItem.owner} <br /> Owner{" "}
                          </i>
                        </p>
                      </div>
                    ))}
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBContainer fluid className="full zoom ambil_antrian">
          <MDBRow middle>
            <MDBCol size="12" sm="12" md="12">
              <p className="title_antrian">Ambil Nomor Antrian</p>
            </MDBCol>
          </MDBRow>
          <MDBRow middle>
            <MDBCol
              size="12"
              sm="12"
              md="6"
              lg="4"
              className="form_antrian offset-md-3 offset-lg-4"
            >
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="text-center mb4">
                      Silahkan Mengisi Form Berikut :
                    </p>
                    <div className="grey-text">
                      <MDBInput
                        label="Nomor Telepon Anda"
                        icon="phone-square"
                        group
                        type="text"
                        validate
                        error="Format Salah"
                        success="Terima Kasih"
                      />
                      <MDBInput
                        label="Nama Anda"
                        icon="user-circle"
                        group
                        type="text"
                        validate
                        error="Format Salah"
                        success="Terima Kasih"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn>Ambil</MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="cloudy-knoxville-gradient" fluid>
          <MDBRow className="top_model">
            <MDBCol middle>
              <h1>Top Model</h1>
              <p className="top_subtitle">Best Model Recommended for You</p>
            </MDBCol>
          </MDBRow>

          <MDBContainer className="top_model_content">
            <MDBRow>
              <MDBCol lg="4" md="4" sm="12" className="text-center">
                <h2>Short Haircuts</h2>
                <Slider {...settings_multiple}>
                  <div className="slide2">
                    <h4 className=""> Crew Cut </h4>
                    <img
                      src={require("./../Assets/image/hairstyle/best/Crew-Cut.jpg")}
                      alt="Slider1"
                    />
                  </div>
                  <div className="slide2">
                    <h4 className=""> Undercut </h4>
                    <img
                      src={require("./../Assets/image/hairstyle/best/Undercut.jpg")}
                      alt="Slider2"
                    />
                  </div>
                </Slider>
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12" className="text-center">
                <h2>Medium Haircuts</h2>
                <Slider {...settings_multiple}>
                  <div className="slide2">
                    <h4 className=""> Crew Cut </h4>
                    <img
                      src={require("./../Assets/image/hairstyle/best/Crew-Cut.jpg")}
                      alt="Slider1"
                    />
                  </div>
                  <div className="slide2">
                    <h4 className=""> Undercut </h4>
                    <img
                      src={require("./../Assets/image/hairstyle/best/Undercut.jpg")}
                      alt="Slider2"
                    />
                  </div>
                </Slider>
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12" className="text-center">
                <h2>Long Haircuts</h2>
                <Slider {...settings_multiple}>
                  <div className="slide2">
                    <h4 className=""> Crew Cut </h4>
                    <img
                      src={require("./../Assets/image/hairstyle/best/Crew-Cut.jpg")}
                      alt="Slider1"
                    />
                  </div>
                  <div className="slide2">
                    <h4 className=""> Undercut </h4>
                    <img
                      src={require("./../Assets/image/hairstyle/best/Undercut.jpg")}
                      alt="Slider2"
                    />
                  </div>
                </Slider>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <MDBRow id="stylist">
            <MDBContainer fluid className="stylist_section">
              <MDBRow>
                <MDBCol middle>
                  <h1>Barber Squad</h1>
                  <p className="stylist_subtitle">Meet The Stylist Team</p>
                </MDBCol>
              </MDBRow>
              <MDBRow center>
                <MDBCol lg="3" md="12" sm="12" className="text-center mb-3">
                  <img
                    src={require("./../Assets/image/homepage/stylist1.jpg")}
                    className="rounded-circle"
                    alt="stylist1"
                  />
                  <p className="stylist_description">
                    <b>Onggie Danny</b>
                    <br />
                    08986170445
                  </p>
                </MDBCol>
                <MDBCol lg="3" md="12" sm="12" className="text-center mb-3">
                  <img
                    src={require("./../Assets/image/homepage/stylist2.jpg")}
                    className="rounded-circle"
                    alt="stylist1"
                  />
                  <p className="stylist_description">
                    <b>Onggie Danny</b>
                    <br />
                    08986170445
                  </p>
                </MDBCol>
                <MDBCol lg="3" md="12" sm="12" className="text-center mb-3">
                  <img
                    src={require("./../Assets/image/homepage/stylist3.jpg")}
                    className="rounded-circle z-depth-1"
                    alt="stylist1"
                  />
                  <p className="stylist_description">
                    <b>Onggie Danny</b>
                    <br />
                    08986170445
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBRow>
          <MDBContainer
            className="hairstyle_model cloudy-knoxville-gradient"
            fluid
          >
            <MDBRow className="text-center">
              <MDBCol lg="12" md="12" sm="12">
                <h1 className="hairstyle_title">Hairstyle Category</h1>
              </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
              <MDBCol lg="12" md="12" sm="12" className="mb-3">
                <MDBBtn className="mb-3" onClick={this.toggle(1)}>
                  Kategori 1
                </MDBBtn>
                <MDBBtn className="mb-3" onClick={this.toggle(1)}>
                  Kategori 1
                </MDBBtn>
                <MDBBtn className="mb-3" onClick={this.toggle(1)}>
                  Kategori 1
                </MDBBtn>
                <MDBBtn className="mb-3" onClick={this.toggle(1)}>
                  Kategori 1
                </MDBBtn>
                <MDBBtn className="mb-3" onClick={this.toggle(1)}>
                  Kategori 1
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>

        <MDBContainer fluid className="footer" id="footer">
          <MDBRow>
            <MDBCol size="12" className="text-center mb-4">
              <p>
                © 2019 Black &amp; White Barbershop all rights reserved. Powered
                by Onggie Danny Susanto
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBModal
          isOpen={this.state.modal1}
          toggle={this.toggle(1)}
          size="fluid"
        >
          <MDBModalHeader toggle={this.toggle(1)}>
            MDBModal title
          </MDBModalHeader>
          <MDBModalBody className="text-center">(...)</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(1)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        <MDBModal isOpen={this.state.loginmember} toggle={this.togglelogin}>
          <MemberLogin
            togglelogin={this.togglelogin}
            toRegister={this.toRegister}
          />
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Home;
