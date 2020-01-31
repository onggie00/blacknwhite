import React, { Component } from "react";
import logo from "../../Assets/image/logo/logo_black.png"; // logo import
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBView,
  MDBMask,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBNotification
} from "mdbreact";
import Axios from "axios";

export class Member_register extends Component {
  constructor(props) {
    super(props);
    this.nama_lengkap = React.createRef();
    this.notelp = React.createRef();
    this.alamat = React.createRef();
    this.password = React.createRef();
    this.state = {
      isRegistered: 0
    };
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  checkData = data_member => {
    Axios.get("https://api.bnwbarbershop.com/api/member/cek_member", {
      params: {
        notelp: data_member.notelp
      }
    })
      .then(response => {
        //console.log(response);
        if (response.data.status === 1) {
          this.setState({
            isRegistered: 1
          });
        } else {
          this.setState({
            isRegistered: 2
          });
          this.props.registerData(data_member);
        }
      })
      .catch(err => {
        //handle error
        //console.log(this.response);
      });
  };

  onSubmit(e) {
    const data_member = {
      nama_lengkap: this.nama_lengkap.current.state.innerValue,
      notelp: this.notelp.current.state.innerValue,
      alamat: this.alamat.current.state.innerValue,
      password: this.password.current.state.innerValue
    };
    this.checkData(data_member);
    //console.log(data_member);
    e.preventDefault();
  }

  render() {
    //const { values, handleChange, registerData } = this.props;
    return (
      <div name="Form_Registrasi">
        <MDBContainer fluid>
          <MDBRow center className="register-left-bg">
            <MDBCol lg="8" md="6" sm="12" className="register-left">
              <MDBContainer fluid>
                <MDBView waves className="bg-register">
                  <MDBMask overlay="black-slight" className="flex-center">
                    <MDBRow middle className="register-text">
                      <MDBCol lg="8" md="6" sm="12" />
                    </MDBRow>
                  </MDBMask>
                </MDBView>
              </MDBContainer>
            </MDBCol>
            <MDBCol lg="4" md="6" sm="12">
              <MDBContainer className="register-form">
                <MDBRow>
                  <MDBCol size="12">
                    {this.state.isRegistered === 1 && (
                      <MDBNotification
                        show
                        fade
                        icon="exclamation"
                        iconClassName="red-text"
                        title="Notifikasi"
                        message="Mohon Maaf Nomor Tersebut Sudah Terdaftar."
                        text="1 detik yang lalu"
                      />
                    )}
                    {this.state.isRegistered === 2 && (
                      <MDBNotification
                        show
                        fade
                        icon="check-circle"
                        iconClassName="green-text"
                        title="Notifikasi"
                        message="Pendaftaran Berhasil."
                        text="1 detik yang lalu"
                      />
                    )}
                    <MDBCard>
                      <MDBCardBody>
                        <form
                          onSubmit={this.onSubmit.bind(this)}
                          encType="multipart/form-data"
                        >
                          <img
                            width="90"
                            height="90"
                            src={logo}
                            className="mx-auto d-block"
                            alt="logo bnw"
                          />
                          <p className="h5 text-center mt-3 mb-4">
                            Form Pendaftaran Member
                          </p>
                          <div className="grey-text">
                            <MDBInput
                              label="Nama Lengkap"
                              icon="user"
                              group
                              type="text"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.nama_lengkap}
                            />
                            <MDBInput
                              label="Nomor Telepon"
                              icon="mobile"
                              group
                              type="text"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.notelp}
                            />
                            <MDBInput
                              label="Alamat"
                              icon="home"
                              group
                              type="text"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.alamat}
                            />
                            <MDBInput
                              label="Password"
                              icon="lock"
                              group
                              type="password"
                              validate
                              success="Valid"
                              required
                              className="form-control"
                              ref={this.password}
                            />
                          </div>
                          <div className="text-center">
                            <MDBBtn type="submit" color="primary">
                              Daftar
                            </MDBBtn>
                            <MDBBtn
                              onClick={this.props.backtoHomepage}
                              type="button"
                              color="secondary"
                            >
                              Kembali Ke halaman Awal
                            </MDBBtn>
                          </div>
                        </form>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Member_register;
