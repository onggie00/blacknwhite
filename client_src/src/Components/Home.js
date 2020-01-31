import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import MemberLogin from "./member/Member_login";
import CekAntrian from "./Cek_nomor_antrian";
import Antrian from "./Antrian";
import Faq from "./Faq";
import Percobaans from "./member/Percobaan";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import Axios from "axios";
import ls from "local-storage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Admin: [],
      antriNotelp: null,
      modal1: false,
      modalHighlight: false,
      loginmember: false,
      AboutData: [],
      StylistData: [],
      isLogin: false,
      userLogin: [],
      isLoading: true,
      isReserve: false,
      antrianCustomer: [],
      ModelRambutData: [],
      HighlightData: [],
      detailHighlight: [],
      isPromo: false,
      isCheck: "",
      isCheckMsg: ""
    };
    this.aboutRef = React.createRef();
    this.antrianRef = React.createRef();
    this.stylistRef = React.createRef();
    this.hairstyleRef = React.createRef();
    this.faqRef = React.createRef();
    this.topRef = React.createRef();
    this.percobaan = React.createRef();
  }
  scrollToTop = () =>
    this.topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  scrollAbout = () =>
    this.aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  scrollAntrian = () =>
    this.antrianRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  scrollStylist = () =>
    this.stylistRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  scrollHairstyle = () =>
    this.hairstyleRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  scrollFaq = () =>
    this.faqRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  scrollPercobaan = () =>
    this.percobaan.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

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

  toggleHighlight = id => {
    this.setState({
      modalHighlight: !this.state.modalHighlight
    });

    if (id !== null && id !== 0) {
      this.getDetailHighlight(id);
    }
  };

  toRegister = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    this.getAboutData();
    this.getStylistData();
    this.getModelRambutData();
    this.getHighlightData();
    this.setState({
      isLoading: false
    });
    if (ls.get("isLogin") !== null) {
      this.setState({
        isLogin: ls.get("isLogin"),
        userLogin: ls.get("userLogin")
      });
    }
  }

  handleLoading = isLoading => {
    this.setState({
      isLoading: isLoading
    });
  };
  handleNomorAntri = data_antri => {
    this.setState({
      isReserve: true,
      antrianCustomer: data_antri
    });
    //console.log(data_antri);
  };

  HandleLoginChange = data_member => {
    if (data_member.isLogin === false) {
      ls.clear();
      this.setState({
        isLogin: data_member.isLogin,
        userLogin: []
      });
    } else {
      this.setState({
        isLogin: data_member.isLogin,
        userLogin: data_member.userLogin
      });
      ls.set("isLogin", this.state.isLogin);
      ls.set("userLogin", this.state.userLogin);
    }
  };

  Logout = () => {
    const data_member = {
      isLogin: false
    };
    this.HandleLoginChange(data_member);
  };

  //get about us
  getAboutData() {
    Axios.get("https://api.bnwbarbershop.com/api/barbershop/get_barbershop")
      .then(response => {
        //console.log(response.data.data);
        this.setState(
          {
            AboutData: response.data.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  //get Stylist
  getStylistData() {
    Axios.get("https://api.bnwbarbershop.com/api/stylist/get_stylist")
      .then(response => {
        //console.log(response.data.data);
        this.setState(
          {
            StylistData: response.data.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  //get Nomor Antri
  getNomorAntri = notelp => {
    this.setState({
      isCheck: "",
      isCheckMsg: ""
    });
    Axios.get(
      "https://api.bnwbarbershop.com/api/antrian/get_antrian_by_notelp",
      {
        params: {
          notelp: notelp
        }
      }
    )
      .then(response => {
        this.setState(
          {
            isReserve: true,
            antrianCustomer: response.data.data,
            isCheck: response.data.status,
            isCheckMsg: response.data.message
          },
          () => {
            //console.log(this.state.antrianData);
          }
        );
        /*response.data.data.map(AntriItem => (
          <h1 key={"nomor" + AntriItem.id}>{AntriItem.nomor}</h1>
        ));*/
      })
      .catch(err => console.log(err));
  };

  //get highlight
  getHighlightData = () => {
    Axios.get("https://api.bnwbarbershop.com/api/highlight/get_highlight")
      .then(response => {
        //console.log(response.data.data);
        this.setState(
          {
            HighlightData: response.data.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  };

  //get detail highlight
  getDetailHighlight = id => {
    Axios.get(
      "https://api.bnwbarbershop.com/api/highlight/get_highlight_by_id",
      {
        params: {
          id: id
        }
      }
    )
      .then(response => {
        if (response.data.data[0].keterangan === "PROMO" && response !== null) {
          this.setState({
            detailHighlight: response.data.data,
            isPromo: true
          });
        } else {
          this.setState(
            {
              detailHighlight: response.data.data,
              isPromo: false
            },
            () => {
              //console.log(this.state.antrianData);
            }
          );
        }
        //console.log(response.data.data[0].keterangan);
      })
      .catch(err => console.log(err));
  };

  //get model_rambut
  getModelRambutData = category_id => {
    Axios.get("https://api.bnwbarbershop.com/api/model_rambut/get_model_rambut")
      .then(response => {
        //console.log(response.data.data);
        this.setState(
          {
            ModelRambutData: response.data.data
          },
          () => {
            //console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  };

  render() {
    //console.log(this.state.inputuser);
    const settings = {
      dots: true,
      arrow: false,
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
      arrow: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const settings_3 = {
      dots: false,
      infinite: true,
      arrow: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <MDBContainer fluid>
        <div ref={this.topRef}></div>
        <Navbar
          togglelogin={this.togglelogin}
          isLogin={this.state.isLogin}
          userLogin={this.state.userLogin}
          Logout={this.Logout}
          HandleLoginChange={this.HandleLoginChange}
          scrollAbout={this.scrollAbout}
          scrollAntrian={this.scrollAntrian}
          scrollStylist={this.scrollStylist}
          scrollHairstyle={this.scrollHairstyle}
          scrollFaq={this.scrollFaq}
          scrollToTop={this.scrollToTop}
          scrollPercobaan={this.scrollPercobaan}
        />

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
              <h2 className="white-caption title_right"> Our Stylist </h2>
              <p className="white-caption paragraph_right">
                Always Ready to Service
              </p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider3.jpg")}
                alt="Slider3"
              />
              <h2 className="white-caption title_right"> Professional </h2>
              <p className="white-caption paragraph_right">
                Our Service Will Make You Satisfied
              </p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider5.jpg")}
                alt="Slider5"
              />
              <h2 className="white-caption title"> For Men </h2>
              <p className="white-caption paragraph">For Men's Only</p>
            </div>
            <div className="slide">
              {" "}
              <img
                src={require("./../Assets/slider/slider6.jpg")}
                alt="Slider6"
              />
              <h2 className="white-caption title"> Efficient </h2>
              <p className="white-caption paragraph">
                Using Internet Techonology to Improve Efficiency
              </p>
            </div>
          </Slider>
        </div>
        <div ref={this.aboutRef}></div>
        <MDBRow>
          <MDBCol size="12" sm="6" md="12" lg="12">
            <div className="about">
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

        <Antrian
          isLogin={this.state.isLogin}
          userLogin={this.state.userLogin}
          isLoading={this.state.isLoading}
          handleLoading={this.handleLoading}
          antriNotelp={this.antriNotelp}
          getNomorAntri={this.getNomorAntri}
          antrianRef={this.antrianRef}
        />

        <CekAntrian
          isLogin={this.state.isLogin}
          userLogin={this.state.userLogin}
          isReserve={this.state.isReserve}
          antrianCustomer={this.state.antrianCustomer}
          getNomorAntri={this.getNomorAntri}
          isCheck={this.state.isCheck}
          isCheckMsg={this.state.isCheckMsg}
        />

        <div ref={this.hairstyleRef}></div>
        <MDBContainer fluid className="top_model cloudy-knoxville-gradient">
          <MDBRow>
            <MDBCol middle>
              <h1>Top Model</h1>
              <p className="top_subtitle">Best Model Recommended for You</p>
            </MDBCol>
          </MDBRow>

          <MDBContainer className="top_model_content">
            <MDBRow>
              <MDBCol lg="4" md="4" sm="12" className="text-center">
                <div>
                  <h2> Short Haircuts </h2>
                </div>
                <Slider {...settings_multiple}>
                  {this.state.ModelRambutData.filter(
                    ModelRambutItem => ModelRambutItem.category_id === "1"
                  ).map(ModelRambutItem => (
                    <div
                      className="slide2"
                      key={"hairstyle" + ModelRambutItem.id}
                    >
                      <h6 className=""> {ModelRambutItem.nama}</h6>
                      <br />
                      <img
                        src={
                          "https://admin.bnwbarbershop.com/assets/image/model_rambut/" +
                          ModelRambutItem.img_file
                        }
                        className="z-depth-1 img-thumbnail"
                        alt={ModelRambutItem.category_name + ModelRambutItem.id}
                      />
                    </div>
                  ))}
                </Slider>
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12" className="text-center">
                <h2>Medium Haircuts</h2>
                <Slider {...settings_multiple}>
                  {this.state.ModelRambutData.filter(
                    ModelRambutItem => ModelRambutItem.category_id === "2"
                  ).map(ModelRambutItem => (
                    <div
                      className="slide2"
                      key={"hairstyle" + ModelRambutItem.id}
                    >
                      <h6 className=""> {ModelRambutItem.nama}</h6>
                      <br />
                      <img
                        src={
                          "https://admin.bnwbarbershop.com/assets/image/model_rambut/" +
                          ModelRambutItem.img_file
                        }
                        className="z-depth-1 img-thumbnail"
                        alt={ModelRambutItem.category_name + ModelRambutItem.id}
                      />
                    </div>
                  ))}
                </Slider>
              </MDBCol>
              <MDBCol lg="4" md="4" sm="12" className="text-center">
                <h2>Long Haircuts</h2>
                <Slider {...settings_multiple}>
                  {this.state.ModelRambutData.filter(
                    ModelRambutItem => ModelRambutItem.category_id === "3"
                  ).map(ModelRambutItem => (
                    <div
                      className="slide2"
                      key={"hairstyle" + ModelRambutItem.id}
                    >
                      <h6 className=""> {ModelRambutItem.nama}</h6>
                      <br />
                      <img
                        src={
                          "https://admin.bnwbarbershop.com/assets/image/model_rambut/" +
                          ModelRambutItem.img_file
                        }
                        className="z-depth-1-half img-thumbnail"
                        alt={ModelRambutItem.category_name + ModelRambutItem.id}
                      />
                    </div>
                  ))}
                </Slider>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
        <div ref={this.stylistRef}></div>
        <MDBContainer fluid className="stylist_section">
          <MDBRow>
            <MDBCol middle>
              <h1>Barber Squad</h1>
              <p className="stylist_subtitle">Meet The Stylist Team</p>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            {this.state.StylistData.map(StylistItem => (
              <MDBCol
                lg="3"
                md="12"
                sm="12"
                className="text-center mb-3"
                key={"nama" + StylistItem.id}
              >
                <img
                  src={
                    "https://admin.bnwbarbershop.com/assets/image/stylist/" +
                    StylistItem.img_file
                  }
                  className="rounded-circle"
                  alt="stylist"
                />
                <p className="stylist_description">
                  <b>{StylistItem.nama_lengkap}</b>
                  <br />
                  {StylistItem.status_aktif}
                </p>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className="highlight">
          <MDBRow className="text-center">
            <MDBCol middle>
              <h1>Highlight</h1>
              <p className="highlight_subtitle">
                Latest Barbershop Promos and News
              </p>
            </MDBCol>
          </MDBRow>
          <MDBContainer>
            <MDBRow middle>
              <MDBCol>
                <Slider {...settings_3} className="highlight_slider">
                  {this.state.isLogin === true &&
                    this.state.HighlightData.map(HighlightItem => (
                      <div className="slide3" key={HighlightItem.id}>
                        <MDBCard
                          className="highlight_card grey lighten-4 z-depth-1"
                          wide
                        >
                          <MDBCardImage
                            top
                            src={
                              "https://admin.bnwbarbershop.com/assets/image/promo_pengumuman/" +
                              HighlightItem.img_file
                            }
                            alt={HighlightItem.category_name + HighlightItem.id}
                            waves
                            hover
                          />
                          <MDBCardBody className="text-center">
                            <MDBCardTitle className="text-left">
                              {HighlightItem.judul_highlight}
                            </MDBCardTitle>
                            <MDBCardText className="text-left">
                              &nbsp;
                            </MDBCardText>
                            <MDBBtn
                              color="stylish-color"
                              className="waves-effect"
                              onClick={this.toggleHighlight.bind(
                                this,
                                HighlightItem.id
                              )}
                            >
                              Lihat Detail
                            </MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </div>
                    ))}
                </Slider>
                {this.state.isLogin === false && (
                  <div>
                    <h1>
                      Silahkan Mendaftar Member untuk melihat Promo dan Berita
                      Barbershop.
                    </h1>
                  </div>
                )}

                {this.state.isPromo === false &&
                  this.state.detailHighlight.map(detailHighlightItem => (
                    <MDBModal
                      size="md"
                      className="modal-notify modal-info text-white"
                      isOpen={this.state.modalHighlight}
                      toggle={this.toggleHighlight.bind(this, 0)}
                      key={detailHighlightItem.id}
                    >
                      <MDBModalHeader
                        toggle={this.toggleHighlight.bind(
                          this,
                          this.state.detailHighlight.id
                        )}
                      >
                        {this.state.detailHighlight.map(detailHighlightItem => (
                          <p key={detailHighlightItem.id}>
                            {detailHighlightItem.judul_highlight}
                          </p>
                        ))}
                      </MDBModalHeader>
                      <MDBModalBody>
                        <MDBRow>
                          <MDBCol
                            size="3"
                            className="d-flex justify-content-center align-items-center"
                          >
                            <MDBIcon size="4x" icon="bell" className="ml-1" />
                          </MDBCol>
                          <MDBCol size="9">
                            <img
                              src={
                                "https://admin.bnwbarbershop.com/assets/image/promo_pengumuman/" +
                                this.state.detailHighlight[0].img_file
                              }
                              alt={"promo" + this.state.detailHighlight[0].id}
                              className="img-fluid"
                              height="300px"
                            />
                            <br />
                            <br />
                            <hr />
                            <p>
                              {
                                this.state.detailHighlight[0]
                                  .deskripsi_highlight
                              }
                            </p>
                            <br />
                            <p className="text-right">
                              {this.state.detailHighlight[0].created_at}
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </MDBModalBody>

                      <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                          color="primary"
                          outline
                          onClick={this.toggleHighlight.bind(this, 0)}
                        >
                          Close Detail
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  ))}
                {this.state.isPromo === true &&
                  this.state.detailHighlight.map(detailHighlightItem => (
                    <MDBModal
                      size="md"
                      className="modal-notify modal-success text-white"
                      isOpen={this.state.modalHighlight}
                      toggle={this.toggleHighlight.bind(this, 0)}
                      key={detailHighlightItem.id}
                    >
                      <MDBModalHeader
                        toggle={this.toggleHighlight.bind(
                          this,
                          this.state.detailHighlight.id
                        )}
                      >
                        {this.state.detailHighlight.map(detailHighlightItem => (
                          <p key={detailHighlightItem.id}>
                            {detailHighlightItem.judul_highlight}
                          </p>
                        ))}
                      </MDBModalHeader>
                      <MDBModalBody>
                        <MDBRow>
                          <MDBCol
                            size="3"
                            className="d-flex justify-content-center align-items-center"
                          >
                            <MDBIcon size="4x" icon="bell" className="ml-1" />
                          </MDBCol>
                          <MDBCol size="9">
                            <img
                              src={
                                "https://admin.bnwbarbershop.com/assets/image/promo_pengumuman/" +
                                this.state.detailHighlight[0].img_file
                              }
                              alt={"promo" + this.state.detailHighlight[0].id}
                              className="img-fluid"
                            />
                            <br />
                            <br />
                            <hr />
                            <p>
                              {
                                this.state.detailHighlight[0]
                                  .deskripsi_highlight
                              }
                            </p>
                            <br />
                            <p className="text-right">
                              {this.state.detailHighlight[0].created_at}
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </MDBModalBody>
                      <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                          color="primary"
                          outline
                          onClick={this.toggleHighlight.bind(this, 0)}
                        >
                          Close Detail
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  ))}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>

        <Faq faqRef={this.faqRef}></Faq>

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
        <Percobaans></Percobaans>
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
            HandleLoginChange={this.HandleLoginChange}
            toggle={this.togglelogin}
          />
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Home;
